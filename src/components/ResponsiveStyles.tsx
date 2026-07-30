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

      @media (max-width: 1040px) {
        .nav-primary-links { gap:16px !important; }
        .about-grid { grid-template-columns:1fr; gap:48px; }
        .focus-grid { grid-template-columns:1fr !important; }
        .pc-body { grid-template-columns:1fr !important; }
        .more-projects { grid-template-columns:1fr !important; }
        .case-hero { grid-template-columns:1fr !important; align-items:start !important; gap:30px !important; }
        .case-hero > div:last-child { justify-content:flex-start !important; }
        .case-two-column, .decision-grid { grid-template-columns:1fr !important; }
      }

      @media (max-width: 860px) {
        .nav-primary-links a:nth-child(3),
        .nav-primary-links a:nth-child(5) { display:none; }
        .preview-shell { grid-template-columns:96px 1fr !important; }
        .invoice-preview-grid { grid-template-columns:1fr !important; }
        .roofing-preview-hero { grid-template-columns:1fr !important; }
        .roofing-products { grid-template-columns:repeat(2,1fr) !important; }
        .case-facts { grid-template-columns:1fr !important; }
      }

      @media (max-width: 680px) {
        nav { padding:14px 24px !important; }
        section, main { padding-left:24px !important; padding-right:24px !important; }
        .pc-head, .pc-body, .pc-foot { padding-left:24px !important; padding-right:24px !important; }
        .pc-head { flex-direction:column !important; }
        .pc-foot { flex-direction:column !important; align-items:stretch !important; }
        .pc-foot a { justify-content:center !important; }
        .stat-grid { grid-template-columns:1fr; }
        .nav-primary-links { display:none !important; }
        .preview-shell { grid-template-columns:1fr !important; }
        .preview-shell aside { display:none !important; }
        .roofing-preview-nav { display:none !important; }
        .roofing-preview-hero > div:last-child { display:none !important; }
        .architecture-flow { padding-bottom:10px !important; }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.getElementById(id)?.remove();
    };
  }, []);

  return null;
}
