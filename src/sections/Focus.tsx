import { Activity, ServerCog, Sparkles } from "lucide-react";
import { T, accentAlpha } from "../theme";
import { FadeUp } from "../components/FadeUp";
import { Label, SectionTitle } from "../components/SectionHeading";
import { Section } from "../components/Section";
import { useHover } from "../hooks/useHover";
import { usePreferences } from "../preferences";

const ICONS = [ServerCog, Sparkles, Activity];

function FocusCard({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  index: number;
}) {
  const [hovered, hoverProps] = useHover();
  const Icon = ICONS[index];

  return (
    <article
      {...hoverProps}
      style={{
        height: "100%",
        padding: 28,
        background: hovered ? T.surface2 : T.surface,
        border: `1px solid ${hovered ? accentAlpha(0.45) : T.border}`,
        borderRadius: 14,
        transition: "background .25s, border-color .25s, transform .25s",
        transform: hovered ? "translateY(-3px)" : "none",
      }}
    >
      <div
        style={{
          width: 42,
          height: 42,
          display: "grid",
          placeItems: "center",
          borderRadius: 10,
          color: T.accent,
          background: T.accentLow,
          border: `1px solid ${accentAlpha(0.25)}`,
          marginBottom: 22,
        }}
      >
        <Icon size={20} />
      </div>
      <h3
        style={{
          margin: "0 0 11px",
          color: T.white,
          fontFamily: "'Space Grotesk',sans-serif",
          fontSize: 20,
          lineHeight: 1.3,
          letterSpacing: "-0.015em",
        }}
      >
        {title}
      </h3>
      <p style={{ margin: 0, color: T.muted, fontSize: 15, lineHeight: 1.7 }}>
        {description}
      </p>
    </article>
  );
}

export function Focus() {
  const { t } = usePreferences();

  return (
    <Section id="focus">
      <FadeUp>
        <Label>{t.focus.label}</Label>
      </FadeUp>
      <FadeUp delay={0.1}>
        <SectionTitle>{t.focus.title}</SectionTitle>
      </FadeUp>

      <div className="focus-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
        {t.focus.items.map((item, index) => (
          <FadeUp key={item.title} delay={0.18 + index * 0.1}>
            <FocusCard title={item.title} description={item.description} index={index} />
          </FadeUp>
        ))}
      </div>
    </Section>
  );
}
