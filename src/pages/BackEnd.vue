<template>
  <section v-if="project" ref="section" class="space-y-4 sm:space-y-5">
    <h2 class="text-xl font-extrabold tracking-tight text-gray-900 sm:text-2xl dark:text-white">Backend Implementation</h2>

    <div class="glass-card reveal-card p-5 sm:p-6">
      <h3 class="mb-3 text-base font-bold text-gray-900 dark:text-white">Tech Stack</h3>
      <div class="flex flex-wrap gap-2">
        <span
          v-for="tech in project.backend.stack"
          :key="tech"
          class="bg-primary-50 px-3 py-1 text-sm font-semibold text-primary-600 dark:bg-primary-500/10 dark:text-primary-400"
        >
          {{ tech }}
        </span>
      </div>
    </div>

    <div class="glass-card reveal-card p-5 sm:p-6">
      <h3 class="mb-3 text-base font-bold text-gray-900 dark:text-white">Core Features</h3>
      <ul class="list-inside list-disc space-y-2 text-base leading-relaxed text-gray-900 dark:text-slate-400">
        <li v-for="feature in project.backend.features" :key="feature">{{ feature }}</li>
      </ul>
    </div>

    <div class="glass-card reveal-card p-5 sm:p-6">
      <h3 class="mb-3 text-base font-bold text-gray-900 dark:text-white">Database Design</h3>
      <ul class="list-inside list-disc space-y-2 text-base leading-relaxed text-gray-900 dark:text-slate-400">
        <li v-for="table in project.backend.database" :key="table">{{ table }}</li>
      </ul>
    </div>

    <div class="glass-card reveal-card p-5 sm:p-6">
      <h3 class="text-base font-bold text-gray-900 dark:text-white">Security</h3>
      <p class="mt-2.5 text-pretty text-base leading-relaxed text-gray-900 dark:text-slate-400">{{ project.backend.security }}</p>
    </div>
  </section>

  <p v-else class="text-base text-gray-800 dark:text-slate-500">Project not found.</p>
</template>

<script setup>
import { computed, inject, ref, onMounted, nextTick } from "vue";
import { useRoute } from "vue-router";
import { useScrollReveal } from "../composables/useScrollReveal";

const route = useRoute();
const projects = inject("projects");
const { staggerReveal } = useScrollReveal();

const section = ref(null);

const project = computed(() => {
  const id = Number(route.params.id);
  return projects.value.find((p) => p.id === id);
});

onMounted(() => {
  nextTick(() => {
    if (section.value) {
      staggerReveal(section.value.querySelectorAll(".reveal-card"), {
        trigger: section.value,
        stagger: 0.1,
        start: "top 90%",
      });
    }
  });
});
</script>
