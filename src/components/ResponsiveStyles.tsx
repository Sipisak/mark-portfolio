import { useEffect } from "react";

/* ─── responsive helper styles ────────────────────── */
export function ResponsiveStyles() {
  useEffect(() => {
    const id = "portfolio-responsive-css";
    if (document.getElementById(id)) return;
    const style = document.createElement("style");
    style.id = id;
    style.textContent = `
      .about-grid { display:grid; grid-template-columns:1fr 1fr; gap:72px; align-items:start; }
      .stat-grid { grid-template-columns:1fr 1fr; }
      @media (max-width: 900px) {
        .about-grid { grid-template-columns:1fr; gap:48px; }
        .pc-body { grid-template-columns:1fr !important; }
        .more-projects { grid-template-columns:1fr !important; }
      }
      @media (max-width: 640px) {
        nav { padding:16px 24px !important; }
        .pc-head, .pc-body, .pc-foot { padding-left:24px !important; padding-right:24px !important; }
        .pc-head { flex-direction:column !important; }
        .pc-foot { flex-direction:column !important; }
        .stat-grid { grid-template-columns:1fr; }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.getElementById(id)?.remove();
    };
  }, []);
  return null;
}
