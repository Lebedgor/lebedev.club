"use client";

import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { Tilt } from "@/components/tilt";
import { useLang } from "@/components/language-provider";
import { projectsMeta } from "@/lib/content";

export function Projects() {
  const { t } = useLang();
  return (
    <section className="section" id="projects">
      <Reveal>
        <div className="eyebrow">{t.projects.eyebrow}</div>
        <h2 className="h2">
          {t.projects.pre}
          <span className="grad">{t.projects.grad}</span>
        </h2>
        <p className="section-sub">{t.projects.sub}</p>
      </Reveal>
      <div className="grid grid-cols-1 mt-11 gap-4 lg:grid-cols-2">
        {projectsMeta.map((meta, i) => {
          const item = t.projects.items[i];
          return (
            <Reveal key={meta.href}>
              <Tilt className="spotlight-card h-full">
                <a
                  className="project-card h-full"
                  href={meta.href}
                  target="_blank"
                  rel="noopener"
                >
                  <div className="shot">
                    <Image
                      src={meta.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 520px"
                      className="!object-cover !object-top"
                    />
                  </div>
                  <div className="body">
                    <div className="top">
                      <h3>{item.title}</h3>
                      <span className="kind">{item.kind}</span>
                    </div>
                    {meta.metric && (
                      <div className="metric">
                        <svg viewBox="0 0 24 24">
                          <path d="M12 2l2.9 6.3 6.9.6-5.2 4.6 1.5 6.7L12 16.9 5.9 20.2l1.5-6.7L2.2 8.9l6.9-.6L12 2z" />
                        </svg>
                        {meta.metric}
                      </div>
                    )}
                    <p>{item.description}</p>
                    <div className="tags">
                      {meta.tags.map((tag) => (
                        <span key={tag} className="tag">
                          {tag}
                        </span>
                      ))}
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
