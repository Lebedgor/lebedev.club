"use client";

import { useEffect } from "react";

export function BackgroundFx() {
  useEffect(() => {
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dotgrid = document.querySelector<HTMLElement>(".dotgrid");
    const progressLine = document.querySelector<HTMLElement>(".progress-line");
    if (!progressLine) return;

    let target = window.scrollY;
    let current = target;
    let raf = 0;

    const onScroll = () => {
      target = window.scrollY;
    };

    const loop = () => {
      current += (target - current) * 0.08;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (!reduced && dotgrid) {
        dotgrid.style.backgroundPosition = `0px ${(current * 0.12).toFixed(1)}px`;
      }
      progressLine.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
      raf = requestAnimationFrame(loop);
    };

    addEventListener("scroll", onScroll, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div className="dotgrid" aria-hidden />
      <div className="progress-line" aria-hidden />
    </>
  );
}
