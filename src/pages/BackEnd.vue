<template>
  <section v-if="project" class="space-y-4">
    <h2 class="text-lg font-bold text-gray-900 dark:text-white">Backend Implementation</h2>

    <div class="rounded-lg border border-gray-200/80 bg-white shadow-sm p-5 dark:border-slate-800 dark:bg-slate-900/60">
      <h3 class="mb-3 text-sm font-semibold text-gray-900 dark:text-white">Tech Stack</h3>
      <div class="flex flex-wrap gap-2">
        <span
          v-for="tech in project.backend.stack"
          :key="tech"
          class="rounded-md bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400"
        >
          {{ tech }}
        </span>
      </div>
    </div>

    <div class="rounded-lg border border-gray-200/80 bg-white shadow-sm p-5 dark:border-slate-800 dark:bg-slate-900/60">
      <h3 class="mb-2 text-sm font-semibold text-gray-900 dark:text-white">Core Features</h3>
      <ul class="list-inside list-disc space-y-1 text-sm text-gray-600 dark:text-slate-300">
        <li v-for="feature in project.backend.features" :key="feature">{{ feature }}</li>
      </ul>
    </div>

    <div class="rounded-lg border border-gray-200/80 bg-white shadow-sm p-5 dark:border-slate-800 dark:bg-slate-900/60">
      <h3 class="mb-2 text-sm font-semibold text-gray-900 dark:text-white">Database Design</h3>
      <ul class="list-inside list-disc space-y-1 text-sm text-gray-600 dark:text-slate-300">
        <li v-for="table in project.backend.database" :key="table">{{ table }}</li>
      </ul>
    </div>

    <div class="rounded-lg border border-gray-200/80 bg-white shadow-sm p-5 dark:border-slate-800 dark:bg-slate-900/60">
      <h3 class="text-sm font-semibold text-gray-900 dark:text-white">Security</h3>
      <p class="mt-2 text-sm text-gray-600 dark:text-slate-300">{{ project.backend.security }}</p>
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
