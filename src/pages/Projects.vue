<template>
  <section id="projects">
    <div ref="heading" class="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p class="text-xs font-semibold uppercase tracking-widest text-gray-900 dark:text-slate-500">
          Projects
        </p>
        <h3 class="mt-1.5 text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl md:text-4xl dark:text-white">
          Selected work
        </h3>
      </div>
      <p class="text-base text-gray-800 dark:text-slate-400">
        {{ projects.length }} projects, full stack to static.
      </p>
    </div>

    <!-- Bento grid with full-image overlay cards -->
    <div ref="grid" class="grid auto-rows-fr gap-2 md:grid-cols-3 md:gap-3">
      <router-link
        v-for="(project, i) in projects"
        :key="project.id"
        :to="{ name: 'project', params: { id: project.id } }"
        :class="[
          layouts[i % layouts.length].grid,
          layouts[i % layouts.length].minH,
          'project-card group relative block overflow-hidden',
        ]"
      >
        <!-- Background image -->
        <img
          v-if="project.image"
          :src="project.image"
          :alt="`${project.title} cover`"
          class="absolute inset-0 h-full w-full object-cover"
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
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/15 dark:from-black/95 dark:via-black/70 dark:to-black/30"></div>

        <!-- Text content overlay -->
        <div class="project-text absolute inset-x-0 bottom-0 z-10 p-5">
          <h4 :class="layouts[i % layouts.length].title" class="font-bold text-white">
            {{ project.title }}
          </h4>
          <p :class="layouts[i % layouts.length].desc" class="mt-1.5 text-base leading-relaxed text-white/90">
            {{ project.description }}
          </p>

          <div class="mt-3 flex flex-wrap items-center gap-1.5">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="tag-pill bg-white/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white/90 transition-colors"
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
import { inject, ref, onMounted, nextTick } from "vue";
import { useScrollReveal } from "../composables/useScrollReveal";

const projects = inject("projects");
const { revealUp, staggerReveal } = useScrollReveal();

const heading = ref(null);
const grid = ref(null);

onMounted(() => {
  nextTick(() => {
    revealUp(heading.value);
    if (grid.value) {
      staggerReveal(grid.value.children, { trigger: grid.value });
    }
  });
});

const layouts = [
  {
    grid: "md:col-span-2 md:row-span-2",
    minH: "min-h-64 md:min-h-0",
    title: "text-xl sm:text-2xl",
    desc: "line-clamp-3",
  },
  {
    grid: "md:col-span-1",
    minH: "min-h-56",
    title: "text-lg",
    desc: "line-clamp-2",
  },
  {
    grid: "md:col-span-1 md:row-span-2",
    minH: "min-h-64 md:min-h-0",
    title: "text-lg",
    desc: "line-clamp-3",
  },
  {
    grid: "md:col-span-1",
    minH: "min-h-52",
    title: "text-lg",
    desc: "line-clamp-2",
  },
  {
    grid: "md:col-span-1",
    minH: "min-h-56",
    title: "text-lg",
    desc: "line-clamp-2",
  },
];
</script>
