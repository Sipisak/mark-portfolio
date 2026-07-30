import { ExternalLink, Code2, ChevronRight } from "lucide-react";
import { T, accentAlpha } from "../theme";
import { FadeUp } from "../components/FadeUp";
import { Label, SectionTitle } from "../components/SectionHeading";
import { Btn } from "../components/Button";
import { useHover } from "../hooks/useHover";
import { usePreferences } from "../preferences";

const SIGNALIST_TECH = [
  "Next.js",
  "TypeScript",
  "MongoDB",
  "Better Auth",
  "Inngest",
  "WebSockets",
  "Finnhub API",
  "Playwright",
] as const;

function FeaturedProject() {
  const [hovered, hoverProps] = useHover();
  const { t } = usePreferences();

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
            Signalist
          </p>
          <p style={{ fontSize: 16, color: T.muted, lineHeight: 1.65, maxWidth: 620, margin: 0 }}>
            {t.projects.signalist.description}
          </p>
        </div>
        <span
          style={{
            fontFamily: "'JetBrains Mono',monospace",
            fontSize: 11,
            background: T.accentLow,
            color: T.accent,
            border: `1px solid ${accentAlpha(0.28)}`,
            padding: "4px 12px",
            borderRadius: 4,
            letterSpacing: "0.07em",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
        >
          {t.projects.featured}
        </span>
      </div>

      <div
        className="pc-body"
        style={{
          padding: "40px 48px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 48,
        }}
      >
        <div>
          <h4
            style={{
              fontSize: 12,
              fontWeight: 500,
              color: T.muted,
              textTransform: "uppercase",
              letterSpacing: "0.07em",
              margin: "0 0 16px",
            }}
          >
            {t.projects.engineeringHighlights}
          </h4>
          {t.projects.signalist.highlights.map((feature) => (
            <div
              key={feature}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 12,
                marginBottom: 12,
                fontSize: 15,
                color: T.muted,
              }}
            >
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: T.accent,
                  flexShrink: 0,
                  marginTop: 8,
                }}
              />
              <span>{feature}</span>
            </div>
          ))}
        </div>
        <div>
          <h4
            style={{
              fontSize: 12,
              fontWeight: 500,
              color: T.muted,
              textTransform: "uppercase",
              letterSpacing: "0.07em",
              margin: "0 0 16px",
            }}
          >
            {t.projects.techStack}
          </h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {SIGNALIST_TECH.map((tech) => (
              <span
                key={tech}
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
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div
        className="pc-foot"
        style={{
          padding: "24px 48px",
          borderTop: `1px solid ${T.border}`,
          display: "flex",
          gap: 14,
        }}
      >
        <Btn href="https://stock-tracker-app-snowy.vercel.app" primary external>
          {t.projects.liveDemo} <ExternalLink size={14} />
        </Btn>
        <Btn href="https://github.com/Sipisak/stock-tracker-app" external>
          <Code2 size={15} /> {t.projects.sourceCode}
        </Btn>
      </div>
    </div>
  );
}

function ProjectCard({
  title,
  tag,
  description,
  highlights,
  techs,
  link,
  linkText,
}: {
  title: string;
  tag: string;
  description: string;
  highlights: readonly string[];
  techs: readonly string[];
  link: string;
  linkText: string;
}) {
  const [hovered, hoverProps] = useHover();

  return (
    <article
      {...hoverProps}
      style={{
        background: T.surface,
        border: `1px solid ${hovered ? accentAlpha(0.5) : T.border}`,
        borderRadius: 14,
        padding: 30,
        transition: "border-color .25s, transform .25s",
        transform: hovered ? "translateY(-2px)" : "none",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: 18,
          marginBottom: 14,
        }}
      >
        <h3
          style={{
            margin: 0,
            color: T.white,
            fontFamily: "'Space Grotesk',sans-serif",
            fontSize: 21,
            letterSpacing: "-0.015em",
          }}
        >
          {title}
        </h3>
        <span
          style={{
            color: T.accent,
            fontFamily: "'JetBrains Mono',monospace",
            fontSize: 10,
            textTransform: "uppercase",
            letterSpacing: "0.07em",
            whiteSpace: "nowrap",
          }}
        >
          {tag}
        </span>
      </div>
      <p style={{ margin: "0 0 20px", color: T.muted, fontSize: 14, lineHeight: 1.7 }}>
        {description}
      </p>
      <div style={{ marginBottom: 22 }}>
        {highlights.map((highlight) => (
          <div
            key={highlight}
            style={{ display: "flex", gap: 10, color: T.muted, fontSize: 13, marginBottom: 9 }}
          >
            <span style={{ color: T.accent }}>—</span>
            <span>{highlight}</span>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginTop: "auto" }}>
        {techs.map((tech) => (
          <span
            key={tech}
            style={{
              color: T.blue,
              background: T.surface2,
              border: `1px solid ${T.border}`,
              borderRadius: 5,
              padding: "5px 9px",
              fontFamily: "'JetBrains Mono',monospace",
              fontSize: 10,
            }}
          >
            {tech}
          </span>
        ))}
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          marginTop: 22,
          color: T.accent,
          textDecoration: "none",
          fontSize: 13,
          fontWeight: 500,
        }}
      >
        {linkText} <ChevronRight size={14} />
      </a>
    </article>
  );
}

export function Projects() {
  const { t } = usePreferences();

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
          <Label>{t.projects.label}</Label>
        </FadeUp>
        <FadeUp delay={0.1}>
          <SectionTitle>{t.projects.title}</SectionTitle>
        </FadeUp>
        <FadeUp delay={0.2}>
          <FeaturedProject />
        </FadeUp>

        <div
          className="more-projects"
          style={{ display: "grid", gridTemplateColumns: "1.35fr .65fr", gap: 16, marginTop: 24 }}
        >
          <FadeUp delay={0.34}>
            <ProjectCard
              title="Invoice Automation MVP"
              tag={t.projects.invoice.tag}
              description={t.projects.invoice.description}
              highlights={t.projects.invoice.highlights}
              techs={["Azure Functions", "TypeScript", "React", "Prisma", "Vitest", "ExcelJS"]}
              link="https://github.com/Sipisak/invoice-automation-mvp"
              linkText={t.projects.invoice.link}
            />
          </FadeUp>
          <FadeUp delay={0.44}>
            <ProjectCard
              title={t.projects.more.title}
              tag={t.projects.more.tag}
              description={t.projects.more.description}
              highlights={t.projects.more.highlights}
              techs={["TypeScript", "React", "Node.js"]}
              link="https://github.com/Sipisak?tab=repositories"
              linkText={t.projects.more.link}
            />
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
