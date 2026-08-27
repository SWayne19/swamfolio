<template>
  <!-- Stats -->
  <div class="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5" data-aos="fade-up">
    <div
      v-for="stat in stats"
      :key="stat.label"
      class="glass-card p-5 sm:p-6"
    >
      <p class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
        {{ stat.value }}
      </p>
      <p class="mt-2 text-[11px] font-semibold uppercase tracking-widest text-gray-600 dark:text-slate-500">
        {{ stat.label }}
      </p>
    </div>
  </div>

  <!-- About -->
  <section id="about" class="mt-10 flex flex-col gap-5 sm:mt-14 sm:gap-6" data-aos="fade-up">
    <div class="glass-card p-5 sm:p-7 md:p-8">
      <p class="text-[11px] font-semibold uppercase tracking-widest text-gray-600 dark:text-slate-500">About</p>
      <h3 class="mt-3 text-xl font-extrabold tracking-tight text-gray-900 sm:text-2xl md:text-3xl dark:text-white">
        Blending Full Stack Vue & Laravel with AI-Powered Development
      </h3>
      <div class="mt-6 space-y-5 text-pretty text-sm leading-relaxed text-gray-500 sm:text-[15px] dark:text-slate-400">
        <p>
          I craft robust, end-to-end applications by leveraging the power of
          <span class="font-semibold text-primary-600 dark:text-primary-400">Vue</span> for dynamic
          frontends and
          <span class="font-semibold text-primary-600 dark:text-primary-400">Laravel</span> for
          API-driven backends. My workflow is designed for clarity, developer
          happiness, and rapid iteration -- using Vite and Tailwind for seamless UI work.
        </p>
        <p>
          Recently, I've been actively integrating
          <span class="font-semibold text-primary-600 dark:text-primary-400">AI-powered tools</span>
          and workflows into my development process. From code generation and
          AI-assisted debugging to using LLMs for smarter backend and frontend
          features, I aim to build apps that are not just interactive but also
          intelligent.
        </p>
        <p>
          Whether it's building full-stack Vue + Laravel apps or enhancing
          user experience with AI, my focus is always on creating solutions
          that feel intuitive and intentional.
        </p>
      </div>
    </div>

    <!-- Badges Grid -->
    <div class="grid gap-4 sm:grid-cols-2" data-aos="fade-up">
      <div
        v-for="badge in badges"
        :key="badge.title"
        class="glass-card p-5 sm:p-6"
      >
        <p class="text-[11px] font-semibold uppercase tracking-widest text-gray-600 dark:text-slate-500">
          {{ badge.title }}
        </p>
        <p class="mt-2.5 text-sm leading-relaxed text-gray-600 dark:text-slate-300">{{ badge.text }}</p>
      </div>
    </div>

    <!-- Info Cards -->
    <div class="grid gap-4 sm:grid-cols-2" data-aos="fade-up">
      <div
        v-for="card in infoCards"
        :key="card.title"
        class="glass-card p-5 sm:p-6"
      >
        <h4 class="text-sm font-bold text-gray-900 dark:text-white">{{ card.title }}</h4>
        <p class="mt-2.5 text-sm leading-relaxed text-gray-700 dark:text-slate-400">{{ card.detail }}</p>
      </div>
    </div>

    <!-- AI + Full Stack Card -->
    <div
      class="rounded-2xl border border-primary-200/60 bg-gradient-to-br from-primary-50 to-primary-50/50 p-5 sm:p-7 dark:border-primary-500/15 dark:from-primary-500/5 dark:to-primary-500/[0.02]"
      data-aos="fade-up"
    >
      <h4 class="flex items-center gap-2.5 text-sm font-bold text-primary-700 dark:text-primary-400">
        <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        AI + Full Stack Advantage
      </h4>
      <p class="mt-3 text-pretty text-sm leading-relaxed text-primary-700/80 dark:text-primary-200/70">
        Combining full stack expertise with AI tools results in apps that
        are not only functional and robust, but also smarter and more
        responsive to user needs. I leverage LLMs and automation for code
        completion, content features, and workflow boosts -- making modern
        development even more creative and efficient.
      </p>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const badges = ref([
  { title: "Frontend & Backend", text: "Vue 3, Laravel, PostgreSQL & MySQL" },
  { title: "Soft Skills", text: "Clear communication, adaptability, empathy, and strong collaboration" },
  { title: "Team habits", text: "Lightweight docs, PR hygiene, design handoff" },
  { title: "Quality", text: "Lighthouse checks, keyboard flows, error states" },
]);

const infoCards = ref([
  { title: "What I'm practicing", detail: "Integrating backend APIs, auth, and scalable data (PostgreSQL, MySQL) with polished UIs and micro animations." },
  { title: "How I work", detail: "Small, frequent commits, open feedback loops, pairing on tricky UI and API design, always learning." },
  { title: "Toolbox", detail: "VS Code, Figma, Vite, Tailwind, GitHub, Netlify/Vercel, Postman, Insomnia." },
  { title: "Hobbies", detail: "Documenting UI & backend patterns, reading product design blogs, coffee walks." },
]);

const stats = ref([
  { label: "Years Experience", value: "1+" },
  { label: "Projects Delivered", value: "6" },
  { label: "Tech Stack", value: "Vue + Laravel" },
]);
</script>
