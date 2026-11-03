import { useLocation } from "react-router";
import { getContent } from "../content";
import type { Route } from "./+types/home";

export const meta: Route.MetaFunction = () => [{ title: "Orlando Castañeda" }];

export default function Home() {
  const { person } = getContent(useLocation().pathname.startsWith("/es") ? "es" : "en");

  return (
    <main className="container">
      <p className="mono muted">~/orlando $ whoami</p>
      <h1>{person.name}</h1>
      <p className="muted">{person.role}</p>
    </main>
  );
}
