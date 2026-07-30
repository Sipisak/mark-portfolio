import { useEffect } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, Code2, ExternalLink } from "lucide-react";
import { getCaseStudy, type ProjectSlug } from "../caseStudies";
import { ProjectPreview } from "../components/ProjectPreview";
import { Btn } from "../components/Button";
import { T, accentAlpha } from "../theme";
import { usePreferences } from "../preferences";

function SectionBlock({ title, body }: { title: string; body: string }) {
  return (
    <section style={{ padding: 28, borderRadius: 14, background: T.surface, border: `1px solid ${T.border}` }}>
      <h2 style={{ margin: "0 0 13px", color: T.white, fontFamily: "'Space Grotesk',sans-serif", fontSize: 23, letterSpacing: "-0.02em" }}>
        {title}
      </h2>
      <p style={{ margin: 0, color: T.muted, fontSize: 16, lineHeight: 1.8 }}>{body}</p>
    </section>
  );
}

function ListSection({ title, items }: { title: string; items: string[] }) {
  return (
    <section style={{ padding: 28, borderRadius: 14, background: T.surface, border: `1px solid ${T.border}` }}>
      <h2 style={{ margin: "0 0 18px", color: T.white, fontFamily: "'Space Grotesk',sans-serif", fontSize: 23, letterSpacing: "-0.02em" }}>
        {title}
      </h2>
      <div style={{ display: "grid", gap: 13 }}>
        {items.map((item) => (
          <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 11, color: T.muted, fontSize: 15, lineHeight: 1.65 }}>
            <CheckCircle2 size={17} color={T.accent} style={{ marginTop: 4, flexShrink: 0 }} />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ProjectCaseStudy({ slug }: { slug: ProjectSlug }) {
  const { language, t } = usePreferences();
  const project = getCaseStudy(language, slug);
  const isWebsite = slug === "strechy-krusnohor";
  const copy = language === "cs"
    ? {
        back: "Zpět na projekty",
        source: "Zdrojový kód",
        live: isWebsite ? "Živý web" : "Živé demo",
        overview: "Přehled projektu",
      }
    : {
        back: "Back to projects",
        source: "Source code",
        live: isWebsite ? "Live website" : "Live demo",
        overview: "Project overview",
      };

  useEffect(() => {
    document.title = `${project.title} — Marek Šípek`;
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    description?.setAttribute("content", project.summary);
    window.scrollTo(0, 0);
  }, [project.title, project.summary]);

  return (
    <main style={{ position: "relative", zIndex: 1, padding: "145px 48px 110px" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <a
          href="/#projects"
          style={{ display: "inline-flex", alignItems: "center", gap: 8, color: T.muted, textDecoration: "none", fontSize: 14, marginBottom: 42 }}
        >
          <ArrowLeft size={16} /> {copy.back}
        </a>

        <div className="case-hero" style={{ display: "grid", gridTemplateColumns: "1.15fr .85fr", gap: 54, alignItems: "end", marginBottom: 46 }}>
          <div>
            <p style={{ margin: "0 0 18px", color: T.accent, fontFamily: "'JetBrains Mono',monospace", fontSize: 12, letterSpacing: ".07em", textTransform: "uppercase" }}>
              {project.eyebrow}
            </p>
            <h1 style={{ margin: "0 0 22px", color: T.white, fontFamily: "'Space Grotesk',sans-serif", fontSize: "clamp(48px,7vw,86px)", lineHeight: .95, letterSpacing: "-0.045em" }}>
              {project.title}<span style={{ color: T.accent }}>.</span>
            </h1>
            <p style={{ margin: 0, maxWidth: 700, color: T.muted, fontSize: 18, lineHeight: 1.75 }}>
              {project.summary}
            </p>
          </div>

          <div style={{ display: "flex", justifyContent: "flex-end", gap: 12, flexWrap: "wrap" }}>
            {project.liveUrl && (
              <Btn href={project.liveUrl} primary external>
                {copy.live} <ExternalLink size={14} />
              </Btn>
            )}
            {project.repositoryUrl && (
              <Btn href={project.repositoryUrl} external>
                <Code2 size={15} /> {copy.source}
              </Btn>
            )}
          </div>
        </div>

        <div style={{ padding: 16, borderRadius: 18, background: `linear-gradient(135deg, ${accentAlpha(0.12)}, transparent 60%)`, border: `1px solid ${T.border}`, marginBottom: 24 }}>
          <ProjectPreview type={project.preview} />
        </div>

        <section style={{ marginBottom: 24, padding: 28, borderRadius: 14, background: T.surface, border: `1px solid ${T.border}` }}>
          <p style={{ margin: "0 0 16px", color: T.muted, fontFamily: "'JetBrains Mono',monospace", fontSize: 10, letterSpacing: ".08em", textTransform: "uppercase" }}>
            {copy.overview}
          </p>
          <div className="case-facts" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 1, background: T.border, border: `1px solid ${T.border}`, borderRadius: 10, overflow: "hidden" }}>
            {project.facts.map((fact) => (
              <div key={fact.label} style={{ padding: 20, background: T.bg }}>
                <div style={{ color: T.muted, fontSize: 10, textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 7 }}>{fact.label}</div>
                <div style={{ color: T.text, fontSize: 14, lineHeight: 1.5 }}>{fact.value}</div>
              </div>
            ))}
          </div>
        </section>

        <div className="case-two-column" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 24 }}>
          <SectionBlock {...project.problem} />
          <SectionBlock {...project.solution} />
        </div>

        <section style={{ padding: 30, borderRadius: 14, background: T.surface, border: `1px solid ${T.border}`, marginBottom: 24 }}>
          <h2 style={{ margin: "0 0 10px", color: T.white, fontFamily: "'Space Grotesk',sans-serif", fontSize: 25, letterSpacing: "-0.02em" }}>
            {project.architecture.title}
          </h2>
          <p style={{ margin: "0 0 26px", color: T.muted, fontSize: 15, lineHeight: 1.7 }}>{project.architecture.intro}</p>
          <div className="architecture-flow" style={{ display: "flex", alignItems: "stretch", gap: 10, overflowX: "auto", paddingBottom: 4 }}>
            {project.architecture.steps.map((step, index) => (
              <div key={step} style={{ display: "contents" }}>
                <div style={{ minWidth: 140, flex: 1, padding: "16px 14px", borderRadius: 9, background: T.bg, border: `1px solid ${T.border}`, color: T.text, fontSize: 13, lineHeight: 1.45, textAlign: "center" }}>
                  <span style={{ display: "block", color: T.accent, fontFamily: "'JetBrains Mono',monospace", fontSize: 9, marginBottom: 7 }}>0{index + 1}</span>
                  {step}
                </div>
                {index < project.architecture.steps.length - 1 && (
                  <ArrowRight size={17} color={T.muted} style={{ alignSelf: "center", flexShrink: 0 }} />
                )}
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 24 }}>
          <h2 style={{ margin: "0 0 18px", color: T.white, fontFamily: "'Space Grotesk',sans-serif", fontSize: 28, letterSpacing: "-0.025em" }}>
            {project.decisions.title}
          </h2>
          <div className="decision-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {project.decisions.items.map((item, index) => (
              <article key={item.title} style={{ padding: 25, borderRadius: 13, background: T.surface, border: `1px solid ${T.border}` }}>
                <span style={{ color: T.accent, fontFamily: "'JetBrains Mono',monospace", fontSize: 10 }}>0{index + 1}</span>
                <h3 style={{ margin: "10px 0 10px", color: T.white, fontFamily: "'Space Grotesk',sans-serif", fontSize: 19 }}>{item.title}</h3>
                <p style={{ margin: 0, color: T.muted, fontSize: 14, lineHeight: 1.7 }}>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="case-two-column" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <ListSection {...project.quality} />
          <ListSection {...project.limitations} />
        </div>

        <div style={{ marginTop: 46, paddingTop: 28, borderTop: `1px solid ${T.border}`, display: "flex", justifyContent: "space-between", gap: 20, alignItems: "center", flexWrap: "wrap" }}>
          <a href="/#projects" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: T.accent, textDecoration: "none", fontSize: 14, fontWeight: 500 }}>
            <ArrowLeft size={15} /> {copy.back}
          </a>
          <span style={{ color: T.muted, fontSize: 12 }}>{t.footer}</span>
        </div>
      </div>
    </main>
  );
}
