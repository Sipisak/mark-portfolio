import { useState, type ReactNode } from "react";
import { T } from "../theme";
import { FadeUp } from "../components/FadeUp";
import { Label, SectionTitle } from "../components/SectionHeading";

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

export function About() {
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
