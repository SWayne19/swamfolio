<template>
  <section v-if="project" class="space-y-4 sm:space-y-5">
    <h2 class="text-lg font-extrabold tracking-tight text-gray-900 sm:text-xl dark:text-white">Project Overview</h2>

    <div class="glass-card p-5 sm:p-6">
      <h3 class="text-sm font-bold text-gray-900 dark:text-white">Goal</h3>
      <p class="mt-2.5 text-pretty text-sm leading-relaxed text-gray-500 dark:text-slate-400">{{ project.overview.goal }}</p>
    </div>

    <div class="glass-card p-5 sm:p-6">
      <h3 class="mb-3 text-sm font-bold text-gray-900 dark:text-white">Highlights</h3>
      <ul class="list-inside list-disc space-y-2 text-sm leading-relaxed text-gray-500 dark:text-slate-400">
        <li v-for="item in project.overview.highlights" :key="item">{{ item }}</li>
      </ul>
    </div>

    <div class="glass-card p-5 sm:p-6">
      <h3 class="text-sm font-bold text-gray-900 dark:text-white">Challenges</h3>
      <p class="mt-2.5 text-pretty text-sm leading-relaxed text-gray-500 dark:text-slate-400">{{ project.overview.challenges }}</p>
    </div>

    <div class="glass-card p-5 sm:p-6">
      <h3 class="text-sm font-bold text-gray-900 dark:text-white">Outcome</h3>
      <p class="mt-2.5 text-pretty text-sm leading-relaxed text-gray-500 dark:text-slate-400">{{ project.overview.outcome }}</p>
    </div>
  </section>

  <p v-else class="text-sm text-gray-400 dark:text-slate-500">Project not found.</p>
</template>

<script setup>
import { computed, inject } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const projects = inject("projects");

const project = computed(() => {
  const id = Number(route.params.id);
  return projects.value.find((p) => p.id === id);
});
</script>
