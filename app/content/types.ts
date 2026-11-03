export type Lang = "en" | "es";

export type Person = {
  firstName: string;
  lastName: string;
  name: string;
  role: string;
  avatar: string;
  email: string;
  city: string;
  languages: string[];
};

export type SocialLink = { name: string; link: string };

export type Home = {
  label: string;
  title: string;
  description: string;
  /** OG image path */
  image: string;
  /** One entry per line (was <br/> in the old JSX) */
  headline: string[];
  subline: string[];
  stack: string[];
  /** Nav and section labels; keys are the stable anchor ids */
  sections: Record<SectionId, string>;
  backToTop: string;
};

export type SectionId = "profile" | "experience" | "projects" | "stack" | "contact";

export type ExperienceSubsection = { title: string; achievements: string[] };

/** A section holds either a flat list or nested subsections, never both. */
export type ExperienceSection =
  | { title: string; achievements: string[] }
  | { title: string; subsections: ExperienceSubsection[] };

export type Experience = {
  company: string;
  timeframe: string;
  role: string;
  sections: ExperienceSection[];
};

export type About = {
  intro: { title: string; description: string };
  work: { title: string; experiences: Experience[] };
  studies: {
    title: string;
    institutions: Array<{ name: string; description: string; link?: string }>;
  };
  technical: {
    title: string;
    skills: Array<{ title: string; description: string; tags: string[] }>;
  };
};

export type Blog = {
  path: string;
  label: string;
  title: string;
  description: string;
  intro: string;
  labels: { backLink: string; recentPosts: string };
};

export type Work = {
  labels: {
    behindTheBuild: string;
    viewProject: string;
    backToProjects: string;
    selectedWork: string;
    readCaseStudy: string;
  };
};

export type Content = {
  person: Person;
  social: SocialLink[];
  home: Home;
  about: About;
  blog: Blog;
  work: Work;
};
