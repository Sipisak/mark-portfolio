import { useState, useEffect } from "react";
import { T } from "../theme";

/* ─── nav ─────────────────────────────────────────── */
export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "18px 48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "rgba(7,9,15,0.82)",
        backdropFilter: "blur(14px)",
        borderBottom: `1px solid ${scrolled ? T.border : "transparent"}`,
        transition: "border-color .3s",
      }}
    >
      <a
        href="#hero"
        style={{
          fontFamily: "'Space Grotesk',sans-serif",
          fontWeight: 700,
          fontSize: 17,
          color: T.white,
          textDecoration: "none",
          letterSpacing: "-0.02em",
        }}
      >
        mark<span style={{ color: T.accent }}>.</span>
      </a>
      <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
        {["About", "Stack", "Projects", "Contact"].map((s) => (
          <a
            key={s}
            href={`#${s.toLowerCase()}`}
            style={{
              fontSize: 14,
              fontWeight: 500,
              color: T.muted,
              textDecoration: "none",
              transition: "color .2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = T.text)}
            onMouseLeave={(e) => (e.currentTarget.style.color = T.muted)}
          >
            {s}
          </a>
        ))}
      </div>
    </nav>
  );
}
