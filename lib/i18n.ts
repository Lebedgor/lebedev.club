export type Lang = "en" | "ru";

export const dict = {
  en: {
    nav: [
      { href: "#work", label: "Work" },
      { href: "#lab", label: "Lab" },
      { href: "#about", label: "About" },
      { href: "#contact", label: "Contact" },
    ],
    hero: {
      badge: "available for new projects · 2026",
      line1: "Full Stack",
      line2: "Web Developer",
      tagline: "From database to pixel.",
      sub: "I build websites, e-commerce platforms and web applications from idea to production.",
      cta1: "View work",
      cta2: "Start a project",
      tech: "React · Node.js · WordPress · WooCommerce · PHP",
    },
    work: {
      eyebrow: "Selected Work",
      sub: "Real products in production — not concept shots.",
      caseStudy: "View case study",
      viewProduct: "View product",
      items: [
        {
          title: "Aquascape",
          kind: "Competition Platform",
          description: "A bilingual competition platform with participant, judge and admin dashboards.",
        },
        {
          title: "Porsche Center Dnipro",
          kind: "Automotive Platform",
          description: "A premium automotive gallery website for a Porsche dealership.",
        },
        {
          title: "PVR Media Reviews",
          kind: "WooCommerce Plugin",
          description: "A commercial WooCommerce plugin for photo & video product reviews.",
        },
        {
          title: "Extended Reviews",
          kind: "OpenCart Module",
          description: "A commercial review system for OpenCart with 800+ sales.",
        },
      ],
    },
    capabilities: {
      eyebrow: "Capabilities",
      items: [
        { title: "Websites & E-commerce", line: "WordPress · WooCommerce · Shopify · OpenCart" },
        { title: "Web Applications", line: "React · Node.js · PostgreSQL" },
        { title: "Custom Products", line: "Plugins · APIs · Integrations · Automation" },
      ],
    },
    numbers: {
      eyebrow: "Why Lebedev Labs",
      items: [
        { n: "8+", label: "years building for the web" },
        { n: "800+", label: "commercial product sales" },
        { n: "50+", label: "verified customer reviews" },
        { n: "4", label: "production projects showcased" },
        { n: "2018", label: "started freelancing" },
        { n: "1", label: "developer, from idea to deployment" },
      ],
    },
    cases: {
      eyebrow: "Case Studies",
      labels: {
        challenge: "Challenge",
        solution: "Solution",
        built: "Built with",
        highlights: "Highlights",
        result: "Result",
      },
      items: [
        {
          title: "PVR Media Reviews",
          challenge:
            "WooCommerce review systems usually process video uploads server-side — slow, expensive and heavy for the store hosting.",
          solution:
            "Built browser-side video compression and thumbnail generation before upload, plus media galleries, review voting, SEO landing pages and a Pro licensing system.",
          highlights: [
            "Client-side video compression",
            "Media galleries & voting",
            "SEO landing pages",
            "Pro licensing system",
          ],
          result: "Production-ready commercial WooCommerce plugin.",
        },
        {
          title: "Aquascape Competition Platform",
          challenge:
            "Running aquascaping competitions requires transparent judging: many participants, multiple criteria, seasons and a bilingual audience.",
          solution:
            "Built a full-stack platform from scratch: role-based dashboards for participants, judges and admins, configurable judging criteria, scoring, ranking, prize management — with UA/EN localization and Docker deployment.",
          highlights: [
            "Participant / judge / admin dashboards",
            "Configurable scoring & ranking",
            "UA/EN localization",
            "Docker-based deployment",
          ],
          result: "Live platform running full competition seasons.",
        },
        {
          title: "Porsche Center Dnipro",
          challenge:
            "A Porsche dealership needed a premium catalogue website with detailed car pages and easy content management.",
          solution:
            "Built a React + Node.js/MySQL application: vehicle gallery, car detail pages, server-side API and CMS functionality — with a focus on premium UI and fast navigation.",
          highlights: [
            "Vehicle gallery & detail pages",
            "Server-side API + CMS",
            "Premium responsive UI",
          ],
          result: "Production website for the dealership.",
        },
      ],
    },
    lab: {
      eyebrow: "Lab",
      title: "Experiments, prototypes & things I'm building",
      status: "in development",
      items: [
        { area: "Security", num: "01", name: "Information protection experiment" },
        { area: "AI", num: "02", name: "Developer tooling experiment" },
        { area: "Web", num: "03", name: "Experimental interface" },
      ],
    },
    about: {
      eyebrow: "About",
      pre: "Lebedev Egor · ",
      grad: "the journey",
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
    how: {
      eyebrow: "How I Work",
      steps: [
        { title: "Understand", text: "Goals, users, requirements." },
        { title: "Build", text: "Design, frontend, backend, integrations." },
        { title: "Test", text: "Responsive, performance, edge cases." },
        { title: "Deploy", text: "Production setup and handoff." },
      ],
    },
    contact: {
      eyebrow: "Contact",
      pre: "Have a ",
      grad: "project?",
      sub: "Have a store to improve, a plugin to build, or a full-stack product to launch? Write me — I reply fast and work carefully.",
      cta: "Start a project",
      labels: ["Email", "Telegram", "GitHub", "Upwork"],
    },
  },
  ru: {
    nav: [
      { href: "#work", label: "Работы" },
      { href: "#lab", label: "Лаборатория" },
      { href: "#about", label: "Обо мне" },
      { href: "#contact", label: "Контакты" },
    ],
    hero: {
      badge: "открыт к новым проектам · 2026",
      line1: "Full Stack",
      line2: "Web Developer",
      tagline: "От базы данных до пикселя.",
      sub: "Создаю сайты, интернет-магазины и веб-приложения — от идеи до продакшена.",
      cta1: "Смотреть работы",
      cta2: "Начать проект",
      tech: "React · Node.js · WordPress · WooCommerce · PHP",
    },
    work: {
      eyebrow: "Избранные работы",
      sub: "Реальные продукты в продакшене — не концепты.",
      caseStudy: "Смотреть кейс",
      viewProduct: "Открыть продукт",
      items: [
        {
          title: "Aquascape",
          kind: "Платформа соревнований",
          description: "Двуязычная платформа соревнований с дашбордами участников, судей и администраторов.",
        },
        {
          title: "Porsche Center Dnipro",
          kind: "Авто-платформа",
          description: "Премиальный сайт-галерея для автосалона Porsche.",
        },
        {
          title: "PVR Media Reviews",
          kind: "Плагин WooCommerce",
          description: "Коммерческий WooCommerce-плагин для фото- и видео-отзывов.",
        },
        {
          title: "Extended Reviews",
          kind: "Модуль OpenCart",
          description: "Коммерческая система отзывов для OpenCart — 800+ продаж.",
        },
      ],
    },
    capabilities: {
      eyebrow: "Направления",
      items: [
        { title: "Сайты и интернет-магазины", line: "WordPress · WooCommerce · Shopify · OpenCart" },
        { title: "Веб-приложения", line: "React · Node.js · PostgreSQL" },
        { title: "Кастомные продукты", line: "Плагины · API · Интеграции · Автоматизация" },
      ],
    },
    numbers: {
      eyebrow: "Why Lebedev Labs",
      items: [
        { n: "8+", label: "лет создаю для веба" },
        { n: "800+", label: "продаж коммерческих продуктов" },
        { n: "50+", label: "проверенных отзывов клиентов" },
        { n: "4", label: "продакшен-проекта в портфолио" },
        { n: "2018", label: "начало фриланса" },
        { n: "1", label: "разработчик — от идеи до деплоя" },
      ],
    },
    cases: {
      eyebrow: "Кейсы",
      labels: {
        challenge: "Задача",
        solution: "Решение",
        built: "Стек",
        highlights: "Ключевое",
        result: "Результат",
      },
      items: [
        {
          title: "PVR Media Reviews",
          challenge:
            "Системы отзывов WooCommerce обычно обрабатывают видео на сервере — медленно, дорого и тяжело для хостинга магазина.",
          solution:
            "Сделал клиентское сжатие видео и генерацию превью до загрузки, плюс медиа-галереи, голосование за отзывы, SEO-страницы и систему Pro-лицензий.",
          highlights: [
            "Сжатие видео на клиенте",
            "Медиа-галереи и голосование",
            "SEO-страницы",
            "Система Pro-лицензий",
          ],
          result: "Готовый коммерческий плагин для WooCommerce.",
        },
        {
          title: "Aquascape Competition Platform",
          challenge:
            "Проведение соревнований по акваскейпу требует прозрачного судейства: много участников, разные критерии, сезоны и двуязычная аудитория.",
          solution:
            "Построил платформу с нуля: дашборды с ролевым доступом для участников, судей и админов, настраиваемые критерии, скоринг, рейтинги и управление призами — с UA/EN локализацией и деплоем на Docker.",
          highlights: [
            "Дашборды участников / судей / админов",
            "Настраиваемый скоринг и рейтинги",
            "UA/EN локализация",
            "Деплой на Docker",
          ],
          result: "Платформа проводит полноценные сезоны соревнований.",
        },
        {
          title: "Porsche Center Dnipro",
          challenge:
            "Автосалону Porsche нужен был премиальный сайт-каталог с детальными страницами машин и удобным управлением контентом.",
          solution:
            "Сделал приложение на React + Node.js/MySQL: галерея автомобилей, страницы моделей, серверный API и функциональность CMS — с фокусом на премиальный UI и быструю навигацию.",
          highlights: [
            "Галерея и страницы моделей",
            "Серверный API + CMS",
            "Премиальный адаптивный UI",
          ],
          result: "Продакшен-сайт автосалона.",
        },
      ],
    },
    lab: {
      eyebrow: "Лаборатория",
      title: "Эксперименты, прототипы и то, что я создаю",
      status: "в разработке",
      items: [
        { area: "Безопасность", num: "01", name: "Эксперимент по защите информации" },
        { area: "ИИ", num: "02", name: "Инструменты для разработчиков" },
        { area: "Веб", num: "03", name: "Экспериментальный интерфейс" },
      ],
    },
    about: {
      eyebrow: "Обо мне",
      pre: "Лебедев Егор · ",
      grad: "путь",
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
    how: {
      eyebrow: "Как я работаю",
      steps: [
        { title: "Понимаю", text: "Цели, пользователи, требования." },
        { title: "Строю", text: "Дизайн, фронтенд, бэкенд, интеграции." },
        { title: "Тестирую", text: "Адаптивность, производительность, краевые случаи." },
        { title: "Деплою", text: "Продакшен и передача проекта." },
      ],
    },
    contact: {
      eyebrow: "Контакты",
      pre: "Есть ",
      grad: "проект?",
      sub: "Есть магазин для доработки, плагин для создания или full-stack продукт для запуска? Напишите мне — отвечаю быстро, работаю вдумчиво.",
      cta: "Начать проект",
      labels: ["Почта", "Telegram", "GitHub", "Upwork"],
    },
  },
};

export type Dict = (typeof dict)["en"];
