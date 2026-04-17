import { cookies } from "next/headers";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { LOCALE_COOKIE_NAME, resolveLocale } from "@/lib/i18n/config";

export async function getLocale() {
  const cookieStore = await cookies();
  return resolveLocale(cookieStore.get(LOCALE_COOKIE_NAME)?.value);
}

export async function getRequestDictionary() {
  return getDictionary(await getLocale());
}