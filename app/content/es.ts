import { en } from "./en";
import type { Content } from "./types";

// Fields not overridden here were never translated in the old site and stay in English verbatim.
export const es: Content = {
  ...en,
  person: { ...en.person, role: "Desarrollador Full Stack" },
  home: {
    ...en.home,
    label: "Inicio",
    headline: ["Desarrollando backends", "confiables y creando", "experiencias fluidas en frontend."],
    subline: [
      "Desarrollador Full Stack en Ensenada",
      "Creando sistemas confiables y experiencias de usuario intuitivas.",
    ],
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
    intro: { ...en.about.intro, title: "Introducción" },
    work: {
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
                "Definí la arquitectura e implementé más de 100 endpoints RESTful usando ASP.NET Core 8, C# y Entity Framework Core, siguiendo Clean Architecture y principios CQRS.",
                "Implementé paginación basada en cursor en un módulo con más de 5,000 registros y ~20 propiedades, reduciendo el tiempo de carga de 10–12 minutos a 4–5 minutos.",
                "Diseñé y desplegué un sistema estructurado de logging de producción con acceso por rol para el equipo de soporte, permitiendo identificación independiente de errores sin escalar a desarrollo.",
                "Implementé tracing end-to-end de peticiones usando Correlation IDs propagados a través de llamadas encadenadas dentro del mismo flujo, habilitando visibilidad completa de la cadena de la petición en producción.",
                "Implementé una suite de tests unitarios con xUnit y Moq cubriendo casos positivos y negativos en todos los endpoints de la API, detectando regresiones antes de que llegaran a producción.",
              ],
            },
            {
              title: "Android App (Kotlin / Jetpack Compose)",
              achievements: [
                "Construí una aplicación de inventario offline-first que permite a los operadores de almacén seguir trabajando sin conectividad a internet.",
                "Diseñé un mecanismo de sincronización incremental basado en timestamps de modificación, reduciendo significativamente el volumen de datos transferidos.",
                "Implementé Clean Architecture para separar la lógica de negocio de las capas de UI.",
                "Aseguré la autenticación con JWT y refresh automático de tokens.",
                "Diseñé flujos de onboarding intuitivos y construí componentes UI reutilizables, reduciendo código duplicado entre pantallas.",
                "Implementé un rol de soporte con acceso a logs directamente en el dispositivo, permitiendo al equipo de soporte diagnosticar incidencias del lado del cliente sin acceso al servidor.",
              ],
            },
            {
              title: "Infraestructura / Azure",
              achievements: [
                "Investigué y construí una prueba de concepto para migración a Azure (App Service, Blob Storage, Azure SQL), proporcionando al equipo datos reales para soportar la decisión de infraestructura.",
              ],
            },
          ],
        },
        {
          company: "Sistemas de Información Mozart",
          timeframe: "Feb 2024 – May 2024",
          role: "Ingeniero de Software Junior (Prácticas)",
          sections: [
            {
              title: "Módulo de Contabilidad (WinForms / C#)",
              achievements: [
                "Desarrollé entre 10 y 15 interfaces de reportes financieros usando WinForms y C#, implementando lógica de negocio para la generación de reportes sobre datos relacionales.",
                "Optimicé consultas LINQ usando proyecciones para seleccionar solo los campos requeridos, eliminando cargas innecesarias de entidades y mejorando la eficiencia de la generación de reportes.",
                "Normalicé esquemas de tablas de SQL Server a tercera forma normal, mejorando la integridad de datos y la eficiencia de consultas sobre registros de movimientos de negocio.",
                "Apliqué principios SOLID en la arquitectura de la capa de acceso a datos, reduciendo cuellos de botella en peticiones a la base de datos.",
              ],
            },
          ],
        },
        {
          company: "OmniTEK Dev",
          timeframe: "Feb 2023 – Dec 2023",
          role: "Desarrollador Web",
          sections: [
            {
              title: "Backend (Node.js / Express)",
              achievements: [
                "Desarrollé más de 30 endpoints REST API usando Node.js y Express, extendiendo un backend existente para soportar nuevas funcionalidades de negocio a través de proyectos de clientes.",
                "Construí un microservicio aislado de scraping para rastreo de envíos en tiempo real con Estafeta ante la inexistencia de una API pública, desacoplándolo del sistema principal para evitar que cambios upstream afectaran al resto de la aplicación.",
              ],
            },
            {
              title: "Frontend / Componentes",
              achievements: [
                "Desarrollé landing pages responsivas con formularios de captura de leads usando React, Remix y Tailwind CSS, aplicando Atomic Design para construir una librería de componentes reutilizables adoptada en múltiples proyectos de clientes.",
                "Traduje mockups de Figma a componentes listos para producción, acortando los ciclos de iteración de diseño a código.",
                "Integré una funcionalidad de suscripción a newsletter consumiendo una API en Node.js, conectando formularios a un servicio externo de email y persistiendo los datos de suscriptores en una base de datos.",
                "Identifiqué y resolví bugs de frontend a través de múltiples entornos de producción, asegurando comportamiento UI consistente entre despliegues.",
              ],
            },
          ],
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
                    "Construí un storefront y panel de administración con Next.js 15 App Router y TypeScript en modo estricto, usando Atomic Design para una librería de componentes reutilizables compartida entre superficies de cliente y admin.",
                    "Implementé estado global de carrito y checkout con Zustand, persistido en localStorage, coordinando flujos de varias etapas (dirección, cotización de envío, pago) sin perder el estado al recargar.",
                    "Integré Stripe Elements para pagos con tarjeta y transferencia SPEI, manejando flujos de retorno por redirect y reconciliando el estado de pago entre múltiples estados no terminales.",
                    "Construí hooks de fetching con SWR para el panel admin (órdenes, inventario, cotizaciones, ventas en tienda), con mutaciones optimistas para una edición responsiva.",
                    "Audité y refactoricé componentes UI para mobile responsiveness en el storefront y el flujo de checkout.",
                  ],
                },
                {
                  title: "Backend (Next.js / Prisma / PostgreSQL)",
                  achievements: [
                    "Diseñé e implementé más de 50 rutas API repartidas entre catálogo, carrito, órdenes, cotizaciones, inventario y admin, siguiendo Clean Architecture con inyección de dependencias entre capas.",
                    "Modelé el esquema core de PostgreSQL en Prisma cubriendo productos, órdenes, cotizaciones, materia prima y órdenes de proveedor, con capas de mapper que aislan los detalles de persistencia de la lógica de negocio.",
                    "Construí la integración de Stripe PaymentIntents y webhooks para pagos con tarjeta y transferencia SPEI, incluyendo transiciones de estado de orden idempotentes disparadas por eventos de webhook.",
                    "Integré la API de Envia para generación de guías y rastreo, y Cloudinary para almacenamiento de assets.",
                    "Implementé blacklisting de tokens JWT y rate limiting en middleware, ambos respaldados por Redis, para endurecer la capa de autenticación de NextAuth.js.",
                    "Instrumenté los caminos críticos de checkout y creación de órdenes con Sentry para tracking de errores en producción, cerrando un hueco previo de fallos silenciosos en el procesamiento de pagos.",
                    "Escribí tests unitarios y de integración con Vitest para los servicios de casos de uso, garantizando cero sobreventa de stock bajo carga concurrente en checkout.",
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
                    "Definí la arquitectura de un backend con Clean Architecture y CQRS usando ASP.NET Core 9, C#, EF Core y MediatR, exponiendo más de 50 endpoints a través de Minimal APIs con Carter y manejo de errores estilo railway-oriented (ErrorOr<T>) en lugar de excepciones para la lógica de negocio.",
                    "Diseñé un motor de evaluación de metas clínicas que implementa los umbrales de ADA Standards of Care con overrides por médico y por paciente, ramificaciones específicas de embarazo y snapshots históricos inmutables que nunca se recalculan retroactivamente.",
                    "Implementé autenticación JWT con cookies HttpOnly/Secure, rotación de refresh tokens, respuestas de login anti-enumeración y lockout por intentos fallidos, además de verificación de identidad médica contra el registro oficial de licencias de México.",
                    "Construí un sistema de trazabilidad de peticiones basado en Correlation IDs usando Serilog con sink a PostgreSQL, con acceso a logs restringido por rol para soporte, aplicando una política estricta de cero PHI en logs en todo el código.",
                    "Respaldé la API con más de 95 tests automatizados entre suites unitarias y de integración usando xUnit, NSubstitute y Testcontainers para validación con base de datos real.",
                    "Insights clínicos potenciados por IA vía integración con API de terceros, pendiente de implementación.",
                  ],
                },
                {
                  title: "Frontend (Next.js / React)",
                  achievements: [
                    "Construí la aplicación web de paciente y médico con Next.js 16 App Router y React 19, usando arquitectura por feature folders con route groups por rol y una capa de API client tipada.",
                    "Implementé un wizard multi-paso para registro de glucosa con React Hook Form y validación con Zod, diseñado mobile-first ya que los pacientes registran datos principalmente desde su teléfono.",
                    "Usé TanStack Query para server-state y Zustand para session state, con un interceptor que convierte automáticamente un 401 en refresh de token y retry para mantener transparentes las sesiones JWT basadas en cookies.",
                    "Construí visualización de glucosa y signos vitales con Recharts y exportación a PDF de expedientes de paciente para consulta médica.",
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    studies: { ...en.about.studies, title: "Formación" },
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
