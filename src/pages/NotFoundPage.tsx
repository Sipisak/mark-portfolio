import { ArrowLeft } from "lucide-react";
import { T } from "../theme";
import { usePreferences } from "../preferences";

export function NotFoundPage() {
  const { language } = usePreferences();
  const copy = language === "cs"
    ? {
        label: "// Stránka nenalezena",
        title: "Tady nic není.",
        body: "Požadovaná stránka neexistuje nebo byla přesunuta.",
        back: "Zpět na hlavní stránku",
      }
    : {
        label: "// Page not found",
        title: "Nothing here.",
        body: "The page you requested does not exist or may have moved.",
        back: "Back to homepage",
      };

  return (
    <main
      style={{
        position: "relative",
        zIndex: 1,
        minHeight: "calc(100vh - 96px)",
        padding: "160px 48px 100px",
        display: "grid",
        placeItems: "center",
      }}
    >
      <section style={{ maxWidth: 760, textAlign: "center" }}>
        <p
          style={{
            margin: "0 0 18px",
            color: T.accent,
            fontFamily: "'JetBrains Mono',monospace",
            fontSize: 12,
            letterSpacing: ".08em",
            textTransform: "uppercase",
          }}
        >
          {copy.label}
        </p>
        <div
          aria-hidden="true"
          style={{
            color: T.accent,
            fontFamily: "'Space Grotesk',sans-serif",
            fontSize: "clamp(72px,16vw,170px)",
            fontWeight: 700,
            lineHeight: 0.85,
            letterSpacing: "-0.07em",
            opacity: 0.18,
          }}
        >
          404
        </div>
        <h1
          style={{
            margin: "18px 0 14px",
            color: T.white,
            fontFamily: "'Space Grotesk',sans-serif",
            fontSize: "clamp(38px,7vw,68px)",
            lineHeight: 1,
            letterSpacing: "-0.045em",
          }}
        >
          {copy.title}
        </h1>
        <p style={{ margin: "0 auto 30px", color: T.muted, fontSize: 17, lineHeight: 1.7 }}>
          {copy.body}
        </p>
        <a
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 9,
            color: T.accent,
            textDecoration: "none",
            fontSize: 14,
            fontWeight: 500,
          }}
        >
          <ArrowLeft size={16} /> {copy.back}
        </a>
      </section>
    </main>
  );
}
