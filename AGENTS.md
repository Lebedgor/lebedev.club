# LEBEDEV LABS (lebedev.club)

Личный сайт-визитка и портфолио Full Stack Web Developer (Лебедев Егор / Lebedev Egor).
Бренд: **LEBEDEV LABS** — строго капсом, без точки, одним написанием (логотипы, тексты, футер, OG-изображение).

- Production: https://lebedev-labs.vercel.app
- GitHub: https://github.com/Lebedgor/lebedev.club
- Домен: `lebedev.club`

---

## Команды и запуск

- `npm run dev` — запуск локального dev-сервера (порт 3000)
- `npm run build` — сборка Next.js проекта
- `git push origin main` — автоматический production-деплой на Vercel

**Критический нюанс сборки:**
Не запускать `npm run build` при активном процессе `npm run dev` — сборка перезаписывает папку `.next`, из-за чего dev-сервер начинает отдавать 404 на стили и JS-чанки. Если сборка была запущена, перезапустить dev-сервер.

---

## Архитектура и структура кода

- Стек: **Next.js 15 (App Router)**, **React 19**, **Tailwind CSS v4** (`@tailwindcss/postcss`), **TypeScript**, **sharp**
- `app/`
  - `layout.tsx` — подключение шрифтов (Space Grotesk + Inter), глобальный фон, провайдер языка
  - `page.tsx` — корневая one-page страница, порядок секций
  - `globals.css` — CSS-переменные темы, токены liquid glass, анимации
  - `not-found.tsx` — стилизованная страница 404
  - `opengraph-image.tsx` — динамическая OG-картинка через `next/og`
- `components/`
  - Секции: `hero.tsx`, `work.tsx`, `capabilities.tsx`, `numbers.tsx`, `case-studies.tsx`, `lab.tsx`, `about.tsx`, `how-i-work.tsx`, `contact.tsx`, `footer.tsx`
  - Интерактивные слои: `nav.tsx` (scroll-spy + RU/EN переключатель + GitHub), `star-field.tsx` (canvas-космос), `background-fx.tsx` (progress-линия), `tilt.tsx` (3D-наклон карточек), `reveal.tsx` (scroll-reveal)
  - UI: `ui/glass-button.tsx` (кнопка-пилюля с контурным бликом)
- `lib/`
  - `i18n.ts` — **единый источник истины для всех текстов**. Содержит словари `en` и `ru`. При добавлении или изменении любых текстов обновлять ОБА языка
  - `content.ts` — метаданные проектов, кейсов, контактов и список навыков (URL, картинки, теги)
  - `utils.ts` — утилита `cn()`
- `public/images/` — оптимизированные изображения для сайта (WebP/JPEG). Исходные тяжёлые папки со скриншотами не использовать напрямую на страницах

---

## Структура страницы (One-Page)

1. `Hero` — заголовок Space Grotesk, клиентское позиционирование, CTA, тех-стек
2. `Work` (`#work`) — 7 проектов (карточки 01–06 ведут на `#case-01`..`#case-06`, 07 Extended Reviews — на внешний сайт)
3. `Capabilities` (`#capabilities`) — 3 направления (Websites & E-commerce / Web Applications / Custom Products)
4. `Numbers` (`#numbers`) — Why Lebedev Labs (8+ лет, 800+ продаж, 50+ отзывов, 4 продакшен-проекта, 2018, 1 разработчик)
5. `CaseStudies` (`#case-studies`) — 6 кейсов: NORDEN, Atelier №7, Aquascape, Porsche Center Dnipro, SENTRY, PVR Media Reviews
6. `Lab` (`#lab`) — 3 эксперимента со статусом `in development`
7. `About` (`#about`) — аватар, текст пути и таймлайн
8. `HowIWork` (`#how`) — 4 шага: Understand → Build → Test → Deploy
9. `Contact` (`#contact`) — ссылки на Email, Telegram, GitHub, Upwork и CTA
10. `Footer` — wordmark LEBEDEV LABS и слоган «Built with intention.»

---

## Дизайн-система и правила стилей

- **Типографика**:
  - Заголовки / Display: `Space Grotesk` (`--font-space`, только Latin). В русской версии заголовки чисто и гармонично фолбэчатся на `Inter`.
  - Основной текст: `Inter` (`--font-inter`, Latin + Cyrillic).
- **Палитра**:
  - Фон: `#0c0d12`, текст: `#f2f4f8`, muted: `#9aa3b2`
  - Акценты: фиолетовый `#7c5cff`, бирюзовый `#2dd4bf`, розовый `#f472b6`
  - Поверхности: `rgba(255, 255, 255, 0.04)`, границы: `rgba(255, 255, 255, 0.09)`
- **Эффекты**:
  - **StarField**: холст canvas с полётом сквозь звёзды. В покое скорость минимальна (`0.00012`), звёзды круглые. При скролле разгоняются в варп (с полосами), после остановки затухают плавно с инерцией (~3 сек).
  - **Ambient glow**: 3 цветных пятна (`.g1`, `.g2`, `.g3`), размытие 130px, `opacity: 0.12`, медленный дрейф 16–24s.
  - **Liquid glass**: градиент белого 10% → 3%, `backdrop-filter: blur(22px) saturate(160%)`, маскированная окантовка 1px, внутренний верхний sheen.
  - **Glass Button**: контурный блик на hover через `@property --shine-angle` (conic-gradient 2.4s), under-glow тень (`.glass-shadow`).
  - **3D Tilt**: карточки проектов и направлений реагируют на курсор с подсветкой `--mx` / `--my`.

**Запрещено (решения пользователя):**
- ❌ Никаких typewriter-эффектов и бегущих строк с буквами.
- ❌ Никакого spotlight-фона, следующего за курсором.
- ❌ Никаких проезжающих при скролле световых пятен (torch/лучей).
- ❌ Мобильные приложения (Android / iOS / Windows) на главной НЕ показывать (размывают веб-позиционирование; только в CV/Upwork).
- ❌ Не использовать слоган «crafted, not generated» (заменён на «Built with intention.»).
- ❌ Не использовать эмодзи как структурные иконки — только SVG.
- Обязательна поддержка `prefers-reduced-motion` (отключение движения звёзд, мгновенные состояния).

---

## Работа с изображениями

- Новые скриншоты перед добавлением в `public/images/` обязательно оптимизировать (макс. ширина ~1600px, форматы JPEG/WebP, сжатие). Не класть в `public/images/` файлы по 5-10MB.
- Папки с тяжёлыми исходниками в корне (`assets/`, `ATELIER #7/`, `NORDEN/`, `SENTRY/`, `PVR media reviews/`) не подключать в код напрямую.

---

## Правила взаимодействия

- **Никогда не вызывать `open` для открытия браузера** — пользователь держит вкладку открытой и обновляет её самостоятельно.
- **Общение с пользователем строго на русском языке**.
- **Комментарии в коде не добавлять** (если прямо не запрошено).
- Точка отката: тег `stable-v1` в Git (первоначальная стабильная версия до экспериментов).
