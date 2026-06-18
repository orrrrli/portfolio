import { Column, Heading, Meta, Schema } from "@once-ui-system/core";
import { Posts } from "@/components/blog/Posts";
import { baseURL, getContent } from "@/resources";
import { getLanguage } from "@/utils/language";

export async function generateMetadata() {
  const lang = await getLanguage();
  const { blog } = getContent(lang);
  return Meta.generate({
    title: blog.title,
    description: blog.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(blog.title)}`,
    path: blog.path,
  });
}

export default async function Blog() {
  const lang = await getLanguage();
  const { blog, person } = getContent(lang);
  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        title={blog.title}
        description={blog.description}
        path={blog.path}
        image={`/api/og/generate?title=${encodeURIComponent(blog.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/build-learn`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="l" variant="heading-strong-xl" marginLeft="24">
        {blog.title}
      </Heading>
      <Posts thumbnail />
    </Column>
  );
}
