import { type ReactNode } from "react";
import { T } from "../theme";
import { FadeUp, Stagger } from "../components/FadeUp";
import { Label, SectionTitle } from "../components/SectionHeading";
import { useHover } from "../hooks/useHover";
import { usePreferences } from "../preferences";

const STACK_ITEMS = {
  languages: ["TypeScript", "JavaScript", "Java", "Python", "SQL", "HTML", "CSS"],
  frontend: ["React", "Next.js", "Vite", "Tailwind CSS", "Shadcn UI"],
  backend: [
    "Node.js",
    "Azure Functions",
    "REST APIs",
    "Prisma",
    "PostgreSQL",
    "Azure SQL",
    "MongoDB",
  ],
  cloud: [
    "Azure",
    "Docker",
    "GitHub Actions",
    "Inngest",
    "WebSockets",
    "Document Intelligence",
  ],
  testing: ["Playwright", "Vitest", "Git", "Postman", "Linux", "Figma", "VS Code"],
} as const;

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
  const { t } = usePreferences();
  const rows = [
    { label: t.stack.categories.languages, items: STACK_ITEMS.languages },
    { label: t.stack.categories.frontend, items: STACK_ITEMS.frontend },
    { label: t.stack.categories.backend, items: STACK_ITEMS.backend },
    { label: t.stack.categories.cloud, items: STACK_ITEMS.cloud },
    { label: t.stack.categories.testing, items: STACK_ITEMS.testing },
  ];

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
          <Label>{t.stack.label}</Label>
        </FadeUp>
        <FadeUp delay={0.1}>
          <SectionTitle>{t.stack.title}</SectionTitle>
        </FadeUp>

        <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
          {rows.map((row, rowIndex) => (
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
