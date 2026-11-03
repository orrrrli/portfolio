import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx", { id: "home-en" }),
  route("es", "routes/home.tsx", { id: "home-es" }),
] satisfies RouteConfig;
