<template lang="">
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
</template>
<script setup>
import { ref } from 'vue';
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
</script>
