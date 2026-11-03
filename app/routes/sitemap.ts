import { entries } from "../content/mdx";
import { localizedUrl } from "../content/seo";
import type { Lang } from "../content/types";

type Page = { path: string; langs: Lang[]; lastmod?: string };

// Groups every MDX entry by kind/slug so ES-only or EN-only pages still get listed.
function pages(): Page[] {
  const byPath = new Map<string, Page>();
  for (const { kind, slug, lang, frontmatter } of entries) {
    const path = `/${kind}/${slug}`;
    const page = byPath.get(path) ?? { path, langs: [], lastmod: frontmatter.publishedAt };
    page.langs.push(lang);
    byPath.set(path, page);
  }
  return [{ path: "/", langs: ["en", "es"] }, ...byPath.values()];
}

function alternates({ path, langs }: Page) {
  if (langs.length < 2) return "";
  const links = langs.map((l) => `<xhtml:link rel="alternate" hreflang="${l}" href="${localizedUrl(l, path)}" />`);
  const fallback = langs.includes("en") ? "en" : langs[0];
  links.push(`<xhtml:link rel="alternate" hreflang="x-default" href="${localizedUrl(fallback, path)}" />`);
  return links.map((l) => `\n    ${l}`).join("");
}

export function loader() {
  const urls = pages()
    .flatMap((page) =>
      page.langs.map(
        (lang) => `  <url>
    <loc>${localizedUrl(lang, page.path)}</loc>${page.lastmod ? `\n    <lastmod>${page.lastmod}</lastmod>` : ""}${alternates(page)}
  </url>`,
      ),
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;

  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
}
