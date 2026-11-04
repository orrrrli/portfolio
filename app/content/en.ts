import type { Content, Person } from "./types";

const person: Person = {
  firstName: "Orlando",
  lastName: "Castañeda",
  name: "Orlando Castañeda",
  role: "Full Stack Developer",
  avatar: "/images/avatar-og.jpg",
  email: "keorcasa@gmail.com",
  city: "Ensenada, Mexico",
  languages: ["English", "Spanish"],
};

export const en: Content = {
  person,
  social: [
    { name: "GitHub", link: "https://github.com/orrrrli" },
    { name: "LinkedIn", link: "https://www.linkedin.com/in/castasan-orlando/" },
    { name: "Email", link: `mailto:${person.email}` },
  ],
  home: {
    label: "Home",
    title: `${person.name}, Full Stack Developer`,
    description:
      "Portfolio of Orlando Castañeda, a Full Stack Developer building backends with .NET and products with React and Next.js.",
    image: "/images/og/home-en.png",
    headline: ["Building reliable backends and seamless frontend experiences"],
    subline: [
      "Full Stack Developer based in Ensenada",
      "Designing reliable systems and intuitive user experiences.",
    ],
    stack: ["ASP.NET Core", "C#", "React", "Next.js", "TypeScript", "PostgreSQL", "Docker"],
    cta: { projects: "View projects", blog: "Read the blog", contact: "Contact" },
    sections: {
      profile: "profile",
      experience: "experience",
      projects: "projects",
      stack: "stack",
      contact: "contact",
    },
    backToTop: "top",
  },
  about: {
    intro: {
      title: "Introduction",
      description:
        "Full Stack Developer based in Ensenada, Mexico, with around 4 years building production systems with ASP.NET Core and Clean Architecture, shipping full-stack products end-to-end.",
    },
    work: {
      title: "Work Experience",
      experiences: [
        {
          company: "Dallio Software Solutions",
          logo: "/images/companies/dallio.svg",
          timeframe: "Mar 2026 – Present",
          role: "Software Engineer",
          summary: "Full-stack development of mobile products for clients: a social golf app with real-money games (iOS + Kotlin API + Next.js console) and a golf community app (Android).",
          sections: [
            {
              title: "LLM & Agentic Systems",
              achievements: [
                "LLM assistant: Shipped features for the app's LLM golf assistant: it builds a round from a chat conversation using 13 tools, answers photo questions, and reminds users of upcoming rounds. Took part in 67 evals against the live model, with 92% tool-call success, a sub-500 ms median per tool call and an average cost of $0.03 USD per eval. Added a system to limit questions and a guard against API failures, and made replies stream one at a time with a Stop control, charging each question exactly once.",
                "Vision image gate: Integrated a vision model (Cloudflare Clef via OpenRouter) as an image gate that rejects blurry images and images that do not match the expected content, and requests a new image when model confidence falls below a threshold. Tuned its thresholds on live calls and fixed false \"blurry\" rejections of sharp images, reaching 95.6% classification accuracy.",
              ],
            },
            {
              title: "Product (iOS + Kotlin API)",
              achievements: [
                "Transactional workflow engine: Built payments, payouts and game states for real-money games (Kotlin/Spring Boot API + SwiftUI): geolocation check-in, Lucra charges and payouts, and a state machine driven by scheduled tasks with automatic actions such as expirations and reminders. Guarded money paths with server-side state validation and optimistic locking against concurrent writes, validated end to end across 118 buy-ins with zero duplicate charges.",
              ],
            },
            {
              title: "Infra & Security",
              achievements: [
                "Content delivery: Built image delivery on Google Cloud Storage and imgproxy on Cloud Run behind Cloud CDN: images are 10x lighter than the originals (45 KB vs 450 KB on average) and 94% of bytes are served from cache.",
                "Storage security: Detected and fixed an exposure that allowed listing the content buckets and downloading private photos from chats and the assistant. Restricted bucket access with Terraform and classified every file as public or private, so private content can no longer be discovered or bulk-downloaded.",
                "Real-time infra: Fixed the app's real-time connection, which dropped every 30 s, by giving its streaming routes a dedicated Kubernetes Service with a longer load-balancer timeout. Reconnections dropped 92%.",
              ],
            },
          ],
        },
        {
          company: "Sistemas de Información Mozart",
          logo: "/images/companies/mozart.jpg",
          timeframe: "Jan 2024 – Feb 2026",
          role: "Software Engineer",
          summary: "Joined as a Trainee in Jan 2024 and became Software Engineer in Jun 2024. Backend and Android app of the ERP.",
          sections: [
            {
              title: "Backend (.NET)",
              achievements: [
                "Architected and implemented 100+ RESTful endpoints with ASP.NET Core 8, C# and EF Core, following Clean Architecture and CQRS.",
                "Implemented cursor-based pagination on a module with 5,000+ records and 20+ properties, cutting per-page query time from 1–2 s to an average of 500 ms.",
                "Designed a structured production logging system with role-based access: the support team identifies errors directly, without escalating to development.",
                "Wrote a unit test suite (xUnit, Moq) covering positive and negative paths of every endpoint, catching regressions before they reached production.",
              ],
            },
            {
              title: "Android App (Kotlin / Jetpack Compose)",
              achievements: [
                "Built an offline-first inventory app that lets warehouse operators keep working without internet; by adopting the backend's cursor pagination and optimizing local processing, cut the module's load-and-sync time from 10–12 to 4–5 minutes.",
                "Structured the app into data/domain/presentation layers so the sync logic can be tested without the UI; JWT authentication with automatic token refresh.",
                "Built a reusable component library used across 40+ screens, eliminating redundant implementations.",
                "Implemented a support role with in-device log access to diagnose client-side issues without server access.",
              ],
            },
            {
              title: "Infrastructure & Trainee",
              achievements: [
                "Managed production deployments to IIS and coordinated mobile release builds, keeping versions consistent across development and QA.",
                "As a Trainee, built 10–15 financial report screens (WinForms/C#), optimized LINQ queries with projections and normalized SQL Server schemas to third normal form.",
              ],
            },
          ],
        },
        {
          company: "OmniTEK Dev",
          logo: "/images/companies/omnitek.jpg",
          timeframe: "Feb 2023 – Dec 2023",
          role: "Web Developer",
          sections: [
            {
              title: "Full-Stack & DevOps",
              achievements: [
                "Developed 30+ REST endpoints with Node.js and Express for client projects, including a Warehouse Management System (WMS).",
                "Built an isolated scraping microservice for real-time Estafeta shipment tracking (no public API), decoupled from the main system.",
                "Built landing pages and a reusable component library (React, Remix, Tailwind, Atomic Design) adopted across several projects; by translating Figma mockups into components, cut design-to-code time from days to hours.",
                "Implemented a CI/CD pipeline with GitHub Actions, Docker Compose, Nginx (reverse proxy) and GHCR, deploying automatically to a Linux VPS with reproducible environments.",
              ],
            },
          ],
        },
      ],
    },
    studies: {
      title: "Education",
      institutions: [
        {
          name: "Universidad Autónoma de Baja California",
          description: "B.S. in Software Engineering & Emerging Technologies, 2019–2024.",
        },
        {
          name: "Meta Front-End Developer",
          description: "Professional certificate, Coursera / Meta, 2023.",
          link: "https://coursera.org/share/970fc9983db283fff37e0b2b761e0e88",
        },
        {
          name: "Google Cloud DevOps Engineer",
          description: "Preparing for Google Cloud Certification, Coursera / Google Cloud, 2023.",
          link: "https://coursera.org/share/3ec32abb273169789f880e424ee9e3e3",
        },
      ],
    },
    technical: {
      title: "Technical skills",
      skills: [
        {
          title: "ASP.NET Core / C#",
          description:
            "Building production REST APIs with ASP.NET Core 8, Clean Architecture, CQRS/MediatR, EF Core, and FluentValidation. Patterns I use on every backend.",
          tags: [".NET", "PostgreSQL", "Docker"],
        },
        {
          title: "React / Next.js",
          description:
            "Shipping full-stack products with Next.js 15, TypeScript, Tailwind CSS, Prisma, and Stripe. From checkout flows to admin panels.",
          tags: ["React", "Next.js", "TypeScript"],
        },
      ],
    },
  },
  blog: {
    path: "/build-learn",
    label: "Build & Learn",
    title: "Build & Learn",
    description: "Things I'm building, exploring, and learning as a Full Stack Developer.",
    intro: "Things I build to actually understand how each piece works.",
    labels: { backLink: "Build & Learn", recentPosts: "Recent posts" },
  },
  work: {
    labels: {
      behindTheBuild: "Behind the build",
      viewProject: "View project",
      backToProjects: "Projects",
      selectedWork: "Selected Work",
      readCaseStudy: "Read case study",
    },
  },
};
