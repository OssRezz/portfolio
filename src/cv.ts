import type { Lang } from "./lang";

/**
 * The CV files live in /public, so Vite's BASE_URL prefix has to be applied by hand —
 * the site is served from a sub-path on GitHub Pages.
 */
const base = import.meta.env.BASE_URL;

export const CV: Record<Lang, string> = {
  es: `${base}CV-James-Osorio-ES.pdf`,
  en: `${base}CV-James-Osorio-EN.pdf`,
};

export const cvHref = (lang: Lang) => CV[lang];
