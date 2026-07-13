import {
  Heading,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Row,
  Schema,
  Meta,
} from "@once-ui-system/core";
import { baseURL, getContent } from "@/resources";
import { RokevCTA } from "@/components";
import { TechStack } from "@/components/TechStack";
import { SelectedWork } from "@/components/work/SelectedWork";
import { getLanguage } from "@/utils/language";

export async function generateMetadata() {
  const lang = await getLanguage();
  const { home } = getContent(lang);
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default async function Home() {
  const lang = await getLanguage();
  const { home, about, person, rokevCTA } = getContent(lang);
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          minHeight: "100vh",
          padding: "clamp(6rem, 12vh, 10rem) 0 0",
        }}
      >
        <div
          style={{
            maxWidth: 768,
            width: "100%",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          <RevealFx translateY="4" fillWidth horizontal="center">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>
          {home.stack && home.stack.length > 0 && (
            <RevealFx translateY="8" delay={0.3} fillWidth horizontal="center">
              <TechStack stack={home.stack} />
            </RevealFx>
          )}
          <RevealFx delay={0.4} horizontal="center" paddingLeft="12">
            <Button
              id="about"
              data-border="rounded"
              href={about.path}
              variant="secondary"
              size="l"
              weight="default"
              arrowIcon
            >
              <Row gap="8" vertical="center" paddingRight="4">
                {about.avatar.display && (
                  <Avatar
                    marginRight="8"
                    style={{ marginLeft: "-0.75rem" }}
                    src={person.avatar}
                    size="m"
                  />
                )}
                {home.ctaAbout ?? about.title}
              </Row>
            </Button>
          </RevealFx>
        </div>
      </div>
      <Column
        maxWidth="m"
        gap="xl"
        paddingBottom="12"
        horizontal="center"
        style={{ marginInline: "auto" }}
      >
        <SelectedWork />
        <RokevCTA description={rokevCTA.description} buttonLabel={rokevCTA.buttonLabel} />
      </Column>
    </div>
  );
}
