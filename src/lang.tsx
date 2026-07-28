import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";

export type Lang = "es" | "en";

/** A string that exists in both languages. */
export type L = { es: string; en: string };

const STORAGE_KEY = "jof.lang";

interface Ctx {
  lang: Lang;
  setLang: (l: Lang) => void;
  /** Resolve a bilingual string to the active language. */
  t: (l: L) => string;
}

const LangContext = createContext<Ctx | null>(null);

function detect(): Lang {
  if (typeof window === "undefined") return "es";
  const saved = window.localStorage?.getItem(STORAGE_KEY);
  if (saved === "es" || saved === "en") return saved;
  return navigator.language?.toLowerCase().startsWith("en") ? "en" : "es";
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detect);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* private mode — the choice just won't persist */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo<Ctx>(
    () => ({ lang, setLang, t: (l: L) => l[lang] }),
    [lang, setLang],
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLang(): Ctx {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside <LangProvider>");
  return ctx;
}
