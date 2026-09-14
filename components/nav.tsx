"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/components/language-provider";

export function Nav() {
  const { t, lang, toggle } = useLang();
  const [active, setActive] = useState<string>(t.nav[0].href);

  useEffect(() => {
    const sections = t.nav
      .map((l) => document.querySelector(l.href))
      .filter(Boolean) as Element[];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            setActive(`#${en.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [t]);

  return (
    <header className="navbar">
      <span className="logo">
        <span className="dot" />
        LEBEDEV LABS
      </span>
      <nav className="flex items-center">
        {t.nav.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className={`navlink${active === l.href ? " active" : ""}`}
          >
            {l.label}
          </a>
        ))}
        <a
          href="#"
          className="lang"
          onClick={(e) => {
            e.preventDefault();
            toggle();
          }}
        >
          {lang === "en" ? "RU" : "EN"}
        </a>
      </nav>
    </header>
  );
}
