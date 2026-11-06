import { type KeyboardEvent, useEffect, useId, useRef, useState } from "react";
import type { About } from "../content/types";
import { SkillBullet } from "./SkillBullet";

type Skill = About["technical"]["skills"][number];

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

/**
 * One tab per skill; only the selected skill's card is shown. ARIA tabs pattern with arrow-key
 * navigation. The tab row scrolls as an endless loop: when a scroll settles outside the middle
 * copy, it jumps by exactly one copy, which looks identical.
 */
export function SkillTabs({ skills }: { skills: Skill[] }) {
  const [active, setActive] = useState(0);
  const [filter, setFilter] = useState<string | null>(null);
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);
  const list = useRef<HTMLDivElement>(null);
  const settle = useRef<number | undefined>(undefined);
  const baseId = useId();
  const skill = skills[active];
  const bullets = filter ? skill.bullets.filter((b) => b.tags?.includes(filter)) : skill.bullets;

  const selectTab = (i: number) => {
    setActive(i);
    setFilter(null);
  };

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
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * el.clientWidth * 0.6, behavior: reduce ? "auto" : "smooth" });
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
    <div className="skill-tabs">
      <div className="skill-tabbar">
        {/* Outside the tablist: keyboard users already move between tabs with the arrow keys. */}
        <button type="button" className="skill-scroll" aria-label="Scroll tabs left" tabIndex={-1} onClick={() => scrollTabs(-1)}>
          ‹
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
          ›
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
                  onClick={() => setFilter(filter === tag ? null : tag)}
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
