"use client";

import { GlassButton } from "@/components/ui/glass-button";
import { useLang } from "@/components/language-provider";

const statsLabels = [
  { en: "years of web development", ru: "лет в веб-разработке" },
  { en: "sales of my own extensions", ru: "продаж собственных расширений" },
  { en: "verified customer reviews", ru: "проверенных отзывов клиентов" },
  { en: "platforms: web, mobile, desktop", ru: "платформы: веб, мобайл, десктоп" },
];

export function Hero() {
  const { t, lang } = useLang();

  return (
    <section className="hero">
      <div className="badge">
        <span className="pulse" />
        {t.hero.badge}
      </div>
      <h1>
        <span className="t-white">{t.hero.line1}</span>
        <br />
        <span className="t-white">{t.hero.pre}</span>
        <span className="t-grad">{t.hero.grad1}</span>
        <span className="t-white">{t.hero.mid}</span>
        <span className="t-grad">{t.hero.grad2}</span>
        <span className="t-white">.</span>
      </h1>
      <p className="sub">{t.hero.sub}</p>
      <div className="actions">
        <GlassButton href="#projects">{t.hero.cta1}</GlassButton>
        <GlassButton href="#contact" variant="ghost">
          {t.hero.cta2}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </GlassButton>
      </div>
      <div className="scroll-hint">
        <span />
      </div>

      <div className="stats grid w-full grid-cols-2 gap-3.5 mt-14 md:grid-cols-4">
        {statsLabels.map((s, i) => (
          <div
            key={s.en}
            className="border rounded-2xl px-5 py-6 text-center"
            style={{
              background: "var(--surface)",
              borderColor: "var(--border)",
              backdropFilter: "blur(10px)",
            }}
          >
            <div className="text-[clamp(26px,3.4vw,38px)] font-extrabold tracking-tight">
              <span className="t-white">{["8", "800", "50", "3"][i]}</span>
              <span
                className="not-italic"
                style={{
                  background:
                    "linear-gradient(90deg, var(--color-accent), var(--color-accent2))",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                +
              </span>
            </div>
            <div
              className="text-[12.5px] mt-1.5 leading-snug"
              style={{ color: "var(--color-muted)" }}
            >
              {s[lang]}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
