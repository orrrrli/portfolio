import { type RouteConfig, index, route } from "@react-router/dev/routes";

// Each page file is mounted once per language; the "/es" prefix picks the content.
export default [
  index("routes/home.tsx", { id: "home-en" }),
  route("es", "routes/home.tsx", { id: "home-es" }),
  route("work/:slug", "routes/entry.tsx", { id: "work-en" }),
  route("es/work/:slug", "routes/entry.tsx", { id: "work-es" }),
  route("build-learn/:slug", "routes/entry.tsx", { id: "build-learn-en" }),
  route("es/build-learn/:slug", "routes/entry.tsx", { id: "build-learn-es" }),
  // Resource routes, prerendered to static .xml files.
  route("rss.xml", "routes/rss.ts", { id: "rss-en" }),
  route("es/rss.xml", "routes/rss.ts", { id: "rss-es" }),
  route("sitemap.xml", "routes/sitemap.ts"),
] satisfies RouteConfig;
