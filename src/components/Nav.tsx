import { useState, useEffect } from "react";
import { T } from "../theme";
import { useHover } from "../hooks/useHover";

function NavLink({ label }: { label: string }) {
  const [hovered, hoverProps] = useHover();
  return (
    <a
      href={`#${label.toLowerCase()}`}
      {...hoverProps}
      style={{
        fontSize: 14,
        fontWeight: 500,
        color: hovered ? T.text : T.muted,
        textDecoration: "none",
        transition: "color .2s",
      }}
    >
      {label}
    </a>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
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
      <div className="nav-links" style={{ display: "flex", gap: 24, alignItems: "center" }}>
        {["About", "Experience", "Stack", "Projects", "Contact"].map((section) => (
          <NavLink key={section} label={section} />
        ))}
      </div>
    </nav>
  );
}
