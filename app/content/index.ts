import { useLocation } from "react-router";
import { en } from "./en";
import { es } from "./es";
import type { Content, Lang } from "./types";

export const getContent = (lang: Lang): Content => (lang === "es" ? es : en);

export const langFromPath = (pathname: string): Lang =>
  pathname === "/es" || pathname.startsWith("/es/") ? "es" : "en";

/** "" for EN, "/es" for ES. */
export const langPrefix = (lang: Lang) => (lang === "es" ? "/es" : "");

/** The only place the "/es" rule lives: "/" -> "/es", "/work/x" -> "/es/work/x". */
export const localizedPath = (lang: Lang, neutralPath: string) => {
  if (lang === "en") return neutralPath;
  return neutralPath === "/" ? "/es" : `/es${neutralPath}`;
};

export function useContent() {
  const { pathname } = useLocation();
  const lang = langFromPath(pathname);
  const prefix = langPrefix(lang);
  return {
    lang,
    pathname,
    prefix,
    /** Home of the current language, canonical form ("/" or "/es"). */
    homePath: localizedPath(lang, "/"),
    /** Current path without the language prefix or trailing slash (prerender passes "/work/x/"). */
    neutralPath: pathname.slice(prefix.length).replace(/\/$/, "") || "/",
    ...getContent(lang),
  };
}
