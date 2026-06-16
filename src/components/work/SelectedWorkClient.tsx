"use client";

import { useState } from "react";
import { Column, Row, Heading, Text, Button, IconButton } from "@once-ui-system/core";
import Image from "next/image";

interface ProjectData {
  slug: string;
  metadata: {
    title: string;
    summary: string;
    images: string[];
  };
}

interface SelectedWorkClientProps {
  projects: ProjectData[];
}

export function SelectedWorkClient({ projects }: SelectedWorkClientProps): React.ReactElement {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fading, setFading] = useState(false);

  const goTo = (index: number): void => {
    setFading(true);
    setTimeout(() => {
      setActiveIndex(index);
      setFading(false);
    }, 200);
  };

  const prev = (): void => goTo((activeIndex - 1 + projects.length) % projects.length);
  const next = (): void => goTo((activeIndex + 1) % projects.length);

  const current = projects[activeIndex];

  return (
    <Column fillWidth gap="xl" paddingX="l">
      <div style={{ position: "relative", width: "100%" }}>
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "16/9",
            borderRadius: "var(--radius-l)",
            overflow: "hidden",
            opacity: fading ? 0 : 1,
            transition: "opacity 0.2s ease",
          }}
        >
          {current.metadata.images[0] && (
            <Image
              src={current.metadata.images[0]}
              alt={current.metadata.title}
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          )}
        </div>

        {projects.length > 1 && (
          <>
            <div
              style={{
                position: "absolute",
                bottom: "1rem",
                right: "1rem",
                display: "flex",
                gap: "8px",
                zIndex: 10,
              }}
            >
              <IconButton
                icon="chevronLeft"
                onClick={prev}
                variant="secondary"
                size="m"
                style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)" }}
              />
              <IconButton
                icon="chevronRight"
                onClick={next}
                variant="secondary"
                size="m"
                style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)" }}
              />
            </div>

            <div
              style={{
                position: "absolute",
                bottom: "1.125rem",
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                zIndex: 10,
              }}
            >
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to project ${i + 1}`}
                  style={{
                    width: i === activeIndex ? "24px" : "8px",
                    height: "8px",
                    borderRadius: "4px",
                    background:
                      i === activeIndex
                        ? "var(--brand-solid-strong)"
                        : "var(--neutral-alpha-medium)",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    padding: 0,
                  }}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <Column
        gap="m"
        paddingX="s"
        style={{
          opacity: fading ? 0 : 1,
          transition: "opacity 0.2s ease",
        }}
      >
        <Heading variant="heading-strong-xl">{current.metadata.title}</Heading>
        <Text variant="body-default-l" onBackground="neutral-weak">
          {current.metadata.summary}
        </Text>
        <Button href={`/work/${current.slug}`} variant="secondary" size="m" arrowIcon>
          Read case study
        </Button>
      </Column>
    </Column>
  );
}
