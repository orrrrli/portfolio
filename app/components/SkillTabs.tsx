import { type KeyboardEvent, useEffect, useId, useRef } from "react";
import type { About } from "../content/types";
import { SkillBullet } from "./SkillBullet";

type Skill = About["technical"]["skills"][number];

/** Which skill tab is open and which of its chips filters the bullets. Owned by the page so other sections can open a tab. */
export type SkillView = { skill: number; filter: string | null };

/**
 * The tab titled `tag` with no filter; else the tab with the most bullets tagged `tag`, with that chip on;
 * else the tab whose title names `tag` as one of its parts ("React" in "React / Next.js"), with no filter.
 */
export function viewForTag(skills: Skill[], tag: string): SkillView {
  const titled = skills.findIndex((s) => s.title === tag);
  if (titled >= 0) return { skill: titled, filter: null };
  const named = skills.findIndex((s) => s.title.split(" / ").includes(tag));
  if (named >= 0) return { skill: named, filter: null };
  const counts = skills.map((s) => s.bullets.filter((b) => b.tags?.includes(tag)).length);
  const most = Math.max(...counts);
  return { skill: most > 0 ? counts.indexOf(most) : 0, filter: most > 0 ? tag : null };
}

const motion = (): ScrollBehavior =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";

/** The tab row is rendered three times side by side; the middle copy holds the real tabs. */
const COPIES = [0, 1, 2] as const;
const REAL = 1;
/** How much of the copy before the real one peeks in on the left, under the fade. */
const PEEK_PX = 48;

/** Width of one copy of the row, gap included: distance between the first tab of two copies. */
function period(el: HTMLDivElement) {
  const first = el.children[0] as HTMLElement | undefined;
  const nextFirst = el.children[el.children.length / COPIES.length] as HTMLElement | undefined;
  return first && nextFirst ? nextFirst.offsetLeft - first.offsetLeft : 0;
}

/** SVG instead of the ‹ › glyphs, which sit off-center in the font's line box. */
function Chevron({ d }: { d: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}

/**
 * One tab per skill; only the selected skill's card is shown. ARIA tabs pattern with arrow-key
 * navigation. The tab row scrolls as an endless loop: when a scroll settles outside the middle
 * copy, it jumps by exactly one copy, which looks identical.
 */
export function SkillTabs({ id, skills, view, onView }: { id: string; skills: Skill[]; view: SkillView; onView: (view: SkillView) => void }) {
  const { skill: active, filter } = view;
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);
  const list = useRef<HTMLDivElement>(null);
  const settle = useRef<number | undefined>(undefined);
  const baseId = useId();
  const skill = skills[active];
  const bullets = filter ? skill.bullets.filter((b) => b.tags?.includes(filter)) : skill.bullets;

  const selectTab = (i: number) => onView({ skill: i, filter: null });

  useEffect(() => {
    const start = () => {
      const el = list.current;
      if (!el) return;
      el.scrollLeft = period(el) - PEEK_PX;
    };
    start();
    // Web fonts change tab widths after first paint.
    document.fonts?.ready.then(start);
  }, []);

  // A tab opened from outside (or by arrow key) may sit under the fades: bring it to the middle.
  useEffect(() => {
    const el = list.current;
    const tab = tabs.current[active];
    if (!el || !tab) return;
    const row = el.getBoundingClientRect();
    const box = tab.getBoundingClientRect();
    if (box.left >= row.left + PEEK_PX && box.right <= row.right - PEEK_PX) return;
    el.scrollBy({ left: box.left + box.width / 2 - (row.left + row.width / 2), behavior: motion() });
  }, [active]);

  // ponytail: wraps on a 150 ms debounce instead of `scrollend`, which Safari lacked until recently.
  const onScroll = () => {
    window.clearTimeout(settle.current);
    settle.current = window.setTimeout(() => {
      const el = list.current;
      if (!el) return;
      const p = period(el);
      if (el.scrollLeft < p * 0.5) el.scrollLeft += p;
      else if (el.scrollLeft > p * 1.5) el.scrollLeft -= p;
    }, 150);
  };

  /** Arrow buttons move the row by most of its visible width. */
  const scrollTabs = (dir: 1 | -1) => {
    const el = list.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.6, behavior: motion() });
  };

  const onKeyDown = (e: KeyboardEvent) => {
    const step = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
    if (!step) return;
    e.preventDefault();
    const next = (active + step + skills.length) % skills.length;
    selectTab(next);
    tabs.current[next]?.focus();
  };

  return (
    <div id={id} className="skill-tabs">
      <div className="skill-tabbar">
        {/* Outside the tablist: keyboard users already move between tabs with the arrow keys. */}
        <button type="button" className="skill-scroll" aria-label="Scroll tabs left" tabIndex={-1} onClick={() => scrollTabs(-1)}>
          <Chevron d="M10 3 L5 8 L10 13" />
        </button>
        <div ref={list} role="tablist" className="skill-tablist mono" onKeyDown={onKeyDown} onScroll={onScroll}>
          {COPIES.flatMap((copy) =>
            skills.map((s, i) => {
              const real = copy === REAL;
              return (
                <button
                  key={`${copy}-${s.title}`}
                  ref={
                    real
                      ? (el) => {
                          tabs.current[i] = el;
                        }
                      : undefined
                  }
                  type="button"
                  // Clones only exist for the loop: hidden from assistive tech and the tab order.
                  role={real ? "tab" : undefined}
                  aria-hidden={real ? undefined : true}
                  id={real ? `${baseId}-tab-${i}` : undefined}
                  aria-selected={real ? i === active : undefined}
                  data-selected={i === active || undefined}
                  aria-controls={real ? `${baseId}-panel` : undefined}
                  tabIndex={real && i === active ? 0 : -1}
                  onClick={() => selectTab(i)}
                >
                  {s.title}
                </button>
              );
            }),
          )}
        </div>
        <button type="button" className="skill-scroll" aria-label="Scroll tabs right" tabIndex={-1} onClick={() => scrollTabs(1)}>
          <Chevron d="M6 3 L11 8 L6 13" />
        </button>
      </div>

      <div role="tabpanel" id={`${baseId}-panel`} aria-labelledby={`${baseId}-tab-${active}`} className="card skill-panel">
        <p className="muted">{skill.description}</p>
        <ul className="chips mono skill-filters">
          {skill.tags.map((tag) => {
            const count = skill.bullets.filter((b) => b.tags?.includes(tag)).length;
            return (
              <li key={tag}>
                <button
                  type="button"
                  aria-pressed={filter === tag}
                  disabled={count === 0}
                  onClick={() => onView({ skill: active, filter: filter === tag ? null : tag })}
                >
                  {tag} <span className="skill-filter-count">{count}</span>
                </button>
              </li>
            );
          })}
        </ul>
        {bullets.length > 0 && (
          <ul className="skill-bullets">
            {bullets.map((bullet) => (
              // key includes the skill so switching tabs resets each bullet's open state
              <li key={`${skill.title}-${bullet.topic}`}>
                <SkillBullet {...bullet} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
