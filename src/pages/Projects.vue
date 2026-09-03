<template>
  <section id="projects">
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

    <!-- Bento grid with full-image overlay cards -->
    <div class="grid auto-rows-fr gap-5 md:grid-cols-3 md:gap-6">
      <router-link
        v-for="(project, i) in projects"
        :key="project.id"
        :to="{ name: 'project', params: { id: project.id } }"
        :class="[
          layouts[i % layouts.length].grid,
          layouts[i % layouts.length].minH,
          'group relative block overflow-hidden rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl',
        ]"
      >
        <!-- Background image -->
        <img
          v-if="project.image"
          :src="project.image"
          :alt="`${project.title} cover`"
          class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <!-- No-image fallback -->
        <div v-else class="absolute inset-0 flex items-center justify-center bg-slate-800">
          <svg class="h-12 w-12 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <rect x="5" y="5" width="14" height="14" rx="4" />
            <path d="M8 12h8M12 8v8" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>

        <!-- Gradient overlay -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 group-hover:from-black/85 group-hover:via-black/45"></div>

        <!-- Featured badge -->
        <span
          v-if="i === 0"
          class="absolute top-3 left-3 z-10 rounded-md bg-primary-600/90 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm"
        >
          Featured
        </span>

        <!-- Arrow icon -->
        <svg class="absolute top-3 right-3 z-10 h-4 w-4 -translate-x-1 text-white/60 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
          fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M12 5l7 7-7 7" />
        </svg>

        <!-- Text content overlay -->
        <div class="absolute inset-x-0 bottom-0 z-10 p-5">
          <h4 :class="layouts[i % layouts.length].title" class="font-bold text-white">
            {{ project.title }}
          </h4>
          <p :class="layouts[i % layouts.length].desc" class="mt-1.5 text-sm leading-relaxed text-white/80">
            {{ project.description }}
          </p>

          <div class="mt-3 flex flex-wrap items-center gap-1.5">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="rounded-md bg-white/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white/90 backdrop-blur-sm"
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

const layouts = [
  {
    grid: "md:col-span-2 md:row-span-2",
    minH: "min-h-64 md:min-h-0",
    title: "text-lg sm:text-xl",
    desc: "line-clamp-3",
  },
  {
    grid: "md:col-span-1",
    minH: "min-h-56",
    title: "text-base",
    desc: "line-clamp-2",
  },
  {
    grid: "md:col-span-1 md:row-span-2",
    minH: "min-h-64 md:min-h-0",
    title: "text-base",
    desc: "line-clamp-3",
  },
  {
    grid: "md:col-span-1",
    minH: "min-h-52",
    title: "text-base",
    desc: "line-clamp-2",
  },
  {
    grid: "md:col-span-1",
    minH: "min-h-56",
    title: "text-base",
    desc: "line-clamp-2",
  },
];
</script>
