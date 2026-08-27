<template>
  <section v-if="project" class="space-y-4 sm:space-y-5">
    <h2 class="text-lg font-extrabold tracking-tight text-gray-900 sm:text-xl dark:text-white">Frontend Implementation</h2>

    <div class="glass-card p-5 sm:p-6">
      <h3 class="mb-3 text-sm font-bold text-gray-900 dark:text-white">Tech Stack</h3>
      <div class="flex flex-wrap gap-2">
        <span
          v-for="tech in project.frontend.stack"
          :key="tech"
          class="rounded-lg bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-600 dark:bg-primary-500/10 dark:text-primary-400"
        >
          {{ tech }}
        </span>
      </div>
    </div>

    <div class="glass-card p-5 sm:p-6">
      <h3 class="mb-3 text-sm font-bold text-gray-900 dark:text-white">Architecture</h3>
      <ul class="list-inside list-disc space-y-2 text-sm leading-relaxed text-gray-500 dark:text-slate-400">
        <li v-for="item in project.frontend.architecture" :key="item">{{ item }}</li>
      </ul>
    </div>

    <div class="glass-card p-5 sm:p-6">
      <h3 class="mb-3 text-sm font-bold text-gray-900 dark:text-white">Key Features</h3>
      <ul class="list-inside list-disc space-y-2 text-sm leading-relaxed text-gray-500 dark:text-slate-400">
        <li v-for="feature in project.frontend.features" :key="feature">{{ feature }}</li>
      </ul>
    </div>

    <div class="glass-card p-5 sm:p-6">
      <h3 class="text-sm font-bold text-gray-900 dark:text-white">UI / UX</h3>
      <p class="mt-2.5 text-pretty text-sm leading-relaxed text-gray-500 dark:text-slate-400">{{ project.frontend.ui }}</p>
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
