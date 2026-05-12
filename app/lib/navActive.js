function normalizeRoute(route) {
  if (!route) {
    return "/";
  }

  const normalized = String(route).split(/[?#]/)[0].replace(/\/+$/, "");

  return normalized || "/";
}

export function isRouteActive(pathname, href, options = {}) {
  const { exact = false } = options;
  const currentPath = normalizeRoute(pathname);
  const targetPath = normalizeRoute(href);

  if (targetPath === "/") {
    return currentPath === "/";
  }

  if (exact) {
    return currentPath === targetPath;
  }

  return currentPath === targetPath || currentPath.startsWith(`${targetPath}/`);
}

export function isAnyRouteActive(pathname, hrefs, options = {}) {
  return hrefs.some((href) => isRouteActive(pathname, href, options));
}