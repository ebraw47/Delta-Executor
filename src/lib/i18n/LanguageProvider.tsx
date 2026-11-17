"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { DICTIONARIES } from "./dictionaries";
import {
  DEFAULT_LOCALE,
  LOCALES,
  type Dictionary,
  type Locale,
} from "./types";

const STORAGE_KEY = "delta-locale";
const COOKIE_KEY = "delta-locale";

type LanguageContextValue = {
  locale: Locale;
  dir: "ltr" | "rtl";
  t: Dictionary;
  setLocale: (locale: Locale) => void;
  locales: typeof LOCALES;
};

const defaultValue: LanguageContextValue = {
  locale: DEFAULT_LOCALE,
  dir: "ltr",
  t: DICTIONARIES[DEFAULT_LOCALE],
  setLocale: () => {},
  locales: LOCALES,
};

const LanguageContext = createContext<LanguageContextValue>(defaultValue);

function writeLocaleCookie(locale: Locale) {
  try {
    document.cookie = `${COOKIE_KEY}=${locale}; path=/; max-age=31536000; samesite=lax`;
  } catch {
    // ignore
  }
}

function readStoredLocale(): Locale | null {
  try {
    const fromCookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith(`${COOKIE_KEY}=`))
      ?.split("=")[1] as Locale | undefined;
    if (fromCookie && fromCookie in DICTIONARIES) return fromCookie;
  } catch {
    // ignore
  }
  try {
    const fromStorage = localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (fromStorage && fromStorage in DICTIONARIES) return fromStorage;
  } catch {
    // ignore
  }
  return null;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  // SSR + first paint use Turkish default; restore saved locale after mount.
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = readStoredLocale();
    if (saved && saved !== DEFAULT_LOCALE) {
      setLocaleState(saved);
    } else if (!saved) {
      writeLocaleCookie(DEFAULT_LOCALE);
      try {
        localStorage.setItem(STORAGE_KEY, DEFAULT_LOCALE);
      } catch {
        // ignore
      }
    }
    setReady(true);
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore
    }
    writeLocaleCookie(next);
  }, []);

  const meta = LOCALES.find((l) => l.code === locale) ?? LOCALES[0];

  useEffect(() => {
    if (!ready) return;
    document.documentElement.lang =
      locale === "tr" ? "tr" : locale === "en" ? "en-US" : locale;
    document.documentElement.dir = meta.dir;
  }, [locale, meta.dir, ready]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      dir: meta.dir,
      t: DICTIONARIES[locale],
      setLocale,
      locales: LOCALES,
    }),
    [locale, meta.dir, setLocale]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}
