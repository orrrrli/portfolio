import { useParams } from "react-router";
import { APIPlayground } from "../components/APIPlayground";
import { getContent, langFromPath, useContent } from "../content";
import { findEntry, type Kind } from "../content/mdx";
import { seoMeta } from "../content/seo";
import "../styles/entry.css";
import type { Route } from "./+types/entry";

const kindFromPath = (pathname: string): Kind => (pathname.includes("/build-learn/") ? "build-learn" : "work");

export const meta: Route.MetaFunction = ({ location, params }) => {
  const lang = langFromPath(location.pathname);
  const kind = kindFromPath(location.pathname);
  const { person, home } = getContent(lang);
  const entry = findEntry(kind, lang, params.slug);
  if (!entry) return [{ title: person.name }, { name: "robots", content: "noindex" }];

  const { title, summary, images } = entry.frontmatter;
  return seoMeta({
    lang,
    path: `/${kind}/${entry.slug}`,
    title: `${title} – ${person.name}`,
    description: summary,
    image: images?.[0] ?? home.image,
    type: "article",
    hasTranslation: Boolean(findEntry(kind, lang === "es" ? "en" : "es", entry.slug)),
  });
};

export default function EntryPage() {
  const { slug } = useParams();
  const { lang, pathname, homePath, home, work, blog } = useContent();
  const kind = kindFromPath(pathname);
  const entry = findEntry(kind, lang, slug);

  const isWork = kind === "work";
  const back = isWork
    ? { href: `${homePath}#projects`, label: work.labels.backToProjects }
    : { href: homePath, label: blog.labels.backLink };
  const backLink = (
    <a href={back.href} className="back mono">
      ← {back.label}
    </a>
  );

  if (!entry) {
    return (
      <main id="top" className="container entry">
        {backLink}
        <h1>404</h1>
      </main>
    );
  }

  const { title, summary, publishedAt, images, stack, link, tag, coverCaption } = entry.frontmatter;
  const { Content } = entry;

  return (
    <main id="top" className="container entry">
      {backLink}

      <header className="entry-head">
        <p className="label mono">{isWork ? home.sections.projects : blog.label}</p>
        <h1>{title}</h1>
        <p className="entry-meta mono">
          <time dateTime={publishedAt}>{publishedAt}</time>
          {tag && <span> · {tag}</span>}
        </p>
        <p className="lead">{summary}</p>
        {stack && (
          <ul className="chips mono">
            {stack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        )}
        {link && (
          <p>
            <a href={link} className="mdx-link">
              {work.labels.viewProject}
            </a>
          </p>
        )}
      </header>

      {images?.[0] && (
        <figure className="cover-figure">
          <img className="cover" src={images[0]} alt={title} />
          {coverCaption && <figcaption>{coverCaption}</figcaption>}
        </figure>
      )}

      <article className="prose">
        <Content components={{ APIPlayground }} />
      </article>
    </main>
  );
}
