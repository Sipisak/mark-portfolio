import {
  useState,
  useEffect,
  useRef,
  type ReactNode,
  type CSSProperties,
} from "react";
import {
  Github,
  Linkedin,
  Mail,
  ArrowDown,
  ExternalLink,
  Code2,
  ChevronRight,
} from "lucide-react";

/* ─── palette & tokens ────────────────────────────── */
const T = {
  bg: "#07090F",
  surface: "#0D1520",
  surface2: "#142030",
  border: "#1C2D42",
  text: "#CDD7E8",
  muted: "#556070",
  accent: "#F07040",
  accentLow: "rgba(240,112,64,0.10)",
  blue: "#5599EE",
  white: "#FFFFFF",
} as const;

/* ─── scroll-reveal hook ──────────────────────────── */
function useReveal(threshold = 0.15): [React.RefObject<HTMLDivElement>, boolean] {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

/* ─── animated background dots ────────────────────── */
function GridDots() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;
    let raf = 0;
    const dots = Array.from({ length: 40 }, () => ({
      x: Math.random() * 2000,
      y: Math.random() * 6000,
      r: Math.random() * 1.5 + 0.5,
      speed: Math.random() * 0.15 + 0.05,
      opacity: Math.random() * 0.3 + 0.1,
    }));
    function resize() {
      if (!c) return;
      c.width = window.innerWidth;
      c.height = document.body.scrollHeight;
    }
    resize();
    window.addEventListener("resize", resize);
    function draw() {
      if (!ctx || !c) return;
      ctx.clearRect(0, 0, c.width, c.height);
      dots.forEach((d) => {
        d.y -= d.speed;
        if (d.y < -10) {
          d.y = c.height + 10;
          d.x = Math.random() * c.width;
        }
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(240,112,64,${d.opacity})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    }
    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);
  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        opacity: 0.5,
      }}
    />
  );
}

/* ─── reusable fade-up wrapper ────────────────────── */
function FadeUp({
  children,
  delay = 0,
  style = {},
}: {
  children: ReactNode;
  delay?: number;
  style?: CSSProperties;
}) {
  const [ref, visible] = useReveal(0.1);
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.7s cubic-bezier(.4,0,.2,1) ${delay}s, transform 0.7s cubic-bezier(.4,0,.2,1) ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/* ─── stagger wrapper for children ────────────────── */
function Stagger({
  children,
  baseDelay = 0,
  increment = 0.07,
}: {
  children: ReactNode;
  baseDelay?: number;
  increment?: number;
}) {
  const [ref, visible] = useReveal(0.05);
  const items = Array.isArray(children) ? children : [children];
  return (
    <div ref={ref} style={{ display: "contents" }}>
      {items.map((child, i) => (
        <div
          key={i}
          style={{
            opacity: visible ? 1 : 0,
            transform: visible
              ? "translateY(0) scale(1)"
              : "translateY(16px) scale(0.96)",
            transition: `all 0.5s cubic-bezier(.4,0,.2,1) ${
              baseDelay + i * increment
            }s`,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}

/* ─── nav ─────────────────────────────────────────── */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "18px 48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "rgba(7,9,15,0.82)",
        backdropFilter: "blur(14px)",
        borderBottom: `1px solid ${scrolled ? T.border : "transparent"}`,
        transition: "border-color .3s",
      }}
    >
      <a
        href="#hero"
        style={{
          fontFamily: "'Space Grotesk',sans-serif",
          fontWeight: 700,
          fontSize: 17,
          color: T.white,
          textDecoration: "none",
          letterSpacing: "-0.02em",
        }}
      >
        mark<span style={{ color: T.accent }}>.</span>
      </a>
      <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
        {["About", "Stack", "Projects", "Contact"].map((s) => (
          <a
            key={s}
            href={`#${s.toLowerCase()}`}
            style={{
              fontSize: 14,
              fontWeight: 500,
              color: T.muted,
              textDecoration: "none",
              transition: "color .2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = T.text)}
            onMouseLeave={(e) => (e.currentTarget.style.color = T.muted)}
          >
            {s}
          </a>
        ))}
      </div>
    </nav>
  );
}

/* ─── button ──────────────────────────────────────── */
function Btn({
  href,
  children,
  primary,
  external,
}: {
  href: string;
  children: ReactNode;
  primary?: boolean;
  external?: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const base: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "12px 22px",
    borderRadius: 8,
    fontFamily: "'Inter',sans-serif",
    fontSize: 14,
    fontWeight: 500,
    textDecoration: "none",
    cursor: "pointer",
    border: "none",
    transition: "all .22s",
  };
  const style: CSSProperties = primary
    ? {
        ...base,
        background: hovered ? "#d85f30" : T.accent,
        color: T.white,
        transform: hovered ? "translateY(-2px)" : "none",
        boxShadow: hovered ? "0 8px 32px rgba(240,112,64,0.25)" : "none",
      }
    : {
        ...base,
        background: hovered ? T.surface : "transparent",
        color: hovered ? T.text : T.muted,
        border: `1px solid ${hovered ? T.muted : T.border}`,
      };
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      style={style}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </a>
  );
}

/* ─── hero ────────────────────────────────────────── */
function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  const trans = (delay: number) =>
    `opacity 0.9s cubic-bezier(.4,0,.2,1) ${delay}s, transform 0.9s cubic-bezier(.4,0,.2,1) ${delay}s`;

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        padding: "140px 48px 100px",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "-5%",
          width: "60vw",
          height: "60vw",
          background:
            "radial-gradient(ellipse, rgba(240,112,64,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          width: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        <p
          style={{
            fontFamily: "'JetBrains Mono',monospace",
            fontSize: 13,
            color: T.accent,
            letterSpacing: "0.07em",
            textTransform: "uppercase",
            marginBottom: 28,
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(20px)",
            transition: trans(0.15),
          }}
        >
          {"// Software Engineer · AI Automation"}
        </p>

        <h1
          style={{
            fontFamily: "'Space Grotesk',sans-serif",
            fontWeight: 700,
            fontSize: "clamp(72px,11vw,140px)",
            lineHeight: 0.88,
            letterSpacing: "-0.04em",
            color: T.white,
            margin: "0 0 40px",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(40px)",
            transition: trans(0.3),
          }}
        >
          Mark<span style={{ color: T.accent }}>.</span>
        </h1>

        <p
          style={{
            fontSize: 19,
            color: T.muted,
            maxWidth: 480,
            lineHeight: 1.7,
            marginBottom: 44,
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(24px)",
            transition: trans(0.5),
          }}
        >
          Building{" "}
          <span style={{ color: T.text, fontWeight: 500 }}>
            clean, scalable, and practical
          </span>{" "}
          digital products — from backend APIs and real-time systems to
          AI-powered integrations.
        </p>

        <div
          style={{
            display: "flex",
            gap: 14,
            flexWrap: "wrap",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(20px)",
            transition: trans(0.65),
          }}
        >
          <Btn href="#projects" primary>
            View projects <ChevronRight size={16} />
          </Btn>
          <Btn href="https://github.com/Sipisak" external>
            <Github size={15} /> GitHub
          </Btn>
          <Btn
            href="https://www.linkedin.com/in/marek-%C5%A1%C3%ADpek-74322825a"
            external
          >
            <Linkedin size={15} /> LinkedIn
          </Btn>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 44,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          opacity: mounted ? 1 : 0,
          transition: "opacity 1.2s 1.2s",
        }}
      >
        <ArrowDown
          size={14}
          color={T.muted}
          style={{ animation: "bobble 2s ease-in-out infinite" }}
        />
      </div>
    </section>
  );
}

/* ─── section heading helpers ─────────────────────── */
function Label({ children }: { children: ReactNode }) {
  return (
    <p
      style={{
        fontFamily: "'JetBrains Mono',monospace",
        fontSize: 12,
        color: T.accent,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        marginBottom: 18,
      }}
    >
      {children}
    </p>
  );
}

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2
      style={{
        fontFamily: "'Space Grotesk',sans-serif",
        fontWeight: 700,
        fontSize: "clamp(30px,4vw,48px)",
        color: T.white,
        letterSpacing: "-0.025em",
        lineHeight: 1.08,
        margin: "0 0 52px",
      }}
    >
      {children}
    </h2>
  );
}

/* ─── about ───────────────────────────────────────── */
function StatBox({ val, sub }: { val: string; sub: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{
        background: hovered ? T.surface2 : T.surface,
        padding: "28px 24px",
        transition: "background .25s",
        cursor: "default",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          fontFamily: "'Space Grotesk',sans-serif",
          fontWeight: 700,
          fontSize: 34,
          color: T.white,
          letterSpacing: "-0.025em",
          lineHeight: 1,
          marginBottom: 6,
        }}
      >
        {val}
        <span style={{ color: T.accent, fontSize: "0.6em" }}>.</span>
      </div>
      <div style={{ fontSize: 13, color: T.muted, lineHeight: 1.4 }}>{sub}</div>
    </div>
  );
}

function About() {
  const paragraphs: ReactNode[] = [
    <>
      I'm a{" "}
      <strong style={{ color: T.text, fontWeight: 500 }}>
        full-stack software engineer
      </strong>{" "}
      based in Czech Republic, holding an Ing./MSc in Applied Informatics from
      the{" "}
      <strong style={{ color: T.text, fontWeight: 500 }}>
        University of Hradec Králové
      </strong>
      .
    </>,
    <>
      My focus is on building production-grade web applications — from{" "}
      <strong style={{ color: T.text, fontWeight: 500 }}>
        robust backend APIs
      </strong>{" "}
      to{" "}
      <strong style={{ color: T.text, fontWeight: 500 }}>
        modern React frontends
      </strong>
      , with a growing specialization in AI integrations and event-driven
      automation.
    </>,
    <>
      Currently exploring{" "}
      <strong style={{ color: T.text, fontWeight: 500 }}>
        AI automation, intelligent integrations, and real-time systems
      </strong>
      .
    </>,
  ];
  const stats = [
    { val: "Ing", sub: "MSc Applied Informatics" },
    { val: "12+", sub: "Repositories on GitHub" },
    { val: "AI", sub: "Automation & Integrations" },
    { val: "FS", sub: "Full-Stack Development" },
  ];
  return (
    <section
      id="about"
      style={{
        padding: "120px 48px",
        borderTop: `1px solid ${T.border}`,
        position: "relative",
        zIndex: 1,
      }}
    >
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <FadeUp>
          <Label>{"// About"}</Label>
        </FadeUp>
        <FadeUp delay={0.1}>
          <SectionTitle>
            Engineer, builder,
            <br />
            problem solver.
          </SectionTitle>
        </FadeUp>

        <div className="about-grid">
          <FadeUp delay={0.2}>
            <div>
              {paragraphs.map((p, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: 17,
                    color: T.muted,
                    lineHeight: 1.75,
                    marginBottom: 18,
                  }}
                >
                  {p}
                </p>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={0.35}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 1,
                background: T.border,
                border: `1px solid ${T.border}`,
                borderRadius: 14,
                overflow: "hidden",
              }}
            >
              {stats.map((s, i) => (
                <StatBox key={i} {...s} />
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

/* ─── stack ───────────────────────────────────────── */
const STACK: { label: string; items: string[] }[] = [
  { label: "Languages", items: ["TypeScript", "JavaScript", "Java", "Python", "HTML", "CSS"] },
  { label: "Frameworks & Libraries", items: ["Next.js", "React", "Node.js", "Tailwind CSS", "Shadcn UI"] },
  { label: "Databases & Infrastructure", items: ["MongoDB", "PostgreSQL", "Docker", "Linux"] },
  { label: "APIs & Tooling", items: ["REST APIs", "Inngest", "Gemini API", "Finnhub API", "Git", "Postman", "Figma", "VS Code"] },
];

function Pill({ children }: { children: ReactNode }) {
  const [hovered, setHovered] = useState(false);
  return (
    <span
      style={{
        background: hovered ? T.accentLow : T.surface,
        border: `1px solid ${hovered ? T.accent : T.border}`,
        color: hovered ? T.accent : T.text,
        fontFamily: "'JetBrains Mono',monospace",
        fontSize: 13,
        padding: "9px 18px",
        borderRadius: 6,
        transition: "all .2s",
        cursor: "default",
        transform: hovered ? "translateY(-2px)" : "none",
        display: "inline-block",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </span>
  );
}

function Stack() {
  return (
    <section
      id="stack"
      style={{
        padding: "120px 48px",
        borderTop: `1px solid ${T.border}`,
        position: "relative",
        zIndex: 1,
      }}
    >
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <FadeUp>
          <Label>{"// Stack"}</Label>
        </FadeUp>
        <FadeUp delay={0.1}>
          <SectionTitle>Tools of the trade.</SectionTitle>
        </FadeUp>

        <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
          {STACK.map((row, ri) => (
            <FadeUp key={ri} delay={0.15 + ri * 0.08}>
              <p
                style={{
                  fontFamily: "'JetBrains Mono',monospace",
                  fontSize: 11,
                  color: T.muted,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: 14,
                }}
              >
                {row.label}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                <Stagger baseDelay={0.05} increment={0.04}>
                  {row.items.map((item) => (
                    <Pill key={item}>{item}</Pill>
                  ))}
                </Stagger>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── projects ────────────────────────────────────── */
function FeaturedProject() {
  const [hovered, setHovered] = useState(false);
  const features = [
    "Real-time stock prices with candlestick & line charts",
    "Personalized watchlists and email price alerts",
    "AI-generated daily digests and market summaries",
    "Company insights — earnings, filings, sentiment",
    "Event-driven automation via Inngest",
  ];
  const techs = ["Next.js", "TypeScript", "MongoDB", "Better Auth", "Inngest", "Finnhub API", "Gemini API", "Tailwind", "Shadcn UI"];
  return (
    <div
      style={{
        background: T.surface,
        border: `1px solid ${hovered ? T.accent : T.border}`,
        borderRadius: 16,
        overflow: "hidden",
        transition: "border-color .3s, box-shadow .3s",
        boxShadow: hovered ? "0 0 60px rgba(240,112,64,0.06)" : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="pc-head"
        style={{
          padding: "40px 48px",
          borderBottom: `1px solid ${T.border}`,
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: 24,
        }}
      >
        <div>
          <p
            style={{
              fontFamily: "'Space Grotesk',sans-serif",
              fontWeight: 700,
              fontSize: 26,
              color: T.white,
              letterSpacing: "-0.02em",
              margin: "0 0 10px",
            }}
          >
            Stock Tracker App
          </p>
          <p style={{ fontSize: 16, color: T.muted, lineHeight: 1.65, maxWidth: 560, margin: 0 }}>
            An AI-powered full-stack platform for real-time stock monitoring.
            Track prices, manage watchlists, set alerts, and receive
            AI-generated market insights.
          </p>
        </div>
        <span
          style={{
            fontFamily: "'JetBrains Mono',monospace",
            fontSize: 11,
            background: T.accentLow,
            color: T.accent,
            border: "1px solid rgba(240,112,64,0.28)",
            padding: "4px 12px",
            borderRadius: 4,
            letterSpacing: "0.07em",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
        >
          Featured
        </span>
      </div>

      <div className="pc-body" style={{ padding: "40px 48px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
        <div>
          <h4 style={{ fontSize: 12, fontWeight: 500, color: T.muted, textTransform: "uppercase", letterSpacing: "0.07em", margin: "0 0 16px" }}>
            Key Features
          </h4>
          {features.map((f, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 12, fontSize: 15, color: T.muted }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: T.accent, flexShrink: 0, marginTop: 8 }} />
              <span>{f}</span>
            </div>
          ))}
        </div>
        <div>
          <h4 style={{ fontSize: 12, fontWeight: 500, color: T.muted, textTransform: "uppercase", letterSpacing: "0.07em", margin: "0 0 16px" }}>
            Tech Stack
          </h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {techs.map((t) => (
              <span
                key={t}
                style={{
                  background: T.surface2,
                  border: `1px solid ${T.border}`,
                  color: T.blue,
                  fontFamily: "'JetBrains Mono',monospace",
                  fontSize: 12,
                  padding: "6px 13px",
                  borderRadius: 5,
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="pc-foot" style={{ padding: "24px 48px", borderTop: `1px solid ${T.border}`, display: "flex", gap: 14 }}>
        <Btn href="https://stock-tracker-app-snowy.vercel.app" primary external>
          Live demo <ExternalLink size={14} />
        </Btn>
        <Btn href="https://github.com/Sipisak/stock-tracker-app" external>
          <Code2 size={15} /> Source code
        </Btn>
      </div>
    </div>
  );
}

function MiniCard({
  title,
  tag,
  tagColor,
  desc,
  link,
  linkText,
}: {
  title: string;
  tag: string;
  tagColor?: string;
  desc: string;
  link?: string;
  linkText?: string;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{
        background: T.surface,
        border: `1px solid ${hovered ? "rgba(240,112,64,0.4)" : T.border}`,
        borderRadius: 12,
        padding: 28,
        transition: "border-color .25s, transform .25s",
        transform: hovered ? "translateY(-2px)" : "none",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
        <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 16, color: T.white }}>
          {title}
        </span>
        <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: tagColor || T.muted, letterSpacing: "0.06em", textTransform: "uppercase" }}>
          {tag}
        </span>
      </div>
      <p style={{ fontSize: 14, color: T.muted, lineHeight: 1.6, flex: 1, margin: 0 }}>{desc}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            marginTop: 16,
            fontSize: 13,
            fontWeight: 500,
            color: T.accent,
            textDecoration: "none",
          }}
        >
          {linkText} <ChevronRight size={14} />
        </a>
      )}
    </div>
  );
}

function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: "120px 48px",
        borderTop: `1px solid ${T.border}`,
        position: "relative",
        zIndex: 1,
      }}
    >
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <FadeUp>
          <Label>{"// Projects"}</Label>
        </FadeUp>
        <FadeUp delay={0.1}>
          <SectionTitle>Things I've built.</SectionTitle>
        </FadeUp>

        <FadeUp delay={0.2}>
          <FeaturedProject />
        </FadeUp>

        <div className="more-projects" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 24 }}>
          <FadeUp delay={0.35}>
            <MiniCard
              title="More projects on GitHub"
              tag="12 repos"
              desc="Explore the full collection of projects, experiments, and open-source work."
              link="https://github.com/Sipisak?tab=repositories"
              linkText="View all repos"
            />
          </FadeUp>
          <FadeUp delay={0.45}>
            <MiniCard
              title="Currently building"
              tag="In progress"
              tagColor={T.accent}
              desc="Working on AI automation workflows, integrations, and new side projects. Stay tuned."
            />
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

/* ─── contact ─────────────────────────────────────── */
function ContactLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: ReactNode;
  label: string;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "flex",
        alignItems: "center",
        gap: 9,
        padding: "12px 20px",
        background: T.surface,
        border: `1px solid ${hovered ? T.accent : T.border}`,
        borderRadius: 8,
        color: hovered ? T.accent : T.text,
        textDecoration: "none",
        fontSize: 14,
        fontWeight: 500,
        transition: "all .2s",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {icon} {label}
    </a>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "120px 48px",
        borderTop: `1px solid ${T.border}`,
        position: "relative",
        zIndex: 1,
      }}
    >
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <div style={{ maxWidth: 580 }}>
          <FadeUp>
            <Label>{"// Contact"}</Label>
          </FadeUp>
          <FadeUp delay={0.1}>
            <SectionTitle>
              Let's work
              <br />
              together.
            </SectionTitle>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p style={{ fontSize: 18, color: T.muted, lineHeight: 1.7, marginBottom: 44 }}>
              Whether it's a{" "}
              <span style={{ color: T.text, fontWeight: 500 }}>full-stack project</span>, an{" "}
              <span style={{ color: T.text, fontWeight: 500 }}>AI integration</span>, or a
              conversation about building something worthwhile — I'm always open.
            </p>
          </FadeUp>

          <FadeUp delay={0.3}>
            <Btn href="mailto:your@email.com" primary>
              <Mail size={15} /> Say hello
            </Btn>
          </FadeUp>

          <FadeUp delay={0.4}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 32 }}>
              <ContactLink href="https://github.com/Sipisak" icon={<Github size={16} />} label="github.com/Sipisak" />
              <ContactLink href="https://www.linkedin.com/in/marek-%C5%A1%C3%ADpek-74322825a" icon={<Linkedin size={16} />} label="LinkedIn — Mark" />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

/* ─── responsive helper styles ────────────────────── */
function ResponsiveStyles() {
  useEffect(() => {
    const id = "portfolio-responsive-css";
    if (document.getElementById(id)) return;
    const style = document.createElement("style");
    style.id = id;
    style.textContent = `
      .about-grid { display:grid; grid-template-columns:1fr 1fr; gap:72px; align-items:start; }
      @media (max-width: 900px) {
        .about-grid { grid-template-columns:1fr; gap:48px; }
        .pc-body { grid-template-columns:1fr !important; }
        .more-projects { grid-template-columns:1fr !important; }
      }
      @media (max-width: 640px) {
        nav { padding:16px 24px !important; }
        .pc-head, .pc-body, .pc-foot { padding-left:24px !important; padding-right:24px !important; }
        .pc-head { flex-direction:column !important; }
        .pc-foot { flex-direction:column !important; }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.getElementById(id)?.remove();
    };
  }, []);
  return null;
}

/* ─── app ─────────────────────────────────────────── */
export default function Portfolio() {
  return (
    <div
      style={{
        background: T.bg,
        color: T.text,
        fontFamily: "'Inter',sans-serif",
        fontSize: 16,
        lineHeight: 1.6,
        WebkitFontSmoothing: "antialiased",
        minHeight: "100vh",
      }}
    >
      <ResponsiveStyles />
      <GridDots />
      <Nav />
      <Hero />
      <About />
      <Stack />
      <Projects />
      <Contact />

      <footer
        style={{
          padding: "36px 48px",
          borderTop: `1px solid ${T.border}`,
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, color: T.muted, margin: 0 }}>
          Mark © 2026 · Built with care
        </p>
      </footer>
    </div>
  );
}
