<template>
  <div class="min-h-screen bg-slate-950 text-slate-50">
    <!-- Top gradient accents -->
    <div class="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        class="absolute left-10 top-[-200px] h-[420px] w-[420px] rounded-full bg-blue-500/30 blur-[180px]"
      />
      <div
        class="absolute right-[-120px] top-10 h-[420px] w-[420px] rounded-full bg-indigo-500/30 blur-[180px]"
      />
      <div
        class="absolute bottom-[-220px] left-1/3 h-[380px] w-[480px] rounded-full bg-cyan-400/20 blur-[160px]"
      />
    </div>

    <div class="mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
      <!-- Navbar -->
      <header class="mb-14 flex items-center justify-between gap-4">
        <div class="flex items-center gap-3">
          <div
            class="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-blue-500 to-indigo-600 text-lg font-semibold text-white shadow-lg shadow-blue-900/30"
          >
            SP
          </div>
          <div>
            <p class="text-sm uppercase tracking-[0.2em] text-blue-200/70">
              Portfolio
            </p>
            <h1 class="text-xl font-semibold text-slate-50">Swam Pyae Paing</h1>
          </div>
        </div>
        <nav
          class="hidden items-center gap-6 text-sm text-slate-200/80 sm:flex"
        >
          <a class="transition hover:text-white" href="#about">About</a>
          <a class="transition hover:text-white" href="#skills">Skills</a>
          <a class="transition hover:text-white" href="#projects">Projects</a>
          <a class="transition hover:text-white" href="#experience"
            >Experience</a
          >
          <a
            class="rounded-full bg-white/10 px-4 py-2 text-white shadow-lg shadow-indigo-900/30 transition hover:-translate-y-0.5 hover:bg-white/20"
            href="#contact"
            >Contact</a
          >
        </nav>
      </header>

      <!-- Hero -->
      <section
        class="grid gap-10 rounded-3xl border border-white/5 bg-white/5 p-8 shadow-xl shadow-blue-950/20 backdrop-blur md:grid-cols-[1.3fr_1fr] md:p-12"
      >
        <div class="flex flex-col gap-8">
          <div
            class="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-blue-100/80 ring-1 ring-white/15"
          >
            <span class="h-2 w-2 rounded-full bg-emerald-400" />
            Open to Frontend Roles
          </div>
          <div>
            <p class="text-sm uppercase tracking-[0.24em] text-blue-100/60">
              Junior Frontend Developer
            </p>
            <h2
              class="mt-3 text-4xl font-bold leading-tight text-white sm:text-5xl"
            >
              Designing crisp, fast, and human-centered web experiences.
            </h2>
            <p class="mt-4 max-w-2xl text-lg text-slate-200/80">
              I craft clean UIs with Vue, Tailwind, and modern tooling. With 1
              year of hands-on experience, I focus on shipping thoughtful
              interfaces that feel effortless to use.
            </p>
          </div>
          <div class="flex flex-wrap items-center gap-4">
            <a
              class="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-blue-500 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-900/40 transition hover:-translate-y-0.5"
              href="#projects"
            >
              View Projects
              <svg
                class="h-4 w-4"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              class="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
              href="#contact"
            >
              Contact Me
            </a>
          </div>
          <div class="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div
              v-for="stat in stats"
              :key="stat.label"
              class="rounded-2xl border border-white/10 bg-slate-900/60 p-4 shadow shadow-slate-950/40"
            >
              <p class="text-sm text-slate-200/70">{{ stat.label }}</p>
              <p class="mt-2 text-xl font-semibold text-white">
                {{ stat.value }}
              </p>
            </div>
          </div>
        </div>

        <div class="relative">
          <div
            class="absolute -left-6 -top-6 h-24 w-24 rounded-3xl bg-linear-to-br from-cyan-400 to-blue-600 blur-3xl opacity-40"
          />
          <div
            class="relative rounded-[28px] border border-white/10 bg-slate-900/60 p-6 shadow-2xl shadow-indigo-900/30 backdrop-blur"
          >
            <div class="flex items-center justify-between gap-3">
              <div>
                <p class="text-sm text-slate-200/70">Currently improving</p>
                <h3 class="text-xl font-semibold text-white">
                  Micro-interactions
                </h3>
              </div>
              <span
                class="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-200"
                >Focus</span
              >
            </div>
            <div class="mt-6 flex flex-col gap-4">
              <div
                v-for="item in highlightItems"
                :key="item.title"
                class="flex items-center justify-between rounded-xl border border-white/5 bg-white/5 px-4 py-3"
              >
                <div>
                  <p
                    class="text-xs uppercase tracking-[0.2em] text-blue-100/60"
                  >
                    {{ item.title }}
                  </p>
                  <p class="text-sm font-semibold text-white">
                    {{ item.value }}
                  </p>
                </div>
                <span
                  class="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_0_6px] shadow-emerald-400/20"
                />
              </div>
            </div>
            <div
              class="mt-6 flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3 text-sm text-slate-200/80"
            >
              <span
                class="h-10 w-10 rounded-xl bg-linear-to-br from-blue-500 to-indigo-600"
              />
              <div>
                <p class="font-semibold text-white">Latest sprint</p>
                <p class="text-slate-200/70">
                  Refining dashboard charts and responsive tables.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- About -->
      <section id="about" class="mt-14 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
        <div
          class="rounded-3xl border border-white/5 bg-slate-900/60 p-8 shadow-xl shadow-blue-950/30"
        >
          <p class="text-sm uppercase tracking-[0.25em] text-blue-100/60">
            About
          </p>
          <h3 class="mt-3 text-3xl font-semibold text-white">
            I enjoy designing experiences that feel calm and intentional.
          </h3>
          <p class="mt-4 text-slate-200/80">
            I build Vue-driven frontends with a focus on clarity, readable code,
            and fast feedback loops. I care about aligning UI decisions with
            user goals, and I iterate quickly with Tailwind + Vite to keep
            momentum high.
          </p>
          <div class="mt-6 grid gap-4 sm:grid-cols-2">
            <div
              v-for="badge in badges"
              :key="badge.title"
              class="rounded-2xl border border-white/5 bg-white/5 p-4"
            >
              <p class="text-xs uppercase tracking-[0.2em] text-blue-100/60">
                {{ badge.title }}
              </p>
              <p class="mt-2 text-sm text-slate-200/80">{{ badge.text }}</p>
            </div>
          </div>
        </div>
        <div class="grid gap-6 sm:grid-cols-2">
          <div
            v-for="card in infoCards"
            :key="card.title"
            class="h-full rounded-3xl border border-white/10 bg-slate-900/60 p-5 shadow-lg shadow-slate-950/30"
          >
            <h4 class="text-lg font-semibold text-white">{{ card.title }}</h4>
            <p class="mt-2 text-sm text-slate-200/75">{{ card.detail }}</p>
          </div>
        </div>
      </section>

      <!-- Skills -->
      <section id="skills" class="mt-14">
        <div class="mb-6 flex items-center justify-between">
          <div>
            <p class="text-sm uppercase tracking-[0.25em] text-blue-100/60">
              Skills
            </p>
            <h3 class="mt-2 text-3xl font-semibold text-white">
              Tools I ship with
            </h3>
          </div>
          <span
            class="rounded-full bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200/70"
            >1 Year</span
          >
        </div>
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="skill in skills"
            :key="skill.title"
            class="rounded-2xl border border-white/5 bg-white/5 p-5 shadow-sm shadow-slate-950/30"
          >
            <p class="text-xs uppercase tracking-[0.2em] text-blue-100/60">
              {{ skill.title }}
            </p>
            <p class="mt-3 text-sm text-slate-200/80">{{ skill.items }}</p>
          </div>
        </div>
      </section>

      <!-- Projects -->
      <section id="projects" class="mt-14">
        <div
          class="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p class="text-sm uppercase tracking-[0.25em] text-blue-100/60">
              Projects
            </p>
            <h3 class="text-3xl font-semibold text-white">Selected work</h3>
          </div>
          <p class="text-sm text-slate-200/70">
            More details available on request.
          </p>
        </div>
        <div class="grid gap-6 lg:grid-cols-3">
          <div
            v-for="project in projects"
            :key="project.title"
            class="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-xl shadow-indigo-950/30 transition hover:-translate-y-1 hover:border-white/20"
          >
            <div
              class="absolute inset-0 bg-linear-to-br from-white/5 via-transparent to-indigo-600/10 opacity-0 transition group-hover:opacity-100"
            />
            <div class="relative flex h-full flex-col gap-4">
              <div
                class="h-36 rounded-2xl bg-linear-to-br from-blue-600/50 via-indigo-600/40 to-slate-800/60 shadow-inner shadow-black/40"
              />
              <h4 class="text-xl font-semibold text-white">
                {{ project.title }}
              </h4>
              <p class="text-sm text-slate-200/80">{{ project.description }}</p>
              <div
                class="mt-auto inline-flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-100/80"
              >
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="rounded-full bg-white/5 px-3 py-1"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Experience -->
      <section id="experience" class="mt-14">
        <div class="mb-6">
          <p class="text-sm uppercase tracking-[0.25em] text-blue-100/60">
            Experience
          </p>
          <h3 class="mt-2 text-3xl font-semibold text-white">
            Early-career milestones
          </h3>
        </div>
        <div class="space-y-4">
          <div
            v-for="experience in experiences"
            :key="experience.role"
            class="flex flex-col gap-2 rounded-2xl border border-white/10 bg-slate-900/60 p-5 shadow-lg shadow-slate-950/30 sm:flex-row sm:items-start sm:justify-between"
          >
            <div>
              <p class="text-sm uppercase tracking-[0.2em] text-blue-100/60">
                {{ experience.period }}
              </p>
              <h4 class="text-xl font-semibold text-white">
                {{ experience.role }}
              </h4>
              <p class="text-sm text-slate-200/75">{{ experience.company }}</p>
            </div>
            <p class="max-w-xl text-sm text-slate-200/80">
              {{ experience.highlights }}
            </p>
          </div>
        </div>
      </section>

      <!-- Contact -->
      <section
        id="contact"
        class="mt-16 rounded-3xl border border-white/10 bg-linear-to-r from-blue-600/50 via-indigo-600/40 to-slate-900/70 p-10 shadow-xl shadow-indigo-900/40"
      >
        <div
          class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p class="text-sm uppercase tracking-[0.25em] text-blue-100/80">
              Contact
            </p>
            <h3 class="mt-2 text-3xl font-semibold text-white">
              Let’s build something thoughtful.
            </h3>
            <p class="mt-2 text-slate-100/80">
              Available for junior frontend roles, internships, or
              collaboration.
            </p>
          </div>
          <div class="flex flex-col gap-3 text-sm text-white">
            <a
              class="flex items-center gap-2 rounded-full bg-white/10 px-4 py-3 font-semibold transition hover:-translate-y-0.5 hover:bg-white/20"
              href="mailto:swampyaepaing@example.com"
            >
              <svg
                class="h-4 w-4"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path d="M4 6h16v12H4z" />
                <path d="m4 6 8 7 8-7" />
              </svg>
              swampyaepaing@example.com
            </a>
            <a
              class="flex items-center gap-2 rounded-full bg-white/10 px-4 py-3 font-semibold transition hover:-translate-y-0.5 hover:bg-white/20"
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.23 8.08h4.56V24H.23zM8.59 8.08h4.37v2.16h.06c.61-1.16 2.1-2.38 4.32-2.38 4.62 0 5.47 3.04 5.47 6.99V24h-4.56v-8.22c0-1.96-.03-4.48-2.73-4.48-2.73 0-3.15 2.13-3.15 4.33V24H8.59z"
                />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const stats = ref([
  { label: "Years Experience", value: "1+" },
  { label: "Projects Delivered", value: "6" },
  { label: "Tech Stack", value: "Vue • Tailwind • Vite" },
  { label: "Based In", value: "Yangon, MM" },
]);

const highlightItems = ref([
  { title: "Animations", value: "Smooth page + scroll cues" },
  { title: "Accessibility", value: "Semantic HTML, contrast, focus" },
  { title: "Performance", value: "Lighthouse minded builds" },
]);

const badges = ref([
  { title: "Frontend craft", text: "Vue 3, Tailwind, modern state mgmt" },
  {
    title: "Team habits",
    text: "Lightweight docs, PR hygiene, design handoff",
  },
  { title: "Quality", text: "Lighthouse checks, keyboard flows, error states" },
  {
    title: "Learning",
    text: "Motion design, testing with Vitest & Playwright",
  },
]);

const infoCards = ref([
  {
    title: "What I’m practicing",
    detail: "Micro animations, a11y-first patterns, responsive data visuals.",
  },
  {
    title: "How I work",
    detail:
      "Small, frequent commits, open feedback loops, pairing on tricky UI.",
  },
  {
    title: "Toolbox",
    detail: "VS Code, Figma, Vite, Tailwind, GitHub, Netlify/Vercel.",
  },
  {
    title: "Hobbies",
    detail:
      "Documenting UI patterns, reading product design blogs, coffee walks.",
  },
]);

const skills = ref([
  {
    title: "Frontend",
    items: "Vue 3, Composition API, Vite, Vue Router, Pinia",
  },
  {
    title: "Styling",
    items: "Tailwind CSS, component systems, dark mode, motion",
  },
  {
    title: "Quality",
    items: "Responsive layout, a11y, structured PRs, linting",
  },
  {
    title: "Integration",
    items: "REST APIs, basic auth flows, form validation",
  },
  {
    title: "Performance",
    items: "Bundle awareness, lazy loading, image optimization",
  },
  {
    title: "Collaboration",
    items: "Figma handoff, Jira/Notion, async updates",
  },
]);

const projects = ref([
  {
    title: "Insight Dashboard",
    description:
      "Responsive analytics dashboard with Vue + Tailwind cards, filters, and chart-ready layouts.",
    tags: ["Vue", "Tailwind", "Charts-ready", "Dark mode"],
  },
  {
    title: "Team Kanban",
    description:
      "Drag-and-drop kanban concepts with smooth micro-interactions and keyboard-friendly controls.",
    tags: ["Vue", "DnD UX", "Accessibility", "State mgmt"],
  },
  {
    title: "Landing Refresh",
    description:
      "Conversion-focused landing page with gradients, scroll cues, and mobile-first typography.",
    tags: ["Vite", "Tailwind", "Animation", "SEO basics"],
  },
]);

const experiences = ref([
  {
    role: "Junior Frontend Developer",
    company: "Freelance / Personal",
    period: "2024 — Present",
    highlights:
      "Built Vue SPA prototypes, iterated with Tailwind, collaborated with designers on component libraries.",
  },
  {
    role: "Intern Frontend Developer",
    company: "Local Studio",
    period: "2023 — 2024",
    highlights:
      "Implemented UI tickets, improved accessibility on forms, and documented reusable patterns.",
  },
]);
</script>
