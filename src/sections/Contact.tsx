import { type ReactNode } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { T } from "../theme";
import { FadeUp } from "../components/FadeUp";
import { Label, SectionTitle } from "../components/SectionHeading";
import { Btn } from "../components/Button";
import { useHover } from "../hooks/useHover";

function ContactLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: ReactNode;
  label: string;
}) {
  const [hovered, hoverProps] = useHover();
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...hoverProps}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 9,
        padding: "12px 20px",
        background: T.surface,
        border: `1px solid ${hovered ? T.accent : T.border}`,
        borderRadius: 8,
        color: hovered ? T.accent : T.text,
        textDecoration: "none",
        fontSize: 14,
        fontWeight: 500,
        transition: "all .2s",
      }}
    >
      {icon} {label}
    </a>
  );
}

export function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "120px 48px",
        borderTop: `1px solid ${T.border}`,
        position: "relative",
        zIndex: 1,
      }}
    >
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <div style={{ maxWidth: 580 }}>
          <FadeUp>
            <Label>{"// Contact"}</Label>
          </FadeUp>
          <FadeUp delay={0.1}>
            <SectionTitle>
              Let's work
              <br />
              together.
            </SectionTitle>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p style={{ fontSize: 18, color: T.muted, lineHeight: 1.7, marginBottom: 44 }}>
              Whether it's a{" "}
              <span style={{ color: T.text, fontWeight: 500 }}>full-stack project</span>, an{" "}
              <span style={{ color: T.text, fontWeight: 500 }}>AI integration</span>, or a
              conversation about building something worthwhile — I'm always open.
            </p>
          </FadeUp>

          <FadeUp delay={0.3}>
            <Btn href="mailto:marek.sipek@tronexo.com" primary>
              <Mail size={15} /> Say hello
            </Btn>
          </FadeUp>

          <FadeUp delay={0.4}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 32 }}>
              <ContactLink href="https://github.com/Sipisak" icon={<Github size={16} />} label="github.com/Sipisak" />
              <ContactLink href="https://www.linkedin.com/in/marek-%C5%A1%C3%ADpek-74322825a" icon={<Linkedin size={16} />} label="LinkedIn — Mark" />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
