import type { MDXContent } from "mdx/types";
import type { Lang } from "./types";

export type Kind = "work" | "build-learn";

/** YAML frontmatter of the MDX files. Projects carry images/link/stack, posts carry tag. */
export type Frontmatter = {
  title: string;
  publishedAt: string;
  summary: string;
  images?: string[];
  link?: string;
  stack?: string[];
  tag?: string;
};

export type Entry = {
  kind: Kind;
  lang: Lang;
  slug: string;
  frontmatter: Frontmatter;
  Content: MDXContent;
};

// ponytail: eager glob bundles every MDX body into each importer; fine for 10 files,
// switch the listing to `import: "frontmatter"` if the home bundle grows.
const modules = import.meta.glob<{ default: MDXContent; frontmatter: Frontmatter }>(
  "./{work,build-learn}/*/*.mdx",
  { eager: true },
);

const entries: Entry[] = Object.entries(modules)
  .map(([path, mod]) => {
    // path looks like "./work/en/axiriam.mdx"
    const [, kind, lang, file] = path.split("/");
    return {
      kind: kind as Kind,
      lang: lang as Lang,
      slug: file.replace(/\.mdx$/, ""),
      frontmatter: mod.frontmatter,
      Content: mod.default,
    };
  })
  .sort((a, b) => b.frontmatter.publishedAt.localeCompare(a.frontmatter.publishedAt));

export const listEntries = (kind: Kind, lang: Lang) =>
  entries.filter((e) => e.kind === kind && e.lang === lang);

export const findEntry = (kind: Kind, lang: Lang, slug: string | undefined) =>
  entries.find((e) => e.kind === kind && e.lang === lang && e.slug === slug);
