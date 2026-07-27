<template>
  <div v-if="project">
    <div>
      <!-- Header -->
      <div class="mb-6 flex flex-col gap-5 sm:mb-10">
        <div class="flex items-center gap-4 min-w-0">
          <h1 class="truncate text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl md:text-4xl dark:text-white">
            {{ project.title }}
          </h1>
        </div>

        <div class="flex flex-wrap items-center gap-2.5">
          <a
            v-if="project.url"
            :href="project.url"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition-all hover:-translate-y-0.5 hover:shadow-xl"
          >
            <svg class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-4.5-6H18m0 0v4.5m0-4.5L10.5 13.5" />
            </svg>
            Live Demo
          </a>
          <span
            v-else
            class="inline-flex items-center gap-1.5 rounded-xl border border-gray-200/60 bg-gray-50/80 px-4 py-2.5 text-sm font-medium text-gray-400 dark:border-slate-700/60 dark:bg-slate-800/60 dark:text-slate-500"
          >
            Coming Soon
          </span>

          <router-link
            :to="{ name: 'experienceAndSkills' }"
            class="glass-card inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-gray-600 dark:text-slate-300"
          >
            <svg class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            Back
          </router-link>
        </div>
      </div>

      <!-- Description -->
      <p class="mb-5 text-pretty text-sm leading-relaxed text-gray-500 sm:mb-8 sm:text-[15px] dark:text-slate-400">
        {{ project.description }}
      </p>

      <!-- Tags -->
      <div class="mb-6 flex flex-wrap gap-2 sm:mb-10">
        <span
          v-for="tag in project.tags"
          :key="tag"
          class="rounded-md bg-gray-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-gray-500 dark:bg-slate-800 dark:text-slate-400"
        >
          {{ tag }}
        </span>
      </div>

      <!-- Tab Navigation -->
      <div class="mb-6 overflow-x-auto sm:mb-10">
        <nav class="flex min-w-0 gap-1.5 rounded-xl border border-gray-200/60 bg-gray-100/80 p-1.5 backdrop-blur-sm dark:border-slate-800/60 dark:bg-slate-800/40">
          <router-link
            :to="{ name: 'overView', params: { id: project.id } }"
            exact-active-class="!bg-white dark:!bg-slate-700 !text-primary-600 dark:!text-primary-300 shadow-sm"
            class="flex-1 whitespace-nowrap rounded-lg px-4 py-2.5 text-center text-sm font-semibold text-gray-400 transition-all hover:text-gray-600 dark:text-slate-500 dark:hover:text-slate-300"
          >
            Overview
          </router-link>
          <router-link
            :to="{ name: 'frontEnd', params: { id: project.id } }"
            active-class="!bg-white dark:!bg-slate-700 !text-primary-600 dark:!text-primary-300 shadow-sm"
            class="flex-1 whitespace-nowrap rounded-lg px-4 py-2.5 text-center text-sm font-semibold text-gray-400 transition-all hover:text-gray-600 dark:text-slate-500 dark:hover:text-slate-300"
          >
            Front End
          </router-link>
          <router-link
            :to="{ name: 'backEnd', params: { id: project.id } }"
            active-class="!bg-white dark:!bg-slate-700 !text-primary-600 dark:!text-primary-300 shadow-sm"
            class="flex-1 whitespace-nowrap rounded-lg px-4 py-2.5 text-center text-sm font-semibold text-gray-400 transition-all hover:text-gray-600 dark:text-slate-500 dark:hover:text-slate-300"
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
    <p class="text-base text-gray-400 sm:text-lg dark:text-slate-500">Project not found.</p>
    <router-link
      :to="{ name: 'experienceAndSkills' }"
      class="mt-5 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary-500/25 transition-all hover:-translate-y-0.5 hover:shadow-xl"
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
