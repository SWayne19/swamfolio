<template>
  <div v-if="project">
    <div class="mx-auto max-w-3xl">
      <!-- Header -->
      <div class="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div class="flex items-center gap-3">
          <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600 sm:h-12 sm:w-12">
            <svg class="h-5 w-5 text-white sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="9" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M8 12l2 2 4-4" />
            </svg>
          </div>
          <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl dark:text-white">
            {{ project.title }}
          </h1>
        </div>

        <div class="flex items-center gap-2">
          <a
            v-if="project.url"
            :href="project.url"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3.5 py-2 text-sm font-medium text-white transition hover:bg-emerald-700"
          >
            <svg class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-4.5-6H18m0 0v4.5m0-4.5L10.5 13.5" />
            </svg>
            Live Demo
          </a>
          <span
            v-else
            class="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-gray-50 px-3.5 py-2 text-sm font-medium text-gray-400 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-500"
          >
            Coming Soon
          </span>

          <router-link
            :to="{ name: 'experienceAndSkills' }"
            class="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3.5 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
          >
            <svg class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            Back
          </router-link>
        </div>
      </div>

      <!-- Description -->
      <p class="mb-6 text-[15px] leading-relaxed text-gray-600 dark:text-slate-300">
        {{ project.description }}
      </p>

      <!-- Tags -->
      <div class="mb-8 flex flex-wrap gap-2">
        <span
          v-for="tag in project.tags"
          :key="tag"
          class="rounded-md bg-primary-50 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-primary-600 dark:bg-primary-500/10 dark:text-primary-400"
        >
          {{ tag }}
        </span>
      </div>

      <!-- Tab Navigation -->
      <div class="mb-8">
        <nav class="flex gap-1 rounded-lg border border-gray-100 bg-gray-50 p-1 dark:border-slate-800 dark:bg-slate-800/60">
          <router-link
            :to="{ name: 'overView', params: { id: project.id } }"
            exact-active-class="!bg-white dark:!bg-slate-700 !text-primary-600 dark:!text-primary-300 shadow-sm"
            class="flex-1 rounded-md px-4 py-2 text-center text-sm font-medium text-gray-400 transition hover:text-gray-700 dark:text-slate-500 dark:hover:text-slate-300"
          >
            Overview
          </router-link>
          <router-link
            :to="{ name: 'frontEnd', params: { id: project.id } }"
            active-class="!bg-white dark:!bg-slate-700 !text-primary-600 dark:!text-primary-300 shadow-sm"
            class="flex-1 rounded-md px-4 py-2 text-center text-sm font-medium text-gray-400 transition hover:text-gray-700 dark:text-slate-500 dark:hover:text-slate-300"
          >
            Front End
          </router-link>
          <router-link
            :to="{ name: 'backEnd', params: { id: project.id } }"
            active-class="!bg-white dark:!bg-slate-700 !text-primary-600 dark:!text-primary-300 shadow-sm"
            class="flex-1 rounded-md px-4 py-2 text-center text-sm font-medium text-gray-400 transition hover:text-gray-700 dark:text-slate-500 dark:hover:text-slate-300"
          >
            Back End
          </router-link>
        </nav>
      </div>

      <router-view></router-view>
    </div>
  </div>

  <!-- Not Found -->
  <div v-else class="flex min-h-[300px] flex-col items-center justify-center text-center">
    <p class="text-lg text-gray-400 dark:text-slate-500">Project not found.</p>
    <router-link
      :to="{ name: 'experienceAndSkills' }"
      class="mt-4 rounded-lg bg-primary-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-primary-700"
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
