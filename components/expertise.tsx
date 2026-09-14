"use client";

import { Reveal } from "@/components/reveal";
import { Tilt } from "@/components/tilt";
import { useLang } from "@/components/language-provider";

const icons: Record<string, React.ReactNode> = {
  store: (
    <svg viewBox="0 0 24 24">
      <path d="M3 9l1.5-5h15L21 9" />
      <path d="M3 9h18v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9z" />
      <path d="M9 20v-6h6v6" />
    </svg>
  ),
  plug: (
    <svg viewBox="0 0 24 24">
      <path d="M12 22V12" />
      <path d="M12 12 8 8l4-4 4 4-4 4" />
      <rect x="3" y="14" width="18" height="7" rx="2" />
    </svg>
  ),
  layers: (
    <svg viewBox="0 0 24 24">
      <path d="M12 2 2 7l10 5 10-5-10-5z" />
      <path d="m2 17 10 5 10-5" />
      <path d="m2 12 10 5 10-5" />
    </svg>
  ),
  devices: (
    <svg viewBox="0 0 24 24">
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <path d="M12 18h.01" />
      <path d="M7 5h10v11H7z" />
    </svg>
  ),
};

const iconKeys = ["store", "plug", "layers", "devices"];

export function Expertise() {
  const { t } = useLang();
  return (
    <section className="section" id="directions">
      <Reveal>
        <div className="eyebrow">{t.expertise.eyebrow}</div>
        <h2 className="h2">
          {t.expertise.pre}
          <span className="grad">{t.expertise.grad}</span>
        </h2>
        <p className="section-sub">{t.expertise.sub}</p>
      </Reveal>
      <div className="grid grid-cols-1 mt-11 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
        {t.expertise.items.map((item, i) => (
          <Reveal key={item.title} delay={i * 90}>
            <Tilt className="spotlight-card h-full">
              <div className="card h-full">
                <div className="ico">{icons[iconKeys[i]]}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </Tilt>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
