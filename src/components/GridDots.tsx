import { useEffect, useRef } from "react";
import { accentAlpha } from "../theme";

/* ─── animated background dots ────────────────────── */
export function GridDots() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;
    let raf = 0;

    // The canvas is position:fixed, so it should cover the viewport — not the
    // full document height, which would push most of the buffer off-screen.
    function resize() {
      if (!c) return;
      c.width = window.innerWidth;
      c.height = window.innerHeight;
    }
    resize();

    const dots = Array.from({ length: 40 }, () => ({
      x: Math.random() * c.width,
      y: Math.random() * c.height,
      r: Math.random() * 1.5 + 0.5,
      speed: Math.random() * 0.15 + 0.05,
      opacity: Math.random() * 0.3 + 0.1,
    }));

    function render() {
      if (!ctx || !c) return;
      ctx.clearRect(0, 0, c.width, c.height);
      dots.forEach((d) => {
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = accentAlpha(d.opacity);
        ctx.fill();
      });
    }
    function step() {
      if (!c) return;
      dots.forEach((d) => {
        d.y -= d.speed;
        if (d.y < -10) {
          d.y = c.height + 10;
          d.x = Math.random() * c.width;
        }
      });
      render();
      raf = requestAnimationFrame(step);
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    function start() {
      if (reduceMotion || document.hidden || raf) return;
      raf = requestAnimationFrame(step);
    }
    function stop() {
      cancelAnimationFrame(raf);
      raf = 0;
    }
    // Pause the loop when the tab is backgrounded so it stops burning frames.
    function onVisibility() {
      if (document.hidden) stop();
      else start();
    }

    if (reduceMotion) {
      render(); // draw a single static frame, no animation
    } else {
      start();
    }
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      stop();
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);
  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        opacity: 0.5,
      }}
    />
  );
}
