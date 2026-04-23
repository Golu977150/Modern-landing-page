#Modern Landing Page

A production-quality landing page built with React, TypeScript, Tailwind CSS, and Lucide React icons.

## Tech Stack

- **React 18** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS 3** for styling
- **Lucide React** for icons
- **Inter** font via Google Fonts

## Project Structure

```
src/
├── App.tsx                    # Root component assembling all sections
├── main.tsx                   # Entry point
├── index.css                  # Global styles, Tailwind layers, animations
├── components/
│   ├── Navbar.tsx             # Sticky nav with glassmorphism on scroll
│   ├── Hero.tsx               # Hero with badge, headline, CTA, dashboard mock
│   ├── Features.tsx           # 6-card feature grid with scroll animations
│   ├── HowItWorks.tsx         # 3-step flow with connector lines
│   ├── Testimonials.tsx       # 3 review cards with star ratings
│   ├── Pricing.tsx            # 3-tier pricing with "Most Popular" highlight
│   ├── CTA.tsx                # Dark CTA section with gradient text
│   └── Footer.tsx             # 4-column link grid, social icons, legal
└── hooks/
    └── useInView.ts           # IntersectionObserver hook for scroll animations
```

## Sections

1. **Navbar** - Fixed top bar that transitions from transparent to frosted glass on scroll. Includes mobile hamburger menu with smooth expand/collapse animation.

2. **Hero** - Full-viewport section with animated badge, bold headline with gradient text, dual CTA buttons, live stats row, and a mock dashboard UI featuring stat cards and a bar chart.

3. **Features** - Six feature cards in a responsive 3-column grid. Each card has an icon, title, and description. Cards animate in on scroll and lift on hover.

4. **How It Works** - Three-step visual flow with numbered badges, connector lines between steps (visible on desktop), and scroll-triggered fade-in animations.

5. **Testimonials** - Three testimonial cards with star ratings, quote text, and reviewer info (avatar, name, role, company). Uses stock photos from Pexels.

6. **Pricing** - Three pricing tiers (Starter, Pro, Enterprise). The Pro plan is highlighted with a "Most Popular" badge and a primary-colored border. Each card lists features with check marks.

7. **CTA** - Dark background section with gradient text headline, supporting copy, and dual action buttons. Background includes subtle glow effects and a dot grid pattern.

8. **Footer** - Four-column link grid (Product, Company, Resources, Legal), brand logo with description, social media icons, and a bottom bar with copyright and legal links.

## Design System

### Colors

| Ramp     | Usage                          |
|----------|--------------------------------|
| Primary  | Blue tones - CTAs, highlights  |
| Accent   | Green tones - badges, checks   |
| Neutral  | Gray tones - text, backgrounds |

### Typography

- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Line height**: 150% body, 110% headings

### Animations

- `fade-in`, `fade-in-up`, `fade-in-down` - Scroll-triggered entrance
- `slide-in-left`, `slide-in-right` - Directional reveals
- `scale-in` - Scale-up entrance
- `float` - Gentle vertical bob
- `pulse-soft` - Subtle opacity pulse
- Staggered delays via `.animate-delay-*` classes (100ms-800ms)

### Spacing

- 8px base grid system
- Section padding: `py-24 px-4 sm:px-6 lg:px-8`
- Container max-width: `max-w-6xl` (1152px)

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

### Type Check

```bash
npm run typecheck
```

## Responsive Breakpoints

| Breakpoint | Width    | Layout Changes                     |
|------------|----------|-------------------------------------|
| Default    | < 640px  | Single column, stacked layout      |
| sm         | 640px+   | Wider text, inline buttons         |
| md         | 768px+   | Multi-column grids, desktop nav    |
| lg         | 1024px+  | Full-width layout, larger headings |

## Key Patterns

- **Scroll Animations**: The `useInView` hook uses IntersectionObserver to trigger CSS animations once when elements enter the viewport. Elements start with `opacity-0` and animate to full visibility.

- **Glassmorphism**: The navbar applies `bg-white/80 backdrop-blur-xl` on scroll for a frosted glass effect.

- **Gradient Text**: The `.gradient-text` utility applies a blue-to-green gradient with `bg-clip-text text-transparent`.

- **Card Hover**: The `.card-hover` class applies `-translate-y-2 shadow-2xl` on hover with a 500ms ease-out transition.

- **Mobile Menu**: The mobile nav uses `max-h-0` / `max-h-80` with overflow hidden for a smooth expand/collapse without JavaScript height calculation.
