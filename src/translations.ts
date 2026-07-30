export type Language = "en" | "cs";

export const translations = {
  en: {
    meta: {
      title: "Marek Šípek — Software Engineer",
      description:
        "Marek Šípek is a software engineer focused on full-stack development, backend systems, Azure, and AI-powered automation.",
    },
    nav: {
      about: "About",
      experience: "Experience",
      stack: "Stack",
      projects: "Projects",
      contact: "Contact",
    },
    controls: {
      switchToCzech: "Switch to Czech",
      switchToEnglish: "Switch to English",
      switchToLight: "Switch to light mode",
      switchToDark: "Switch to dark mode",
    },
    hero: {
      eyebrow: "// Software Engineer · AI Automation",
      lead: "Building reliable software — from backend systems and real-time applications to",
      emphasis: "AI-powered automation",
      projectsButton: "View projects",
    },
    about: {
      label: "// About",
      titleLine1: "Engineer, builder,",
      titleLine2: "problem solver.",
      paragraphs: [
        "I'm a software engineer based in the Czech Republic, holding an Ing./MSc in Applied Informatics from the University of Hradec Králové.",
        "I build full-stack applications, backend services, system integrations, and automation workflows — from initial architecture and implementation to testing, deployment, and monitoring.",
        "My current work focuses on AI-powered automation, document processing, event-driven systems, and internal business applications using TypeScript, Node.js, React, Azure, and SQL.",
      ],
      stats: [
        { value: "Ing", label: "MSc Applied Informatics" },
        { value: "FS", label: "Frontend to Infrastructure" },
        { value: "AI", label: "Automation & Integrations" },
        { value: "AZ", label: "Azure Development" },
      ],
    },
    focus: {
      label: "// Focus",
      title: "What I focus on.",
      items: [
        {
          title: "Backend systems & integrations",
          description:
            "APIs, data models, integration layers, and cloud services designed around reliable business workflows.",
        },
        {
          title: "AI automation",
          description:
            "Document processing, intelligent workflows, agents, and human-in-the-loop systems where uncertainty stays visible.",
        },
        {
          title: "Real-time & full-stack applications",
          description:
            "WebSocket communication, event-driven behavior, modern frontends, and complete applications from architecture to deployment.",
        },
      ],
    },
    experience: {
      label: "// Experience",
      title: "Where I've worked and learned.",
      items: [
        {
          role: "AI Automation Specialist / Software Engineer",
          organization: "TRONEXO",
          period: "2026 — Present",
          description:
            "Designing and developing AI-powered automation, backend services, internal applications, and system integrations. Working across architecture, implementation, testing, cloud deployment, and monitoring.",
          type: "work" as const,
        },
        {
          role: "R&D Software Engineering Intern",
          organization: "Quadient",
          period: "2025 — 2026",
          description:
            "Worked across software development, QA automation, testing, operations, and product support within an international R&D environment.",
          type: "work" as const,
        },
        {
          role: "Ing. / MSc in Applied Informatics",
          organization: "University of Hradec Králové",
          period: "Completed 2026",
          description:
            "Graduate studies focused on applied software engineering, information systems, and the design and implementation of production-oriented applications.",
          type: "education" as const,
        },
      ],
    },
    stack: {
      label: "// Stack",
      title: "Tools of the trade.",
      categories: {
        languages: "Languages",
        frontend: "Frontend",
        backend: "Backend & Data",
        cloud: "Cloud & Automation",
        testing: "Testing & Tooling",
      },
    },
    projects: {
      label: "// Projects",
      title: "Things I've built.",
      featured: "Featured",
      engineeringHighlights: "Engineering highlights",
      techStack: "Tech stack",
      liveDemo: "Live demo",
      sourceCode: "Source code",
      caseStudy: "View case study",
      signalist: {
        description:
          "A full-stack market monitoring platform with real-time data, personalized alerts, event-driven workflows, and AI-generated summaries.",
        highlights: [
          "Real-time market data and WebSocket updates",
          "Personalized watchlists and targeted price alerts",
          "Event-driven background workflows via Inngest",
          "Alert cooldown handling to prevent notification floods",
          "Authentication, testing, and production deployment",
        ],
      },
      invoice: {
        tag: "Automation",
        description:
          "An event-driven document-processing system that extracts, validates, classifies, reviews, and exports incoming invoices through a human-in-the-loop workflow.",
        highlights: [
          "OCR abstraction with confidence-aware values",
          "Duplicate detection and complete audit logging",
          "React review UI with Excel and Pohoda XML exports",
        ],
        link: "View source code",
      },
      more: {
        title: "More on GitHub",
        tag: "Open source",
        description:
          "A collection of full-stack applications, experiments, automation tools, and earlier engineering work.",
        highlights: [
          "Web and backend projects",
          "Automation experiments",
          "Continuous learning and iteration",
        ],
        link: "View all repositories",
      },
    },
    contact: {
      label: "// Contact",
      title: "Let's connect.",
      primary:
        "I'm always open to conversations about software engineering, AI automation, and interesting technical projects.",
      secondary: "Open to selected collaborations alongside my main work.",
    },
    footer: "Built with care",
  },
  cs: {
    meta: {
      title: "Marek Šípek — Software Engineer",
      description:
        "Marek Šípek je softwarový vývojář zaměřený na full-stack vývoj, backendové systémy, Azure a automatizaci s využitím AI.",
    },
    nav: {
      about: "O mně",
      experience: "Zkušenosti",
      stack: "Technologie",
      projects: "Projekty",
      contact: "Kontakt",
    },
    controls: {
      switchToCzech: "Přepnout do češtiny",
      switchToEnglish: "Přepnout do angličtiny",
      switchToLight: "Přepnout na světlý režim",
      switchToDark: "Přepnout na tmavý režim",
    },
    hero: {
      eyebrow: "// Software Engineer · AI Automation",
      lead: "Stavím spolehlivý software — od backendových systémů a realtime aplikací až po",
      emphasis: "automatizace využívající AI",
      projectsButton: "Zobrazit projekty",
    },
    about: {
      label: "// O mně",
      titleLine1: "Vývojář, tvůrce,",
      titleLine2: "řešitel problémů.",
      paragraphs: [
        "Jsem softwarový vývojář z Česka a mám titul Ing. v oboru Aplikovaná informatika z Univerzity Hradec Králové.",
        "Vyvíjím full-stack aplikace, backendové služby, systémové integrace a automatizační workflow — od návrhu architektury a implementace až po testování, nasazení a monitoring.",
        "V současnosti se zaměřuji na automatizaci s využitím AI, zpracování dokumentů, event-driven systémy a interní firemní aplikace v TypeScriptu, Node.js, Reactu, Azure a SQL.",
      ],
      stats: [
        { value: "Ing", label: "Aplikovaná informatika" },
        { value: "FS", label: "Od frontendu po infrastrukturu" },
        { value: "AI", label: "Automatizace a integrace" },
        { value: "AZ", label: "Vývoj v Azure" },
      ],
    },
    focus: {
      label: "// Zaměření",
      title: "Na co se zaměřuji.",
      items: [
        {
          title: "Backendové systémy a integrace",
          description:
            "API, datové modely, integrační vrstvy a cloudové služby navržené kolem spolehlivých firemních procesů.",
        },
        {
          title: "AI automatizace",
          description:
            "Zpracování dokumentů, inteligentní workflow, agenti a human-in-the-loop systémy, ve kterých zůstává nejistota viditelná.",
        },
        {
          title: "Realtime a full-stack aplikace",
          description:
            "Komunikace přes WebSocket, event-driven chování, moderní frontend a kompletní aplikace od architektury po nasazení.",
        },
      ],
    },
    experience: {
      label: "// Zkušenosti",
      title: "Kde jsem pracoval a co jsem studoval.",
      items: [
        {
          role: "AI Automation Specialist / Software Engineer",
          organization: "TRONEXO",
          period: "2026 — současnost",
          description:
            "Navrhuji a vyvíjím automatizace využívající AI, backendové služby, interní aplikace a systémové integrace. Pracuji na architektuře, implementaci, testování, cloudovém nasazení i monitoringu.",
          type: "work" as const,
        },
        {
          role: "R&D Software Engineering Intern",
          organization: "Quadient",
          period: "2025 — 2026",
          description:
            "Pracoval jsem na vývoji softwaru, automatizaci QA, testování, provozní podpoře a podpoře produktu v mezinárodním R&D prostředí.",
          type: "work" as const,
        },
        {
          role: "Ing. v oboru Aplikovaná informatika",
          organization: "Univerzita Hradec Králové",
          period: "Dokončeno 2026",
          description:
            "Navazující studium zaměřené na aplikované softwarové inženýrství, informační systémy a návrh a implementaci produkčně orientovaných aplikací.",
          type: "education" as const,
        },
      ],
    },
    stack: {
      label: "// Technologie",
      title: "Technologie, se kterými pracuji.",
      categories: {
        languages: "Jazyky",
        frontend: "Frontend",
        backend: "Backend a data",
        cloud: "Cloud a automatizace",
        testing: "Testování a nástroje",
      },
    },
    projects: {
      label: "// Projekty",
      title: "Na čem jsem pracoval.",
      featured: "Hlavní projekt",
      engineeringHighlights: "Technické zajímavosti",
      techStack: "Technologie",
      liveDemo: "Živé demo",
      sourceCode: "Zdrojový kód",
      caseStudy: "Zobrazit případovou studii",
      signalist: {
        description:
          "Full-stack platforma pro sledování trhů s realtime daty, personalizovanými alerty, event-driven workflow a souhrny generovanými pomocí AI.",
        highlights: [
          "Realtime tržní data a aktualizace přes WebSocket",
          "Personalizované watchlisty a cílené cenové alerty",
          "Asynchronní event-driven workflow přes Inngest",
          "Cooldown alertů proti zahlcení notifikacemi",
          "Autentizace, testování a produkční nasazení",
        ],
      },
      invoice: {
        tag: "Automatizace",
        description:
          "Event-driven systém pro zpracování dokumentů, který vytěžuje, validuje, klasifikuje, kontroluje a exportuje přijaté faktury s člověkem zapojeným do schvalování.",
        highlights: [
          "OCR abstrakce s hodnotami a mírou jistoty",
          "Detekce duplicit a kompletní auditní stopa",
          "React rozhraní pro kontrolu s exportem do Excelu a Pohoda XML",
        ],
        link: "Zobrazit zdrojový kód",
      },
      more: {
        title: "Další projekty na GitHubu",
        tag: "Open source",
        description:
          "Sbírka full-stack aplikací, experimentů, automatizačních nástrojů a starších vývojářských projektů.",
        highlights: [
          "Webové a backendové projekty",
          "Experimenty s automatizací",
          "Průběžné učení a iterace",
        ],
        link: "Zobrazit všechny repozitáře",
      },
    },
    contact: {
      label: "// Kontakt",
      title: "Spojme se.",
      primary:
        "Rád se pobavím o softwarovém vývoji, AI automatizaci a zajímavých technických projektech.",
      secondary: "Vedle hlavní práce jsem otevřený vybraným spolupracím.",
    },
    footer: "Vytvořeno s péčí",
  },
} as const;
