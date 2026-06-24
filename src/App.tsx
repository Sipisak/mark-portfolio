import { T } from "./theme";
import { GridDots } from "./components/GridDots";
import { Nav } from "./components/Nav";
import { ResponsiveStyles } from "./components/ResponsiveStyles";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Stack } from "./sections/Stack";
import { Projects } from "./sections/Projects";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";

/* ─── app ─────────────────────────────────────────── */
export default function Portfolio() {
  return (
    <div
      style={{
        background: T.bg,
        color: T.text,
        fontFamily: "'Inter',sans-serif",
        fontSize: 16,
        lineHeight: 1.6,
        WebkitFontSmoothing: "antialiased",
        minHeight: "100vh",
      }}
    >
      <ResponsiveStyles />
      <GridDots />
      <Nav />
      <Hero />
      <About />
      <Stack />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
