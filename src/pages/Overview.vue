<template>
  <section v-if="project" class="space-y-6">
    <h2 class="text-2xl font-extrabold text-primary-600 dark:text-primary-400">Project Overview</h2>

    <div class="rounded-xl border border-gray-100 bg-gray-50 p-6 dark:border-slate-800 dark:bg-slate-800/60">
      <h3 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Goal</h3>
      <p class="leading-relaxed text-gray-600 dark:text-slate-300">{{ project.overview.goal }}</p>
    </div>

    <div class="rounded-xl border border-gray-100 bg-gray-50 p-6 dark:border-slate-800 dark:bg-slate-800/60">
      <h3 class="mb-3 text-lg font-semibold text-gray-900 dark:text-white">Highlights</h3>
      <ul class="list-inside list-disc space-y-1 text-gray-600 dark:text-slate-300">
        <li v-for="item in project.overview.highlights" :key="item">{{ item }}</li>
      </ul>
    </div>

    <div class="rounded-xl border border-gray-100 bg-gray-50 p-6 dark:border-slate-800 dark:bg-slate-800/60">
      <h3 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Challenges</h3>
      <p class="text-gray-600 dark:text-slate-300">{{ project.overview.challenges }}</p>
    </div>

    <div class="rounded-xl border border-gray-100 bg-gray-50 p-6 dark:border-slate-800 dark:bg-slate-800/60">
      <h3 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Outcome</h3>
      <p class="text-gray-600 dark:text-slate-300">{{ project.overview.outcome }}</p>
    </div>
  </section>

  <p v-else class="text-gray-400 dark:text-slate-500">Project not found.</p>
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
