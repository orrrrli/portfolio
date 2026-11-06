import { useId, useState } from "react";
import type { SkillBullet as SkillBulletData } from "../content/types";

/** One skill bullet. With a story it toggles open; without one it is plain text. */
export function SkillBullet({ topic, summary, story = [] }: SkillBulletData) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const expandable = story.length > 0;

  const content = (
    <>
      <span className="skill-bullet-icon" aria-hidden="true">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
          <path d={open ? "M3 8 H13" : "M3 8 H13 M8 3 V13"} />
        </svg>
      </span>
      <span className="skill-bullet-text">
        <span className="skill-bullet-topic mono">{topic}</span>
        <span className="skill-bullet-summary">{summary}</span>
      </span>
    </>
  );

  if (!expandable) {
    return <div className="skill-bullet-row">{content}</div>;
  }

  return (
    <div className="skill-bullet">
      <button
        type="button"
        className="skill-bullet-row skill-bullet-toggle"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
      >
        {content}
      </button>
      {/* grid-rows 0fr -> 1fr animates height without measuring it */}
      <div id={panelId} inert={!open} className="skill-bullet-panel" data-open={open}>
        <div>
          <dl className="skill-bullet-story">
            {story.map((row) => (
              <div key={row.label} data-pending={row.pending || undefined}>
                <dt className="mono">{row.label}</dt>
                <dd>{row.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
