import { type ReactNode } from "react";
import { Github, Linkedin } from "lucide-react";
import { T } from "../theme";
import { FadeUp } from "../components/FadeUp";
import { Label, SectionTitle } from "../components/SectionHeading";
import { useHover } from "../hooks/useHover";
import { usePreferences } from "../preferences";

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
  const { t } = usePreferences();

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
        <div style={{ maxWidth: 650 }}>
          <FadeUp>
            <Label>{t.contact.label}</Label>
          </FadeUp>
          <FadeUp delay={0.1}>
            <SectionTitle>{t.contact.title}</SectionTitle>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p style={{ fontSize: 18, color: T.muted, lineHeight: 1.7, marginBottom: 18 }}>
              {t.contact.primary}
            </p>
            <p style={{ fontSize: 14, color: T.muted, lineHeight: 1.7, marginBottom: 40 }}>
              {t.contact.secondary}
            </p>
          </FadeUp>

          <FadeUp delay={0.3}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <ContactLink
                href="https://github.com/Sipisak"
                icon={<Github size={16} />}
                label="github.com/Sipisak"
              />
              <ContactLink
                href="https://www.linkedin.com/in/marek-%C5%A1%C3%ADpek-74322825a"
                icon={<Linkedin size={16} />}
                label="LinkedIn — Marek Šípek"
              />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
