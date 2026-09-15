"use client";

import { Reveal } from "@/components/reveal";
import { useLang } from "@/components/language-provider";

export function HowIWork() {
  const { t } = useLang();
  return (
    <section className="section" id="how">
      <Reveal>
        <div className="eyebrow">{t.how.eyebrow}</div>
      </Reveal>
      <div className="grid grid-cols-1 mt-10 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {t.how.steps.map((step, i) => (
          <Reveal key={step.title} delay={i * 90}>
            <div className="step h-full">
              <div className="s-num">{String(i + 1).padStart(2, "0")}</div>
              <h4>{step.title}</h4>
              <p>{step.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
