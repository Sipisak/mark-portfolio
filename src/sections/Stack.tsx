import { type ReactNode } from "react";
import { T } from "../theme";
import { FadeUp, Stagger } from "../components/FadeUp";
import { Label, SectionTitle } from "../components/SectionHeading";
import { useHover } from "../hooks/useHover";

const STACK: { label: string; items: string[] }[] = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "Java", "Python", "SQL", "HTML", "CSS"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "Vite", "Tailwind CSS", "Shadcn UI"],
  },
  {
    label: "Backend & Data",
    items: [
      "Node.js",
      "Azure Functions",
      "REST APIs",
      "Prisma",
      "PostgreSQL",
      "Azure SQL",
      "MongoDB",
    ],
  },
  {
    label: "Cloud & Automation",
    items: [
      "Azure",
      "Docker",
      "GitHub Actions",
      "Inngest",
      "WebSockets",
      "Document Intelligence",
    ],
  },
  {
    label: "Testing & Tooling",
    items: ["Playwright", "Vitest", "Git", "Postman", "Linux", "Figma", "VS Code"],
  },
];

function Pill({ children }: { children: ReactNode }) {
  const [hovered, hoverProps] = useHover();
  return (
    <span
      {...hoverProps}
      style={{
        background: hovered ? T.accentLow : T.surface,
        border: `1px solid ${hovered ? T.accent : T.border}`,
        color: hovered ? T.accent : T.text,
        fontFamily: "'JetBrains Mono',monospace",
        fontSize: 13,
        padding: "9px 18px",
        borderRadius: 6,
        transition: "all .2s",
        cursor: "default",
        transform: hovered ? "translateY(-2px)" : "none",
        display: "inline-block",
      }}
    >
      {children}
    </span>
  );
}

export function Stack() {
  return (
    <section
      id="stack"
      style={{
        padding: "120px 48px",
        borderTop: `1px solid ${T.border}`,
        position: "relative",
        zIndex: 1,
      }}
    >
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <FadeUp>
          <Label>{"// Stack"}</Label>
        </FadeUp>
        <FadeUp delay={0.1}>
          <SectionTitle>Tools of the trade.</SectionTitle>
        </FadeUp>

        <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
          {STACK.map((row, rowIndex) => (
            <FadeUp key={row.label} delay={0.15 + rowIndex * 0.08}>
              <p
                style={{
                  fontFamily: "'JetBrains Mono',monospace",
                  fontSize: 11,
                  color: T.muted,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: 14,
                }}
              >
                {row.label}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                <Stagger baseDelay={0.05} increment={0.04}>
                  {row.items.map((item) => (
                    <Pill key={item}>{item}</Pill>
                  ))}
                </Stagger>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
