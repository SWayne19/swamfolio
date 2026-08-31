# swamfolio

Personal portfolio website for Swam Pyae Paing — a full stack developer.

## Tech Stack

- **Vue 3** — Composition API with `<script setup>`
- **Vite 7** — Build tool and dev server
- **Tailwind CSS v4** — Utility-first styling via `@tailwindcss/vite` plugin
- **Vue Router 4** — Client-side routing with lazy-loaded pages
- **AOS** — Animate On Scroll library

## Features

- Dark / light theme toggle (persisted to `localStorage`)
- Typing animation in the navbar
- Animated background orbs (GPU-composited, respects `prefers-reduced-motion`)
- Route-based loading progress bar
- Mobile-responsive navigation with hamburger menu
- Scroll-to-top button
- Lazy-loaded route components for faster initial load

## Project Structure

```
src/
├── main.js              # App entry — router, AOS init
├── App.vue              # Layout shell (nav, footer, dots, projects provider)
├── style.css            # Tailwind import, theme tokens, animations
├── data/
│   └── projects.js      # Portfolio project data (provided to pages)
├── components/          # Reusable UI: NavBar, ThemeToggle, TypingName, etc.
├── assets/
│   └── images/          # Project screenshots
└── pages/
    ├── Home.vue              # Landing / hero section
    ├── About.vue             # About me, skills, experience timeline
    ├── Projects.vue          # Project listing (bento grid)
    ├── Project.vue           # Project detail layout (nested routes)
    ├── Overview.vue          # Project overview tab
    ├── FrontEnd.vue          # Frontend details tab
    ├── BackEnd.vue           # Backend details tab
    ├── Skill.vue             # Skill ticker component
    └── Contact.vue           # Contact section
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

Configured for **Vercel** via `vercel.json` — all routes rewrite to `index.html` for SPA support.

## Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/about` | About (skills, experience) |
| `/projects` | Project listing grid |
| `/projects/:id` | Project detail (redirects to overview) |
| `/projects/:id/frontEnd` | Frontend tab |
| `/projects/:id/backEnd` | Backend tab |
| `/experienceAndSkills*`, `/about/projects/*` | Legacy — redirects |
