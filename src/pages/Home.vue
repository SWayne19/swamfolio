<template>
  <!-- Hero Section -->
  <section class="mb-12 sm:mb-20" data-aos="fade-up">
    <div class="flex flex-col-reverse items-center gap-8 py-4 sm:gap-10 sm:py-16 md:flex-row md:items-center md:justify-between md:gap-16">
      <!-- Text content -->
      <div class="flex flex-1 flex-col gap-5 text-center md:text-left">
        <p class="text-sm font-medium text-gray-400 sm:text-base dark:text-slate-500">Hi, I'm</p>
        <h1 class="text-4xl font-extrabold leading-[1.1] tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl dark:text-white">
          Swam Pyae Paing<span class="gradient-text">.</span>
        </h1>
        <p class="text-lg font-medium text-gray-600 sm:text-xl dark:text-slate-300">
          Building robust, scalable
          <span class="gradient-text font-semibold">full stack</span>
          applications.
        </p>

        <p class="max-w-lg text-pretty text-base leading-relaxed text-gray-500 sm:text-lg dark:text-slate-400">
          I build web apps with Vue and Laravel, focusing on creating seamless, secure,
          and reliable user experiences from the database to the UI.
        </p>

        <div class="flex flex-wrap items-center justify-center gap-3 pt-3 md:justify-start">
          <router-link
            :to="{ name: 'experienceAndSkills' }"
            class="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-500/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary-500/30 active:translate-y-0"
          >
            View Projects
            <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </router-link>
          <router-link
            :to="{ name: 'about' }"
            class="glass-card inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-gray-700 dark:text-slate-300"
          >
            About Me
          </router-link>
        </div>
      </div>

      <!-- Profile photo -->
      <div class="shrink-0" data-aos="fade-left">
        <div class="profile-ring relative h-40 w-40 rounded-full p-1 shadow-xl shadow-primary-500/15 sm:h-48 sm:w-48 md:h-56 md:w-56 lg:h-64 lg:w-64">
          <img
            src="/images/profile.jpg"
            alt="Swam Pyae Paing"
            class="h-full w-full rounded-full border-4 border-white object-cover dark:border-slate-900"
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
  <section class="mb-12 grid grid-cols-1 gap-4 sm:mb-20 sm:grid-cols-3 sm:gap-5" data-aos="fade-up">
    <div
      v-for="item in highlightItems"
      :key="item.title"
      class="glass-card flex items-start gap-4 p-5 sm:p-6"
    >
      <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 text-white shadow-md shadow-primary-500/20">
        <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" :d="item.icon" />
        </svg>
      </div>
      <div>
        <p class="text-sm font-semibold text-gray-900 dark:text-white">{{ item.title }}</p>
        <p class="mt-1.5 text-sm text-gray-500 dark:text-slate-400">{{ item.value }}</p>
      </div>
    </div>
  </section>

  <!-- Currently Working With -->
  <section
    class="glass-card mb-12 p-5 sm:mb-20 sm:p-7 md:p-8"
    data-aos="fade-up"
  >
    <div class="flex flex-wrap items-center justify-between gap-3">
      <div>
        <p class="text-[11px] font-semibold uppercase tracking-widest text-gray-400 dark:text-slate-500">Currently working with</p>
        <h3 class="mt-1.5 text-lg font-bold text-gray-900 sm:text-xl dark:text-white">Vue.js &amp; Laravel</h3>
      </div>
      <span class="rounded-lg bg-gradient-to-r from-primary-500/10 to-sky-500/10 px-3 py-1.5 text-xs font-semibold text-primary-600 dark:text-primary-400">
        Stack
      </span>
    </div>
    <div class="mt-5 flex items-start gap-4 rounded-xl border border-gray-100 bg-gray-50/80 p-4 sm:mt-6 sm:p-5 dark:border-slate-800/60 dark:bg-slate-800/40">
      <span class="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-primary-500 text-white shadow-md shadow-primary-500/20">
        <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </span>
      <div>
        <p class="text-sm font-semibold text-gray-900 dark:text-white">Latest full stack update</p>
        <p class="mt-1 text-pretty text-sm leading-relaxed text-gray-500 dark:text-slate-400">
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
