<template>
  <section id="projects" data-aos="fade-up">
    <div class="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p class="text-[11px] font-semibold uppercase tracking-widest text-gray-600 dark:text-slate-500">
          Projects
        </p>
        <h3 class="mt-1.5 text-xl font-extrabold tracking-tight text-gray-900 sm:text-2xl md:text-3xl dark:text-white">
          Selected work
        </h3>
      </div>
      <p class="text-sm text-gray-500 dark:text-slate-400">
        {{ projects.length }} projects, full stack to static.
      </p>
    </div>

    <!-- Bento grid: one featured, one tall, three small -->
    <div class="grid auto-rows-fr gap-5 md:grid-cols-3 md:gap-6">
      <router-link
        v-for="(project, i) in projects"
        :key="project.id"
        :to="{ name: 'project', params: { id: project.id } }"
        :class="[
          layouts[i % layouts.length].grid,
          'group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/60 bg-white/70 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-300/60 hover:shadow-xl dark:border-slate-800/60 dark:bg-slate-900/50 dark:hover:border-primary-500/30',
        ]"
      >
        <div
          class="relative overflow-hidden bg-gray-50 dark:bg-slate-800/60"
          :class="layouts[i % layouts.length].imgWrap"
        >
          <template v-if="project.image">
            <img
              :src="project.image"
              :alt="`${project.title} cover`"
              :class="layouts[i % layouts.length].imgHeight"
              class="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </template>
          <template v-else>
            <div class="flex h-full min-h-44 items-center justify-center text-gray-300 dark:text-slate-600">
              <svg class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <rect x="5" y="5" width="14" height="14" rx="4" />
                <path d="M8 12h8M12 8v8" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </template>

          <span
            v-if="i === 0"
            class="absolute top-3 left-3 rounded-md bg-primary-600/90 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm"
          >
            Featured
          </span>

          <div class="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
        </div>

        <div class="flex flex-1 flex-col" :class="layouts[i % layouts.length].pad">
          <div class="flex items-center justify-between gap-2">
            <h4
              :class="layouts[i % layouts.length].title"
              class="font-bold text-gray-900 transition-colors group-hover:text-primary-600 dark:text-white dark:group-hover:text-primary-400"
            >
              {{ project.title }}
            </h4>
            <svg class="h-4 w-4 shrink-0 -translate-x-1 text-primary-600 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 dark:text-primary-400"
              fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
          <p
            :class="layouts[i % layouts.length].desc"
            class="mt-2 text-pretty text-sm leading-relaxed text-gray-700 dark:text-slate-400"
          >
            {{ project.description }}
          </p>

          <div class="mt-4 flex flex-wrap items-center gap-1.5 pt-1" :class="layouts[i % layouts.length].tagAlign">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="rounded-md bg-gray-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-gray-700 dark:bg-slate-800 dark:text-slate-400"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </router-link>
    </div>
  </section>
</template>

<script setup>
import { inject } from "vue";

const projects = inject("projects");

// One featured (largest), one tall (longest), rest small with varied heights.
const layouts = [
  {
    grid: "md:col-span-2 md:row-span-2",
    imgWrap: "min-h-44 md:min-h-0 md:flex-1",
    imgHeight: "h-44 sm:h-56 md:h-full",
    title: "text-lg sm:text-xl",
    desc: "line-clamp-3",
    pad: "p-5 sm:p-6",
    tagAlign: "",
  },
  {
    grid: "md:col-span-1",
    imgWrap: "flex-none",
    imgHeight: "h-40 sm:h-48",
    title: "text-base",
    desc: "line-clamp-3",
    pad: "p-4 sm:p-5",
    tagAlign: "mt-auto",
  },
  {
    grid: "md:col-span-1 md:row-span-2",
    imgWrap: "min-h-48 md:min-h-0 md:flex-1",
    imgHeight: "h-48 sm:h-64 md:h-full",
    title: "text-base",
    desc: "line-clamp-4",
    pad: "p-4 sm:p-5",
    tagAlign: "",
  },
  {
    grid: "md:col-span-1",
    imgWrap: "flex-none",
    imgHeight: "h-32 sm:h-40",
    title: "text-base",
    desc: "line-clamp-2",
    pad: "p-4 sm:p-5",
    tagAlign: "mt-auto",
  },
  {
    grid: "md:col-span-1",
    imgWrap: "flex-none",
    imgHeight: "h-44 sm:h-52",
    title: "text-base",
    desc: "line-clamp-2",
    pad: "p-4 sm:p-5",
    tagAlign: "mt-auto",
  },
];
</script>