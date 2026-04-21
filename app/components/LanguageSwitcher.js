"use client";

import { useState, useRef, useEffect } from "react";
import { Globe, ChevronDown, Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function LanguageSwitcher({ className = "", dropUp = false }) {
  const { language, languages, setLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className={`relative shrink-0 ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t("common.languageLabel", "Switch language")}
        className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-1 ${
          open
            ? "bg-purple-700 text-white shadow-md"
            : "bg-purple-600 text-white shadow-sm hover:bg-purple-700 hover:shadow-md"
        }`}
      >
        <Globe size={14} className="shrink-0" />
        <span className="tracking-wide">{languages.find((l) => l.value === language)?.label ?? language.toUpperCase()}</span>
        <ChevronDown
          size={12}
          className={`shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div
          role="listbox"
          aria-label={t("common.languageLabel", "Language")}
          className={`absolute right-0 z-50 w-44 overflow-hidden rounded-2xl border border-purple-100 bg-white shadow-2xl ${
            dropUp ? "bottom-full mb-2" : "top-full mt-2"
          }`}
        >
          <div className="border-b border-purple-50 px-4 py-2.5">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-purple-400">
              {t("common.languageLabel", "Language")}
            </p>
          </div>
          {languages.map((option) => {
            const isActive = option.value === language;
            return (
              <button
                key={option.value}
                role="option"
                aria-selected={isActive}
                type="button"
                onClick={() => {
                  setLanguage(option.value);
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between px-4 py-2.5 text-sm transition ${
                  isActive
                    ? "bg-purple-50 font-semibold text-purple-700"
                    : "text-gray-600 hover:bg-purple-50 hover:text-purple-700"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="inline-flex h-6 w-7 items-center justify-center rounded-md bg-purple-100 text-[10px] font-bold text-purple-700">
                    {option.value.toUpperCase()}
                  </span>
                  <span>{option.label}</span>
                </div>
                {isActive && <Check size={13} className="shrink-0 text-purple-600" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
