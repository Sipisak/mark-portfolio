import { T } from "./theme";
import { isProjectSlug } from "./caseStudies";
import { GridDots } from "./components/GridDots";
import { Nav } from "./components/Nav";
import { ResponsiveStyles } from "./components/ResponsiveStyles";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Focus } from "./sections/Focus";
import { Experience } from "./sections/Experience";
import { Stack } from "./sections/Stack";
import { Projects } from "./sections/Projects";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";
import { ProjectCaseStudy } from "./pages/ProjectCaseStudy";

function resolveProjectSlug() {
  const match = window.location.pathname.match(/^\/projects\/([^/]+)\/?$/);
  return match && isProjectSlug(match[1]) ? match[1] : null;
}

export default function Portfolio() {
  const projectSlug = resolveProjectSlug();

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

      {projectSlug ? (
        <ProjectCaseStudy slug={projectSlug} />
      ) : (
        <>
          <Hero />
          <About />
          <Focus />
          <Experience />
          <Stack />
          <Projects />
          <Contact />
        </>
      )}

      <Footer />
    </div>
  );
}
