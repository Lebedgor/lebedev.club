export type Lang = "en" | "ru";

export const dict = {
  en: {
    nav: [
      { href: "#directions", label: "Expertise" },
      { href: "#projects", label: "Projects" },
      { href: "#experience", label: "Experience" },
      { href: "#contact", label: "Contact" },
    ],
    hero: {
      badge: "available for new projects · 2026",
      line1: "Full Stack Web Developer.",
      pre: "From ",
      grad1: "database",
      mid: " to ",
      grad2: "pixel",
      sub: "I'm Lebedev Egor. I build e-commerce systems and full-stack web applications — architecture, backend, interface, deployment. 8+ years of experience, 800+ commercial sales of my own products.",
      cta1: "View projects",
      cta2: "Contact me",
    },
    stats: [
      "years of web development",
      "sales of my own extensions",
      "verified customer reviews",
      "platforms: web, mobile, desktop",
    ],
    expertise: {
      eyebrow: "Expertise",
      pre: "What I ",
      grad: "build",
      sub: "Three directions, one standard: production quality, performance and long-term support.",
      items: [
        {
          title: "Websites",
          description:
            "Custom websites from idea to launch: design, development, content management and deployment. WordPress, React — clean UI and fast loading.",
        },
        {
          title: "E-commerce",
          description:
            "Online stores on OpenCart, WooCommerce and Shopify: creation, custom modules and design, migrations, ongoing support and integrations.",
        },
        {
          title: "Full-Stack Web Apps",
          description:
            "Web applications built end-to-end with React, Node.js, PostgreSQL: auth, dashboards, REST APIs, payments and production deployments.",
        },
      ],
    },
    projects: {
      eyebrow: "Projects",
      pre: "Selected ",
      grad: "work",
      sub: "Real products in production: platforms, marketplaces products and dealership systems.",
      items: [
        {
          title: "Aquascape Competition Platform",
          kind: "Full-Stack Platform",
          description:
            "Bilingual aquascaping competition platform built from scratch: participant and judge dashboards, role-based auth, competition seasons, entry submissions, configurable judging criteria, scoring, ranking and prize management. UA/EN localization, image processing, email notifications, Docker-based deployment.",
        },
        {
          title: "Porsche Center Dnipro",
          kind: "Automotive Gallery",
          description:
            "Modern automotive gallery website for a Porsche dealership: vehicle gallery, car detail pages, responsive layouts, content management functionality and a server-side API. Clean premium UI and fast navigation across desktop and mobile.",
        },
        {
          title: "PVR Media Reviews",
          kind: "WooCommerce Plugin",
          description:
            "Production-ready WooCommerce plugin extending product reviews with photo and video uploads: custom plugin architecture, admin settings, client-side video compression, automatic thumbnails, media galleries, SEO features and a Pro license management system.",
        },
        {
          title: "Extended Reviews",
          kind: "OpenCart Module",
          description:
            "Full-featured review and UGC system for OpenCart: photo and video reviews, media galleries, filtering and sorting, admin moderation, SEO landing pages, caching, anti-spam, customer rewards, coupons and automated email reminders.",
        },
      ],
    },
    experience: {
      eyebrow: "Experience",
      pre: "About & ",
      grad: "journey",
      name: "Lebedev Egor",
      role: "Full Stack Web Developer",
      chips: ["since 2018", "freelance", "RU / EN"],
      paragraphs: [
        "Web developer with 8+ years of experience building and maintaining e-commerce websites and custom web solutions. My main expertise is OpenCart, WordPress and WooCommerce — custom module and plugin development, complex customizations, API integrations and troubleshooting.",
        "I'm the creator of Extended Reviews (EX Reviews) for OpenCart — a commercial extension that reached 800+ sales across multiple marketplaces and direct sales, with 249+ purchases and 50+ customer reviews on a single marketplace. I later rebuilt this product for WordPress and WooCommerce as PVR Media Reviews.",
        "Today I also build modern full-stack web applications using React, Node.js, Express, Prisma and PostgreSQL — both frontend and backend from scratch.",
      ],
      timeline: [
        {
          when: "Now",
          title: "Full-stack applications",
          text: "React, Node.js, Prisma, PostgreSQL — platforms and products from scratch, frontend and backend.",
        },
        {
          when: "Product",
          title: "PVR Media Reviews",
          text: "Rebuilt the EX Reviews product for WordPress & WooCommerce: media reviews, video compression, custom licensing system.",
        },
        {
          when: "Product",
          title: "Extended Reviews launch",
          text: "Commercial OpenCart extension: 800+ sales across marketplaces, 50+ verified customer reviews.",
        },
        {
          when: "Deep dive",
          title: "E-commerce specialization",
          text: "Custom modules, integrations, redesigns and support for dozens of OpenCart and WooCommerce stores.",
        },
        {
          when: "2018",
          title: "Started freelancing",
          text: "First online stores on OpenCart and WordPress — development, design and ongoing support.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      pre: "Let's build something ",
      grad: "together",
      sub: "Have a store to improve, a plugin to build, or a full-stack product to launch? Write me — I reply fast and work carefully.",
      cta: "Start a project",
      labels: ["Email", "Telegram", "GitHub", "Upwork"],
    },
  },
  ru: {
    nav: [
      { href: "#directions", label: "Направления" },
      { href: "#projects", label: "Проекты" },
      { href: "#experience", label: "Опыт" },
      { href: "#contact", label: "Контакты" },
    ],
    hero: {
      badge: "открыт к новым проектам · 2026",
      line1: "Full Stack разработчик.",
      pre: "От ",
      grad1: "базы данных",
      mid: " до ",
      grad2: "пикселя",
      sub: "Я — Лебедев Егор. Создаю e-commerce системы и full-stack веб-приложения — архитектура, бэкенд, интерфейс, деплой. 8+ лет опыта, 800+ коммерческих продаж собственных продуктов.",
      cta1: "Смотреть проекты",
      cta2: "Связаться",
    },
    stats: [
      "лет в веб-разработке",
      "продаж собственных расширений",
      "проверенных отзывов клиентов",
      "платформы: веб, мобайл, десктоп",
    ],
    expertise: {
      eyebrow: "Направления",
      pre: "Что я ",
      grad: "делаю",
      sub: "Три направления, один стандарт: продакшен-качество, производительность и долгосрочная поддержка.",
      items: [
        {
          title: "Сайты",
          description:
            "Кастомные сайты от идеи до запуска: дизайн, разработка, управление контентом и деплой. WordPress, React — чистый интерфейс и быстрая загрузка.",
        },
        {
          title: "Интернет-магазины",
          description:
            "Магазины на OpenCart, WooCommerce и Shopify: создание, кастомные модули и дизайн, миграции, поддержка и интеграции.",
        },
        {
          title: "Full-Stack приложения",
          description:
            "Веб-приложения целиком на React, Node.js, PostgreSQL: авторизация, дашборды, REST API, платежи и продакшен-деплой.",
        },
      ],
    },
    projects: {
      eyebrow: "Проекты",
      pre: "Избранные ",
      grad: "работы",
      sub: "Реальные продукты в продакшене: платформы, маркетплейс-продукты и системы автосалонов.",
      items: [
        {
          title: "Aquascape Competition Platform",
          kind: "Full-Stack платформа",
          description:
            "Двуязычная платформа соревнований по акваскейпу с нуля: дашборды участников и судей, ролевая авторизация, сезоны соревнований, приём работ, настраиваемые критерии оценки, скоринг, рейтинги и управление призами. UA/EN локализация, обработка изображений, email-уведомления, деплой на Docker.",
        },
        {
          title: "Porsche Center Dnipro",
          kind: "Авто-галерея",
          description:
            "Современный сайт-галерея для автосалона Porsche: галерея автомобилей, страницы моделей, адаптивные макеты, управление контентом и серверный API. Чистый премиальный UI и быстрая навигация на десктопе и мобильных.",
        },
        {
          title: "PVR Media Reviews",
          kind: "Плагин WooCommerce",
          description:
            "Продакшен-плагин для WooCommerce, расширяющий отзывы фотографиями и видео: собственная архитектура, настройки в админке, клиентское сжатие видео, автоматические превью, медиа-галереи, SEO и система Pro-лицензий.",
        },
        {
          title: "Extended Reviews",
          kind: "Модуль OpenCart",
          description:
            "Полнофункциональная система отзывов и пользовательского контента для OpenCart: фото- и видео-отзывы, медиа-галереи, фильтрация и сортировка, модерация, SEO-страницы, кэширование, анти-спам, бонусы покупателям, купоны и email-напоминания.",
        },
      ],
    },
    experience: {
      eyebrow: "Опыт",
      pre: "Обо мне и ",
      grad: "пути",
      name: "Лебедев Егор",
      role: "Full Stack Web Developer",
      chips: ["с 2018", "фриланс", "RU / EN"],
      paragraphs: [
        "Веб-разработчик с 8+ годами опыта создания и поддержки e-commerce сайтов и кастомных веб-решений. Основная экспертиза — OpenCart, WordPress и WooCommerce: разработка модулей и плагинов, сложные доработки, API-интеграции и troubleshooting.",
        "Я создатель Extended Reviews (EX Reviews) для OpenCart — коммерческого расширения с 800+ продажами на нескольких маркетплейсах и прямых продажах, 249+ покупками и 50+ отзывами на одной из площадок. Позже переиздал продукт для WordPress и WooCommerce как PVR Media Reviews.",
        "Сегодня также создаю современные full-stack приложения на React, Node.js, Express, Prisma и PostgreSQL — фронтенд и бэкенд с нуля.",
      ],
      timeline: [
        {
          when: "Сейчас",
          title: "Full-stack приложения",
          text: "React, Node.js, Prisma, PostgreSQL — платформы и продукты с нуля, фронтенд и бэкенд.",
        },
        {
          when: "Продукт",
          title: "PVR Media Reviews",
          text: "Переиздал EX Reviews для WordPress и WooCommerce: медиа-отзывы, сжатие видео, собственная система лицензий.",
        },
        {
          when: "Продукт",
          title: "Запуск Extended Reviews",
          text: "Коммерческий модуль для OpenCart: 800+ продаж на маркетплейсах, 50+ проверенных отзывов.",
        },
        {
          when: "Погружение",
          title: "Специализация e-commerce",
          text: "Кастомные модули, интеграции, редизайны и поддержка десятков магазинов на OpenCart и WooCommerce.",
        },
        {
          when: "2018",
          title: "Начало фриланса",
          text: "Первые интернет-магазины на OpenCart и WordPress — разработка, дизайн и поддержка.",
        },
      ],
    },
    contact: {
      eyebrow: "Контакты",
      pre: "Давайте создадим что-то ",
      grad: "вместе",
      sub: "Есть магазин для доработки, плагин для создания или full-stack продукт для запуска? Напишите мне — отвечаю быстро, работаю вдумчиво.",
      cta: "Начать проект",
      labels: ["Почта", "Telegram", "GitHub", "Upwork"],
    },
  },
};

export type Dict = (typeof dict)["en"];
