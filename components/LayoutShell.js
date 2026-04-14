"use client";
import { useLayoutEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthNavbar from "@/components/AuthNavbar";
import AuthFooter from "@/components/AuthFooter";

export default function LayoutShell({ children }) {
  const { session, loading } = useAuth();
  const pathname = usePathname();
  const router = useRouter();

  useLayoutEffect(() => {
    if (!loading && session && pathname === "/") {
      router.replace("/my-courses");
    }
  }, [loading, pathname, router, session]);

  // Render nothing for the chrome while hydrating to prevent flash
  if (loading || (session && pathname === "/")) {
    return (
      <>
        <div className="h-18" />
        <main />
      </>
    );
  }

  if (session) {
    return (
      <>
        <AuthNavbar />
        <main className="pt-16">{children}</main>
        <AuthFooter />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
