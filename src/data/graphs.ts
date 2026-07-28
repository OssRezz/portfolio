import type { L } from "../lang";

/** A node in an architecture diagram. `own` distinguishes what I built from what I only operate. */
export interface GNode {
  id: string;
  x: number;
  y: number;
  label: string;
  tech: L;
  own: boolean;
  /** Rich description shown in the caption on hover. Authored HTML — static, never user input. */
  body: L;
}

/** A named subset of the graph that tells one story. */
export interface Lens {
  id: string;
  label: L;
  /** null = show everything */
  nodes: string[] | null;
  caption: L;
}

export interface Graph {
  /** viewBox width / height */
  w: number;
  h: number;
  /** node width; height is uniform (NODE_H) */
  nw: number;
  stages: { x: number; label: L }[];
  nodes: GNode[];
  edges: [string, string][];
  idle: L;
  lenses?: Lens[];
}

export const NODE_H = 52;

export const GRAPHS: Record<string, Graph> = {
  insights: {
    w: 1300,
    h: 300,
    nw: 180,
    stages: [
      { x: 100, label: { es: "Ingesta", en: "Ingestion" } },
      { x: 370, label: { es: "Transporte", en: "Transport" } },
      { x: 640, label: { es: "Dominio", en: "Domain" } },
      { x: 910, label: { es: "Tiempo real", en: "Real time" } },
      { x: 1180, label: { es: "Superficie", en: "Surface" } },
    ],
    nodes: [
      {
        id: "s1", x: 10, y: 20, label: "Sierra Execution", own: true,
        tech: { es: "NestJS · Hexagonal", en: "NestJS · Hexagonal" },
        body: {
          es: "<b>Sierra Execution Service.</b> Se conecta a Sierra Chart, trae los fills históricos por WebSocket y queda escuchando el <code>DTC</code> para operaciones y balances en vivo.",
          en: "<b>Sierra Execution Service.</b> Connects to Sierra Chart, pulls historical fills over WebSocket and keeps listening on <code>DTC</code> for live trades and balances.",
        },
      },
      {
        id: "s2", x: 10, y: 110, label: "Arrow Fetch", own: false,
        tech: { es: "Rithmic", en: "Rithmic" },
        body: {
          es: "<b>Arrow Fetch Service.</b> Mismo rol para el bróker Rithmic. <b>No lo construí yo</b> — lo administro dentro del sistema.",
          en: "<b>Arrow Fetch Service.</b> Same role for the Rithmic broker. <b>I did not build it</b> — I operate it inside the system.",
        },
      },
      {
        id: "s3", x: 10, y: 200, label: "TPT", own: false,
        tech: { es: "Ingesta", en: "Ingestion" },
        body: {
          es: "<b>TPT.</b> La fuente de ingesta más reciente. <b>No la construí yo</b>, pero forma parte del flujo que coordino.",
          en: "<b>TPT.</b> The most recent ingestion source. <b>I did not build it</b>, but it is part of the flow I coordinate.",
        },
      },
      {
        id: "fs", x: 280, y: 110, label: "FlowSync", own: true,
        tech: { es: "NestJS", en: "NestJS" },
        body: {
          es: "<b>FlowSync.</b> Consolida las tres bases de ingesta en la base de Insights. <b>Aquí vive la optimización</b>: 8M de registros que tardaban 28 horas, hoy en 18 minutos.",
          en: "<b>FlowSync.</b> Consolidates the three ingestion databases into the Insights one. <b>The optimization lives here</b>: 8M records that took 28 hours now take 18 minutes.",
        },
      },
      {
        id: "tb", x: 550, y: 110, label: "Trade Builder", own: true,
        tech: { es: "NestJS", en: "NestJS" },
        body: {
          es: "<b>Trade Builder.</b> Toma los fills movidos y construye los <i>trades</i> con su estadística: P&amp;L, expectancy, win rate, MFE/MAE.",
          en: "<b>Trade Builder.</b> Takes the moved fills and builds the <i>trades</i> with their statistics: P&amp;L, expectancy, win rate, MFE/MAE.",
        },
      },
      {
        id: "hm", x: 820, y: 110, label: "Hermes", own: true,
        tech: { es: "NestJS · Socket", en: "NestJS · Socket" },
        body: {
          es: "<b>Hermes.</b> La capa de tiempo real: mantiene el socket entre la API y el frontend, y empuja los cambios en cuanto ocurren.",
          en: "<b>Hermes.</b> The real-time layer: holds the socket between the API and the frontend, pushing changes as they happen.",
        },
      },
      {
        id: "api", x: 1090, y: 60, label: "API", own: true,
        tech: { es: "Laravel", en: "Laravel" },
        body: {
          es: "<b>API.</b> La superficie REST en Laravel que sirve la estadística ya construida.",
          en: "<b>API.</b> The Laravel REST surface serving the built statistics.",
        },
      },
      {
        id: "fe", x: 1090, y: 170, label: "Frontend", own: true,
        tech: { es: "React · TypeScript", en: "React · TypeScript" },
        body: {
          es: "<b>Frontend.</b> React + TypeScript. Calendarios, curvas de P&amp;L, distribuciones y tablas de operaciones, en vivo.",
          en: "<b>Frontend.</b> React + TypeScript. Calendars, P&amp;L curves, distributions and trade tables, live.",
        },
      },
    ],
    edges: [["s1", "fs"], ["s2", "fs"], ["s3", "fs"], ["fs", "tb"], ["tb", "hm"], ["hm", "api"], ["hm", "fe"], ["api", "fe"]],
    idle: {
      es: "Ocho servicios en el flujo. Pasa el cursor sobre cualquiera para ver qué hace.",
      en: "Eight services in the flow. Hover any of them to see what it does.",
    },
  },

  galaxia: {
    w: 1240,
    h: 372,
    nw: 200,
    stages: [
      { x: 110, label: { es: "Orígenes", en: "Origins" } },
      { x: 355, label: { es: "Borde", en: "Edge" } },
      { x: 600, label: { es: "Gateway", en: "Gateway" } },
      { x: 845, label: { es: "Servicios", en: "Services" } },
      { x: 1090, label: { es: "Datos", en: "Data" } },
    ],
    nodes: [
      {
        id: "web", x: 10, y: 43, label: "Web admin", own: true,
        tech: { es: "React · Vite", en: "React · Vite" },
        body: {
          es: "<b>Centro de operaciones.</b> React + Vite. Arquitectura por capas <code>api → model → controller → hook → UI</code>; los permisos filtran menú, rutas y pestañas leyendo el mismo catálogo que el back aplica.",
          en: "<b>Operations center.</b> React + Vite. Layered <code>api → model → controller → hook → UI</code>; permissions gate the menu, routes and tabs reading the same catalog the backend enforces.",
        },
      },
      {
        id: "portal", x: 10, y: 113, label: "Portal cliente", own: true,
        tech: { es: "React · scope", en: "React · scope" },
        body: {
          es: "<b>Portal del cliente.</b> App aparte — sin bundle de admin que filtrar, su propio deploy. Cada cliente ve solo sus filas, impuestas desde el token.",
          en: "<b>Client portal.</b> A separate app — no admin bundle to leak, its own deploy. Each client sees only their rows, imposed from the token.",
        },
      },
      {
        id: "mob", x: 10, y: 183, label: "GalaxiTrack", own: true,
        tech: { es: "Expo · SQLite", en: "Expo · SQLite" },
        body: {
          es: "<b>App móvil de campo.</b> Expo SDK 57, offline-first. 12 módulos: rondas, supervisiones, minutas, inspecciones. Escanea QR, captura foto y GPS, y encola en SQLite.",
          en: "<b>Field mobile app.</b> Expo SDK 57, offline-first. 12 modules: rounds, supervisions, log books, inspections. Scans QR, captures photo and GPS, queues into SQLite.",
        },
      },
      {
        id: "gt06", x: 10, y: 273, label: "Dispositivos GT06", own: false,
        tech: { es: "TCP · hex", en: "TCP · hex" },
        body: {
          es: "<b>Rastreadores GPS.</b> Hardware de terceros que habla el protocolo binario GT06 sobre TCP.",
          en: "<b>GPS trackers.</b> Third-party hardware speaking the GT06 binary protocol over TCP.",
        },
      },
      {
        id: "nginx", x: 255, y: 113, label: "nginx", own: true,
        tech: { es: "TLS · certbot", en: "TLS · certbot" },
        body: {
          es: "<b>nginx de borde.</b> Único servicio que publica puertos al host (80/443), con TLS y renovación automática. Convive con el Apache legacy que ya corría en el VPS.",
          en: "<b>Edge nginx.</b> The only service publishing ports to the host (80/443), with TLS and auto-renewal. Coexists with the legacy Apache already on the VPS.",
        },
      },
      {
        id: "gps", x: 255, y: 273, label: "gps-tracker", own: true,
        tech: { es: "NestJS · TCP", en: "NestJS · TCP" },
        body: {
          es: "<b>Decodificador GT06.</b> Servidor TCP que identifica el tipo de trama, responde el ACK firmado con <code>CRC-16/ITU</code>, decodifica el IMEI en BCD y extrae lat/lng, velocidad, batería y pánico.",
          en: "<b>GT06 decoder.</b> TCP server that identifies the frame type, replies with the <code>CRC-16/ITU</code>-signed ACK, decodes the BCD IMEI and extracts lat/lng, speed, battery and panic.",
        },
      },
      {
        id: "gw", x: 500, y: 148, label: "API Gateway", own: true,
        tech: { es: "NestJS · proxy", en: "NestJS · proxy" },
        body: {
          es: "<b>El portón.</b> Un solo origen para el navegador: CORS y cookies configurados una vez. Enruta por prefijo y proxya también el <b>upgrade de WebSocket</b>, que se salta el middleware de Express. Sin body parser — un proxy transmite el cuerpo crudo.",
          en: "<b>The front door.</b> One origin for the browser: CORS and cookies configured once. Routes by prefix and also proxies the <b>WebSocket upgrade</b>, which bypasses Express middleware. No body parser — a proxy streams the raw body.",
        },
      },
      {
        id: "auth", x: 745, y: 28, label: "auth", own: true,
        tech: { es: "RBAC · JWT · Redis", en: "RBAC · JWT · Redis" },
        body: {
          es: "<b>Identidad y permisos.</b> El rol es una plantilla que se copia al usuario, no una regla viva. Un contador de versión en el token más Redis detectan permisos rancios: el front sondea, refresca en silencio y el menú reacciona sin recargar.",
          en: "<b>Identity and permissions.</b> The role is a template copied onto the user, not a live rule. A version counter in the token plus Redis detect stale permissions: the front polls, refreshes silently and the menu reacts without a reload.",
        },
      },
      {
        id: "orgs", x: 745, y: 96, label: "organizations", own: true,
        tech: { es: "DANE · QR", en: "DANE · QR" },
        body: {
          es: "<b>La estructura.</b> Empresas → sedes → puestos, locales, gabinetes y puntos de marcación. Catálogo geográfico oficial y generación de <b>tarjetas QR de marca</b> en tres formatos más PDF por lote.",
          en: "<b>The structure.</b> Companies → sites → posts, stores, cabinets and marking points. Official geographic catalog and <b>branded QR card</b> generation in three formats plus a batch PDF.",
        },
      },
      {
        id: "trn", x: 745, y: 164, label: "training", own: true,
        tech: { es: "S3 · PDF · Excel", en: "S3 · PDF · Excel" },
        body: {
          es: "<b>Capacitaciones.</b> Autoría de cursos con lecciones y examen, reproductor del empleado, <b>calificación 100% en servidor</b> (nunca viaja la respuesta correcta), certificado PDF tipo diploma y dashboard de reportes con export a Excel. Sube video a S3 por multipart.",
          en: "<b>Training.</b> Course authoring with lessons and exam, employee player, <b>100% server-side grading</b> (the answer key never travels), diploma-style PDF certificate and a reports dashboard with Excel export. Uploads video to S3 via multipart.",
        },
      },
      {
        id: "risk", x: 745, y: 232, label: "risk-management", own: true,
        tech: { es: "16 módulos · WS", en: "16 modules · WS" },
        body: {
          es: "<b>Operación en campo.</b> 16 módulos: rondas con seguimiento en vivo y alertas de brecha, supervisiones, novedades, minutas, inspecciones. Ingiere lo que la app encola, emite eventos por WebSocket y genera PDFs en formato SST.",
          en: "<b>Field operations.</b> 16 modules: rounds with live tracking and gap alerts, supervisions, incidents, log books, inspections. Ingests what the app queues, emits WebSocket events and renders SST-format PDFs.",
        },
      },
      {
        id: "trk", x: 745, y: 300, label: "tracking", own: true,
        tech: { es: "GPS · pánico", en: "GPS · panic" },
        body: {
          es: "<b>Operaciones GPS.</b> Inventario de SIMs y dispositivos, escoltas, mapa en vivo e historial de rutas, y alertas de pánico enclavadas. Camino caliente Redis → WebSocket en 1-2 segundos.",
          en: "<b>GPS operations.</b> SIM and device inventory, escorts, live map and route history, and latched panic alerts. Hot path Redis → WebSocket in 1–2 seconds.",
        },
      },
      {
        id: "pg", x: 990, y: 96, label: "PostgreSQL ×5", own: true,
        tech: { es: "1 DB por micro", en: "1 DB per service" },
        body: {
          es: "<b>Una base por servicio.</b> Sin joins entre bases: los servicios hablan por API. Los registros históricos congelan el nombre al capturar; los maestros resuelven en vivo.",
          en: "<b>One database per service.</b> No cross-database joins: services talk over APIs. Historical records freeze the name at capture time; masters resolve live.",
        },
      },
      {
        id: "redis", x: 990, y: 198, label: "Redis", own: true,
        tech: { es: "caché · firehose", en: "cache · firehose" },
        body: {
          es: "<b>Redis.</b> Caché de versión de permisos y de geolocalización, y camino caliente de las posiciones GPS antes de salir por WebSocket.",
          en: "<b>Redis.</b> Permission-version and geolocation cache, and the hot path for GPS positions before they go out over WebSocket.",
        },
      },
      {
        id: "s3", x: 990, y: 278, label: "AWS S3", own: true,
        tech: { es: "presigned", en: "presigned" },
        body: {
          es: "<b>S3.</b> Fotos de campo y material de los cursos. El navegador y el móvil suben <b>directo a S3</b> con URLs prefirmadas — el backend nunca transporta bytes de archivo.",
          en: "<b>S3.</b> Field photos and course material. The browser and the mobile app upload <b>straight to S3</b> with presigned URLs — the backend never proxies file bytes.",
        },
      },
    ],
    edges: [
      ["web", "nginx"], ["portal", "nginx"], ["mob", "nginx"], ["nginx", "gw"],
      ["gt06", "gps"], ["gps", "gw"],
      ["gw", "auth"], ["gw", "orgs"], ["gw", "trn"], ["gw", "risk"], ["gw", "trk"],
      ["auth", "pg"], ["orgs", "pg"], ["trn", "pg"], ["risk", "pg"], ["trk", "pg"],
      ["auth", "redis"], ["trk", "redis"], ["trn", "s3"], ["risk", "s3"],
    ],
    idle: {
      es: "Quince piezas. Elige un flujo arriba, o pasa el cursor sobre cualquier servicio.",
      en: "Fifteen pieces. Pick a flow above, or hover any service.",
    },
    lenses: [
      {
        id: "all", label: { es: "Todo", en: "All" }, nodes: null,
        caption: {
          es: "Quince piezas. Elige un flujo, o pasa el cursor sobre cualquier servicio.",
          en: "Fifteen pieces. Pick a flow, or hover any service.",
        },
      },
      {
        id: "rt", label: { es: "Tiempo real", en: "Real time" },
        nodes: ["gt06", "gps", "gw", "trk", "redis", "nginx", "portal", "web"],
        caption: {
          es: "<b>Tiempo real.</b> El GPS manda una trama binaria por TCP → el decodificador la traduce y la reenvía → tracking la guarda y la publica en Redis → sale por WebSocket a los dos fronts. Del asfalto al mapa en uno o dos segundos.",
          en: "<b>Real time.</b> The GPS sends a binary frame over TCP → the decoder translates and forwards it → tracking stores it and publishes to Redis → out over WebSocket to both frontends. From asphalt to map in one or two seconds.",
        },
      },
      {
        id: "off", label: { es: "Offline", en: "Offline" },
        nodes: ["mob", "nginx", "gw", "risk", "pg", "s3"],
        caption: {
          es: "<b>Offline-first.</b> El guarda guarda sin señal: va a una cola SQLite en el teléfono. Cuando hay red, el motor sube primero las fotos a S3 con URLs prefirmadas y después envía el registro con una clave de idempotencia. Un 504 que escondía un 201 se auto-repara.",
          en: "<b>Offline-first.</b> The guard saves with no signal: it goes into a SQLite queue on the phone. When there is network, the engine uploads photos to S3 with presigned URLs first, then sends the record with an idempotency key. A 504 that hid a 201 self-heals.",
        },
      },
      {
        id: "sec", label: { es: "Seguridad", en: "Security" },
        nodes: ["web", "portal", "mob", "nginx", "gw", "auth", "redis", "risk"],
        caption: {
          es: "<b>Seguridad.</b> Todo endpoint nace protegido; se abre explícitamente. El alcance del cliente se acuña en el JWT al iniciar sesión y cada micro lo impone con <code>AND</code> sobre la consulta — nunca por asignación. Redis detecta permisos rancios sin esperar a que expire el token.",
          en: "<b>Security.</b> Every endpoint is born protected; you open it explicitly. The client scope is minted into the JWT at login and every micro imposes it with <code>AND</code> over the query — never by assignment. Redis detects stale permissions without waiting for the token to expire.",
        },
      },
    ],
  },

  drceo: {
    w: 1240,
    h: 415,
    nw: 200,
    stages: [
      { x: 110, label: { es: "Superficies", en: "Surfaces" } },
      { x: 355, label: { es: "Borde", en: "Edge" } },
      { x: 600, label: { es: "Núcleo", en: "Core" } },
      { x: 845, label: { es: "Servicios y datos", en: "Services & data" } },
      { x: 1090, label: { es: "Externos", en: "External" } },
    ],
    nodes: [
      {
        id: "erp", x: 10, y: 45, label: "ERP clínico", own: true,
        tech: { es: "React 19 · Three.js", en: "React 19 · Three.js" },
        body: {
          es: "<b>El ERP.</b> React 19 + Vite. Aquí vive la <b>guía 3D procedural</b>: sobre un modelo de rostro en Three.js el médico anota los puntos de tratamiento, con el catálogo administrado por la dirección clínica. Agenda, editor clínico, gráficos y firma en canvas.",
          en: "<b>The ERP.</b> React 19 + Vite. This is where the <b>procedural 3D guide</b> lives: on a Three.js face model the physician annotates treatment points, with the catalog managed by the clinical director. Scheduling, clinical editor, charts and canvas signature.",
        },
      },
      {
        id: "portal", x: 10, y: 125, label: "Portal del paciente", own: true,
        tech: { es: "React 18 · TS · Tailwind", en: "React 18 · TS · Tailwind" },
        body: {
          es: "<b>Portal del paciente.</b> App aparte sobre la misma base. El paciente agenda, ve su galería fotográfica de evolución, consulta pagos, descarga su historia clínica y <b>firma consentimientos digitales</b> con selfie, firma trazada y registro de lectura — evidencia legal, no un checkbox.",
          en: "<b>Patient portal.</b> A separate app over the same database. The patient books, sees their photo evolution gallery, checks payments, downloads their clinical record and <b>signs digital consents</b> with a selfie, a traced signature and reading tracking — legal evidence, not a checkbox.",
        },
      },
      {
        id: "nginx", x: 255, y: 85, label: "nginx", own: true,
        tech: { es: "TLS · Let's Encrypt", en: "TLS · Let's Encrypt" },
        body: {
          es: "<b>nginx.</b> Terminación SSL y enrutado a los seis contenedores. Certificados con renovación automática. Un solo servidor, seis contenedores, un dominio.",
          en: "<b>nginx.</b> SSL termination and routing to the six containers. Certificates with auto-renewal. One server, six containers, one domain.",
        },
      },
      {
        id: "api", x: 500, y: 125, label: "API", own: true,
        tech: { es: "Laravel 11 · PHP 8.2", en: "Laravel 11 · PHP 8.2" },
        body: {
          es: "<b>El núcleo.</b> Laravel 11: agenda, pacientes, presupuestos, facturación, inventario, y el módulo de <b>calidad y habilitación</b> — un árbol documental para cumplir la resolución del Ministerio. PDFs, exportes a Excel y colas en Redis.",
          en: "<b>The core.</b> Laravel 11: scheduling, patients, quotes, billing, inventory, and the <b>quality and licensing</b> module — a document tree to comply with the Ministry's resolution. PDFs, Excel exports and Redis queues.",
        },
      },
      {
        id: "ihce", x: 745, y: 25, label: "ihce-service", own: true,
        tech: { es: "NestJS · FHIR", en: "NestJS · FHIR" },
        body: {
          es: "<b>El puente con el Estado.</b> Microservicio NestJS que arma el <b>Resumen Digital de Atención</b> como un Bundle <code>FHIR</code> — Patient, Practitioner, Condition, AllergyIntolerance — valida al profesional contra RETHUS y al paciente contra EVOL, y lo envía firmado con OAuth2.",
          en: "<b>The bridge to the State.</b> A NestJS microservice that assembles the <b>Digital Care Summary</b> as a <code>FHIR</code> Bundle — Patient, Practitioner, Condition, AllergyIntolerance — validates the professional against RETHUS and the patient against EVOL, and sends it signed with OAuth2.",
        },
      },
      {
        id: "chat", x: 745, y: 105, label: "chatbot", own: true,
        tech: { es: "FastAPI · Claude", en: "FastAPI · Claude" },
        body: {
          es: "<b>Preguntar en español.</b> FastAPI + Claude. El personal pregunta “¿cuánto facturamos en 2025?” y el servicio traduce a SQL, lo ejecuta y responde en lenguaje natural. Con alcance por rol: un médico no ve reportes financieros.",
          en: "<b>Asking in plain language.</b> FastAPI + Claude. Staff ask “how much did we bill in 2025?” and the service translates to SQL, runs it and answers in natural language. Role-scoped: a physician never sees financial reports.",
        },
      },
      {
        id: "pg", x: 745, y: 185, label: "MySQL", own: true,
        tech: { es: "RDS · Multi-AZ", en: "RDS · Multi-AZ" },
        body: {
          es: "<b>MySQL en RDS, Multi-AZ.</b> Backups de 14 días y recuperación a un punto en el tiempo. Protección contra borrado activa. En una clínica, perder la historia clínica no es un incidente: es un problema legal.",
          en: "<b>MySQL on RDS, Multi-AZ.</b> 14-day backups and point-in-time recovery. Deletion protection on. In a clinic, losing the medical record isn't an incident — it's a legal problem.",
        },
      },
      {
        id: "s3", x: 745, y: 265, label: "AWS S3", own: true,
        tech: { es: "privado · AES256", en: "private · AES256" },
        body: {
          es: "<b>S3 privado.</b> Registro fotográfico de evolución, documentos de calidad y consentimientos firmados. Bucket privado con cifrado — nada de esto es público, nunca.",
          en: "<b>Private S3.</b> Photo evolution records, quality documents and signed consents. Private encrypted bucket — none of this is ever public.",
        },
      },
      {
        id: "notif", x: 745, y: 345, label: "Notificaciones", own: true,
        tech: { es: "cron · reintentos", en: "cron · retries" },
        body: {
          es: "<b>Notificaciones.</b> Cuatro flujos transaccionales por cron: el código de acceso del portal, el recordatorio de meta semanal a cada empleado, el resumen financiero del viernes a la gerencia y la alerta de novedad en conciliación bancaria — esta última con hasta tres reintentos antes de marcarse fallida.",
          en: "<b>Notifications.</b> Four cron-driven transactional flows: the portal access code, the weekly goal reminder to each employee, Friday's financial summary to management, and the bank-reconciliation alert — the last one with up to three retries before being marked failed.",
        },
      },
      {
        id: "minsalud", x: 990, y: 25, label: "MinSalud IHCE", own: false,
        tech: { es: "interoperabilidad", en: "interoperability" },
        body: {
          es: "<b>El Ministerio de Salud.</b> La norma obliga a reportar cada atención. El Ministerio devuelve un identificador que es la <b>prueba legal de cumplimiento</b>. Sistema de terceros: aquí no se negocia el contrato, se cumple.",
          en: "<b>The Ministry of Health.</b> Regulation requires reporting every care event. The Ministry returns an identifier that is the <b>legal proof of compliance</b>. A third-party system: you don't negotiate this contract, you meet it.",
        },
      },
      {
        id: "claude", x: 990, y: 105, label: "Claude API", own: false,
        tech: { es: "text-to-SQL", en: "text-to-SQL" },
        body: {
          es: "<b>El modelo.</b> Recibe el <b>esquema</b> de la base, nunca los datos. Genera el SQL; el SQL se ejecuta dentro del servidor; solo el resultado ya saneado vuelve para redactar la respuesta. Ningún dato de paciente sale de la infraestructura.",
          en: "<b>The model.</b> It receives the database <b>schema</b>, never the data. It generates the SQL; the SQL runs inside the server; only the already-sanitized result comes back to write the answer. No patient data leaves the infrastructure.",
        },
      },
      {
        id: "wa", x: 990, y: 345, label: "WhatsApp Business", own: false,
        tech: { es: "Meta Cloud API", en: "Meta Cloud API" },
        body: {
          es: "<b>WhatsApp Business.</b> Meta Cloud API con plantillas aprobadas, que no dependen de la ventana de 24 horas. Reemplazó un montaje anterior con intermediario que fallaba en silencio.",
          en: "<b>WhatsApp Business.</b> Meta Cloud API with approved templates, which don't depend on the 24-hour window. It replaced an earlier middleman setup that failed silently.",
        },
      },
    ],
    edges: [
      ["erp", "nginx"], ["portal", "nginx"], ["nginx", "api"],
      ["api", "ihce"], ["api", "chat"], ["api", "pg"], ["api", "s3"], ["api", "notif"],
      ["ihce", "minsalud"], ["chat", "claude"], ["chat", "pg"], ["notif", "wa"],
    ],
    idle: {
      es: "Doce piezas. Elige un flujo arriba, o pasa el cursor sobre cualquier servicio.",
      en: "Twelve pieces. Pick a flow above, or hover any service.",
    },
    lenses: [
      {
        id: "all", label: { es: "Todo", en: "All" }, nodes: null,
        caption: {
          es: "Doce piezas. Elige un flujo, o pasa el cursor sobre cualquier servicio.",
          en: "Twelve pieces. Pick a flow, or hover any service.",
        },
      },
      {
        id: "ley", label: { es: "Cumplimiento", en: "Compliance" },
        nodes: ["erp", "nginx", "api", "ihce", "minsalud"],
        caption: {
          es: "<b>Cumplimiento.</b> El médico cierra la atención en el ERP → el microservicio arma el Resumen Digital como Bundle FHIR, valida al profesional contra RETHUS y codifica los diagnósticos en CIE-10 → lo envía al Ministerio → vuelve el identificador que sirve de prueba legal. Nada de esto lo escribe un médico a mano.",
          en: "<b>Compliance.</b> The physician closes the care event in the ERP → the microservice assembles the Digital Care Summary as a FHIR Bundle, validates the professional against RETHUS and codes diagnoses in ICD-10 → sends it to the Ministry → back comes the identifier that serves as legal proof. None of this is typed by a physician.",
        },
      },
      {
        id: "ia", label: { es: "IA sin fugas", en: "AI without leaks" },
        nodes: ["api", "chat", "claude", "pg"],
        caption: {
          es: "<b>IA sin fugas.</b> Tres capas para que la conveniencia no cueste privacidad: un usuario de base de datos que solo puede leer, un validador que rechaza cualquier consulta que no sea de lectura, y una prohibición en el prompt. Al modelo solo viaja el esquema; el dato clínico se queda adentro. El servicio ni siquiera está expuesto a internet.",
          en: "<b>AI without leaks.</b> Three layers so convenience doesn't cost privacy: a database user that can only read, a validator rejecting any non-read query, and a prohibition in the prompt. Only the schema travels to the model; clinical data stays inside. The service isn't even exposed to the internet.",
        },
      },
      {
        id: "pac", label: { es: "El paciente", en: "The patient" },
        nodes: ["portal", "nginx", "api", "s3", "notif", "wa"],
        caption: {
          es: "<b>El paciente.</b> Entra sin contraseña: pide un código de seis dígitos que le llega por WhatsApp o correo, vive cinco minutos y admite cinco intentos. Adentro ve su evolución fotográfica, sus pagos, su historia — y firma consentimientos con selfie, firma trazada y registro de lectura, guardados en un bucket privado.",
          en: "<b>The patient.</b> They log in without a password: they request a six-digit code delivered by WhatsApp or email, valid for five minutes and five attempts. Inside they see their photo evolution, their payments, their record — and sign consents with a selfie, a traced signature and reading tracking, stored in a private bucket.",
        },
      },
    ],
  },

  reno: {
    w: 1130,
    h: 262,
    nw: 210,
    stages: [
      { x: 115, label: { es: "Superficies", en: "Surfaces" } },
      { x: 405, label: { es: "Núcleo", en: "Core" } },
      { x: 695, label: { es: "Servicios", en: "Services" } },
      { x: 985, label: { es: "Datos y externos", en: "Data & external" } },
    ],
    nodes: [
      {
        id: "store", x: 10, y: 45, label: "Storefront", own: true,
        tech: { es: "Next.js 16 · React 19", en: "Next.js 16 · React 19" },
        body: {
          es: "<b>La tienda.</b> Next.js 16 con rutas BFF propias. El checkout envía únicamente <code>{producto, cantidad}</code>: ningún precio viaja desde el navegador.",
          en: "<b>The store.</b> Next.js 16 with its own BFF routes. Checkout sends only <code>{product, quantity}</code>: no price ever travels from the browser.",
        },
      },
      {
        id: "admin", x: 10, y: 125, label: "ERP admin", own: true,
        tech: { es: "React 19 · Vite 7", en: "React 19 · Vite 7" },
        body: {
          es: "<b>La operación interna.</b> Pedidos, clientes, inventario y despacho — con <b>escaneo QR desde la cámara</b> para confirmar salidas de bodega.",
          en: "<b>Internal operations.</b> Orders, customers, inventory and dispatch — with <b>camera QR scanning</b> to confirm warehouse releases.",
        },
      },
      {
        id: "api", x: 300, y: 85, label: "API", own: true,
        tech: { es: "Laravel 12 · PHP 8.2", en: "Laravel 12 · PHP 8.2" },
        body: {
          es: "<b>La fuente de verdad.</b> Laravel 12. Recalcula cada precio y descuento en el servidor, gobierna el inventario y decide cuándo una orden está lista para facturarse.",
          en: "<b>The source of truth.</b> Laravel 12. Recalculates every price and discount server-side, governs inventory and decides when an order is ready to be invoiced.",
        },
      },
      {
        id: "alegrify", x: 590, y: 25, label: "alegrify", own: true,
        tech: { es: "NestJS · sin estado", en: "NestJS · stateless" },
        body: {
          es: "<b>El microservicio de facturación.</b> NestJS sin estado. Sincroniza cliente y productos, crea la factura, y clasifica cada error como reintentable o fatal. <b>Deliberadamente sin transacción global</b>: envolver llamadas HTTP externas en una transacción mantendría la fila bloqueada mientras se espera a un tercero.",
          en: "<b>The invoicing microservice.</b> Stateless NestJS. Syncs customer and products, creates the invoice, and classifies every error as retryable or fatal. <b>Deliberately without a global transaction</b>: wrapping external HTTP calls in one would hold the row locked while waiting on a third party.",
        },
      },
      {
        id: "rep", x: 590, y: 105, label: "Reportes", own: true,
        tech: { es: "streaming · Excel", en: "streaming · Excel" },
        body: {
          es: "<b>Dos motores, no uno.</b> Trece reportes en producción. Los grandes salen por streaming con memoria constante; los que necesitan color condicional y fórmulas vivas usan el motor con formato. Elegir uno solo habría roto la mitad.",
          en: "<b>Two engines, not one.</b> Thirteen reports in production. The large ones stream with constant memory; the ones needing conditional colors and live formulas use the styled engine. Picking just one would have broken half of them.",
        },
      },
      {
        id: "cron", x: 590, y: 185, label: "Scheduler", own: true,
        tech: { es: "Redis · cada 5 min", en: "Redis · every 5 min" },
        body: {
          es: "<b>El ciclo.</b> Cada cinco minutos toma las órdenes pendientes y las empuja por la máquina de estados, sin solaparse consigo mismo.",
          en: "<b>The cycle.</b> Every five minutes it picks up pending orders and pushes them through the state machine, without overlapping itself.",
        },
      },
      {
        id: "alegra", x: 880, y: 25, label: "Alegra → DIAN", own: false,
        tech: { es: "facturación electrónica", en: "electronic invoicing" },
        body: {
          es: "<b>Alegra.</b> El proveedor autorizado que reporta a la DIAN. La integración es contra Alegra, no contra la DIAN directamente. Hoy las facturas se crean en <b>modo borrador</b>: la emisión real queda implementada y detrás de un flag.",
          en: "<b>Alegra.</b> The authorized provider that reports to the tax authority. The integration is against Alegra, not against DIAN directly. Today invoices are created in <b>draft mode</b>: real issuance is implemented and sitting behind a flag.",
        },
      },
      {
        id: "pg", x: 880, y: 105, label: "PostgreSQL 17", own: true,
        tech: { es: "RDS", en: "RDS" },
        body: {
          es: "<b>PostgreSQL 17.</b> En RDS. El pedido guarda un <i>snapshot</i> del precio y el descuento en el momento de la venta — el catálogo puede cambiar mañana sin reescribir la historia.",
          en: "<b>PostgreSQL 17.</b> On RDS. The order stores a price and discount <i>snapshot</i> at sale time — the catalog can change tomorrow without rewriting history.",
        },
      },
      {
        id: "s3", x: 880, y: 185, label: "AWS S3", own: true,
        tech: { es: "privado · presigned", en: "private · presigned" },
        body: {
          es: "<b>S3 privado.</b> Imágenes de producto y documentos, servidos con URLs prefirmadas de vida corta.",
          en: "<b>Private S3.</b> Product images and documents, served with short-lived presigned URLs.",
        },
      },
    ],
    edges: [
      ["store", "api"], ["admin", "api"], ["api", "alegrify"], ["api", "rep"],
      ["api", "cron"], ["api", "pg"], ["api", "s3"], ["alegrify", "alegra"],
    ],
    idle: {
      es: "Ocho piezas. Pasa el cursor sobre cualquiera para ver qué hace.",
      en: "Eight pieces. Hover any of them to see what it does.",
    },
  },
};
