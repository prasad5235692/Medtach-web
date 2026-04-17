"use client";

import { createContext, useContext, useState, startTransition } from "react";
import { useRouter } from "next/navigation";
import { getDictionary, translate } from "@/lib/i18n/dictionaries";
import { LOCALE_OPTIONS, resolveLocale } from "@/lib/i18n/config";

const LanguageContext = createContext(null);

export function LanguageProvider({ children, initialLanguage }) {
  const router = useRouter();
  const [language, setLanguage] = useState(resolveLocale(initialLanguage));

  const dictionary = getDictionary(language);

  const changeLanguage = async (nextLanguage) => {
    const locale = resolveLocale(nextLanguage);

    if (locale === language) {
      return;
    }

    const response = await fetch("/api/locale", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ locale }),
    });

    if (!response.ok) {
      return;
    }

    setLanguage(locale);
    startTransition(() => {
      router.refresh();
    });
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        languages: LOCALE_OPTIONS,
        dictionary,
        t: (key, fallback) => translate(dictionary, key, fallback),
        setLanguage: changeLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}