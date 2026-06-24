import { useEffect, useRef } from "react";

/* ─── animated background dots ────────────────────── */
export function GridDots() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;
    let raf = 0;
    const dots = Array.from({ length: 40 }, () => ({
      x: Math.random() * 2000,
      y: Math.random() * 6000,
      r: Math.random() * 1.5 + 0.5,
      speed: Math.random() * 0.15 + 0.05,
      opacity: Math.random() * 0.3 + 0.1,
    }));
    function resize() {
      if (!c) return;
      c.width = window.innerWidth;
      c.height = document.body.scrollHeight;
    }
    resize();
    window.addEventListener("resize", resize);
    function draw() {
      if (!ctx || !c) return;
      ctx.clearRect(0, 0, c.width, c.height);
      dots.forEach((d) => {
        d.y -= d.speed;
        if (d.y < -10) {
          d.y = c.height + 10;
          d.x = Math.random() * c.width;
        }
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(240,112,64,${d.opacity})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    }
    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
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
