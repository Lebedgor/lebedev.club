"use client";

import { useEffect } from "react";

export function BackgroundFx() {
  useEffect(() => {
    const progressLine = document.querySelector<HTMLElement>(".progress-line");
    if (!progressLine) return;

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progressLine.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
    };

    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    return () => {
      removeEventListener("scroll", onScroll);
    };
  }, []);

  return <div className="progress-line" aria-hidden />;
}
