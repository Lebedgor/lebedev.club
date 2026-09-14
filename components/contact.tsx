"use client";

import { GlassButton } from "@/components/ui/glass-button";
import { Reveal } from "@/components/reveal";
import { useLang } from "@/components/language-provider";
import { contactsMeta } from "@/lib/content";

const icons: Record<string, React.ReactNode> = {
  mail: (
    <svg viewBox="0 0 24 24">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 6 10-6" />
    </svg>
  ),
  send: (
    <svg viewBox="0 0 24 24">
      <path d="m22 3-3 17-8-6-3 4-1-6L21 4l-13 8" />
      <path d="m22 3-11 11" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24">
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
    </svg>
  ),
  up: (
    <svg viewBox="0 0 24 24">
      <path d="M16 8a4.5 4.5 0 0 1 4.5 4.5c0 3-2.5 5.5-5.5 5.5-3 0-4-2-5.5-5L8 10.5C7.3 9 6.7 8 5.5 8S3.5 9 3.5 10.5 4.6 13 6 13" />
      <path d="M13.5 8 11 18" />
    </svg>
  ),
};

export function Contact() {
  const { t } = useLang();
  return (
    <section className="section" id="contact">
      <Reveal>
        <div className="eyebrow">{t.contact.eyebrow}</div>
        <h2 className="h2">
          {t.contact.pre}
          <span className="grad">{t.contact.grad}</span>
        </h2>
        <p className="section-sub">{t.contact.sub}</p>
      </Reveal>
      <div className="grid grid-cols-1 mt-11 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
        {contactsMeta.map((meta, i) => (
          <Reveal key={meta.href}>
            <a
              className="contact-card h-full"
              href={meta.href}
              target={meta.icon === "mail" ? undefined : "_blank"}
              rel="noopener"
            >
              <div className="ico">{icons[meta.icon]}</div>
              <div>
                <div className="k">{t.contact.labels[i]}</div>
                <div className="v">{meta.value}</div>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <div className="flex justify-center mt-10">
          <GlassButton href="mailto:lebedev.labs@gmail.com">{t.contact.cta}</GlassButton>
        </div>
      </Reveal>
    </section>
  );
}
