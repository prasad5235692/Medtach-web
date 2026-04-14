const API_BASE = "/api/website-student";

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

    const payload = await response.json().catch(() => ({
      success: false,
      message: "Unable to parse response",
      data: [],
    }));

    return payload;
  } catch {
    return {
      success: false,
      message: "Unable to reach the student website API",
      data: [],
    };
  }
}

export function loginStudent(payload) {
  return request("/login", {method: "POST", body: payload});
}

export function signupStudent(payload) {
  return request("/signup", {method: "POST", body: payload});
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