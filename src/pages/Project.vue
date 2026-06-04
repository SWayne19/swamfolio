<template>
  <div v-if="project" class="relative">
    <div
      class="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-gray-200 bg-white px-6 py-10 shadow-sm dark:border-slate-800 dark:bg-slate-900/80 dark:shadow-none"
    >
      <div class="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div class="flex items-center gap-3">
          <div
            class="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-600 shadow-sm sm:h-14 sm:w-14 sm:rounded-2xl"
          >
            <svg class="h-6 w-6 text-white sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <circle cx="12" cy="12" r="9" stroke-width="2.4" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12l2 2 4-4" />
            </svg>
          </div>
          <h1 class="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-4xl dark:text-white">
            {{ project.title }}
          </h1>
        </div>

        <div class="flex items-center gap-2">
          <a
            v-if="project.url"
            :href="project.url"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
          >
            <svg class="h-4 w-4" fill="none" viewBox="0 0 20 20" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.25 4.75h3a.75.75 0 01.75.75v9a.75.75 0 01-.75.75h-11a.75.75 0 01-.75-.75v-9a.75.75 0 01.75-.75h3M8 7l2-2 2 2m-2-2v7" />
            </svg>
            Live Demo
          </a>
          <button
            v-else
            disabled
            class="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-gray-200 bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-400 opacity-70 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-500"
          >
            <svg class="h-4 w-4" fill="none" viewBox="0 0 20 20" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.25 4.75h3a.75.75 0 01.75.75v9a.75.75 0 01-.75.75h-11a.75.75 0 01-.75-.75v-9a.75.75 0 01.75-.75h3M8 7l2-2 2 2m-2-2v7" />
            </svg>
            Demo (Coming Soon)
          </button>

          <router-link
            :to="{ name: 'experienceAndSkills' }"
            class="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-gray-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
          >
            <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            Back
          </router-link>
        </div>
      </div>

      <p class="mb-6 text-lg leading-relaxed text-gray-600 sm:text-xl dark:text-slate-300">
        {{ project.description }}
      </p>

      <div class="mb-8 flex flex-wrap gap-3">
        <span
          v-for="tag in project.tags"
          :key="tag"
          class="inline-flex items-center gap-1 rounded-full border border-primary-200 bg-primary-50 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary-700 dark:border-primary-500/20 dark:bg-primary-500/10 dark:text-primary-300"
        >
          <svg class="h-2.5 w-2.5 text-primary-400" fill="currentColor" viewBox="0 0 8 8">
            <circle cx="4" cy="4" r="4" />
          </svg>
          {{ tag }}
        </span>
      </div>

      <div class="mb-10 flex justify-center">
        <nav
          class="flex w-full max-w-full gap-1.5 overflow-x-auto rounded-xl border border-gray-100 bg-gray-50 p-1.5 sm:justify-center dark:border-slate-800 dark:bg-slate-800/60"
        >
          <router-link
            :to="{ name: 'overView', params: { id: project.id } }"
            exact-active-class="bg-white dark:bg-slate-700 text-primary-600 dark:text-primary-300 shadow-sm"
            class="flex shrink-0 items-center gap-2 rounded-lg border border-transparent px-4 py-2 text-xs font-bold tracking-wide text-gray-400 transition-all hover:text-gray-900 sm:px-6 sm:text-sm dark:text-slate-500 dark:hover:text-white"
          >
            <span class="h-1.5 w-1.5 rounded-full bg-current opacity-50"></span>
            Overview
          </router-link>
          <router-link
            :to="{ name: 'frontEnd', params: { id: project.id } }"
            active-class="bg-white dark:bg-slate-700 text-primary-600 dark:text-primary-300 shadow-sm"
            class="flex shrink-0 items-center gap-2 rounded-lg border border-transparent px-4 py-2 text-xs font-bold tracking-wide text-gray-400 transition-all hover:text-gray-900 sm:px-6 sm:text-sm dark:text-slate-500 dark:hover:text-white"
          >
            <span class="h-1.5 w-1.5 rounded-full bg-current opacity-50"></span>
            Front End
          </router-link>
          <router-link
            :to="{ name: 'backEnd', params: { id: project.id } }"
            active-class="bg-white dark:bg-slate-700 text-primary-600 dark:text-primary-300 shadow-sm"
            class="flex shrink-0 items-center gap-2 rounded-lg border border-transparent px-4 py-2 text-xs font-bold tracking-wide text-gray-400 transition-all hover:text-gray-900 sm:px-6 sm:text-sm dark:text-slate-500 dark:hover:text-white"
          >
            <span class="h-1.5 w-1.5 rounded-full bg-current opacity-50"></span>
            Back End
          </router-link>
        </nav>
      </div>

      <router-view></router-view>
    </div>
  </div>

  <div v-else class="flex min-h-[350px] flex-col items-center justify-center">
    <svg class="mb-2 h-16 w-16 text-gray-300 dark:text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <circle cx="12" cy="12" r="9" stroke-width="2.5" />
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 9l-6 6m0-6l6 6" />
    </svg>
    <p class="text-lg font-medium text-gray-500 dark:text-slate-400">Project not found.</p>
    <router-link
      :to="{ name: 'experienceAndSkills' }"
      class="mt-4 inline-block rounded-full bg-primary-600 px-5 py-2 font-semibold text-white shadow-sm transition hover:bg-primary-700"
    >
      View All Projects
    </router-link>
  </div>
</template>

<script setup>
import { computed, inject } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const projects = inject("projects");

const project = computed(() => {
  const projectId = parseInt(route.params.id);
  return projects.value.find((p) => p.id === projectId);
});
</script>
