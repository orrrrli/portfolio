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
  title: `${person.name} — Full Stack Developer`,
  description: `Portfolio of Orlando Castañeda, a Full Stack Developer building backends with .NET and products with React and Next.js.`,
  headline: <>Building reliable backends, bridging to the frontend.</>,
  featured: {
    display: true,
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
      I&apos;m Orlando, a Full Stack Developer based in Ensenada. I build backends that last and frontends that feel right.
    </>
  ),
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
        Full Stack Developer based in Ensenada, Mexico with 3+ years building production systems.
        I specialize in backend development with ASP.NET Core and Clean Architecture, and ship
        full-stack products end-to-end.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Freelance – Backend & Full Stack",
        timeframe: "Jan 2024 – Present",
        role: "Independent Full Stack Developer",
        achievements: [
          <>
            E-commerce platform in production (200+ orders/month): end-to-end backend with Stripe
            checkout, payment webhooks, inventory reservation, and a background service that
            auto-expires unpaid orders. Stack: Next.js 15, TypeScript, Stripe, PostgreSQL, Prisma.
          </>,
          <>
            Medical platform (closed beta): REST API with Clean Architecture, CQRS/MediatR, JWT
            auth, and a self-hosted open-source LLM (Google Gemma 3n) for clinical insights —
            no patient data sent to third parties.
          </>,
          <>
            Sports platform (production): Stripe payments, student enrollments, roster management,
            and Google Sheets integration for admin reporting. Built solo, end-to-end.
          </>,
        ],
        images: [],
      },
      {
        company: "Sistemas de Información Mozart",
        timeframe: "Jun 2024 – Feb 2026",
        role: "Software Engineer",
        achievements: [
          <>
            Built the full production ERP backend: 80+ REST endpoints with ASP.NET Core 8, C#,
            Clean Architecture, and CQRS — the backbone of the company&apos;s internal system.
          </>,
          <>
            Engineered a scalable .NET 8 API applying CQRS with MediatR, the Error Mediator
            pattern, and Minimal APIs with Carter for a clean, extensible backend structure.
          </>,
          <>
            Shipped a role-based logging system used daily by the support team to diagnose errors
            without escalating to development.
          </>,
          <>
            Led the architecture and .NET backend integration for an Android app — a mobile
            companion to the company&apos;s desktop ERP — applying Clean Architecture to let
            warehouse staff run operations on the move instead of being tied to a desktop terminal.
          </>,
        ],
        images: [],
      },
      {
        company: "Sistemas de Información Mozart",
        timeframe: "Feb 2024 – May 2024",
        role: "Junior Software Engineer (Internship)",
        achievements: [
          <>
            Built features for an internal accounting system using C#, Windows Forms, and
            relational databases, implementing business logic for financial report generation
            under senior guidance.
          </>,
          <>
            Optimized data retrieval using LINQ projections — selecting only required fields and
            avoiding unnecessary related-entity loads — to implement business logic for accurate,
            well-structured financial reports.
          </>,
        ],
        images: [],
      },
      {
        company: "OmniTEK Dev",
        timeframe: "Feb 2023 – Dec 2023",
        role: "Junior Software Engineer",
        achievements: [
          <>
            Developed responsive landing pages with lead capture forms using React, Remix, and
            Tailwind CSS, applying Atomic Design to build a reusable component library that reduced
            duplicated frontend code across projects.
          </>,
          <>
            Translated Figma mockups into production-ready components, shortening design-to-code
            iteration cycles in an Agile environment.
          </>,
          <>
            Integrated a newsletter subscription feature by consuming a Node.js API, connecting
            lead capture forms to an external email service and persisting subscriber data to a
            database.
          </>,
          <>
            Identified and fixed UX risks in production — including overlapping buttons blocking
            key actions and destructive actions (delete) visually outweighing safer ones —
            reducing the chance of accidental, irreversible user actions.
          </>,
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
        description: <>B.S. in Software Engineering & Emerging Technologies — 2019–2024.</>,
      },
      {
        name: "Meta Front-End Developer",
        description: <>Professional certificate — Coursera / Meta, 2023.</>,
        link: "https://coursera.org/share/970fc9983db283fff37e0b2b761e0e88",
      },
      {
        name: "Google Cloud DevOps Engineer",
        description: <>Preparing for Google Cloud Certification — Coursera / Google Cloud, 2023.</>,
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
  path: "/blog",
  label: "Build & Learn",
  title: "Build & Learn",
  description: "Things I'm building, exploring, and learning as a Full Stack Developer.",
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Software projects by ${person.name} — backends, full-stack products, and everything in between.`,
  labels: {
    behindTheBuild: "Behind the build",
    viewProject: "View project",
    backToProjects: "Projects",
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
        headline: <>Construyendo backends confiables, conectando con el frontend.</>,
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
              company: "Freelance – Backend & Full Stack",
              timeframe: "Ene 2024 – Presente",
              role: "Desarrollador Full Stack Independiente",
              achievements: [
                <>
                  Plataforma de e-commerce en producción (200+ órdenes/mes): backend completo con
                  Stripe checkout, webhooks de pago, reserva de inventario y un servicio en segundo
                  plano que expira órdenes no pagadas automáticamente. Stack: Next.js 15,
                  TypeScript, Stripe, PostgreSQL, Prisma.
                </>,
                <>
                  Plataforma médica (beta cerrada): API REST con Clean Architecture, CQRS/MediatR,
                  autenticación JWT y un LLM de código abierto auto-hospedado (Google Gemma 3n)
                  para insights clínicos — ningún dato de pacientes se envía a terceros.
                </>,
                <>
                  Plataforma deportiva (producción): pagos con Stripe, inscripciones de alumnos,
                  gestión de plantillas e integración con Google Sheets para reportes
                  administrativos. Desarrollada de forma independiente, de principio a fin.
                </>,
              ],
              images: [],
            },
            {
              company: "Sistemas de Información Mozart",
              timeframe: "Jun 2024 – Feb 2026",
              role: "Ingeniero de Software",
              achievements: [
                <>
                  Construí el backend completo del ERP en producción: más de 80 endpoints REST con
                  ASP.NET Core 8, C#, Clean Architecture y CQRS — el núcleo del sistema interno
                  de la empresa.
                </>,
                <>
                  Diseñé una API escalable en .NET 8 aplicando CQRS con MediatR, el patrón Error
                  Mediator y Minimal APIs con Carter para una estructura de backend limpia y
                  extensible.
                </>,
                <>
                  Implementé un sistema de logging basado en roles que el equipo de soporte usa
                  diariamente para diagnosticar errores sin escalar a desarrollo.
                </>,
                <>
                  Lideré la arquitectura e integración del backend .NET para una aplicación Android
                  — una extensión móvil del ERP de escritorio de la empresa — aplicando Clean
                  Architecture para que el personal de almacén pudiera operar en movimiento sin
                  estar atado a una terminal de escritorio.
                </>,
              ],
              images: [],
            },
            {
              company: "Sistemas de Información Mozart",
              timeframe: "Feb 2024 – May 2024",
              role: "Ingeniero de Software Junior (Prácticas)",
              achievements: [
                <>
                  Desarrollé funcionalidades para un sistema de contabilidad interno usando C#,
                  Windows Forms y bases de datos relacionales, implementando lógica de negocio
                  para la generación de reportes financieros bajo supervisión de ingenieros senior.
                </>,
                <>
                  Optimicé la recuperación de datos usando proyecciones LINQ — seleccionando solo
                  los campos necesarios y evitando cargas innecesarias de entidades relacionadas —
                  para implementar lógica de negocio que genera reportes financieros precisos y
                  bien estructurados.
                </>,
              ],
              images: [],
            },
            {
              company: "OmniTEK Dev",
              timeframe: "Feb 2023 – Dic 2023",
              role: "Ingeniero de Software Junior",
              achievements: [
                <>
                  Desarrollé landing pages responsivas con formularios de captura de leads usando
                  React, Remix y Tailwind CSS, aplicando Atomic Design para construir una librería
                  de componentes reutilizables que redujo el código frontend duplicado entre
                  proyectos.
                </>,
                <>
                  Traduje mockups de Figma a componentes listos para producción, acortando los
                  ciclos de iteración diseño-código en un entorno Agile.
                </>,
                <>
                  Integré una funcionalidad de suscripción a newsletter consumiendo una API en
                  Node.js, conectando formularios de captura de leads a un servicio de email
                  externo y persistiendo datos de suscriptores en base de datos.
                </>,
                <>
                  Identifiqué y corregí riesgos de UX en producción — incluyendo botones
                  superpuestos que bloqueaban acciones clave y acciones destructivas (eliminar)
                  con mayor peso visual que las más seguras — reduciendo la posibilidad de
                  acciones accidentales e irreversibles por parte del usuario.
                </>,
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
        },
      },
      newsletter,
      social,
      gallery,
    };
  }

  return { person, home, about, blog, work, newsletter, social, gallery };
}

export { person, social, newsletter, home, about, blog, work, gallery };
