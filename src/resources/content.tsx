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
      Full Stack Developer based in Ensenada — building backends that last and frontends that feel right.
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
        Full Stack Developer based in Ensenada, Mexico — 3+ years building production systems
        with ASP.NET Core and Clean Architecture, shipping full-stack products end-to-end.
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
            Shipped a full-stack e-commerce platform handling 200+ orders/month — Stripe checkout
            with webhook confirmation, inventory reservation, and a background service expiring
            unpaid orders every 5 minutes to release held stock.
          </>,
          <>
            Built a medical REST API for a diabetes platform in closed beta — 2-stage doctor
            verification (SEP + Didit KYC), role-based auth, and a self-hosted LLM (Gemma 3n)
            for clinical insights with zero patient data leaving the platform.
          </>,
          <>
            Developed a sports management platform solo — Stripe payments, student enrollment,
            roster management, and Google Sheets admin reporting; delivered to production
            end-to-end.
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
            Built the full ERP backend — 80+ REST endpoints with ASP.NET Core 8 and Clean
            Architecture, powering every department&apos;s core operations in production.
          </>,
          <>
            Designed the .NET 8 API architecture with CQRS/MediatR and Minimal APIs with Carter —
            consistent error handling and independently testable endpoints across all 80+ routes.
          </>,
          <>
            Deployed a role-based logging system adopted daily by support — enabling direct error
            diagnosis without escalating to development.
          </>,
          <>
            Architected the .NET backend for an Android ERP companion app — Clean Architecture
            enabling warehouse staff to run operations on mobile, eliminating fixed-terminal
            dependency.
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
            Developed accounting system features in C# and Windows Forms — business logic for
            financial report generation across relational data.
          </>,
          <>
            Reduced query overhead with LINQ projections — selecting only required fields,
            eliminating unnecessary entity loads to improve data retrieval efficiency in report
            generation.
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
            Built responsive landing pages with React and Remix — Atomic Design component library
            cut duplicated frontend code across multiple client projects.
          </>,
          <>
            Converted Figma mockups into production-ready React components — shortening
            design-to-code iteration cycles.
          </>,
          <>
            Integrated newsletter subscriptions via a Node.js API — connecting lead capture forms
            to an email service with persistent subscriber storage.
          </>,
          <>
            Resolved critical UX risks in production — overlapping buttons blocking key actions
            and destructive controls outweighing safer alternatives — preventing accidental,
            irreversible user actions.
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
  path: "/build-learn",
  label: "Build & Learn",
  title: "Build & Learn",
  description: "Things I'm building, exploring, and learning as a Full Stack Developer.",
  labels: {
    backLink: "Build & Learn",
    recentPosts: "Recent posts",
  },
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
                  Desarrollé una plataforma de e-commerce con 200+ órdenes/mes — checkout con
                  Stripe confirmado por webhooks, reserva de inventario y servicio en segundo plano
                  que expira órdenes no pagadas cada 5 minutos para liberar stock retenido.
                </>,
                <>
                  Construí una API REST médica para una plataforma de diabetes en beta cerrada —
                  verificación de médicos en 2 etapas (SEP + KYC Didit), autenticación por roles y
                  LLM auto-hospedado (Gemma 3n) para insights clínicos sin enviar datos de
                  pacientes a terceros.
                </>,
                <>
                  Entregué una plataforma deportiva de forma independiente — pagos con Stripe,
                  inscripción de alumnos, gestión de plantillas e integración con Google Sheets
                  para reportes administrativos; desplegada a producción de principio a fin.
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
                  Construí el backend completo del ERP — más de 80 endpoints REST con ASP.NET
                  Core 8 y Clean Architecture, que alimentan las operaciones centrales de todos
                  los departamentos en producción.
                </>,
                <>
                  Diseñé la arquitectura de la API en .NET 8 con CQRS/MediatR y Minimal APIs con
                  Carter — manejo de errores consistente y endpoints testeables de forma
                  independiente en las más de 80 rutas.
                </>,
                <>
                  Desplegué un sistema de logging por roles adoptado diariamente por soporte —
                  habilitando diagnóstico directo de errores sin escalar al equipo de desarrollo.
                </>,
                <>
                  Lideré la arquitectura del backend .NET para una app Android compañera del ERP
                  — Clean Architecture que permite al personal de almacén operar en mobile,
                  eliminando la dependencia de terminales fijas.
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
                  Implementé funcionalidades para un sistema de contabilidad interno en C# y
                  Windows Forms — lógica de negocio para generación de reportes financieros sobre
                  datos relacionales.
                </>,
                <>
                  Reduje la sobrecarga de consultas con proyecciones LINQ — seleccionando solo
                  campos requeridos y eliminando cargas de entidades innecesarias para generación
                  precisa de reportes.
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
                  Construí landing pages responsivas con React y Remix — librería de componentes
                  con Atomic Design que redujo el código frontend duplicado entre múltiples
                  proyectos de clientes.
                </>,
                <>
                  Convertí mockups de Figma en componentes React listos para producción —
                  acortando los ciclos de iteración diseño-código.
                </>,
                <>
                  Integré suscripciones a newsletter vía una API Node.js — conectando formularios
                  de captura a un servicio de email externo con almacenamiento persistente de
                  suscriptores.
                </>,
                <>
                  Resolví riesgos críticos de UX en producción — botones superpuestos bloqueando
                  acciones clave y controles destructivos con mayor peso visual que los seguros —
                  previniendo acciones accidentales e irreversibles del usuario.
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
          "Mi empresa de desarrollo de software — ayudamos a negocios a lanzar productos confiables y listos para producción.",
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
        "My software development venture — we help businesses ship reliable, production-ready products.",
      buttonLabel: "Visit Rokev Dynamics",
    },
  };
}

export { person, social, newsletter, home, about, blog, work, gallery };
