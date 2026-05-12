import { NextResponse } from "next/server";

const ACCESS_COOKIE = "medtech_student_access_token";
const REFRESH_COOKIE = "medtech_student_refresh_token";
const BACKEND_BASE_COOKIE = "medtech_student_backend_base_url";
const ACCESS_MAX_AGE = 60 * 15;
const REFRESH_MAX_AGE = 60 * 60 * 24 * 7;
const WEBSITE_STUDENT_ROUTE_BASE = "/wedstudentuser";
const PROTECTED_WEBSITE_STUDENT_SEGMENTS = new Set(["profile", "cart", "favorites", "purchases"]);
const BACKEND_BASE_ENV_KEY = "NEXT_PUBLIC_WEBSITE_STUDENT_BASE_URL";

function getCookieOptions(maxAge) {
  return {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge,
  };
}

function normalizeBackendBaseUrl(baseUrl) {
  return String(baseUrl || "").trim().replace(/\/+$/, "");
}

function getBackendBaseUrlVariants(baseUrl) {
  const normalizedBaseUrl = normalizeBackendBaseUrl(baseUrl);

  if (!normalizedBaseUrl) {
    return [];
  }

  if (/\/wedstudentuser$/i.test(normalizedBaseUrl)) {
    return [normalizedBaseUrl];
  }

  return [normalizedBaseUrl, `${normalizedBaseUrl}${WEBSITE_STUDENT_ROUTE_BASE}`];
}

function getBackendBaseUrlCandidates() {
  const baseUrls = [];
  const seenBaseUrls = new Set();

  getBackendBaseUrlVariants(process.env[BACKEND_BASE_ENV_KEY]).forEach((baseUrl) => {
    appendBackendBaseUrl(baseUrls, seenBaseUrls, baseUrl);
  });

  return baseUrls;
}

function getBackendBaseUrl() {
  const [baseUrl] = getBackendBaseUrlCandidates();

  if (baseUrl) {
    return baseUrl;
  }

  throw new Error(
    `Student website backend URL is not configured. Set ${BACKEND_BASE_ENV_KEY}.`,
  );
}

function getRoutePath(segments) {
  return segments.length ? `/${segments.join("/")}` : "";
}

function isProtectedWebsiteStudentRoute(segments) {
  return PROTECTED_WEBSITE_STUDENT_SEGMENTS.has(String(segments[0] || "").toLowerCase());
}

function buildBackendUrl(baseUrl, segments, searchParams) {
  const queryString = searchParams.toString();
  const routePath = getRoutePath(segments);

  return `${baseUrl}${routePath}${queryString ? `?${queryString}` : ""}`;
}

function getBackendUrlCandidates(segments, searchParams) {
  return getBackendBaseUrlCandidates().map((baseUrl) => buildBackendUrl(baseUrl, segments, searchParams));
}

function appendBackendBaseUrl(baseUrls, seenBaseUrls, baseUrl) {
  getBackendBaseUrlVariants(baseUrl).forEach((candidateBaseUrl) => {
    if (!candidateBaseUrl || seenBaseUrls.has(candidateBaseUrl)) {
      return;
    }

    seenBaseUrls.add(candidateBaseUrl);
    baseUrls.push(candidateBaseUrl);
  });
}

function getPinnedBackendBaseUrl(request) {
  const encodedBaseUrl = request?.cookies.get(BACKEND_BASE_COOKIE)?.value || "";

  if (!encodedBaseUrl) {
    return "";
  }

  try {
    return normalizeBackendBaseUrl(decodeURIComponent(encodedBaseUrl));
  } catch {
    return normalizeBackendBaseUrl(encodedBaseUrl);
  }
}

function getResolvedBackendBaseUrls(
  request,
  backendBaseUrls,
  { includePinnedBackendBaseUrl = true } = {},
) {
  const seenBaseUrls = new Set();
  const resolvedBaseUrls = [];

  if (includePinnedBackendBaseUrl) {
    appendBackendBaseUrl(resolvedBaseUrls, seenBaseUrls, getPinnedBackendBaseUrl(request));
  }

  if (Array.isArray(backendBaseUrls) && backendBaseUrls.length > 0) {
    backendBaseUrls.forEach((baseUrl) => {
      appendBackendBaseUrl(resolvedBaseUrls, seenBaseUrls, baseUrl);
    });
  }

  getBackendBaseUrlCandidates().forEach((baseUrl) => {
    appendBackendBaseUrl(resolvedBaseUrls, seenBaseUrls, baseUrl);
  });

  return resolvedBaseUrls;
}

function getAccessToken(request) {
  return request.cookies.get(ACCESS_COOKIE)?.value || "";
}

function getRefreshToken(request) {
  return request.cookies.get(REFRESH_COOKIE)?.value || "";
}

function clearSessionCookies(response) {
  response.cookies.set(ACCESS_COOKIE, "", getCookieOptions(0));
  response.cookies.set(REFRESH_COOKIE, "", getCookieOptions(0));
  response.cookies.set(BACKEND_BASE_COOKIE, "", getCookieOptions(0));
}

function setPinnedBackendBaseUrl(response, backendBaseUrl) {
  const normalizedBaseUrl = normalizeBackendBaseUrl(backendBaseUrl);

  if (!normalizedBaseUrl) {
    response.cookies.set(BACKEND_BASE_COOKIE, "", getCookieOptions(0));
    return;
  }

  response.cookies.set(
    BACKEND_BASE_COOKIE,
    encodeURIComponent(normalizedBaseUrl),
    getCookieOptions(REFRESH_MAX_AGE),
  );
}

function isAuthFailure(payload) {
  return /student authentication required|invalid token|jwt expired|token expired/i.test(
    String(payload?.message || ""),
  );
}

function shouldClearSession(payload) {
  return isAuthFailure(payload) || /refresh token|token error/i.test(String(payload?.message || ""));
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

function createUnauthorizedResult() {
  return {
    payload: createErrorPayload("Student authentication required"),
    status: 401,
  };
}

function normalizeBackendTextError(rawPayload, requestMethod, segments, backendUrl) {
  const textPayload = String(rawPayload || "").trim();

  if (!textPayload) {
    return "Empty backend response";
  }

  const missingRouteMatch = textPayload.match(/Cannot\s+(GET|POST|PATCH|DELETE|PUT|HEAD|OPTIONS)\s+([^<\s]+)/i);

  if (missingRouteMatch) {
    return `Backend route is unavailable at ${missingRouteMatch[2]} while calling ${backendUrl}. Check ${BACKEND_BASE_ENV_KEY} in the frontend deployment.`;
  }

  if (/<!doctype html|<html/i.test(textPayload)) {
    return `Unexpected HTML response from backend for ${requestMethod} ${getRoutePath(segments) || "/"} via ${backendUrl}`;
  }

  return textPayload;
}

function isRetryableMissingRouteResponse(status, rawPayload) {
  return status === 404 && /Cannot\s+(GET|POST|PATCH|DELETE|PUT|HEAD|OPTIONS)\s+([^<\s]+)/i.test(
    String(rawPayload || ""),
  );
}

function shouldTryNextBackendCandidate(result, rawPayload, retryOnAuthFailure = false) {
  if (isRetryableMissingRouteResponse(result.status, rawPayload)) {
    return true;
  }

  if (retryOnAuthFailure && !result.payload?.success && shouldClearSession(result.payload)) {
    return true;
  }

  return false;
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

async function proxyToBackend({
  request,
  segments,
  accessToken,
  backendBaseUrls: preferredBackendBaseUrls,
  retryOnAuthFailure = false,
}) {
  const headers = {
    Accept: "application/json",
  };
  const requestBody = await parseRequestBody(request);
  let backendBaseUrls = [];

  if (accessToken) {
    headers.Authorization = `Bearer ${accessToken}`;
  }

  if (requestBody !== undefined) {
    headers["Content-Type"] = "application/json";
  }

  try {
    backendBaseUrls = getResolvedBackendBaseUrls(request, preferredBackendBaseUrls, {
      includePinnedBackendBaseUrl: Boolean(accessToken) || retryOnAuthFailure,
    });
  } catch (error) {
    return {
      payload: createErrorPayload(error instanceof Error ? error.message : "Student website backend URL is not configured"),
      status: 500,
    };
  }

  if (!backendBaseUrls.length) {
    return {
      payload: createErrorPayload("Student website backend URL is not configured"),
      status: 500,
    };
  }

  let lastFailure = null;

  for (const backendBaseUrl of backendBaseUrls) {
    const backendUrl = buildBackendUrl(backendBaseUrl, segments, request.nextUrl.searchParams);

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
        payload = createErrorPayload(normalizeBackendTextError(rawPayload, request.method, segments, backendUrl));
      }

      const result = {
        payload: payload || createErrorPayload("Empty backend response"),
        status: backendResponse.ok ? 200 : backendResponse.status || 500,
        backendBaseUrl,
      };

      if (shouldTryNextBackendCandidate(result, rawPayload, retryOnAuthFailure)) {
        lastFailure = result;
        continue;
      }

      return result;
    } catch {
      lastFailure = {
        payload: createErrorPayload(`Unable to reach the student website API via ${backendUrl}`),
        status: 502,
        backendBaseUrl,
      };
    }
  }

  return lastFailure || {
    payload: createErrorPayload("Unable to reach the student website API"),
    status: 502,
  };
}

async function refreshStudentTokens(request) {
  const refreshToken = getRefreshToken(request);

  if (!refreshToken) {
    return createUnauthorizedResult();
  }

  let backendBaseUrls = [];

  try {
    backendBaseUrls = getResolvedBackendBaseUrls(request);
  } catch (error) {
    return {
      payload: createErrorPayload(error instanceof Error ? error.message : "Student website backend URL is not configured"),
      status: 500,
    };
  }

  if (!backendBaseUrls.length) {
    return {
      payload: createErrorPayload("Student website backend URL is not configured"),
      status: 500,
    };
  }

  let lastFailure = createUnauthorizedResult();

  for (const backendBaseUrl of backendBaseUrls) {
    const backendUrl = buildBackendUrl(backendBaseUrl, ["refresh-token"], new URLSearchParams());

    try {
      const backendResponse = await fetch(backendUrl, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ refreshToken }),
        cache: "no-store",
      });

      const rawPayload = await backendResponse.text();
      let payload = null;

      try {
        payload = rawPayload ? JSON.parse(rawPayload) : null;
      } catch {
        payload = createErrorPayload(normalizeBackendTextError(rawPayload, "POST", ["refresh-token"], backendUrl));
      }

      const result = {
        payload: payload || createErrorPayload("Empty backend response"),
        status: backendResponse.ok ? 200 : backendResponse.status || 500,
        backendBaseUrl,
      };

      if (shouldTryNextBackendCandidate(result, rawPayload, true)) {
        lastFailure = result;
        continue;
      }

      return result;
    } catch {
      lastFailure = {
        payload: createErrorPayload(`Unable to reach the student website API via ${backendUrl}`),
        status: 502,
        backendBaseUrl,
      };
    }
  }

  return lastFailure;
}

async function proxyProtectedRequest(request, segments) {
  let accessToken = getAccessToken(request);
  let refreshedAuthData = null;
  let preferredBackendBaseUrls = undefined;

  if (!accessToken) {
    const refreshResult = await refreshStudentTokens(request);

    if (!refreshResult?.payload?.success) {
      return {
        ...createUnauthorizedResult(),
        refreshedAuthData: null,
      };
    }

    accessToken = refreshResult.payload.data?.accessToken || "";
    refreshedAuthData = refreshResult.payload.data || null;
    preferredBackendBaseUrls = refreshResult.backendBaseUrl ? [refreshResult.backendBaseUrl] : undefined;
  }

  let result = await proxyToBackend({
    request,
    segments,
    accessToken,
    backendBaseUrls: preferredBackendBaseUrls,
    retryOnAuthFailure: !preferredBackendBaseUrls,
  });

  if (!result.payload?.success && isAuthFailure(result.payload) && !refreshedAuthData) {
    const refreshResult = await refreshStudentTokens(request);

    if (refreshResult?.payload?.success) {
      refreshedAuthData = refreshResult.payload.data || null;
      preferredBackendBaseUrls = refreshResult.backendBaseUrl ? [refreshResult.backendBaseUrl] : undefined;
      result = await proxyToBackend({
        request,
        segments,
        accessToken: refreshResult.payload.data?.accessToken || "",
        backendBaseUrls: preferredBackendBaseUrls,
      });
    }
  }

  return {
    ...result,
    refreshedAuthData,
  };
}

async function handleSessionRequest(request) {
  const { payload, status, refreshedAuthData, backendBaseUrl } = await proxyProtectedRequest(request, ["profile"]);
  const normalizedPayload = normalizeAuthPayload(payload);
  const response = NextResponse.json(normalizedPayload, {
    status: normalizedPayload?.success || shouldClearSession(normalizedPayload) ? 200 : status,
  });

  if (normalizedPayload?.success && refreshedAuthData) {
    setSessionCookies(response, refreshedAuthData);
  }

  if (normalizedPayload?.success && backendBaseUrl) {
    setPinnedBackendBaseUrl(response, backendBaseUrl);
  } else if (!normalizedPayload?.success && shouldClearSession(normalizedPayload)) {
    clearSessionCookies(response);
  }

  return response;
}

async function handleAuthRequest(request, segments) {
  const {payload, status, backendBaseUrl} = await proxyToBackend({
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
    if (backendBaseUrl) {
      setPinnedBackendBaseUrl(response, backendBaseUrl);
    }
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
  const proxyResult = isProtectedWebsiteStudentRoute(segments) ?
    await proxyProtectedRequest(request, segments) :
    await proxyToBackend({
      request,
      segments,
      accessToken: getAccessToken(request),
    });
  const { payload, status, refreshedAuthData, backendBaseUrl } = proxyResult;
  const response = NextResponse.json(payload, {status});

  if (payload?.success && refreshedAuthData) {
    setSessionCookies(response, refreshedAuthData);
  }

  if (payload?.success && isProtectedWebsiteStudentRoute(segments) && backendBaseUrl) {
    setPinnedBackendBaseUrl(response, backendBaseUrl);
  } else if (!payload?.success && isProtectedWebsiteStudentRoute(segments) && shouldClearSession(payload)) {
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