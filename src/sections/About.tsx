import { T } from "../theme";
import { FadeUp } from "../components/FadeUp";
import { Label, SectionTitle } from "../components/SectionHeading";
import { Section } from "../components/Section";
import { useHover } from "../hooks/useHover";
import { usePreferences } from "../preferences";

function StatBox({ value, label }: { value: string; label: string }) {
  const [hovered, hoverProps] = useHover();
  return (
    <div
      {...hoverProps}
      style={{
        background: hovered ? T.surface2 : T.surface,
        padding: "28px 24px",
        transition: "background .25s",
        cursor: "default",
      }}
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
        {value}
        <span style={{ color: T.accent, fontSize: "0.6em" }}>.</span>
      </div>
      <div style={{ fontSize: 13, color: T.muted, lineHeight: 1.4 }}>{label}</div>
    </div>
  );
}

export function About() {
  const { t } = usePreferences();

  return (
    <Section id="about">
      <FadeUp>
        <Label>{t.about.label}</Label>
      </FadeUp>
      <FadeUp delay={0.1}>
        <SectionTitle>
          {t.about.titleLine1}
          <br />
          {t.about.titleLine2}
        </SectionTitle>
      </FadeUp>

      <div className="about-grid">
        <FadeUp delay={0.2}>
          <div>
            {t.about.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                style={{
                  fontSize: 17,
                  color: T.muted,
                  lineHeight: 1.75,
                  marginBottom: 18,
                }}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </FadeUp>

        <FadeUp delay={0.35}>
          <div
            className="stat-grid"
            style={{
              display: "grid",
              gap: 1,
              background: T.border,
              border: `1px solid ${T.border}`,
              borderRadius: 14,
              overflow: "hidden",
            }}
          >
            {t.about.stats.map((stat) => (
              <StatBox key={stat.label} {...stat} />
            ))}
          </div>
        </FadeUp>
      </div>
    </Section>
  );
}
