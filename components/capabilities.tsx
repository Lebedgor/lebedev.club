"use client";

import { Reveal } from "@/components/reveal";
import { useLang } from "@/components/language-provider";

export function Capabilities() {
  const { t } = useLang();
  return (
    <section className="section" id="capabilities">
      <Reveal>
        <div className="eyebrow">{t.capabilities.eyebrow}</div>
      </Reveal>
      <div className="mt-8">
        {t.capabilities.items.map((item) => (
          <Reveal key={item.title}>
            <div className="cap-row">
              <span className="cap-title">{item.title}</span>
              <span className="cap-line">{item.line}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
