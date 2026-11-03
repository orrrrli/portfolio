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
    image: "/images/og/home.jpg",
    headline: ["Building reliable backends and seamless frontend experiences"],
    subline: [
      "Full Stack Developer based in Ensenada",
      "Designing reliable systems and intuitive user experiences.",
    ],
    stack: ["ASP.NET Core", "C#", "React", "Next.js", "TypeScript", "PostgreSQL", "Docker"],
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
        "Full Stack Developer based in Ensenada, Mexico, with 3+ years building production systems with ASP.NET Core and Clean Architecture, shipping full-stack products end-to-end.",
    },
    work: {
      title: "Work Experience",
      experiences: [
        {
          company: "Sistemas de Información Mozart",
          timeframe: "Jun 2024 – Feb 2026",
          role: "Software Engineer",
          sections: [
            {
              title: "Backend (.NET)",
              achievements: [
                "Architected and implemented 100+ RESTful API endpoints using ASP.NET Core 8, C#, and Entity Framework Core, following Clean Architecture and CQRS principles.",
                "Implemented cursor-based pagination on a module with 5,000+ records and ~20 properties, reducing load time from 10–12 minutes to 4–5 minutes.",
                "Designed and deployed a structured production logging system with role-based access for the support team, enabling independent error identification without escalating to engineering.",
                "Implemented end-to-end request tracing using Correlation IDs propagated across chained endpoint calls within the same flow, enabling full request chain visibility in production.",
                "Implemented a unit test suite with xUnit and Moq covering full positive and negative path coverage across all API endpoints, catching regressions before they reached production.",
              ],
            },
            {
              title: "Android App (Kotlin / Jetpack Compose)",
              achievements: [
                "Built an offline-first inventory application enabling warehouse operators to continue working without internet connectivity.",
                "Designed an incremental synchronization mechanism based on modification timestamps, significantly reducing transferred data volume.",
                "Implemented Clean Architecture to separate business logic from UI layers.",
                "Secured authentication using JWT with automatic token refresh.",
                "Designed intuitive onboarding flows and built reusable UI components, reducing duplicated code across screens.",
                "Implemented a support role with in-device log access, allowing the support team to diagnose client-side issues directly on customer devices without server access.",
              ],
            },
            {
              title: "Infrastructure / Azure",
              achievements: [
                "Researched and built a proof-of-concept for Azure migration (App Service, Blob Storage, Azure SQL), providing the team with real data to support the infrastructure decision.",
              ],
            },
          ],
        },
        {
          company: "Sistemas de Información Mozart",
          timeframe: "Feb 2024 – May 2024",
          role: "Junior Software Engineer (Trainee)",
          sections: [
            {
              title: "Accounting Module (WinForms / C#)",
              achievements: [
                "Developed 10–15 financial report interfaces using WinForms and C#, implementing business logic for report generation over relational data.",
                "Optimized LINQ queries using projections to select only required fields, eliminating unnecessary entity loads and improving report generation efficiency.",
                "Normalized SQL Server table schemas to third normal form, improving data integrity and query efficiency across business movement records.",
                "Applied SOLID principles in the data access layer architecture, reducing database request bottlenecks.",
              ],
            },
          ],
        },
        {
          company: "OmniTEK Dev",
          timeframe: "Feb 2023 – Dec 2023",
          role: "Web Developer",
          sections: [
            {
              title: "Backend (Node.js / Express)",
              achievements: [
                "Developed 30+ REST API endpoints using Node.js and Express, extending an existing backend to support new business features across client projects.",
                "Built an isolated scraping microservice for real-time Estafeta shipment tracking without a public API available, decoupling it from the main system to prevent upstream changes from affecting the rest of the application.",
              ],
            },
            {
              title: "Frontend / Components",
              achievements: [
                "Developed responsive landing pages with lead capture forms using React, Remix, and Tailwind CSS, applying Atomic Design to build a reusable component library adopted across multiple client projects.",
                "Translated Figma mockups into production-ready components, shortening design-to-code iteration cycles.",
                "Integrated a newsletter subscription feature by consuming a Node.js API, connecting forms to an external email service and persisting subscriber data to a database.",
                "Identified and resolved frontend bugs across multiple production environments, ensuring consistent UI behavior across deployments.",
              ],
            },
          ],
        },
        {
          company: "Freelance · Full-Stack Development",
          timeframe: "2024 – Present",
          role: "Current Projects · Parallel to full-time employment",
          sections: [
            {
              title: "Axiriam Shop (E-commerce platform, Beta)",
              subsections: [
                {
                  title: "Frontend (Next.js / React)",
                  achievements: [
                    "Built a Next.js 15 App Router storefront and admin dashboard with TypeScript in strict mode, using Atomic Design for a reusable component library shared across customer-facing and admin surfaces.",
                    "Implemented global cart and checkout state with Zustand, persisted to localStorage, coordinating multi-step checkout flows (address, shipping quote, payment) without losing state on reload.",
                    "Integrated Stripe Elements for card and SPEI bank transfer payments, handling redirect-based return flows and reconciling payment status across multiple non-terminal states.",
                    "Built data-fetching hooks with SWR for the admin panel (orders, inventory, quotes, in-store sales), with optimistic mutations for a responsive editing experience.",
                    "Audited and refactored UI components for mobile responsiveness across the storefront and checkout flow.",
                  ],
                },
                {
                  title: "Backend (Next.js / Prisma / PostgreSQL)",
                  achievements: [
                    "Designed and implemented 50+ API routes across catalog, cart, orders, quotes, inventory, and admin domains, following Clean Architecture with dependency injection between layers.",
                    "Modeled the core PostgreSQL schema in Prisma covering products, orders, quotes, raw materials, and supplier orders, with mapper layers isolating persistence details from business logic.",
                    "Built Stripe PaymentIntents and webhook integration supporting card and SPEI bank-transfer payments, including idempotent order-status transitions driven by webhook events.",
                    "Integrated Envia shipping API for label generation and tracking, and Cloudinary for asset storage.",
                    "Implemented Redis-backed JWT token blacklisting and rate limiting in middleware to harden the NextAuth.js authentication layer.",
                    "Instrumented critical checkout and order-creation paths with Sentry for production error tracking, closing a prior gap of silent failures in payment processing.",
                    "Wrote unit and integration tests with Vitest for use-case services, enforcing a zero-oversell stock guarantee under concurrent checkout load.",
                  ],
                },
              ],
            },
            {
              title: "Metavix (Diabetes management platform, Beta)",
              subsections: [
                {
                  title: "Backend (ASP.NET Core 9 / C#)",
                  achievements: [
                    "Architected a Clean Architecture and CQRS backend using ASP.NET Core 9, C#, EF Core, and MediatR, exposing 50+ endpoints through Carter minimal APIs with railway-oriented error handling (ErrorOr<T>) instead of exceptions for business logic.",
                    "Designed a clinical goal evaluation engine implementing ADA Standards of Care thresholds with per-patient doctor overrides, pregnancy-specific rule branching, and immutable historical snapshots that never recalculate retroactively.",
                    "Implemented JWT authentication with HttpOnly/Secure cookies, refresh-token rotation, anti-enumeration login responses, and login-attempt lockout, plus doctor identity verification against Mexico's official medical license registry.",
                    "Built a correlation-ID based request tracing system using Serilog and PostgreSQL sink with role-gated log access for support staff, enforcing a strict no-PHI-in-logs policy across the codebase.",
                    "Backed the API with 95+ automated tests across unit and integration suites using xUnit, NSubstitute, and Testcontainers for real-database validation.",
                    "AI-powered clinical insights via third-party API integration, pending implementation.",
                  ],
                },
                {
                  title: "Frontend (Next.js / React)",
                  achievements: [
                    "Built the patient and doctor web application with Next.js 16 App Router and React 19, using a feature-folder architecture with role-based route groups and a typed API client layer.",
                    "Implemented a multi-step glucose-logging wizard with React Hook Form and Zod validation, designed mobile-first since patients primarily log data from their phones.",
                    "Used TanStack Query for server-state management and Zustand for session state, with an automatic 401 to token-refresh to retry interceptor to keep cookie-based JWT sessions transparent to the user.",
                    "Built glucose and vitals visualization with Recharts and PDF export of patient records for doctor consultations.",
                  ],
                },
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
