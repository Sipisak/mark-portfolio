import { type ReactNode } from "react";
import { T } from "../theme";
import { FadeUp } from "../components/FadeUp";
import { Label, SectionTitle } from "../components/SectionHeading";
import { Section } from "../components/Section";
import { useHover } from "../hooks/useHover";

function StatBox({ val, sub }: { val: string; sub: string }) {
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
        {val}
        <span style={{ color: T.accent, fontSize: "0.6em" }}>.</span>
      </div>
      <div style={{ fontSize: 13, color: T.muted, lineHeight: 1.4 }}>{sub}</div>
    </div>
  );
}

export function About() {
  const paragraphs: ReactNode[] = [
    <>
      I'm a{" "}
      <strong style={{ color: T.text, fontWeight: 500 }}>
        software engineer
      </strong>{" "}
      based in the Czech Republic, holding an Ing./MSc in Applied Informatics
      from the{" "}
      <strong style={{ color: T.text, fontWeight: 500 }}>
        University of Hradec Králové
      </strong>
      .
    </>,
    <>
      I build full-stack applications, backend services, system integrations,
      and automation workflows — from initial architecture and implementation
      to testing, deployment, and monitoring.
    </>,
    <>
      My current work focuses on{" "}
      <strong style={{ color: T.text, fontWeight: 500 }}>
        AI-powered automation, document processing, event-driven systems, and
        internal business applications
      </strong>{" "}
      using TypeScript, Node.js, React, Azure, and SQL.
    </>,
  ];

  const stats = [
    { val: "Ing", sub: "MSc Applied Informatics" },
    { val: "FS", sub: "Frontend to Infrastructure" },
    { val: "AI", sub: "Automation & Integrations" },
    { val: "AZ", sub: "Azure Development" },
  ];

  return (
    <Section id="about">
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
            {paragraphs.map((paragraph, index) => (
              <p
                key={index}
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
            {stats.map((stat) => (
              <StatBox key={stat.sub} {...stat} />
            ))}
          </div>
        </FadeUp>
      </div>
    </Section>
  );
}
