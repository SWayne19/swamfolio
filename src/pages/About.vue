<template>
  <!-- stat cards -->
  <div
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
    data-aos="fade-up"
  >
    <div
      v-for="(stat, idx) in stats"
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

  <!-- About -->
  <section
    id="about"
    class="mt-14 flex flex-col gap-10"
    data-aos="fade-in"
  >
    <!-- Main About -->
    <div
      class="flex flex-col gap-8 rounded-3xl border border-white/5 bg-slate-900/60 p-8 shadow-xl shadow-blue-950/30"
    >
      <div>
        <p class="text-sm uppercase tracking-[0.25em] text-blue-100/60 mb-1">
          About
        </p>
        <h3
          class="text-3xl font-semibold text-white leading-snug"
        >
          Blending Full Stack Vue & Laravel with AI-Powered Development
        </h3>
        <!-- Paragraphs -->
        <div class="flex flex-col gap-8 mt-5">
          <p
            class="text-slate-200/80"
          >
            I craft robust, end-to-end applications by leveraging the power of
            <span class="text-blue-300 font-semibold">Vue</span> for dynamic
            frontends and
            <span class="text-blue-300 font-semibold">Laravel</span> for
            API-driven backends. My workflow is designed for clarity, developer
            happiness, and rapid iteration—using Vite and Tailwind for seamless
            UI work.
          </p>
          <p
            class="text-slate-200/80 self-end text-right"
          >
            Recently, I've been actively integrating
            <span class="text-blue-300 font-semibold">AI-powered tools</span>
            and workflows into my development process. From code generation and
            AI-assisted debugging to using LLMs for smarter backend and frontend
            features, I aim to build apps that are not just interactive but also
            intelligent. AI augmentation enables me to ship faster, automate
            mundane tasks, and experiment with new ways to solve old problems.
          </p>
          <p
            class="text-slate-200/80"
          >
            Whether it’s building full-stack Vue + Laravel apps or enhancing
            user experience with AI, my focus is always on creating solutions
            that feel intuitive and intentional.
          </p>
        </div>
      </div>
      <div
        class="grid gap-4 sm:grid-cols-2 md:grid-cols-2"
        data-aos="fade-up"
      >
        <div
          v-for="(badge, i) in badges"
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

    <!-- Info Cards -->
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
      <!-- AI & Full Stack -->
      <div
        class="flex justify-center mt-4"
        data-aos="fade-up"
      >
        <div
          class="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 flex flex-col h-full rounded-3xl border border-emerald-500/20 bg-slate-900/80 p-6 shadow-xl shadow-emerald-900/20 transition-transform"
        >
          <h4
            class="text-lg font-semibold text-emerald-300 flex items-center gap-2"
          >
            <svg
              class="h-5 w-5 text-emerald-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m4 1h6m-6 4v1a2 2 0 01-2 2H7a2 2 0 01-2-2v-9a2 2 0 012-2h2l1-2h4a2 2 0 012 2v2h-2"
              />
            </svg>
            AI + Full Stack Advantage
          </h4>
          <p class="mt-2 text-sm text-emerald-100/90">
            Combining full stack expertise with AI tools results in apps that
            are not only functional and robust, but also smarter and more
            responsive to user needs. I leverage LLMs and automation for code
            completion, content features, and workflow boosts—making modern
            development even more creative and efficient.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const badges = ref([
  { title: "Frontend & Backend", text: "Vue 3, Laravel, PostgreSQL & MySQL" },
  {
    title: "Soft Skills",
    text: "Clear communication, adaptability, empathy, and strong collaboration",
  },
  {
    title: "Team habits",
    text: "Lightweight docs, PR hygiene, design handoff",
  },
  { title: "Quality", text: "Lighthouse checks, keyboard flows, error states" },
]);

const infoCards = ref([
  {
    title: "What I’m practicing",
    detail:
      "Integrating backend APIs, auth, and scalable data (PostgreSQL, MySQL) with polished UIs and micro animations.",
  },
  {
    title: "How I work",
    detail:
      "Small, frequent commits, open feedback loops, pairing on tricky UI and API design, always learning.",
  },
  {
    title: "Toolbox",
    detail:
      "VS Code, Figma, Vite, Tailwind, GitHub, Netlify/Vercel, Postman, Insomnia.",
  },
  {
    title: "Hobbies",
    detail:
      "Documenting UI & backend patterns, reading product design blogs, coffee walks.",
  },
]);

const stats = ref([
  { label: "Years Experience", value: "1+" },
  { label: "Projects Delivered", value: "6" },
  { label: "Tech Stack", value: "Vue + Laravel" },
  { label: "Based In", value: "Yangon, MM" },
]);
</script>
<style></style>
