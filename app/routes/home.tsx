import { useLocation } from "react-router";
import { getContent } from "../content";
import type { ExperienceSection, SectionId } from "../content/types";
import "../styles/home.css";
import type { Route } from "./+types/home";

export const meta: Route.MetaFunction = () => [{ title: "Orlando Castañeda" }];

const SECTIONS: SectionId[] = ["profile", "experience", "projects", "stack", "contact"];

function Achievements({ items }: { items: string[] }) {
  return (
    <ul className="achievements">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function Section({ section }: { section: ExperienceSection }) {
  if (!("subsections" in section)) {
    return (
      <div className="xp-section">
        <h4>{section.title}</h4>
        <Achievements items={section.achievements} />
      </div>
    );
  }

  return (
    <div className="xp-section">
      <h4>{section.title}</h4>
      {section.subsections.map((sub) => (
        <div key={sub.title} className="xp-subsection">
          <h5 className="mono">{sub.title}</h5>
          <Achievements items={sub.achievements} />
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  const isEs = useLocation().pathname.startsWith("/es");
  const { person, social, home, about, work } = getContent(isEs ? "es" : "en");

  return (
    <>
      <header className="site-header">
        <nav className="container nav">
          <a href="#top" className="mono brand">
            ~/orlando
          </a>
          <ul className="nav-links mono">
            {SECTIONS.map((id) => (
              <li key={id}>
                <a href={`#${id}`}>{home.sections[id]}</a>
              </li>
            ))}
          </ul>
          <div className="lang mono">
            <a href="/" aria-current={isEs ? undefined : "page"} hrefLang="en">
              EN
            </a>
            <a href="/es" aria-current={isEs ? "page" : undefined} hrefLang="es">
              ES
            </a>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="container hero">
          <div>
            <p className="eyebrow mono">
              {person.role} · {person.city}
            </p>
            <h1>{person.name}</h1>
            <p className="headline">
              {home.headline.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </p>
            <p className="subline muted">
              {home.subline.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </p>
          </div>

          <div className="terminal mono" aria-label="Terminal">
            <div className="terminal-bar">
              <span />
              <span />
              <span />
            </div>
            <pre>
              <span className="prompt">~/orlando $</span> whoami{"\n"}
              {person.name}
              {"\n\n"}
              <span className="prompt">~/orlando $</span> cat role{"\n"}
              {person.role}
              {"\n\n"}
              <span className="prompt">~/orlando $</span> locate{"\n"}
              {person.city}
              {"\n\n"}
              <span className="prompt">~/orlando $</span> ls stack/{"\n"}
              {home.stack.join("  ")}
            </pre>
          </div>
        </section>

        <section id="profile" className="container block">
          <p className="label mono">{home.sections.profile}</p>
          <h2>{about.intro.title}</h2>
          <p className="lead">{about.intro.description}</p>

          <h3 className="sub-title">{about.studies.title}</h3>
          <ul className="cards">
            {about.studies.institutions.map((inst) => (
              <li key={inst.name} className="card">
                <h4>{inst.link ? <a href={inst.link}>{inst.name}</a> : inst.name}</h4>
                <p className="muted">{inst.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="experience" className="container block">
          <p className="label mono">{home.sections.experience}</p>
          <h2>{about.work.title}</h2>
          <ol className="timeline">
            {about.work.experiences.map((xp) => (
              <li key={`${xp.company}-${xp.timeframe}`} className="xp">
                <p className="timeframe mono">{xp.timeframe}</p>
                <h3>{xp.role}</h3>
                <p className="company muted">{xp.company}</p>
                {xp.sections.map((section) => (
                  <Section key={section.title} section={section} />
                ))}
              </li>
            ))}
          </ol>
        </section>

        <section id="projects" className="container block">
          <p className="label mono">{home.sections.projects}</p>
          <h2>{work.labels.selectedWork}</h2>
          {/* Project cards land in phase 3, sourced from the MDX frontmatter. */}
        </section>

        <section id="stack" className="block">
          <div className="container">
            <p className="label mono">{home.sections.stack}</p>
            <h2>{about.technical.title}</h2>
          </div>

          <div className="marquee mono">
            <ul className="marquee-track">
              {home.stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
            <ul className="marquee-track" aria-hidden="true">
              {home.stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>

          <ul className="container cards skills">
            {about.technical.skills.map((skill) => (
              <li key={skill.title} className="card">
                <h4>{skill.title}</h4>
                <p className="muted">{skill.description}</p>
                <ul className="chips mono">
                  {skill.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>

        <section id="contact" className="container block">
          <p className="label mono">{home.sections.contact}</p>
          <h2>
            <a href={`mailto:${person.email}`}>{person.email}</a>
          </h2>
          <ul className="chips mono social">
            {social.map((s) => (
              <li key={s.name}>
                <a href={s.link}>{s.name}</a>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="container footer mono muted">
        <span>
          © {new Date().getFullYear()} {person.name}
        </span>
        <a href="#top">↑ {home.backToTop}</a>
      </footer>
    </>
  );
}
