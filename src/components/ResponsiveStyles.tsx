import { useEffect } from "react";

export function ResponsiveStyles() {
  useEffect(() => {
    const id = "portfolio-responsive-css";
    if (document.getElementById(id)) return;
    const style = document.createElement("style");
    style.id = id;
    style.textContent = `
      html { scroll-behavior:smooth; }
      .about-grid { display:grid; grid-template-columns:1fr 1fr; gap:72px; align-items:start; }
      .stat-grid { grid-template-columns:1fr 1fr; }
      @media (max-width: 980px) {
        .nav-links { gap:16px !important; }
        .about-grid { grid-template-columns:1fr; gap:48px; }
        .pc-body { grid-template-columns:1fr !important; }
        .more-projects { grid-template-columns:1fr !important; }
      }
      @media (max-width: 760px) {
        .nav-links a:nth-of-type(3), .nav-links a:nth-of-type(5) { display:none; }
      }
      @media (max-width: 640px) {
        nav { padding:16px 24px !important; }
        section { padding-left:24px !important; padding-right:24px !important; }
        .pc-head, .pc-body, .pc-foot { padding-left:24px !important; padding-right:24px !important; }
        .pc-head { flex-direction:column !important; }
        .pc-foot { flex-direction:column !important; }
        .stat-grid { grid-template-columns:1fr; }
        .nav-links { gap:14px !important; }
        .nav-links a { font-size:13px !important; }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.getElementById(id)?.remove();
    };
  }, []);
  return null;
}
