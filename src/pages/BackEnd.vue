<template>
  <section v-if="project" class="space-y-6">
    <h2 class="text-2xl font-extrabold text-primary-600 dark:text-primary-400">Backend Implementation</h2>

    <div class="rounded-xl border border-gray-100 bg-gray-50 p-6 dark:border-slate-800 dark:bg-slate-800/60">
      <h3 class="mb-3 text-lg font-semibold text-gray-900 dark:text-white">Tech Stack</h3>
      <div class="flex flex-wrap gap-2">
        <span
          v-for="tech in project.backend.stack"
          :key="tech"
          class="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-sm text-indigo-700 dark:border-indigo-500/20 dark:bg-indigo-500/10 dark:text-indigo-300"
        >
          {{ tech }}
        </span>
      </div>
    </div>

    <div class="rounded-xl border border-gray-100 bg-gray-50 p-6 dark:border-slate-800 dark:bg-slate-800/60">
      <h3 class="mb-3 text-lg font-semibold text-gray-900 dark:text-white">Core Features</h3>
      <ul class="list-inside list-disc space-y-1 text-gray-600 dark:text-slate-300">
        <li v-for="feature in project.backend.features" :key="feature">{{ feature }}</li>
      </ul>
    </div>

    <div class="rounded-xl border border-gray-100 bg-gray-50 p-6 dark:border-slate-800 dark:bg-slate-800/60">
      <h3 class="mb-3 text-lg font-semibold text-gray-900 dark:text-white">Database Design</h3>
      <ul class="list-inside list-disc space-y-1 text-gray-600 dark:text-slate-300">
        <li v-for="table in project.backend.database" :key="table">{{ table }}</li>
      </ul>
    </div>

    <div class="rounded-xl border border-gray-100 bg-gray-50 p-6 dark:border-slate-800 dark:bg-slate-800/60">
      <h3 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Security</h3>
      <p class="text-gray-600 dark:text-slate-300">{{ project.backend.security }}</p>
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
