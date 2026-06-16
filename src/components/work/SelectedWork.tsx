import { getPosts } from "@/utils/utils";
import { Column, Heading, RevealFx } from "@once-ui-system/core";
import { SelectedWorkClient } from "./SelectedWorkClient";

export function SelectedWork(): React.ReactElement {
  const projects = getPosts(["src", "app", "work", "projects"]).sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime()
  );

  if (projects.length === 0) return <></>;

  return (
    <RevealFx translateY="8" delay={0.6} fillWidth>
    <Column fillWidth gap="l">
      <Heading as="h2" variant="display-strong-xs" paddingX="l">
        Selected Work
      </Heading>
      <SelectedWorkClient
        projects={projects.map((p) => ({
          slug: p.slug,
          metadata: {
            title: p.metadata.title,
            summary: p.metadata.summary,
            images: p.metadata.images,
          },
        }))}
      />
    </Column>
    </RevealFx>
  );
}
