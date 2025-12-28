<template>
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
          I craft clean UIs with Vue, Tailwind, and modern tooling. With 1 year
          of hands-on experience, I focus on shipping thoughtful interfaces that
          feel effortless to use.
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
            <h3 class="text-xl font-semibold text-white">Micro-interactions</h3>
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
              <p class="text-xs uppercase tracking-[0.2em] text-blue-100/60">
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
</script>
