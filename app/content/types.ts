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
  /** Hero button labels */
  cta: { projects: string; blog: string; contact: string };
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
  summary?: string;
  /** Path under public/, rendered as the timeline marker. */
  logo?: string;
  sections: ExperienceSection[];
};

export type FocusIcon = "ai" | "arch" | "ops";

export type Profile = {
  /** Big statement on the left */
  title: string;
  description: string;
  terminal: { host: string; lines: Array<{ command: string; output: string }> };
  /** Lead paragraph on the right, above the focus list */
  summary: string;
  focus: Array<{ icon: FocusIcon; path: string; title: string; description: string }>;
};

export type StoryRow = {
  /** Row label, e.g. "PROBLEM", "DECISION", "HOW", "RESULT" */
  label: string;
  text: string;
  /** Placeholder row still to be written: label renders amber */
  pending?: boolean;
};

export type SkillBullet = {
  topic: string;
  /** Which of the skill's chips this bullet shows under when filtered */
  tags?: string[];
  summary: string;
  story?: StoryRow[];
};

export type About = {
  profile: Profile;
  work: { title: string; experiences: Experience[] };
  technical: {
    title: string;
    skills: Array<{ title: string; description: string; tags: string[]; bullets: SkillBullet[] }>;
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
