<template>
  <section v-if="project" class="space-y-8">
    <h2 class="text-2xl font-extrabold text-blue-300">
      Backend Implementation
    </h2>

    <!-- Stack -->
    <div class="rounded-2xl bg-slate-900/60 p-6 border border-white/5">
      <h3 class="text-lg font-semibold mb-3 text-white">Tech Stack</h3>
      <div class="flex flex-wrap gap-2">
        <span
          v-for="tech in project.backend.stack"
          :key="tech"
          class="px-3 py-1 rounded-full bg-indigo-600/20 text-indigo-200 text-sm"
        >
          {{ tech }}
        </span>
      </div>
    </div>

    <!-- Features -->
    <div class="rounded-2xl bg-slate-900/60 p-6 border border-white/5">
      <h3 class="text-lg font-semibold mb-3 text-white">Core Features</h3>
      <ul class="list-disc list-inside text-slate-300 space-y-1">
        <li v-for="feature in project.backend.features" :key="feature">
          {{ feature }}
        </li>
      </ul>
    </div>

    <!-- Database -->
    <div class="rounded-2xl bg-slate-900/60 p-6 border border-white/5">
      <h3 class="text-lg font-semibold mb-3 text-white">Database Design</h3>
      <ul class="list-disc list-inside text-slate-300 space-y-1">
        <li v-for="table in project.backend.database" :key="table">
          {{ table }}
        </li>
      </ul>
    </div>

    <!-- Security -->
    <div class="rounded-2xl bg-slate-900/60 p-6 border border-white/5">
      <h3 class="text-lg font-semibold mb-2 text-white">Security</h3>
      <p class="text-slate-300">
        {{ project.backend.security }}
      </p>
    </div>
  </section>

  <p v-else class="text-slate-400">Project not found.</p>
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
