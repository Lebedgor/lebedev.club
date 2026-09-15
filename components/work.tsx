"use client";

import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { Tilt } from "@/components/tilt";
import { useLang } from "@/components/language-provider";
import { projectsMeta } from "@/lib/content";

export function Work() {
  const { t } = useLang();
  return (
    <section className="section" id="work">
      <Reveal>
        <div className="eyebrow">{t.work.eyebrow}</div>
        <p className="section-sub" style={{ marginTop: 4 }}>{t.work.sub}</p>
      </Reveal>
      <div className="grid grid-cols-1 mt-10 gap-4 lg:grid-cols-2">
        {projectsMeta.map((meta, i) => {
          const item = t.work.items[i];
          return (
            <Reveal key={meta.num}>
              <Tilt className="spotlight-card h-full">
                <a
                  className="project-card h-full"
                  href={meta.caseStudy ? "#case-studies" : meta.href}
                  target={meta.caseStudy ? undefined : "_blank"}
                  rel="noopener"
                >
                  <div className="shot">
                    <Image
                      src={meta.image}
                      alt={`${meta.title} — ${item.kind}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 520px"
                      className="!object-cover !object-top"
                    />
                  </div>
                  <div className="body">
                    <div className="head">
                      <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
                        <span className="num">{meta.num} /</span>
                        <h3>{item.title}</h3>
                      </div>
                      <span className="kind">{item.kind}</span>
                    </div>
                    <p>{item.description}</p>
                    <div className="pcard-foot">
                      <div className="tags">
                        {meta.tags.map((tag) => (
                          <span key={tag} className="tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="case-link">
                        {meta.caseStudy ? t.work.caseStudy : t.work.viewProduct}
                        <svg viewBox="0 0 24 24">
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </a>
              </Tilt>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
