"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { fetchStudentSession, logoutStudent } from "@/lib/websiteStudentClient";

const AuthContext = createContext(null);

function getSessionUser(payload) {
  return payload?.data?.userData || payload?.data || null;
}

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null); // null = loading, false = guest, object = logged in
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const hydrateSession = async (showLoader = false) => {
      if (showLoader) {
        setLoading(true);
      }

      const payload = await fetchStudentSession();

      if (cancelled) {
        return;
      }

      if (payload?.success) {
        setSession(getSessionUser(payload));
      } else {
        setSession(false);
      }

      setLoading(false);
    };

    hydrateSession(true);

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
    setSession(data || false);
    setLoading(false);
  };

  const logout = async () => {
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
