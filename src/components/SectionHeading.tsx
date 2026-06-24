import { type ReactNode } from "react";
import { T } from "../theme";

/* ─── section heading helpers ─────────────────────── */
export function Label({ children }: { children: ReactNode }) {
  return (
    <p
      style={{
        fontFamily: "'JetBrains Mono',monospace",
        fontSize: 12,
        color: T.accent,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        marginBottom: 18,
      }}
    >
      {children}
    </p>
  );
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2
      style={{
        fontFamily: "'Space Grotesk',sans-serif",
        fontWeight: 700,
        fontSize: "clamp(30px,4vw,48px)",
        color: T.white,
        letterSpacing: "-0.025em",
        lineHeight: 1.08,
        margin: "0 0 52px",
      }}
    >
      {children}
    </h2>
  );
}
