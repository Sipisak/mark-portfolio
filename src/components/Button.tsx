import { type ReactNode, type CSSProperties } from "react";
import { T, accentAlpha } from "../theme";
import { useHover } from "../hooks/useHover";

/* ─── button ──────────────────────────────────────── */
export function Btn({
  href,
  children,
  primary,
  external,
}: {
  href: string;
  children: ReactNode;
  primary?: boolean;
  external?: boolean;
}) {
  const [hovered, hoverProps] = useHover();
  const base: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "12px 22px",
    borderRadius: 8,
    fontFamily: "'Inter',sans-serif",
    fontSize: 14,
    fontWeight: 500,
    textDecoration: "none",
    cursor: "pointer",
    border: "none",
    transition: "all .22s",
  };
  const style: CSSProperties = primary
    ? {
        ...base,
        background: hovered ? T.accentHover : T.accent,
        color: T.white,
        transform: hovered ? "translateY(-2px)" : "none",
        boxShadow: hovered ? `0 8px 32px ${accentAlpha(0.25)}` : "none",
      }
    : {
        ...base,
        background: hovered ? T.surface : "transparent",
        color: hovered ? T.text : T.muted,
        border: `1px solid ${hovered ? T.muted : T.border}`,
      };
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      style={style}
      {...hoverProps}
    >
      {children}
    </a>
  );
}
