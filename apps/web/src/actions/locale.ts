"use server";

import { cookies, headers } from "next/headers";

import type { Locale } from "@/i18n/config";
import { defaultLocale } from "@/i18n/config";

const COOKIE_NAME = "NEXT_LOCALE";
const SUPPORTED_LOCALES: Locale[] = ["nl", "en"];

export async function getUserLocale(): Promise<Locale> {
  const h = headers().get("accept-language");
  const acceptLanguage: Locale = h
    ? (h.split(",")[0]?.split("-")[0] as Locale)
    : defaultLocale;

  const cookieLocale: Locale | undefined = cookies().get(COOKIE_NAME)
    ?.value as Locale;

  const validLocale = SUPPORTED_LOCALES.includes(acceptLanguage)
    ? acceptLanguage
    : defaultLocale;

  return cookieLocale || validLocale || defaultLocale;
}

export async function setUserLocale(locale: Locale) {
  cookies().set(COOKIE_NAME, locale);
}
