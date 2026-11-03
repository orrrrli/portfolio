import type { Config } from "@react-router/dev/config";
import { readdirSync } from "node:fs";

const KINDS = ["work", "build-learn"];
const LANGS = [
  { dir: "en", prefix: "" },
  { dir: "es", prefix: "/es" },
];

// One prerendered page per MDX file: app/content/<kind>/<lang>/<slug>.mdx
const entryPaths = KINDS.flatMap((kind) =>
  LANGS.flatMap(({ dir, prefix }) =>
    readdirSync(new URL(`./app/content/${kind}/${dir}`, import.meta.url))
      .filter((file) => file.endsWith(".mdx"))
      .map((file) => `${prefix}/${kind}/${file.replace(/\.mdx$/, "")}`),
  ),
);

export default {
  ssr: false,
  prerender: ["/", "/es", ...entryPaths],
} satisfies Config;
