import { type MouseEvent, type PointerEvent, useEffect, useRef } from "react";
import { STACK_ICONS } from "../content/stackIcons";

/** Copies of the list per track: 18 logos are about 1950px, so 2 cover a 2560px screen. */
const REPEAT = 2;
/** Auto-scroll speed, px per second. */
const SPEED = 30;
/** After a wheel or touch scroll, wait this long before moving on its own again. */
const IDLE_MS = 1500;
/** Share of a throw's speed kept every 16 ms after a drag. */
const FRICTION = 0.95;
/** Pointer travel that turns a press into a drag (and cancels the link click). */
const DRAG_PX = 5;

type Drag = { startX: number; startPos: number; lastX: number; lastT: number; moved: boolean };

/**
 * Logo strip that scrolls on its own and also by trackpad, wheel, touch or mouse drag.
 * Two identical tracks: when the scroll passes one track's width it jumps back by exactly
 * that width, which looks the same, so the strip never ends.
 */
export function StackMarquee({
  stack,
  tip,
  href,
  onPick,
}: {
  stack: string[];
  tip: (tech: string) => string;
  href: string;
  onPick: (tech: string) => void;
}) {
  const box = useRef<HTMLDivElement>(null);
  const hover = useRef(false);
  const drag = useRef<Drag | null>(null);
  const velocity = useRef(0);
  const lastInput = useRef(0);
  const skipClick = useRef(false);
  // Fractional position: scrollLeft rounds, and 0.5px steps would stall.
  const pos = useRef(0);

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const touched = () => {
      lastInput.current = performance.now();
      velocity.current = 0;
    };
    el.addEventListener("wheel", touched, { passive: true });
    el.addEventListener("touchmove", touched, { passive: true });

    let frame = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min(now - last, 50);
      last = now;
      const width = (el.children[1] as HTMLElement).offsetLeft - (el.children[0] as HTMLElement).offsetLeft;
      if (drag.current) {
        // pointermove sets the position
      } else if (Math.abs(velocity.current) > 0.01) {
        pos.current += velocity.current * dt;
        velocity.current *= FRICTION ** (dt / 16);
      } else if (now - lastInput.current < IDLE_MS || hover.current || el.matches(":focus-within") || reduce) {
        pos.current = el.scrollLeft; // follow native scrolling
      } else {
        pos.current += (SPEED * dt) / 1000;
      }
      // ponytail: the wrap writes scrollLeft mid-gesture, which can cut iOS momentum short once per lap.
      if (width > 0 && pos.current >= width) pos.current -= width;
      else if (width > 0 && pos.current < 1) pos.current += width;
      if (Math.abs(el.scrollLeft - pos.current) >= 0.5) el.scrollLeft = pos.current;
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("wheel", touched);
      el.removeEventListener("touchmove", touched);
    };
  }, []);

  // Mouse only: touch and trackpad already scroll natively. Listens on window so the
  // drag keeps going outside the strip; no pointer capture, which would steal the link click.
  const onPointerDown = (e: PointerEvent) => {
    if (e.pointerType !== "mouse" || e.button !== 0) return;
    e.preventDefault(); // no text selection or native link drag
    drag.current = { startX: e.clientX, startPos: pos.current, lastX: e.clientX, lastT: e.timeStamp, moved: false };
    velocity.current = 0;
    const move = (ev: globalThis.PointerEvent) => {
      const d = drag.current;
      if (!d) return;
      if (Math.abs(ev.clientX - d.startX) > DRAG_PX) d.moved = true;
      pos.current = d.startPos - (ev.clientX - d.startX);
      const dt = ev.timeStamp - d.lastT;
      if (dt > 0) velocity.current = -(ev.clientX - d.lastX) / dt;
      d.lastX = ev.clientX;
      d.lastT = ev.timeStamp;
    };
    const up = (ev: globalThis.PointerEvent) => {
      const d = drag.current;
      // A pause before letting go means no throw.
      if (d && ev.timeStamp - d.lastT > 80) velocity.current = 0;
      skipClick.current = d?.moved ?? false;
      drag.current = null;
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
  };

  const onClickCapture = (e: MouseEvent) => {
    if (!skipClick.current) return;
    skipClick.current = false;
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div
      ref={box}
      className="marquee"
      onPointerDown={onPointerDown}
      onPointerEnter={(e) => {
        if (e.pointerType === "mouse") hover.current = true;
      }}
      onPointerLeave={() => {
        hover.current = false;
      }}
      onClickCapture={onClickCapture}
    >
      {[0, 1].map((track) => (
        <ul key={track} className="marquee-track" aria-hidden={track > 0 || undefined}>
          {Array.from({ length: REPEAT }, (_, r) =>
            stack.map((tech) => {
              const hidden = track > 0 || r > 0;
              const d = STACK_ICONS[tech];
              return (
                // Only the first pass of the first track is read out and reachable by Tab.
                <li key={`${r}-${tech}`} aria-hidden={hidden || undefined}>
                  <a
                    href={href}
                    className="marquee-link"
                    data-tip={tip(tech)}
                    aria-label={tip(tech)}
                    tabIndex={hidden ? -1 : undefined}
                    draggable={false}
                    onClick={() => onPick(tech)}
                  >
                    {d ? (
                      <svg className="marquee-logo" viewBox="0 0 24 24" aria-hidden="true">
                        <path d={d} fill="currentColor" />
                      </svg>
                    ) : (
                      <span className="mono">{tech}</span>
                    )}
                  </a>
                </li>
              );
            }),
          )}
        </ul>
      ))}
    </div>
  );
}
