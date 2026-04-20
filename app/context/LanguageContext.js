"use client";

import { createContext, useContext, useState } from "react";
import { getDictionary, translate } from "@/lib/i18n/dictionaries";
import { LOCALE_OPTIONS, resolveLocale } from "@/lib/i18n/config";

const LanguageContext = createContext(null);

export function LanguageProvider({ children, initialLanguage }) {
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
    window.location.reload();
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