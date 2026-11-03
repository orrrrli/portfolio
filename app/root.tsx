import type { ReactNode } from "react";
import { Link, Links, Meta, Outlet, Scripts, ScrollRestoration, useLocation } from "react-router";
import { langFromPath, useContent } from "./content";
import type { SectionId } from "./content/types";
import type { Route } from "./+types/root";
import "./styles/tokens.css";
import "./styles/site.css";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap",
  },
];

const SECTIONS: SectionId[] = ["profile", "experience", "projects", "stack", "contact"];

export function Layout({ children }: { children: ReactNode }) {
  const lang = langFromPath(useLocation().pathname);

  return (
    <html lang={lang}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#07090e" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const { lang, pathname, prefix, person, home } = useContent();
  const homePath = prefix || "/";
  const isHome = pathname === homePath || pathname === `${prefix}/`;
  // On the home page anchors stay in-page; elsewhere they jump back to the home.
  const anchor = (id: string) => (isHome ? `#${id}` : `${prefix}/#${id}`);
  const enPath = pathname.replace(/^\/es(?=\/|$)/, "") || "/";
  const esPath = enPath === "/" ? "/es" : `/es${enPath}`;

  return (
    <>
      <header className="site-header">
        <nav className="container nav">
          <Link to={homePath} className="mono brand">
            ~/orlando
          </Link>
          <ul className="nav-links mono">
            {SECTIONS.map((id) => (
              <li key={id}>
                <a href={anchor(id)}>{home.sections[id]}</a>
              </li>
            ))}
          </ul>
          <div className="lang mono">
            <a href={enPath} aria-current={lang === "en" ? "page" : undefined} hrefLang="en">
              EN
            </a>
            <a href={esPath} aria-current={lang === "es" ? "page" : undefined} hrefLang="es">
              ES
            </a>
          </div>
        </nav>
      </header>

      <Outlet />

      <footer className="container footer mono muted">
        <span>
          © {new Date().getFullYear()} {person.name}
        </span>
        <a href="#top">↑ {home.backToTop}</a>
      </footer>
    </>
  );
}
