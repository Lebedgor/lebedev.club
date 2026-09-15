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
        {
          title: "Atelier №7",
          kind: "Editorial Website · Concept",
          description: "An editorial-grade website for an architecture studio that reads like a printed monograph.",
        },
        {
          title: "NORDEN",
          kind: "E-commerce · Concept",
          description: "A Scandinavian home-goods store where the shop feels like a design magazine.",
        },
        {
          title: "SENTRY",
          kind: "Security Platform · Concept",
          description: "A security operations platform concept: incidents, assets, scores and alerts in one calm interface.",
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
          title: "NORDEN",
          challenge:
            "A store for a premium Scandinavian home-goods brand that sells through atmosphere, not discounts — a shop that feels like a design magazine while keeping the path from first screen to cart short and obvious.",
          solution:
            "Editorial typography (Instrument Serif + Inter), a warm paper palette and a cohesive interior photo pack. Asymmetric grids, frameless cards, hairlines. Full commerce flow: catalog with filters and sorting, product pages with a sticky purchase panel and gallery-linked variants, cart drawer + full cart page, search, localStorage persistence.",
          highlights: [
            "Full flow to checkout",
            "Variants without reload",
            "aria-live & keyboard a11y",
            "~110 KB gzip",
          ],
          result: "A fast, accessible, visually coherent store with premium presentation on every screen.",
        }
{
          title: "Atelier №7",
          challenge:
            "Architecture studios sell atmosphere, and most websites kill it with generic agency layouts — card grids, banners, rounded buttons. The goal: a site that reads like a printed monograph — photography first, generous whitespace, slow editorial rhythm — while staying a fast, responsive web product.",
          solution:
            "A content-driven site where the design system itself is the product: ivory/ink/clay palette, Instrument Serif display type with Inter, hairline separators instead of cards, text links with arrows instead of CTA buttons. Projects, journal and services live in typed data files — a new project is a data entry, not new JSX. Motion is deliberately rare and slow, respecting prefers-reduced-motion.",
          highlights: [
            "Design system as the product",
            "Projects from data files",
            "20+ art-directed images",
            "Zero console errors at 375–1920px",
          ],
          result: "An editorial-grade site that holds up at any viewport and passes automated visual checks.",
        }
{
          title: "Aquascape Competition Platform",
          challenge:
            "Running aquascaping competitions requires transparent judging: many participants, multiple criteria, seasons and a bilingual audience.",
          solution:
            "Built a full-stack platform from scratch: role-based dashboards for participants, judges and admins, configurable judging criteria, scoring, ranking, prize management — with UA/EN localization and Docker deployment.",
          highlights: [
            "Role-based dashboards",
            "Configurable judging criteria",
            "UA/EN localization",
            "Docker deployment",
          ],
          result: "Live platform running full competition seasons.",
        }
{
          title: "Porsche Center Dnipro",
          challenge:
            "A Porsche dealership needed a premium catalogue website with detailed car pages and easy content management.",
          solution:
            "Built a React + Node.js/MySQL application: vehicle gallery, car detail pages, server-side API and CMS functionality — with a focus on premium UI and fast navigation.",
          highlights: [
            "Vehicle gallery & detail pages",
            "Server API + CMS",
            "Premium responsive UI",
          ],
          result: "Production website for the dealership.",
        }
{
          title: "SENTRY",
          challenge:
            "Security teams drown in signals: leaked keys, suspicious logins, misconfigured infrastructure — scattered across scanners, identity providers and cloud logs. Nobody can answer: what's our security posture right now and what needs to be done first.",
          solution:
            "Consolidated security monitoring into a single operations platform: incident triage queue with severity, status and an auditable timeline; live asset inventory with risk scores; a 0–100 security score linked to findings; role-based team access; notifications, API keys and webhooks.",
          highlights: [
            "Incident triage with audit trail",
            "Asset inventory & risk scores",
            "0–100 security score",
            "SVG charts, zero libraries",
          ],
          result: "A calm, information-dense security operations concept with real state changes on every screen.",
        }
{
          title: "PVR Media Reviews",
          challenge:
            "WooCommerce review systems usually process video uploads server-side — slow, expensive and heavy for the store hosting.",
          solution:
            "Built browser-side video compression and thumbnail generation before upload, plus media galleries, review voting, SEO landing pages and a Pro licensing system.",
          highlights: [
            "Client-side video compression",
            "Auto thumbnails & galleries",
            "Pro licensing system",
            "SEO landing pages",
          ],
          result: "Production-ready commercial WooCommerce plugin.",
        } ,
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
        {
          title: "Atelier №7",
          kind: "Редакционный сайт · Концепт",
          description: "Редакционный сайт для архитектурного бюро, который читается как печатная монография.",
        },
        {
          title: "NORDEN",
          kind: "Интернет-магазин · Концепт",
          description: "Магазин скандинавских товаров для дома, где витрина — как дизайн-журнал.",
        },
        {
          title: "SENTRY",
          kind: "Платформа безопасности · Концепт",
          description: "Концепт платформы кибербезопасности: инциденты, активы, скоринг и алерты в одном интерфейсе.",
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
          title: "NORDEN",
          challenge:
            "Магазин для премиального скандинавского бренда товаров для дома, который продаёт атмосферой, а не скидками — витрина как дизайн-журнал, но путь от первого экрана до корзины короткий и очевидный.",
          solution:
            "Редакционная типографика (Instrument Serif + Inter), тёплая «бумажная» палитра и цельный пак интерьерной фотографии. Асимметричные сетки, карточки без рамок, волосяные линии. Полный торговый флоу: каталог с фильтрами и сортировкой, карточки товара с липкой панелью покупки и вариантами, меняющими галерею, корзина-drawer и страница корзины, поиск, localStorage.",
          highlights: [
            "Полный флоу до чекаута",
            "Варианты без перезагрузки",
            "aria-live и клавиатура",
            "~110 KB gzip",
          ],
          result: "Быстрый, доступный и визуально цельный магазин с премиальной подачей на каждом экране.",
        }
{
          title: "Atelier №7",
          challenge:
            "Архитектурные бюро продают атмосферу, а типовые сайты убивают её шаблонным агентским дизайном — сетки карточек, баннеры, скруглённые кнопки. Цель — сайт, который читается как печатная монография: фотография, воздух, медленный редакционный ритм — и при этом быстрый, адаптивный продукт.",
          solution:
            "Контент-драйвен сайт, где дизайн-система — сам продукт: палитра ivory/ink/clay, Instrument Serif + Inter, волосяные линии вместо карточек, текстовые ссылки со стрелками вместо CTA-кнопок. Проекты, журнал и услуги живут в типизированных файлах данных — новый проект это запись данных, а не новый JSX. Движение редкое и медленное, с уважением к prefers-reduced-motion.",
          highlights: [
            "Дизайн-система как продукт",
            "Проекты из файлов данных",
            "20+ изображений с арт-дирекшном",
            "Ноль ошибок консоли на 375–1920px",
          ],
          result: "Редакционный сайт, который держит любой вьюпорт и проходит автоматические визуальные проверки.",
        }
{
          title: "Aquascape Competition Platform",
          challenge:
            "Проведение соревнований по акваскейпу требует прозрачного судейства: много участников, разные критерии, сезоны и двуязычная аудитория.",
          solution:
            "Построил платформу с нуля: дашборды с ролевым доступом для участников, судей и админов, настраиваемые критерии, скоринг, рейтинги и управление призами — с UA/EN локализацией и деплоем на Docker.",
          highlights: [
            "Дашборды по ролям",
            "Настраиваемые критерии судейства",
            "UA/EN локализация",
            "Деплой на Docker",
          ],
          result: "Платформа проводит полноценные сезоны соревнований.",
        }
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
        }
{
          title: "SENTRY",
          challenge:
            "Команды безопасности тонут в сигналах: утёкшие ключи, подозрительные входы, неверные конфигурации — разбросаны по сканерам, identity-провайдерам и облачным логам. Никто не может ответить: каков наш уровень защиты сейчас и что делать в первую очередь.",
          solution:
            "Консолидировал мониторинг безопасности в единую операционную платформу: очередь разбора инцидентов с severity, статусами и аудиторским таймлайном; живой реестр активов с оценкой риска; скоринг 0–100, связанный с находками; ролевой доступ команды; уведомления, API-ключи и вебхуки.",
          highlights: [
            "Инциденты с аудит-таймлайном",
            "Реестр активов и оценка рисков",
            "Скоринг 0–100",
            "SVG-графики без библиотек",
          ],
          result: "Спокойный, плотный концепт security-платформы с реальными изменениями состояния на каждом экране.",
        }
{
          title: "PVR Media Reviews",
          challenge:
            "Системы отзывов WooCommerce обычно обрабатывают видео на сервере — медленно, дорого и тяжело для хостинга магазина.",
          solution:
            "Сделал клиентское сжатие видео и генерацию превью до загрузки, плюс медиа-галереи, голосование за отзывы, SEO-страницы и систему Pro-лицензий.",
          highlights: [
            "Сжатие видео на клиенте",
            "Автопревью и галереи",
            "Система Pro-лицензий",
            "SEO-страницы",
          ],
          result: "Готовый коммерческий плагин для WooCommerce.",
        } ,
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
