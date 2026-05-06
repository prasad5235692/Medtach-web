"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { fetchStudentSession, logoutStudent } from "@/lib/websiteStudentClient";

const AuthContext = createContext(null);
const SESSION_STORAGE_KEY = "medtech_student_session";

function getSessionUser(payload) {
  return payload?.data?.userData || payload?.data || null;
}

function getStoredSession() {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const rawValue = window.localStorage.getItem(SESSION_STORAGE_KEY);
    return rawValue ? JSON.parse(rawValue) : null;
  } catch {
    return null;
  }
}

function setStoredSession(session) {
  if (typeof window === "undefined") {
    return;
  }

  try {
    if (session) {
      window.localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(session));
      return;
    }

    window.localStorage.removeItem(SESSION_STORAGE_KEY);
  } catch {
    // Ignore storage errors and keep auth state in memory.
  }
}

function isAuthFailureMessage(message) {
  return /authentication required|invalid token|jwt expired|token expired/i.test(String(message || ""));
}

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null); // null = loading, false = guest, object = logged in
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const hydrateSession = async (showLoader = false) => {
      const storedSession = getStoredSession();

      if (showLoader && !storedSession) {
        setLoading(true);
      }

      const payload = await fetchStudentSession();

      if (cancelled) {
        return;
      }

      if (payload?.success) {
        const nextSession = getSessionUser(payload);
        setStoredSession(nextSession);
        setSession(nextSession);
      } else if (storedSession && !isAuthFailureMessage(payload?.message)) {
        setSession(storedSession);
      } else if (storedSession && isAuthFailureMessage(payload?.message)) {
        setSession(storedSession);
      } else {
        setStoredSession(null);
        setSession(false);
      }

      setLoading(false);
    };

    const storedSession = getStoredSession();

    if (storedSession) {
      setSession(storedSession);
      setLoading(false);
    }

    hydrateSession(!storedSession);

    const handlePageShow = () => {
      hydrateSession(false);
    };

    window.addEventListener("pageshow", handlePageShow);

    return () => {
      cancelled = true;
      window.removeEventListener("pageshow", handlePageShow);
    };
  }, []);

  const saveSession = (data) => {
    const nextSession = data || false;
    setStoredSession(nextSession || null);
    setSession(nextSession);
    setLoading(false);
  };

  const logout = async () => {
    setStoredSession(null);
    setSession(false);
    setLoading(false);
    await logoutStudent();
  };

  return (
    <AuthContext.Provider value={{ session, loading, saveSession, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}
