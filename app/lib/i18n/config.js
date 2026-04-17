export const DEFAULT_LOCALE = "en";
export const LOCALE_COOKIE_NAME = "medtach-locale";

export const LOCALES = ["en", "hi", "ml"];

export const LOCALE_OPTIONS = [
  { value: "en", label: "English" },
  { value: "hi", label: "हिंदी" },
  { value: "ml", label: "മലയാളം" },
];

export function isValidLocale(locale) {
  return LOCALES.includes(locale);
}

export function resolveLocale(locale) {
  return isValidLocale(locale) ? locale : DEFAULT_LOCALE;
}