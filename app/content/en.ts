import type { Content, Person, StoryRow } from "./types";

/** Story row still to be written: renders as an amber placeholder. */
const todo = (label: string): StoryRow => ({ label, text: "[To write]", pending: true });

const person: Person = {
  firstName: "Orlando",
  lastName: "Castañeda",
  name: "Orlando Castañeda",
  role: "AI-focused Software Engineer",
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
    title: `${person.name}, ${person.role}`,
    description:
      "Portfolio of Orlando Castañeda, an AI-focused Software Engineer shipping LLM features on Kotlin and .NET backends, and products with React and Next.js.",
    image: "/images/og/home-en.png",
    headline: ["Building reliable backends and seamless frontend experiences"],
    subline: [
      "AI-focused Software Engineer based in Ensenada",
      "Designing reliable systems and intuitive user experiences.",
    ],
    stack: ["C# / .NET", "React", "Next.js", "TypeScript", "PostgreSQL", "Docker"],
    stackTip: "See work with",
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
    profile: {
      title: "Building production software, from the API to the LLM that calls it.",
      description:
        "Software Engineer with around 4 years in production across backend, mobile and web. Lately I put LLM features into production: tool calling, evals and vision models on Kotlin and .NET backends.",
      terminal: {
        host: "orlando@ensenada:~/career",
        lines: [
          { command: "whoami", output: "AI-focused Software Engineer" },
          {
            command: "grep -i focus ./stack.log",
            output: "LLM tool calling, evals, Kotlin/Spring Boot, ASP.NET Core, SwiftUI, Next.js, GCP",
          },
          { command: "cat education", output: "B.S. Software & Emerging Technologies Engineering, UABC (2019–2024)" },
          { command: "certs --active", output: "Meta Front-End Developer, Google Cloud DevOps (in progress)" },
        ],
      },
      summary:
        "At Dallio I ship mobile products for clients: an LLM assistant with 13 tools, real-money game flows in Kotlin and SwiftUI, and the image pipeline on GCP behind them.",
      focus: [
        {
          icon: "ai",
          path: "./ai",
          title: "LLM features in production",
          description:
            "Tool calling and evals against the live model (92% tool-call success, $0.03 per eval), streamed replies with a Stop control, and a vision model that gates images at 95.6% accuracy.",
        },
        {
          icon: "arch",
          path: "./arch",
          title: "Backend architecture",
          description:
            "Kotlin/Spring Boot and ASP.NET Core with Clean Architecture and CQRS: 100+ REST endpoints, state machines driven by scheduled tasks, and optimistic locking on money paths.",
        },
        {
          icon: "ops",
          path: "./ops",
          title: "Cloud and infrastructure",
          description:
            "GCP (Cloud Run, Storage, CDN), Kubernetes and Terraform: images 10x lighter, locked-down buckets, and a real-time connection with 92% fewer reconnects.",
        },
      ],
    },
    work: {
      title: "Work Experience",
      experiences: [
        {
          company: "Dallio Software Solutions",
          logo: "/images/companies/dallio.svg",
          timeframe: "Mar 2026 – Present",
          role: "Software Engineer",
          summary: "Full-stack development of mobile products for clients: a social app with real-money games (iOS + Kotlin API + Next.js console) and a community app (Android).",
          sections: [
            {
              title: "LLM & Agentic Systems",
              achievements: [
                "LLM assistant: Shipped features for the app's LLM assistant: it sets up a game from a chat conversation using 13 tools, answers photo questions, and reminds users of upcoming games. Took part in 67 evals against the live model, with 92% tool-call success, a sub-500 ms median per tool call and an average cost of $0.03 USD per eval. Added a system to limit questions and a guard against API failures, and made replies stream one at a time with a Stop control, charging each question exactly once.",
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
    technical: {
      title: "Technical skills",
      skills: [
        {
          title: "LLM / AI",
          description:
            "Shipping LLM features to production: tool calling, vision models and streamed replies, measured with evals against the live model.",
          tags: ["Tool calling", "Streaming", "Vision models"],
          bullets: [
            {
              topic: "LLM assistant",
              tags: ["Tool calling"],
              summary:
                "Shipped features for an in-app LLM assistant that sets up a game from a chat conversation using 13 tools, answers photo questions and reminds users of upcoming games.",
              story: [
                todo("PROBLEM"),
                todo("DECISION"),
                todo("HOW"),
                { label: "RESULT", text: "67 evals against the live model: 92% tool-call success, a sub-500 ms median per tool call and $0.03 USD average cost per eval." },
              ],
            },
            {
              topic: "Streaming and limits",
              tags: ["Streaming"],
              summary:
                "Made replies stream one at a time with a Stop control, and added a question limit and a guard against API failures.",
              story: [
                todo("PROBLEM"),
                todo("DECISION"),
                todo("HOW"),
                { label: "RESULT", text: "Each question is charged exactly once." },
              ],
            },
            {
              topic: "Vision image gate",
              tags: ["Vision models"],
              summary:
                "Integrated a vision model (Cloudflare Clef via OpenRouter) that rejects blurry or off-topic images and asks for a new one when confidence falls below a threshold.",
              story: [
                { label: "PROBLEM", text: "The gate rejected sharp images as blurry." },
                todo("DECISION"),
                { label: "HOW", text: "Tuned its thresholds on live calls." },
                { label: "RESULT", text: "95.6% classification accuracy." },
              ],
            },
          ],
        },
        {
          title: "C# / .NET Core",
          description:
            "Building production REST APIs with ASP.NET Core 8, Clean Architecture, CQRS/MediatR, EF Core, and FluentValidation. Patterns I use on every backend.",
          tags: ["C# / .NET", "PostgreSQL", "Docker"],
          bullets: [
            {
              topic: "CQRS",
              tags: ["C# / .NET"],
              summary:
                "Designed a shared Command interface so every Command inserts its data through one common path, instead of re-declaring that logic in each handler.",
              story: [
                {
                  label: "PROBLEM",
                  text: "Every Command handler had to declare the same insert logic by hand, repeating it across the codebase.",
                },
                {
                  label: "DECISION",
                  text: "Defined a Command interface that every Command implements, so inserting data lives in one shared place instead of in each handler.",
                },
                { label: "HOW", text: "[Pipeline behavior, generic handler or base class? One or two sentences.]", pending: true },
                { label: "RESULT", text: "[What changed, only what is true.]", pending: true },
              ],
            },
            {
              topic: "Clean Architecture",
              tags: ["C# / .NET"],
              summary:
                "Split the API into Domain, Application, Infrastructure, API and Contracts, with dependencies pointing inward so business rules never reach the route handlers.",
              story: [
                {
                  label: "PROBLEM",
                  text: "The brief was about REST API design and Clean Architecture, so the layer boundaries were the deliverable, not the feature set.",
                },
                {
                  label: "DECISION",
                  text: "Domain is a pure C# project with zero NuGet dependencies. API depends on Application and Infrastructure, never on Domain. Contracts holds the only DTOs that travel over the wire.",
                },
                todo("HOW"),
                todo("RESULT"),
              ],
            },
            {
              topic: "Carter modules",
              tags: ["C# / .NET"],
              summary:
                "Modeled the API as Carter modules on Minimal APIs: one module per feature area, each endpoint with its own handler, validator and contract, no controllers.",
              story: [
                todo("PROBLEM"),
                {
                  label: "DECISION",
                  text: "Each feature area is one CarterModule that maps its routes under a route group with RequireAuthorization().",
                },
                {
                  label: "HOW",
                  text: "Each handler is a static method that dispatches a MediatR command or query and maps the result to a response.",
                },
                todo("RESULT"),
              ],
            },
            {
              topic: "Validation pipeline",
              tags: ["C# / .NET"],
              summary: "Ran FluentValidation through a MediatR pipeline behavior, so handlers never call validators directly.",
              story: [
                todo("PROBLEM"),
                {
                  label: "DECISION",
                  text: "Validation runs as a MediatR pipeline behavior in front of every handler, not inside the handlers.",
                },
                todo("HOW"),
                todo("RESULT"),
              ],
            },
            {
              topic: "API security",
              tags: ["C# / .NET"],
              summary:
                "Protected the API with JWT bearer auth, BCrypt hashing, ErrorOr for consistent error responses, and a fixed-window rate limiter (60 req/min per IP).",
              story: [
                todo("PROBLEM"),
                todo("DECISION"),
                {
                  label: "HOW",
                  text: "JWT issuance and BCrypt hashing live in Infrastructure, behind interfaces declared in Application. Every endpoint returns ErrorOr results, so errors share one shape.",
                },
                todo("RESULT"),
              ],
            },
            {
              topic: "Data access",
              tags: ["C# / .NET", "PostgreSQL"],
              summary:
                "Restricted task visibility in the read handler's query, so a user only sees tasks they created or were assigned, not just a UI filter.",
              story: [
                todo("PROBLEM"),
                {
                  label: "DECISION",
                  text: "The filter lives in the query of the read handler, not in the UI, so the rule holds for any client that calls the API.",
                },
                todo("HOW"),
                todo("RESULT"),
              ],
            },
            {
              topic: "REST API",
              tags: ["C# / .NET"],
              summary:
                "Delivered 100+ REST endpoints with ASP.NET Core 8 and Clean Architecture, in production use by every hospital department.",
              story: [todo("PROBLEM"), todo("DECISION"), todo("HOW"), todo("RESULT")],
            },
            {
              topic: "Role-based logging",
              tags: ["C# / .NET"],
              summary:
                "Shipped a role-based logging system support uses daily, which ended error escalations to the development team.",
              story: [
                todo("PROBLEM"),
                todo("DECISION"),
                todo("HOW"),
                { label: "RESULT", text: "Support handles errors on its own every day, without escalating them to development." },
              ],
            },
            {
              topic: "API contracts",
              tags: ["C# / .NET"],
              summary:
                "Agreed shared API contracts with the Kotlin/Jetpack Compose mobile team, so both tracks built in parallel.",
              story: [
                todo("PROBLEM"),
                todo("DECISION"),
                todo("HOW"),
                { label: "RESULT", text: "Backend and mobile developed in parallel, with fewer integration delays." },
              ],
            },
            {
              topic: "Cursor pagination",
              tags: ["C# / .NET"],
              summary:
                "Implemented cursor-based pagination on a module with 5,000+ records and 20+ properties.",
              story: [
                todo("PROBLEM"),
                todo("DECISION"),
                todo("HOW"),
                { label: "RESULT", text: "Per-page query time dropped from 1–2 s to 500 ms on average." },
              ],
            },
            {
              topic: "Unit tests",
              tags: ["C# / .NET"],
              summary:
                "Wrote an xUnit and Moq suite covering the positive and negative paths of every endpoint.",
              story: [
                todo("PROBLEM"),
                todo("DECISION"),
                todo("HOW"),
                { label: "RESULT", text: "Regressions were caught before they reached production." },
              ],
            },
            {
              topic: "Production deploys",
              tags: ["C# / .NET"],
              summary:
                "Managed production deployments to IIS and coordinated mobile release builds, keeping versions consistent across development and QA.",
              story: [
                todo("PROBLEM"),
                todo("DECISION"),
                todo("HOW"),
                todo("RESULT"),
              ],
            },
            {
              topic: "Financial reports",
              tags: ["C# / .NET"],
              summary:
                "As a Trainee, built 10–15 financial report screens in WinForms/C#, optimized LINQ queries with projections and normalized SQL Server schemas to third normal form.",
              story: [
                todo("PROBLEM"),
                todo("DECISION"),
                todo("HOW"),
                todo("RESULT"),
              ],
            },
            {
              topic: "Tracking scraper",
              tags: ["C# / .NET"],
              summary:
                "Built a tracking API for Estafeta, which has no public one: it replays the site's own XHR request and turns the HTML it returns into JSON.",
              story: [
                { label: "PROBLEM", text: "Estafeta has no public tracking API. Its site only returns HTML." },
                {
                  label: "DECISION",
                  text: "Keep the scraping behind an IShipmentScraperService interface in Infrastructure, so the rest of the Clean Architecture app never sees HTML.",
                },
                {
                  label: "HOW",
                  text: "A GET to the search page sets the session cookies, then a POST to the internal history endpoint with X-Requested-With and Referer returns an HTML fragment that AngleSharp parses with CSS selectors. Results are cached in memory for 10 minutes, and FluentValidation checks the tracking number first.",
                },
                todo("RESULT"),
              ],
            },
          ],
        },
        {
          title: "React / Next.js",
          description:
            "Shipping full-stack products with Next.js 15, TypeScript, Tailwind CSS, Prisma, and Stripe. From checkout flows to admin panels.",
          tags: ["React", "Next.js", "TypeScript"],
          bullets: [
            {
              topic: "Component library",
              tags: ["React"],
              summary:
                "Built a reusable component library with React, Remix, Tailwind and Atomic Design, adopted across several client projects.",
              story: [
                todo("PROBLEM"),
                {
                  label: "DECISION",
                  text: "Organized components with Atomic Design and translated Figma mockups straight into them.",
                },
                todo("HOW"),
                { label: "RESULT", text: "Design-to-code time went from days to hours, and the library was adopted across several projects." },
              ],
            },
            {
              topic: "Typed API client",
              tags: ["React", "TypeScript"],
              summary:
                "Generated types and a typed fetch client from the backend's OpenAPI spec with openapi-ts, so the frontend cannot drift from the API contract.",
              story: [
                todo("PROBLEM"),
                {
                  label: "DECISION",
                  text: "The two services share nothing at runtime. The OpenAPI spec is the only link between them.",
                },
                todo("HOW"),
                todo("RESULT"),
              ],
            },
            {
              topic: "Validation on both layers",
              tags: ["React", "TypeScript"],
              summary:
                "Validated input with Zod on the frontend and FluentValidation on the backend, sharing one shape through the generated types.",
              story: [todo("PROBLEM"), todo("DECISION"), todo("HOW"), todo("RESULT")],
            },
            {
              topic: "Rendering strategy",
              tags: ["Next.js"],
              summary:
                "Chose rendering per route: SSG for static pages, ISR for the catalog, SSR for product pages, client-side for cart and checkout, no cache for admin.",
              story: [
                { label: "PROBLEM", text: "Not every route needs the same freshness guarantee." },
                {
                  label: "DECISION",
                  text: "Each route answers two questions: does the content change per user, and how often? The answer picks SSG, ISR, SSR, client-side or no cache.",
                },
                todo("HOW"),
                todo("RESULT"),
              ],
            },
            {
              topic: "Cache invalidation",
              tags: ["Next.js"],
              summary:
                "Served the catalog from the Full Route Cache with zero database hits, invalidated with revalidateTag('catalog') on every payment or stock change.",
              story: [
                todo("PROBLEM"),
                todo("DECISION"),
                {
                  label: "HOW",
                  text: "At build, /catalog hits Postgres once and fills the Data Cache (3600s) and the Full Route Cache (600s). revalidateTag marks them stale, and the next request re-fetches and re-renders.",
                },
                { label: "RESULT", text: "Normal catalog requests make zero database hits." },
              ],
            },
            {
              topic: "Stripe checkout",
              tags: ["Next.js"],
              summary:
                "Built a multi-step Stripe checkout where only a webhook confirms a payment, so inventory never releases on an unconfirmed transaction.",
              story: [
                todo("PROBLEM"),
                todo("DECISION"),
                { label: "HOW", text: "Card and SPEI payments with idempotent order-status transitions, so concurrent checkouts never oversell stock." },
                { label: "RESULT", text: "The store handles 200+ orders per month in production." },
              ],
            },
            {
              topic: "Inventory reservation",
              tags: ["Next.js"],
              summary:
                "Reserved stock at order creation and ran a background job that expires unpaid orders every 5 minutes, so abandoned carts never lock inventory.",
              story: [
                { label: "PROBLEM", text: "An abandoned cart could hold stock indefinitely and block real buyers." },
                {
                  label: "DECISION",
                  text: "Reserve inventory when the order is created and restore it on cancellation, with no manual reconciliation step.",
                },
                todo("HOW"),
                todo("RESULT"),
              ],
            },
            {
              topic: "Admin panel",
              tags: ["Next.js"],
              summary:
                "Designed the admin panel around the store team's workflow: product uploads, orders and inventory, with no developer needed.",
              story: [
                {
                  label: "PROBLEM",
                  text: "A generic dashboard assumes a workflow the store team did not have.",
                },
                todo("DECISION"),
                todo("HOW"),
                todo("RESULT"),
              ],
            },
            {
              topic: "API routes",
              tags: ["Next.js", "TypeScript"],
              summary:
                "Built the storefront and admin dashboard in Next.js 15 with strict TypeScript and 60+ API routes backed by PostgreSQL and Prisma.",
              story: [
                todo("PROBLEM"),
                todo("DECISION"),
                todo("HOW"),
                todo("RESULT"),
              ],
            },
            {
              topic: "Auth hardening",
              tags: ["Next.js"],
              summary:
                "Hardened authentication with Redis-backed JWT blacklisting.",
              story: [
                todo("PROBLEM"),
                todo("DECISION"),
                todo("HOW"),
                todo("RESULT"),
              ],
            },
            {
              topic: "Error tracking",
              tags: ["Next.js"],
              summary:
                "Instrumented checkout with Sentry for production error tracking.",
              story: [
                todo("PROBLEM"),
                todo("DECISION"),
                todo("HOW"),
                todo("RESULT"),
              ],
            },
          ],
        },
        {
          title: "Kotlin / Spring Boot",
          description:
            "Backend for real-money games: payments, payouts and game states on a Kotlin/Spring Boot API consumed by a SwiftUI app.",
          tags: ["Kotlin", "Spring Boot", "SwiftUI"],
          bullets: [
            {
              topic: "Game state machine",
              tags: ["Kotlin", "Spring Boot"],
              summary:
                "Built a state machine for real-money games driven by scheduled tasks, with automatic actions such as expirations and reminders.",
              story: [
                todo("PROBLEM"),
                todo("DECISION"),
                todo("HOW"),
                todo("RESULT"),
              ],
            },
            {
              topic: "Payments and payouts",
              tags: ["Kotlin", "Spring Boot", "SwiftUI"],
              summary:
                "Integrated Lucra charges and payouts with a geolocation check-in, across the Kotlin API and the SwiftUI app.",
              story: [
                todo("PROBLEM"),
                todo("DECISION"),
                todo("HOW"),
                todo("RESULT"),
              ],
            },
            {
              topic: "Money-path guards",
              tags: ["Kotlin", "Spring Boot"],
              summary:
                "Guarded money paths with server-side state validation and optimistic locking against concurrent writes.",
              story: [
                todo("PROBLEM"),
                todo("DECISION"),
                todo("HOW"),
                { label: "RESULT", text: "Validated end to end across 118 buy-ins with zero duplicate charges." },
              ],
            },
          ],
        },
        {
          title: "Android / Jetpack Compose",
          description:
            "Offline-first Android app for an ERP's warehouse operators, built with Kotlin and Jetpack Compose.",
          tags: ["Kotlin", "Jetpack Compose", "Offline-first"],
          bullets: [
            {
              topic: "Offline-first sync",
              tags: ["Kotlin", "Offline-first"],
              summary:
                "Built an offline-first inventory app so warehouse operators keep working without internet.",
              story: [
                todo("PROBLEM"),
                todo("DECISION"),
                { label: "HOW", text: "Adopted the backend's cursor pagination and optimized local processing." },
                { label: "RESULT", text: "The module's load-and-sync time dropped from 10–12 to 4–5 minutes." },
              ],
            },
            {
              topic: "Layered architecture",
              tags: ["Kotlin"],
              summary:
                "Structured the app into data, domain and presentation layers, with JWT authentication and automatic token refresh.",
              story: [
                todo("PROBLEM"),
                todo("DECISION"),
                todo("HOW"),
                { label: "RESULT", text: "The sync logic can be tested without the UI." },
              ],
            },
            {
              topic: "Component library",
              tags: ["Jetpack Compose"],
              summary:
                "Built a reusable component library used across 40+ screens, removing redundant implementations.",
              story: [
                todo("PROBLEM"),
                todo("DECISION"),
                todo("HOW"),
                todo("RESULT"),
              ],
            },
            {
              topic: "Support role",
              tags: ["Kotlin"],
              summary:
                "Added a support role with in-device log access, to diagnose client-side issues without server access.",
              story: [
                todo("PROBLEM"),
                todo("DECISION"),
                todo("HOW"),
                todo("RESULT"),
              ],
            },
          ],
        },
        {
          title: "Node.js / Python",
          description:
            "Node.js and Express services for client projects, and Python tooling for QA: test data, traffic simulation and evidence capture.",
          tags: ["Node.js", "Python"],
          bullets: [
            {
              topic: "REST endpoints",
              tags: ["Node.js"],
              summary:
                "Developed 30+ REST endpoints with Node.js and Express for client projects, including a Warehouse Management System (WMS).",
              story: [
                todo("PROBLEM"),
                todo("DECISION"),
                todo("HOW"),
                todo("RESULT"),
              ],
            },
            {
              topic: "Tracking microservice",
              tags: ["Node.js"],
              summary:
                "Built an isolated scraping microservice for real-time Estafeta shipment tracking (no public API), decoupled from the main system.",
              story: [
                { label: "PROBLEM", text: "Estafeta has no public tracking API." },
                { label: "DECISION", text: "Run the scraper as its own service, decoupled from the main system." },
                todo("HOW"),
                todo("RESULT"),
              ],
            },
            {
              topic: "Geofence live map",
              tags: ["Python"],
              summary:
                "Contributed to a live map that plots the simulated device location against a geofence radius and tolerance rings.",
              story: [
                todo("PROBLEM"),
                todo("DECISION"),
                todo("HOW"),
                todo("RESULT"),
              ],
            },
            {
              topic: "API invariants check",
              tags: ["Python"],
              summary:
                "Contributed to a script that verifies 4 API invariants: no data leaking through ranking order, byte-identical repeat responses, masked private profiles and stable search.",
              story: [
                todo("PROBLEM"),
                todo("DECISION"),
                todo("HOW"),
                { label: "RESULT", text: "All checks passed on dev data." },
              ],
            },
            {
              topic: "Evidence videos",
              tags: ["Python"],
              summary:
                "Contributed to tools that turn simulator recordings into timed evidence videos.",
              story: [
                todo("PROBLEM"),
                todo("DECISION"),
                todo("HOW"),
                todo("RESULT"),
              ],
            },
            {
              topic: "Test data and traffic",
              tags: ["Python"],
              summary:
                "Contributed to scripts that generate test data and simulate realistic traffic scenarios against the applications.",
              story: [
                todo("PROBLEM"),
                todo("DECISION"),
                todo("HOW"),
                todo("RESULT"),
              ],
            },
          ],
        },
        {
          title: "Infrastructure / DevOps",
          description:
            "Shipping every project with Docker, GitHub Actions and Nginx behind Cloudflare on a Linux VPS. From docker compose up to deploy on merge.",
          tags: ["Docker", "GitHub Actions", "Nginx", "GCP", "Kubernetes", "Terraform"],
          bullets: [
            {
              topic: "Docker Compose",
              tags: ["Docker"],
              summary:
                "Made docker compose up the only setup step: API, frontend and Postgres start together with health checks, dependency ordering and migrations on startup.",
              story: [
                todo("PROBLEM"),
                todo("DECISION"),
                {
                  label: "HOW",
                  text: "The API image runs migrations on startup and exposes GET /health for the compose health check. The frontend is a Vite build served by a small static server.",
                },
                {
                  label: "RESULT",
                  text: "A fresh checkout to a running app on a public URL takes two commands: git clone and docker compose up.",
                },
              ],
            },
            {
              topic: "CI/CD",
              tags: ["Docker", "GitHub Actions"],
              summary:
                "GitHub Actions runs dotnet test and npm test on every push. On merge to main, path-filtered workflows build images, push them to GHCR, and the VPS rolls the stack forward.",
              story: [
                todo("PROBLEM"),
                todo("DECISION"),
                todo("HOW"),
                { label: "RESULT", text: "Every merge to main deploys with no manual step." },
              ],
            },
            {
              topic: "Network path",
              tags: ["Nginx"],
              summary:
                "Routed traffic through Cloudflare (DNS, CDN, WAF, SSL) to an Nginx reverse proxy that sends / to the frontend container and /api/* to the backend.",
              story: [
                todo("PROBLEM"),
                todo("DECISION"),
                {
                  label: "HOW",
                  text: "Nginx maps / to the frontend container (host 3009 to 80) and /api/* to the API container (host 8081 to 8080). Postgres runs on the host, reached through host.docker.internal.",
                },
                todo("RESULT"),
              ],
            },
            {
              topic: "Media and email",
              summary:
                "Moved image storage and delivery to Cloudinary's CDN and automated order and shipping emails with Resend.",
              story: [
                {
                  label: "PROBLEM",
                  text: "Customers had to contact the team directly to ask for their order status.",
                },
                todo("DECISION"),
                todo("HOW"),
                todo("RESULT"),
              ],
            },
            {
              topic: "Image CDN",
              tags: ["GCP"],
              summary:
                "Built image delivery on Google Cloud Storage and imgproxy on Cloud Run behind Cloud CDN.",
              story: [
                todo("PROBLEM"),
                todo("DECISION"),
                todo("HOW"),
                { label: "RESULT", text: "Images are 10x lighter than the originals (45 KB vs 450 KB on average) and 94% of bytes are served from cache." },
              ],
            },
            {
              topic: "Storage security",
              tags: ["GCP", "Terraform"],
              summary:
                "Found and fixed an exposure that allowed listing the content buckets and downloading private photos, restricting access with Terraform.",
              story: [
                todo("PROBLEM"),
                { label: "DECISION", text: "Classified every file as public or private." },
                todo("HOW"),
                { label: "RESULT", text: "Private content can no longer be discovered or bulk-downloaded." },
              ],
            },
            {
              topic: "Real-time connection",
              tags: ["Kubernetes"],
              summary:
                "Fixed a real-time connection that dropped every 30 s by giving its streaming routes a dedicated Kubernetes Service with a longer load-balancer timeout.",
              story: [
                todo("PROBLEM"),
                todo("DECISION"),
                todo("HOW"),
                { label: "RESULT", text: "Reconnections dropped 92%." },
              ],
            },
            {
              topic: "CI/CD to a VPS",
              tags: ["Docker", "GitHub Actions", "Nginx"],
              summary:
                "Implemented a CI/CD pipeline with GitHub Actions, Docker Compose, Nginx and GHCR, deploying automatically to a Linux VPS with reproducible environments.",
              story: [
                todo("PROBLEM"),
                todo("DECISION"),
                todo("HOW"),
                todo("RESULT"),
              ],
            },
          ],
        },
      ],
    },
  },
  blog: {
    path: "/build-learn",
    label: "Build & Learn",
    title: "Build & Learn",
    description: "Things I'm building, exploring, and learning as an AI-focused Software Engineer.",
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
