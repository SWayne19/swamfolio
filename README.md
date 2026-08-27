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
├── App.vue              # Layout shell (nav, footer, orbs, theme, projects data)
├── style.css            # Tailwind import, theme tokens, orb animations
├── assets/
│   └── images/          # Project screenshots
└── pages/
    ├── Home.vue              # Landing / hero section
    ├── About.vue             # About me
    ├── ExperienceAndSkills.vue # Skills and experience overview
    ├── Project.vue           # Project detail layout (nested routes)
    ├── Overview.vue          # Project overview tab
    ├── FrontEnd.vue          # Frontend details tab
    ├── BackEnd.vue           # Backend details tab
    ├── Skill.vue             # Skill detail component
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
| `/about` | About |
| `/experienceAndSkills` | Experience & Skills |
| `/experienceAndSkills/projects/:id` | Project detail (redirects to overview) |
| `/experienceAndSkills/projects/:id/frontEnd` | Frontend tab |
| `/experienceAndSkills/projects/:id/backEnd` | Backend tab |
