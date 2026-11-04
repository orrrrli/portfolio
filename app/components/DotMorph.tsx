import { useEffect, useRef } from "react";

/** A silhouette (any opaque SVG/PNG) and the two CSS color tokens of its 135deg gradient. */
export type DotShape = { src: string; from: string; to: string };

type Rgb = [number, number, number];
type Dot = { x: number; y: number; color: Rgb };

const SPACING = 7;
const RADIUS = 1.4;
const ALPHA = 0.55;
const HOLD_MS = 4500;
const MORPH_MS = 1800;
/** Max per-dot delay, as a fraction of the morph, so dots leave in a wave instead of all at once. */
const STAGGER = 0.35;
/** Idle float: the drawing moves as one rigid shape, bobbing up/down and swaying sideways at another pace. */
const BOB_PX = 4;
const BOB_SPEED = 0.0007;
const SWAY_PX = 2;
const SWAY_SPEED = 0.00045;

function readToken(name: string): Rgb {
  const hex = getComputedStyle(document.documentElement).getPropertyValue(name).trim().replace("#", "");
  const n = Number.parseInt(hex.length === 3 ? [...hex].map((c) => c + c).join("") : hex, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

const mix = (a: number, b: number, t: number) => a + (b - a) * t;
const mixRgb = (a: Rgb, b: Rgb, t: number): Rgb => [mix(a[0], b[0], t), mix(a[1], b[1], t), mix(a[2], b[2], t)];
const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);

/** Rasterizes the image contained in a size x size box and keeps one dot per opaque grid cell. */
function sample(img: HTMLImageElement, size: number, from: Rgb, to: Rgb): Dot[] {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  if (!ctx) return [];
  // Leave room for the float so dots never drift past the canvas edge.
  const fit = size - 2 * (Math.max(BOB_PX, SWAY_PX) + RADIUS);
  const scale = Math.min(fit / img.naturalWidth, fit / img.naturalHeight);
  const w = img.naturalWidth * scale;
  const h = img.naturalHeight * scale;
  ctx.drawImage(img, (size - w) / 2, (size - h) / 2, w, h);
  const { data } = ctx.getImageData(0, 0, size, size);

  const dots: Dot[] = [];
  for (let y = SPACING / 2; y < size; y += SPACING) {
    for (let x = SPACING / 2; x < size; x += SPACING) {
      if (data[(Math.floor(y) * size + Math.floor(x)) * 4 + 3] > 128) {
        dots.push({ x, y, color: mixRgb(from, to, (x + y) / (2 * size)) });
      }
    }
  }
  return dots;
}

function shuffle<T>(items: T[]): T[] {
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }
  return items;
}

/** Pads every shape to the same dot count (extra dots stack on existing ones) so dot i always has a target. */
function align(shapes: Dot[][]): Dot[][] {
  const count = Math.max(...shapes.map((s) => s.length));
  return shapes.map((dots) => {
    const padded = shuffle([...dots]);
    for (let i = dots.length; i < count; i++) padded.push(dots[i % dots.length]);
    return padded;
  });
}

/** Cycles through the shapes on a canvas; every dot travels from its spot in one shape to its spot in the next. */
export function DotMorph({ shapes, className }: { shapes: DotShape[]; className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let cancelled = false;
    let frame = 0;
    let visible = true;
    let loop: FrameRequestCallback | null = null;

    // Runs the loop only while the canvas is on screen.
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && loop && !frame) frame = requestAnimationFrame(loop);
    });
    observer.observe(canvas);

    const dot = (x: number, y: number, color: Rgb) => {
      ctx.fillStyle = `rgb(${color[0]} ${color[1]} ${color[2]})`;
      ctx.beginPath();
      ctx.arc(x, y, RADIUS, 0, Math.PI * 2);
      ctx.fill();
    };

    const start = async () => {
      const size = Math.round(canvas.clientWidth);
      if (!size) return;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.height = size * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.globalAlpha = ALPHA;

      const images = await Promise.all(
        shapes.map(async ({ src }) => {
          const img = new Image();
          img.src = src;
          await img.decode();
          return img;
        }),
      );
      if (cancelled) return;

      const targets = align(
        images.map((img, i) => sample(img, size, readToken(shapes[i].from), readToken(shapes[i].to))),
      );
      if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
        for (const { x, y, color } of targets[0]) dot(x, y, color);
        return;
      }

      const delays = targets[0].map(() => Math.random() * STAGGER);
      let current = 0;
      let morphStart = -1;
      let nextMorphAt = performance.now() + HOLD_MS;

      const tick: FrameRequestCallback = (now) => {
        if (!visible) {
          frame = 0;
          return;
        }
        if (morphStart < 0 && targets.length > 1 && now >= nextMorphAt) morphStart = now;

        const from = targets[current];
        let to = from;
        let progress = 1;
        if (morphStart >= 0) {
          progress = (now - morphStart) / MORPH_MS;
          to = targets[(current + 1) % targets.length];
          if (progress >= 1) {
            current = (current + 1) % targets.length;
            morphStart = -1;
            nextMorphAt = now + HOLD_MS;
          }
        }

        const bob = Math.sin(now * BOB_SPEED) * BOB_PX;
        const sway = Math.sin(now * SWAY_SPEED) * SWAY_PX;
        ctx.clearRect(0, 0, size, size);
        for (let i = 0; i < from.length; i++) {
          const a = from[i];
          const b = to[i];
          const t = from === to ? 1 : ease(Math.min(1, Math.max(0, (progress - delays[i]) / (1 - STAGGER))));
          dot(
            mix(a.x, b.x, t) + sway,
            mix(a.y, b.y, t) + bob,
            t === 1 ? b.color : mixRgb(a.color, b.color, t),
          );
        }
        frame = requestAnimationFrame(tick);
      };
      loop = tick;
      frame = requestAnimationFrame(tick);
    };

    start();
    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [shapes]);

  return <canvas ref={ref} className={className} aria-hidden="true" />;
}
