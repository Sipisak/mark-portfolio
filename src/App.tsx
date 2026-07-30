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
import { NotFoundPage } from "./pages/NotFoundPage";

function resolveRoute() {
  const pathname = window.location.pathname.replace(/\/+$/, "") || "/";

  if (pathname === "/") {
    return { type: "home" as const };
  }

  const match = pathname.match(/^\/projects\/([^/]+)$/);
  if (match && isProjectSlug(match[1])) {
    return { type: "project" as const, slug: match[1] };
  }

  return { type: "not-found" as const };
}

export default function Portfolio() {
  const route = resolveRoute();

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

      {route.type === "project" ? (
        <ProjectCaseStudy slug={route.slug} />
      ) : route.type === "not-found" ? (
        <NotFoundPage />
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
