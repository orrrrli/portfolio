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
    stack: [
      "LLM / AI", "C# / .NET Core", "React", "Next.js", "TypeScript", "Node.js", "Python", "Kotlin", "Spring Boot", "Jetpack Compose", "SwiftUI", "PostgreSQL", "Docker", "GitHub Actions", "Nginx", "GCP", "Kubernetes", "Terraform",
    ],
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
                "Real-money game flows: Built the invitation lifecycle with scheduled expirations and reminders, and a check-in at the venue decided by the server from the phone's location (Kotlin/Spring Boot API + SwiftUI). Guarded money paths with server-side state checks and optimistic locking against concurrent writes, so a stale write or a misplaced cancel never strands a player's buy-in.",
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
                "Implemented cursor-based pagination on a module with 15,000+ records and 100+ properties, cutting per-page query time from 1–2 s to an average of 500 ms.",
                "Designed a structured production logging system with role-based access: the support team identifies errors directly, without escalating to development.",
                "Wrote a unit test suite (xUnit, Moq) covering positive and negative paths of every endpoint, catching regressions before they reached production.",
              ],
            },
            {
              title: "Android App (Kotlin / Jetpack Compose)",
              achievements: [
                "Built an offline-first Android app that saves every record on the device and syncs it when the connection comes back, with no lost work.",
                "Made the app's initial configuration load read the API page by page with a cursor and save each page to Room.",
                "Structured the app into data/domain/presentation layers so the sync logic can be tested without the UI; JWT authentication with automatic token refresh.",
                "Built a reusable component library used across 80+ screens, eliminating redundant implementations.",
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
          tags: ["Tool calling", "Streaming", "Vision models", "Context engineering"],
          bullets: [
            {
              topic: "LLM assistant",
              tags: ["Tool calling"],
              summary:
                "Shipped features for an LLM assistant that completes app flows from a chat conversation. It uses 13 tools, answers questions about photos and reminds users of what they have scheduled.",
              story: [
                { label: "PROBLEM", text: "The app has many flows, and many users didn't know how to complete them. They got stuck halfway or never started. The idea was that users tell the assistant what they want to do and the assistant runs the flow for them. Adding an LLM brought three risks. It could make up data, it could see other users' information, and costs could grow out of control." },
                { label: "DECISION", text: "From day one, the model only proposes and the server validates. The server hands each tool the signed-in user, taken from the JWT. A tool never asks the model whose data to read. So even if someone tries a prompt injection to get another user's data, the model has no way to do it. If the model suggests a flow, that ID must have come from a tool in the same response. Otherwise the server rejects it, which rules out made-up IDs." },
                { label: "HOW", text: "I built the tool-calling loop in Kotlin with Spring Boot. Each of the 13 tools checks permissions on its own. Ask for something in a group you don't belong to and the tool answers NOT_FOUND. Cost is held by a daily question cap per user, a request size limit and a deadline per reply.\n\nUser-written names enter the prompt marked as data, not instructions. Analytics stores the outcome and latency, never the photo or the text. On iOS, with SwiftUI, I added chips that jump straight into a flow and a reminder on Home." },
                { label: "RESULT", text: "I ran 67 evals against the live model. 92% of tool calls succeeded, with a sub-500 ms median per tool call and an average cost of $0.03 USD per eval." },
              ],
            },
            {
              topic: "Rules in context vs. tool",
              tags: ["Tool calling", "Context engineering"],
              summary:
                "Measured whether to take the flow rules out of the prompt and serve them through a tool. Decided to keep them in context.",
              story: [
                { label: "PROBLEM", text: "The assistant loads the rules for 12 flows on every reply, about 9.1k characters of the static prompt. Everything in it is paid for on every reply, even when the question has nothing to do with rules. And the static prompt was already close to its budget." },
                { label: "DECISION", text: "I evaluated serving the rules through a tool the model would call only when needed. I ruled out one tool per game because every tool definition travels in every request and would eat the saving. The saving was ~12% (~$3 per 1,000 replies). But with the tool, whether the model had the app's rules depended on it deciding to ask for them. If it didn't call the tool, it answered from memory with generic rules that aren't the app's. And if it did, a rules question asked outside an {{active flow|A screen the assistant gets context from, like a game's Lobby.}} would now need 2 model calls, one to request the tool and one to answer, adding ~5 s of latency. Inside an active flow, that flow's rules could be added to the prompt without calling the tool. I decided to keep the rules in context." },
                { label: "HOW", text: "I pulled the real cost per reply from the assistant's stored messages, with the tokens and cost OpenRouter reports. I measured each rules section separately and split what had to stay fixed from what could move. The rules shared by every flow and the guide the assistant uses to recommend a flow had to stay fixed, so the tool could only take 7.3k of the 9.1k characters out of the prompt." },
                { label: "RESULT", text: "Rules questions are still answered in a single model call, with no extra latency and always with the app's rules. The tool is documented with its cost, risks, design and the point where it's worth building." },
              ],
            },
            {
              topic: "On-demand photo rules",
              tags: ["Context engineering"],
              summary:
                "Added the rules for reading photos without touching the assistant's static prompt.",
              story: [
                { label: "PROBLEM", text: "The assistant was about to start answering questions with photos, and that needed its own rules. For example, don't make up numbers that can't be read, and don't follow instructions written inside the photo. The static prompt has a fixed budget enforced by a test, and it was already at ~41,500 of 41,600 characters. The photo rules are 1,010 characters and didn't fit." },
                { label: "DECISION", text: "Those rules only matter when the user sends a photo. I decided to keep them out of the base prompt and send them only in conversations that include one." },
                { label: "HOW", text: "When the system prompt is built, the photo rules are appended to the end of the system prompt only when the question or thread includes a photo. They go after the user's dynamic context, so the static prefix doesn't change and the prompt cache keeps working on every question. In the history, each earlier photo becomes the text [photo], and only the latest question's photo reaches the model as an image. A test fails if the static prefix goes over the cap, so no change can bloat the prompt unnoticed." },
                { label: "RESULT", text: "The photo feature shipped without touching the static prefix or dropping other knowledge from the prompt. Text questions don't pay the ~250 tokens of these rules (~$0.60 less per 1,000 replies), and the prompt cache stayed intact." },
              ],
            },
            {
              topic: "Streaming and limits",
              tags: ["Streaming"],
              summary:
                "Made the assistant answer one question at a time, with a button to stop it, and charge each question once even when the app retries it or the provider fails.",
              story: [
                { label: "PROBLEM", text: "If the user sent another question while the assistant was answering, the new one cut off the reply in progress. A double tap or a second device was enough to lose a reply. There was also no way to stop a long reply. And it wasn't defined when a question counted against the daily cap, or what happened when the app retried the same question or the provider failed." },
                { label: "DECISION", text: "A new question no longer cuts off the reply that's running. The server answers one question at a time per user, and the user decides when to stop with a Stop button. For charging I set one rule. A question counts when the user sees text, gets an answer or causes the failure. If it fails because of us before any text shows, it's given back. A failure the user causes isn't given back, because otherwise one account could spend the global AI cap for free and leave everyone without the assistant." },
                { label: "HOW", text: "Each question carries a requestId from the app, so a retry gets the reply in progress or the stored one, without calling the model or counting again. A question that arrives while another runs gets a 409, and Stop cuts the provider call and stores the text already shown. In the daily counter, each question is reserved on the way in and released only if it failed because of us." },
                { label: "RESULT", text: "Each question is charged once, even when the app retries it. A double tap no longer cuts off a reply, and a provider failure doesn't cost the user a question." },
              ],
            },
            {
              topic: "Vision image gate",
              tags: ["Vision models"],
              summary:
                "Integrated a vision model (Cloudflare Clef via OpenRouter) that checks every photo before it's stored or sent to the assistant. It rejects photos that are unreadable or unrelated to the app, and tells the user which kinds of photo it can read.",
              story: [
                { label: "PROBLEM", text: "The assistant was about to start receiving photos, and every photo that reaches the main model costs a call. It needed a cheap filter first, to drop unreadable photos or ones unrelated to the app. In the first version, QA reported that the filter rejected sharp photos of leaderboards and equipment as blurry, and users got stuck asking for another photo again and again." },
                { label: "DECISION", text: "I measured with real calls on the same photo at different blur levels. The vision model can't tell medium blur apart well, because a readable photo and an unreadable one came out with almost the same score. I decided the filter only rejects extreme blur and the main model decides the in-between cases, under a rule to never guess a number. A false rejection traps the user in a retry loop, while letting one extra photo through costs ~$0.003. When QA failed the ticket, instead of moving more thresholds I looked for why every sharp photo came out as blurry." },
                { label: "HOW", text: "The filter asks three questions in one call (photo type, legibility and unsafe content), and every threshold lives in config. I lowered the legibility threshold from 0.25 to 0.08. For the QA failure I found two causes. Without a pinned provider, 9 of 36 calls returned HTTP 400 because the provider didn't accept images, so I pinned Cloudflare (0 of 44 failures) and added a retry for 429 and 5xx. Also, leaderboards came out with low confidence and fell into the \"blurry\" branch. I widened the scorecard category's description to cover leaderboards, and its confidence rose from 0.35 to ~0.8 without touching thresholds. I also split the messages, so a blurry photo, one unrelated to the app, an equipment photo and a classifier failure no longer look the same, and each message says which photos the assistant can read." },
                { label: "RESULT", text: "Sharp photos are no longer rejected as blurry, and a classifier failure is no longer mistaken for a bad photo. Classifier calls went from 9 failures in 36 to 0 in 44. I verified it in the simulator with every rejection type, with 579 tests on the API and 32 on iOS." },
              ],
            },
          ],
        },
        {
          title: "C# / .NET Core",
          description:
            "Building production REST APIs with ASP.NET Core 8, Clean Architecture, CQRS/MediatR, EF Core, and FluentValidation. Patterns I use on every backend.",
          tags: ["Architecture", "Security", "Performance", "Observability", "Testing", "PostgreSQL"],
          bullets: [
            {
              topic: "CQRS",
              tags: ["Architecture"],
              summary:
                "Centralized saving for Commands in the MediatR pipeline, so every Command saves exactly once and never when its handler fails.",
              story: [
                { label: "PROBLEM", text: "Saving was spread across 13 repositories. Each one called its own SaveChangesAsync, so there was no single place deciding when a Command saves, or stopping a save when the handler returned an error." },
                { label: "DECISION", text: "I moved saving into the MediatR pipeline, with two sibling interfaces that don't inherit from each other. ICommand saves once at the end and, on a transient failure, retries only the write. ITransactionalCommand wraps the whole handler in a transaction that retries in full, and I kept it for the 4 Commands that must see the result of a write before continuing. The other 20 stayed on ICommand, because replaying the whole handler would resend external calls, like a single-use OAuth code." },
                { label: "HOW", text: "I did it in phases, with tests green at each one. First I added the interfaces and the behavior with nothing using them, then I migrated the 24 Commands and 28 Queries, and last I removed SaveChangesAsync from the repositories. The Testcontainers integration tests caught two things the unit tests couldn't see. The DbContext had NoTracking set globally, so I added AsTracking() to every read that feeds a write. And EF's automatic retry doesn't accept hand-opened transactions, so I moved them inside its execution strategy." },
                { label: "RESULT", text: "A new Command carries no saving code. The handler only changes entities and the pipeline decides when to save, so nobody can forget a SaveChangesAsync or save after an error. The 13 repositories were left with reads and changes only, and a retry after a transient failure no longer repeats external calls like the Google login." },
              ],
            },
            {
              topic: "Clean Architecture",
              tags: ["Architecture"],
              summary:
                "Split the API into Domain, Application, Infrastructure, API and Contracts, with dependencies pointing inward so business rules never reach the route handlers.",
              story: [
                { label: "PROBLEM", text: "The API handles sensitive data and business rules that had to be testable without a database. And the database and hosting were going to change as the project grew." },
                { label: "DECISION", text: "I split the API into five projects with dependencies pointing inward. Domain depends only on ErrorOr. Application defines the use cases and the interfaces Infrastructure implements, like IUserRepository, and knows nothing about EF Core or HTTP. Infrastructure is the only place EF Core, Npgsql, JWT and BCrypt live. Contracts holds the DTOs that travel over HTTP." },
                { label: "HOW", text: "The rules live in the project references, so a dependency pointing outward doesn't compile. Handlers depend on Application's interfaces, never on the DbContext. API wires everything up as the composition root, with Carter modules. I wrote each layer's rules into an architecture document that gets updated whenever a layer changes." },
                { label: "RESULT", text: "Business rules are tested without starting a database, because handlers only see interfaces. When I moved the password reset email to an Outbox, the handler only swapped one interface for another, and the worker that sends the email lives entirely in Infrastructure. And a layering mistake shows up at compile time, not in code review." },
              ],
            },
            {
              topic: "Carter modules",
              tags: ["Architecture"],
              summary:
                "Modeled the API as Carter modules on Minimal APIs: one module per feature area, each endpoint with its own handler, validator and contract, no controllers.",
              story: [
                { label: "PROBLEM", text: "With Minimal APIs, the API's 54 routes would have ended up loose in Program.cs, not grouped by area and not sharing their authorization. Finding an endpoint or changing an area's permissions would have meant going route by route." },
                { label: "DECISION", text: "I split the routes into one Carter module per role or area instead of controllers. Each module opens a route group and sets authorization once for the whole group. Each area requires its role, and the Auth routes stay anonymous." },
                { label: "HOW", text: "Each endpoint is a static method that takes the request from Contracts, turns it into a Command or Query with Mapster and sends it through MediatR. The ErrorOr result becomes the HTTP response, or an error in the same shape across the whole API. Each route declares its response types, which generate the OpenAPI docs." },
                { label: "RESULT", text: "The 54 routes live in 5 modules, and no endpoint holds business logic. Adding one means mapping the route, converting the request and sending it, because the pipeline already handles validation and saving." },
              ],
            },
            {
              topic: "Validation pipeline",
              tags: ["Architecture"],
              summary: "Ran FluentValidation through a MediatR pipeline behavior, so handlers never call validators directly.",
              story: [
                { label: "PROBLEM", text: "The app's forms had to flag every invalid field with its message in Spanish. If each handler called its own validators, one could easily be forgotten, or the API could return only the first error and make the user fix and resend field by field." },
                { label: "DECISION", text: "I ran FluentValidation as a MediatR pipeline behavior that goes before every other one. An invalid request never reaches the handler or opens a transaction, and the response carries every failing field, not just the first." },
                { label: "HOW", text: "The behavior runs all of the request's validators in parallel and turns each failure into an ErrorOr error, with the field name in camelCase as its code. When every error is a validation error, the API answers a 400 grouped by field, and the frontend puts each message next to its field. The 20 validators register themselves from the assembly." },
                { label: "RESULT", text: "No handler calls a validator or checks fields before doing its work. Users see all their errors at once, each next to its field, and a new validator works as soon as it's written." },
              ],
            },
            {
              topic: "API security",
              tags: ["Security"],
              summary:
                "Protected the API with JWT in HttpOnly cookies, BCrypt password hashing, rate limits on login and sign-up, and responses that don't reveal which records exist.",
              story: [
                { label: "PROBLEM", text: "The API stores its users' sensitive data. A stolen token, a brute-forced password or an endpoint revealing which IDs exist would expose that information." },
                { label: "DECISION", text: "I delivered tokens in HttpOnly cookies, not in the body, because any script on the page can read localStorage and an XSS would take the token. I put the per-IP rate limit on login and sign-up, not on the whole API. And when a user asks for something that isn't theirs, the API answers Forbidden whether it exists or not, so nobody can probe IDs." },
                { label: "HOW", text: "The access token lasts 15 minutes and the refresh token 7 days, and the refresh cookie only travels to /api/auth, not on every call. Login allows 10 attempts per minute and sign-up 5, with a fixed window per IP. BCrypt and JWT issuance live in Infrastructure, behind Application interfaces. Two PR reviews found endpoints that answered NotFound or Forbidden depending on whether the record existed, and I made them answer the same." },
                { label: "RESULT", text: "An XSS can't read the tokens, and brute force against login is cut off at 10 attempts per minute. No endpoint lets you learn whether a record that isn't yours exists." },
              ],
            },
            {
              topic: "Data access",
              tags: ["Security"],
              summary:
                "Made every handler check who owns a record in the same query that reads it, so users reach only their own data or the data of someone who granted them access.",
              story: [
                { label: "PROBLEM", text: "Handlers first looked up the record and then checked whether it belonged to the user, in two steps. That order gave different answers for \"doesn't exist\" and \"isn't yours\", and each handler repeated the check its own way." },
                { label: "DECISION", text: "I moved the check into the query. The repository looks up the record already filtered by the signed-in user, so \"doesn't exist\" and \"isn't yours\" are the same result and the API answers Forbidden for both. Seeing another user's data takes an accepted link between the two, and that rule lives in a single guard." },
                { label: "HOW", text: "Every handler follows the same order. It gets the user from the session, loads the record filtered by owner, and only then does its work. I migrated the handlers area by area and removed the two-step loads. The shared guard checks that the user owns their profile and holds an accepted link with the other user, and 8 endpoints use it." },
                { label: "RESULT", text: "A user's data is visible only to them or to someone with an accepted link, and the rule lives in the query, not in the UI. A new endpoint follows the same order and calls the same guard." },
              ],
            },
            {
              topic: "Role-based logging",
              tags: ["Observability"],
              summary:
                "Built a role-based logging system with Serilog that support reads inside the app, and errors escalated to development went from several a week to a few a month.",
              story: [
                { label: "PROBLEM", text: "When something failed, a developer had to find which flow broke, explain it to support, and support explained it to the customer. It happened several times a week, and it was rarely a bug. It was permissions, badly entered data, or errors nobody understood because the business logic was very extensive." },
                { label: "DECISION", text: "I built one log with two views, one for support and one for development. Support sees a clear message and the time, and development sees the full detail. I ruled out an external tool because support needed a simplified version, not a dashboard built for developers." },
                { label: "HOW", text: "A middleware catches errors and writes them with Serilog to a SQL Server table. Every log carries a correlation ID, so a flow that crosses several endpoints reads as one story. Support reads it on a screen inside the Kotlin app, filtered by date, user, module and severity, because a crash isn't the same as an error from missing data." },
                { label: "RESULT", text: "Escalations went from several a week to a few sporadic ones a month. The 5 people on support solve permission and data cases on their own, and development stopped interrupting its work to investigate errors." },
              ],
            },
            {
              topic: "API contracts",
              tags: ["Architecture"],
              summary:
                "Made every route declare its contract, so the OpenAPI spec describes exactly what the API returns, errors included.",
              story: [
                { label: "PROBLEM", text: "Routes answered with an anonymous object wrapped in data. The OpenAPI spec couldn't describe those responses or which errors each endpoint returned, so the frontend was written by reading the API's code." },
                { label: "DECISION", text: "I made the contract live on each route, next to the endpoint. Each one states which Response it returns and with which status, and a typed envelope keeps the same JSON. Errors follow one shape, with a Spanish title for the user and a stable English code for the client to branch on." },
                { label: "HOW", text: "Each route declares its Response and one Produces per status it can return, and the spec is built from that. Request and Response names are unique across the API, because they're the schema id, and a 201 never returns an anonymous object. I wrote it down as a project rule, so every new module ships with its contract." },
                { label: "RESULT", text: "The spec describes 145 routes with their responses and errors, and the frontend reacts to errors by their code, like when an edit session closes. Generating the frontend types from the spec is the next step, with nothing left to do on the API side." },
              ],
            },
            {
              topic: "Cursor pagination",
              tags: ["Performance"],
              summary:
                "Moved the mobile app's initial load to cursor pagination over 15,000+ records and 100+ properties, and the full load went from almost 30 minutes to 3–5.",
              story: [
                { label: "PROBLEM", text: "Opening the mobile app for the first time meant downloading the whole initial configuration, over 15,000 records with over 100 properties. The API paged with offset, which gets slower the further it goes, and users sat almost 30 minutes in front of a loading screen." },
                { label: "DECISION", text: "I replaced offset with a cursor. With offset, the database walks every earlier row on each page, while with a cursor each page starts right where the last one ended. Jumping to a specific page wasn't needed, because the screen only had to download everything in order." },
                { label: "HOW", text: "The cursor combines date, ID and a tag for the source table, because the load merges records from several tables into one sequence. I added an index on those columns, and each page brings only the properties the app needs, through a projection. The Kotlin app requests the next page with the previous page's cursor until it's done." },
                { label: "RESULT", text: "Each page loads in 500 ms, and the full load in the app went from almost 30 minutes to 3–5 minutes." },
              ],
            },
            {
              topic: "Testing strategy",
              tags: ["Testing", "PostgreSQL"],
              summary:
                "Built the API's tests in three levels with xUnit, NSubstitute and Testcontainers, and over 8,000 cases run on every PR and before every deploy.",
              story: [
                { label: "PROBLEM", text: "The API replaces an earlier system, and its calculations and parsers had to give exactly the same results. It also serves several schools, so a bad filter could let one school read another's data." },
                { label: "DECISION", text: "I split the tests into three levels. Domain tests entities and factories. Application runs the real MediatR pipeline over substituted repositories, so it validates and saves the same way production does. Integration starts Postgres with Testcontainers and the real migrations, and never mocks the DbContext." },
                { label: "HOW", text: "Golden tests compare parsers and calculators against the stored output of the earlier system. Every school-scoped entity has a test proving a user from one school can't read or write another's. Each test is named Subject_Condition_Outcome and names the acceptance criterion it proves above it. In CI, one workflow defines what \"the tests pass\" means, PRs and the deploy both use it, and it names any test that hangs past 5 minutes." },
                { label: "RESULT", text: "A change that breaks an inherited calculation or exposes another school's data fails in the PR, not in production. No deploy ships without passing the same suite as the PRs." },
              ],
            },
            {
              topic: "Financial reports",
              tags: ["Performance"],
              summary:
                "As a Trainee, built 10–15 financial report screens in WinForms/C#, optimized LINQ queries with projections and normalized SQL Server schemas to third normal form.",
              story: [
                { label: "PROBLEM", text: "Reports were yearly, so each one queried over 20,000 records and some passed 50,000. Queries used lazy loading by default and loaded everything, so every relationship a report touched fired another query and reports were slow." },
                { label: "DECISION", text: "I stopped relying on lazy loading. The relationships a report did use I loaded with eager loading, and instead of fetching full entities I projected only the columns on screen, because the entities carried relationships and properties the report never used." },
                { label: "HOW", text: "Each report builds its LINQ query with the relationships it needs and ends in a projection to an anonymous type with the report's fields. I used anonymous types because they're immutable, so no step of the report can change a value after reading it." },
                { label: "RESULT", text: "Before the change, a yearly report never made it to print. After it, the screen stopped freezing and reports over 50,000 records generate and print." },
              ],
            },
          ],
        },
        {
          title: "React / Next.js",
          description:
            "Shipping full-stack products with Next.js 15, TypeScript, Tailwind CSS, Prisma, and Stripe. From checkout flows to admin panels.",
          tags: ["Payments", "Security", "Caching", "Architecture", "TypeScript"],
          bullets: [
            {
              topic: "Validation on both layers",
              tags: ["Security", "TypeScript"],
              summary:
                "Validated the browser form and the API request with the same Zod schema, so client and server never accept different data.",
              story: [
                { label: "PROBLEM", text: "The project takes data from sign-up, address and order forms. TypeScript types vanish at compile time, so they protect nothing at runtime, and a body with a missing or mistyped field could reach the database. Validating by hand in every form and every route duplicated the rules and let them drift apart." },
                { label: "DECISION", text: "I put the Zod schemas in a shared folder, used by both the form and the API route. The browser validates to show the error next to the field, and the route validates again because a request can be built by hand without going through the form." },
                { label: "HOW", text: "Forms wire the schema into react-hook-form through zodResolver. API routes run safeParse on the body before touching the database and answer 400 when it fails. Today 22 routes validate this way, and the product schemas have their own unit tests." },
                { label: "RESULT", text: "A rule, like the format of a phone number or an address, changes in one place and applies to the form and the API at once. A hand-built request can't skip validation." },
              ],
            },
            {
              topic: "Catalog cache under a strict CSP",
              tags: ["Security", "Caching"],
              summary:
                "Kept a strict nonce-based CSP, which forces every page to render per request, and moved the catalog cache from the page to the data, so the catalog still doesn't hit the database on every visit.",
              story: [
                { label: "PROBLEM", text: "The plan was to cache whole pages, with the catalog and product pages regenerating every hour. But the CSP uses a nonce with strict-dynamic, and Next only stamps that nonce on its scripts while rendering a request. On a static page the scripts shipped without a nonce, the CSP blocked them and the page went blank." },
                { label: "DECISION", text: "I chose the strict CSP over page caching. Every route renders per request, and the cache moved from the page to the data. Rendering is cheap, and the expensive part was querying the database on every visit." },
                { label: "HOW", text: "The root layout forces dynamic rendering. Catalog queries are wrapped in unstable_cache with the catalog tag and a one-hour lifetime. Every confirmed payment, cancellation, expired order or inventory change calls revalidateTag('catalog'), and the next visit queries again with up-to-date stock." },
                { label: "RESULT", text: "No script runs without its request's nonce, and regular catalog visits don't hit the database. The stock users see updates as soon as it changes, not when the hour runs out." },
              ],
            },
            {
              topic: "Stripe checkout",
              tags: ["Payments"],
              summary:
                "Built a multi-step Stripe checkout where only a webhook confirms a payment, so inventory never releases on an unconfirmed transaction.",
              story: [
                { label: "PROBLEM", text: "A payment can be confirmed two ways, the check when the browser returns from checkout and Stripe's webhook, and both can arrive in any order or more than once. With SPEI, a bank transfer can arrive short, over, or after the order has expired. Processing the same payment twice, or trusting the browser alone, could mark an unpaid order as paid or refund a valid sale." },
                { label: "DECISION", text: "Stripe's signed webhook is the source of truth for payment, and every order state change is conditional. Marking an order paid only works while it's still pending, so whichever arrives second changes nothing. When it's unclear whether a payment is extra, the system raises an alert and a person decides, because refunding a real sale is worse than reviewing one case by hand." },
                { label: "HOW", text: "Card and SPEI payments. The webhook verifies the signature and handles succeeded, failed, awaiting transfer, partially funded, funds available and failed refund events. Marking paid is a conditional update over the pending states, so a replay or the race with the browser check changes nothing. An overfunded transfer is settled first and the surplus refunded afterwards, and one that lands on an expired order goes back to the customer." },
                { label: "RESULT", text: "The project handles 200+ orders per month in production. A replayed payment or a race between the webhook and the browser never oversells stock or charges twice." },
              ],
            },
            {
              topic: "Inventory reservation",
              tags: ["Payments"],
              summary:
                "Reserved stock at order creation and ran a background job that expires unpaid orders every 5 minutes, so abandoned carts never lock inventory.",
              story: [
                { label: "PROBLEM", text: "An abandoned cart could hold stock indefinitely and block real buyers." },
                {
                  label: "DECISION",
                  text: "Reserve inventory when the order is created and restore it on cancellation, so nobody has to fix the stock by hand afterward.",
                },
                { label: "HOW", text: "When an order is created, each line takes stock with a conditional update inside a transaction, which only succeeds if enough units are left. If one line falls short, the whole transaction rolls back and the user sees how many remain. The order records whether it took stock, so it gives back the exact amount when cancelled or expired. A cron every 5 minutes first rescues orders whose payment did arrive with a late webhook, then expires stale transfers and unpaid orders, returns their stock and invalidates the catalog cache." },
                { label: "RESULT", text: "An abandoned cart returns its stock within minutes, and two buyers can't claim the same last unit. A payment that arrives late doesn't lose its order, because the cron rescues it before expiring it." },
              ],
            },
            {
              topic: "Admin panel",
              tags: ["Architecture"],
              summary:
                "Designed the admin panel around how the team running the project works, with quotes, counter sales, warehouse, purchasing and products, with no developer needed.",
              story: [
                { label: "PROBLEM", text: "The team running the project doesn't just sell online. It builds orders from quotes, sells over the counter, buys material from suppliers and turns that material into products. A generic e-commerce dashboard only covers online sales, and everything else was left out." },
                { label: "DECISION", text: "I designed the panel around those workflows, not around the database tables. Each workflow has its own section, and every action follows the business rules, so the team operates without depending on a developer." },
                { label: "HOW", text: "A quote turns into a sale with its address and shipping, and it's paid through a signed link that only the customer's email can open. Counter sales can be marked paid by hand, and online sales can't, because only Stripe confirms those. Creating a product deducts the material it consumes from the warehouse, and every inventory change invalidates the catalog cache. The middleware only lets users with the admin role into /admin." },
                { label: "RESULT", text: "The team runs quotes, sales, inventory and purchasing from the panel, without asking development for changes for day-to-day work." },
              ],
            },
            {
              topic: "API routes",
              tags: ["Architecture", "TypeScript"],
              summary:
                "Built the project's public site and admin dashboard in Next.js 15 with strict TypeScript, and 55 layered API routes backed by PostgreSQL and Prisma.",
              story: [
                { label: "PROBLEM", text: "With over 50 routes, the logic lived tangled in a lib/ folder that mixed Prisma, Stripe, email and pure utilities. A business rule could end up inside one handler and be repeated in another, with no clear place to test it." },
                { label: "DECISION", text: "I split the code into layers. The handler only deals with HTTP, meaning the session, the rate limit, Zod validation and the response. Rules live in use-cases, data access in repositories, and Prisma, Redis, Stripe and email in infrastructure. An order's price is always computed on the server and never taken from the client." },
                { label: "HOW", text: "Creating an order shows the whole pattern. The route checks the session, limits each user to 5 orders a minute, validates the body with Zod and requires an Idempotency-Key, so a browser retry can't create two orders. The shipping rate arrives signed and is verified, and the total is recomputed from database prices. Routes that move money have their own tests, like cancellation, idempotency and payment verification." },
                { label: "RESULT", text: "A rule lives in one use-case and every route that needs it uses it. The client can't change a price or duplicate an order, and with the layers split the API was ready to move to a .NET backend, which already documents the routes it has to reproduce." },
              ],
            },
            {
              topic: "Auth hardening",
              tags: ["Security"],
              summary:
                "Made JWT sessions revocable on the spot, with a Redis blacklist the middleware checks and a session version in the database.",
              story: [
                { label: "PROBLEM", text: "Sessions use JWTs, which can't be revoked once issued. If an admin blocked a user or someone changed their password, the old token kept working until it expired." },
                { label: "DECISION", text: "I combined two mechanisms. A Redis blacklist cuts the session off instantly in the middleware, before any page or route runs. And a session version in the database makes any token issued before a password change, a block or a forced logout stop working. If Redis fails, the middleware closes the door instead of letting the request through." },
                { label: "HOW", text: "Blocking a user or forcing their logout writes their key to Redis for 30 days, and unblocking deletes it. The middleware checks that key on every request, for pages and the API, and answers 401 when it exists. Changing the password, blocking or unblocking increments the user's session version, and the JWT callback compares it with the token's. At first a Redis error let the request through, and I changed it to fail closed." },
                { label: "RESULT", text: "A blocked user loses access on their next request, not when their token expires. A changed password ends every earlier session, and a Redis failure doesn't open the door." },
              ],
            },
          ],
        },
        {
          title: "Kotlin / Spring Boot",
          description:
            "Backend for real-money games on a Kotlin/Spring Boot API consumed by a SwiftUI app, with invitations that expire on their own, check-in at the venue and guards on every money write.",
          tags: ["Scheduled jobs", "Geolocation", "Concurrency"],
          bullets: [
            {
              topic: "Challenge lifecycle",
              tags: ["Scheduled jobs"],
              summary:
                "Built the lifecycle of a real-money game invitation, with reminders the invitee picks and an expiry at the game's start time, run by scheduled jobs that are safe on more than one instance.",
              story: [
                { label: "PROBLEM", text: "A money game starts with an invitation, and an invitee who never answered kept their seat and held up the whole group. The old deadline also closed invitations sent minutes before a game, before anyone could read them. Reminders and expirations had to happen on their own, with nobody pressing a button." },
                { label: "DECISION", text: "The invitation expires at the game's start time, except one sent less than an hour before, which never expires. The invitee can ask for a reminder in an hour, in a day or two hours before it expires. I ran both with scheduled jobs instead of timers in memory, because a restart loses a timer and a job just finds the pending work again on its next pass." },
                { label: "HOW", text: "One job runs every minute and takes off whoever didn't answer by the start time, and another runs every 5 minutes and sends the reminders that are due. Each reads the pending ids and handles each one in its own transaction, under the game's {{row lock|a database lock that makes other writers to the same row wait}}, checking the state again before acting. If two instances run the same pass, the second finds nothing left to do, and one that fails doesn't hold back the rest. When the host moves the start time, the expiry and the reminder move with it." },
                { label: "RESULT", text: "An unanswered invitation no longer blocks the group, a last-minute game can still be answered, and no reminder arrives once the game has started. Running more instances of the API doesn't send a reminder twice." },
              ],
            },
            {
              topic: "Check-in at the venue",
              tags: ["Geolocation"],
              summary:
                "Made a real-money game start only when every player who paid is at the venue, with the server deciding from the phone's location, across the Kotlin API and the SwiftUI app.",
              story: [
                { label: "PROBLEM", text: "A money game can only be played by people who are actually where it's played. A check-in button can be pressed from anywhere, and the location a phone reports can be imprecise or old." },
                { label: "DECISION", text: "Check-in is never a button. The phone reports its position on its own and the server decides. A reading checks a player in only when its whole error circle is inside the radius, and takes the check-in away only when it's entirely outside, so a vague reading changes nothing. It's validated at the moment of start, because what matters is who is there when the money is committed." },
                { label: "HOW", text: "On iOS, with SwiftUI, the app registers the venue's area when the game is created and reports entries, exits and refreshes while the lobby is open. The API measures the distance to the venue with a 3-mile radius, so the parking lot and the far side of the property count, and keeps every reading for disputes. A check-in lapses after 2 hours without a reading, and starting the game is refused while any player who paid isn't checked in. The host can always start it as a game for fun, and the money goes back." },
                { label: "RESULT", text: "A money game can't start with a player who isn't there, and a player who left with location turned off stops counting. Every reading is on record if someone disputes it." },
              ],
            },
            {
              topic: "Money-path guards",
              tags: ["Concurrency"],
              summary:
                "Guarded money paths with server-side state checks and optimistic locking against concurrent writes, so a stale write or a misplaced cancel never strands a player's money.",
              story: [
                { label: "PROBLEM", text: "Three bugs had the same root, a write that trusted state that was no longer true. A stale copy of a player saved over a newer write and brought back an expired invitation, so the host got the same push twice. Cancelling a game whose scores were already closed left every buy-in held at the payments provider with nothing to return it. And a player who had paid showed as unpaid when another build of the app rewrote their data at the provider, which blocked the start." },
                { label: "DECISION", text: "The server checks the state before every money write and doesn't count on the app hiding a button. I added {{optimistic locking|each row carries a version, and a save of an older version fails}} to the player row, so a stale save fails instead of overwriting, and every writer takes the game's lock before reading. Who paid is matched by the link to the provider's account, which only changes when the account is deleted, not by data any app can rewrite." },
                { label: "HOW", text: "The player row got a version column, and the writers that read without the lock now lock first and read again, each in its own short transaction. Cancelling answers 400 while the scores are closed or the payout is pending, the same rule the app already applied on screen. Paid state reads the provider's leaderboard and matches each row by the account link first. I reproduced the stranded cancel and the unpaid player against the provider's sandbox, and each fix shipped with tests for its case." },
                { label: "RESULT", text: "A stale save can no longer undo a newer one, a cancel can't strand buy-ins, and a player who paid stays paid. Money only moves from a state the server checked." },
              ],
            },
          ],
        },
        {
          title: "Android / Jetpack Compose",
          description:
            "Offline-first Android app built with Kotlin and Jetpack Compose, with a layered architecture and a shared component library.",
          tags: ["Offline-first", "Architecture", "Design system"],
          bullets: [
            {
              topic: "Offline-first sync",
              tags: ["Offline-first"],
              summary:
                "Built an offline-first Android app that saves every record on the device and syncs it when the connection comes back, with no work lost.",
              story: [
                { label: "PROBLEM", text: "The app is used where the connection isn't always stable, and every outage stopped data entry." },
                { label: "DECISION", text: "Persist every record locally in Room with a pending-sync flag and let the server merge the changes. Conflicts are never discarded or silently overwritten. A user with the right role reviews them from the desktop app." },
                { label: "HOW", text: "A {{dirty flag|a mark that a record changed and still has to be uploaded}} in Room marks pending records, and on reconnect the server merges them with what it already has, automatically when nothing overlaps. Conflicts are resolved by hand from the desktop app, and progress stays saved on the device so work picks up where it left off." },
                { label: "RESULT", text: "More than 500 records a week saved and synced without depending on the network, with no work lost when the connection drops." },
              ],
            },
            {
              topic: "Layered architecture",
              tags: ["Architecture"],
              summary:
                "Structured the app into data, domain and presentation layers, with JWT authentication and automatic token refresh.",
              story: [
                { label: "PROBLEM", text: "The Android app had piled up bad practices. UI components called the API directly and ViewModels handled domain objects. That coupled everything to the presentation, made the business models hard to protect and made it impossible to test the logic without the UI." },
                { label: "DECISION", text: "Apply a Clean Architecture adapted to Android, with the domain layer fully independent of presentation, and the repository pattern so the UI never knows where the data comes from. It's the same approach the backend uses, so both sides also share one set of rules." },
                { label: "HOW", text: "I split the app into data, domain and presentation. ViewModels only call {{use cases|one class per business action, like syncing or signing in}}, and those depend on repository interfaces implemented in the data layer with Room and Retrofit. For authentication I used an Authenticator that refreshes the JWT automatically, with the tokens stored locally so the session and an active license can be validated offline too." },
                { label: "RESULT", text: "The sync logic can be tested without the UI, and the domain models are isolated from presentation and from the data layer." },
              ],
            },
            {
              topic: "Component library",
              tags: ["Design system"],
              summary:
                "Built a library of reusable Jetpack Compose components used across more than 80 screens, removing redundant implementations.",
              story: [
                { label: "PROBLEM", text: "Every screen built its own elements and their logic in a single file, which ended up very large. Buttons, search bars, modals and lists were rebuilt again and again, which duplicated code, slowed development down and made the interface inconsistent." },
                { label: "DECISION", text: "Extract those elements into our own component library instead of keeping one-off implementations per screen. Each screen goes from building the component to just calling it, and styles are centralized in {{design tokens|colors, sizes and spacing defined in one place}}." },
                { label: "HOW", text: "I built buttons, inputs, cards, modals and lists in Jetpack Compose, with their interaction logic included. Buttons are configurable (text, icon and style) and use design tokens for their styles. I migrated the screens to use the components instead of their own versions." },
                { label: "RESULT", text: "More than 80 screens with less duplicated code and faster development, because building a screen comes down to calling components. A style change, like the print button's, is made in a single file. The interface is also consistent, and users can tell at a glance what kind of record they're looking at." },
              ],
            },
          ],
        },
        {
          title: "Node.js / Python",
          description:
            "Node.js and Python scripts that automate testing, from golden cases generated by a legacy system to evidence videos of location tests, privacy probes and load tests on shared infrastructure.",
          tags: ["Regression", "Evidence", "Security", "Performance"],
          bullets: [
            {
              topic: "Golden tests against the legacy",
              tags: ["Regression"],
              summary:
                "Wrote 12 Node.js generators that run the legacy system's own functions and produce over 6,000 golden cases, so the migrated backend has to answer exactly what the old system answered.",
              story: [
                { label: "PROBLEM", text: "The migration rewrote a school management system that kept its business rules inside one huge front-end file. Rules like which stage a generation is in on a given date, or how a file of students is read, had no documentation, and each had edge cases at month boundaries or in odd rows. Rewriting them in C# just by reading the code could change a result without anyone noticing." },
                { label: "DECISION", text: "The legacy code itself defines the expected answer. Each generator copies the legacy function verbatim, runs it over hundreds of inputs and writes inputs and outputs to JSON, and the .NET tests compare the new code against that file. The random inputs use a fixed seed, so every run writes the same file and a diff in the JSON means a rule changed." },
                { label: "HOW", text: "Each generator is a Node script that cites the legacy lines it copied. It mixes hand-picked edge cases, like January 15 and 16 or August 1, with seeded random inputs up to about 500 cases. The JSON lands in the test project, where an xUnit {{theory|a test that runs once per data row}} loads each case as its own test. When a file with real cases exists locally it runs those too, without committing data the client hasn't approved sharing." },
                { label: "RESULT", text: "Twelve legacy rules across five modules were migrated with proof that they answer like the old system, case by case. When a test fails, it names the exact input where the new code differs." },
              ],
            },
            {
              topic: "Location test evidence",
              tags: ["Evidence"],
              summary:
                "Built a Python pipeline that turns a simulated location drive into an evidence video, with a side panel showing the geofence, the moving dot and every check-in the server recorded, in sync.",
              story: [
                { label: "PROBLEM", text: "The check-in for real-money games depends on the phone crossing a radius around the venue, and screenshots can't prove that. The simulator's own recording has a variable frame rate, so it squeezes still time and drops frames, and the video's timing stopped matching the server's records." },
                { label: "DECISION", text: "I recorded with a loop of screenshots named by their timestamp and rebuilt the timing from those names. The panel reads the readings from the database for the clip's window, because the server is the source of truth for check-in, not what the app shows." },
                { label: "HOW", text: "One script turns the screenshots into an ffmpeg list with each frame's real duration. Another draws the side panel frame by frame with PIL, with the tolerance rings around the venue, the dot moving at the drive's speed, the live distance computed with {{haversine|the formula for distance between two points on a sphere}} and each reading the moment it landed, marked inside or outside. It can also draw the permission state from Settings and sudden jumps in location, to show cases like location being turned off mid-drive." },
                { label: "RESULT", text: "Each location test ships with a video where the reviewer sees the app and the server's decision side by side, second by second. A missing or extra check-in shows up in the clip without reading logs." },
              ],
            },
            {
              topic: "Privacy probe",
              tags: ["Security"],
              summary:
                "Wrote a Python probe that checks 4 privacy invariants of user recommendations as a real user against the API, so a private answer can't leak through the ranking order.",
              story: [
                { label: "PROBLEM", text: "Recommendations rank users by distance and by how similar their profile answers are. Some answers are private, and even when the API never returns them, the order of the list can give them away, because changing one answer moves someone up or down. Unit tests checked each piece on its own, not what a real user can infer from outside." },
                { label: "DECISION", text: "I tested from the attacker's side. The probe acts as a real user and compares API responses, never internal values. If two sets of answers that should look the same from outside produce different responses, something is leaking." },
                { label: "HOW", text: "The probe runs 18 answer sheets against a ladder of seeded reference users. It checks that sheets that resolve to the same public type get identical recommendation and search responses, that a private profile never moves or shows its type, and that search ignores the latitude and longitude the client sends. As a control, changing one public answer does move a user, so the probe can tell a real pass from a test that sees nothing." },
                { label: "RESULT", text: "The leak through the ranking order was closed with proof from outside, and all four invariants hold on the local API. The control shows the probe would catch the leak if it came back." },
              ],
            },
            {
              topic: "Load test of live viewers",
              tags: ["Performance"],
              summary:
                "Loaded the shared Redis with 20,000 simulated viewers and a minute of live heartbeats from a Python script, to measure memory and latency before shipping the live viewer count.",
              story: [
                { label: "PROBLEM", text: "The live viewer count keeps one Redis set per game and a heartbeat from each viewer every 25 seconds, with a sweep every 5 seconds. That Redis is shared with the rest of the app, has 256 MB and evicts keys when it fills up. A feature that grew its memory or blocked it with slow commands would hurt everything else." },
                { label: "DECISION", text: "I measured on the dev Redis itself, with the same commands the service runs, instead of a local Redis with nothing else on it. The keys went under a throwaway prefix so the test couldn't touch real data, and were deleted by name afterwards." },
                { label: "HOW", text: "The script loaded 5,000 games with 4 viewers each, then ran 60 seconds of live traffic, a heartbeat for every viewer every 25 seconds and a sweep every 5 seconds. It recorded the load's time, commands and errors, memory before and after, how long each sweep took and the latency other clients saw. At the end it deleted the keys and checked the database was back to zero." },
                { label: "RESULT", text: "20,000 viewers cost 2.25 MB, memory stayed flat during the live minute, and other clients saw latency under 1 ms on average, with no evicted keys or slow commands. The feature shipped with its cost measured on the same Redis it runs on." },
              ],
            },
          ],
        },
        {
          title: "Infrastructure / DevOps",
          description:
            "Docker, GitHub Actions and Nginx on a Linux VPS for client projects, and GCP with Kubernetes and Terraform for a mobile product. Deploys pinned to a commit, migrations before start, encrypted backups and e2e tests that never touch production.",
          tags: ["Docker", "GitHub Actions", "Nginx", "GCP", "Kubernetes", "Terraform"],
          bullets: [
            {
              topic: "Bucket exposure",
              tags: ["GCP", "Terraform"],
              summary:
                "Found that anyone could list the content buckets and download every original, private photos included, and closed it with Terraform and signed URLs that expire.",
              story: [
                { label: "PROBLEM", text: "A new feature let users attach private photos, and they landed in the same bucket as the public images. The bucket gave anonymous users a role that includes listing, and every image URL carried the bucket path encoded in base64. Decoding one avatar URL was enough to list the folder and download every original." },
                { label: "DECISION", text: "I weighed three options, a separate private bucket, a role that only reads an object by its name, and image URLs that expire with a shorter CDN cache. The narrow role went first because it closed listing right away. Then every file got an audience, public or private, so private files only travel through signed URLs." },
                { label: "HOW", text: "In Terraform, the anonymous role changed to a legacy object reader, which reads a known object but can't list, with create_before_destroy so access never dropped during the swap. Each media row now records whether it's public or private. A private image gets a signed URL that expires, rounded to a 6-hour window plus 24 hours so the CDN can still cache it, and on dev the bucket stopped being public, so a signed URL is the only way in." },
                { label: "RESULT", text: "An anonymous listing of the bucket went from answering 200 to 403, so nobody can discover what's inside. Private images travel only through URLs that expire, and on dev a signed URL is the only way to reach media." },
              ],
            },
            {
              topic: "E2E environment isolated from production",
              tags: ["Docker", "GitHub Actions"],
              summary:
                "Built an e2e environment that can't touch production, with its own Redis in Docker, and made its 21 tests a gate before every deploy.",
              story: [
                { label: "PROBLEM", text: "Production is the only Upstash instance, because the free tier allows one, and staging used to share it, so a forced logout or a password reset in staging reached production. Local runs also read the production env file and sent real email. And once the staging site was retired at launch, nothing tested checkout before a deploy." },
                { label: "DECISION", text: "The e2e suite only runs against services that can't be production. Postgres must be localhost, Stripe keys must be test keys, email, storage and error tracking are blanked, and Redis is its own container. It runs on every pull request and blocks the deploy when it fails." },
                { label: "HOW", text: "A separate compose starts Redis and serverless-redis-http, a proxy pinned by digest that exposes Redis through the same HTTP API as Upstash, so the app talks to a local Redis with the same client it uses in production. One script runs the same locally and in CI. It starts that Redis and a Stripe webhook listener, seeds, runs the tests on a production build and stops the listener. The 21 tests cover sign-in, catalog, card checkout with shipping and pickup, declined cards, 3D Secure, order expiry and access control." },
                { label: "RESULT", text: "The suite passes 21 of 21 locally and in CI, and on the way it found four app bugs, all fixed. A broken checkout shows up on the pull request instead of in production, and no test run sends a real email." },
              ],
            },
            {
              topic: "Deploys pinned to a commit",
              tags: ["GitHub Actions", "Docker", "Nginx"],
              summary:
                "Made every deploy ship exactly the commit that built it, with serialized runs and images tagged by SHA, after three merges in three minutes left production on an older commit.",
              story: [
                { label: "PROBLEM", text: "Three merges within three minutes started three pipelines in parallel. The oldest build finished last, pushed the branch tag last, and production ended up running a commit without the newest changes. Nothing failed and every check was green, so nobody could tell." },
                { label: "DECISION", text: "Fixing the order alone wasn't enough, because a deploy pulled whatever the branch tag pointed to at pull time. I serialized the runs per branch and made each deploy pull an immutable tag with its commit SHA. Push runs are never cancelled on purpose, because a deploy cut between removing the old container and starting the new one would leave nothing running." },
                { label: "HOW", text: "A GitHub Actions concurrency group per branch queues pushes in merge order. Each image gets a sha tag next to the branch tag, and the deploy rebuilds that tag from its own commit, so it can only ship its own image. In the school system the same pattern builds three images in a buildx matrix with the GHA cache, reaches the VPS over SSH checking the host key, and starts that SHA, and its nginx image serves the frontend and proxies /api/ to the API container. On a VPS shared by several projects, each deploy logs in to GHCR with a throwaway Docker config, because a login left by one project made another's pulls fail with denied." },
                { label: "RESULT", text: "Production always runs the newest merged commit, and the image tag says which one it is. A login left behind by one project no longer breaks another project's deploy." },
              ],
            },
            {
              topic: "Migrations before start",
              tags: ["Docker"],
              summary:
                "The database is migrated before the app starts, so no new version ever runs against an old schema.",
              story: [
                { label: "PROBLEM", text: "With migrations as a manual deploy step, nothing stops a new version from starting against an old schema, and it fails on the first query that needs the new column." },
                { label: "DECISION", text: "I made migration a step of startup, not a manual deploy command. In the school system it's its own service, and the API only starts if it succeeds. In the Next.js project the container migrates on boot, which is simpler, at the cost that a migration that fails takes the site down, a risk the CI documents." },
                { label: "HOW", text: "In Compose, a migrate service runs the EF Core migrations bundle once, after Postgres passes its health check, with the same image as the API. The API depends on that service finishing successfully. In Next.js with Prisma, the container runs prisma migrate deploy and then starts the server." },
                { label: "RESULT", text: "No version starts against a schema it doesn't expect. In the school system, a failed migration stops the deploy before the new API starts." },
              ],
            },
            {
              topic: "Encrypted backups in a container",
              tags: ["Docker"],
              summary:
                "A container backs up the database every night with pg_dump, encrypts the backup with age and uploads it to an R2 bucket.",
              story: [
                { label: "PROBLEM", text: "The production database had no backup at all, so losing the server meant losing the data." },
                { label: "DECISION", text: "The backup is encrypted to a public key, so the server never holds the key to read it. The R2 keys live in a separate env file that only the backup container receives, never the API." },
                { label: "HOW", text: "The image starts from the same Postgres version as the database, so pg_dump always matches the server's major version. crond runs the script nightly and passes it the container's environment, so no file with secrets is written to disk. The dump is written in full before upload, so a pg_dump that fails halfway never uploads a truncated file. Retention deletes old backups only after a successful upload." },
                { label: "RESULT", text: "The database has a nightly copy off the server that only the holder of the private key can read. A dump that fails halfway never replaces a good backup." },
              ],
            },
            {
              topic: "Streaming connection",
              tags: ["Kubernetes", "GCP"],
              summary:
                "Diagnosed a real-time connection that dropped every 30 seconds and fixed it with a dedicated Kubernetes Service for the streaming routes, with a longer load-balancer timeout.",
              story: [
                { label: "PROBLEM", text: "The app's real-time stream kept reconnecting, and a notification could take up to 15 seconds to show. The app's logs showed the connection cut exactly 30 seconds after it opened, every time, and then the app waited up to 15 seconds of backoff before reconnecting." },
                { label: "DECISION", text: "The cut was the load balancer's default 30-second backend timeout, which is right for normal requests. Instead of raising it for the whole API, I gave the streaming routes their own Service with a one-hour timeout. Everything else keeps 30 seconds, so a hung normal request is still dropped quickly." },
                { label: "HOW", text: "A second Kubernetes Service with a {{BackendConfig|GKE's per-Service load-balancer settings}} of 3,600 seconds serves only the two streaming routes, the event stream and the assistant's replies, and the Ingress sends just those paths to it. On iOS, the reconnection backoff now resets after a successful response, instead of growing from 1 to 15 seconds and staying there." },
                { label: "RESULT", text: "The stream stays open instead of dropping every 30 seconds, and when it does drop the app reconnects right away. Normal requests keep their short timeout." },
              ],
            },
            {
              topic: "Minimal images",
              tags: ["Docker"],
              summary:
                "Built images with multi-stage builds so compilers and dev dependencies never reach production, and cut the Next.js image from 3.45 GB to 985 MB.",
              story: [
                { label: "PROBLEM", text: "The Next.js image weighed 3.45 GB. The Dockerfile copied the whole node_modules into the final image, which undid the standalone build, and shipped a Chromium that nothing in production used." },
                { label: "DECISION", text: "I split the build from the final image. The SDK, compilers and dev dependencies stay in the build stage, and the final image carries only what the server runs. The app containers don't run as root, so a flaw in the app doesn't hand root inside the container to whoever exploits it." },
                { label: "HOW", text: "Next.js builds in standalone mode, and the final image copies only the server and the modules it uses, running as its own user. The .NET APIs run as the official image's non-root user." },
                { label: "RESULT", text: "The image went from 3.45 GB to 985 MB, measured, so each deploy pulls less than a third of what it used to." },
              ],
            },
            {
              topic: "Image storage on R2",
              summary:
                "Moved product images from Cloudinary to Cloudflare R2 behind a custom domain, with uploads signed on the server so no storage key reaches the browser.",
              story: [
                { label: "PROBLEM", text: "Every admin upload signed its request in the browser, so the Cloudinary API key reached the client on each upload." },
                { label: "DECISION", text: "I moved storage to R2, whose free tier covers the catalog with no egress cost, and moved the upload to the project's own API route, so credentials never leave the server." },
                { label: "HOW", text: "The upload route only accepts admins, takes jpg, png, webp and gif up to 5 MB, and signs the write to R2 with SigV4 through aws4fetch, about 10 KB instead of the full AWS SDK. A re-runnable script with a dry-run mode copied the existing images and rewrote their URLs in the database." },
                { label: "RESULT", text: "Every image moved with no failures and answers from the CDN domain with the right content type. No storage key reaches the browser anymore." },
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
