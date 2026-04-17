"use client";
import { useLayoutEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { useLanguage } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthNavbar from "@/components/AuthNavbar";
import AuthFooter from "@/components/AuthFooter";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { localizeNodeTree } from "@/lib/i18n/content";

const FloatingLanguageSwitcher = () => (
  <div className="fixed bottom-5 right-5 z-50">
    <LanguageSwitcher dropUp />
  </div>
);

export default function LayoutShell({ children }) {
  const { session, loading } = useAuth();
  const { language } = useLanguage();
  const pathname = usePathname();
  const router = useRouter();

  useLayoutEffect(() => {
    if (!loading && session && pathname === "/") {
      router.replace("/my-courses");
    }
  }, [loading, pathname, router, session]);

  // Business sub-site has its own layout — skip the main shell entirely
  if (pathname.startsWith("/business")) {
    return <>{localizeNodeTree(language, children)}<FloatingLanguageSwitcher /></>;
  }

  // Render nothing for the chrome while hydrating to prevent flash
  if (loading || (session && pathname === "/")) {
    return (
      <>
        <div className="h-18" />
        <main />
        <FloatingLanguageSwitcher />
      </>
    );
  }

  if (session) {
    return (
      <>
        <AuthNavbar />
        <main className="pt-16">{localizeNodeTree(language, children)}</main>
        <AuthFooter />
        <FloatingLanguageSwitcher />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main>{localizeNodeTree(language, children)}</main>
      <Footer />
      <FloatingLanguageSwitcher />
    </>
  );
}
