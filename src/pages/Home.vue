<template>
  <!-- Hero Section -->
  <section class="mb-12 sm:mb-20">
    <div class="flex flex-col-reverse items-center gap-8 py-4 sm:gap-10 sm:py-16 md:flex-row md:items-center md:justify-between md:gap-16">
      <!-- Text content -->
      <div class="flex flex-1 flex-col gap-5 text-center md:text-left">
        <p class="text-sm font-medium text-gray-600 sm:text-base dark:text-slate-500">Hi, I'm</p>
        <h1 class="text-4xl font-extrabold leading-[1.1] tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl dark:text-white">
          Swam Pyae Paing
        </h1>
        <p class="text-lg font-medium text-gray-600 sm:text-xl dark:text-slate-300">
          Building robust, scalable
          <span class="gradient-text font-semibold">full stack</span>
          applications.
        </p>

        <div class="flex flex-wrap items-center justify-center gap-3 pt-3 md:justify-start">
          <router-link
            :to="{ name: 'projects' }"
            class="inline-flex items-center gap-2 rounded-xl bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-600/20 transition-all hover:-translate-y-0.5 hover:bg-primary-700 hover:shadow-xl hover:shadow-primary-700/25 active:translate-y-0"
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
      <div class="shrink-0">
        <div class="profile-ring relative h-40 w-40 rounded-full p-1 shadow-xl shadow-primary-600/10 sm:h-48 sm:w-48 md:h-56 md:w-56 lg:h-64 lg:w-64">
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

  <Contact />
</template>

<script setup>
import Contact from "./Contact.vue";
</script>
