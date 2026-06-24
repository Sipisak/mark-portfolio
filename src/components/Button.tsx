import { useState, type ReactNode, type CSSProperties } from "react";
import { T } from "../theme";

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
  const [hovered, setHovered] = useState(false);
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
        background: hovered ? "#d85f30" : T.accent,
        color: T.white,
        transform: hovered ? "translateY(-2px)" : "none",
        boxShadow: hovered ? "0 8px 32px rgba(240,112,64,0.25)" : "none",
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
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </a>
  );
}
