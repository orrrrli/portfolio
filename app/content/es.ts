import { en } from "./en";
import type { Content, StoryRow } from "./types";

/** Story row still to be written: renders as an amber placeholder. */
const todo = (label: string): StoryRow => ({ label, text: "[Por escribir]", pending: true });

// Fields not overridden here were never translated in the old site and stay in English verbatim.
export const es: Content = {
  ...en,
  person: { ...en.person, role: "Software Engineer enfocado en IA" },
  home: {
    ...en.home,
    label: "Inicio",
    image: "/images/og/home-es.png",
    headline: ["Desarrollando backends", "confiables y creando", "experiencias fluidas en frontend."],
    subline: [
      "Software Engineer enfocado en IA, en Ensenada",
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
          { command: "whoami", output: "Software Engineer enfocado en IA" },
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
    technical: {
      title: "Habilidades técnicas",
      skills: [
        {
          ...en.about.technical.skills[0],
          bullets: [
            {
              topic: "Asistente LLM",
              tags: ["Tool calling"],
              summary:
                "Entregué features de un asistente LLM que arma un juego desde una conversación de chat usando 13 tools, responde preguntas con fotos y recuerda a los usuarios sus próximos juegos.",
              story: [
                todo("PROBLEMA"),
                todo("DECISIÓN"),
                todo("CÓMO"),
                { label: "RESULTADO", text: "67 evals contra el modelo en vivo: 92% de éxito en tool calls, mediana menor a 500 ms por tool call y $0.03 USD de costo promedio por eval." },
              ],
            },
            {
              topic: "Streaming y límites",
              tags: ["Streaming"],
              summary:
                "Hice que las respuestas lleguen una a la vez con un botón para detenerlas, y agregué un límite de preguntas y un guard ante fallas del API.",
              story: [
                todo("PROBLEMA"),
                todo("DECISIÓN"),
                todo("CÓMO"),
                { label: "RESULTADO", text: "Cada pregunta se cobra una sola vez." },
              ],
            },
            {
              topic: "Filtro de imágenes con visión",
              tags: ["Vision models"],
              summary:
                "Integré un modelo de visión (Cloudflare Clef vía OpenRouter) que rechaza imágenes borrosas o que no corresponden, y pide una nueva cuando la confianza baja del umbral.",
              story: [
                { label: "PROBLEMA", text: "El filtro rechazaba imágenes nítidas como borrosas." },
                todo("DECISIÓN"),
                { label: "CÓMO", text: "Ajusté los umbrales con llamadas reales." },
                { label: "RESULTADO", text: "95.6% de precisión en la clasificación." },
              ],
            },
          ],
        },
        {
          ...en.about.technical.skills[1],
          bullets: [
            {
              topic: "CQRS",
              tags: ["C# / .NET"],
              summary:
                "Diseñé una interfaz Command compartida para que cada Command inserte sus datos por un mismo camino, en vez de repetir esa lógica en cada handler.",
              story: [
                {
                  label: "PROBLEMA",
                  text: "Cada handler de Command tenía que declarar a mano la misma lógica de inserción, repetida por todo el código.",
                },
                {
                  label: "DECISIÓN",
                  text: "Definí una interfaz Command que implementa cada Command, así la inserción vive en un solo lugar y no en cada handler.",
                },
                { label: "CÓMO", text: "[¿Pipeline behavior, handler genérico o clase base? Una o dos oraciones.]", pending: true },
                { label: "RESULTADO", text: "[Qué cambió, solo lo que sea cierto.]", pending: true },
              ],
            },
            {
              topic: "Clean Architecture",
              tags: ["C# / .NET"],
              summary:
                "Dividí la API en Domain, Application, Infrastructure, API y Contracts, con las dependencias apuntando hacia adentro para que las reglas de negocio nunca lleguen a los route handlers.",
              story: [
                {
                  label: "PROBLEMA",
                  text: "El brief evaluaba diseño de APIs REST y Clean Architecture, así que lo que se entregaba eran las fronteras entre capas, no las features.",
                },
                {
                  label: "DECISIÓN",
                  text: "Domain es un proyecto de C# sin dependencias de NuGet. API depende de Application e Infrastructure, nunca de Domain. Contracts tiene los únicos DTOs que viajan por la red.",
                },
                todo("CÓMO"),
                todo("RESULTADO"),
              ],
            },
            {
              topic: "Módulos Carter",
              tags: ["C# / .NET"],
              summary:
                "Armé la API con módulos de Carter sobre Minimal APIs: un módulo por área, cada endpoint con su handler, validator y contrato, sin controllers.",
              story: [
                todo("PROBLEMA"),
                {
                  label: "DECISIÓN",
                  text: "Cada área es un CarterModule que registra sus rutas en un route group con RequireAuthorization().",
                },
                {
                  label: "CÓMO",
                  text: "Cada handler es un método estático que manda un command o query por MediatR y convierte el resultado en response.",
                },
                todo("RESULTADO"),
              ],
            },
            {
              topic: "Pipeline de validación",
              tags: ["C# / .NET"],
              summary: "Corrí FluentValidation como pipeline behavior de MediatR, así los handlers nunca llaman a los validators.",
              story: [
                todo("PROBLEMA"),
                {
                  label: "DECISIÓN",
                  text: "La validación corre como pipeline behavior de MediatR antes de cada handler, no dentro de los handlers.",
                },
                todo("CÓMO"),
                todo("RESULTADO"),
              ],
            },
            {
              topic: "Seguridad de la API",
              tags: ["C# / .NET"],
              summary:
                "Protegí la API con JWT bearer auth, hashing con BCrypt, ErrorOr para responder errores con el mismo formato y un rate limiter de ventana fija (60 req/min por IP).",
              story: [
                todo("PROBLEMA"),
                todo("DECISIÓN"),
                {
                  label: "CÓMO",
                  text: "La emisión de JWT y el hashing con BCrypt viven en Infrastructure, detrás de interfaces declaradas en Application. Cada endpoint devuelve resultados ErrorOr, así todos los errores tienen el mismo formato.",
                },
                todo("RESULTADO"),
              ],
            },
            {
              topic: "Acceso a datos",
              tags: ["C# / .NET", "PostgreSQL"],
              summary:
                "Limité qué tareas ve cada usuario en el query del handler de lectura: solo las que creó o le asignaron. No es un filtro de UI.",
              story: [
                todo("PROBLEMA"),
                {
                  label: "DECISIÓN",
                  text: "El filtro vive en el query del handler de lectura, no en la UI, así la regla aplica a cualquier cliente que llame a la API.",
                },
                todo("CÓMO"),
                todo("RESULTADO"),
              ],
            },
            {
              topic: "API REST",
              tags: ["C# / .NET"],
              summary:
                "Entregué más de 100 endpoints REST con ASP.NET Core 8 y Clean Architecture, en producción en todos los departamentos del hospital.",
              story: [todo("PROBLEMA"), todo("DECISIÓN"), todo("CÓMO"), todo("RESULTADO")],
            },
            {
              topic: "Logging por rol",
              tags: ["C# / .NET"],
              summary:
                "Construí un sistema de logging por rol que soporte usa a diario, y con eso dejaron de escalar errores al equipo de desarrollo.",
              story: [
                todo("PROBLEMA"),
                todo("DECISIÓN"),
                todo("CÓMO"),
                { label: "RESULTADO", text: "Soporte resuelve los errores por su cuenta todos los días, sin escalarlos a desarrollo." },
              ],
            },
            {
              topic: "Contratos de API",
              tags: ["C# / .NET"],
              summary:
                "Acordé contratos de API con el equipo móvil (Kotlin/Jetpack Compose), así los dos equipos avanzaron en paralelo.",
              story: [
                todo("PROBLEMA"),
                todo("DECISIÓN"),
                todo("CÓMO"),
                { label: "RESULTADO", text: "Backend y móvil avanzaron en paralelo, con menos retrasos de integración." },
              ],
            },
            {
              topic: "Paginación por cursor",
              tags: ["C# / .NET"],
              summary:
                "Implementé paginación por cursor en un módulo con 5,000+ registros y 20+ propiedades.",
              story: [
                todo("PROBLEMA"),
                todo("DECISIÓN"),
                todo("CÓMO"),
                { label: "RESULTADO", text: "El tiempo de consulta por página bajó de 1–2 s a 500 ms en promedio." },
              ],
            },
            {
              topic: "Pruebas unitarias",
              tags: ["C# / .NET"],
              summary:
                "Escribí una suite de pruebas con xUnit y Moq que cubre las rutas positivas y negativas de todos los endpoints.",
              story: [
                todo("PROBLEMA"),
                todo("DECISIÓN"),
                todo("CÓMO"),
                { label: "RESULTADO", text: "Las regresiones se detectaban antes de llegar a producción." },
              ],
            },
            {
              topic: "Despliegues a producción",
              tags: ["C# / .NET"],
              summary:
                "Gestioné los despliegues a producción en IIS y coordiné los builds de lanzamiento móvil, con versiones consistentes entre desarrollo y QA.",
              story: [
                todo("PROBLEMA"),
                todo("DECISIÓN"),
                todo("CÓMO"),
                todo("RESULTADO"),
              ],
            },
            {
              topic: "Reportes financieros",
              tags: ["C# / .NET"],
              summary:
                "Como Trainee, desarrollé 10–15 interfaces de reportes financieros en WinForms/C#, optimicé consultas LINQ con proyecciones y normalicé esquemas de SQL Server a tercera forma normal.",
              story: [
                todo("PROBLEMA"),
                todo("DECISIÓN"),
                todo("CÓMO"),
                todo("RESULTADO"),
              ],
            },
            {
              topic: "Scraper de rastreo",
              tags: ["C# / .NET"],
              summary:
                "Construí una API de rastreo para Estafeta, que no tiene una pública: repite el request XHR del propio sitio y convierte a JSON el HTML que devuelve.",
              story: [
                { label: "PROBLEMA", text: "Estafeta no tiene API pública de rastreo. Su sitio solo devuelve HTML." },
                {
                  label: "DECISIÓN",
                  text: "Dejar el scraping detrás de una interfaz IShipmentScraperService en Infrastructure, así el resto de la app con Clean Architecture nunca ve HTML.",
                },
                {
                  label: "CÓMO",
                  text: "Un GET a la página de búsqueda deja las cookies de sesión, y luego un POST al endpoint interno del historial con X-Requested-With y Referer devuelve un fragmento de HTML que AngleSharp parsea con selectores CSS. Los resultados se guardan en cache en memoria 10 minutos, y FluentValidation valida el número de guía antes.",
                },
                todo("RESULTADO"),
              ],
            },
          ],
        },
        {
          ...en.about.technical.skills[2],
          bullets: [
            {
              topic: "Librería de componentes",
              tags: ["React"],
              summary:
                "Construí una librería de componentes reutilizable con React, Remix, Tailwind y Atomic Design, que se usó en varios proyectos de clientes.",
              story: [
                todo("PROBLEMA"),
                {
                  label: "DECISIÓN",
                  text: "Organicé los componentes con Atomic Design y pasé los mockups de Figma directo a esos componentes.",
                },
                todo("CÓMO"),
                { label: "RESULTADO", text: "Pasar de diseño a código bajó de días a horas, y la librería se usó en varios proyectos." },
              ],
            },
            {
              topic: "Cliente de API tipado",
              tags: ["React", "TypeScript"],
              summary:
                "Generé tipos y un cliente fetch tipado desde el spec OpenAPI del backend con openapi-ts, así el frontend no se puede desalinear del contrato de la API.",
              story: [
                todo("PROBLEMA"),
                {
                  label: "DECISIÓN",
                  text: "Los dos servicios no comparten nada en runtime. El spec OpenAPI es lo único que los conecta.",
                },
                todo("CÓMO"),
                todo("RESULTADO"),
              ],
            },
            {
              topic: "Validación en las dos capas",
              tags: ["React", "TypeScript"],
              summary:
                "Validé el input con Zod en el frontend y FluentValidation en el backend, con la misma forma gracias a los tipos generados.",
              story: [todo("PROBLEMA"), todo("DECISIÓN"), todo("CÓMO"), todo("RESULTADO")],
            },
            {
              topic: "Estrategia de rendering",
              tags: ["Next.js"],
              summary:
                "Elegí el rendering por ruta: SSG para páginas estáticas, ISR para el catálogo, SSR para producto, client-side para carrito y checkout, sin cache para admin.",
              story: [
                { label: "PROBLEMA", text: "No todas las rutas necesitan el mismo nivel de frescura." },
                {
                  label: "DECISIÓN",
                  text: "Cada ruta responde dos preguntas: ¿el contenido cambia por usuario? y ¿qué tan seguido? La respuesta decide entre SSG, ISR, SSR, client-side o sin cache.",
                },
                todo("CÓMO"),
                todo("RESULTADO"),
              ],
            },
            {
              topic: "Invalidación de cache",
              tags: ["Next.js"],
              summary:
                "Serví el catálogo desde el Full Route Cache sin tocar la base de datos, y lo invalido con revalidateTag('catalog') en cada pago o cambio de stock.",
              story: [
                todo("PROBLEMA"),
                todo("DECISIÓN"),
                {
                  label: "CÓMO",
                  text: "En el build, /catalog consulta Postgres una vez y llena el Data Cache (3600s) y el Full Route Cache (600s). revalidateTag los marca como stale y el siguiente request vuelve a consultar y renderizar.",
                },
                { label: "RESULTADO", text: "Los requests normales al catálogo no tocan la base de datos." },
              ],
            },
            {
              topic: "Checkout con Stripe",
              tags: ["Next.js"],
              summary:
                "Construí un checkout de varios pasos con Stripe donde solo el webhook confirma el pago, así el inventario nunca se libera con una transacción sin confirmar.",
              story: [
                todo("PROBLEMA"),
                todo("DECISIÓN"),
                { label: "CÓMO", text: "Pagos con tarjeta y SPEI, con transiciones de estado del pedido idempotentes, así un checkout concurrente nunca sobrevende el stock." },
                { label: "RESULTADO", text: "La tienda procesa más de 200 pedidos al mes en producción." },
              ],
            },
            {
              topic: "Reserva de inventario",
              tags: ["Next.js"],
              summary:
                "Reservé el stock al crear el pedido y corrí un job que expira los pedidos sin pagar cada 5 minutos, así un carrito abandonado nunca bloquea inventario.",
              story: [
                { label: "PROBLEMA", text: "Un carrito abandonado podía apartar stock sin límite y bloquear a compradores reales." },
                {
                  label: "DECISIÓN",
                  text: "Reservar el inventario al crear el pedido y regresarlo si se cancela, sin conciliación manual.",
                },
                todo("CÓMO"),
                todo("RESULTADO"),
              ],
            },
            {
              topic: "Panel de admin",
              tags: ["Next.js"],
              summary:
                "Diseñé el panel de admin según cómo trabaja el equipo de la tienda: subir productos, pedidos e inventario, sin necesitar a un desarrollador.",
              story: [
                { label: "PROBLEMA", text: "Un dashboard genérico asume un flujo de trabajo que el equipo de la tienda no tenía." },
                todo("DECISIÓN"),
                todo("CÓMO"),
                todo("RESULTADO"),
              ],
            },
            {
              topic: "Rutas de API",
              tags: ["Next.js", "TypeScript"],
              summary:
                "Construí el storefront y el panel de administración en Next.js 15 con TypeScript strict y 60+ rutas de API sobre PostgreSQL y Prisma.",
              story: [
                todo("PROBLEMA"),
                todo("DECISIÓN"),
                todo("CÓMO"),
                todo("RESULTADO"),
              ],
            },
            {
              topic: "Autenticación reforzada",
              tags: ["Next.js"],
              summary:
                "Reforcé la autenticación con blacklisting de JWT en Redis.",
              story: [
                todo("PROBLEMA"),
                todo("DECISIÓN"),
                todo("CÓMO"),
                todo("RESULTADO"),
              ],
            },
            {
              topic: "Seguimiento de errores",
              tags: ["Next.js"],
              summary:
                "Instrumenté el checkout con Sentry para seguir los errores en producción.",
              story: [
                todo("PROBLEMA"),
                todo("DECISIÓN"),
                todo("CÓMO"),
                todo("RESULTADO"),
              ],
            },
          ],
        },
        {
          ...en.about.technical.skills[3],
          bullets: [
            {
              topic: "Máquina de estados",
              tags: ["Kotlin", "Spring Boot"],
              summary:
                "Construí una máquina de estados para juegos de dinero real, orquestada con tareas programadas y acciones automáticas como expiraciones y recordatorios.",
              story: [
                todo("PROBLEMA"),
                todo("DECISIÓN"),
                todo("CÓMO"),
                todo("RESULTADO"),
              ],
            },
            {
              topic: "Cobros y pagos",
              tags: ["Kotlin", "Spring Boot", "SwiftUI"],
              summary:
                "Integré cobros y pagos con Lucra y un check-in por geolocalización, entre la API en Kotlin y la app en SwiftUI.",
              story: [
                todo("PROBLEMA"),
                todo("DECISIÓN"),
                todo("CÓMO"),
                todo("RESULTADO"),
              ],
            },
            {
              topic: "Protección de movimientos de dinero",
              tags: ["Kotlin", "Spring Boot"],
              summary:
                "Protegí los movimientos de dinero con validación de estado en el servidor y optimistic locking contra escrituras concurrentes.",
              story: [
                todo("PROBLEMA"),
                todo("DECISIÓN"),
                todo("CÓMO"),
                { label: "RESULTADO", text: "Validado de punta a punta en 118 cuotas de entrada sin cobros duplicados." },
              ],
            },
          ],
        },
        {
          ...en.about.technical.skills[4],
          bullets: [
            {
              topic: "Sincronización offline-first",
              tags: ["Kotlin", "Offline-first"],
              summary:
                "Construí una app de inventario offline-first para que los operadores de almacén sigan trabajando sin internet.",
              story: [
                todo("PROBLEMA"),
                todo("DECISIÓN"),
                { label: "CÓMO", text: "Adopté la paginación por cursor del backend y optimicé el procesamiento local." },
                { label: "RESULTADO", text: "La carga y sincronización del módulo bajó de 10–12 a 4–5 minutos." },
              ],
            },
            {
              topic: "Arquitectura en capas",
              tags: ["Kotlin"],
              summary:
                "Estructuré la app en capas data, domain y presentation, con autenticación JWT y renovación automática de tokens.",
              story: [
                todo("PROBLEMA"),
                todo("DECISIÓN"),
                todo("CÓMO"),
                { label: "RESULTADO", text: "La lógica de sincronización se puede probar sin la UI." },
              ],
            },
            {
              topic: "Librería de componentes",
              tags: ["Jetpack Compose"],
              summary:
                "Creé una librería de componentes reutilizables usada en 40+ pantallas, eliminando implementaciones redundantes.",
              story: [
                todo("PROBLEMA"),
                todo("DECISIÓN"),
                todo("CÓMO"),
                todo("RESULTADO"),
              ],
            },
            {
              topic: "Rol de soporte",
              tags: ["Kotlin"],
              summary:
                "Implementé un rol de soporte con acceso a logs desde el dispositivo, para diagnosticar problemas del cliente sin acceso al servidor.",
              story: [
                todo("PROBLEMA"),
                todo("DECISIÓN"),
                todo("CÓMO"),
                todo("RESULTADO"),
              ],
            },
          ],
        },
        {
          ...en.about.technical.skills[5],
          bullets: [
            {
              topic: "Endpoints REST",
              tags: ["Node.js"],
              summary:
                "Desarrollé 30+ endpoints REST con Node.js y Express para proyectos de clientes, incluyendo un Sistema de Gestión de Almacenes (WMS).",
              story: [
                todo("PROBLEMA"),
                todo("DECISIÓN"),
                todo("CÓMO"),
                todo("RESULTADO"),
              ],
            },
            {
              topic: "Microservicio de rastreo",
              tags: ["Node.js"],
              summary:
                "Construí un microservicio de scraping aislado para rastrear envíos de Estafeta en tiempo real (sin API pública), desacoplado del sistema principal.",
              story: [
                { label: "PROBLEMA", text: "Estafeta no tiene API pública de rastreo." },
                { label: "DECISIÓN", text: "Correr el scraper como un servicio aparte, desacoplado del sistema principal." },
                todo("CÓMO"),
                todo("RESULTADO"),
              ],
            },
            {
              topic: "Mapa de geofence en vivo",
              tags: ["Python"],
              summary:
                "Contribuí a un mapa en vivo que muestra la ubicación simulada del dispositivo contra el radio de una geofence y sus anillos de tolerancia.",
              story: [
                todo("PROBLEMA"),
                todo("DECISIÓN"),
                todo("CÓMO"),
                todo("RESULTADO"),
              ],
            },
            {
              topic: "Verificación de invariants de la API",
              tags: ["Python"],
              summary:
                "Contribuí a un script que verifica 4 invariants de la API: que no se filtren datos por el orden del ranking, respuestas idénticas byte a byte al repetir, perfiles privados enmascarados y búsqueda estable.",
              story: [
                todo("PROBLEMA"),
                todo("DECISIÓN"),
                todo("CÓMO"),
                { label: "RESULTADO", text: "Todas las verificaciones pasaron con datos de dev." },
              ],
            },
            {
              topic: "Videos de evidencia",
              tags: ["Python"],
              summary:
                "Contribuí a herramientas que convierten las grabaciones del simulador en videos de evidencia con tiempos.",
              story: [
                todo("PROBLEMA"),
                todo("DECISIÓN"),
                todo("CÓMO"),
                todo("RESULTADO"),
              ],
            },
            {
              topic: "Datos de prueba y tráfico",
              tags: ["Python"],
              summary:
                "Contribuí a scripts que generan datos de prueba y simulan escenarios de tráfico realistas contra las aplicaciones.",
              story: [
                todo("PROBLEMA"),
                todo("DECISIÓN"),
                todo("CÓMO"),
                todo("RESULTADO"),
              ],
            },
          ],
        },
        {
          ...en.about.technical.skills[6],
          bullets: [
            {
              topic: "Docker Compose",
              tags: ["Docker"],
              summary:
                "Dejé docker compose up como único paso de setup: API, frontend y Postgres levantan juntos con health checks, orden de dependencias y migraciones al arrancar.",
              story: [
                todo("PROBLEMA"),
                todo("DECISIÓN"),
                {
                  label: "CÓMO",
                  text: "La imagen de la API corre las migraciones al arrancar y expone GET /health para el health check de compose. El frontend es un build de Vite servido por un servidor estático pequeño.",
                },
                {
                  label: "RESULTADO",
                  text: "Pasar de un checkout nuevo a la app corriendo en una URL pública toma dos comandos: git clone y docker compose up.",
                },
              ],
            },
            {
              topic: "CI/CD",
              tags: ["Docker", "GitHub Actions"],
              summary:
                "GitHub Actions corre dotnet test y npm test en cada push. Al hacer merge a main, workflows filtrados por path construyen las imágenes, las suben a GHCR y el VPS actualiza el stack.",
              story: [
                todo("PROBLEMA"),
                todo("DECISIÓN"),
                todo("CÓMO"),
                { label: "RESULTADO", text: "Cada merge a main hace deploy sin pasos manuales." },
              ],
            },
            {
              topic: "Ruta de red",
              tags: ["Nginx"],
              summary:
                "Pasé el tráfico por Cloudflare (DNS, CDN, WAF, SSL) a un reverse proxy de Nginx que manda / al contenedor del frontend y /api/* al del backend.",
              story: [
                todo("PROBLEMA"),
                todo("DECISIÓN"),
                {
                  label: "CÓMO",
                  text: "Nginx manda / al contenedor del frontend (host 3009 a 80) y /api/* al de la API (host 8081 a 8080). Postgres corre en el host y la API llega a él por host.docker.internal.",
                },
                todo("RESULTADO"),
              ],
            },
            {
              topic: "Imágenes y correo",
              summary:
                "Pasé el almacenamiento y la entrega de imágenes al CDN de Cloudinary y automaticé los correos de pedido y envío con Resend.",
              story: [
                { label: "PROBLEMA", text: "Los clientes tenían que escribirle al equipo para saber el estado de su pedido." },
                todo("DECISIÓN"),
                todo("CÓMO"),
                todo("RESULTADO"),
              ],
            },
            {
              topic: "CDN de imágenes",
              tags: ["GCP"],
              summary:
                "Construí la entrega de imágenes con Google Cloud Storage e imgproxy en Cloud Run detrás de Cloud CDN.",
              story: [
                todo("PROBLEMA"),
                todo("DECISIÓN"),
                todo("CÓMO"),
                { label: "RESULTADO", text: "Las imágenes llegan 10 veces más ligeras que los originales (45 KB contra 450 KB en promedio) y el 94% de los bytes sale del cache." },
              ],
            },
            {
              topic: "Seguridad de storage",
              tags: ["GCP", "Terraform"],
              summary:
                "Detecté y corregí una exposición que permitía listar los buckets de contenido y descargar fotos privadas, restringiendo el acceso con Terraform.",
              story: [
                todo("PROBLEMA"),
                { label: "DECISIÓN", text: "Clasifiqué cada archivo como público o privado." },
                todo("CÓMO"),
                { label: "RESULTADO", text: "El contenido privado ya no se puede descubrir ni descargar en masa." },
              ],
            },
            {
              topic: "Conexión en tiempo real",
              tags: ["Kubernetes"],
              summary:
                "Corregí una conexión en tiempo real que se cortaba cada 30 s, dándole a sus rutas de streaming un servicio de Kubernetes dedicado con un timeout más largo en el load balancer.",
              story: [
                todo("PROBLEMA"),
                todo("DECISIÓN"),
                todo("CÓMO"),
                { label: "RESULTADO", text: "Las reconexiones bajaron 92%." },
              ],
            },
            {
              topic: "CI/CD a un VPS",
              tags: ["Docker", "GitHub Actions", "Nginx"],
              summary:
                "Implementé un pipeline CI/CD con GitHub Actions, Docker Compose, Nginx y GHCR, desplegando automáticamente en un VPS Linux con entornos reproducibles.",
              story: [
                todo("PROBLEMA"),
                todo("DECISIÓN"),
                todo("CÓMO"),
                todo("RESULTADO"),
              ],
            },
          ],
        },
      ],
    },
  },
  blog: {
    path: "/build-learn",
    label: "Aprende & Construye",
    title: "Aprende & Construye",
    description: "Cosas que estoy construyendo, explorando y aprendiendo como Software Engineer enfocado en IA.",
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
