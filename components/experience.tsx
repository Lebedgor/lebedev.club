"use client";

import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { useLang } from "@/components/language-provider";
import { skills } from "@/lib/content";

export function Experience() {
  const { t } = useLang();
  return (
    <section className="section" id="experience">
      <Reveal>
        <div className="eyebrow">{t.experience.eyebrow}</div>
        <h2 className="h2">
          {t.experience.pre}
          <span className="grad">{t.experience.grad}</span>
        </h2>
      </Reveal>
      <div className="grid grid-cols-1 mt-11 gap-10 lg:grid-cols-[1.1fr_.9fr]">
        <div>
          <Reveal>
            <div className="about-head">
              <div className="about-photo">
                <Image
                  src="/images/avatar.jpg"
                  alt={`${t.experience.name} — ${t.experience.role}`}
                  width={236}
                  height={296}
                  priority
                />
              </div>
              <div>
                <div className="about-name">{t.experience.name}</div>
                <div className="about-role">{t.experience.role}</div>
                <div className="about-chips">
                  {t.experience.chips.map((c) => (
                    <span key={c} className="tag">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="about-text">
              {t.experience.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <div className="skills">
                {skills.map((s) => (
                  <span key={s} className="skill">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
        <Reveal>
          <div className="timeline">
            {t.experience.timeline.map((item) => (
              <div className="titem" key={item.title}>
                <div className="when">{item.when}</div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
