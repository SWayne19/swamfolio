<template>
  <!-- stat cards -->
  <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4" data-aos="fade-up">
    <div
      v-for="stat in stats"
      :key="stat.label"
      class="flex items-center gap-4 border-l-2 border-primary-400/40 py-2 pl-6 transition-all hover:border-primary-500 dark:border-primary-500/30 dark:hover:border-primary-400"
    >
      <div class="flex flex-col">
        <span class="text-3xl font-bold tracking-tighter text-gray-900 dark:text-white">
          {{ stat.value }}
        </span>
        <span class="text-xs font-medium uppercase tracking-wider text-gray-400 dark:text-slate-500">
          {{ stat.label }}
        </span>
      </div>
    </div>
  </div>

  <!-- About -->
  <section id="about" class="mt-14 flex flex-col gap-10" data-aos="fade-up">
    <div
      class="flex flex-col gap-8 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900/60 dark:shadow-none"
    >
      <div>
        <p class="mb-1 text-sm uppercase tracking-[0.25em] text-gray-400 dark:text-slate-500">
          About
        </p>
        <h3 class="text-3xl font-semibold leading-snug text-gray-900 dark:text-white">
          Blending Full Stack Vue & Laravel with AI-Powered Development
        </h3>
        <div class="mt-5 flex flex-col gap-8">
          <p class="text-gray-600 dark:text-slate-300">
            I craft robust, end-to-end applications by leveraging the power of
            <span class="font-semibold text-primary-600 dark:text-primary-400">Vue</span> for dynamic
            frontends and
            <span class="font-semibold text-primary-600 dark:text-primary-400">Laravel</span> for
            API-driven backends. My workflow is designed for clarity, developer
            happiness, and rapid iteration—using Vite and Tailwind for seamless UI work.
          </p>
          <p class="self-end text-right text-gray-600 dark:text-slate-300">
            Recently, I've been actively integrating
            <span class="font-semibold text-primary-600 dark:text-primary-400">AI-powered tools</span>
            and workflows into my development process. From code generation and
            AI-assisted debugging to using LLMs for smarter backend and frontend
            features, I aim to build apps that are not just interactive but also
            intelligent.
          </p>
          <p class="text-gray-600 dark:text-slate-300">
            Whether it's building full-stack Vue + Laravel apps or enhancing
            user experience with AI, my focus is always on creating solutions
            that feel intuitive and intentional.
          </p>
        </div>
      </div>
      <div class="grid gap-4 sm:grid-cols-2" data-aos="fade-up">
        <div
          v-for="badge in badges"
          :key="badge.title"
          class="flex flex-col gap-1 rounded-xl border border-gray-100 bg-gray-50 p-4 dark:border-slate-800 dark:bg-slate-800/60"
        >
          <p class="text-xs uppercase tracking-[0.2em] text-gray-400 dark:text-slate-500">
            {{ badge.title }}
          </p>
          <p class="mt-2 text-sm text-gray-600 dark:text-slate-300">{{ badge.text }}</p>
        </div>
      </div>
    </div>

    <!-- Info Cards -->
    <div class="flex flex-col gap-3">
      <div
        v-for="(card, i) in infoCards"
        :key="card.title"
        class="flex"
        :class="i % 2 === 0 ? 'justify-start' : 'justify-end'"
      >
        <div
          class="flex h-full w-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:w-3/4 md:w-2/3 lg:w-1/2 dark:border-slate-800 dark:bg-slate-900/70 dark:shadow-none"
        >
          <h4 class="text-lg font-semibold text-gray-900 dark:text-white">{{ card.title }}</h4>
          <p class="mt-2 text-sm text-gray-500 dark:text-slate-400">{{ card.detail }}</p>
        </div>
      </div>

      <!-- AI & Full Stack -->
      <div class="mt-4 flex justify-center" data-aos="fade-up">
        <div
          class="flex h-full w-full flex-col rounded-2xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm sm:w-3/4 md:w-2/3 lg:w-1/2 dark:border-emerald-500/20 dark:bg-slate-900/80 dark:shadow-none"
        >
          <h4 class="flex items-center gap-2 text-lg font-semibold text-emerald-700 dark:text-emerald-300">
            <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            AI + Full Stack Advantage
          </h4>
          <p class="mt-2 text-sm text-emerald-800 dark:text-emerald-100/90">
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
  { label: "Based In", value: "Yangon, MM" },
]);
</script>
