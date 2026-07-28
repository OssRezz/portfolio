import type { L } from "../lang";

export const PROFILE = {
  name: "James Osorio Florez",
  email: "OssRezz.13@gmail.com",
  phone: "+57 319 327 0780",
  github: "https://github.com/OssRezz",
  linkedin: "https://linkedin.com/in/ossrezz",
  location: { es: "Medellín, Colombia", en: "Medellín, Colombia" } as L,
  availability: { es: "Medellín · Disponible", en: "Medellín · Available" } as L,
  /** Headline, split into words. A word prefixed with § starts the gradient half. */
  headline: {
    es: ["Arquitecto", "de", "sistemas", "§que", "§aguantan."],
    en: ["Architect", "of", "systems", "§that", "§hold."],
  },
  lede: {
    es: "Construyo producto de punta a punta — del esquema de datos al deploy. Arquitecturas de microservicios, tiempo real y cloud que sostienen <b>millones de registros</b> en producción.",
    en: "I build product end to end — from the data schema to the deploy. Microservice architectures, real time and cloud that hold <b>millions of records</b> in production.",
  } as L,
  hint: {
    es: "El fondo no es decoración. Es una arquitectura real. Sigue bajando.",
    en: "The background isn't decoration. It's a real architecture. Keep scrolling.",
  } as L,
};

export interface Metric {
  value: string;
  /** Rendered in the accent colour, e.g. the % in "70%". */
  suffix?: string;
  label: L;
}

export interface SubBlock {
  n: string;
  title: L;
  body: L;
}

export interface Decision {
  kicker: L;
  title: L;
  paras: L[];
  lesson: L;
}

export interface CaseStudy {
  id: string;
  num: string;
  /** Full title used in the section heading. */
  sectionTitle: string;
  /** Short label for the nav — the full titles are too long for the pill. */
  short: string;
  sectionLead: L;
  company: string;
  period: L;
  role: L;
  claim: L;
  problem?: { left: { h: L; p: L }; right: { h: L; p: L } };
  graph: string;
  /** Show the lens chips above the diagram (graph must define lenses). */
  lenses: boolean;
  metrics: Metric[];
  subs?: SubBlock[];
  decision?: Decision;
  tags: string[];
}

export const CASES: CaseStudy[] = [
  {
    id: "insights",
    num: "01",
    sectionTitle: "Edgeclear Insights",
    short: "Insights",
    sectionLead: {
      es: "Seis servicios y tres fuentes externas para convertir ejecuciones crudas en estadística que un trader puede leer.",
      en: "Six services and three external sources turning raw executions into statistics a trader can read.",
    },
    company: "ArrowFin",
    period: { es: "2025 — Actualidad", en: "2025 — Present" },
    role: { es: "Responsable técnico", en: "Technical owner" },
    claim: {
      es: "Tu plataforma de trading te dice que ejecutaste. No te dice <b>cómo te fue</b>. Insights toma los fills crudos y los convierte en trades, calendarios, curvas de P&amp;L y estadística accionable.",
      en: "Your trading platform tells you that you executed. It doesn't tell you <b>how you did</b>. Insights takes raw fills and turns them into trades, calendars, P&amp;L curves and actionable statistics.",
    },
    problem: {
      left: {
        h: { es: "El problema real", en: "The actual problem" },
        p: {
          es: "La estadística es la parte fácil. Lo difícil es <b>de dónde sale el dato</b>: cada bróker habla su propio protocolo, entrega histórico y vivo por canales distintos, y nada llega normalizado.",
          en: "Statistics are the easy part. The hard part is <b>where the data comes from</b>: every broker speaks its own protocol, delivers history and live feed through different channels, and nothing arrives normalized.",
        },
      },
      right: {
        h: { es: "La respuesta", en: "The answer" },
        p: {
          es: "Un servicio de ingesta por bróker, un transportador que consolida sus tres bases en una, un constructor de dominio que arma los trades, y una capa de sockets que empuja los cambios al front. <b>Cada pieza falla sola.</b>",
          en: "One ingestion service per broker, a mover consolidating their three databases into one, a domain builder assembling the trades, and a socket layer pushing changes to the front. <b>Each piece fails on its own.</b>",
        },
      },
    },
    graph: "insights",
    lenses: false,
    metrics: [
      {
        value: "28h → 18",
        suffix: "min",
        label: {
          es: "8M de registros en el pipeline de migración. Primer hito: 30 min. Hoy: 18.",
          en: "8M records through the migration pipeline. First milestone: 30 min. Today: 18.",
        },
      },
      {
        value: "6",
        suffix: "M+",
        label: {
          es: "operaciones financieras consultables bajo demanda, con streaming en vivo",
          en: "financial trades queryable on demand, with live streaming",
        },
      },
      {
        value: "3",
        label: {
          es: "fuentes externas normalizadas a un mismo modelo de dominio",
          en: "external sources normalized into one domain model",
        },
      },
    ],
    tags: ["NestJS", "Hexagonal", "Laravel", "React", "TypeScript", "WebSockets", "DTC", "Sierra Chart", "Rithmic", "AWS ECS", "Docker"],
  },

  {
    id: "galaxia",
    num: "02",
    sectionTitle: "Galaxia Platform",
    short: "Galaxia",
    sectionLead: {
      es: "Un gateway, seis microservicios, dos fronts, una app móvil offline-first y un decodificador de protocolo binario. Todo lo que opera una empresa de seguridad privada a nivel nacional.",
      en: "One gateway, six microservices, two frontends, an offline-first mobile app and a binary-protocol decoder. Everything that runs a nationwide private-security company.",
    },
    company: "Galaxia Seguridad",
    period: { es: "2022 — 2026", en: "2022 — 2026" },
    role: { es: "Arquitecto · construido solo", en: "Architect · built solo" },
    claim: {
      es: "Empezó como un monolito legacy y terminó como un monorepo de microservicios con contextos acotados, <b>una base de datos por servicio</b> y testing en dos capas. Reemplazó <b>cuatro servicios de terceros</b> que la empresa venía pagando.",
      en: "It started as a legacy monolith and ended as a microservices monorepo with bounded contexts, <b>one database per service</b> and two-tier testing. It replaced <b>four third-party services</b> the company had been paying for.",
    },
    graph: "galaxia",
    lenses: true,
    metrics: [
      {
        value: "25",
        suffix: "K",
        label: { es: "eventos diarios procesados a nivel nacional", en: "daily events processed nationwide" },
      },
      {
        value: "16 + 12",
        label: {
          es: "módulos de operación en campo en el back, y 12 cableados de punta a punta en la app móvil",
          en: "field-operation modules in the backend, and 12 wired end to end in the mobile app",
        },
      },
      {
        value: "1.000",
        suffix: "+",
        label: {
          es: "empleados cuya operación diaria pasa por la plataforma",
          en: "employees whose daily operation runs through the platform",
        },
      },
    ],
    subs: [
      {
        n: "01",
        title: { es: "El outbox: guardar nunca puede fallar", en: "The outbox: saving must never fail" },
        body: {
          es: "Un guarda en un sótano sin señal tiene que poder trabajar el turno completo. Cada “Guardar” escribe en una cola <b>SQLite local</b> y responde al instante; un motor en segundo plano sincroniza cuando hay red. Una sola cola genérica para los 12 módulos — el motor nunca aprende las interioridades de ninguno. Reintentos con backoff exponencial de 30 s a 10 min, y una clave de idempotencia por registro: <b>un 504 del gateway que escondía un 201 del servidor se auto-repara solo</b> — el reintento reenvía la misma clave, el servidor deduplica, el conteo sigue en uno.",
          en: "A guard in a basement with no signal has to be able to work a whole shift. Every “Save” writes to a local <b>SQLite</b> queue and returns instantly; a background engine syncs when there's signal. One generic queue for all 12 modules — the engine never learns any module's internals. Exponential backoff from 30 s to 10 min, and one idempotency key per record: <b>a gateway 504 that hid a server-side 201 self-heals</b> — the retry re-sends the same key, the server dedupes, the count stays at one.",
        },
      },
      {
        n: "02",
        title: { es: "Tramas GT06: hablar el idioma del hardware", en: "GT06 frames: speaking the hardware's language" },
        body: {
          es: "Los rastreadores GPS abren una conexión <b>TCP</b> y envían tramas binarias en hex: se identifican, mandan latidos y reportan posición. El servicio escucha, reconoce el tipo de trama y responde el <b>ACK firmado con CRC-16/ITU</b> que el dispositivo espera, decodifica el IMEI en <b>BCD</b> y extrae lat/lng, velocidad, batería y la bandera de pánico. El pánico no viene en la trama de alarma: viaja dentro de la posición, y dispara el SOS automático.",
          en: "GPS trackers open a <b>TCP</b> connection and send binary hex frames: they log in, send heartbeats and report position. The service listens, identifies the frame type and replies with the <b>CRC-16/ITU-signed ACK</b> the device expects, decodes the <b>BCD</b> IMEI and extracts lat/lng, speed, battery and the panic flag. Panic doesn't come in the alarm frame: it rides inside the position, and fires the automatic SOS.",
        },
      },
      {
        n: "03",
        title: { es: "El cliente ve sus filas, y solo las suyas", en: "The client sees their rows, and only theirs" },
        body: {
          es: "Los clientes tienen su propio portal. No es multi-tenancy: es <b>filtrado a nivel de fila</b>, un inquilino, una base por micro. El alcance se acuña en el <b>JWT</b> al iniciar sesión y cada micro lo lee de ahí — nunca de la consulta. Se compone en el <code>where</code> con <code>AND</code>, jamás por asignación: si el cliente pide una sede que no le corresponde, la intersección da cero filas. <b>El alcance se impone, no se solicita.</b> Y los WebSockets usan salas asignadas en el handshake, porque un cliente que ignora un evento en JS igual lo recibió — el filtro tiene que vivir en el emit.",
          en: "Clients get their own portal. It isn't multi-tenancy: it's <b>row-level filtering</b>, one tenant, one database per service. The scope is minted into the <b>JWT</b> at login and every service reads it from there — never from the query. It composes into the <code>where</code> with <code>AND</code>, never by assignment: if the client asks for a site outside their scope, the intersection yields zero rows. <b>Scope is imposed, not requested.</b> And WebSockets use rooms assigned at handshake, because a client ignoring an event in JS still received it — the filter has to live in the emit.",
        },
      },
    ],
    decision: {
      kicker: { es: "Decisión técnica", en: "Engineering decision" },
      title: {
        es: "El bug que solo un Postgres real podía encontrar",
        en: "The bug only a real Postgres could catch",
      },
      paras: [
        {
          es: "La primera versión del scoping devolvía <code>{ OR: [] }</code> cuando un cliente quedaba sin sedes, confiando en que la documentación dice que un <code>OR</code> vacío no devuelve registros. <b>El ORM ignora un <code>OR</code> vacío anidado dentro de un <code>AND</code>.</b> El fail-closed era fail-open: ese cliente recibía todas las filas de la tabla, incluidas las de otras empresas.",
          en: "The first version of the scoping returned <code>{ OR: [] }</code> when a client was left with no sites, trusting the documented “an empty OR returns no records”. <b>The ORM ignores an empty <code>OR</code> nested inside an <code>AND</code>.</b> Fail-closed was fail-<i>open</i>: that client received every row in the table, including other companies'.",
        },
        {
          es: "Pasó tres revisiones de código y una suite unitaria completa, porque los fakes en memoria le daban la razón al helper equivocado. Lo encontró un e2e corriendo contra un Postgres real. La corrección no fue devolver otra cosa: fue <b>lanzar</b>.",
          en: "It survived three code reviews and a full unit suite, because the in-memory fakes agreed with the wrong helper. An e2e running against a real Postgres found it. The fix wasn't returning something else: it was <b>throwing</b>.",
        },
      ],
      lesson: {
        es: "Un “no coincide con nada” que depende de la semántica de una librería no es fail-closed. Lanzar no depende de nada — y un 403 saca a la luz la mala configuración que una lista vacía esconde.",
        en: "A “matches nothing” that depends on library semantics is not fail-closed. Throwing depends on nothing — and a 403 surfaces the misconfiguration an empty list hides.",
      },
    },
    tags: ["NestJS 11", "Turborepo", "Prisma", "PostgreSQL", "Redis", "Socket.IO", "React + Vite", "Expo SDK 57", "SQLite", "TCP / GT06", "AWS S3", "Docker", "nginx", "Vitest", "Testcontainers", "GitHub Actions"],
  },

  {
    id: "drceo",
    num: "03",
    sectionTitle: "DrCeo",
    short: "DrCeo",
    sectionLead: {
      es: "Un ERP clínico que además tiene que hablarle al Estado, responder preguntas en español y sostener evidencia legal. Presentado en <b>AMWC Latin America 2025</b>.",
      en: "A clinical ERP that also has to talk to the State, answer questions in plain language and hold up as legal evidence. Presented at <b>AMWC Latin America 2025</b>.",
    },
    company: "Satori Medical",
    period: { es: "2025 — 2026", en: "2025 — 2026" },
    role: { es: "Arquitecto fullstack", en: "Fullstack architect" },
    claim: {
      es: "Una clínica de medicina estética no solo agenda y cobra: tiene que <b>reportar cada atención al Ministerio de Salud</b>, guardar consentimientos que resistan un reclamo, y controlar un inventario donde una ampolla vale como un salario.",
      en: "An aesthetic-medicine clinic doesn't just book and bill: it has to <b>report every care event to the Ministry of Health</b>, keep consents that hold up against a claim, and control an inventory where one vial is worth a salary.",
    },
    problem: {
      left: {
        h: { es: "Lo que había", en: "What was there" },
        p: {
          es: "Información dispersa y sin normalizar, la operación comercial y la clínica cada una por su lado, y un cumplimiento normativo que dependía de que alguien se acordara de hacerlo a mano.",
          en: "Scattered, unnormalized information, commercial and clinical operations each on their own, and regulatory compliance that depended on someone remembering to do it by hand.",
        },
      },
      right: {
        h: { es: "Lo que quedó", en: "What's there now" },
        p: {
          es: "Un núcleo en Laravel con la operación completa, dos superficies distintas — el ERP del personal y el portal del paciente — y tres servicios alrededor. <b>Menos deserción, inventario trazable y cumplimiento automático</b>, con informes por rol que dejan ver la operación en tiempo real. Debajo, la base corre en Multi-AZ con recuperación a un punto en el tiempo de los últimos 14 días.",
          en: "A Laravel core holding the whole operation, two distinct surfaces — the staff ERP and the patient portal — and three services around it. <b>Less patient dropout, traceable inventory and automatic compliance</b>, with role-based reports that surface the operation in real time. Underneath, the database runs Multi-AZ with point-in-time recovery over the last 14 days.",
        },
      },
    },
    graph: "drceo",
    lenses: true,
    metrics: [
      {
        value: "70",
        suffix: "%",
        label: {
          es: "menos deserción de pacientes tras centralizar el seguimiento clínico y la gestión comercial en un solo sistema",
          en: "less patient dropout after centralizing clinical follow-up and commercial management into one system",
        },
      },
      {
        value: "0",
        label: {
          es: "descuadres de inventario sin explicación. Antes ocurrían casi todos los meses; hoy cada insumo queda atado a quién lo usó, en qué procedimiento y en qué paciente",
          en: "unexplained inventory discrepancies. They used to happen almost monthly; today every consumable is tied to who used it, in what procedure and on which patient",
        },
      },
      {
        value: "3",
        label: {
          es: "capas independientes que impiden que el asistente de IA escriba en la base o filtre un dato clínico",
          en: "independent layers preventing the AI assistant from writing to the database or leaking clinical data",
        },
      },
    ],
    subs: [
      {
        n: "01",
        title: { es: "Hablarle al Estado en su idioma", en: "Speaking to the State in its language" },
        body: {
          es: "El Ministerio no acepta “un JSON con los datos”. Acepta un <b>Bundle FHIR</b> con perfiles cerrados: los diagnósticos codificados en CIE-10, las secciones etiquetadas con LOINC, el profesional validado contra RETHUS y el paciente contra EVOL. Las reglas son implacables y poco documentadas — el Bundle se rechaza si lleva un campo de más, si un título no es el string exacto, o si una fecha viaja sin zona horaria. Una sección vacía no se omite: se declara explícitamente vacía. Escribí el catálogo de códigos como fuente única para que un display mal escrito falle en mi servidor y no en el del Ministerio.",
          en: "The Ministry doesn't accept “a JSON with the data”. It accepts a <b>FHIR Bundle</b> with closed profiles: diagnoses coded in ICD-10, sections tagged with LOINC, the professional validated against RETHUS and the patient against EVOL. The rules are unforgiving and thinly documented — the Bundle is rejected for one extra field, for a title that isn't the exact string, or for a date without a timezone. An empty section isn't omitted: it's explicitly declared empty. I wrote the code catalog as a single source so that a malformed display fails on my server and not on the Ministry's.",
        },
      },
      {
        n: "02",
        title: { es: "Un asistente de IA que nunca ve un paciente", en: "An AI assistant that never sees a patient" },
        body: {
          es: "El personal pregunta en español y recibe la respuesta. Debajo, el modelo <b>solo recibe el esquema de la base</b> — nombres de tablas y columnas. Genera el SQL, el SQL se ejecuta dentro del servidor, y únicamente el resultado ya saneado vuelve para redactar la frase. Tres capas independientes lo sostienen: el usuario de base de datos solo tiene permiso de lectura, un validador rechaza toda consulta que no sea <code>SELECT</code>, y el prompt lo prohíbe. <b>Si una capa falla, las otras dos siguen de pie.</b> El servicio corre en una IP privada y su puerto nunca se abrió al internet.",
          en: "Staff ask in plain language and get an answer. Underneath, the model <b>only receives the database schema</b> — table and column names. It generates the SQL, the SQL runs inside the server, and only the already-sanitized result comes back to compose the sentence. Three independent layers hold it up: the database user has read permission only, a validator rejects any non-<code>SELECT</code> query, and the prompt forbids it. <b>If one layer fails, the other two stand.</b> The service runs on a private IP and its port was never opened to the internet.",
        },
      },
      {
        n: "03",
        title: { es: "Un consentimiento que aguante un reclamo", en: "A consent that survives a claim" },
        body: {
          es: "Firmar un consentimiento en una clínica estética no es marcar una casilla: es la diferencia entre tener con qué responder y no tenerlo. El portal captura <b>selfie, firma trazada a mano y registro de lectura</b> — quién firmó, qué alcanzó a leer y cuándo — y lo guarda en un bucket privado cifrado. El acceso del paciente es sin contraseña: un código de seis dígitos que llega por WhatsApp o correo, guardado con hash, válido cinco minutos y cinco intentos. Pedir el documento de alguien que no existe devuelve exactamente lo mismo que uno que sí — el portal no confirma quién es paciente.",
          en: "Signing a consent at an aesthetic clinic isn't ticking a box: it's the difference between having an answer and not having one. The portal captures a <b>selfie, a hand-traced signature and reading tracking</b> — who signed, how much they actually read and when — and stores it in an encrypted private bucket. Patient access is passwordless: a six-digit code delivered by WhatsApp or email, stored hashed, valid for five minutes and five attempts. Entering the document of someone who doesn't exist returns exactly what a real one does — the portal never confirms who is a patient.",
        },
      },
    ],
    tags: ["Laravel 11", "PHP 8.2", "React 19", "Three.js", "NestJS", "FHIR", "FastAPI", "Claude API", "MySQL RDS", "Redis", "AWS S3", "Docker", "nginx", "Meta Cloud API"],
  },

  {
    id: "reno",
    num: "04",
    sectionTitle: "Reno Ectual",
    short: "Reno",
    sectionLead: {
      es: "Repuestos automotrices vendidos a aseguradoras. Se gana la subasta, se despacha, se factura a crédito, y la aseguradora paga a 30, 45 o 60 días. Todo eso tiene que estar en el sistema.",
      en: "Auto parts sold to insurers. You win the auction, you dispatch, you invoice on credit, and the insurer pays in 30, 45 or 60 days. All of that has to live in the system.",
    },
    company: "Reno Ectual",
    period: { es: "2025 — 2026", en: "2025 — 2026" },
    role: { es: "Fullstack", en: "Fullstack" },
    claim: {
      es: "Tres piezas coordinadas — tienda pública, ERP interno y microservicio de facturación — sobre una misma fuente de verdad. El caso más chico de los cuatro, y el que más se parece a un producto de verdad: <b>vende, despacha, factura y cobra</b>.",
      en: "Three coordinated pieces — public store, internal ERP and invoicing microservice — over one source of truth. The smallest of the four cases, and the one that most resembles a real product: <b>it sells, dispatches, invoices and collects</b>.",
    },
    graph: "reno",
    lenses: false,
    metrics: [
      {
        value: "13",
        label: {
          es: "reportes en producción, repartidos entre dos motores de exportación según lo que necesita cada uno",
          en: "reports in production, split across two export engines depending on what each one needs",
        },
      },
      {
        value: "100",
        suffix: "k+",
        label: {
          es: "filas exportables con memoria constante, en lugar de tumbar el proceso",
          en: "rows exportable with a constant memory footprint, instead of blowing up the process",
        },
      },
      {
        value: "5",
        suffix: "min",
        label: {
          es: "cadencia del ciclo de facturación, con errores clasificados entre reintentables y fatales",
          en: "invoicing cycle cadence, with errors classified as retryable or fatal",
        },
      },
    ],
    subs: [
      {
        n: "01",
        title: { es: "El precio no lo pone el navegador", en: "The browser doesn't set the price" },
        body: {
          es: "Un carrito que manda precios al servidor es un carrito que se edita desde las herramientas del navegador. Aquí el checkout envía <b>solo el identificador del producto y la cantidad</b>; el backend recalcula precio, descuento e impuesto contra su propio catálogo. Y una vez confirmada la venta, el pedido guarda un <b>snapshot</b> de esos valores: el catálogo puede cambiar mañana sin que se reescriba lo que ya se vendió.",
          en: "A cart that sends prices to the server is a cart that can be edited from devtools. Here checkout sends <b>only the product identifier and the quantity</b>; the backend recalculates price, discount and tax against its own catalog. And once the sale is confirmed, the order stores a <b>snapshot</b> of those values: the catalog can change tomorrow without rewriting what was already sold.",
        },
      },
      {
        n: "02",
        title: { es: "Facturar contra un tercero que a veces falla", en: "Invoicing against a third party that sometimes fails" },
        body: {
          es: "Facturar requiere tres llamadas a un servicio externo: sincronizar el cliente, sincronizar los productos, crear la factura. Si la tercera falla, las dos primeras <b>ya ocurrieron</b>. La solución fue guardar los identificadores externos aunque la factura falle, de modo que el reintento reutilice lo que ya existe en vez de duplicarlo. Cada estado del pedido es explícito, y los errores se clasifican en una tabla: un 429 o un timeout se reintenta, un 422 no — reintentar un error de validación solo gasta el límite de peticiones.",
          en: "Invoicing takes three calls to an external service: sync the customer, sync the products, create the invoice. If the third fails, the first two <b>already happened</b>. The fix was to persist the external identifiers even when the invoice fails, so the retry reuses what already exists instead of duplicating it. Every order state is explicit, and errors are classified in a table: a 429 or a timeout retries, a 422 doesn't — retrying a validation error only burns the rate limit.",
        },
      },
    ],
    tags: ["Laravel 12", "Next.js 16", "React 19", "NestJS", "PostgreSQL 17", "Redis", "OpenSpout", "AWS S3", "Docker", "nginx"],
  },
];

export interface PlatformItem {
  title: L;
  body: L;
  meta: string;
}

export const PLATFORM: PlatformItem[] = [
  {
    title: { es: "SSO corporativo", en: "Corporate SSO" },
    body: {
      es: "Migración completa del flujo de autenticación a <b>FusionAuth</b> como SSO transversal de la compañía. Ejecutado en Edgeclear Insights y en <b>Edgeclear X</b>, la plataforma de trading.",
      en: "Full migration of the auth flow to <b>FusionAuth</b> as company-wide SSO. Executed on Edgeclear Insights and on <b>Edgeclear X</b>, the trading platform.",
    },
    meta: "FusionAuth · SSO\nArrowFin · 2025—2026",
  },
  {
    title: { es: "Infra AWS desde cero", en: "AWS infra from scratch" },
    body: {
      es: "Diseño y despliegue completo: <b>ECS, ECR, ALB, RDS, CloudFront, S3, ACM, IAM</b>, con dockerización de punta a punta. Sin infraestructura previa.",
      en: "Designed and deployed end to end: <b>ECS, ECR, ALB, RDS, CloudFront, S3, ACM, IAM</b>, fully Dockerized. No prior infrastructure.",
    },
    meta: "AWS · Docker\nArrowFin · 2025",
  },
  {
    title: { es: "Despliegue en VPS propio", en: "Self-hosted VPS deploy" },
    body: {
      es: "Toda la plataforma Galaxia con Docker Compose sobre Ubuntu, <b>conviviendo con el sistema legacy</b> que ya corría ahí. nginx de borde con TLS y renovación automática; solo 80/443 salen al host.",
      en: "The whole Galaxia platform on Docker Compose over Ubuntu, <b>coexisting with the legacy system</b> already running there. Edge nginx with TLS and auto-renewal; only 80/443 reach the host.",
    },
    meta: "Docker Compose · nginx\nGalaxia · 2026",
  },
  {
    title: { es: "Testing en dos capas + CI", en: "Two-tier testing + CI" },
    body: {
      es: "Unitarias contra fakes tipados que implementan los puertos reales, y e2e que levantan un <b>Postgres desechable con Testcontainers</b> para que corran los guards, el envelope y la validación de verdad. En GitHub Actions.",
      en: "Unit tests against typed fakes implementing the real ports, and e2e booting a <b>throwaway Postgres via Testcontainers</b> so the real guards, envelope and validation all run. On GitHub Actions.",
    },
    meta: "Vitest · Testcontainers\nGalaxia · 2026",
  },
  {
    title: { es: "Liderazgo técnico", en: "Technical leadership" },
    body: {
      es: "Gestión de proyectos, levantamiento de requerimientos, definición de arquitectura y acompañamiento a desarrolladores junior.",
      en: "Project management, requirement gathering, architecture definition and mentoring junior developers.",
    },
    meta: "ArrowFin · Serviunix\n2023—2026",
  },
];

export const ABOUT = {
  quote: {
    es: "Diseño el esquema, la API, el frontend y la infra donde vive —<br><span class='grad'>y me hago cargo de la decisión.</span>",
    en: "I design the schema, the API, the frontend and the infra it runs on —<br><span class='grad'>and I own the call.</span>",
  } as L,
  paras: [
    {
      es: "Cinco años construyendo producto de punta a punta. He <b>liderado equipos</b> y también he entrado solo a proyectos donde no existía nada. Las dos cosas me acomodan.",
      en: "Five years building product end to end. I've <b>led teams</b> and I've walked alone into projects where nothing existed yet. Both suit me.",
    },
    {
      es: "Lo que no negocio: rendimiento, mantenibilidad, y que la solución resuelva un problema real. Hoy soy <b>Líder Técnico en ArrowFin</b> y estudio Ingeniería de Software en el Politécnico Grancolombiano.",
      en: "What I don't negotiate: performance, maintainability, and the solution solving a real problem. I'm currently <b>Technical Lead at ArrowFin</b> and studying Software Engineering at Politécnico Grancolombiano.",
    },
  ] as L[],
};

export const CONTACT = {
  heading: {
    es: "¿Tienes algo difícil<br>que construir?",
    en: "Got something hard<br>to build?",
  } as L,
};
