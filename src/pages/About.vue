<template lang="">
  <!-- About -->
  <section id="about" class="mt-14 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
    <div
      class="rounded-3xl border border-white/5 bg-slate-900/60 p-8 shadow-xl shadow-blue-950/30"
    >
      <p class="text-sm uppercase tracking-[0.25em] text-blue-100/60">About</p>
      <h3 class="mt-3 text-3xl font-semibold text-white">
        I enjoy designing experiences that feel calm and intentional.
      </h3>
      <p class="mt-4 text-slate-200/80">
        I build Vue-driven frontends with a focus on clarity, readable code, and
        fast feedback loops. I care about aligning UI decisions with user goals,
        and I iterate quickly with Tailwind + Vite to keep momentum high.
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
</script>
<style lang=""></style>
