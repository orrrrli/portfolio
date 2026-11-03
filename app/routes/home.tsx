import { useLocation } from "react-router";
import type { Route } from "./+types/home";

// Placeholder until phase 1 ports content.tsx into app/content/{en,es}.ts.
export const meta: Route.MetaFunction = () => [{ title: "Orlando Castañeda" }];

export default function Home() {
  const isEs = useLocation().pathname.startsWith("/es");

  return (
    <main className="container">
      <p className="mono muted">~/orlando $ whoami</p>
      <h1>Orlando Castañeda</h1>
      <p className="muted">{isEs ? "Desarrollador Full Stack" : "Full Stack Developer"}</p>
    </main>
  );
}
