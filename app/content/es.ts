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
    stackTip: "Ver trabajo con",
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
                "Flujos de juegos con dinero real: construí el ciclo de vida de las invitaciones, con expiraciones y recordatorios programados, y un check-in en el lugar que decide el servidor a partir de la ubicación del teléfono (API en Kotlin/Spring Boot + SwiftUI). Protegí los movimientos de dinero con validación de estado en el servidor y optimistic locking contra escrituras concurrentes, para que una escritura vieja o una cancelación mal puesta nunca deje atorada la cuota de entrada de un jugador.",
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
                "Implementé paginación por cursor en un módulo con 15,000+ registros y 100+ propiedades, reduciendo el tiempo de consulta por página de 1–2 s a 500 ms en promedio.",
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
                "Entregué features de un asistente LLM que completa flujos de la app a partir de una conversación de chat. Usa 13 tools, responde preguntas con fotos y le recuerda al usuario lo que tiene agendado.",
              story: [
                { label: "PROBLEMA", text: "La app tiene muchos flujos y muchos usuarios no sabían cómo completarlos. Se atoraban a medio camino o ni los empezaban. La idea fue que el usuario le dijera al asistente qué quería hacer y el asistente hiciera el flujo por él. Meter un LLM traía tres riesgos. Podía inventar datos, podía ver información de otros usuarios y el costo podía crecer sin control." },
                { label: "DECISIÓN", text: "Desde el inicio el modelo solo propone y el servidor valida. El servidor le pasa a cada tool el usuario de la sesión, sacado del JWT. La tool nunca le pregunta al modelo de quién son los datos. Así, aunque alguien intente un prompt injection para pedir datos de otro usuario, el modelo no tiene forma de hacerlo. Si el modelo sugiere un flujo, ese ID tiene que haber salido de una tool en la misma respuesta. Si no, el servidor lo rechaza, y eso evita IDs inventados." },
                { label: "CÓMO", text: "Armé el loop de tool calling en Kotlin con Spring Boot. Cada una de las 13 tools revisa permisos por su cuenta. Si pides algo de un grupo al que no perteneces, la tool responde NOT_FOUND. El costo lo controlan un tope diario de preguntas por usuario, un límite al tamaño del request y un deadline por respuesta.\n\nLos nombres que escriben los usuarios entran al prompt marcados como datos, no como instrucciones. Analytics guarda el resultado y la latencia, nunca la foto ni el texto. En iOS, con SwiftUI, agregué chips que llevan directo al flujo y un recordatorio en Home." },
                { label: "RESULTADO", text: "Corrí 67 evals contra el modelo en vivo. El 92% de los tool calls salieron bien, con una mediana de menos de 500 ms por tool call y un costo promedio de $0.03 USD por eval." },
              ],
            },
            {
              topic: "Reglas en contexto vs. tool",
              tags: ["Tool calling", "Context engineering"],
              summary:
                "Medí si convenía sacar las reglas de los flujos del prompt y mandarlas con una tool. Decidí dejarlas en el contexto.",
              story: [
                { label: "PROBLEMA", text: "El asistente carga en cada respuesta las reglas de 12 flujos, unos 9.1k caracteres del prompt estático. Todo lo que entra ahí se paga en cada respuesta, aunque la pregunta no tenga nada que ver con reglas. Además el prompt estático ya estaba cerca de su presupuesto." },
                { label: "DECISIÓN", text: "Evalué mandar las reglas con una tool que el modelo llamara solo cuando hicieran falta. Descarté una tool por juego porque cada definición de tool viaja en todos los requests y se comía el ahorro. El ahorro era de ~12% (~$3 por cada 1,000 respuestas). Pero con la tool, que el modelo tuviera las reglas de la app dependía de que decidiera pedirlas. Si no la llamaba, contestaba de memoria con reglas genéricas que no son las de la app. Y si la llamaba, una pregunta de reglas hecha fuera de un {{flujo activo|Una pantalla de la que el asistente recibe contexto, como el Lobby de un juego.}} pasaba a necesitar 2 llamadas al modelo, una para pedir la tool y otra para contestar, con ~5 s más de latencia. Dentro de un flujo activo, las reglas de ese flujo se podían agregar al prompt sin llamar a la tool. Decidí dejar las reglas en el contexto." },
                { label: "CÓMO", text: "Saqué el costo real por respuesta de los mensajes guardados del asistente, con los tokens y el costo que reporta OpenRouter. Medí cada sección de reglas por separado y separé lo que tenía que quedarse fijo de lo que se podía mover. Las reglas que comparten todos los flujos y la guía que usa el asistente para recomendar un flujo tenían que quedarse fijas, así que la tool solo podía sacar del prompt 7.3k de los 9.1k caracteres." },
                { label: "RESULTADO", text: "Las preguntas de reglas se siguen contestando en una sola llamada al modelo, sin latencia extra y siempre con las reglas de la app. La tool quedó documentada con su costo, sus riesgos, su diseño y el punto en que conviene construirla." },
              ],
            },
            {
              topic: "Reglas de fotos bajo demanda",
              tags: ["Context engineering"],
              summary:
                "Agregué las reglas para leer fotos sin tocar el prompt estático del asistente.",
              story: [
                { label: "PROBLEMA", text: "El asistente iba a empezar a contestar preguntas con fotos, y para eso necesitaba reglas propias. Por ejemplo, no inventar números que no se leen y no seguir instrucciones escritas dentro de la foto. El prompt estático tiene un presupuesto fijo que un test hace cumplir, y ya iba en ~41,500 de 41,600 caracteres. Las reglas de fotos miden 1,010 caracteres y no cabían." },
                { label: "DECISIÓN", text: "Esas reglas solo sirven cuando el usuario manda una foto. Decidí no meterlas al prompt base y mandarlas solo en las conversaciones que traen una." },
                { label: "CÓMO", text: "Al armar el system prompt, las reglas de fotos se agregan al final del system prompt solo cuando la pregunta o el hilo traen una foto. Van después del contexto dinámico del usuario, así que el prefijo estático no cambia y el prompt cache sigue funcionando en todas las preguntas. En el historial, cada foto anterior queda como el texto [photo] y solo la foto de la última pregunta llega al modelo como imagen. Un test falla si el prefijo estático pasa del tope, para que ningún cambio infle el prompt sin que nadie lo note." },
                { label: "RESULTADO", text: "El feature de fotos salió sin tocar el prefijo estático y sin sacar otro conocimiento del prompt. Las preguntas de texto no pagan los ~250 tokens de estas reglas (~$0.60 menos por cada 1,000 respuestas) y el prompt cache quedó intacto." },
              ],
            },
            {
              topic: "Streaming y límites",
              tags: ["Streaming"],
              summary:
                "Hice que el asistente conteste una pregunta a la vez, con un botón para detenerla, y que cada pregunta se cobre una sola vez aunque la app la reintente o el proveedor falle.",
              story: [
                { label: "PROBLEMA", text: "Si el usuario mandaba otra pregunta mientras el asistente contestaba, la nueva cortaba la respuesta que iba a medias. Bastaba un doble tap o un segundo dispositivo para perder una respuesta. Tampoco había forma de detener una respuesta larga. Y no estaba definido cuándo una pregunta contaba contra el tope diario, ni qué pasaba si la app reintentaba la misma pregunta o el proveedor fallaba." },
                { label: "DECISIÓN", text: "Una pregunta nueva ya no corta la respuesta que está corriendo. El servidor contesta una pregunta a la vez por usuario, y el usuario decide cuándo parar con un botón de Stop. Para el cobro definí una regla. Una pregunta cuenta cuando el usuario ve texto, recibe una respuesta o causa la falla. Si falla por algo nuestro antes de mostrar texto, se le devuelve. Una falla causada por el usuario no se devuelve, porque si no, una sola cuenta podría gastar gratis el tope global de IA y dejar a todos sin asistente." },
                { label: "CÓMO", text: "Cada pregunta lleva un requestId de la app, así que un reintento recibe la respuesta en curso o la ya guardada, sin llamar al modelo ni contar de nuevo. Una pregunta que llega mientras otra corre recibe un 409, y el Stop corta la llamada al proveedor y guarda el texto que ya se había mostrado. En el contador diario, cada pregunta se reserva al entrar y se libera solo si falló por nuestra culpa." },
                { label: "RESULTADO", text: "Cada pregunta se cobra una sola vez, aunque la app la reintente. Un doble tap ya no corta una respuesta, y una falla del proveedor no le cuesta una pregunta al usuario." },
              ],
            },
            {
              topic: "Filtro de imágenes con visión",
              tags: ["Vision models"],
              summary:
                "Integré un modelo de visión (Cloudflare Clef vía OpenRouter) que revisa cada foto antes de guardarla o mandarla al asistente. Rechaza las que son ilegibles o no tienen que ver con la app, y le dice al usuario qué tipo de foto sí puede leer.",
              story: [
                { label: "PROBLEMA", text: "El asistente iba a empezar a recibir fotos, y cada foto que llega al modelo principal cuesta una llamada. Hacía falta un filtro barato antes, que descartara fotos ilegibles o ajenas a la app. En la primera versión, QA reportó que el filtro rechazaba como borrosas fotos nítidas de leaderboards y de equipo, y el usuario quedaba atorado pidiendo otra foto una y otra vez." },
                { label: "DECISIÓN", text: "Medí con llamadas reales sobre la misma foto en distintos niveles de blur. El modelo de visión no distingue bien el blur medio, porque una foto que sí se lee y una que no salían casi con el mismo puntaje. Decidí que el filtro solo rechace el blur extremo y que el modelo principal decida los casos intermedios, con la regla de nunca adivinar un número. Un rechazo falso deja al usuario en un loop de reintentos, y dejar pasar una foto de más cuesta ~$0.003. Cuando QA falló el ticket, en lugar de mover más umbrales busqué por qué cada foto nítida salía como borrosa." },
                { label: "CÓMO", text: "El filtro hace tres preguntas en una sola llamada (tipo de foto, legibilidad y contenido inseguro), y todos los umbrales viven en config. Bajé el umbral de legibilidad de 0.25 a 0.08. Para el fallo de QA encontré dos causas. Sin un provider fijo, 9 de 36 llamadas regresaban HTTP 400 porque el provider no aceptaba imágenes, así que fijé Cloudflare (0 de 44 fallas) y agregué un reintento para 429 y 5xx. Además, los leaderboards salían con poca confianza y caían en la rama de \"borrosa\". Amplié la descripción de la categoría scorecard para que cubriera leaderboards, y su confianza subió de 0.35 a ~0.8 sin tocar umbrales. También separé los mensajes, así que una foto borrosa, una que no tiene que ver con la app, una de equipo y una falla del clasificador ya no se ven igual, y cada mensaje dice qué fotos sí puede leer el asistente." },
                { label: "RESULTADO", text: "Las fotos nítidas ya no se rechazan como borrosas, y una falla del clasificador ya no se confunde con una foto mala. Las llamadas al clasificador bajaron de 9 fallas en 36 a 0 en 44. Lo verifiqué en el simulador con cada tipo de rechazo, con 579 tests en la API y 32 en iOS." },
              ],
            },
          ],
        },
        {
          ...en.about.technical.skills[1],
          bullets: [
            {
              topic: "CQRS",
              tags: ["Architecture"],
              summary:
                "Centralicé el guardado de los Commands en el pipeline de MediatR, así cada Command guarda una sola vez y nunca cuando el handler falla.",
              story: [
                { label: "PROBLEMA", text: "Guardar estaba repartido en 13 repositorios. Cada uno llamaba su propio SaveChangesAsync, así que no había un solo lugar que decidiera cuándo se guarda un Command, ni que evitara guardar cuando el handler regresaba un error." },
                { label: "DECISIÓN", text: "Moví el guardado al pipeline de MediatR, con dos interfaces hermanas que no heredan una de otra. ICommand guarda una sola vez al final y, ante una falla transitoria, reintenta solo la escritura. ITransactionalCommand envuelve todo el handler en una transacción que se reintenta completa, y la dejé solo para los 4 Commands que necesitan ver el resultado de una escritura antes de seguir. Los otros 20 quedaron en ICommand, porque repetir el handler completo reenviaría llamadas externas, como un código de OAuth que solo se puede usar una vez." },
                { label: "CÓMO", text: "Lo hice en fases, con las pruebas en verde en cada una. Primero agregué las interfaces y el behavior sin que nada los usara, después migré los 24 Commands y 28 Queries, y al final quité el SaveChangesAsync de los repositorios. Las pruebas de integración con Testcontainers atraparon dos cosas que las unitarias no veían. El DbContext tenía NoTracking global, así que agregué AsTracking() a cada lectura que alimenta una escritura. Y el reintento automático de EF no acepta transacciones abiertas a mano, así que las moví dentro de su execution strategy." },
                { label: "RESULTADO", text: "Un Command nuevo ya no lleva código de guardado. El handler solo cambia las entidades y el pipeline decide cuándo guardar, así nadie puede olvidar un SaveChangesAsync ni guardar después de un error. Los 13 repositorios quedaron solo con lecturas y cambios, y un reintento por una falla transitoria ya no repite llamadas externas como el login con Google." },
              ],
            },
            {
              topic: "Clean Architecture",
              tags: ["Architecture"],
              summary:
                "Dividí la API en Domain, Application, Infrastructure, API y Contracts, con las dependencias apuntando hacia adentro para que las reglas de negocio nunca lleguen a los route handlers.",
              story: [
                { label: "PROBLEMA", text: "La API maneja datos sensibles y reglas de negocio que tenían que poder probarse sin base de datos. Además, la base y el hosting iban a cambiar mientras el proyecto crecía." },
                { label: "DECISIÓN", text: "Separé la API en cinco proyectos con las dependencias hacia adentro. Domain solo depende de ErrorOr. Application define los casos de uso y las interfaces que Infrastructure implementa, como IUserRepository, y no conoce EF Core ni HTTP. Infrastructure es el único lugar donde viven EF Core, Npgsql, JWT y BCrypt. Contracts tiene los DTOs que viajan por HTTP." },
                { label: "CÓMO", text: "Las reglas viven en las referencias entre proyectos, así que una dependencia hacia afuera no compila. Los handlers dependen de las interfaces de Application y nunca del DbContext. API arma todo como composition root, con módulos de Carter. Dejé las reglas de cada capa escritas en un documento de arquitectura que se actualiza cuando cambia una capa." },
                { label: "RESULTADO", text: "Las reglas de negocio se prueban sin levantar una base de datos, porque los handlers solo ven interfaces. Cuando pasé el correo de recuperación de contraseña a un Outbox, el handler solo cambió una interfaz por otra, y el worker que manda el correo quedó completo en Infrastructure. Y un error de capas se detecta al compilar, no en code review." },
              ],
            },
            {
              topic: "Módulos Carter",
              tags: ["Architecture"],
              summary:
                "Armé la API con módulos de Carter sobre Minimal APIs: un módulo por área, cada endpoint con su handler, validator y contrato, sin controllers.",
              story: [
                { label: "PROBLEMA", text: "Con Minimal APIs, las 54 rutas de la API iban a quedar sueltas en Program.cs, sin agruparse por área ni compartir su autorización. Encontrar un endpoint o cambiar los permisos de un área iba a significar buscar ruta por ruta." },
                { label: "DECISIÓN", text: "Separé las rutas en un módulo de Carter por rol o área, en lugar de controllers. Cada módulo abre un route group y pone la autorización una sola vez para todo el grupo. Cada área pide su rol, y las rutas de Auth quedan anónimas." },
                { label: "CÓMO", text: "Cada endpoint es un método estático que recibe el request de Contracts, lo convierte en Command o Query con Mapster y lo manda por MediatR. El resultado de ErrorOr se convierte en la respuesta HTTP o en un error con el mismo formato en toda la API. Cada ruta declara sus tipos de respuesta, y con eso se genera la documentación OpenAPI." },
                { label: "RESULTADO", text: "Las 54 rutas viven en 5 módulos, y ningún endpoint tiene lógica de negocio. Agregar uno es mapear la ruta, convertir el request y mandarlo, porque la validación y el guardado ya los hace el pipeline." },
              ],
            },
            {
              topic: "Pipeline de validación",
              tags: ["Architecture"],
              summary: "Corrí FluentValidation como pipeline behavior de MediatR, así los handlers nunca llaman a los validators.",
              story: [
                { label: "PROBLEMA", text: "Los formularios de la app tenían que marcar cada campo inválido con su mensaje en español. Si cada handler llamaba a sus validators, era fácil que alguno se olvidara, o que la API regresara solo el primer error y el usuario corrigiera y reenviara campo por campo." },
                { label: "DECISIÓN", text: "Corrí FluentValidation como un pipeline behavior de MediatR que va antes que todos los demás. Un request inválido nunca llega al handler ni abre una transacción, y la respuesta trae todos los campos que fallaron, no solo el primero." },
                { label: "CÓMO", text: "El behavior corre todos los validators del request en paralelo y convierte cada falla en un error de ErrorOr, con el nombre del campo en camelCase como código. Si todos los errores son de validación, la API responde un 400 agrupado por campo, y el frontend pone cada mensaje junto a su campo. Los 20 validators se registran solos desde el assembly." },
                { label: "RESULTADO", text: "Ningún handler llama a un validator ni revisa campos antes de trabajar. El usuario ve todos sus errores de una vez, cada uno junto a su campo, y un validator nuevo funciona con solo escribirlo." },
              ],
            },
            {
              topic: "Seguridad de la API",
              tags: ["Security"],
              summary:
                "Protegí la API con JWT en cookies HttpOnly, contraseñas con BCrypt, rate limit en login y registro, y respuestas que no dejan adivinar qué registros existen.",
              story: [
                { label: "PROBLEMA", text: "La API guarda datos sensibles de sus usuarios. Un token robado, una contraseña adivinada a fuerza bruta o un endpoint que revelara qué IDs existen expondría esa información." },
                { label: "DECISIÓN", text: "Entregué los tokens en cookies HttpOnly y no en el body, porque cualquier script de la página puede leer localStorage y un XSS se llevaría el token. Puse el rate limit por IP en login y registro, no en toda la API. Y cuando un usuario pide algo que no le pertenece, la API responde Forbidden exista o no, para que nadie pueda probar IDs." },
                { label: "CÓMO", text: "El access token dura 15 minutos y el refresh token 7 días, y la cookie del refresh solo viaja a /api/auth, no en cada llamada. Login permite 10 intentos por minuto y registro 5, con una ventana fija por IP. BCrypt y la emisión de JWT viven en Infrastructure, detrás de interfaces de Application. Dos revisiones de PR encontraron endpoints que respondían NotFound o Forbidden según si el registro existía, y los unifiqué." },
                { label: "RESULTADO", text: "Un XSS no puede leer los tokens, y la fuerza bruta contra el login se corta a los 10 intentos por minuto. Ningún endpoint deja saber si existe un registro que no te pertenece." },
              ],
            },
            {
              topic: "Acceso a datos",
              tags: ["Security"],
              summary:
                "Hice que cada handler revise de quién es el registro en el mismo query que lo lee, así un usuario solo alcanza sus datos o los de alguien que le dio acceso.",
              story: [
                { label: "PROBLEMA", text: "Los handlers primero buscaban el registro y después revisaban si era del usuario, en dos pasos. Ese orden daba respuestas distintas para \"no existe\" y \"no es tuyo\", y cada handler repetía la revisión a su manera." },
                { label: "DECISIÓN", text: "Moví la revisión al query. El repositorio busca el registro ya filtrado por el usuario de la sesión, así \"no existe\" y \"no es tuyo\" son el mismo resultado y la API responde Forbidden en los dos casos. Para ver datos de otro usuario hace falta un vínculo aceptado entre los dos, y esa regla vive en un solo guard." },
                { label: "CÓMO", text: "Todos los handlers siguen el mismo orden. Sacan el usuario de la sesión, cargan el registro filtrado por dueño y solo después trabajan. Migré los handlers por área y quité las cargas en dos pasos. El guard compartido revisa que el usuario sea dueño de su perfil y que tenga un vínculo aceptado con el otro, y lo usan 8 endpoints." },
                { label: "RESULTADO", text: "Los datos de un usuario solo los ve él o quien tiene un vínculo aceptado con él, y la regla está en el query, no en la UI. Un endpoint nuevo sigue el mismo orden y llama al mismo guard." },
              ],
            },
            {
              topic: "Logging por rol",
              tags: ["Observability"],
              summary:
                "Construí un sistema de logging por rol con Serilog que soporte consulta desde la app, y los errores que llegaban a desarrollo varias veces por semana bajaron a unos pocos al mes.",
              story: [
                { label: "PROBLEMA", text: "Cuando algo fallaba, un dev tenía que encontrar qué flujo se había roto, explicárselo a soporte, y soporte se lo explicaba al cliente. Pasaba varias veces por semana, y casi nunca eran bugs. Eran permisos, datos mal capturados o errores que nadie entendía porque la lógica de negocio era muy extensa." },
                { label: "DECISIÓN", text: "Hice un log con dos vistas, una para soporte y otra para desarrollo. Soporte ve un mensaje claro y la hora, y desarrollo ve el detalle completo. Descarté una herramienta externa porque soporte necesitaba una versión simplificada, no un panel pensado para devs." },
                { label: "CÓMO", text: "Un middleware atrapa los errores y los escribe con Serilog en una tabla de SQL Server. Cada log lleva un ID de correlación, así un flujo que pasa por varios endpoints se lee como una sola historia. Soporte lo consulta en una pantalla dentro de la app de Kotlin, con filtros por fecha, usuario, módulo y severidad, porque no es lo mismo un crash que un error por falta de datos." },
                { label: "RESULTADO", text: "Los escalamientos bajaron de varias veces por semana a algunos esporádicos al mes. Las 5 personas de soporte resuelven por su cuenta los casos de permisos y datos, y desarrollo dejó de interrumpir su trabajo para investigar errores." },
              ],
            },
            {
              topic: "Contratos de API",
              tags: ["Architecture"],
              summary:
                "Hice que cada ruta declare su contrato, así el spec de OpenAPI describe exactamente lo que responde la API, incluidos sus errores.",
              story: [
                { label: "PROBLEMA", text: "Las rutas respondían con un objeto anónimo envuelto en data. El spec de OpenAPI no podía describir esas respuestas ni qué errores regresaba cada endpoint, así que el frontend se escribía leyendo el código de la API." },
                { label: "DECISIÓN", text: "Hice que el contrato se declare en cada ruta, junto al endpoint. Cada una dice qué Response regresa y con qué status, y una envoltura tipada mantiene el mismo JSON. Los errores siguen un solo formato, con el título en español para el usuario y un code estable en inglés para que el cliente decida qué hacer." },
                { label: "CÓMO", text: "Cada ruta declara su Response y un Produces por cada status que puede regresar, y de ahí sale el spec. Los nombres de Request y Response son únicos en toda la API, porque son el id del schema, y un 201 nunca regresa un objeto anónimo. Lo dejé escrito como regla del proyecto, así cada módulo nuevo sale con su contrato." },
                { label: "RESULTADO", text: "El spec describe 145 rutas con su respuesta y sus errores, y el frontend reacciona a los errores por su code, como cuando se cierra una sesión de edición. Generar los tipos del frontend desde el spec quedó como siguiente paso, sin trabajo pendiente en la API." },
              ],
            },
            {
              topic: "Paginación por cursor",
              tags: ["Performance"],
              summary:
                "Cambié la carga inicial de la app móvil a paginación por cursor sobre 15,000+ registros y 100+ propiedades, y la carga completa bajó de casi 30 minutos a 3–5.",
              story: [
                { label: "PROBLEMA", text: "Al abrir la app móvil por primera vez había que bajar toda la configuración inicial, más de 15,000 registros con más de 100 propiedades. La API paginaba con offset, que se vuelve más lento mientras más avanza, y el usuario se quedaba casi 30 minutos viendo una pantalla de carga." },
                { label: "DECISIÓN", text: "Cambié el offset por un cursor. Con offset, la base recorre todas las filas anteriores en cada página, y con cursor cada página empieza justo donde terminó la anterior. No hacía falta saltar a una página específica, porque la pantalla solo tenía que bajar todo en orden." },
                { label: "CÓMO", text: "El cursor combina fecha, ID y una etiqueta de la tabla de origen, porque la carga junta registros de varias tablas en una sola secuencia. Agregué un índice sobre esas columnas, y cada página trae solo las propiedades que la app necesita, con una proyección. La app de Kotlin pide la siguiente página con el cursor de la anterior hasta terminar." },
                { label: "RESULTADO", text: "Cada página carga en 500 ms, y la carga completa en la app bajó de casi 30 minutos a 3–5 minutos." },
              ],
            },
            {
              topic: "Estrategia de pruebas",
              tags: ["Testing", "PostgreSQL"],
              summary:
                "Armé las pruebas de la API en tres niveles con xUnit, NSubstitute y Testcontainers, y más de 8,000 casos corren en cada PR y antes de cada deploy.",
              story: [
                { label: "PROBLEMA", text: "La API reemplaza un sistema anterior, y sus cálculos y parsers tenían que dar exactamente el mismo resultado. Además atiende a varias escuelas, así que un filtro mal hecho podía dejar que una escuela leyera los datos de otra." },
                { label: "DECISIÓN", text: "Separé las pruebas en tres niveles. Domain prueba entidades y factories. Application corre el pipeline real de MediatR sobre repositorios sustituidos, así valida y guarda igual que en producción. Integración levanta Postgres con Testcontainers y las migraciones reales, y nunca mockea el DbContext." },
                { label: "CÓMO", text: "Las pruebas golden comparan parsers y calculadoras contra la salida guardada del sistema anterior. Cada entidad por escuela tiene una prueba que demuestra que un usuario de una escuela no puede leer ni escribir en otra. Cada prueba se llama Sujeto_Condición_Resultado y arriba nombra el criterio de aceptación que prueba. En CI, un solo workflow define qué significa que las pruebas pasen, lo usan los PRs y el deploy, y nombra la prueba que se cuelga más de 5 minutos." },
                { label: "RESULTADO", text: "Un cambio que rompe un cálculo heredado o deja ver datos de otra escuela falla en el PR, no en producción. Ningún deploy sale sin pasar la misma suite que los PRs." },
              ],
            },
            {
              topic: "Reportes financieros",
              tags: ["Performance"],
              summary:
                "Como Trainee, desarrollé 10–15 interfaces de reportes financieros en WinForms/C#, optimicé consultas LINQ con proyecciones y normalicé esquemas de SQL Server a tercera forma normal.",
              story: [
                { label: "PROBLEMA", text: "Los reportes eran anuales, así que cada uno consultaba más de 20,000 registros y algunos pasaban de 50,000. Las consultas tenían lazy loading por default y cargaban todo, así que cada relación que tocaba el reporte disparaba otra consulta y los reportes eran lentos." },
                { label: "DECISIÓN", text: "Dejé de depender del lazy loading. Las relaciones que el reporte sí usaba las cargué con eager loading, y en lugar de traer entidades completas proyecté solo las columnas que se mostraban, porque las entidades traían relaciones y propiedades que el reporte nunca usaba." },
                { label: "CÓMO", text: "Cada reporte arma su consulta LINQ con las relaciones que necesita y termina en una proyección a un tipo anónimo con los campos del reporte. Usé tipos anónimos porque son inmutables, así ningún paso del reporte puede cambiar un dato después de leerlo." },
                { label: "RESULTADO", text: "Antes del cambio, un reporte anual nunca llegó a imprimirse. Después, la pantalla dejó de trabarse y los reportes de más de 50,000 registros se generan e imprimen." },
              ],
            },
          ],
        },
        {
          ...en.about.technical.skills[2],
          bullets: [
            {
              topic: "Validación en las dos capas",
              tags: ["Security", "TypeScript"],
              summary:
                "Validé con el mismo schema de Zod el formulario en el navegador y el request en la API, así el cliente y el servidor nunca aceptan datos distintos.",
              story: [
                { label: "PROBLEMA", text: "El proyecto recibe datos de formularios de registro, direcciones y pedidos. Los tipos de TypeScript desaparecen al compilar, así que no protegen nada en tiempo de ejecución, y un body con un campo faltante o de otro tipo podía llegar hasta la base. Validar a mano en cada formulario y en cada ruta duplicaba las reglas y las dejaba desfasarse." },
                { label: "DECISIÓN", text: "Puse los schemas de Zod en una carpeta compartida, y los usan tanto el formulario como la ruta de la API. El navegador valida para mostrar el error junto al campo, y la ruta vuelve a validar porque un request se puede armar a mano sin pasar por el formulario." },
                { label: "CÓMO", text: "Los formularios conectan el schema con react-hook-form a través de zodResolver. Las rutas de la API hacen safeParse del body antes de tocar la base y responden 400 si no pasa. Hoy 22 rutas validan así, y los schemas de productos tienen sus propias pruebas unitarias." },
                { label: "RESULTADO", text: "Una regla, como el formato de un teléfono o de una dirección, se cambia en un solo lugar y aplica en el formulario y en la API al mismo tiempo. Un request armado a mano no se salta la validación." },
              ],
            },
            {
              topic: "Cache del catálogo con CSP estricta",
              tags: ["Security", "Caching"],
              summary:
                "Mantuve una CSP estricta con nonce, que obliga a renderizar cada página por request, y moví el cache del catálogo de la página a los datos, así el catálogo sigue sin consultar la base en cada visita.",
              story: [
                { label: "PROBLEMA", text: "El plan era cachear páginas completas, con el catálogo y el producto regenerándose cada hora. Pero la CSP usa un nonce con strict-dynamic, y Next solo pone ese nonce en sus scripts cuando renderiza un request. En una página estática los scripts salían sin nonce, la CSP los bloqueaba y la página quedaba en blanco." },
                { label: "DECISIÓN", text: "Elegí la CSP estricta sobre el cache de páginas. Todas las rutas se renderizan por request, y el cache pasó de la página a los datos. Renderizar es barato, y lo caro era consultar la base en cada visita." },
                { label: "CÓMO", text: "El layout raíz fuerza el rendering dinámico. Las consultas del catálogo van envueltas en unstable_cache con el tag catalog y una vigencia de una hora. Cada pago confirmado, cancelación, pedido vencido o cambio de inventario llama a revalidateTag('catalog'), y la siguiente visita vuelve a consultar con el stock al día." },
                { label: "RESULTADO", text: "Ningún script corre sin el nonce de su request, y las visitas normales al catálogo no consultan la base. El stock que ve el usuario se actualiza en cuanto cambia, no hasta que vence la hora." },
              ],
            },
            {
              topic: "Checkout con Stripe",
              tags: ["Payments"],
              summary:
                "Construí un checkout de varios pasos con Stripe donde solo el webhook confirma el pago, así el inventario nunca se libera con una transacción sin confirmar.",
              story: [
                { label: "PROBLEMA", text: "Un pago se puede confirmar por dos caminos, la verificación al regresar del checkout y el webhook de Stripe, y los dos pueden llegar en cualquier orden o repetirse. Con SPEI, una transferencia puede llegar incompleta, de más o cuando el pedido ya venció. Procesar dos veces el mismo pago, o confiar solo en el navegador, podía marcar pagado un pedido sin dinero o regresar el dinero de una venta válida." },
                { label: "DECISIÓN", text: "El webhook firmado de Stripe es la fuente de verdad del pago, y cada cambio de estado del pedido es condicional. Marcar un pedido como pagado solo funciona si sigue pendiente, así que el segundo en llegar no cambia nada. Cuando no queda claro si un pago sobra, el sistema avisa y una persona decide, porque regresar el dinero de una venta real es peor que revisar un caso a mano." },
                { label: "CÓMO", text: "Pagos con tarjeta y SPEI. El webhook verifica la firma y atiende pago exitoso, fallido, pendiente de transferencia, transferencia parcial, saldo disponible y reembolso fallido. Marcar como pagado es un update condicional sobre los estados pendientes, así un replay o la carrera con la verificación del navegador no cambian nada. Una transferencia de más se paga primero y el excedente se reembolsa después, y una que llega a un pedido vencido se le regresa al cliente." },
                { label: "RESULTADO", text: "El proyecto procesa más de 200 pedidos al mes en producción. Un pago repetido o una carrera entre el webhook y el navegador no sobrevende stock ni cobra dos veces." },
              ],
            },
            {
              topic: "Reserva de inventario",
              tags: ["Payments"],
              summary:
                "Reservé el stock al crear el pedido y corrí un job que expira los pedidos sin pagar cada 5 minutos, así un carrito abandonado nunca bloquea inventario.",
              story: [
                { label: "PROBLEMA", text: "Un carrito abandonado podía apartar stock sin límite y bloquear a compradores reales." },
                {
                  label: "DECISIÓN",
                  text: "Reservar el inventario al crear el pedido y regresarlo si se cancela, sin conciliación manual.",
                },
                { label: "CÓMO", text: "Al crear el pedido, cada línea descuenta stock con un update condicional dentro de una transacción, que solo pasa si hay unidades suficientes. Si una línea no alcanza, la transacción completa se revierte y el usuario ve cuántas quedan. El pedido guarda si tomó stock, para regresarlo exacto al cancelarse o vencer. Un cron cada 5 minutos primero rescata los pedidos cuyo pago sí llegó con el webhook tarde, después vence las transferencias viejas y los pedidos sin pagar, regresa su stock e invalida el cache del catálogo." },
                { label: "RESULTADO", text: "Un carrito abandonado regresa su stock en minutos, y dos compradores no pueden apartar la misma última unidad. Un pago que llega tarde no pierde su pedido, porque el cron lo rescata antes de vencerlo." },
              ],
            },
            {
              topic: "Panel de admin",
              tags: ["Architecture"],
              summary:
                "Diseñé el panel de admin alrededor de cómo trabaja el equipo que opera el proyecto, con cotizaciones, ventas de mostrador, almacén, compras y productos, sin necesitar a un desarrollador.",
              story: [
                { label: "PROBLEMA", text: "El equipo que opera el proyecto no solo vende en línea. Arma pedidos por cotización, vende en mostrador, compra material a proveedores y convierte ese material en producto. Un dashboard genérico de e-commerce solo cubre la venta en línea, y todo lo demás quedaba fuera." },
                { label: "DECISIÓN", text: "Diseñé el panel alrededor de esos flujos, no de las tablas de la base. Cada flujo tiene su sección, y cada acción respeta las reglas del negocio, para que el equipo opere sin depender de un desarrollador." },
                { label: "CÓMO", text: "Una cotización se convierte en venta con su dirección y su envío, y se paga con un link firmado que solo abre el correo del cliente. Las ventas de mostrador se pueden marcar como pagadas a mano, y las ventas en línea no, porque esas solo las confirma Stripe. Crear un producto descuenta del almacén el material que consume, y cada cambio de inventario invalida el cache del catálogo. El middleware solo deja entrar a /admin a usuarios con rol de admin." },
                { label: "RESULTADO", text: "El equipo opera cotizaciones, ventas, inventario y compras desde el panel, sin pedirle cambios a desarrollo para el trabajo del día a día." },
              ],
            },
            {
              topic: "Rutas de API",
              tags: ["Architecture", "TypeScript"],
              summary:
                "Construí el sitio público y el panel de administración en Next.js 15 con TypeScript strict, y 55 rutas de API en capas sobre PostgreSQL y Prisma.",
              story: [
                { label: "PROBLEMA", text: "Con más de 50 rutas, la lógica vivía revuelta en una carpeta lib/ que mezclaba Prisma, Stripe, correo y utilidades puras. Una regla de negocio podía quedar dentro de un handler y repetirse en otro, y no había un lugar claro para probarla." },
                { label: "DECISIÓN", text: "Separé el código en capas. El handler solo se encarga de HTTP, que es la sesión, el rate limit, la validación con Zod y la respuesta. Las reglas viven en use-cases, el acceso a datos en repositorios, y Prisma, Redis, Stripe y el correo en infrastructure. El precio de un pedido siempre se calcula en el servidor y nunca se toma del cliente." },
                { label: "CÓMO", text: "Crear un pedido muestra el patrón completo. La ruta revisa la sesión, limita a 5 pedidos por minuto por usuario, valida el body con Zod y exige un Idempotency-Key, así un reintento del navegador no crea dos pedidos. La tarifa de envío llega firmada y se verifica, y el total se recalcula con los precios de la base. Las rutas que mueven dinero tienen pruebas propias, como la cancelación, la idempotencia y la verificación del pago." },
                { label: "RESULTADO", text: "Una regla vive en un solo use-case y la usan todas las rutas que la necesitan. El cliente no puede cambiar un precio ni duplicar un pedido, y con las capas separadas la API quedó lista para migrarse a un backend en .NET, que ya tiene documentadas las rutas que debe reproducir." },
              ],
            },
            {
              topic: "Autenticación reforzada",
              tags: ["Security"],
              summary:
                "Hice que una sesión con JWT se pueda revocar al instante, con una blacklist en Redis que revisa el middleware y una versión de sesión en la base.",
              story: [
                { label: "PROBLEMA", text: "Las sesiones usan JWT, que no se pueden revocar una vez emitidos. Si un admin bloqueaba a un usuario o alguien cambiaba su contraseña, el token viejo seguía funcionando hasta vencer." },
                { label: "DECISIÓN", text: "Combiné dos mecanismos. Una blacklist en Redis corta la sesión al instante en el middleware, antes de llegar a cualquier página o ruta. Y una versión de sesión en la base hace que cualquier token emitido antes de un cambio de contraseña, un bloqueo o un logout forzado deje de servir. Si Redis falla, el middleware cierra el paso en lugar de dejar pasar." },
                { label: "CÓMO", text: "Bloquear a un usuario o forzar su logout escribe su clave en Redis con una vigencia de 30 días, y desbloquearlo la borra. El middleware revisa esa clave en cada request, en las páginas y en la API, y responde 401 si existe. Cambiar la contraseña, bloquear o desbloquear incrementa la versión de sesión del usuario, y el callback del JWT la compara con la del token. Al principio un error de Redis dejaba pasar el request, y lo cambié para que falle cerrado." },
                { label: "RESULTADO", text: "Un usuario bloqueado pierde el acceso en su siguiente request, no cuando vence su token. Una contraseña cambiada cierra todas las sesiones anteriores, y una falla de Redis no abre la puerta." },
              ],
            },
          ],
        },
        {
          ...en.about.technical.skills[3],
          bullets: [
            {
              topic: "Ciclo de vida del challenge",
              tags: ["Scheduled jobs"],
              summary:
                "Construí el ciclo de vida de la invitación a un juego de dinero real, con recordatorios que elige el invitado y una expiración a la hora de inicio, corrido por tareas programadas que funcionan con más de una instancia.",
              story: [
                { label: "PROBLEMA", text: "Un juego de dinero empieza con una invitación, y un invitado que nunca contestaba se quedaba con su lugar y detenía a todo el grupo. El límite anterior además cerraba invitaciones mandadas minutos antes del juego, antes de que alguien pudiera leerlas. Los recordatorios y las expiraciones tenían que pasar solos, sin que nadie apretara un botón." },
                { label: "DECISIÓN", text: "La invitación expira a la hora de inicio del juego, salvo la que se manda con menos de una hora de anticipación, que nunca expira. El invitado puede pedir un recordatorio en una hora, en un día o dos horas antes de que expire. Las dos cosas las corrí con tareas programadas y no con timers en memoria, porque un reinicio pierde el timer y una tarea vuelve a encontrar el trabajo pendiente en su siguiente pasada." },
                { label: "CÓMO", text: "Una tarea corre cada minuto y saca a quien no contestó antes de la hora de inicio, y otra corre cada 5 minutos y manda los recordatorios que ya tocan. Cada una lee los ids pendientes y procesa cada uno en su propia transacción, bajo el {{row lock|un lock de la base de datos que hace esperar a los demás que escriben en esa fila}} del juego, y revisa el estado otra vez antes de actuar. Si dos instancias corren la misma pasada, la segunda ya no encuentra nada que hacer, y una que falla no detiene a las demás. Cuando el host mueve la hora de inicio, la expiración y el recordatorio se mueven con ella." },
                { label: "RESULTADO", text: "Una invitación sin respuesta ya no detiene al grupo, un juego de último minuto todavía se puede contestar y ningún recordatorio llega cuando el juego ya empezó. Correr más instancias de la API no manda un recordatorio dos veces." },
              ],
            },
            {
              topic: "Check-in en el lugar",
              tags: ["Geolocation"],
              summary:
                "Hice que un juego de dinero real solo pueda empezar cuando todos los que pagaron están en el lugar, con el servidor decidiendo a partir de la ubicación del teléfono, entre la API en Kotlin y la app en SwiftUI.",
              story: [
                { label: "PROBLEMA", text: "Un juego de dinero solo lo pueden jugar personas que de verdad están donde se juega. Un botón de check-in se puede apretar desde cualquier lado, y la ubicación que reporta un teléfono puede ser imprecisa o vieja." },
                { label: "DECISIÓN", text: "El check-in nunca es un botón. El teléfono reporta su posición solo y el servidor decide. Una lectura registra al jugador solo cuando todo su círculo de error cae dentro del radio, y se lo quita solo cuando cae completamente fuera, así que una lectura vaga no cambia nada. Se valida al momento de empezar, porque lo que importa es quién está ahí cuando el dinero queda comprometido." },
                { label: "CÓMO", text: "En iOS, con SwiftUI, la app registra el área del lugar cuando se crea el juego y reporta entradas, salidas y actualizaciones mientras el lobby está abierto. La API mide la distancia al lugar con un radio de 3 millas, para que cuenten el estacionamiento y el otro extremo del terreno, y guarda cada lectura para disputas. Un check-in caduca después de 2 horas sin lecturas, y empezar el juego se rechaza mientras alguien que pagó no tenga check-in. El host siempre puede empezarlo como juego por diversión, y el dinero se devuelve." },
                { label: "RESULTADO", text: "Un juego de dinero no puede empezar con un jugador que no está ahí, y uno que se fue con la ubicación apagada deja de contar. Cada lectura queda registrada por si alguien la disputa." },
              ],
            },
            {
              topic: "Protección de movimientos de dinero",
              tags: ["Concurrency"],
              summary:
                "Protegí los movimientos de dinero con validación de estado en el servidor y optimistic locking contra escrituras concurrentes, para que una escritura vieja o una cancelación mal puesta nunca deje atorado el dinero de un jugador.",
              story: [
                { label: "PROBLEMA", text: "Tres bugs tenían la misma raíz, una escritura que confiaba en un estado que ya no era cierto. Una copia vieja de un jugador se guardaba encima de una escritura más nueva y revivía una invitación expirada, y el host recibía el mismo push dos veces. Cancelar un juego con los scores ya cerrados dejaba todas las cuotas de entrada retenidas en el proveedor de pagos sin nada que las devolviera. Y un jugador que ya había pagado aparecía como no pagado cuando otra build de la app reescribía sus datos en el proveedor, y eso bloqueaba el inicio." },
                { label: "DECISIÓN", text: "El servidor revisa el estado antes de cada escritura de dinero y no cuenta con que la app esconda un botón. Le agregué {{optimistic locking|cada fila lleva una versión y guardar una versión vieja falla}} a la fila del jugador, para que un save viejo falle en lugar de sobrescribir, y todo el que escribe toma el lock del juego antes de leer. Quién pagó se identifica por el vínculo con la cuenta del proveedor, que solo cambia cuando se borra la cuenta, y no por datos que cualquier app puede reescribir." },
                { label: "CÓMO", text: "La fila del jugador ganó una columna de versión, y los que escribían sin lock ahora toman el lock primero y vuelven a leer, cada uno en su propia transacción corta. Cancelar responde 400 mientras los scores están cerrados o el pago está pendiente, la misma regla que la app ya aplicaba en pantalla. El estado de pago lee el leaderboard del proveedor y empata cada fila primero por el vínculo de la cuenta. Reproduje la cancelación atorada y el jugador no pagado contra el sandbox del proveedor, y cada fix salió con tests para su caso." },
                { label: "RESULTADO", text: "Un save viejo ya no puede deshacer uno más nuevo, una cancelación no puede dejar cuotas atoradas y un jugador que pagó sigue pagado. El dinero solo se mueve desde un estado que el servidor revisó." },
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
              topic: "Golden tests contra el legacy",
              tags: ["Regression"],
              summary:
                "Escribí 12 generadores en Node.js que corren las funciones del sistema legacy y producen más de 6,000 golden cases, para que el backend migrado tenga que responder exactamente lo que respondía el sistema viejo.",
              story: [
                { label: "PROBLEMA", text: "La migración reescribía un sistema de gestión escolar que tenía sus reglas de negocio dentro de un solo archivo de front-end enorme. Reglas como en qué etapa está una generación en cierta fecha, o cómo se lee un archivo de alumnos, no tenían documentación, y cada una tenía casos límite en cambios de mes o en filas raras. Reescribirlas en C# solo leyendo el código podía cambiar un resultado sin que nadie se diera cuenta." },
                { label: "DECISIÓN", text: "El mismo código legacy define la respuesta esperada. Cada generador copia la función legacy tal cual, la corre sobre cientos de entradas y escribe entradas y salidas en un JSON, y los tests de .NET comparan el código nuevo contra ese archivo. Las entradas aleatorias usan una seed fija, así que cada corrida escribe el mismo archivo y un diff en el JSON significa que cambió una regla." },
                { label: "CÓMO", text: "Cada generador es un script de Node que cita las líneas del legacy que copió. Mezcla casos límite elegidos a mano, como el 15 y 16 de enero o el 1 de agosto, con entradas aleatorias con seed hasta unos 500 casos. El JSON queda en el proyecto de tests, donde una {{theory|un test que corre una vez por cada fila de datos}} de xUnit carga cada caso como su propio test. Cuando existe localmente un archivo con casos reales también los corre, sin commitear datos que el cliente no ha aprobado compartir." },
                { label: "RESULTADO", text: "Doce reglas del legacy en cinco módulos se migraron con prueba de que responden como el sistema viejo, caso por caso. Cuando un test falla, dice la entrada exacta donde el código nuevo responde distinto." },
              ],
            },
            {
              topic: "Evidencia de tests de ubicación",
              tags: ["Evidence"],
              summary:
                "Construí un pipeline en Python que convierte un recorrido de ubicación simulado en un video de evidencia, con un panel lateral que muestra la geofence, el punto en movimiento y cada check-in que registró el servidor, sincronizados.",
              story: [
                { label: "PROBLEMA", text: "El check-in de los juegos de dinero real depende de que el teléfono cruce un radio alrededor del lugar, y eso no se prueba con screenshots. La grabación del simulador tiene frame rate variable, comprime el tiempo quieto y tira frames, y los tiempos del video dejaban de coincidir con los registros del servidor." },
                { label: "DECISIÓN", text: "Grabé con un loop de screenshots nombrados con su timestamp y reconstruí los tiempos a partir de esos nombres. El panel lee las lecturas de la base de datos para la ventana del clip, porque el servidor es quien decide el check-in, no lo que muestra la app." },
                { label: "CÓMO", text: "Un script convierte los screenshots en una lista de ffmpeg con la duración real de cada frame. Otro dibuja el panel lateral frame por frame con PIL, con los anillos de tolerancia alrededor del lugar, el punto moviéndose a la velocidad del recorrido, la distancia en vivo calculada con {{haversine|la fórmula de distancia entre dos puntos de una esfera}} y cada lectura en el momento en que llegó, marcada dentro o fuera. También puede dibujar el estado del permiso en Settings y saltos de ubicación, para mostrar casos como apagar la ubicación a medio recorrido." },
                { label: "RESULTADO", text: "Cada test de ubicación sale con un video donde quien revisa ve la app y la decisión del servidor lado a lado, segundo a segundo. Un check-in que falta o que sobra se ve en el clip sin leer logs." },
              ],
            },
            {
              topic: "Probe de privacidad",
              tags: ["Security"],
              summary:
                "Escribí un probe en Python que revisa 4 invariants de privacidad de las recomendaciones de usuarios actuando como un usuario real contra la API, para que una respuesta privada no se filtre por el orden del ranking.",
              story: [
                { label: "PROBLEMA", text: "Las recomendaciones ordenan usuarios por distancia y por qué tan parecidas son sus respuestas del perfil. Algunas respuestas son privadas, y aunque la API nunca las devuelva, el orden de la lista puede delatarlas, porque cambiar una respuesta mueve a alguien hacia arriba o hacia abajo. Los unit tests revisaban cada pieza por separado, no lo que un usuario real puede deducir desde afuera." },
                { label: "DECISIÓN", text: "Probé desde el lado del atacante. El probe actúa como un usuario real y compara respuestas de la API, nunca valores internos. Si dos juegos de respuestas que desde afuera deberían verse iguales producen respuestas distintas, algo se está filtrando." },
                { label: "CÓMO", text: "El probe corre 18 hojas de respuestas contra una escalera de usuarios de referencia sembrados. Revisa que las hojas que dan el mismo tipo público reciban respuestas idénticas en recomendaciones y búsqueda, que un perfil privado nunca se mueva ni muestre su tipo, y que la búsqueda ignore la latitud y longitud que manda el cliente. Como control, cambiar una respuesta pública sí mueve a un usuario, así que el probe distingue un pase real de un test que no ve nada." },
                { label: "RESULTADO", text: "La fuga por el orden del ranking se cerró con prueba desde afuera, y los cuatro invariants se cumplen en la API local. El control demuestra que el probe atraparía la fuga si regresara." },
              ],
            },
            {
              topic: "Prueba de carga de viewers en vivo",
              tags: ["Performance"],
              summary:
                "Cargué el Redis compartido con 20,000 viewers simulados y un minuto de heartbeats en vivo desde un script de Python, para medir memoria y latencia antes de sacar el conteo de viewers en vivo.",
              story: [
                { label: "PROBLEMA", text: "El conteo de viewers en vivo guarda un set de Redis por juego y un heartbeat de cada viewer cada 25 segundos, con un barrido cada 5 segundos. Ese Redis se comparte con el resto de la app, tiene 256 MB y saca keys cuando se llena. Una feature que creciera su memoria o lo bloqueara con comandos lentos le pegaría a todo lo demás." },
                { label: "DECISIÓN", text: "Medí en el mismo Redis de dev, con los mismos comandos que corre el servicio, y no en un Redis local sin nada más encima. Las keys fueron bajo un prefijo desechable para que la prueba no tocara datos reales, y se borraron por nombre al final." },
                { label: "CÓMO", text: "El script cargó 5,000 juegos con 4 viewers cada uno y luego corrió 60 segundos de tráfico en vivo, un heartbeat de cada viewer cada 25 segundos y un barrido cada 5 segundos. Registró el tiempo, los comandos y los errores de la carga, la memoria antes y después, cuánto tardó cada barrido y la latencia que vieron los demás clientes. Al final borró las keys y revisó que la base quedara en cero." },
                { label: "RESULTADO", text: "20,000 viewers costaron 2.25 MB, la memoria se mantuvo plana durante el minuto en vivo y los demás clientes vieron latencia promedio menor a 1 ms, sin keys desalojadas ni comandos lentos. La feature salió con su costo medido en el mismo Redis donde corre." },
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
                  text: "La imagen de la API corre las migraciones al arrancar y expone GET /health para el health check de compose. El frontend es un build de Vite servido por un servidor estático pequeño. En un sistema con varios servicios, un scraper con Playwright corre como worker en su propio contenedor, junto a la API y el frontend.",
                },
                {
                  label: "RESULTADO",
                  text: "Pasar de un checkout nuevo a la app corriendo en una URL pública toma dos comandos: git clone y docker compose up.",
                },
              ],
            },
            {
              topic: "Imágenes mínimas y sin root",
              tags: ["Docker"],
              summary:
                "Construí las imágenes con multi-stage build y ningún contenedor corre como root. La API en Go termina en una imagen distroless, sin shell.",
              story: [
                todo("PROBLEMA"),
                { label: "DECISIÓN", text: "Separé el build de la imagen final. El SDK, los compiladores y las dependencias de desarrollo se quedan en la etapa de build y no llegan a producción. Ningún contenedor corre como root, así una falla en la app no le da root dentro del contenedor a quien la explote." },
                { label: "CÓMO", text: "La API en Go termina en distroless/static:nonroot, que trae certificados y zona horaria pero no shell, y corre con el uid 65532. Las APIs en .NET corren con el usuario $APP_UID de la imagen oficial. Next.js se construye en modo standalone, así la imagen solo lleva el servidor y lo que usa. El sitio estático va en nginx-unprivileged, que no necesita root, con un HEALTHCHECK." },
                todo("RESULTADO"),
              ],
            },
            {
              topic: "Migraciones antes de arrancar",
              tags: ["Docker"],
              summary:
                "La base se migra antes de que arranque la app, así ninguna versión nueva corre contra un esquema viejo.",
              story: [
                todo("PROBLEMA"),
                { label: "DECISIÓN", text: "Hice que la migración sea un paso del arranque y no un comando manual del deploy." },
                { label: "CÓMO", text: "En Compose, un servicio migrate corre el bundle de migraciones de EF Core una sola vez, después de que Postgres pasa su health check. La API solo arranca cuando ese servicio termina bien. En Next.js con Prisma, el contenedor corre prisma migrate deploy y después levanta el servidor." },
                todo("RESULTADO"),
              ],
            },
            {
              topic: "Backups cifrados en contenedor",
              tags: ["Docker"],
              summary:
                "Un contenedor respalda la base cada noche con pg_dump, cifra el respaldo con age y lo sube a un bucket en R2.",
              story: [
                todo("PROBLEMA"),
                { label: "DECISIÓN", text: "El respaldo se cifra con la llave pública, así el servidor nunca tiene la llave para leerlo. Las llaves de R2 viven en un archivo de entorno aparte que solo recibe el contenedor de backup, nunca la API." },
                { label: "CÓMO", text: "La imagen parte de la misma versión de Postgres que la base, así pg_dump siempre coincide con la versión mayor del servidor. crond corre el script cada noche y le pasa las variables del contenedor, así ningún archivo con secretos se escribe a disco. El dump se escribe completo antes de subirlo, para no subir un archivo truncado si pg_dump falla a la mitad. La retención borra respaldos viejos solo después de una subida exitosa." },
                todo("RESULTADO"),
              ],
            },
            {
              topic: "Entorno e2e local",
              tags: ["Docker"],
              summary:
                "Armé un compose aparte para los tests e2e, con Redis local en lugar de Upstash.",
              story: [
                todo("PROBLEMA"),
                todo("DECISIÓN"),
                { label: "CÓMO", text: "El compose levanta Redis y serverless-redis-http, un proxy que expone Redis con la misma API HTTP de Upstash. Así la app habla con Redis local con el mismo cliente que usa en producción." },
                todo("RESULTADO"),
              ],
            },
            {
              topic: "CI/CD a un VPS",
              tags: ["Docker", "GitHub Actions", "Nginx"],
              summary:
                "GitHub Actions corre los tests en cada push. Al hacer merge a main construye las imágenes, las sube a GHCR etiquetadas con el commit y el VPS levanta exactamente esa versión.",
              story: [
                todo("PROBLEMA"),
                todo("DECISIÓN"),
                { label: "CÓMO", text: "Workflows filtrados por path corren dotnet test y npm test en cada push. En el deploy, buildx construye las imágenes en una matrix con cache de GHA y las etiqueta con el SHA del commit. El workflow entra al VPS por SSH verificando la llave del host contra known_hosts y levanta ese SHA." },
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
