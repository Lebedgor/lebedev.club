# Design System Master File — LEBEDEV LABS

> **LOGIC:** When building a specific page, first check `design-system/lebedev-labs/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.
>
> Источник правды по визуалу: `previews/variant-3-saas.html`. Этот файл — формализация макета.

---

**Project:** LEBEDEV LABS (lebedev.club)
**Brand:** LEBEDEV LABS — всегда капсом, без точки, одним написанием
**Generated:** 2026-09-14, уточнено по утверждённому макету variant-3
**Category:** Personal portfolio / developer brand (SaaS-стиль)

---

## Global Rules

### Color Palette

Тёмная тема — единственная. Утверждённая палитра (не заменять на дефолтные blue/orange из генератора):

| Role | Value | CSS Variable |
|------|-------|--------------|
| Background | `#0c0d12` | `--color-background` |
| Foreground | `#f2f4f8` | `--color-foreground` |
| Muted text | `#9aa3b2` | `--color-muted-foreground` |
| Surface | `rgba(255,255,255,.04)` | `--color-surface` |
| Border | `rgba(255,255,255,.09)` | `--color-border` |
| Accent 1 (primary) | `#7c5cff` (фиолетовый) | `--color-accent` |
| Accent 2 | `#2dd4bf` (бирюзовый) | `--color-accent-2` |
| Accent 3 | `#f472b6` (розовый) | `--color-accent-3` |
| Destructive | `#DC2626` | `--color-destructive` |
| Ring/focus | `rgba(124,92,255,.55)` | `--color-ring` |

Контраст: обычный текст ≥ 4.5:1 к фону; muted `#9aa3b2` на `#0c0d12` ≈ 5.9:1 — держать не темнее.

### Typography

- **Шрифт:** Inter (утверждён, не заменять на Plus Jakarta Sans без согласования)
- **Заголовки:** weight 800, letter-spacing -2.5px, gradient-слова через `background-clip: text`
- **Body:** weight 400–500, muted-цвет для вторичного текста
- **Опционально для акцентов кода/меток:** моно-шрифт (JetBrains Mono) — согласовать при введении

### Spacing Variables

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | `4px` | Tight gaps |
| `--space-sm` | `8px` | Icon gaps |
| `--space-md` | `16px` | Standard padding |
| `--space-lg` | `24px` | Section padding |
| `--space-xl` | `32px` | Large gaps |
| `--space-2xl` | `48px` | Section margins |
| `--space-3xl` | `64px` | Hero padding |

---

## Style: Glassmorphism (liquid glass)

**Best For:** Modern SaaS, портфолио, модальные окна, навигация

### Жёсткий приём (обязателен для всех стеклянных поверхностей)

1. Фон поверхности: вертикальный градиент белого `rgba(255,255,255,.10)` → `.03`
2. `backdrop-filter: blur(22px) saturate(160%)`
3. Маскированная 1px градиентная окантовка (ярче сверху): `background + -webkit-mask: content-box/xor`
4. Внутренний верхний sheen: `radial-gradient(120% 60% at 50% 0%, rgba(255,255,255,.16), transparent 60%)`
5. Внешняя мягкая тень `0 10px 36px rgba(0,0,0,.35)` + внутренние свет/тень по канту

### Ambient

Три дрейфующих glow-пятна (`g1` фиолет, `g2` бирюза, `g3` розовый), `filter: blur(130px)`, анимация `ease-in-out alternate`, 16–24s.

### Component Specs

**Glass Button (пилюля):**
- Градиент 1px-окантовка через mask, вращающийся контурный блик на hover через `@property --shine-angle` + conic-градиент (2.4s linear infinite)
- Under-glow под кнопкой: primary — фиолетовый `rgba(124,92,255,.55)`, secondary — белый
- Hover: translateY(-1px) + brightness(1.18), active: scale(.97)
- Вариант «магнитная» кнопка (если понадобится): пружина damping 18 / stiffness 220 / mass 0.1, motion только через rAF

**Карточки:**
- Reveal по IntersectionObserver (стagger 0.1s), 3D tilt за мышью (±8deg, perspective 900px)
- Радиальная подсветка за курсором: CSS-переменные `--mx`/`--my` + `radial-gradient`
- Hover: border-color → `rgba(124,92,255,.5)`

**Nav:** fixed pill, liquid glass по жёсткому приёму, ссылки — чипы; активная — чип с градиентным фиолетово-бирюзовым контуром.

**Hero:** каскадное появление `riseIn` со stagger (.15s → .8s), shimmer градиентных слов (background-position, 6s linear), scroll-hint с анимированным «колёсиком».

---

## Page Pattern

**Pattern Name:** Hero + Features + CTA

- **Section Order:** Hero (имя + позиционирование) → Value prop → Направления (4 карточки) → Проекты (кейсы) → Опыт → CTA → Footer
- **CTA Placement:** Hero (primary) + Bottom («Связаться»)
- **Портфельный приоритет:** кейсы «задача → решение → результат»; visuals first, фильтр по категориям при росте числа проектов

---

## Animation Rules

- Мягкие пружины/transition, без резких скачков; сложная физика — через rAF
- Контурные/градиентные анимации только через `@property` (не вращением самого элемента — элемент не круглый, исказится)
- 1–2 анимированных ключевых элемента на экран; одно движение — один смысл
- Обязательна поддержка `prefers-reduced-motion` (полное отключение анимаций, статичное финальное состояние)
- CTA-текст ≥ 4.5:1 к заливке кнопки; focus-состояния всегда видимые

**Запрещено (отвергнуто пользователем):** typewriter-эффекты, spotlight за курсором.

**Anti-patterns:** ❌ избыточная анимация · ❌ эмодзи как иконки (только SVG: Lucide/Phosphor) · ❌ layout-shifting hover · ❌ низкий контраст · ❌ мгновенные смены состояний · ❌ невидимый focus

---

## Pre-Delivery Checklist

- [ ] Иконки — SVG (Lucide), никакого эмодзи-иконкового набора
- [ ] `cursor-pointer` на всех кликабельных элементах
- [ ] Hover-состояния с плавными transitions (150–300ms)
- [ ] Контраст текста ≥ 4.5:1 на тёмном фоне (проверить muted-текст)
- [ ] Focus-состояния видимы для клавиатуры
- [ ] `prefers-reduced-motion` уважается
- [ ] Responsive: 375px, 768px, 1024px, 1440px
- [ ] Контент не скрыт за fixed-навигацией
- [ ] Нет горизонтального скролла на мобильных
- [ ] Бренд написан `LEBEDEV LABS` (капсом, без точки) во всех текстах
