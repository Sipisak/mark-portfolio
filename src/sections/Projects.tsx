import { ExternalLink, Code2, ChevronRight } from "lucide-react";
import { T, accentAlpha } from "../theme";
import { FadeUp } from "../components/FadeUp";
import { Label, SectionTitle } from "../components/SectionHeading";
import { Btn } from "../components/Button";
import { useHover } from "../hooks/useHover";

function FeaturedProject() {
  const [hovered, hoverProps] = useHover();
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
            border: `1px solid ${accentAlpha(0.28)}`,
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
  const [hovered, hoverProps] = useHover();
  return (
    <div
      {...hoverProps}
      style={{
        background: T.surface,
        border: `1px solid ${hovered ? accentAlpha(0.4) : T.border}`,
        borderRadius: 12,
        padding: 28,
        transition: "border-color .25s, transform .25s",
        transform: hovered ? "translateY(-2px)" : "none",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
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

export function Projects() {
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
