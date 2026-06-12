<template>
  <!-- Hero Section -->
  <section class="mb-10 sm:mb-16" data-aos="fade-up">
    <div class="flex flex-col-reverse items-center gap-6 py-6 sm:gap-8 sm:py-16 md:flex-row md:items-start md:justify-between md:gap-12">
      <!-- Text content -->
      <div class="flex flex-1 flex-col gap-6 text-center md:text-left">
        <div
          class="inline-flex w-fit items-center gap-2 self-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700 md:self-start dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400"
        >
          <span class="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Open to Full Stack Roles
        </div>

        <h1 class="text-3xl font-bold leading-[1.15] tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white">
          Building robust, scalable
          <span class="text-primary-600 dark:text-primary-400">full stack</span>
          applications.
        </h1>

        <p class="text-pretty text-base leading-relaxed text-gray-600 sm:text-lg dark:text-slate-400">
          I build web apps with Vue and Laravel, focusing on creating seamless, secure,
          and reliable user experiences from the database to the UI.
        </p>

        <div class="flex flex-wrap items-center justify-center gap-3 pt-2 md:justify-start">
          <router-link
            :to="{ name: 'experienceAndSkills' }"
            class="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-primary-700"
          >
            View Projects
            <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </router-link>
          <router-link
            :to="{ name: 'about' }"
            class="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
          >
            About Me
          </router-link>
        </div>
      </div>

      <!-- Profile photo -->
      <div class="shrink-0" data-aos="fade-left">
        <div class="profile-ring relative h-40 w-40 rounded-full p-1 sm:h-48 sm:w-48 md:h-56 md:w-56 lg:h-64 lg:w-64">
          <img
            src="/images/profile.jpg"
            alt="Swam Pyae Paing"
            class="h-full w-full rounded-full border-4 border-white object-cover shadow-lg dark:border-slate-900"
            width="256"
            height="256"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
    </div>
  </section>

  <!-- Stack Overview -->
  <section class="mb-10 grid gap-3 grid-cols-1 sm:mb-16 sm:gap-4 sm:grid-cols-3" data-aos="fade-up">
    <div
      v-for="item in highlightItems"
      :key="item.title"
      class="flex items-start gap-4 rounded-xl border border-gray-200 bg-white shadow p-4 sm:p-5 dark:border-slate-800 dark:bg-slate-900/60"
    >
      <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600 dark:bg-primary-500/10 dark:text-primary-400">
        <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" :d="item.icon" />
        </svg>
      </div>
      <div>
        <p class="text-sm font-semibold text-gray-900 dark:text-white">{{ item.title }}</p>
        <p class="mt-1 text-sm text-gray-600 dark:text-slate-400">{{ item.value }}</p>
      </div>
    </div>
  </section>

  <!-- Currently Working With -->
  <section
    class="mb-10 rounded-xl border border-gray-200 bg-white shadow p-4 sm:mb-16 sm:p-6 md:p-8 dark:border-slate-800 dark:bg-slate-900/60"
    data-aos="fade-up"
  >
    <div class="flex flex-wrap items-center justify-between gap-2">
      <div>
        <p class="text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-slate-500">Currently working with</p>
        <h3 class="mt-1 text-base font-semibold text-gray-900 sm:text-lg dark:text-white">Vue.js &amp; Laravel</h3>
      </div>
      <span class="rounded-md border border-primary-200 bg-primary-50 px-2.5 py-1 text-xs font-medium text-primary-600 dark:border-primary-500/20 dark:bg-primary-500/10 dark:text-primary-400">
        Stack
      </span>
    </div>
    <div class="mt-4 flex items-start gap-3 rounded-lg border border-gray-200 bg-gray-100 p-3 sm:mt-5 sm:p-4 dark:border-slate-700 dark:bg-slate-800/60">
      <span class="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-600 text-white">
        <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </span>
      <div>
        <p class="text-sm font-medium text-gray-900 dark:text-white">Latest full stack update</p>
        <p class="mt-0.5 text-pretty text-sm text-gray-600 dark:text-slate-400">
          Built with the Laravel + Vue Starter Kit: robust scaffolding, hot reloads,
          API-ready, and ideal for modern full stack projects.
        </p>
      </div>
    </div>
  </section>

  <Contact />
</template>

<script setup>
import Contact from "./Contact.vue";

const highlightItems = [
  { title: "Full Stack", value: "Built with Vue 3 & Laravel", icon: "M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L12 12.75 6.429 9.75m11.142 0l4.179 2.25L12 17.25 2.25 12l4.179-2.25m11.142 0l4.179 2.25L12 22.5l-9.75-5.25 4.179-2.25" },
  { title: "Developer Experience", value: "Hot reloads, API ready", icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
  { title: "Modern Stack", value: "Open source, production ready", icon: "M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L6.75 2.904M12 12.75a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5z" },
];
</script>
