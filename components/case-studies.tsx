"use client";

import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { useLang } from "@/components/language-provider";
import { caseStudiesMeta } from "@/lib/content";

export function CaseStudies() {
  const { t } = useLang();
  return (
    <section className="section" id="case-studies">
      <Reveal>
        <div className="eyebrow">{t.cases.eyebrow}</div>
      </Reveal>
      <div className="mt-10">
        {caseStudiesMeta.map((meta, i) => {
          const item = t.cases.items[i];
          const l = t.cases.labels;
          return (
            <Reveal key={meta.project}>
              <div className={`cs-row${i % 2 === 1 ? " rev" : ""}`}>
                <div className="cs-text">
                  <div className="num">{String(i + 1).padStart(2, "0")} /</div>
                  <h3 className="cs-title">{item.title}</h3>
                  <div className="cs-label">{l.challenge}</div>
                  <p>{item.challenge}</p>
                  <div className="cs-label">{l.solution}</div>
                  <p>{item.solution}</p>
                  <div className="cs-label">{l.highlights}</div>
                  <div className="cs-hl">
                    {item.highlights.map((h) => (
                      <span key={h} className="tag">
                        {h}
                      </span>
                    ))}
                  </div>
                  <div className="cs-built">
                    <b>{l.built}:</b> {meta.builtWith}
                  </div>
                  <div className="cs-label">{l.result}</div>
                  <p className="cs-result">{item.result}</p>
                </div>
                <a className="cs-media" href={meta.href} target="_blank" rel="noopener">
                  <Image
                    src={meta.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 520px"
                    className="!object-cover !object-top"
                  />
                </a>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
