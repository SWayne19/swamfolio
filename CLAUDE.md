# CLAUDE.md - Swamfolio Project Guide

## Project Overview

**Swamfolio** is a personal portfolio website for Swam Pyae Paing (Full Stack Developer). It showcases projects, skills, experience, and contact information with a modern glass-morphism design, dark/light theme support, and smooth animations.

## Tech Stack

- **Framework**: Vue 3 (Composition API, `<script setup>`)
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 4 (via `@tailwindcss/vite` plugin)
- **Routing**: Vue Router 4 (history mode, lazy-loaded pages)
- **Font**: Inter (Google Fonts)
- **Other**: vue3-loading-skeleton (loading states)

## Commands

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run preview` — Preview production build

## Project Structure

```
src/
├── main.js              # App entry, router config, route definitions
├── App.vue              # Root layout: FloatingDots, NavBar, router-view (with Suspense), ScrollToTop, AppFooter
├── style.css            # Tailwind imports, custom theme, glass-card, animations
├── data/
│   └── projects.js      # Project data (reactive ref array) — single source of truth for all projects
├── components/
│   ├── NavBar.vue        # Sticky nav with mobile hamburger menu, ThemeToggle integration
│   ├── FloatingDots.vue  # Canvas-based animated background dots (theme-aware)
│   ├── ScrollProgress.vue# Horizontal scroll progress bar at top
│   ├── ScrollToTop.vue   # Floating button with easing animation
│   ├── ThemeToggle.vue   # Dark/light toggle, persists to localStorage
│   ├── TypingName.vue    # Typing effect cycling through name and title
│   ├── AppFooter.vue     # Copyright footer with dynamic year
│   └── PageSkeleton.vue  # Skeleton loading UI (uses vue3-loading-skeleton)
└── pages/
    ├── Home.vue          # Hero section with profile image, intro, CTA buttons, Contact section
    ├── About.vue         # Stats grid, bio, experience timeline, Skill ticker
    ├── Skill.vue         # Animated horizontal ticker of tech tool icons (12 tools)
    ├── Projects.vue      # Bento grid layout of project cards
    ├── Project.vue       # Project detail with tabbed navigation (Overview/FrontEnd/BackEnd)
    ├── Overview.vue      # Project overview tab (goal, highlights, challenges, outcome)
    ├── FrontEnd.vue      # Frontend details tab (stack, architecture, features, UI/UX)
    ├── BackEnd.vue       # Backend details tab (stack, features, database, security)
    └── Contact.vue       # Contact section with email, phone, LinkedIn, GitHub links
```

## Routes

| Path | Name | Component | Notes |
|---|---|---|---|
| `/` | home | Home | Landing page |
| `/about` | about | About | Profile, skills, experience |
| `/projects` | projects | Projects | Project gallery |
| `/projects/:id` | project | Project | Redirects to overView child |
| `/projects/:id` (child) | overView | Overview | Default project tab |
| `/projects/:id/frontEnd` | frontEnd | FrontEnd | Frontend details tab |
| `/projects/:id/backEnd` | backEnd | BackEnd | Backend details tab |

Legacy redirects exist for `/experienceAndSkills` and `/about/projects/:id`.

## Key Patterns & Conventions

### Data Flow
- Projects data is defined as a `ref()` in `src/data/projects.js` and provided via Vue's `provide/inject` pattern from `App.vue`
- All project-related pages inject `projects` and find the current project using `route.params.id`

### Styling
- **Tailwind CSS 4** with `@theme` custom properties for primary color palette (blue-gray tones)
- **Glass-morphism**: Use the `.glass-card` class for semi-transparent card styling with backdrop blur
- **Dark mode**: Class-based (`html.dark`), custom variant `@custom-variant dark (&:where(.dark, .dark *))`
- **Helper classes**: `.gradient-text`, `.section-divider`, `.profile-ring`, `.no-scrollbar`, `.ticker-track`
- Light bg: `#f5f5f0`, Dark bg: `#141418`

### Theme System
- Theme is persisted in `localStorage` under key `theme`
- FOUC prevention: Inline script in `index.html` applies dark class before render
- Components check dark mode via `document.documentElement.classList.contains("dark")`

### Component Patterns
- All components use `<script setup>` (Composition API)
- Proper lifecycle cleanup: event listeners and animation frames removed in `onUnmounted`
- Responsive design using Tailwind breakpoints (`sm`, `md`, `lg`)

## Rules

- Always use Vue 3 Composition API with `<script setup>` syntax
- Use Tailwind CSS utility classes for styling; avoid inline styles unless necessary for dynamic values
- Add new projects by adding entries to `src/data/projects.js` — follow the existing object shape (id, title, description, tags, image, url, overview, frontend, backend)
- Place project images in `public/images/projects/` and tool icons in `public/images/tools/`
- Keep pages lazy-loaded in `src/main.js` using dynamic imports
- Maintain dark mode support for all new components (use Tailwind's `dark:` variant)
- Use the `.glass-card` class for card-style containers
- Clean up event listeners and timers in `onUnmounted`
- All routes are defined in `src/main.js` (no separate router file)
- The app uses `Suspense` with `PageSkeleton` as fallback for lazy-loaded routes
- Static assets go in `public/`; component-scoped assets can use standard imports
- `public/_redirects` exists for deployment (likely Netlify/Vercel SPA redirect)
- No testing framework is currently configured
- No linter/formatter is currently configured
