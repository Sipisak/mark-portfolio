import { T } from "../theme";
import { usePreferences } from "../preferences";

export function Footer() {
  const { t } = usePreferences();

  return (
    <footer
      style={{
        padding: "36px 48px",
        borderTop: `1px solid ${T.border}`,
        textAlign: "center",
        position: "relative",
        zIndex: 1,
      }}
    >
      <p
        style={{
          fontFamily: "'JetBrains Mono',monospace",
          fontSize: 12,
          color: T.muted,
          margin: 0,
        }}
      >
        Marek Šípek © 2026 · {t.footer}
      </p>
    </footer>
  );
}
