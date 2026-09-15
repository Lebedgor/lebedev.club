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
          href="https://github.com/Lebedgor"
          target="_blank"
          rel="noopener"
          className="gh"
          aria-label="GitHub"
        >
          <svg viewBox="0 0 24 24">
            <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
          </svg>
        </a>
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
