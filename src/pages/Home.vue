<template>
  <!-- Hero -->
  <section
    class="grid gap-10 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm md:grid-cols-[1.3fr_1fr] md:p-12 dark:border-slate-800 dark:bg-slate-900/60 dark:shadow-none"
    data-aos="fade-up"
  >
    <div class="flex flex-col gap-8">
      <div
        class="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm text-emerald-700 ring-1 ring-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-300 dark:ring-emerald-500/20"
      >
        <span class="h-2 w-2 rounded-full bg-emerald-500" />
        Open to Full Stack Roles
      </div>
      <div>
        <p class="text-sm uppercase tracking-[0.24em] text-gray-400 dark:text-slate-500">
          Junior Full Stack Developer
        </p>
        <h2
          class="mt-3 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl dark:text-white"
        >
          Building robust, scalable, and intuitive full stack applications.
        </h2>
        <p class="mt-4 max-w-2xl text-lg text-gray-600 dark:text-slate-300">
          I build full stack web apps with Vue and Laravel, focusing on creating
          seamless, secure, and reliable user experiences. My passion lies in
          crafting solutions that are both performant and easy to use, from the
          database to the UI.
        </p>
      </div>
      <div class="flex flex-wrap items-center gap-4">
        <router-link
          :to="{ name: 'experienceAndSkills' }"
          class="inline-flex items-center gap-2 rounded-full bg-primary-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-primary-700"
        >
          View Projects
          <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
            <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
          </svg>
        </router-link>
      </div>
    </div>

    <div class="relative">
      <div
        class="rounded-2xl border border-gray-100 bg-gray-50 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-800/60"
      >
        <div class="flex items-center justify-between gap-3">
          <div>
            <p class="text-sm text-gray-500 dark:text-slate-400">Currently working with</p>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              Vue.js &amp; Laravel
            </h3>
          </div>
          <span class="rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold text-primary-700 dark:bg-primary-500/20 dark:text-primary-300">
            Stack
          </span>
        </div>
        <div class="mt-6 flex flex-col gap-4">
          <div
            v-for="item in highlightItems"
            :key="item.title"
            class="flex items-center justify-between rounded-xl border border-gray-100 bg-white px-4 py-3 dark:border-slate-700 dark:bg-slate-800/80"
          >
            <div>
              <p class="text-xs uppercase tracking-[0.2em] text-gray-400 dark:text-slate-500">
                {{ item.title }}
              </p>
              <p class="text-sm font-semibold text-gray-900 dark:text-white">
                {{ item.value }}
              </p>
            </div>
            <span class="h-3 w-3 rounded-full bg-emerald-500 shadow-[0_0_0_4px] shadow-emerald-500/15" />
          </div>
        </div>
        <div
          class="mt-6 flex items-center gap-3 rounded-xl bg-white px-4 py-3 text-sm text-gray-600 dark:bg-slate-800/80 dark:text-slate-300"
        >
          <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-600 text-white">
            <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </span>
          <div>
            <p class="font-semibold text-gray-900 dark:text-white">Latest full stack update</p>
            <p class="text-gray-500 dark:text-slate-400">
              Built with the Laravel + Vue Starter Kit: robust scaffolding, hot
              reloads, API-ready, and ideal for modern full stack projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <Contact />
</template>

<script setup>
import { ref } from "vue";
import Contact from "./Contact.vue";

const highlightItems = ref([
  { title: "Full Stack", value: "Built with Vue 3 & Laravel" },
  { title: "Developer Experience", value: "Hot reloads, API ready" },
  { title: "Modern Stack", value: "Open source and production ready" },
]);
</script>
