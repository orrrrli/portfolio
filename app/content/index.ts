import { useLocation } from "react-router";
import { en } from "./en";
import { es } from "./es";
import type { Content, Lang } from "./types";

export const getContent = (lang: Lang): Content => (lang === "es" ? es : en);

export const langFromPath = (pathname: string): Lang =>
  pathname === "/es" || pathname.startsWith("/es/") ? "es" : "en";

/** "" for EN, "/es" for ES. Prefix every internal path with it. */
export const langPrefix = (lang: Lang) => (lang === "es" ? "/es" : "");

export function useContent() {
  const { pathname } = useLocation();
  const lang = langFromPath(pathname);
  return { lang, pathname, prefix: langPrefix(lang), ...getContent(lang) };
}
