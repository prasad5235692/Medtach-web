const API_BASE = "/api/website-student";

function createFallbackPayload(message) {
  return {
    success: false,
    message,
    data: [],
  };
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
  const {method = "GET", body, query} = options;

  try {
    const response = await fetch(`${API_BASE}${path}${toQueryString(query)}`, {
      method,
      headers: body ? {"Content-Type": "application/json"} : undefined,
      body: body ? JSON.stringify(body) : undefined,
      credentials: "same-origin",
      cache: "no-store",
    });

    const payload = await response.json().catch(() => createFallbackPayload("Unable to parse response"));

    return payload;
  } catch {
    return createFallbackPayload("Unable to reach the student website API");
  }
}

function requestWithProgress(path, options = {}) {
  const {method = "POST", body, onProgress} = options;

  return new Promise((resolve) => {
    try {
      const xhr = new XMLHttpRequest();

      xhr.open(method, `${API_BASE}${path}`, true);
      xhr.withCredentials = true;
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.responseType = "json";

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

        resolve(payload || createFallbackPayload("Unable to parse response"));
      };

      xhr.onerror = () => {
        resolve(createFallbackPayload("Unable to reach the student website API"));
      };

      xhr.send(JSON.stringify(body || {}));
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

export function uploadStudentProfilePhoto(payload, onProgress) {
  return requestWithProgress("/uploads/profile-photo", {
    method: "POST",
    body: payload,
    onProgress,
  });
}

export function replaceStudentProfilePhoto(payload, onProgress) {
  return requestWithProgress("/profile/photo", {
    method: "POST",
    body: payload,
    onProgress,
  });
}

export function fetchStudentSession() {
  return request("/session");
}

export function logoutStudent() {
  return request("/logout", {method: "POST"});
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
  return request("/cart");
}

export function addStudentCartItem(courseIdOrSlug) {
  return request("/cart", {
    method: "POST",
    body: {slug: courseIdOrSlug},
  });
}

export function removeStudentCartItem(courseId) {
  return request(`/cart/${encodeURIComponent(courseId)}`, {method: "DELETE"});
}

export function fetchStudentFavorites() {
  return request("/favorites");
}

export function addStudentFavoriteItem(courseIdOrSlug) {
  return request("/favorites", {
    method: "POST",
    body: {slug: courseIdOrSlug},
  });
}

export function removeStudentFavoriteItem(courseId) {
  return request(`/favorites/${encodeURIComponent(courseId)}`, {method: "DELETE"});
}

export function fetchStudentPurchases() {
  return request("/purchases");
}

export function updateStudentProfile(payload) {
  return request("/profile", {method: "PATCH", body: payload});
}