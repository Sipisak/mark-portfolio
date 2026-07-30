import type { Language } from "./translations";

export type ProjectSlug = "signalist" | "invoice-automation";

export type CaseStudyContent = {
  title: string;
  eyebrow: string;
  summary: string;
  repositoryUrl: string;
  liveUrl?: string;
  preview: "signalist" | "invoice";
  facts: { label: string; value: string }[];
  problem: { title: string; body: string };
  solution: { title: string; body: string };
  architecture: { title: string; intro: string; steps: string[] };
  decisions: { title: string; items: { title: string; body: string }[] };
  quality: { title: string; items: string[] };
  limitations: { title: string; items: string[] };
};

const content: Record<Language, Record<ProjectSlug, CaseStudyContent>> = {
  en: {
    signalist: {
      title: "Signalist",
      eyebrow: "// Full-stack case study",
      summary:
        "A market-monitoring application that combines real-time data, personalized alerts, asynchronous workflows, and a production-oriented full-stack architecture.",
      repositoryUrl: "https://github.com/Sipisak/stock-tracker-app",
      liveUrl: "https://stock-tracker-app-snowy.vercel.app",
      preview: "signalist",
      facts: [
        { label: "Role", value: "Architecture & full-stack development" },
        { label: "Scope", value: "Real-time data, alerts, auth, workflows" },
        { label: "Status", value: "Deployed application" },
      ],
      problem: {
        title: "The problem",
        body:
          "Market data arrives continuously, while users expect relevant updates without constantly refreshing the application or receiving the same alert repeatedly. The system needed to keep client views current, evaluate personalized rules, and deliver notifications without tightly coupling every concern to the request-response cycle.",
      },
      solution: {
        title: "The solution",
        body:
          "Signalist separates the interactive web application, real-time communication, persistent user configuration, and background work. WebSocket delivery keeps active sessions current, while event-driven workflows handle work that should not block the user interface. Alert targeting and cooldown rules reduce unnecessary traffic and notification floods.",
      },
      architecture: {
        title: "System architecture",
        intro:
          "The application uses a layered flow where external market events are normalized before they reach user-facing features.",
        steps: [
          "Finnhub market data",
          "WebSocket ingestion and normalization",
          "Alert evaluation and user targeting",
          "Inngest background workflows",
          "Dashboard, email, and in-app notifications",
        ],
      },
      decisions: {
        title: "Key engineering decisions",
        items: [
          {
            title: "Targeted WebSocket delivery",
            body:
              "Updates are sent to the relevant sessions instead of broadcasting every event to every connected client.",
          },
          {
            title: "Alert cooldown state",
            body:
              "Each alert tracks recent delivery so an oscillating price does not trigger the same notification continuously.",
          },
          {
            title: "Asynchronous workflows",
            body:
              "Digests, follow-up processing, and notification work run outside the synchronous UI request path.",
          },
          {
            title: "User-scoped data",
            body:
              "Authentication, watchlists, and alerts are consistently associated with the owning user across the application.",
          },
        ],
      },
      quality: {
        title: "Testing and delivery",
        items: [
          "End-to-end user journeys covered with Playwright",
          "Alert behavior tested around targeting and cooldown conditions",
          "Production deployment of the web application and supporting services",
          "Architecture designed for replacing or scaling individual infrastructure components",
        ],
      },
      limitations: {
        title: "Current limitations",
        items: [
          "The application depends on external market-data limits and availability",
          "The current deployment is optimized for a portfolio-scale workload rather than institutional traffic",
          "Long-term market-data storage and advanced analytics remain outside the present scope",
        ],
      },
    },
    "invoice-automation": {
      title: "Invoice Automation MVP",
      eyebrow: "// Automation case study",
      summary:
        "A conservative document-processing pipeline that extracts and validates invoice data, detects duplicates, keeps a complete audit trail, and requires human approval before export.",
      repositoryUrl: "https://github.com/Sipisak/invoice-automation-mvp",
      preview: "invoice",
      facts: [
        { label: "Role", value: "Architecture & implementation" },
        { label: "Scope", value: "Pipeline, review UI, exports, tests" },
        { label: "Status", value: "Completed MVP" },
      ],
      problem: {
        title: "The problem",
        body:
          "Incoming invoices contain inconsistent layouts, incomplete fields, and values that cannot be trusted solely because OCR returned them. A useful automation system therefore cannot treat extraction as accounting truth. It must preserve uncertainty, identify duplicates, apply known rules, and surface ambiguous documents for review.",
      },
      solution: {
        title: "The solution",
        body:
          "The MVP implements one shared event-driven pipeline for both scheduled ingestion and manual upload. Every document is hashed, extracted, normalized, validated, matched against rules, classified, and written to an audit trail. Only approved values are allowed into export workflows.",
      },
      architecture: {
        title: "Processing pipeline",
        intro:
          "The orchestrator is independent of the trigger, which keeps ingestion mechanisms replaceable without duplicating business logic.",
        steps: [
          "Timer or manual upload",
          "Hash and duplicate check",
          "OCR extraction and normalization",
          "Rules, validation, and classification",
          "Human review and approval",
          "Excel / Pohoda XML export and archive",
        ],
      },
      decisions: {
        title: "Key engineering decisions",
        items: [
          {
            title: "Confidence-aware values",
            body:
              "ExtractedValue keeps raw, normalized, confidence, and approved values separate so uncertainty is never hidden.",
          },
          {
            title: "Conservative classification",
            body:
              "Missing or uncertain fields move the invoice to review instead of allowing the system to guess.",
          },
          {
            title: "Two-stage duplicate detection",
            body:
              "A cheap file-hash check runs before extraction, followed by a domain-level duplicate check after fields are available.",
          },
          {
            title: "Replaceable infrastructure adapters",
            body:
              "The local MVP uses lightweight implementations while the pipeline is designed for Azure SQL, Blob or SharePoint storage, and Document Intelligence.",
          },
        ],
      },
      quality: {
        title: "Testing and delivery",
        items: [
          "Automated tests across normalization, classification, duplicate detection, exports, and pipeline behavior",
          "Synthetic invoices and fixtures keep the public repository independent of production data",
          "Review UI supports filtering, approval, status changes, and confidence inspection",
          "Known limitations and the local-to-production mapping are documented in the repository",
        ],
      },
      limitations: {
        title: "MVP boundaries",
        items: [
          "Local SQLite, filesystem storage, and mock OCR are development implementations",
          "Authentication and production authorization are intentionally outside the MVP",
          "PDF preview and richer field correction remain backlog items",
          "Accounting rules shown in the public demo are synthetic and illustrative",
        ],
      },
    },
  },
  cs: {
    signalist: {
      title: "Signalist",
      eyebrow: "// Full-stack případová studie",
      summary:
        "Aplikace pro sledování trhů, která propojuje realtime data, personalizované alerty, asynchronní workflow a produkčně orientovanou full-stack architekturu.",
      repositoryUrl: "https://github.com/Sipisak/stock-tracker-app",
      liveUrl: "https://stock-tracker-app-snowy.vercel.app",
      preview: "signalist",
      facts: [
        { label: "Role", value: "Architektura a full-stack vývoj" },
        { label: "Rozsah", value: "Realtime data, alerty, autentizace, workflow" },
        { label: "Stav", value: "Nasazená aplikace" },
      ],
      problem: {
        title: "Problém",
        body:
          "Tržní data přicházejí průběžně a uživatelé očekávají aktuální informace bez neustálého obnovování aplikace a bez opakovaných notifikací ke stejné situaci. Systém musel aktualizovat aktivní klienty, vyhodnocovat personalizovaná pravidla a doručovat upozornění bez pevného provázání všech částí se synchronním request-response tokem.",
      },
      solution: {
        title: "Řešení",
        body:
          "Signalist odděluje interaktivní webovou aplikaci, realtime komunikaci, trvalé uživatelské nastavení a úlohy na pozadí. WebSockety udržují aktivní relace aktuální, zatímco event-driven workflow řeší činnosti, které nemají blokovat uživatelské rozhraní. Cílené doručování a cooldown alertů omezují zbytečný provoz a zahlcení notifikacemi.",
      },
      architecture: {
        title: "Architektura systému",
        intro:
          "Aplikace používá vrstvený tok, ve kterém se externí tržní události normalizují před napojením na uživatelské funkce.",
        steps: [
          "Tržní data z Finnhub",
          "WebSocket ingest a normalizace",
          "Vyhodnocení alertů a cílení uživatelů",
          "Asynchronní workflow přes Inngest",
          "Dashboard, e-mailové a in-app notifikace",
        ],
      },
      decisions: {
        title: "Klíčová technická rozhodnutí",
        items: [
          {
            title: "Cílené doručování přes WebSocket",
            body:
              "Aktualizace se posílají relevantním relacím místo broadcastu každé události všem připojeným klientům.",
          },
          {
            title: "Stav cooldownu alertů",
            body:
              "Každý alert sleduje poslední doručení, aby oscilující cena nevyvolávala stejnou notifikaci opakovaně.",
          },
          {
            title: "Asynchronní workflow",
            body:
              "Souhrny, navazující zpracování a notifikace běží mimo synchronní cestu požadavku uživatelského rozhraní.",
          },
          {
            title: "Data oddělená podle uživatele",
            body:
              "Autentizace, watchlisty a alerty jsou konzistentně propojené s vlastníkem napříč aplikací.",
          },
        ],
      },
      quality: {
        title: "Testování a nasazení",
        items: [
          "End-to-end uživatelské scénáře pokryté pomocí Playwright",
          "Testování alertů se zaměřením na cílení a cooldown podmínky",
          "Produkční nasazení webové aplikace a podpůrných služeb",
          "Architektura připravená na výměnu nebo škálování jednotlivých infrastrukturních částí",
        ],
      },
      limitations: {
        title: "Současná omezení",
        items: [
          "Aplikace závisí na limitech a dostupnosti externího poskytovatele tržních dat",
          "Aktuální nasazení je optimalizované pro portfolio projekt, ne pro institucionální provoz",
          "Dlouhodobé ukládání tržních dat a pokročilá analytika jsou mimo současný rozsah",
        ],
      },
    },
    "invoice-automation": {
      title: "Invoice Automation MVP",
      eyebrow: "// Případová studie automatizace",
      summary:
        "Konzervativní pipeline pro zpracování dokumentů, která vytěžuje a validuje data z faktur, odhaluje duplicity, udržuje úplnou auditní stopu a před exportem vyžaduje lidské schválení.",
      repositoryUrl: "https://github.com/Sipisak/invoice-automation-mvp",
      preview: "invoice",
      facts: [
        { label: "Role", value: "Architektura a implementace" },
        { label: "Rozsah", value: "Pipeline, kontrolní UI, exporty, testy" },
        { label: "Stav", value: "Dokončené MVP" },
      ],
      problem: {
        title: "Problém",
        body:
          "Přijaté faktury mají rozdílné rozložení, neúplná pole a hodnoty, kterým nelze věřit jen proto, že je OCR přečetlo. Užitečný automatizační systém proto nemůže považovat výsledek extrakce za účetní pravdu. Musí zachovat nejistotu, odhalit duplicity, aplikovat známá pravidla a předat nejednoznačné doklady ke kontrole.",
      },
      solution: {
        title: "Řešení",
        body:
          "MVP používá jednu sdílenou event-driven pipeline pro plánovaný ingest i ruční nahrání. Každý dokument projde hashem, extrakcí, normalizací, validací, párováním pravidel, klasifikací a zápisem do auditní stopy. Do exportů mohou vstoupit pouze schválené hodnoty.",
      },
      architecture: {
        title: "Zpracovatelská pipeline",
        intro:
          "Orchestrátor není závislý na typu triggeru, takže lze měnit způsob příjmu dokumentů bez duplikace doménové logiky.",
        steps: [
          "Timer nebo ruční upload",
          "Hash a kontrola duplicity",
          "OCR extrakce a normalizace",
          "Pravidla, validace a klasifikace",
          "Lidská kontrola a schválení",
          "Excel / Pohoda XML export a archivace",
        ],
      },
      decisions: {
        title: "Klíčová technická rozhodnutí",
        items: [
          {
            title: "Hodnoty s mírou jistoty",
            body:
              "ExtractedValue odděluje raw, normalizovanou, confidence a schválenou hodnotu, takže se nejistota nikdy neschová.",
          },
          {
            title: "Konzervativní klasifikace",
            body:
              "Chybějící nebo nejistá pole posílají fakturu ke kontrole místo toho, aby systém hodnoty odhadoval.",
          },
          {
            title: "Dvoustupňová detekce duplicit",
            body:
              "Levná kontrola hashe probíhá před extrakcí a doménová kontrola duplicity až po získání potřebných polí.",
          },
          {
            title: "Vyměnitelné infrastrukturní adaptéry",
            body:
              "Lokální MVP používá lehké implementace, zatímco pipeline je připravená na Azure SQL, Blob nebo SharePoint storage a Document Intelligence.",
          },
        ],
      },
      quality: {
        title: "Testování a dodání",
        items: [
          "Automatizované testy normalizace, klasifikace, duplicit, exportů a chování pipeline",
          "Syntetické faktury a fixtures udržují veřejný repozitář bez produkčních dat",
          "Kontrolní rozhraní podporuje filtrování, schválení, změnu stavu a zobrazení confidence",
          "Známá omezení a mapování lokálního MVP na produkční infrastrukturu jsou zdokumentované",
        ],
      },
      limitations: {
        title: "Hranice MVP",
        items: [
          "Lokální SQLite, filesystem storage a mock OCR jsou vývojové implementace",
          "Autentizace a produkční autorizace jsou záměrně mimo rozsah MVP",
          "Náhled PDF a pokročilejší oprava polí zůstávají v backlogu",
          "Účetní pravidla ve veřejném demu jsou syntetická a ilustrační",
        ],
      },
    },
  },
};

export function getCaseStudy(language: Language, slug: ProjectSlug) {
  return content[language][slug];
}

export function isProjectSlug(value: string): value is ProjectSlug {
  return value === "signalist" || value === "invoice-automation";
}
