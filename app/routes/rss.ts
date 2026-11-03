import { getContent, langFromPath } from "../content";
import { listEntries } from "../content/mdx";
import { escapeXml, localizedUrl } from "../content/seo";
import type { Route } from "./+types/rss";

/** Build & Learn feed, one per language: /rss.xml and /es/rss.xml */
export function loader({ request }: Route.LoaderArgs) {
  const lang = langFromPath(new URL(request.url).pathname);
  const { blog, person } = getContent(lang);
  const posts = listEntries("build-learn", lang);

  const items = posts
    .map(({ slug, frontmatter: f }) => {
      const url = localizedUrl(lang, `/build-learn/${slug}`);
      return `
    <item>
      <title>${escapeXml(f.title)}</title>
      <link>${url}</link>
      <guid>${url}</guid>
      <pubDate>${new Date(f.publishedAt).toUTCString()}</pubDate>
      <description>${escapeXml(f.summary)}</description>${f.tag ? `\n      <category>${escapeXml(f.tag)}</category>` : ""}
    </item>`;
    })
    .join("");

  // Newest post date keeps the output deterministic between builds.
  const lastBuild = posts[0] ? new Date(posts[0].frontmatter.publishedAt).toUTCString() : "";

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(blog.title)}</title>
    <link>${localizedUrl(lang, "/")}</link>
    <description>${escapeXml(blog.description)}</description>
    <language>${lang}</language>
    <lastBuildDate>${lastBuild}</lastBuildDate>
    <atom:link href="${localizedUrl(lang, "/rss.xml")}" rel="self" type="application/rss+xml" />
    <managingEditor>${person.email} (${escapeXml(person.name)})</managingEditor>${items}
  </channel>
</rss>
`;

  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
