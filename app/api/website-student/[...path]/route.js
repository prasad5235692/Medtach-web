import { NextResponse } from "next/server";

const ACCESS_COOKIE = "medtech_student_access_token";
const REFRESH_COOKIE = "medtech_student_refresh_token";
const ACCESS_MAX_AGE = 60 * 15;
const REFRESH_MAX_AGE = 60 * 60 * 24 * 7;

function getCookieOptions(maxAge) {
  return {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge,
  };
}

function getBackendBaseUrl() {
  const baseUrl = process.env.BASE_URL?.trim();

  if (!baseUrl) {
    throw new Error("BASE_URL is not configured");
  }

  return baseUrl.replace(/\/+$/, "");
}

function buildBackendUrl(segments, searchParams) {
  const queryString = searchParams.toString();
  const routePath = segments.length ? `/${segments.join("/")}` : "";

  return `${getBackendBaseUrl()}/wedstudentuser${routePath}${queryString ? `?${queryString}` : ""}`;
}

function getAccessToken(request) {
  return request.cookies.get(ACCESS_COOKIE)?.value || "";
}

function clearSessionCookies(response) {
  response.cookies.set(ACCESS_COOKIE, "", getCookieOptions(0));
  response.cookies.set(REFRESH_COOKIE, "", getCookieOptions(0));
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

  if (accessToken) {
    headers.Authorization = `Bearer ${accessToken}`;
  }

  if (requestBody !== undefined) {
    headers["Content-Type"] = "application/json";
  }

  try {
    const backendResponse = await fetch(buildBackendUrl(segments, request.nextUrl.searchParams), {
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
      payload = createErrorPayload(rawPayload || "Unexpected backend response");
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

  if (!normalizedPayload?.success) {
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
    ["profile", "cart", "favorites"].includes(segments[0])
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