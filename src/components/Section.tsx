import { type ReactNode } from "react";
import { T } from "../theme";

/* ─── standard page section ───────────────────────── */

// A full-width band with a top divider and a centered max-width column —
// the shell shared by About, Stack, Projects, and Contact. Hero is bespoke
// (full-height, no divider) and intentionally does not use this.
export function Section({ id, children }: { id: string; children: ReactNode }) {
  return (
    <section
      id={id}
      style={{
        padding: "120px 48px",
        borderTop: `1px solid ${T.border}`,
        position: "relative",
        zIndex: 1,
      }}
    >
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>{children}</div>
    </section>
  );
}
