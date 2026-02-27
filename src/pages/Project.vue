<template lang="">
  <div v-if="project" class="relative p-0 sm:p-0">
    <div
      class="max-w-3xl mx-auto bg-slate-900/80 rounded-3xl shadow-2xl shadow-blue-950/50 overflow-hidden border border-white/10 backdrop-blur-md px-6 py-10"
    >
      <div
        class="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
      >
        <div class="flex items-center gap-3">
          <div
            class="h-11 w-11 sm:h-14 sm:w-14 bg-gradient-to-tr from-blue-600/70 via-indigo-500/80 to-blue-400/60 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg shadow-blue-800/40"
          >
            <svg
              class="h-6 w-6 sm:h-8 sm:w-8 text-white/80"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <circle cx="12" cy="12" r="9" stroke-width="2.4" />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 12l2 2 4-4"
              />
            </svg>
          </div>
          <h1
            class="text-2xl sm:text-4xl font-extrabold bg-gradient-to-r from-blue-300 to-indigo-400 bg-clip-text text-transparent tracking-tight"
          >
            {{ project.title }}
          </h1>
        </div>

        <div class="flex gap-2 items-center">
          <a
            v-if="project.url"
            :href="project.url"
            target="_blank"
            rel="noopener"
            class="self-start sm:self-auto inline-flex items-center gap-2 bg-gradient-to-r from-green-400/80 to-blue-500/80 text-white px-4 py-2 rounded-full text-sm font-semibold shadow shadow-blue-900/40 ring-1 ring-blue-400/20 hover:scale-105 active:scale-95 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
          >
            <svg class="h-4 w-4" fill="none" viewBox="0 0 20 20" stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12.25 4.75h3a.75.75 0 01.75.75v9a.75.75 0 01-.75.75h-11a.75.75 0 01-.75-.75v-9a.75.75 0 01.75-.75h3M8 7l2-2 2 2m-2-2v7"
              />
            </svg>
            Live&nbsp;Demo
          </a>
          <button
            v-else
            disabled
            class="self-start sm:self-auto inline-flex items-center gap-2 bg-gradient-to-r from-slate-400/40 to-indigo-400/40 text-slate-200/80 px-4 py-2 rounded-full text-sm font-semibold shadow shadow-blue-900/30 ring-1 ring-slate-300/20 opacity-70 cursor-not-allowed"
          >
            <svg class="h-4 w-4" fill="none" viewBox="0 0 20 20" stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12.25 4.75h3a.75.75 0 01.75.75v9a.75.75 0 01-.75.75h-11a.75.75 0 01-.75-.75v-9a.75.75 0 01.75-.75h3M8 7l2-2 2 2m-2-2v7"
              />
            </svg>
            Demo (Coming Soon)
          </button>

          <router-link
            :to="{ name: 'experienceAndSkills' }"
            class="self-start sm:self-auto inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/90 to-indigo-400/70 text-white px-4 py-2 rounded-full text-sm font-semibold shadow shadow-blue-900/40 ring-1 ring-blue-400/20 hover:scale-105 active:scale-95 transition"
          >
            <svg
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
            Back
          </router-link>
        </div>
      </div>

      <!-- Description Section -->
      <p
        class="text-lg sm:text-xl text-slate-200/90 mb-6 leading-relaxed"
      >
        {{ project.description }}
      </p>

      <!-- Modern Tag Chips -->
      <div
        class="flex flex-wrap gap-3 mb-8"
      >
        <span
          v-for="(tag, idx) in project.tags"
          :key="tag"
          class="inline-flex items-center gap-1 rounded-full bg-gradient-to-br from-blue-700/40 to-indigo-600/30 border border-blue-400/30 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-blue-100 shadow-sm shadow-blue-900/20 hover:scale-105 transition"
        >
          <svg
            class="w-2.5 h-2.5 text-blue-200/80"
            fill="currentColor"
            viewBox="0 0 8 8"
          >
            <circle cx="4" cy="4" r="4" />
          </svg>
          {{ tag }}
        </span>
      </div>

      <div class="mb-10 flex justify-center">
        <nav
          class="flex w-full max-w-full overflow-x-auto scrollbar-hide gap-1.5 p-1.5 bg-slate-950/40 backdrop-blur-md rounded-2xl border border-white/5 shadow-inner sm:justify-center"
        >
          <router-link
            :to="{ name: 'overView', params: { id: project.id } }"
            exact-active-class="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border-white/10 text-blue-300 shadow"
            class="shrink-0 px-4 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all border border-transparent hover:text-white flex items-center gap-2 text-slate-400"
          >
            <span class="w-1.5 h-1.5 rounded-full bg-current opacity-50"></span>
            Overview
          </router-link>

          <router-link
            :to="{ name: 'frontEnd', params: { id: project.id } }"
            active-class="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border-white/10 text-blue-300 shadow"
            class="shrink-0 px-4 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all border border-transparent hover:text-white flex items-center gap-2 text-slate-400"
          >
            <span class="w-1.5 h-1.5 rounded-full bg-current opacity-50"></span>
            Front End
          </router-link>

          <router-link
            :to="{ name: 'backEnd', params: { id: project.id } }"
            active-class="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border-white/10 text-blue-300 shadow"
            class="shrink-0 px-4 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all border border-transparent hover:text-white flex items-center gap-2 text-slate-400"
          >
            <span class="w-1.5 h-1.5 rounded-full bg-current opacity-50"></span>
            Back End
          </router-link>
        </nav>
      </div>

      <router-view></router-view>
    </div>
  </div>

  <div
    v-else
    class="flex flex-col items-center justify-center min-h-[350px] text-white"
  >
    <svg
      class="w-16 h-16 mb-2 text-blue-700/50"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <circle cx="12" cy="12" r="9" stroke-width="2.5" />
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2.5"
        d="M15 9l-6 6m0-6l6 6"
      />
    </svg>
    <p
      class="text-lg font-medium text-slate-200/80"
    >
      Project not found.
    </p>
    <router-link
      :to="{ name: 'experienceAndSkills' }"
      class="mt-4 inline-block bg-blue-600/70 px-5 py-2 rounded-full text-white font-semibold shadow-lg hover:bg-blue-500 transition"
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

// 1. Ensure we react to route changes by putting the ID inside the computed
const project = computed(() => {
  const projectId = parseInt(route.params.id);

  // 2. Added the "return" keyword here
  return projects.value.find((p) => p.id === projectId);
});
</script>
