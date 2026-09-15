"use client";

import { Reveal } from "@/components/reveal";
import { useLang } from "@/components/language-provider";

export function Numbers() {
  const { t } = useLang();
  return (
    <section className="section" id="numbers">
      <Reveal>
        <div className="eyebrow">{t.numbers.eyebrow}</div>
      </Reveal>
      <div className="mt-8">
        {t.numbers.items.map((item, i) => (
          <Reveal key={item.label} delay={i * 60}>
            <div className="num-row">
              <span className="n">{item.n}</span>
              <span className="label">{item.label}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
