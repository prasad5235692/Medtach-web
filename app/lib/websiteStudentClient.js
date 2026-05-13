const API_BASE = "/api/website-student";
const ACCESS_TOKEN_STORAGE_KEY = "medtech_student_access_token";
const PROTECTED_ROUTE_PREFIXES = ["/profile", "/cart", "/favorites", "/purchases"];

function createFallbackPayload(message) {
  return {
    success: false,
    message,
    data: [],
  };
}

function isBrowser() {
  return typeof window !== "undefined";
}

function isAuthFailureMessage(message) {
  return /authentication required|invalid token|jwt expired|token expired|refresh token|token error/i.test(
    String(message || ""),
  );
}

function isProtectedStudentRoute(path) {
  return PROTECTED_ROUTE_PREFIXES.some((prefix) => path === prefix || path.startsWith(`${prefix}/`));
}

function isFormDataBody(body) {
  return typeof FormData !== "undefined" && body instanceof FormData;
}

function hasHeader(headers, name) {
  return Object.keys(headers || {}).some((key) => key.toLowerCase() === String(name || "").toLowerCase());
}

function getStoredStudentAccessToken() {
  if (!isBrowser()) {
    return "";
  }

  try {
    return String(window.sessionStorage.getItem(ACCESS_TOKEN_STORAGE_KEY) || "").trim();
  } catch {
    return "";
  }
}

function setStoredStudentAccessToken(token) {
  if (!isBrowser()) {
    return;
  }

  try {
    const normalizedToken = String(token || "").trim();

    if (!normalizedToken) {
      window.sessionStorage.removeItem(ACCESS_TOKEN_STORAGE_KEY);
      return;
    }

    window.sessionStorage.setItem(ACCESS_TOKEN_STORAGE_KEY, normalizedToken);
  } catch {
    // Ignore storage failures and rely on httpOnly cookies.
  }
}

function clearStoredStudentAccessToken() {
  if (!isBrowser()) {
    return;
  }

  try {
    window.sessionStorage.removeItem(ACCESS_TOKEN_STORAGE_KEY);
  } catch {
    // Ignore storage failures.
  }
}

function buildRequestHeaders({body, headers, auth}) {
  const nextHeaders = {...(headers || {})};

  if (body !== undefined && body !== null && !isFormDataBody(body) && typeof body !== "string" && !hasHeader(nextHeaders, "Content-Type")) {
    nextHeaders["Content-Type"] = "application/json";
  }

  if (!hasHeader(nextHeaders, "Accept")) {
    nextHeaders.Accept = "application/json";
  }

  if (auth) {
    const accessToken = getStoredStudentAccessToken();

    if (accessToken && !hasHeader(nextHeaders, "Authorization")) {
      nextHeaders.Authorization = `Bearer ${accessToken}`;
    }
  }

  return Object.keys(nextHeaders).length ? nextHeaders : undefined;
}

function buildRequestBody(body, headers) {
  if (body === undefined || body === null) {
    return undefined;
  }

  if (isFormDataBody(body) || typeof body === "string") {
    return body;
  }

  return hasHeader(headers, "Content-Type") ? JSON.stringify(body) : body;
}

function handleAuthPayload(path, method, payload, auth) {
  if (payload?.success && payload?.data?.accessToken) {
    setStoredStudentAccessToken(payload.data.accessToken);
    return payload;
  }

  if (path === "/logout") {
    clearStoredStudentAccessToken();
    return payload;
  }

  if (!payload?.success && (auth || isProtectedStudentRoute(path)) && isAuthFailureMessage(payload?.message)) {
    clearStoredStudentAccessToken();
    console.warn(`[website-student client] ${method} ${path} authorization failed`, {
      message: payload?.message || "Unknown authentication error",
    });
  }

  return payload;
}

function toQueryString(query) {
  const searchParams = new URLSearchParams();

  Object.entries(query || {}).forEach(([key, value]) => {
    if (value === undefined || value === null || value === "") {
      return;
    }

    searchParams.set(key, String(value));
  });

  const queryString = searchParams.toString();
  return queryString ? `?${queryString}` : "";
}

async function request(path, options = {}) {
  const {
    method = "GET",
    body,
    query,
    headers,
    auth = isProtectedStudentRoute(path),
    credentials = "include",
  } = options;
  const requestHeaders = buildRequestHeaders({body, headers, auth});

  try {
    const response = await fetch(`${API_BASE}${path}${toQueryString(query)}`, {
      method,
      headers: requestHeaders,
      body: buildRequestBody(body, requestHeaders),
      credentials,
      cache: "no-store",
    });

    const payload = await response.json().catch(() => createFallbackPayload("Unable to parse response"));

    return handleAuthPayload(path, method, payload, auth);
  } catch {
    return createFallbackPayload("Unable to reach the student website API");
  }
}

function requestWithProgress(path, options = {}) {
  const {
    method = "POST",
    body,
    onProgress,
    headers,
    auth = isProtectedStudentRoute(path),
  } = options;
  const requestHeaders = buildRequestHeaders({body, headers, auth});

  return new Promise((resolve) => {
    try {
      const xhr = new XMLHttpRequest();

      xhr.open(method, `${API_BASE}${path}`, true);
      xhr.withCredentials = true;
      xhr.responseType = "json";

      Object.entries(requestHeaders || {}).forEach(([name, value]) => {
        xhr.setRequestHeader(name, value);
      });

      xhr.upload.onprogress = (event) => {
        if (!event.lengthComputable || typeof onProgress !== "function") {
          return;
        }

        onProgress(Math.min(99, Math.round((event.loaded / event.total) * 100)));
      };

      xhr.onload = () => {
        if (typeof onProgress === "function") {
          onProgress(100);
        }

        let payload = xhr.response && typeof xhr.response === "object" ? xhr.response : null;

        if (!payload) {
          try {
            payload = xhr.responseText ? JSON.parse(xhr.responseText) : null;
          } catch {
            payload = null;
          }
        }

        resolve(handleAuthPayload(
          path,
          method,
          payload || createFallbackPayload("Unable to parse response"),
          auth,
        ));
      };

      xhr.onerror = () => {
        resolve(createFallbackPayload("Unable to reach the student website API"));
      };

      xhr.send(buildRequestBody(body || {}, requestHeaders));
    } catch {
      resolve(createFallbackPayload("Unable to reach the student website API"));
    }
  });
}

export function loginStudent(payload) {
  return request("/login", {method: "POST", body: payload});
}

export function signupStudent(payload) {
  return request("/signup", {method: "POST", body: payload});
}

export function prepareStudentProfilePhotoUpload() {
  return request("/uploads/profile-photo/signature", {
    method: "POST",
    body: {},
  });
}

export function uploadStudentProfilePhoto(payload, onProgress) {
  return requestWithProgress("/uploads/profile-photo", {
    method: "POST",
    body: payload,
    onProgress,
  });
}

export function replaceStudentProfilePhoto(payload, onProgress) {
  void onProgress;

  return request("/profile/photo", {
    method: "POST",
    body: payload,
    auth: true,
  });
}

export function fetchStudentSession() {
  return request("/session", {auth: true});
}

export function logoutStudent() {
  return request("/logout", {method: "POST"}).then((payload) => {
    clearStoredStudentAccessToken();
    return payload;
  });
}

export function fetchStudentCourses(query) {
  return request("/courses", {query});
}

export function purchaseStudentCourse(courseIdOrSlug) {
  return request("/purchases", {
    method: "POST",
    body: {slug: courseIdOrSlug},
  });
}

export function cancelStudentCoursePurchase(courseIdOrSlug) {
  return request(`/purchases/${encodeURIComponent(courseIdOrSlug)}`, {
    method: "PATCH",
  });
}

export function fetchStudentCart() {
  return request("/cart", {auth: true});
}

export function addStudentCartItem(courseIdOrSlug) {
  return request("/cart", {
    method: "POST",
    body: {slug: courseIdOrSlug},
    auth: true,
  });
}

export function removeStudentCartItem(courseId) {
  return request(`/cart/${encodeURIComponent(courseId)}`, {method: "DELETE", auth: true});
}

export function fetchStudentFavorites() {
  return request("/favorites", {auth: true});
}

export function addStudentFavoriteItem(courseIdOrSlug) {
  return request("/favorites", {
    method: "POST",
    body: {slug: courseIdOrSlug},
    auth: true,
  });
}

export function removeStudentFavoriteItem(courseId) {
  return request(`/favorites/${encodeURIComponent(courseId)}`, {method: "DELETE", auth: true});
}

export function fetchStudentPurchases() {
  return request("/purchases", {auth: true});
}

export function updateStudentProfile(payload) {
  return request("/profile", {method: "PATCH", body: payload, auth: true});
}