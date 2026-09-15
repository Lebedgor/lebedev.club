"use client";

import { GlassButton } from "@/components/ui/glass-button";
import { useLang } from "@/components/language-provider";

export function Hero() {
  const { t } = useLang();
  return (
    <section className="hero">
      <div className="badge">
        <span className="pulse" />
        {t.hero.badge}
      </div>
      <h1>
        <span className="l1">{t.hero.line1}</span>
        <span className="l2">{t.hero.line2}</span>
      </h1>
      <p className="tagline">{t.hero.tagline}</p>
      <p className="sub">{t.hero.sub}</p>
      <div className="actions">
        <GlassButton href="#work">{t.hero.cta1}</GlassButton>
        <GlassButton href="#contact" variant="ghost">{t.hero.cta2}</GlassButton>
      </div>
      <div className="tech-line">{t.hero.tech}</div>
      <div className="scroll-hint">
        <span />
      </div>
    </section>
  );
}
