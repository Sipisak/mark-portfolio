import { BriefcaseBusiness, GraduationCap } from "lucide-react";
import { T, accentAlpha } from "../theme";
import { FadeUp } from "../components/FadeUp";
import { Label, SectionTitle } from "../components/SectionHeading";
import { Section } from "../components/Section";
import { useHover } from "../hooks/useHover";

const EXPERIENCE = [
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
];

function ExperienceCard({ item }: { item: (typeof EXPERIENCE)[number] }) {
  const [hovered, hoverProps] = useHover();
  const Icon = item.type === "education" ? GraduationCap : BriefcaseBusiness;

  return (
    <article
      {...hoverProps}
      style={{
        position: "relative",
        background: hovered ? T.surface2 : T.surface,
        border: `1px solid ${hovered ? accentAlpha(0.45) : T.border}`,
        borderRadius: 14,
        padding: 28,
        transition: "background .25s, border-color .25s, transform .25s",
        transform: hovered ? "translateY(-2px)" : "none",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: 20,
          marginBottom: 18,
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
          <div
            style={{
              width: 38,
              height: 38,
              borderRadius: 9,
              display: "grid",
              placeItems: "center",
              flexShrink: 0,
              color: T.accent,
              background: T.accentLow,
              border: `1px solid ${accentAlpha(0.24)}`,
            }}
          >
            <Icon size={18} />
          </div>
          <div>
            <h3
              style={{
                margin: 0,
                color: T.white,
                fontFamily: "'Space Grotesk',sans-serif",
                fontSize: 20,
                lineHeight: 1.3,
                letterSpacing: "-0.015em",
              }}
            >
              {item.role}
            </h3>
            <p style={{ margin: "5px 0 0", color: T.accent, fontSize: 14, fontWeight: 500 }}>
              {item.organization}
            </p>
          </div>
        </div>
        <span
          style={{
            color: T.muted,
            fontFamily: "'JetBrains Mono',monospace",
            fontSize: 11,
            whiteSpace: "nowrap",
            letterSpacing: "0.04em",
          }}
        >
          {item.period}
        </span>
      </div>
      <p style={{ margin: 0, color: T.muted, fontSize: 15, lineHeight: 1.7 }}>
        {item.description}
      </p>
    </article>
  );
}

export function Experience() {
  return (
    <Section id="experience">
      <FadeUp>
        <Label>{"// Experience"}</Label>
      </FadeUp>
      <FadeUp delay={0.1}>
        <SectionTitle>Where I've worked and learned.</SectionTitle>
      </FadeUp>

      <div style={{ display: "grid", gap: 16 }}>
        {EXPERIENCE.map((item, index) => (
          <FadeUp key={`${item.organization}-${item.role}`} delay={0.18 + index * 0.1}>
            <ExperienceCard item={item} />
          </FadeUp>
        ))}
      </div>
    </Section>
  );
}
