"use client";

import { useEffect } from "react";

type Star = {
  x: number;
  y: number;
  z: number;
  pz: number;
  color: string;
};

const palette = [
  "#e8ecf7",
  "#e8ecf7",
  "#e8ecf7",
  "#e8ecf7",
  "#c9b8ff",
  "#8fe8da",
  "#f8b3d4",
];

export function StarField() {
  useEffect(() => {
    const canvas = document.querySelector<HTMLCanvasElement>(".starfield");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0;
    let h = 0;
    let stars: Star[] = [];
    let raf = 0;
    let scrollVel = 0;
    let lastScrollY = window.scrollY;
    let speedBoost = 0;

    const spawn = (star: Star): Star => {
      star.x = (Math.random() - 0.5) * 2;
      star.y = (Math.random() - 0.5) * 2;
      star.z = Math.random() * 0.9 + 0.1;
      star.pz = star.z;
      star.color = palette[Math.floor(Math.random() * palette.length)];
      return star;
    };

    const resize = () => {
      const dpr = Math.min(devicePixelRatio || 1, 2);
      w = innerWidth;
      h = innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(700, Math.floor((w * h) / 2200));
      stars = Array.from({ length: count }, () => spawn({} as Star));
    };

    const drawStatic = () => {
      ctx.clearRect(0, 0, w, h);
      for (const s of stars) {
        const sx = w / 2 + (s.x / s.z) * (w * 0.5);
        const sy = h / 2 + (s.y / s.z) * (w * 0.5);
        if (sx < 0 || sx > w || sy < 0 || sy > h) continue;
        const size = Math.max(0.4, (1 - s.z) * 1.8);
        ctx.globalAlpha = Math.min(0.9, (1 - s.z) * 1.2);
        ctx.fillStyle = s.color;
        ctx.fillRect(sx, sy, size, size);
      }
      ctx.globalAlpha = 1;
    };

    const frame = () => {
      const vel = Math.abs(window.scrollY - lastScrollY);
      lastScrollY = window.scrollY;
      scrollVel += (vel - scrollVel) * 0.1;
      speedBoost += (Math.min(scrollVel / 30, 9) - speedBoost) * 0.06;

      ctx.clearRect(0, 0, w, h);
      const baseSpeed = 0.00012 + speedBoost * 0.0028;
      const cx = w / 2;
      const cy = h / 2;

      for (const s of stars) {
        s.pz = s.z;
        s.z -= baseSpeed;
        if (s.z <= 0.02) spawn(s);

        const sx = cx + (s.x / s.z) * (w * 0.5);
        const sy = cy + (s.y / s.z) * (w * 0.5);
        if (sx < -20 || sx > w + 20 || sy < -20 || sy > h + 20) continue;

        const px = cx + (s.x / s.pz) * (w * 0.5);
        const py = cy + (s.y / s.pz) * (w * 0.5);
        const size = Math.max(0.4, (1 - s.z) * 2.2);
        const alpha = Math.min(0.9, (1 - s.z) * 1.35);

        ctx.strokeStyle = s.color;
        ctx.lineWidth = size;
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(sx, sy);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(frame);
    };

    resize();
    addEventListener("resize", resize);
    if (reduced) {
      drawStatic();
    } else {
      raf = requestAnimationFrame(frame);
    }
    return () => {
      removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas className="starfield" aria-hidden />;
}
