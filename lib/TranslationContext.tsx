"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";

export interface Translations {
  nav: {
    home: string;
    about: string;
    solutions: string;
    platform: string;
    resources: string;
    pricing: string;
    contact: string;
    login: string;
    signup: string;
    dashboard: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    cta: string;
    ctaSecondary: string;
  };
  login: {
    email: string;
    password: string;
    submit: string;
    forgot: string;
  };
  signup: {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    submit: string;
  };
}

// Map language selector codes → translation file names
const codeToFile: Record<string, string> = {
  en: "en",
  ur: "ur",
  ar: "ar",
  es: "es",
  fr: "fr",
  de: "de",
  it: "it",
  pt: "pt",
  nl: "nl",
  tr: "tr",
  hi: "hi",
  zh: "cn",
  ja: "jp",
  ko: "kr",
  ru: "ru",
  id: "id",
  th: "th",
  vi: "vn",
  pl: "pl",
  el: "gr",
};

interface TranslationContextValue {
  t: Translations;
  locale: string;
  setLocale: (code: string) => void;
}

const TranslationContext = createContext<TranslationContextValue | null>(null);

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState("en");
  const [t, setT] = useState<Translations | null>(null);

  const loadTranslation = useCallback(async (code: string) => {
    const file = codeToFile[code] ?? "en";
    try {
      const mod = await import(`@/translations/${file}.json`);
      setT(mod.default as Translations);
    } catch {
      // Fallback to English
      const mod = await import("@/translations/en.json");
      setT(mod.default as Translations);
    }
  }, []);

  // Initialise from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("siteLanguage") ?? "en";
    setLocaleState(saved);
    loadTranslation(saved);
  }, [loadTranslation]);

  const setLocale = useCallback(
    (code: string) => {
      localStorage.setItem("siteLanguage", code);
      setLocaleState(code);
      loadTranslation(code);
    },
    [loadTranslation]
  );

  if (!t) return null; // prevent flash before first load

  return (
    <TranslationContext.Provider value={{ t, locale, setLocale }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const ctx = useContext(TranslationContext);
  if (!ctx) throw new Error("useTranslation must be used inside TranslationProvider");
  return ctx;
}
