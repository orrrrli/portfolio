import type { MetaDescriptor } from "react-router";
import { getContent } from ".";
import type { Lang } from "./types";

export const SITE_URL = "https://orlando.codes";

/** `path` is language-neutral ("/" or "/work/axiriam"); ES gets the "/es" prefix. */
export const localizedUrl = (lang: Lang, path: string) => {
  if (lang === "en") return SITE_URL + path;
  return SITE_URL + (path === "/" ? "/es" : `/es${path}`);
};

type SeoInput = {
  lang: Lang;
  path: string;
  title: string;
  description: string;
  /** Site-relative image path */
  image: string;
  type?: "website" | "article";
  /** false when the page has no counterpart in the other language */
  hasTranslation?: boolean;
};

export function seoMeta({
  lang,
  path,
  title,
  description,
  image,
  type = "website",
  hasTranslation = true,
}: SeoInput): MetaDescriptor[] {
  const url = localizedUrl(lang, path);
  const imageUrl = SITE_URL + image;
  const alternates: MetaDescriptor[] = hasTranslation
    ? [
        { tagName: "link", rel: "alternate", hrefLang: "en", href: localizedUrl("en", path) },
        { tagName: "link", rel: "alternate", hrefLang: "es", href: localizedUrl("es", path) },
        { tagName: "link", rel: "alternate", hrefLang: "x-default", href: localizedUrl("en", path) },
      ]
    : [];

  return [
    { title },
    { name: "description", content: description },
    { tagName: "link", rel: "canonical", href: url },
    ...alternates,
    {
      tagName: "link",
      rel: "alternate",
      type: "application/rss+xml",
      title: getContent(lang).blog.title,
      href: localizedUrl(lang, "/rss.xml"),
    },
    { property: "og:type", content: type },
    { property: "og:url", content: url },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: imageUrl },
    { property: "og:locale", content: lang === "es" ? "es_MX" : "en_US" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: imageUrl },
  ];
}

export const escapeXml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
