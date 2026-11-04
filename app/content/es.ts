import { en } from "./en";
import type { Content } from "./types";

// Fields not overridden here were never translated in the old site and stay in English verbatim.
export const es: Content = {
  ...en,
  person: { ...en.person, role: "Desarrollador Full Stack" },
  home: {
    ...en.home,
    label: "Inicio",
    image: "/images/og/home-es.png",
    headline: ["Desarrollando backends", "confiables y creando", "experiencias fluidas en frontend."],
    subline: [
      "Desarrollador Full Stack en Ensenada",
      "Creando sistemas confiables y experiencias de usuario intuitivas.",
    ],
    cta: { projects: "Ver proyectos", blog: "Leer el blog", contact: "Contacto" },
    sections: {
      profile: "perfil",
      experience: "experiencia",
      projects: "proyectos",
      stack: "stack",
      contact: "contacto",
    },
    backToTop: "inicio",
  },
  about: {
    profile: {
      title: "Construyo software en producción, desde el API hasta el LLM que lo llama.",
      description:
        "Software Engineer con alrededor de 4 años en producción en backend, mobile y web. Últimamente llevo features de LLM a producción: tool calling, evals y modelos de visión sobre backends en Kotlin y .NET.",
      terminal: {
        host: "orlando@ensenada:~/career",
        lines: [
          { command: "whoami", output: "Software Engineer & AI Engineer" },
          {
            command: "grep -i focus ./stack.log",
            output: "LLM tool calling, evals, Kotlin/Spring Boot, ASP.NET Core, SwiftUI, Next.js, GCP",
          },
          { command: "cat education", output: "Ingeniería en Software y Tecnologías Emergentes, UABC (2019–2024)" },
          { command: "certs --active", output: "Meta Front-End Developer, Google Cloud DevOps (en curso)" },
        ],
      },
      summary:
        "En Dallio entrego productos móviles para clientes: un asistente con LLM y 13 tools, flujos de juegos con dinero real en Kotlin y SwiftUI, y el pipeline de imágenes en GCP que los sostiene.",
      focus: [
        {
          icon: "ai",
          path: "./ai",
          title: "Features de LLM en producción",
          description:
            "Tool calling y evals contra el modelo en vivo (92% de éxito en tool calls, $0.03 por eval), respuestas en streaming con botón para detenerlas, y un modelo de visión que filtra imágenes con 95.6% de precisión.",
        },
        {
          icon: "arch",
          path: "./arch",
          title: "Arquitectura backend",
          description:
            "Kotlin/Spring Boot y ASP.NET Core con Clean Architecture y CQRS: más de 100 endpoints REST, máquinas de estados con tareas programadas y optimistic locking en los movimientos de dinero.",
        },
        {
          icon: "ops",
          path: "./ops",
          title: "Cloud e infraestructura",
          description:
            "GCP (Cloud Run, Storage, CDN), Kubernetes y Terraform: imágenes 10 veces más ligeras, buckets cerrados al público y una conexión en tiempo real con 92% menos reconexiones.",
        },
      ],
    },
    work: {
      title: "Experiencia",
      experiences: [
        {
          company: "Dallio Software Solutions",
          logo: "/images/companies/dallio.svg",
          timeframe: "mar. 2026 – presente",
          role: "Software Engineer",
          summary: "Desarrollo full-stack de productos móviles para clientes: una app social con juegos de dinero real (iOS + API en Kotlin + consola en Next.js) y una app de comunidad (Android).",
          sections: [
            {
              title: "LLM & Agentic Systems",
              achievements: [
                "Asistente LLM: entregué features del asistente con LLM: arma una partida desde una conversación de chat usando 13 tools, responde preguntas con fotos y recuerda a los usuarios sus próximas partidas. Participé en 67 evals contra el modelo en vivo, con 92% de éxito en tool calls, mediana menor a 500 ms por tool call y un costo promedio de $0.03 USD por eval. Agregué un sistema para limitar las preguntas y un guard ante fallas del API, y logré que las respuestas lleguen una a la vez con un botón para detenerlas, cobrando cada pregunta una sola vez.",
                "Filtro de imágenes con visión: integré un modelo de visión (Cloudflare Clef vía OpenRouter) como filtro de imágenes que rechaza las que no corresponden al contenido esperado o están borrosas, y solicita una nueva imagen cuando la confianza del modelo está por debajo del umbral. Ajusté sus umbrales con llamadas reales y corregí rechazos falsos de imágenes nítidas, alcanzando 95.6% de precisión en la clasificación.",
              ],
            },
            {
              title: "Producto (iOS + API en Kotlin)",
              achievements: [
                "Motor de workflows transaccionales: construí los cobros, pagos y estados de juegos con dinero real (API en Kotlin/Spring Boot + SwiftUI): check-in por geolocalización, integración de cobros y pagos con Lucra, y una máquina de estados orquestada con tareas programadas y acciones automáticas, como expiraciones y recordatorios. Protegí los movimientos de dinero con validación de estado en el servidor y optimistic locking contra escrituras concurrentes, validado de punta a punta en 118 cuotas de entrada sin cobros duplicados.",
              ],
            },
            {
              title: "Infra y seguridad",
              achievements: [
                "Entrega de contenido: construí la entrega de imágenes con Google Cloud Storage e imgproxy en Cloud Run detrás de Cloud CDN: las imágenes llegan 10 veces más ligeras que los originales (45 KB contra 450 KB en promedio) y el 94% de los bytes sale del cache.",
                "Seguridad de storage: detecté y corregí una exposición que permitía listar los buckets de contenido y descargar fotos privadas de chats y del asistente. Restringí el acceso a los buckets con Terraform y clasifiqué cada archivo como público o privado, así que el contenido privado ya no se puede descubrir ni descargar en masa.",
                "Infra en tiempo real: corregí la conexión en tiempo real, que se cortaba cada 30 s, dándole a sus rutas de streaming un servicio de Kubernetes dedicado con un timeout más largo en el load balancer. Las reconexiones bajaron 92%.",
              ],
            },
          ],
        },
        {
          company: "Sistemas de Información Mozart",
          logo: "/images/companies/mozart.jpg",
          timeframe: "ene. 2024 – feb. 2026",
          role: "Software Engineer",
          summary: "Ingresé como Trainee en ene. 2024 y fui Software Engineer desde jun. 2024. Backend y app Android del ERP.",
          sections: [
            {
              title: "Backend (.NET)",
              achievements: [
                "Diseñé e implementé más de 100 endpoints REST con ASP.NET Core 8, C# y EF Core, siguiendo Clean Architecture y CQRS.",
                "Implementé paginación por cursor en un módulo con 5,000+ registros y 20+ propiedades, reduciendo el tiempo de consulta por página de 1–2 s a 500 ms en promedio.",
                "Diseñé un sistema de logging estructurado en producción con acceso por roles: el equipo de soporte identifica errores directamente, sin escalar a desarrollo.",
                "Escribí una suite de pruebas unitarias (xUnit, Moq) que cubre rutas positivas y negativas de todos los endpoints, detectando regresiones antes de llegar a producción.",
              ],
            },
            {
              title: "App Android (Kotlin / Jetpack Compose)",
              achievements: [
                "Construí una app de inventario offline-first que permite a los operadores de almacén seguir trabajando sin internet; al adoptar la paginación por cursor y optimizar el procesamiento local, reduje la carga y sincronización del módulo de 10–12 a 4–5 minutos.",
                "Estructuré la app en capas data/domain/presentation, lo que permite probar la lógica de sincronización sin la UI; autenticación con JWT y renovación automática de tokens.",
                "Creé una librería de componentes reutilizables usada en 40+ pantallas, eliminando implementaciones redundantes.",
                "Implementé un rol de soporte con acceso a logs desde el dispositivo, para diagnosticar problemas del cliente sin acceso al servidor.",
              ],
            },
            {
              title: "Infraestructura y trainee",
              achievements: [
                "Gestioné despliegues a producción en IIS y coordiné los builds de lanzamiento móvil, manteniendo consistencia de versiones entre desarrollo y QA.",
                "Como Trainee, desarrollé 10–15 interfaces de reportes financieros (WinForms/C#), optimicé consultas LINQ con proyecciones y normalicé esquemas de SQL Server a tercera forma normal.",
              ],
            },
          ],
        },
        {
          company: "OmniTEK Dev",
          logo: "/images/companies/omnitek.jpg",
          timeframe: "feb. 2023 – dic. 2023",
          role: "Desarrollador Web",
          sections: [
            {
              title: "Full-Stack y DevOps",
              achievements: [
                "Desarrollé 30+ endpoints REST con Node.js y Express para proyectos de clientes, incluyendo un Sistema de Gestión de Almacenes (WMS).",
                "Construí un microservicio de scraping aislado para rastrear envíos de Estafeta en tiempo real (sin API pública), desacoplado del sistema principal.",
                "Desarrollé landing pages y una librería de componentes reutilizable (React, Remix, Tailwind, Atomic Design) adoptada en varios proyectos; al traducir mockups de Figma a componentes, reduje el tiempo de diseño a código de días a horas.",
                "Implementé un pipeline CI/CD con GitHub Actions, Docker Compose, Nginx (reverse proxy) y GHCR, desplegando automáticamente en un VPS Linux con entornos reproducibles.",
              ],
            },
          ],
        },
      ],
    },
    technical: { ...en.about.technical, title: "Habilidades técnicas" },
  },
  blog: {
    path: "/build-learn",
    label: "Aprende & Construye",
    title: "Aprende & Construye",
    description: "Cosas que estoy construyendo, explorando y aprendiendo como Full Stack Developer.",
    intro: "Cosas que construyo para entender de verdad cómo funciona cada pieza.",
    labels: { backLink: "Aprende & Construye", recentPosts: "Publicaciones recientes" },
  },
  work: {
    labels: {
      behindTheBuild: "Detrás del proyecto",
      viewProject: "Ver proyecto",
      backToProjects: "Proyectos",
      selectedWork: "Proyectos destacados",
      readCaseStudy: "Ver caso de estudio",
    },
  },
};
