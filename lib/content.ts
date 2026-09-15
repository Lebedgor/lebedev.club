export const projectsMeta = [
  {
    num: "01",
    title: "Aquascape",
    kind: "Competition Platform",
    href: "https://aquascape.in.ua/en/2025",
    image: "/images/aquascape.png",
    caseStudy: true,
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    num: "02",
    title: "Porsche Center Dnipro",
    kind: "Automotive Platform",
    href: "https://porschednipro.com.ua/",
    image: "/images/porsche.png",
    caseStudy: true,
    tags: ["React", "Node.js", "MySQL"],
  },
  {
    num: "03",
    title: "PVR Media Reviews",
    kind: "WooCommerce Plugin",
    href: "https://pv-reviews.site/",
    image: "/images/pvr.png",
    caseStudy: true,
    tags: ["WordPress", "WooCommerce", "PHP", "JavaScript"],
  },
  {
    num: "04",
    title: "Extended Reviews",
    kind: "OpenCart Module",
    href: "https://extended-reviews.com/ex_reviews_v5_en.html",
    image: "/images/ex-reviews.png",
    caseStudy: false,
    metric: "800+ sales · 50+ customer reviews",
    tags: ["OpenCart", "PHP", "JavaScript", "SEO"],
  },
  {
    num: "05",
    title: "Atelier №7",
    kind: "Editorial Website · Concept",
    href: "https://atelier-7-lebedev-labs.vercel.app/",
    image: "/images/atelier.png",
    caseStudy: true,
    tags: ["React", "Vite", "Tailwind", "Framer Motion"],
  },
  {
    num: "06",
    title: "NORDEN",
    kind: "E-commerce · Concept",
    href: "https://norden-lebedev-labs.vercel.app/",
    image: "/images/norden.png",
    caseStudy: true,
    tags: ["React", "Tailwind", "Framer Motion", "Vercel"],
  },
  {
    num: "07",
    title: "SENTRY",
    kind: "Security Platform · Concept",
    href: "https://sentry-lebedev-labs.vercel.app/",
    image: "/images/sentry.png",
    caseStudy: true,
    tags: ["React", "TypeScript", "Tailwind", "SVG Charts"],
  },
] as const;

export const caseStudiesMeta = [
  {
    project: "pvr",
    href: "https://pv-reviews.site/",
    image: "/images/pvr.png",
    builtWith: "WordPress · WooCommerce · PHP · JavaScript",
  },
  {
    project: "aquascape",
    href: "https://aquascape.in.ua/en/2025",
    image: "/images/aquascape-work.png",
    builtWith: "React · Node.js · Express · PostgreSQL · Docker",
  },
  {
    project: "porsche",
    href: "https://porschednipro.com.ua/",
    image: "/images/porsche.png",
    builtWith: "React · Node.js · MySQL",
  },
  {
    project: "sentry",
    href: "https://sentry-lebedev-labs.vercel.app/",
    image: "/images/sentry-2.png",
    builtWith: "React 19 · TypeScript · Vite · Tailwind CSS 4 · Custom SVG charts",
  },
  {
    project: "norden",
    href: "https://norden-lebedev-labs.vercel.app/",
    image: "/images/norden-2.png",
    builtWith: "React 19 · Vite · TypeScript · Tailwind CSS 4 · Framer Motion · React Router · Vercel",
  },
  {
    project: "atelier",
    href: "https://atelier-7-lebedev-labs.vercel.app/",
    image: "/images/atelier-2.png",
    builtWith: "React 19 · TypeScript · Vite · Tailwind CSS 4 · Framer Motion · React Router 7",
  },
] as const;

export const labMeta = [
  { area: "Security", num: "01" },
  { area: "AI", num: "02" },
  { area: "Web", num: "03" },
] as const;

export const contactsMeta = [
  {
    label: "Email",
    value: "lebedev.labs@gmail.com",
    href: "mailto:lebedev.labs@gmail.com",
    icon: "mail",
  },
  { label: "Telegram", value: "@ExWebDev", href: "https://t.me/ExWebDev", icon: "send" },
  {
    label: "GitHub",
    value: "github.com/Lebedgor",
    href: "https://github.com/Lebedgor",
    icon: "github",
  },
  {
    label: "Upwork",
    value: "/freelancers/~01d1e42e…",
    href: "https://www.upwork.com/freelancers/~01d1e42e87a34b9d38",
    icon: "up",
  },
] as const;

export const skills = [
  "OpenCart",
  "WordPress",
  "WooCommerce",
  "Shopify",
  "PHP",
  "JavaScript",
  "React",
  "Node.js",
  "Express",
  "Prisma",
  "PostgreSQL",
  "MySQL",
  "REST APIs",
  "Docker",
  "SEO",
] as const;
