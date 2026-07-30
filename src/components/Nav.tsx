import { useEffect, useState, type ReactNode } from "react";
import { Moon, Sun } from "lucide-react";
import { T } from "../theme";
import { useHover } from "../hooks/useHover";
import { usePreferences } from "../preferences";

function NavLink({ href, label }: { href: string; label: string }) {
  const [hovered, hoverProps] = useHover();
  return (
    <a
      href={href}
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

function ControlButton({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children: ReactNode;
}) {
  const [hovered, hoverProps] = useHover();
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={onClick}
      {...hoverProps}
      style={{
        height: 34,
        minWidth: 34,
        padding: "0 9px",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 7,
        border: `1px solid ${hovered ? T.accent : T.border}`,
        background: hovered ? T.accentLow : T.surface,
        color: hovered ? T.accent : T.text,
        fontFamily: "'JetBrains Mono',monospace",
        fontSize: 11,
        fontWeight: 500,
        cursor: "pointer",
        transition: "all .2s",
      }}
    >
      {children}
    </button>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { language, theme, t, toggleLanguage, toggleTheme } = usePreferences();
  const isHome = window.location.pathname === "/";
  const sectionHref = (id: string) => (isHome ? `#${id}` : `/#${id}`);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: sectionHref("about"), label: t.nav.about },
    { href: sectionHref("experience"), label: t.nav.experience },
    { href: sectionHref("stack"), label: t.nav.stack },
    { href: sectionHref("projects"), label: t.nav.projects },
    { href: sectionHref("contact"), label: t.nav.contact },
  ];

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
        gap: 24,
        background: T.nav,
        backdropFilter: "blur(14px)",
        borderBottom: `1px solid ${scrolled ? T.border : "transparent"}`,
        transition: "background-color .25s, border-color .3s",
      }}
    >
      <a
        href={isHome ? "#hero" : "/"}
        style={{
          fontFamily: "'Space Grotesk',sans-serif",
          fontWeight: 700,
          fontSize: 17,
          color: T.white,
          textDecoration: "none",
          letterSpacing: "-0.02em",
          flexShrink: 0,
        }}
      >
        Marek Šípek<span style={{ color: T.accent }}>.</span>
      </a>

      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
        <div className="nav-primary-links" style={{ display: "flex", gap: 24, alignItems: "center" }}>
          {links.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </div>

        <div className="nav-controls" style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <ControlButton
            label={language === "en" ? t.controls.switchToCzech : t.controls.switchToEnglish}
            onClick={toggleLanguage}
          >
            {language === "en" ? "CZ" : "EN"}
          </ControlButton>
          <ControlButton
            label={theme === "dark" ? t.controls.switchToLight : t.controls.switchToDark}
            onClick={toggleTheme}
          >
            {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
          </ControlButton>
        </div>
      </div>
    </nav>
  );
}
