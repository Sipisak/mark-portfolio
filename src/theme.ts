/* ─── palette & tokens ────────────────────────────── */
const ACCENT_RGB = "240, 112, 64";

/** Accent color at an arbitrary alpha — keeps every translucent accent in sync with ACCENT_RGB. */
export const accentAlpha = (alpha: number) => `rgba(${ACCENT_RGB}, ${alpha})`;

export const T = {
  bg: "#07090F",
  surface: "#0D1520",
  surface2: "#142030",
  border: "#1C2D42",
  text: "#CDD7E8",
  muted: "#556070",
  accent: "#F07040",
  accentHover: "#D85F30",
  accentLow: accentAlpha(0.1),
  blue: "#5599EE",
  white: "#FFFFFF",
} as const;
