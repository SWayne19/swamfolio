<template>
  <!-- Hero -->
  <section
    class="grid gap-10 rounded-3xl border border-white/5 bg-white/5 p-8 shadow-xl shadow-blue-950/20 backdrop-blur md:grid-cols-[1.3fr_1fr] md:p-12"
    data-aos="fade-up"
  >
    <div class="flex flex-col gap-8">
      <div
        class="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-blue-100/80 ring-1 ring-white/15"
      >
        <span class="h-2 w-2 rounded-full bg-emerald-400" />
        Open to Full Stack Roles
      </div>
      <div>
        <p class="text-sm uppercase tracking-[0.24em] text-blue-100/60">
          Junior Full Stack Developer
        </p>
        <h2
          class="mt-3 text-4xl font-bold leading-tight text-white sm:text-5xl"
        >
          Building robust, scalable, and intuitive full stack applications.
        </h2>
        <p class="mt-4 max-w-2xl text-lg text-slate-200/80">
          I build full stack web apps with Vue and Laravel, focusing on creating
          seamless, secure, and reliable user experiences. My passion lies in
          crafting solutions that are both performant and easy to use, from the
          database to the UI.
        </p>
      </div>
      <div
        class="flex flex-wrap items-center gap-4"
      >
        <router-link
          :to="{ name: 'experienceAndSkills' }"
          class="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-blue-500 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-900/40 transition hover:-translate-y-0.5"
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
        </router-link>
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
            <p class="text-sm text-slate-200/70">
              Currently working with
            </p>
            <h3
              class="text-xl font-semibold text-white"
            >
              Vue.js &amp; Laravel
            </h3>
          </div>
          <span
            class="rounded-full bg-blue-500/20 px-3 py-1 text-xs font-semibold text-blue-200"
          >Stack</span>
        </div>
        <div class="mt-6 flex flex-col gap-4">
          <div
            v-for="(item, idx) in highlightItems"
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
            class="h-10 w-10 rounded-xl bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center"
          >
            <!-- Modernized "full stack" logo background (icon removed) -->
          </span>
          <div>
            <p class="font-semibold text-white">Latest full stack update</p>
            <p class="text-slate-200/70">
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
