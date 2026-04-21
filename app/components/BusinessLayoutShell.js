"use client";

import BusinessFooter from "@/components/BusinessFooter";
import BusinessNavbar from "@/components/BusinessNavbar";
import { useLanguage } from "@/context/LanguageContext";
import { localizeNodeTree } from "@/lib/i18n/content";

export default function BusinessLayoutShell({ children }) {
  const { language } = useLanguage();

  return (
    <>
      <BusinessNavbar />
      <main className="pt-18">{localizeNodeTree(language, children)}</main>
      <BusinessFooter />
    </>
  );
}