import { T } from "../theme";

export function Footer() {
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
      <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, color: T.muted, margin: 0 }}>
        Mark © 2026 · Built with care
      </p>
    </footer>
  );
}
