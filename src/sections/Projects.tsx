import { ExternalLink, Code2, ChevronRight, BookOpenText } from "lucide-react";
import { T, accentAlpha } from "../theme";
import { FadeUp } from "../components/FadeUp";
import { Label, SectionTitle } from "../components/SectionHeading";
import { Btn } from "../components/Button";
import { ProjectPreview } from "../components/ProjectPreview";
import { useHover } from "../hooks/useHover";
import { usePreferences } from "../preferences";

function FeaturedProject() {
  const [hovered, hoverProps] = useHover();
  const { t } = usePreferences();
  const techs = ["Next.js", "TypeScript", "MongoDB", "Better Auth", "Inngest", "WebSockets", "Finnhub API", "Playwright"];

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
            {t.projects.signalist.description}
          </p>
        </div>
        <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, background: T.accentLow, color: T.accent, border: `1px solid ${accentAlpha(0.28)}`, padding: "4px 12px", borderRadius: 4, letterSpacing: "0.07em", textTransform: "uppercase", whiteSpace: "nowrap", flexShrink: 0 }}>
          {t.projects.featured}
        </span>
      </div>

      <div style={{ padding: "24px 48px 0" }}>
        <ProjectPreview type="signalist" />
      </div>

      <div className="pc-body" style={{ padding: "36px 48px 40px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
        <div>
          <h4 style={{ fontSize: 12, fontWeight: 500, color: T.muted, textTransform: "uppercase", letterSpacing: "0.07em", margin: "0 0 16px" }}>
            {t.projects.engineeringHighlights}
          </h4>
          {t.projects.signalist.highlights.map((feature) => (
            <div key={feature} style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 12, fontSize: 15, color: T.muted }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: T.accent, flexShrink: 0, marginTop: 8 }} />
              <span>{feature}</span>
            </div>
          ))}
        </div>
        <div>
          <h4 style={{ fontSize: 12, fontWeight: 500, color: T.muted, textTransform: "uppercase", letterSpacing: "0.07em", margin: "0 0 16px" }}>
            {t.projects.techStack}
          </h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {techs.map((tech) => (
              <span key={tech} style={{ background: T.surface2, border: `1px solid ${T.border}`, color: T.blue, fontFamily: "'JetBrains Mono',monospace", fontSize: 12, padding: "6px 13px", borderRadius: 5 }}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="pc-foot" style={{ padding: "24px 48px", borderTop: `1px solid ${T.border}`, display: "flex", gap: 14, flexWrap: "wrap" }}>
        <Btn href="/projects/signalist" primary>
          <BookOpenText size={15} /> {t.projects.caseStudy}
        </Btn>
        <Btn href="https://stock-tracker-app-snowy.vercel.app" external>
          {t.projects.liveDemo} <ExternalLink size={14} />
        </Btn>
        <Btn href="https://github.com/Sipisak/stock-tracker-app" external>
          <Code2 size={15} /> {t.projects.sourceCode}
        </Btn>
      </div>
    </div>
  );
}

function ProjectCard({ title, tag, description, highlights, techs, link, linkText, caseStudyLink, preview }: {
  title: string;
  tag: string;
  description: string;
  highlights: readonly string[];
  techs: readonly string[];
  link: string;
  linkText: string;
  caseStudyLink?: string;
  preview?: "invoice" | "roofing";
}) {
  const [hovered, hoverProps] = useHover();
  const { t } = usePreferences();

  return (
    <article
      {...hoverProps}
      style={{
        background: T.surface,
        border: `1px solid ${hovered ? accentAlpha(0.5) : T.border}`,
        borderRadius: 14,
        overflow: "hidden",
        transition: "border-color .25s, transform .25s",
        transform: hovered ? "translateY(-2px)" : "none",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {preview && (
        <div style={{ padding: 14, borderBottom: `1px solid ${T.border}`, background: `linear-gradient(135deg, ${accentAlpha(0.08)}, transparent)` }}>
          <ProjectPreview type={preview} />
        </div>
      )}
      <div style={{ padding: 30, display: "flex", flexDirection: "column", flex: 1 }}>
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
        <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap", marginTop: 22 }}>
          {caseStudyLink && (
            <a href={caseStudyLink} style={{ display: "inline-flex", alignItems: "center", gap: 6, color: T.accent, textDecoration: "none", fontSize: 13, fontWeight: 500 }}>
              <BookOpenText size={14} /> {t.projects.caseStudy}
            </a>
          )}
          <a href={link} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 6, color: caseStudyLink ? T.muted : T.accent, textDecoration: "none", fontSize: 13, fontWeight: 500 }}>
            {linkText} <ChevronRight size={14} />
          </a>
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const { t, language } = usePreferences();
  const roofing = language === "cs"
    ? {
        tag: "Firemní web",
        description:
          "Responzivní WordPress web pro regionálního prodejce střešních materiálů, zaměřený na přehlednou nabídku, lokální SEO a získávání poptávek.",
        highlights: [
          "Jasná produktová navigace a opakované CTA",
          "Lokální obsah pro region Chomutov a Krušné hory",
          "Poptávkový formulář s GDPR souhlasem",
        ],
        live: "Navštívit web",
      }
    : {
        tag: "Business website",
        description:
          "A responsive WordPress website for a regional roofing-material supplier, focused on clear product discovery, local SEO, and lead generation.",
        highlights: [
          "Clear product navigation and repeated calls to action",
          "Local content for the Chomutov and Krušné hory region",
          "Quotation form with explicit GDPR consent",
        ],
        live: "Visit website",
      };

  return (
    <section id="projects" style={{ padding: "120px 48px", borderTop: `1px solid ${T.border}`, position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <FadeUp><Label>{t.projects.label}</Label></FadeUp>
        <FadeUp delay={0.1}><SectionTitle>{t.projects.title}</SectionTitle></FadeUp>
        <FadeUp delay={0.2}><FeaturedProject /></FadeUp>

        <div className="more-projects" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 24 }}>
          <FadeUp delay={0.34}>
            <ProjectCard
              title="Invoice Automation MVP"
              tag={t.projects.invoice.tag}
              description={t.projects.invoice.description}
              highlights={t.projects.invoice.highlights}
              techs={["Azure Functions", "TypeScript", "React", "Prisma", "Vitest", "ExcelJS"]}
              link="https://github.com/Sipisak/invoice-automation-mvp"
              linkText={t.projects.invoice.link}
              caseStudyLink="/projects/invoice-automation"
              preview="invoice"
            />
          </FadeUp>
          <FadeUp delay={0.44}>
            <ProjectCard
              title="Střechy Krušnohor"
              tag={roofing.tag}
              description={roofing.description}
              highlights={roofing.highlights}
              techs={["WordPress", "Responsive UI", "Local SEO", "Lead Forms"]}
              link="https://strechykrusnohor.cz/"
              linkText={roofing.live}
              caseStudyLink="/projects/strechy-krusnohor"
              preview="roofing"
            />
          </FadeUp>
          <FadeUp delay={0.54} style={{ gridColumn: "1 / -1" }}>
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
