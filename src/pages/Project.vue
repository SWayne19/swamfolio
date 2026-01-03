<template lang="">
  <div v-if="project" class="relative p-0 sm:p-0">
    <!-- Modern Glowing Background Accent -->
    <div class="absolute inset-0 -z-10">
      <div
        class="absolute left-1/2 top-0 h-[250px] w-[70vw] -translate-x-1/2 rounded-b-full bg-gradient-to-br from-blue-800/40 via-indigo-700/40 to-transparent blur-2xl opacity-80"
      ></div>
      <div
        class="absolute right-12 bottom-0 h-56 w-56 rounded-full bg-indigo-500/20 blur-2xl opacity-70"
      ></div>
    </div>
    <div
      class="max-w-3xl mx-auto bg-slate-900/80 rounded-3xl shadow-2xl shadow-blue-950/50 overflow-hidden border border-white/10 backdrop-blur-md px-6 py-10"
    >
      <!-- Project Title + Icon -->
      <div class="flex items-center gap-3 mb-6">
        <div
          class="h-14 w-14 bg-gradient-to-tr from-blue-600/70 via-indigo-500/80 to-blue-400/60 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-800/40"
        >
          <svg
            class="w-8 h-8 text-white/80"
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
          class="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-blue-300 to-indigo-400 bg-clip-text text-transparent tracking-tight drop-shadow-sm"
        >
          {{ project.title }}
        </h1>
      </div>

      <!-- Description Section -->
      <p class="text-lg sm:text-xl text-slate-200/90 mb-6 leading-relaxed">
        {{ project.description }}
      </p>

      <!-- Modern Tag Chips -->
      <div class="flex flex-wrap gap-3 mb-8">
        <span
          v-for="tag in project.tags"
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

      <!-- Nested Navigation Tabs -->
      <div class="mb-10 group/nav flex justify-center">
        <nav
          class="inline-flex p-1.5 bg-slate-950/40 backdrop-blur-md rounded-2xl border border-white/5 shadow-inner"
        >
          <router-link
            :to="`/experienceAndSkills/projects/${project.id}`"
            exact-active-class="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border-white/10 text-blue-300 shadow-lg"
            class="px-6 py-2.5 rounded-xl text-sm font-bold tracking-wide transition-all duration-300 border border-transparent hover:text-white flex items-center gap-2 text-slate-400"
          >
            <span class="w-1.5 h-1.5 rounded-full bg-current opacity-50"></span>
            Overview
          </router-link>

          <router-link
            :to="`/experienceAndSkills/projects/${project.id}/frontEnd`"
            active-class="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border-white/10 text-blue-300 shadow-lg"
            class="px-6 py-2.5 rounded-xl text-sm font-bold tracking-wide transition-all duration-300 border border-transparent hover:text-white flex items-center gap-2 text-slate-400"
          >
            <span class="w-1.5 h-1.5 rounded-full bg-current opacity-50"></span>
            Front End
          </router-link>

          <router-link
            :to="`/experienceAndSkills/projects/${project.id}/backEnd`"
            active-class="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border-white/10 text-blue-300 shadow-lg"
            class="px-6 py-2.5 rounded-xl text-sm font-bold tracking-wide transition-all duration-300 border border-transparent hover:text-white flex items-center gap-2 text-slate-400"
          >
            <span class="w-1.5 h-1.5 rounded-full bg-current opacity-50"></span>
            Back End
          </router-link>
        </nav>
      </div>

      <router-view></router-view>

      <!-- Modern CTA / Back Button -->
      <div class="flex items-center gap-4 mt-10">
        <router-link
          to="/experienceAndSkills"
          class="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/90 to-indigo-400/70 hover:from-blue-400 hover:to-indigo-300 transition text-white px-5 py-2 rounded-full font-semibold shadow shadow-blue-900/40 ring-1 ring-blue-400/20 hover:scale-105 active:scale-95 focus:outline-none"
        >
          <svg
            class="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.1"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
          Back to Projects
        </router-link>
      </div>
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
    <p class="text-lg font-medium text-slate-200/80">Project not found.</p>
    <router-link
      to="/experienceAndSkills"
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
