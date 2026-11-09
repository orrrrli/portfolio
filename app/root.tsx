import { type MouseEvent, type ReactNode, useLayoutEffect, useRef } from "react";
import { Link, Links, Meta, Outlet, Scripts, ScrollRestoration, useLocation } from "react-router";
import { langFromPath, localizedPath, useContent } from "./content";
import type { SectionId } from "./content/types";
import type { Route } from "./+types/root";
import "./styles/tokens.css";
import "./styles/site.css";

export const links: Route.LinksFunction = () => [
  { rel: "icon", type: "image/png", href: "/favicon.png" },
  { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap",
  },
];

const SECTIONS: SectionId[] = ["profile", "experience", "projects", "stack", "contact"];

/**
 * Where the reader is, in terms both languages share: the element just below the sticky
 * header (as child indexes from <body>; both languages render the same tree) and how far
 * into it they are, as a fraction of its height. Survives ES and EN text having different heights.
 */
type ScrollAnchor = { path: number[]; fraction: number; scrollY: number };

const headerBottom = () => document.querySelector(".site-header")?.getBoundingClientRect().bottom ?? 0;

function captureAnchor(): ScrollAnchor {
  const top = headerBottom();
  const el = document.elementFromPoint(innerWidth / 2, top + 1);
  const path: number[] = [];
  for (let n = el; n?.parentElement && n !== document.body; n = n.parentElement) {
    path.unshift(Array.prototype.indexOf.call(n.parentElement.children, n));
  }
  const box = el?.getBoundingClientRect();
  return { path, fraction: box && box.height > 0 ? (top - box.top) / box.height : 0, scrollY };
}

function restoreAnchor({ path, fraction, scrollY: fallbackY }: ScrollAnchor) {
  let el: Element | undefined = document.body;
  for (const i of path) el = el?.children[i];
  // Tree differs (should not happen): keep the raw offset rather than jump to the top.
  if (!el || path.length === 0) return scrollTo({ top: fallbackY, behavior: "instant" });
  const box = el.getBoundingClientRect();
  scrollTo({ top: scrollY + box.top + fraction * box.height - headerBottom(), behavior: "instant" });
}

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

// Unmatched URLs (old /about, /work, typos) land here instead of React Router's bare default.
export function ErrorBoundary() {
  const { homePath, person } = useContent();
  return (
    <main id="top" className="container entry">
      <title>{`404 – ${person.name}`}</title>
      <meta name="robots" content="noindex" />
      <a href={homePath} className="back mono">
        ← ~/orlando
      </a>
      <h1>404</h1>
    </main>
  );
}

export default function App() {
  const { lang, neutralPath, homePath, person, home } = useContent();
  const isHome = neutralPath === "/";
  // On the home page anchors stay in-page; elsewhere they jump back to the home.
  const anchor = (id: string) => (isHome ? `#${id}` : `${homePath}#${id}`);
  const enPath = localizedPath("en", neutralPath);
  const esPath = localizedPath("es", neutralPath);

  // Language switch: client-side navigation (preventScrollReset), then put the reader back
  // on the same content once the other language has rendered.
  const anchorRef = useRef<ScrollAnchor | null>(null);
  const keepPosition = (e: MouseEvent) => {
    // Modified clicks open a new tab: no navigation here, nothing to restore.
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    anchorRef.current = captureAnchor();
  };
  useLayoutEffect(() => {
    if (!anchorRef.current) return;
    restoreAnchor(anchorRef.current);
    anchorRef.current = null;
  }, [lang]);

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
            <Link
              to={enPath}
              preventScrollReset
              onClick={keepPosition}
              aria-current={lang === "en" ? "page" : undefined}
              hrefLang="en"
            >
              EN
            </Link>
            <Link
              to={esPath}
              preventScrollReset
              onClick={keepPosition}
              aria-current={lang === "es" ? "page" : undefined}
              hrefLang="es"
            >
              ES
            </Link>
          </div>
        </nav>
      </header>

      <Outlet />

      <footer className="container footer mono muted">
        {/* Year is baked at build time; the client may disagree after Jan 1. */}
        <span suppressHydrationWarning>
          © {new Date().getFullYear()} {person.name}
        </span>
        <a href="#top">↑ {home.backToTop}</a>
      </footer>
    </>
  );
}
