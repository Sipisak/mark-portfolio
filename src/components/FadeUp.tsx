import { type ReactNode, type CSSProperties } from "react";
import { useReveal } from "../hooks/useReveal";

/* ─── reusable fade-up wrapper ────────────────────── */
export function FadeUp({
  children,
  delay = 0,
  style = {},
}: {
  children: ReactNode;
  delay?: number;
  style?: CSSProperties;
}) {
  const [ref, visible] = useReveal(0.1);
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.7s cubic-bezier(.4,0,.2,1) ${delay}s, transform 0.7s cubic-bezier(.4,0,.2,1) ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/* ─── stagger wrapper for children ────────────────── */
export function Stagger({
  children,
  baseDelay = 0,
  increment = 0.07,
}: {
  children: ReactNode;
  baseDelay?: number;
  increment?: number;
}) {
  const [ref, visible] = useReveal(0.05);
  const items = Array.isArray(children) ? children : [children];
  // The wrapper is display:contents so children participate directly in the
  // parent's flex/grid layout — but a display:contents element has no layout
  // box, so an IntersectionObserver on it never fires. Observe the first real
  // child box instead; when it enters the viewport the whole group reveals.
  return (
    <div style={{ display: "contents" }}>
      {items.map((child, i) => (
        <div
          key={i}
          ref={i === 0 ? ref : undefined}
          style={{
            opacity: visible ? 1 : 0,
            transform: visible
              ? "translateY(0) scale(1)"
              : "translateY(16px) scale(0.96)",
            transition: `all 0.5s cubic-bezier(.4,0,.2,1) ${
              baseDelay + i * increment
            }s`,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
