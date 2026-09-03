# swamfolio

Personal portfolio website for Swam Pyae Paing — a full stack developer.

## Tech Stack

- **Vue 3** — Composition API with `<script setup>`
- **Vite 7** — Build tool and dev server
- **Tailwind CSS v4** — Utility-first styling via `@tailwindcss/vite` plugin
- **Vue Router 4** — Client-side routing with lazy-loaded pages

## Features

- Dark / light theme toggle (persisted to `localStorage`, FOUC-free)
- Glass-morphism UI with custom primary color palette
- Typing animation cycling name and title in the navbar
- Canvas-based floating dots background (theme-aware, respects `prefers-reduced-motion`)
- Scroll progress bar at the top of the page
- Smooth scroll-to-top button with easing animation
- Mobile-responsive navigation with hamburger menu
- Lazy-loaded route components
- Animated skills ticker carousel with SVG tool icons
- Bento grid project gallery with varied card sizes
- Tabbed project detail pages (Overview / Front End / Back End)
- Contact section with email, phone, LinkedIn, and GitHub links
- Experience timeline on the About page

## Project Structure

```
public/
├── images/
│   ├── profile/             # Profile photo
│   ├── projects/            # Project screenshots
│   └── tools/               # SVG icons for tech tools
└── _redirects               # SPA redirect rules for deployment
src/
├── main.js                  # App entry, router config, all route definitions
├── App.vue                  # Layout shell (FloatingDots, NavBar, router-view, ScrollToTop, AppFooter)
├── style.css                # Tailwind import, @theme tokens, glass-card, animations
├── data/
│   └── projects.js          # Portfolio project data (reactive ref, provided via inject)
├── components/
│   ├── NavBar.vue           # Sticky nav with mobile menu and ThemeToggle
│   ├── ThemeToggle.vue      # Dark/light toggle button
│   ├── TypingName.vue       # Typing effect animation
│   ├── FloatingDots.vue     # Canvas animated background dots
│   ├── ScrollProgress.vue   # Horizontal scroll progress bar
│   ├── ScrollToTop.vue      # Floating scroll-to-top button
│   └── AppFooter.vue        # Copyright footer
└── pages/
    ├── Home.vue             # Hero section with profile, intro, and Contact
    ├── About.vue            # Stats, bio, experience timeline, skills ticker
    ├── Skill.vue            # Animated horizontal ticker of tech tool icons
    ├── Projects.vue         # Bento grid project gallery
    ├── Project.vue          # Project detail with tabbed navigation
    ├── Overview.vue         # Project overview tab
    ├── FrontEnd.vue         # Frontend details tab
    ├── BackEnd.vue          # Backend details tab
    └── Contact.vue          # Contact section (email, phone, LinkedIn, GitHub)
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

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

## Deployment

Configured for static hosting (Vercel/Netlify) — `public/_redirects` rewrites all routes to `index.html` for SPA support.

## Routes

| Path | Name | Component | Notes |
|------|------|-----------|-------|
| `/` | home | Home | Landing / hero page |
| `/about` | about | About | Stats, bio, skills, experience timeline |
| `/projects` | projects | Projects | Bento grid project gallery |
| `/projects/:id` | project | Project | Project detail layout, redirects to overview |
| `/projects/:id` (default child) | overView | Overview | Project overview tab |
| `/projects/:id/frontEnd` | frontEnd | FrontEnd | Frontend details tab |
| `/projects/:id/backEnd` | backEnd | BackEnd | Backend details tab |

### Legacy Redirects

| Path | Redirects To |
|------|-------------|
| `/experienceAndSkills` | `/about` |
| `/experienceAndSkills/projects/:id` | `/projects/:id` |
| `/about/projects/:id` | `/projects/:id` |
