import { NextResponse } from "next/server";

const ACCESS_COOKIE = "medtech_student_access_token";
const REFRESH_COOKIE = "medtech_student_refresh_token";
const ACCESS_MAX_AGE = 60 * 15;
const REFRESH_MAX_AGE = 60 * 60 * 24 * 7;
const WEBSITE_STUDENT_ROUTE_BASE = "/wedstudentuser";
const BACKEND_BASE_ENV_KEYS = [
  "WEBSITE_STUDENT_BASE_URL",
  "NEXT_PUBLIC_WEBSITE_STUDENT_BASE_URL",
  "BASE_URL",
  "NEXT_PUBLIC_BASE_URL",
];

function getCookieOptions(maxAge) {
  return {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge,
  };
}

function getConfiguredBackendBaseUrl() {
  for (const envKey of BACKEND_BASE_ENV_KEYS) {
    const envValue = process.env[envKey]?.trim();

    if (envValue) {
      return envValue.replace(/\/+$/, "");
    }
  }

  throw new Error(
    `Student website backend URL is not configured. Set one of: ${BACKEND_BASE_ENV_KEYS.join(", ")}`,
  );
}

function getBackendBaseUrl() {
  const baseUrl = getConfiguredBackendBaseUrl();

  if (/\/wedstudentuser$/i.test(baseUrl)) {
    return baseUrl;
  }

  return `${baseUrl}${WEBSITE_STUDENT_ROUTE_BASE}`;
}

function getRoutePath(segments) {
  return segments.length ? `/${segments.join("/")}` : "";
}

function buildBackendUrl(segments, searchParams) {
  const queryString = searchParams.toString();
  const routePath = getRoutePath(segments);

  return `${getBackendBaseUrl()}${routePath}${queryString ? `?${queryString}` : ""}`;
}

function getAccessToken(request) {
  return request.cookies.get(ACCESS_COOKIE)?.value || "";
}

function clearSessionCookies(response) {
  response.cookies.set(ACCESS_COOKIE, "", getCookieOptions(0));
  response.cookies.set(REFRESH_COOKIE, "", getCookieOptions(0));
}

function shouldClearSession(payload) {
  return /student authentication required|invalid token|jwt expired|token expired/i.test(
    String(payload?.message || ""),
  );
}

function setSessionCookies(response, authData) {
  if (!authData?.accessToken || !authData?.refreshToken) {
    clearSessionCookies(response);
    return;
  }

  response.cookies.set(ACCESS_COOKIE, authData.accessToken, getCookieOptions(ACCESS_MAX_AGE));
  response.cookies.set(REFRESH_COOKIE, authData.refreshToken, getCookieOptions(REFRESH_MAX_AGE));
}

function normalizeAuthPayload(payload) {
  if (!payload?.success) {
    return payload;
  }

  const userData = payload?.data?.userData || payload?.data || null;

  return {
    ...payload,
    data: {
      userData,
    },
  };
}

function createErrorPayload(message) {
  return {
    success: false,
    message,
    data: [],
  };
}

function normalizeBackendTextError(rawPayload, requestMethod, segments) {
  const textPayload = String(rawPayload || "").trim();

  if (!textPayload) {
    return "Empty backend response";
  }

  const missingRouteMatch = textPayload.match(/Cannot\s+(GET|POST|PATCH|DELETE|PUT|HEAD|OPTIONS)\s+([^<\s]+)/i);

  if (missingRouteMatch) {
    return `Backend route is unavailable at ${missingRouteMatch[2]}. Check WEBSITE_STUDENT_BASE_URL or BASE_URL in the frontend deployment and confirm the website-student router is deployed on the backend.`;
  }

  if (/<!doctype html|<html/i.test(textPayload)) {
    return `Unexpected HTML response from backend for ${requestMethod} ${getRoutePath(segments) || "/"}`;
  }

  return textPayload;
}

async function parseRequestBody(request) {
  if (request.method === "GET" || request.method === "HEAD") {
    return undefined;
  }

  const contentType = request.headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    return request.json().catch(() => ({}));
  }

  const rawBody = await request.text();

  if (!rawBody) {
    return undefined;
  }

  try {
    return JSON.parse(rawBody);
  } catch {
    return undefined;
  }
}

async function proxyToBackend({ request, segments, accessToken }) {
  const headers = {
    Accept: "application/json",
  };
  const requestBody = await parseRequestBody(request);
  let backendUrl = "";

  if (accessToken) {
    headers.Authorization = `Bearer ${accessToken}`;
  }

  if (requestBody !== undefined) {
    headers["Content-Type"] = "application/json";
  }

  try {
    backendUrl = buildBackendUrl(segments, request.nextUrl.searchParams);
  } catch (error) {
    return {
      payload: createErrorPayload(error instanceof Error ? error.message : "Student website backend URL is not configured"),
      status: 500,
    };
  }

  try {
    const backendResponse = await fetch(backendUrl, {
      method: request.method,
      headers,
      body: requestBody !== undefined ? JSON.stringify(requestBody) : undefined,
      cache: "no-store",
    });

    const rawPayload = await backendResponse.text();
    let payload = null;

    try {
      payload = rawPayload ? JSON.parse(rawPayload) : null;
    } catch {
      payload = createErrorPayload(normalizeBackendTextError(rawPayload, request.method, segments));
    }

    return {
      payload: payload || createErrorPayload("Empty backend response"),
      status: backendResponse.ok ? 200 : backendResponse.status || 500,
    };
  } catch {
    return {
      payload: createErrorPayload("Unable to reach the student website API"),
      status: 502,
    };
  }
}

async function handleSessionRequest(request) {
  const accessToken = getAccessToken(request);

  if (!accessToken) {
    const response = NextResponse.json(createErrorPayload("Student authentication required"), {status: 401});
    clearSessionCookies(response);
    return response;
  }

  const {payload} = await proxyToBackend({
    request,
    segments: ["profile"],
    accessToken,
  });
  const normalizedPayload = normalizeAuthPayload(payload);
  const response = NextResponse.json(normalizedPayload, {status: normalizedPayload?.success ? 200 : 401});

  if (!normalizedPayload?.success && shouldClearSession(normalizedPayload)) {
    clearSessionCookies(response);
  }

  return response;
}

async function handleAuthRequest(request, segments) {
  const {payload, status} = await proxyToBackend({
    request,
    segments,
    accessToken: "",
  });
  const normalizedPayload = normalizeAuthPayload(payload);
  const response = NextResponse.json(normalizedPayload, {
    status: normalizedPayload?.success ? 200 : status,
  });

  if (payload?.success) {
    setSessionCookies(response, payload.data);
  } else {
    clearSessionCookies(response);
  }

  return response;
}

async function handleLogoutRequest() {
  const response = NextResponse.json({
    success: true,
    message: "Logged out successfully",
    data: {},
  });

  clearSessionCookies(response);
  return response;
}

async function handleProxyRequest(request, segments) {
  const accessToken = getAccessToken(request);
  const {payload, status} = await proxyToBackend({
    request,
    segments,
    accessToken,
  });
  const response = NextResponse.json(payload, {status});

  if (
    accessToken &&
    !payload?.success &&
    ["profile", "cart", "favorites"].includes(segments[0]) &&
    shouldClearSession(payload)
  ) {
    clearSessionCookies(response);
  }

  return response;
}

async function handleRequest(request, context) {
  const params = await context.params;
  const segments = Array.isArray(params?.path) ? params.path.filter(Boolean) : [];

  if (!segments.length) {
    return NextResponse.json(createErrorPayload("Route not found"), {status: 404});
  }

  if (segments.length === 1 && segments[0] === "logout" && request.method === "POST") {
    return handleLogoutRequest();
  }

  if (segments.length === 1 && segments[0] === "session" && request.method === "GET") {
    return handleSessionRequest(request);
  }

  if (
    segments.length === 1 &&
    ["login", "signup"].includes(segments[0]) &&
    request.method === "POST"
  ) {
    return handleAuthRequest(request, segments);
  }

  return handleProxyRequest(request, segments);
}

export async function GET(request, context) {
  return handleRequest(request, context);
}

export async function POST(request, context) {
  return handleRequest(request, context);
}

export async function PATCH(request, context) {
  return handleRequest(request, context);
}

export async function DELETE(request, context) {
  return handleRequest(request, context);
}