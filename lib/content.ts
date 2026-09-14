export const projectsMeta: Array<{
  title: string;
  href: string;
  image: string;
  metric?: string;
  tags: string[];
}> = [
  {
    title: "Aquascape Competition Platform",
    href: "https://aquascape.in.ua/en/2025",
    image: "/images/aquascape.png",
    tags: ["React", "Node.js", "Express", "PostgreSQL", "Docker"],
  },
  {
    title: "Porsche Dnipro",
    href: "https://porschednipro.com.ua/",
    image: "/images/porsche.png",
    tags: ["React", "Node.js", "Express", "MySQL", "Docker", "Premium UI"],
  },
  {
    title: "PVR Media Reviews",
    href: "https://pv-reviews.site/",
    image: "/images/pvr.png",
    tags: ["WordPress", "WooCommerce", "PHP", "JavaScript", "Licensing", "SEO"],
  },
  {
    title: "Extended Reviews",
    href: "https://extended-reviews.com/ex_reviews_v5_en.html",
    image: "/images/ex-reviews.png",
    metric: "800+ sales · 50+ customer reviews",
    tags: ["OpenCart", "PHP", "JavaScript", "SEO"],
  },
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
