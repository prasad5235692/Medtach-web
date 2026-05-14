import { NextResponse } from "next/server";

const BACKEND_ROUTE_BASE = "/webInternshipuser";
const BACKEND_BASE_ENV_KEYS = ["WEBSITE_STUDENT_BASE_URL", "NEXT_PUBLIC_WEBSITE_STUDENT_BASE_URL"];
const DEFAULT_BACKEND_BASE_URLS = ["https://app-6rgaaxy4aq-uc.a.run.app"];

function normalizeBackendBaseUrl(baseUrl) {
  return String(baseUrl || "")
    .trim()
    .replace(/\/+$/, "")
    .replace(/\/(?:wedstudentuser|webcontactuser|webinternshipuser|webInternshipuser)$/i, "");
}

function getBackendBaseUrls() {
  const resolvedBaseUrls = [];
  const seenBaseUrls = new Set();

  BACKEND_BASE_ENV_KEYS.forEach((envKey) => {
    const normalizedBaseUrl = normalizeBackendBaseUrl(process.env[envKey]);

    if (!normalizedBaseUrl || seenBaseUrls.has(normalizedBaseUrl)) {
      return;
    }

    seenBaseUrls.add(normalizedBaseUrl);
    resolvedBaseUrls.push(normalizedBaseUrl);
  });

  if (resolvedBaseUrls.length > 0) {
    return resolvedBaseUrls;
  }

  DEFAULT_BACKEND_BASE_URLS.forEach((baseUrl) => {
    const normalizedBaseUrl = normalizeBackendBaseUrl(baseUrl);

    if (!normalizedBaseUrl || seenBaseUrls.has(normalizedBaseUrl)) {
      return;
    }

    seenBaseUrls.add(normalizedBaseUrl);
    resolvedBaseUrls.push(normalizedBaseUrl);
  });

  return resolvedBaseUrls;
}

function createErrorPayload(message) {
  return {
    success: false,
    message,
    data: [],
  };
}

async function parseBackendPayload(response) {
  const responseText = await response.text();

  if (!responseText) {
    return createErrorPayload("Empty backend response");
  }

  try {
    return JSON.parse(responseText);
  } catch {
    return createErrorPayload("Unable to parse backend response");
  }
}

export async function POST(request) {
  const payload = await request.json().catch(() => null);

  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return NextResponse.json(createErrorPayload("Invalid request body"), {
      status: 400,
    });
  }

  let lastFailure = null;

  for (const backendBaseUrl of getBackendBaseUrls()) {
    try {
      const response = await fetch(`${backendBaseUrl}${BACKEND_ROUTE_BASE}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        cache: "no-store",
      });
      const responsePayload = await parseBackendPayload(response);

      if (response.ok) {
        return NextResponse.json(responsePayload, {
          status: response.status,
        });
      }

      lastFailure = {
        status: response.status,
        payload: responsePayload,
      };
    } catch (error) {
      lastFailure = {
        status: 502,
        payload: createErrorPayload("Unable to reach the internship API"),
      };
      console.warn("[webinternshipuser proxy] backend request failed", {
        backendBaseUrl,
        message: error instanceof Error ? error.message : String(error),
      });
    }
  }

  return NextResponse.json(
    lastFailure?.payload || createErrorPayload("Unable to reach the internship API"),
    {
      status: lastFailure?.status || 502,
    },
  );
}