import { ExternalLink, Code2, ChevronRight } from "lucide-react";
import { T, accentAlpha } from "../theme";
import { FadeUp } from "../components/FadeUp";
import { Label, SectionTitle } from "../components/SectionHeading";
import { Btn } from "../components/Button";
import { useHover } from "../hooks/useHover";

function FeaturedProject() {
  const [hovered, hoverProps] = useHover();
  const features = [
    "Real-time market data and WebSocket updates",
    "Personalized watchlists and targeted price alerts",
    "Event-driven background workflows via Inngest",
    "Alert cooldown handling to prevent notification floods",
    "Authentication, testing, and production deployment",
  ];
  const techs = [
    "Next.js",
    "TypeScript",
    "MongoDB",
    "Better Auth",
    "Inngest",
    "WebSockets",
    "Finnhub API",
    "Playwright",
  ];

  return (
    <div
      {...hoverProps}
      style={{
        background: T.surface,
        border: `1px solid ${hovered ? T.accent : T.border}`,
        borderRadius: 16,
        overflow: "hidden",
        transition: "border-color .3s, box-shadow .3s",
        boxShadow: hovered ? `0 0 60px ${accentAlpha(0.06)}` : "none",
      }}
    >
      <div className="pc-head" style={{ padding: "40px 48px", borderBottom: `1px solid ${T.border}`, display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 24 }}>
        <div>
          <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 26, color: T.white, letterSpacing: "-0.02em", margin: "0 0 10px" }}>
            Signalist
          </p>
          <p style={{ fontSize: 16, color: T.muted, lineHeight: 1.65, maxWidth: 600, margin: 0 }}>
            A full-stack market monitoring platform with real-time data,
            personalized alerts, event-driven workflows, and AI-generated summaries.
          </p>
        </div>
        <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, background: T.accentLow, color: T.accent, border: `1px solid ${accentAlpha(0.28)}`, padding: "4px 12px", borderRadius: 4, letterSpacing: "0.07em", textTransform: "uppercase", whiteSpace: "nowrap", flexShrink: 0 }}>
          Featured
        </span>
      </div>

      <div className="pc-body" style={{ padding: "40px 48px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
        <div>
          <h4 style={{ fontSize: 12, fontWeight: 500, color: T.muted, textTransform: "uppercase", letterSpacing: "0.07em", margin: "0 0 16px" }}>Engineering highlights</h4>
          {features.map((feature) => (
            <div key={feature} style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 12, fontSize: 15, color: T.muted }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: T.accent, flexShrink: 0, marginTop: 8 }} />
              <span>{feature}</span>
            </div>
          ))}
        </div>
        <div>
          <h4 style={{ fontSize: 12, fontWeight: 500, color: T.muted, textTransform: "uppercase", letterSpacing: "0.07em", margin: "0 0 16px" }}>Tech stack</h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {techs.map((tech) => (
              <span key={tech} style={{ background: T.surface2, border: `1px solid ${T.border}`, color: T.blue, fontFamily: "'JetBrains Mono',monospace", fontSize: 12, padding: "6px 13px", borderRadius: 5 }}>
                {tech}
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

function ProjectCard({ title, tag, description, highlights, techs, link, linkText }: { title: string; tag: string; description: string; highlights: string[]; techs: string[]; link: string; linkText: string }) {
  const [hovered, hoverProps] = useHover();
  return (
    <article {...hoverProps} style={{ background: T.surface, border: `1px solid ${hovered ? accentAlpha(0.5) : T.border}`, borderRadius: 14, padding: 30, transition: "border-color .25s, transform .25s", transform: hovered ? "translateY(-2px)" : "none", height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 18, marginBottom: 14 }}>
        <h3 style={{ margin: 0, color: T.white, fontFamily: "'Space Grotesk',sans-serif", fontSize: 21, letterSpacing: "-0.015em" }}>{title}</h3>
        <span style={{ color: T.accent, fontFamily: "'JetBrains Mono',monospace", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.07em", whiteSpace: "nowrap" }}>{tag}</span>
      </div>
      <p style={{ margin: "0 0 20px", color: T.muted, fontSize: 14, lineHeight: 1.7 }}>{description}</p>
      <div style={{ marginBottom: 22 }}>
        {highlights.map((highlight) => (
          <div key={highlight} style={{ display: "flex", gap: 10, color: T.muted, fontSize: 13, marginBottom: 9 }}>
            <span style={{ color: T.accent }}>—</span>
            <span>{highlight}</span>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginTop: "auto" }}>
        {techs.map((tech) => (
          <span key={tech} style={{ color: T.blue, background: T.surface2, border: `1px solid ${T.border}`, borderRadius: 5, padding: "5px 9px", fontFamily: "'JetBrains Mono',monospace", fontSize: 10 }}>{tech}</span>
        ))}
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 22, color: T.accent, textDecoration: "none", fontSize: 13, fontWeight: 500 }}>
        {linkText} <ChevronRight size={14} />
      </a>
    </article>
  );
}

export function Projects() {
  return (
    <section id="projects" style={{ padding: "120px 48px", borderTop: `1px solid ${T.border}`, position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <FadeUp><Label>{"// Projects"}</Label></FadeUp>
        <FadeUp delay={0.1}><SectionTitle>Things I've built.</SectionTitle></FadeUp>
        <FadeUp delay={0.2}><FeaturedProject /></FadeUp>

        <div className="more-projects" style={{ display: "grid", gridTemplateColumns: "1.35fr .65fr", gap: 16, marginTop: 24 }}>
          <FadeUp delay={0.34}>
            <ProjectCard
              title="Invoice Automation MVP"
              tag="Automation"
              description="An event-driven document-processing system that extracts, validates, classifies, reviews, and exports incoming invoices through a human-in-the-loop workflow."
              highlights={["OCR abstraction with confidence-aware values", "Duplicate detection and complete audit logging", "React review UI with Excel and Pohoda XML exports"]}
              techs={["Azure Functions", "TypeScript", "React", "Prisma", "Vitest", "ExcelJS"]}
              link="https://github.com/Sipisak/invoice-automation-mvp"
              linkText="View source code"
            />
          </FadeUp>
          <FadeUp delay={0.44}>
            <ProjectCard
              title="More on GitHub"
              tag="Open source"
              description="A collection of full-stack applications, experiments, automation tools, and earlier engineering work."
              highlights={["Web and backend projects", "Automation experiments", "Continuous learning and iteration"]}
              techs={["TypeScript", "React", "Node.js"]}
              link="https://github.com/Sipisak?tab=repositories"
              linkText="View all repositories"
            />
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
