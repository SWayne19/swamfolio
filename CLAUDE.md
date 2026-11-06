# CLAUDE.md - Swamfolio Project Guide

## Project Overview

**Swamfolio** is a personal portfolio website for Swam Pyae Paing (Full Stack Developer). It uses a minimal, editorial, dark-first design: rounded panels, large tight-tracked type, a monochrome palette with one green accent, and GSAP scroll animations. A light theme is also supported.

## Tech Stack

- **Framework**: Vue 3 (Composition API, `<script setup>`)
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 4 (via `@tailwindcss/vite` plugin)
- **Routing**: Vue Router 4 (history mode, lazy-loaded pages)
- **Animation**: GSAP + ScrollTrigger, Lenis smooth scroll
- **Fonts**: Geist + Geist Mono (Google Fonts)

## Commands

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run preview` — Preview production build

## Project Structure

```
src/
├── main.js                 # App entry, router config, route definitions
├── App.vue                 # Root layout: skip link, NavBar, router-view (page transition), AppFooter
├── style.css               # Design tokens, @theme mapping, utilities (shell, panel, eyebrow), .btn, marquee
├── data/
│   ├── projects.js         # Project data (reactive ref array) — single source of truth for projects
│   └── profile.js          # Personal info, approach copy, experiences, tools, toolbox, FAQs
├── composables/
│   ├── useLenis.js         # Lenis setup, scrollToTarget(), setScrollLocked(), isTabSwitch()
│   ├── useGsap.js          # Scoped gsap.context + automatic [data-reveal] fade-ups, reverted on unmount
│   └── useCurrentProject.js# Computed current project from route.params.id
├── components/
│   ├── NavBar.vue          # Sticky nav, section links, full-screen mobile menu
│   ├── ThemeToggle.vue     # Dark/light toggle, persists to localStorage
│   ├── AppFooter.vue       # Contact CTA panel (id="contact") + copyright / back to top
│   ├── LocalClock.vue      # Live clock in the profile time zone
│   ├── ExperienceCard.vue  # Auto-rotating career card (bento)
│   ├── TechMarquee.vue     # Infinite tool marquee
│   ├── FaqList.vue         # Accessible accordion
│   └── DetailSection.vue   # Label/content row used by project tabs (text, numbered list, or chips)
└── pages/
    ├── Home.vue            # Hero, bento, marquee, approach (#about), work (#work), experience, FAQ (#faq), toolbox
    ├── Project.vue         # Project detail: header, meta, cover, sticky pill tabs, prev/next
    ├── Overview.vue        # Tab: goal, highlights, challenges, outcome
    ├── FrontEnd.vue        # Tab: stack, architecture, features, UI/UX
    └── BackEnd.vue         # Tab: stack, features, database, security (or frontend-only notice)
```

## Routes

| Path | Name | Component | Notes |
|---|---|---|---|
| `/` | home | Home | Single-page landing |
| `/projects/:id` | project | Project | Redirects to overView child |
| `/projects/:id` (child) | overView | Overview | Default project tab |
| `/projects/:id/frontEnd` | frontEnd | FrontEnd | Frontend details tab |
| `/projects/:id/backEnd` | backEnd | BackEnd | Backend details tab |

`/about`, `/projects`, `/experienceAndSkills` and unknown paths redirect to `/`. Switching tabs within a project keeps the scroll position (`isTabSwitch`).

## Key Patterns & Conventions

### Data Flow
- Projects are a `ref()` in `src/data/projects.js`, provided from `App.vue` and injected as `projects`
- Personal content (experience, FAQ, tools, contact info) lives in `src/data/profile.js`, so edit copy there

### Styling
- Colors are CSS variables on `:root` / `:root.dark`, mapped with `@theme inline` to Tailwind colors:
  `bg`, `surface`, `raised`, `fg`, `muted`, `subtle`, `line`, `invert`, `invert-fg`, `accent`
  (e.g. `bg-surface`, `text-muted`, `border-line`). These switch automatically with the theme, so `dark:` variants are rarely needed.
- Utilities: `shell` (page container), `panel` (rounded card surface), `eyebrow` (mono uppercase label)
- Buttons: `.btn` + `.btn-solid` / `.btn-ghost` (+ `.btn-sm`)
- Headings use `font-medium` with tight negative tracking and `clamp()` sizes

### Animation
- Use `useGsap(rootRef, setup?)` for page/component animation; it scopes selectors and reverts on unmount
- Add `data-reveal` (optionally `data-reveal="0.1"` for delay) to fade an element up on scroll
- Pass `{ reveal: false }` when a parent component contains children that run their own reveals
- All motion is skipped under `prefers-reduced-motion`

### Theme System
- Dark is the default; `localStorage.theme === "light"` opts into light
- FOUC prevention: inline script in `index.html` sets the `dark` class before render

## Rules

- Always use Vue 3 Composition API with `<script setup>` syntax
- Use Tailwind utilities and the design tokens above; avoid hard-coded colors and inline styles (except dynamic values)
- Use `panel` for card containers and `shell` for page width
- Add new projects to `src/data/projects.js` following the existing shape (id, title, description, tags, image, url, overview, frontend, backend)
- Place project images in `public/images/projects/` and tool icons (square viewBox) in `public/images/tools/`
- Keep pages lazy-loaded in `src/main.js`; all routes are defined there
- Scroll to sections via `scrollToTarget(id)` from `useLenis.js` (works with Lenis and the sticky nav offset)
- Clean up event listeners and timers in `onUnmounted`
- `public/_redirects` / `vercel.json` handle SPA deployment
- No testing framework or linter is configured
