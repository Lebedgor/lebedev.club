"use client";

import { Reveal } from "@/components/reveal";
import { useLang } from "@/components/language-provider";

export function Lab() {
  const { t } = useLang();
  return (
    <section className="section" id="lab">
      <Reveal>
        <div className="eyebrow">{t.lab.eyebrow}</div>
        <h2 className="h2">{t.lab.title}</h2>
      </Reveal>
      <div className="grid grid-cols-1 mt-10 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
        {t.lab.items.map((item, i) => (
          <Reveal key={item.num} delay={i * 90}>
            <div className="lab-card h-full">
              <div className="lab-head">
                <span className="lab-area">{item.area}</span>
                <span className="lab-num">/ {item.num}</span>
              </div>
              <div className="lab-name">{item.name}</div>
              <div className="lab-status">
                <i />
                {t.lab.status}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
