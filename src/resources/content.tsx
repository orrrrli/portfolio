import { About, Blog, Gallery, Home, Language, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Orlando",
  lastName: "Castañeda",
  name: `Orlando Castañeda`,
  role: "Full Stack Developer",
  avatar: "/images/avatar-og.jpg",
  email: "keorcasa@gmail.com",
  location: "America/Tijuana",
  city: "Ensenada, Mexico",
  languages: ["English", "Spanish"],
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/orrrrli",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/castasan-orlando/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}, Full Stack Developer`,
  description: `Portfolio of Orlando Castañeda, a Full Stack Developer building backends with .NET and products with React and Next.js.`,
  headline: <>Building reliable backends and seamless frontend experiences</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Rokev Dynamics</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured initiative
        </Text>
      </Row>
    ),
    href: "https://rokevdynamics.com/",
  },
  subline: (
    <>
      Full Stack Developer based in Ensenada
      <br />
      Designing reliable systems and intuitive user experiences.
    </>
  ),
  stack: [
    "ASP.NET Core",
    "C#",
    "React",
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "Docker",
  ],
  ctaAbout: "View my background",
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet Orlando Castañeda, a Full Stack Developer based in Ensenada, Mexico building production systems with .NET and React.`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Full Stack Developer based in Ensenada, Mexico, with 3+ years building production systems
        with ASP.NET Core and Clean Architecture, shipping full-stack products end-to-end.
      </>
    ),
  },
  work: {
    display: true,
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
              <>
                Architected and implemented 80+ RESTful API endpoints using ASP.NET Core 8, C#,
                and Entity Framework Core, following Clean Architecture and CQRS principles.
              </>,
              <>
                Implemented cursor-based pagination on a module with 5,000+ records and ~20
                properties, reducing load time from 10–12 minutes to 4–5 minutes.
              </>,
              <>
                Designed and deployed a structured production logging system with role-based
                access for the support team, enabling independent error identification without
                escalating to engineering.
              </>,
              <>
                Implemented end-to-end request tracing using Correlation IDs propagated across
                chained endpoint calls within the same flow, enabling full request chain
                visibility in production.
              </>,
              <>
                Implemented a unit test suite with xUnit and Moq covering full positive and
                negative path coverage across all API endpoints, catching regressions before they
                reached production.
              </>,
            ],
          },
          {
            title: "Android App (Kotlin / Jetpack Compose)",
            achievements: [
              <>
                Built an offline-first inventory application enabling warehouse operators to
                continue working without internet connectivity.
              </>,
              <>
                Designed an incremental synchronization mechanism based on modification
                timestamps, significantly reducing transferred data volume.
              </>,
              <>
                Implemented Clean Architecture to separate business logic from UI layers.
              </>,
              <>
                Secured authentication using JWT with automatic token refresh.
              </>,
              <>
                Designed intuitive onboarding flows and built reusable UI components, reducing
                duplicated code across screens.
              </>,
              <>
                Implemented a support role with in-device log access, allowing the support team
                to diagnose client-side issues directly on customer devices without server
                access.
              </>,
            ],
          },
          {
            title: "Infrastructure / Azure",
            achievements: [
              <>
                Researched and built a proof-of-concept for Azure migration (App Service, Blob
                Storage, Azure SQL), providing the team with real data to support the
                infrastructure decision.
              </>,
            ],
          },
        ],
        images: [],
      },
      {
        company: "Sistemas de Información Mozart",
        timeframe: "Feb 2024 – May 2024",
        role: "Junior Software Engineer (Trainee)",
        sections: [
          {
            title: "Accounting Module (WinForms / C#)",
            achievements: [
              <>
                Developed 10–15 financial report interfaces using WinForms and C#, implementing
                business logic for report generation over relational data.
              </>,
              <>
                Optimized LINQ queries using projections to select only required fields,
                eliminating unnecessary entity loads and improving report generation efficiency.
              </>,
              <>
                Normalized SQL Server table schemas to third normal form, improving data
                integrity and query efficiency across business movement records.
              </>,
              <>
                Applied SOLID principles in the data access layer architecture, reducing database
                request bottlenecks.
              </>,
            ],
          },
        ],
        images: [],
      },
      {
        company: "OmniTEK Dev",
        timeframe: "Feb 2023 – Dec 2023",
        role: "Web Developer",
        sections: [
          {
            title: "Backend (Node.js / Express)",
            achievements: [
              <>
                Developed 30+ REST API endpoints using Node.js and Express, extending an existing
                backend to support new business features across client projects.
              </>,
              <>
                Built an isolated scraping microservice for real-time Estafeta shipment tracking
                without a public API available, decoupling it from the main system to prevent
                upstream changes from affecting the rest of the application.
              </>,
            ],
          },
          {
            title: "Frontend / Components",
            achievements: [
              <>
                Developed responsive landing pages with lead capture forms using React, Remix,
                and Tailwind CSS, applying Atomic Design to build a reusable component library
                adopted across multiple client projects.
              </>,
              <>
                Translated Figma mockups into production-ready components, shortening
                design-to-code iteration cycles.
              </>,
              <>
                Integrated a newsletter subscription feature by consuming a Node.js API,
                connecting forms to an external email service and persisting subscriber data to
                a database.
              </>,
              <>
                Identified and resolved frontend bugs across multiple production environments,
                ensuring consistent UI behavior across deployments.
              </>,
            ],
          },
        ],
        images: [],
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
                  <>
                    Built a Next.js 15 App Router storefront and admin dashboard with TypeScript
                    in strict mode, using Atomic Design for a reusable component library shared
                    across customer-facing and admin surfaces.
                  </>,
                  <>
                    Implemented global cart and checkout state with Zustand, persisted to
                    localStorage, coordinating multi-step checkout flows (address, shipping
                    quote, payment) without losing state on reload.
                  </>,
                  <>
                    Integrated Stripe Elements for card and SPEI bank transfer payments, handling
                    redirect-based return flows and reconciling payment status across multiple
                    non-terminal states.
                  </>,
                  <>
                    Built data-fetching hooks with SWR for the admin panel (orders, inventory,
                    quotes, in-store sales), with optimistic mutations for a responsive editing
                    experience.
                  </>,
                  <>
                    Audited and refactored UI components for mobile responsiveness across the
                    storefront and checkout flow.
                  </>,
                ],
              },
              {
                title: "Backend (Next.js / Prisma / PostgreSQL)",
                achievements: [
                  <>
                    Designed and implemented 50+ API routes across catalog, cart, orders, quotes,
                    inventory, and admin domains, following Clean Architecture with dependency
                    injection between layers.
                  </>,
                  <>
                    Modeled the core PostgreSQL schema in Prisma covering products, orders,
                    quotes, raw materials, and supplier orders, with mapper layers isolating
                    persistence details from business logic.
                  </>,
                  <>
                    Built Stripe PaymentIntents and webhook integration supporting card and SPEI
                    bank-transfer payments, including idempotent order-status transitions driven
                    by webhook events.
                  </>,
                  <>
                    Integrated Envia shipping API for label generation and tracking, and
                    Cloudinary for asset storage.
                  </>,
                  <>
                    Implemented Redis-backed JWT token blacklisting and rate limiting in
                    middleware to harden the NextAuth.js authentication layer.
                  </>,
                  <>
                    Instrumented critical checkout and order-creation paths with Sentry for
                    production error tracking, closing a prior gap of silent failures in payment
                    processing.
                  </>,
                  <>
                    Wrote unit and integration tests with Vitest for use-case services, enforcing
                    a zero-oversell stock guarantee under concurrent checkout load.
                  </>,
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
                  <>
                    Architected a Clean Architecture and CQRS backend using ASP.NET Core 9, C#,
                    EF Core, and MediatR, exposing 50+ endpoints through Carter minimal APIs with
                    railway-oriented error handling (ErrorOr&lt;T&gt;) instead of exceptions for
                    business logic.
                  </>,
                  <>
                    Designed a clinical goal evaluation engine implementing ADA Standards of Care
                    thresholds with per-patient doctor overrides, pregnancy-specific rule
                    branching, and immutable historical snapshots that never recalculate
                    retroactively.
                  </>,
                  <>
                    Implemented JWT authentication with HttpOnly/Secure cookies, refresh-token
                    rotation, anti-enumeration login responses, and login-attempt lockout, plus
                    doctor identity verification against Mexico&apos;s official medical license
                    registry.
                  </>,
                  <>
                    Built a correlation-ID based request tracing system using Serilog and
                    PostgreSQL sink with role-gated log access for support staff, enforcing a
                    strict no-PHI-in-logs policy across the codebase.
                  </>,
                  <>
                    Backed the API with 95+ automated tests across unit and integration suites
                    using xUnit, NSubstitute, and Testcontainers for real-database validation.
                  </>,
                  <>
                    AI-powered clinical insights via third-party API integration, pending
                    implementation.
                  </>,
                ],
              },
              {
                title: "Frontend (Next.js / React)",
                achievements: [
                  <>
                    Built the patient and doctor web application with Next.js 16 App Router and
                    React 19, using a feature-folder architecture with role-based route groups
                    and a typed API client layer.
                  </>,
                  <>
                    Implemented a multi-step glucose-logging wizard with React Hook Form and Zod
                    validation, designed mobile-first since patients primarily log data from
                    their phones.
                  </>,
                  <>
                    Used TanStack Query for server-state management and Zustand for session
                    state, with an automatic 401 to token-refresh to retry interceptor to keep
                    cookie-based JWT sessions transparent to the user.
                  </>,
                  <>
                    Built glucose and vitals visualization with Recharts and PDF export of
                    patient records for doctor consultations.
                  </>,
                ],
              },
            ],
          },
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Universidad Autónoma de Baja California",
        description: <>B.S. in Software Engineering & Emerging Technologies, 2019–2024.</>,
      },
      {
        name: "Meta Front-End Developer",
        description: <>Professional certificate, Coursera / Meta, 2023.</>,
        link: "https://coursera.org/share/970fc9983db283fff37e0b2b761e0e88",
      },
      {
        name: "Google Cloud DevOps Engineer",
        description: <>Preparing for Google Cloud Certification, Coursera / Google Cloud, 2023.</>,
        link: "https://coursera.org/share/3ec32abb273169789f880e424ee9e3e3",
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "ASP.NET Core / C#",
        description: (
          <>
            Building production REST APIs with ASP.NET Core 8, Clean Architecture, CQRS/MediatR,
            EF Core, and FluentValidation. Patterns I use on every backend.
          </>
        ),
        tags: [
          { name: ".NET", icon: "dotnet" },
          { name: "PostgreSQL", icon: "postgresql" },
          { name: "Docker", icon: "docker" },
        ],
        images: [],
      },
      {
        title: "React / Next.js",
        description: (
          <>
            Shipping full-stack products with Next.js 15, TypeScript, Tailwind CSS, Prisma, and
            Stripe. From checkout flows to admin panels.
          </>
        ),
        tags: [
          { name: "React", icon: "react" },
          { name: "Next.js", icon: "nextjs" },
          { name: "TypeScript", icon: "typescript" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/build-learn",
  label: "Build & Learn",
  title: "Build & Learn",
  description: "Things I'm building, exploring, and learning as a Full Stack Developer.",
  intro: "Things I build to actually understand how each piece works.",
  labels: {
    backLink: "Build & Learn",
    recentPosts: "Recent posts",
  },
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Software projects by ${person.name}: backends, full-stack products, and everything in between.`,
  labels: {
    behindTheBuild: "Behind the build",
    viewProject: "View project",
    backToProjects: "Projects",
    selectedWork: "Selected Work",
    readCaseStudy: "Read case study",
  },
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export function getContent(lang: Language) {
  if (lang === "es") {
    return {
      person: {
        ...person,
        role: "Desarrollador Full Stack",
      },
      home: {
        ...home,
        label: "Inicio",
        headline: <>Desarrollando backends<br />confiables y creando<br />experiencias fluidas en frontend.</>,
        subline: (
          <>
            Desarrollador Full Stack en Ensenada
            <br />
            Creando sistemas confiables y experiencias de usuario intuitivas.
          </>
        ),
        stack: [
          "ASP.NET Core",
          "C#",
          "React",
          "Next.js",
          "TypeScript",
          "PostgreSQL",
          "Docker",
        ],
        ctaAbout: "Ver mi trayectoria",
      },
      about: {
        ...about,
        label: "Sobre mí",
        intro: { ...about.intro, title: "Introducción" },
        work: {
          ...about.work,
          title: "Experiencia",
          experiences: [
            {
              company: "Sistemas de Información Mozart",
              timeframe: "Jun 2024 – Feb 2026",
              role: "Ingeniero de Software",
              sections: [
                {
                  title: "Backend (.NET)",
                  achievements: [
                    <>
                      Arquitecturé e implementé más de 80 endpoints RESTful usando ASP.NET Core 8,
                      C# y Entity Framework Core, siguiendo Clean Architecture y principios CQRS.
                    </>,
                    <>
                      Implementé paginación basada en cursor en un módulo con más de 5,000
                      registros y ~20 propiedades, reduciendo el tiempo de carga de 10–12 minutos a
                      4–5 minutos.
                    </>,
                    <>
                      Diseñé y desplegué un sistema estructurado de logging de producción con
                      acceso por rol para el equipo de soporte, permitiendo identificación
                      independiente de errores sin escalar a desarrollo.
                    </>,
                    <>
                      Implementé tracing end-to-end de peticiones usando Correlation IDs propagados
                      a través de llamadas encadenadas dentro del mismo flujo, habilitando
                      visibilidad completa de la cadena de la petición en producción.
                    </>,
                    <>
                      Implementé una suite de tests unitarios con xUnit y Moq cubriendo casos
                      positivos y negativos en todos los endpoints de la API, detectando
                      regresiones antes de que llegaran a producción.
                    </>,
                  ],
                },
                {
                  title: "Android App (Kotlin / Jetpack Compose)",
                  achievements: [
                    <>
                      Construí una aplicación de inventario offline-first que permite a los
                      operadores de almacén seguir trabajando sin conectividad a internet.
                    </>,
                    <>
                      Diseñé un mecanismo de sincronización incremental basado en timestamps de
                      modificación, reduciendo significativamente el volumen de datos
                      transferidos.
                    </>,
                    <>
                      Implementé Clean Architecture para separar la lógica de negocio de las
                      capas de UI.
                    </>,
                    <>
                      Aseguré la autenticación con JWT y refresh automático de tokens.
                    </>,
                    <>
                      Diseñé flujos de onboarding intuitivos y construí componentes UI
                      reutilizables, reduciendo código duplicado entre pantallas.
                    </>,
                    <>
                      Implementé un rol de soporte con acceso a logs directamente en el
                      dispositivo, permitiendo al equipo de soporte diagnosticar incidencias
                      del lado del cliente en los dispositivos del cliente sin acceso al
                      servidor.
                    </>,
                  ],
                },
                {
                  title: "Infraestructura / Azure",
                  achievements: [
                    <>
                      Investigué y construí una prueba de concepto para migración a Azure (App
                      Service, Blob Storage, Azure SQL), proporcionando al equipo datos reales
                      para soportar la decisión de infraestructura.
                    </>,
                  ],
                },
              ],
              images: [],
            },
            {
              company: "Sistemas de Información Mozart",
              timeframe: "Feb 2024 – May 2024",
              role: "Ingeniero de Software Junior (Prácticas)",
              sections: [
                {
                  title: "Módulo de Contabilidad (WinForms / C#)",
                  achievements: [
                    <>
                      Desarrollé entre 10 y 15 interfaces de reportes financieros usando WinForms y
                      C#, implementando lógica de negocio para la generación de reportes sobre
                      datos relacionales.
                    </>,
                    <>
                      Optimicé consultas LINQ usando proyecciones para seleccionar solo los campos
                      requeridos, eliminando cargas innecesarias de entidades y mejorando la
                      eficiencia de la generación de reportes.
                    </>,
                    <>
                      Normalicé esquemas de tablas de SQL Server a tercera forma normal,
                      mejorando la integridad de datos y la eficiencia de consultas sobre
                      registros de movimientos de negocio.
                    </>,
                    <>
                      Apliqué principios SOLID en la arquitectura de la capa de acceso a datos,
                      reduciendo cuellos de botella en peticiones a la base de datos.
                    </>,
                  ],
                },
              ],
              images: [],
            },
            {
              company: "OmniTEK Dev",
              timeframe: "Feb 2023 – Dic 2023",
              role: "Desarrollador Web",
              sections: [
                {
                  title: "Backend (Node.js / Express)",
                  achievements: [
                    <>
                      Desarrollé más de 30 endpoints REST API usando Node.js y Express,
                      extendiendo un backend existente para soportar nuevas funcionalidades de
                      negocio a través de proyectos de clientes.
                    </>,
                    <>
                      Construí un microservicio aislado de scraping para rastreo de envíos en
                      tiempo real con Estafeta ante la inexistencia de una API pública,
                      desacoplándolo del sistema principal para evitar que cambios upstream
                      afectaran al resto de la aplicación.
                    </>,
                  ],
                },
                {
                  title: "Frontend / Componentes",
                  achievements: [
                    <>
                      Desarrollé landing pages responsivas con formularios de captura de leads
                      usando React, Remix y Tailwind CSS, aplicando Atomic Design para construir
                      una librería de componentes reutilizables adoptada en múltiples proyectos
                      de clientes.
                    </>,
                    <>
                      Traduje mockups de Figma a componentes listos para producción, acortando
                      los ciclos de iteración de diseño a código.
                    </>,
                    <>
                      Integré una funcionalidad de suscripción a newsletter consumiendo una API en
                      Node.js, conectando formularios a un servicio externo de email y
                      persistiendo los datos de suscriptores en una base de datos.
                    </>,
                    <>
                      Identifiqué y resolví bugs de frontend a través de múltiples entornos de
                      producción, asegurando comportamiento UI consistente entre despliegues.
                    </>,
                  ],
                },
              ],
              images: [],
            },
            {
              company: "Freelance · Full-Stack Development",
              timeframe: "2024 – Presente",
              role: "Proyectos actuales · En paralelo al empleo de tiempo completo",
              sections: [
                {
                  title: "Axiriam Shop (Plataforma de e-commerce, Beta)",
                  subsections: [
                    {
                      title: "Frontend (Next.js / React)",
                      achievements: [
                        <>
                          Construí un storefront y panel de administración con Next.js 15 App
                          Router y TypeScript en modo estricto, usando Atomic Design para una
                          librería de componentes reutilizables compartida entre superficies de
                          cliente y admin.
                        </>,
                        <>
                          Implementé estado global de carrito y checkout con Zustand, persistido
                          en localStorage, coordinando flujos de varias etapas (dirección,
                          cotización de envío, pago) sin perder el estado al recargar.
                        </>,
                        <>
                          Integré Stripe Elements para pagos con tarjeta y transferencia SPEI,
                          manejando flujos de retorno por redirect y reconciliando el estado de
                          pago entre múltiples estados no terminales.
                        </>,
                        <>
                          Construí hooks de fetching con SWR para el panel admin (órdenes,
                          inventario, cotizaciones, ventas en tienda), con mutaciones optimistas
                          para una edición responsiva.
                        </>,
                        <>
                          Audité y refactoricé componentes UI para mobile responsiveness en el
                          storefront y el flujo de checkout.
                        </>,
                      ],
                    },
                    {
                      title: "Backend (Next.js / Prisma / PostgreSQL)",
                      achievements: [
                        <>
                          Diseñé e implementé más de 50 rutas API repartidas entre catálogo,
                          carrito, órdenes, cotizaciones, inventario y admin, siguiendo Clean
                          Architecture con inyección de dependencias entre capas.
                        </>,
                        <>
                          Modelé el esquema core de PostgreSQL en Prisma cubriendo productos,
                          órdenes, cotizaciones, materia prima y órdenes de proveedor, con capas
                          de mapper que aislan los detalles de persistencia de la lógica de
                          negocio.
                        </>,
                        <>
                          Construí la integración de Stripe PaymentIntents y webhooks para pagos
                          con tarjeta y transferencia SPEI, incluyendo transiciones de estado de
                          orden idempotentes disparadas por eventos de webhook.
                        </>,
                        <>
                          Integré la API de Envia para generación de guías y rastreo, y
                          Cloudinary para almacenamiento de assets.
                        </>,
                        <>
                          Implementé blacklisting de tokens JWT y rate limiting en middleware,
                          ambos respaldados por Redis, para endurecer la capa de autenticación de
                          NextAuth.js.
                        </>,
                        <>
                          Instrumenté los caminos críticos de checkout y creación de órdenes con
                          Sentry para tracking de errores en producción, cerrando un hueco previo
                          de fallos silenciosos en el procesamiento de pagos.
                        </>,
                        <>
                          Escribí tests unitarios y de integración con Vitest para los servicios
                          de casos de uso, garantizando cero sobreventa de stock bajo carga
                          concurrente en checkout.
                        </>,
                      ],
                    },
                  ],
                },
                {
                  title: "Metavix (Plataforma de gestión de diabetes, Beta)",
                  subsections: [
                    {
                      title: "Backend (ASP.NET Core 9 / C#)",
                      achievements: [
                        <>
                          Arquitecturé un backend con Clean Architecture y CQRS usando ASP.NET
                          Core 9, C#, EF Core y MediatR, exponiendo más de 50 endpoints a través
                          de Minimal APIs con Carter y manejo de errores orientado a
                          ferrocarriles (ErrorOr&lt;T&gt;) en lugar de excepciones para la lógica
                          de negocio.
                        </>,
                        <>
                          Diseñé un motor de evaluación de metas clínicas que implementa los
                          umbrales de ADA Standards of Care con overrides por médico y por
                          paciente, ramificaciones específicas de embarazo y snapshots históricos
                          inmutables que nunca se recalculan retroactivamente.
                        </>,
                        <>
                          Implementé autenticación JWT con cookies HttpOnly/Secure, rotación de
                          refresh tokens, respuestas de login anti-enumeración y lockout por
                          intentos fallidos, además de verificación de identidad médica contra el
                          registro oficial de licencias de México.
                        </>,
                        <>
                          Construí un sistema de trazabilidad de peticiones basado en Correlation
                          IDs usando Serilog con sink a PostgreSQL, con acceso a logs gated por
                          rol para soporte, aplicando una política estricta de cero PHI en logs
                          en todo el código.
                        </>,
                        <>
                          Respaldé la API con más de 95 tests automatizados entre suites
                          unitarias y de integración usando xUnit, NSubstitute y Testcontainers
                          para validación con base de datos real.
                        </>,
                        <>
                          Insights clínicos potenciados por IA vía integración con API de
                          terceros, pendiente de implementación.
                        </>,
                      ],
                    },
                    {
                      title: "Frontend (Next.js / React)",
                      achievements: [
                        <>
                          Construí la aplicación web de paciente y médico con Next.js 16 App
                          Router y React 19, usando arquitectura por feature folders con route
                          groups por rol y una capa de API client tipada.
                        </>,
                        <>
                          Implementé un wizard multi-paso para registro de glucosa con React
                          Hook Form y validación con Zod, diseñado mobile-first ya que los
                          pacientes registran datos principalmente desde su teléfono.
                        </>,
                        <>
                          Usé TanStack Query para server-state y Zustand para session state, con
                          un interceptor que convierte automáticamente un 401 en refresh de token
                          y retry para mantener transparentes las sesiones JWT basadas en
                          cookies.
                        </>,
                        <>
                          Construí visualización de glucosa y signos vitales con Recharts y
                          exportación a PDF de expedientes de paciente para consulta médica.
                        </>,
                      ],
                    },
                  ],
                },
              ],
              images: [],
            },
          ],
        },
        studies: { ...about.studies, title: "Formación" },
        technical: { ...about.technical, title: "Habilidades técnicas" },
      },
      blog: {
        ...blog,
        label: "Aprende & Construye",
        title: "Aprende & Construye",
        description:
          "Cosas que estoy construyendo, explorando y aprendiendo como Full Stack Developer.",
        intro: "Cosas que construyo para entender de verdad cómo funciona cada pieza.",
        labels: {
          backLink: "Aprende & Construye",
          recentPosts: "Publicaciones recientes",
        },
      },
      work: {
        ...work,
        label: "Proyectos",
        title: `Proyectos – ${person.name}`,
        description: `Proyectos de desarrollo por ${person.name}`,
        labels: {
          behindTheBuild: "Detrás del proyecto",
          viewProject: "Ver proyecto",
          backToProjects: "Proyectos",
          selectedWork: "Proyectos destacados",
          readCaseStudy: "Ver caso de estudio",
        },
      },
      newsletter,
      social,
      gallery,
      rokevCTA: {
        description:
          "Mi empresa de desarrollo de software, donde ayudamos a negocios a lanzar productos confiables y listos para producción.",
        buttonLabel: "Visitar Rokev Dynamics",
      },
    };
  }

  return {
    person,
    home,
    about,
    blog,
    work,
    newsletter,
    social,
    gallery,
    rokevCTA: {
      description:
        "My software development venture, where we help businesses ship reliable, production-ready products.",
      buttonLabel: "Visit Rokev Dynamics",
    },
  };
}

export { person, social, newsletter, home, about, blog, work, gallery };
