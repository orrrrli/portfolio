import { findEntry, listEntries, type Kind } from "../content/mdx";
import { localizedUrl } from "../content/seo";
import type { Lang } from "../content/types";

type Page = { path: string; langs: Lang[]; lastmod?: string };

const KINDS: Kind[] = ["work", "build-learn"];

function pages(): Page[] {
  const entries = KINDS.flatMap((kind) =>
    listEntries(kind, "en").map(({ slug, frontmatter }) => ({
      path: `/${kind}/${slug}`,
      langs: findEntry(kind, "es", slug) ? (["en", "es"] as Lang[]) : (["en"] as Lang[]),
      lastmod: frontmatter.publishedAt,
    })),
  );
  return [{ path: "/", langs: ["en", "es"] }, ...entries];
}

export function loader() {
  const urls = pages()
    .flatMap(({ path, langs, lastmod }) =>
      langs.map((lang) => {
        const alternates =
          langs.length > 1
            ? langs
                .map((l) => `\n    <xhtml:link rel="alternate" hreflang="${l}" href="${localizedUrl(l, path)}" />`)
                .join("")
            : "";
        return `  <url>
    <loc>${localizedUrl(lang, path)}</loc>${lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : ""}${alternates}
  </url>`;
      }),
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;

  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
}
