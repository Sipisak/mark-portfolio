import { useState, useEffect } from "react";
import { Github, Linkedin, ArrowDown, ChevronRight } from "lucide-react";
import { T, accentAlpha } from "../theme";
import { Btn } from "../components/Button";

/* ─── hero ────────────────────────────────────────── */
export function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  const trans = (delay: number) =>
    `opacity 0.9s cubic-bezier(.4,0,.2,1) ${delay}s, transform 0.9s cubic-bezier(.4,0,.2,1) ${delay}s`;

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        padding: "140px 48px 100px",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "-5%",
          width: "60vw",
          height: "60vw",
          background: `radial-gradient(ellipse, ${accentAlpha(
            0.07
          )} 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          width: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        <p
          style={{
            fontFamily: "'JetBrains Mono',monospace",
            fontSize: 13,
            color: T.accent,
            letterSpacing: "0.07em",
            textTransform: "uppercase",
            marginBottom: 28,
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(20px)",
            transition: trans(0.15),
          }}
        >
          {"// Software Engineer · AI Automation"}
        </p>

        <h1
          style={{
            fontFamily: "'Space Grotesk',sans-serif",
            fontWeight: 700,
            fontSize: "clamp(72px,11vw,140px)",
            lineHeight: 0.88,
            letterSpacing: "-0.04em",
            color: T.white,
            margin: "0 0 40px",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(40px)",
            transition: trans(0.3),
          }}
        >
          Mark<span style={{ color: T.accent }}>.</span>
        </h1>

        <p
          style={{
            fontSize: 19,
            color: T.muted,
            maxWidth: 560,
            lineHeight: 1.7,
            marginBottom: 44,
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(24px)",
            transition: trans(0.5),
          }}
        >
          Building reliable software — from backend systems and real-time
          applications to{" "}
          <span style={{ color: T.text, fontWeight: 500 }}>
            AI-powered automation
          </span>
          .
        </p>

        <div
          style={{
            display: "flex",
            gap: 14,
            flexWrap: "wrap",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(20px)",
            transition: trans(0.65),
          }}
        >
          <Btn href="#projects" primary>
            View projects <ChevronRight size={16} />
          </Btn>
          <Btn href="https://github.com/Sipisak" external>
            <Github size={15} /> GitHub
          </Btn>
          <Btn
            href="https://www.linkedin.com/in/marek-%C5%A1%C3%ADpek-74322825a"
            external
          >
            <Linkedin size={15} /> LinkedIn
          </Btn>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 44,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          opacity: mounted ? 1 : 0,
          transition: "opacity 1.2s 1.2s",
        }}
      >
        <ArrowDown
          size={14}
          color={T.muted}
          style={{ animation: "bobble 2s ease-in-out infinite" }}
        />
      </div>
    </section>
  );
}
