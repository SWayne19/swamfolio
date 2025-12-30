<template lang="">
  <!-- stat cards -->
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    <div
      v-for="stat in stats"
      :key="stat.label"
      class="flex items-center gap-4 border-l-2 border-blue-500/30 pl-6 py-2 transition-all hover:border-blue-400"
    >
      <div class="flex flex-col">
        <span class="text-3xl font-bold text-white tracking-tighter">{{
          stat.value
        }}</span>
        <span
          class="text-xs font-medium uppercase text-slate-400 tracking-wider"
          >{{ stat.label }}</span
        >
      </div>
    </div>
  </div>

  <!-- About: Full Width -->
  <section id="about" class="mt-14 flex flex-col gap-10">
    <!-- Main About Info & Badges (Full Width) -->
    <div
      class="flex flex-col gap-8 rounded-3xl border border-white/5 bg-slate-900/60 p-8 shadow-xl shadow-blue-950/30"
    >
      <div>
        <p class="text-sm uppercase tracking-[0.25em] text-blue-100/60 mb-1">
          About
        </p>
        <h3 class="text-3xl font-semibold text-white leading-snug">
          I enjoy designing experiences that feel calm and intentional.
        </h3>
        <p class="mt-5 text-slate-200/80 max-w-2xl">
          I build Vue-driven frontends that focus on clarity, readable code, and
          fast feedback loops. I care about aligning UI decisions with user
          goals, iterating quickly with Tailwind + Vite to keep momentum high.
        </p>
      </div>
      <div class="grid gap-4 sm:grid-cols-2 md:grid-cols-2">
        <div
          v-for="badge in badges"
          :key="badge.title"
          class="rounded-2xl border border-white/5 bg-white/5 p-4 flex flex-col gap-1"
        >
          <p class="text-xs uppercase tracking-[0.2em] text-blue-100/60">
            {{ badge.title }}
          </p>
          <p class="mt-2 text-sm text-slate-200/80">{{ badge.text }}</p>
        </div>
      </div>
    </div>

    <!-- Info Cards: Zigzag Modernized Card Row -->
    <div class="flex flex-col gap-2">
      <div
        v-for="(card, i) in infoCards"
        :key="card.title"
        class="flex"
        :class="i % 2 === 0 ? 'justify-start' : 'justify-end'"
      >
        <div
          class="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 flex flex-col h-full rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-lg shadow-slate-950/30 transition-transform"
          :class="[
            i % 2 === 0
              ? 'origin-left -translate-x-2 sm:translate-x-0 animate-slide-left'
              : 'origin-right translate-x-2 sm:translate-x-0 animate-slide-right',
          ]"
        >
          <h4 class="text-lg font-semibold text-white">{{ card.title }}</h4>
          <p class="mt-2 text-sm text-slate-200/75">{{ card.detail }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

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

const stats = ref([
  { label: "Years Experience", value: "1+" },
  { label: "Projects Delivered", value: "6" },
  { label: "Tech Stack", value: "Vue" },
  { label: "Based In", value: "Yangon, MM" },
]);
</script>
<style lang=""></style>
