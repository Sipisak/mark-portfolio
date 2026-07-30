/* ─── theme-aware palette & tokens ────────────────── */

/** Accent color at an arbitrary alpha, driven by the active CSS theme. */
export const accentAlpha = (alpha: number) =>
  `rgba(var(--color-accent-rgb), ${alpha})`;

export const T = {
  bg: "var(--color-bg)",
  nav: "var(--color-nav)",
  surface: "var(--color-surface)",
  surface2: "var(--color-surface-2)",
  border: "var(--color-border)",
  text: "var(--color-text)",
  muted: "var(--color-muted)",
  accent: "var(--color-accent)",
  accentHover: "var(--color-accent-hover)",
  accentLow: accentAlpha(0.1),
  blue: "var(--color-blue)",
  white: "var(--color-heading)",
} as const;
