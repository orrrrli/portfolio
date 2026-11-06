import { type ReactNode, useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { DotMorph, type DotShape } from "../components/DotMorph";
import { type SkillView, SkillTabs, viewForTag } from "../components/SkillTabs";
import { getContent, langFromPath, useContent } from "../content";
import { listEntries } from "../content/mdx";
import { seoMeta } from "../content/seo";
import { STACK_ICONS } from "../content/stackIcons";
import type { ExperienceSection, FocusIcon } from "../content/types";
import "../styles/home.css";
import type { Route } from "./+types/home";

export const meta: Route.MetaFunction = ({ location }) => {
  const lang = langFromPath(location.pathname);
  const { home } = getContent(lang);
  return seoMeta({ lang, path: "/", title: home.title, description: home.description, image: home.image });
};

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
  return (
    <div className="xp-section">
      <h4>{section.title}</h4>
      {"subsections" in section ? (
        section.subsections.map((sub) => (
          <div key={sub.title} className="xp-subsection">
            <h5 className="mono">{sub.title}</h5>
            <Achievements items={sub.achievements} />
          </div>
        ))
      ) : (
        <Achievements items={section.achievements} />
      )}
    </div>
  );
}

/** Dot drawings beside the hero name; each side morphs between its shapes. */
const LEFT_ART: DotShape[] = [
  { src: "/images/art/android.svg", from: "--accent", to: "--accent-amber" },
  { src: "/images/art/docker.svg", from: "--accent-violet", to: "--accent" },
];
const RIGHT_ART: DotShape[] = [
  { src: "/images/art/cloud.svg", from: "--accent-violet", to: "--accent" },
  { src: "/images/art/code.svg", from: "--accent-amber", to: "--accent-violet" },
  { src: "/images/art/dotnet.svg", from: "--accent-violet", to: "--accent-violet" },];

/** Copies of the stack list per marquee track: 6 logos are about 650px, so 4 cover a 2560px screen. */
const MARQUEE_REPEAT = 4;

/** Project cards show this many stack chips, then "+N". */
const MAX_CHIPS = 5;

/** Renders `backtick` spans of a frontmatter string as <code>. */
function InlineCode({ text }: { text: string }) {
  return text.split("`").map((part, i) => (i % 2 ? <code key={part}>{part}</code> : part));
}

/** Stroke icons for the profile focus list. */
const FOCUS_ICONS: Record<FocusIcon, ReactNode> = {
  ai: (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3c.6 4.2 2.8 6.4 7 7-4.2.6-6.4 2.8-7 7-.6-4.2-2.8-6.4-7-7 4.2-.6 6.4-2.8 7-7Z" />
      <path d="M19 15c.3 1.6 1 2.3 2.5 2.5-1.5.2-2.2.9-2.5 2.5-.3-1.6-1-2.3-2.5-2.5 1.5-.2 2.2-.9 2.5-2.5Z" />
    </svg>
  ),
  arch: (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="7" rx="2" />
      <rect x="3" y="13" width="18" height="7" rx="2" />
      <path d="M7 7.5h.01M7 16.5h.01" />
    </svg>
  ),
  ops: (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 18a4 4 0 0 1-.6-7.96A6 6 0 0 1 18 9a4.5 4.5 0 0 1-.5 9Z" />
      <path d="M12 15v-4m-2 2 2-2 2 2" />
    </svg>
  ),
};

/** Inline icons for the social links, keyed by SocialLink.name. Paths: Simple Icons (CC0). */
const SOCIAL_ICONS: Record<string, ReactNode> = {
  GitHub: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  ),
  LinkedIn: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  Email: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 6 10-6" />
    </svg>
  ),
};

/** Eases the timeline's --progress toward the viewport center and lights each entry the tip has passed. */
/** Id of the skill tabs, the target of the marquee links. */
const SKILLS_ID = "skills";

/** Marquee item: the tech's logo (or its name if there is no logo), linking to the skill tab that shows that work. */
function StackLogo({ tech, tip, hidden, onPick }: { tech: string; tip: string; hidden: boolean; onPick: () => void }) {
  const d = STACK_ICONS[tech];
  return (
    <a href={`#${SKILLS_ID}`} className="marquee-link" data-tip={tip} aria-label={tip} tabIndex={hidden ? -1 : undefined} onClick={onPick}>
      {d ? (
        <svg className="marquee-logo" viewBox="0 0 24 24" aria-hidden="true">
          <path d={d} fill="currentColor" />
        </svg>
      ) : (
        <span className="mono">{tech}</span>
      )}
    </a>
  );
}

function useTimelineProgress() {
  const ref = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const items = Array.from(el.querySelectorAll<HTMLElement>(".xp"));
    let current = 0;
    let frame = 0;

    const tick = () => {
      const rect = el.getBoundingClientRect();
      const target = Math.min(1, Math.max(0, (innerHeight / 2 - rect.top) / rect.height));
      current += (target - current) * 0.12;
      if (Math.abs(target - current) < 0.0005) current = target;

      el.style.setProperty("--progress", String(current));
      const tip = current * rect.height;
      for (const item of items) item.classList.toggle("is-lit", item.offsetTop <= tip);

      frame = current === target ? 0 : requestAnimationFrame(tick);
    };
    const start = () => {
      if (!frame) frame = requestAnimationFrame(tick);
    };

    el.classList.add("is-animated");
    start();
    addEventListener("scroll", start, { passive: true });
    addEventListener("resize", start);
    return () => {
      cancelAnimationFrame(frame);
      removeEventListener("scroll", start);
      removeEventListener("resize", start);
    };
  }, []);

  return ref;
}

export default function Home() {
  const { lang, prefix, person, social, home, about, work, blog } = useContent();
  const [skillView, setSkillView] = useState<SkillView>({ skill: 0, filter: null });
  const projects = listEntries("work", lang);
  const posts = listEntries("build-learn", lang);
  const timelineRef = useTimelineProgress();

  return (
    <main id="top">
      <section className="hero">
        <div className="hero-intro">
          <div className="hero-art" aria-hidden="true">
            <DotMorph shapes={LEFT_ART} className="dot-art left" />
            <DotMorph shapes={RIGHT_ART} className="dot-art right" />
          </div>

          <div className="container hero-copy">
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

            <div className="hero-cta mono">
              <a href="#projects" className="btn btn-primary">
                → {home.cta.projects}
              </a>
              <a href="#blog" className="btn">
                {home.cta.blog}
              </a>
              <a href="#contact" className="btn">
                {home.cta.contact}
              </a>
            </div>

            <ul className="hero-social">
              {social.map((s) => (
                <li key={s.name}>
                  <a href={s.link} className="icon-btn" aria-label={s.name}>
                    {SOCIAL_ICONS[s.name] ?? s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </section>

      <section id="profile" className="container block profile">
        <div>
          <p className="label mono">{home.sections.profile}</p>
          <h2 className="profile-title">{about.profile.title}</h2>
          <p className="lead">{about.profile.description}</p>

          <div className="terminal mono">
            <p className="terminal-bar">{about.profile.terminal.host}</p>
            <dl>
              {about.profile.terminal.lines.map((line) => (
                <div key={line.command}>
                  <dt>
                    <span className="prompt">$</span> {line.command}
                  </dt>
                  <dd>{line.output}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div>
          <p className="profile-summary">{about.profile.summary}</p>
          <ul className="focus">
            {about.profile.focus.map((item) => (
              <li key={item.path}>
                <span className="focus-icon">{FOCUS_ICONS[item.icon]}</span>
                <div>
                  <p className="focus-path mono">{item.path}</p>
                  <h3>{item.title}</h3>
                  <p className="muted">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="experience" className="container block">
        <p className="label mono">{home.sections.experience}</p>
        <h2>{about.work.title}</h2>
        <ol className="timeline" ref={timelineRef}>
          {about.work.experiences.map((xp) => (
            <li key={`${xp.company}-${xp.timeframe}`} className={xp.logo ? "xp has-logo" : "xp"}>
              {xp.logo && <img className="xp-logo" src={xp.logo} alt="" width={56} height={56} loading="lazy" />}
              <p className="timeframe mono">{xp.timeframe}</p>
              <h3>{xp.role}</h3>
              <p className="company muted">{xp.company}</p>
              {xp.summary && <p className="xp-summary muted">{xp.summary}</p>}
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
        <ul className="cards projects">
          {projects.map(({ slug, frontmatter }) => {
            // "Name – Tagline": the name is the heading, the tagline goes next to the year.
            const [name, tagline] = frontmatter.title.split(" – ");
            const stack = frontmatter.stack ?? [];
            const cover = frontmatter.images?.[0];
            return (
              <li key={slug} className="card project work-card">
                {cover && <img className="work-cover" src={cover} alt="" loading="lazy" />}
                {cover && frontmatter.coverCaption && (
                  <p className="work-cover-caption">{frontmatter.coverCaption}</p>
                )}
                <div className="work-body">
                  <p className="timeframe mono">
                    {frontmatter.publishedAt.slice(0, 4)}
                    {tagline && ` · ${tagline}`}
                  </p>
                  <h3>
                    <Link to={`${prefix}/work/${slug}`}>{name}</Link>
                  </h3>
                  <p className="muted work-summary">
                    <InlineCode text={frontmatter.summary} />
                  </p>
                  {stack.length > 0 && (
                    <ul className="chips mono">
                      {stack.slice(0, MAX_CHIPS).map((tech) => (
                        <li key={tech}>{tech}</li>
                      ))}
                      {stack.length > MAX_CHIPS && <li className="chip-more">+{stack.length - MAX_CHIPS}</li>}
                    </ul>
                  )}
                  <Link to={`${prefix}/work/${slug}`} className="card-cta mono">
                    {work.labels.readCaseStudy} →
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>

        <h3 id="blog" className="sub-title">
          {blog.title}
        </h3>
        <p className="muted">{blog.intro}</p>
        <ul className="cards projects">
          {posts.map(({ slug, frontmatter }) => (
            <li key={slug} className="card project">
              <p className="timeframe mono">
                {frontmatter.publishedAt}
                {frontmatter.tag && ` · ${frontmatter.tag}`}
              </p>
              <h3>
                <Link to={`${prefix}/build-learn/${slug}`}>{frontmatter.title}</Link>
              </h3>
              <p className="muted">{frontmatter.summary}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="stack" className="block">
        <div className="container">
          <p className="label mono">{home.sections.stack}</p>
          <h2>{about.technical.title}</h2>
        </div>

        <div className="marquee">
          {/* Two identical tracks loop seamlessly; each repeats the list so one track is wider than the screen. */}
          {[0, 1].map((track) => (
            <ul key={track} className="marquee-track" aria-hidden={track > 0 || undefined}>
              {Array.from({ length: MARQUEE_REPEAT }, (_, r) =>
                home.stack.map((tech) => (
                  // Only the first pass of the first track is read out.
                  <li key={`${r}-${tech}`} aria-hidden={r > 0 || undefined}>
                    <StackLogo
                      tech={tech}
                      tip={`${home.stackTip} ${tech}`}
                      hidden={track > 0 || r > 0}
                      onPick={() => setSkillView(viewForTag(about.technical.skills, tech))}
                    />
                  </li>
                )),
              )}
            </ul>
          ))}
        </div>

        <div className="container">
          <SkillTabs id={SKILLS_ID} skills={about.technical.skills} view={skillView} onView={setSkillView} />
        </div>
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
  );
}
