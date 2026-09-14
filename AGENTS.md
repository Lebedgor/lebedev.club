# lebedev.club — Lebedev Labs: личный сайт-визитка + портфолио

Бренд: **LEBEDEV LABS** — всегда капсом, без точки, одним написанием (логотипы, тексты, футер, OG-изображения). Full Stack Web Developer (Лебедев). Домен lebedev.club.

## Статус проекта

- Стадия: кодовая база развёрнута (Next.js 15 + Tailwind 4 + TypeScript), one-page с RU/EN-переключателем; дальше — деплой на Vercel и полировка
- Референс дизайна: `previews/variant-3-saas.html` (статический макет, источник правды по стилю)
- Остальные (`variant-1-terminal`, `variant-2-editorial`, `variant-4-pastel`, `variant-5-apple`) — отклонённые альтернативы, не удалять до запуска

## Структура кодовой базы

- `app/` — layout, page, globals.css (дизайн-токены + glass-система), not-found, opengraph-image (генерируется через next/og)
- `components/` — секции (hero, expertise, projects, experience, contact, footer), nav (scroll-spy), ui/glass-button, reveal, tilt, background-fx, language-provider
- `lib/i18n.ts` — словарь RU/EN; `lib/content.ts` — языконезависимые данные (ссылки, теги, картинки); `lib/utils.ts` — cn()
- `public/images/` — скриншоты проектов + аватар (next/image оптимизирует в WebP)

## Целевой стек (при развёртывании)

- Next.js + Tailwind CSS + TypeScript (shadcn-структура, компоненты в `components/ui`)
- RU + EN (переключатель языка)
- Тёмная тема — единственная (сайт тёмный by design)
- Деплой на Vercel

## Дизайн-система (вариант 3)

Формализованная дизайн-система (палитра, типографика, glass-приёмы, правила анимаций, чеклист): `design-system/lebedev-labs/MASTER.md` — читать её перед любой UI-работой; переопределения отдельных страниц складывать в `design-system/lebedev-labs/pages/[page].md`.

Палитра:
- Фон `#0c0d12`, текст `#f2f4f8`, muted `#9aa3b2`
- Акценты: фиолетовый `#7c5cff`, бирюзовый `#2dd4bf`, розовый `#f472b6`
- Поверхности: `rgba(255,255,255,.04)`, границы `rgba(255,255,255,.09)`
- Шрифт: Inter, жирные заголовки с letter-spacing -2.5px

Ключевые приёмы (обязательны при переносе в Next.js):
- Liquid glass: стеклянные поверхности = вертикальный градиент белого (10%→3%) + `backdrop-filter: blur(22px) saturate(160%)` + маскированная 1px градиентная окантовка (ярче сверху) + внутренний верхний sheen + внешняя мягкая тень
- Кнопки — glass-button (пилюли): контурный блик по окантовке на hover через `@property --shine-angle` conic-градиент, under-glow под кнопкой (`.glass-shadow`)
- Ambient: три цветовых glow-пятна-акцента (фиолет/бирюза/розовый, blur 130px, медленный drift 16–24s) — статичны по позиции, без scroll-параллакса; проезжающие при скролле «лучи света» НЕ использовать (решение пользователя). Dot-grid с лёгким дрейфом по скроллу
- Scroll: progress-линия чтения сверху, reveal-анимации секций, scroll-spy в навигации
- Hero: каскадное появление (`riseIn` stagger), shimmer градиентных слов (6s linear), scroll-hint
- Карточки: reveal по IntersectionObserver + 3D tilt за мышью + радиальная подсветка (--mx/--my)
- В тексте НЕ использовать: typewriter-эффекты, spotlight за курсором — пользователь отверг

Ограничения анимаций:
- Обязательна поддержка `prefers-reduced-motion`
- Все hover-анимации — плавные пружины/transition, без резких скачков
- Контурные/градиентные анимации только через `@property`, не вращением самого элемента (элемент не круглый — исказится)

## Содержание сайта

Структура (one-page): Hero → статистика → направления (Expertise) → проекты → опыт/About → контакты → футер. Языки RU + EN (в макете пока EN).

Позиционирование: личный бренд + привлечение клиентов + поиск работы. CTA: «View projects», «Contact me».

Реальный контент (язык оригинала — EN):
- Проекты (4): Aquascape Competition Platform (React/Node/PostgreSQL, UA/EN, Docker); Porsche Dnipro (React/Node/MySQL, автосалон); PVR Media Reviews (WooCommerce-плагин фото/видео-отзывов, лицензии); Extended Reviews для OpenCart (800+ продаж, 50+ отзывов)
- Ключевые факты: 8+ лет опыта (с 2018, фриланс); e-commerce: OpenCart, WordPress/WooCommerce; full-stack: React, Node.js, Express, Prisma, PostgreSQL; также Android/iOS/Windows
- Контакты: lebedev.labs@gmail.com · TG @ExWebDev · github.com/Lebedgor · Upwork-профиль
- Изображения: `assets/images/` (папки по проектам; аватары в `assets/images/avatar/`; в макете используется avatar-tech-modern.jpg). ВНИМАНИЕ: папка Aquascape содержит trailing space в имени; суммарный вес 43MB — при переносе в Next.js оптимизировать (resize/WebP)

## Правила работы

- Не открывать браузер (`open` на html-файлы) — пользователь держит вкладку открытым и обновляет сам
- Общение с пользователем — на русском
- Комментарии в коде не добавлять
- Прежде чем менять стиль: этот макет — источник правды по дизайну; изменения стиля согласовывать с пользователем
