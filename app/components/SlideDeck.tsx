import { useState } from "react";
import { useContent } from "../content";

type Props = {
  /** Folder with slides named 01.webp, 02.webp, ... */
  src: string;
  count: number;
  title: string;
};

const LABELS = {
  en: { prev: "Previous slide", next: "Next slide", slide: "Slide" },
  es: { prev: "Slide anterior", next: "Slide siguiente", slide: "Slide" },
};

const slideUrl = (src: string, n: number) => `${src}/${String(n).padStart(2, "0")}.webp`;

/** Step-through viewer for a presentation exported as numbered images. */
export function SlideDeck({ src, count, title }: Props) {
  const t = LABELS[useContent().lang];
  const [current, setCurrent] = useState(1);

  const go = (n: number) => setCurrent(Math.min(count, Math.max(1, n)));

  return (
    <figure
      className="deck"
      tabIndex={0}
      aria-roledescription="carousel"
      aria-label={title}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") go(current - 1);
        if (e.key === "ArrowRight") go(current + 1);
      }}
    >
      <img
        className="deck-slide"
        src={slideUrl(src, current)}
        alt={`${title}, ${t.slide.toLowerCase()} ${current} / ${count}`}
        width={1600}
        height={900}
      />
      {/* Preloads the next slide so stepping forward feels instant. */}
      {current < count && <link rel="prefetch" as="image" href={slideUrl(src, current + 1)} />}

      <div className="deck-controls mono">
        <button type="button" aria-label={t.prev} disabled={current === 1} onClick={() => go(current - 1)}>
          ←
        </button>
        <span aria-live="polite">
          {current} / {count}
        </span>
        <button type="button" aria-label={t.next} disabled={current === count} onClick={() => go(current + 1)}>
          →
        </button>
      </div>
    </figure>
  );
}
