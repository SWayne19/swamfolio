<template>
  <section v-if="project" class="space-y-8">
    <h2 class="text-2xl font-extrabold text-blue-300">
      Frontend Implementation
    </h2>

    <!-- Stack -->
    <div class="rounded-2xl bg-slate-900/60 p-6 border border-white/5">
      <h3 class="text-lg font-semibold mb-3 text-white">Tech Stack</h3>
      <div class="flex flex-wrap gap-2">
        <span
          v-for="tech in project.frontend.stack"
          :key="tech"
          class="px-3 py-1 rounded-full bg-blue-600/20 text-blue-200 text-sm"
        >
          {{ tech }}
        </span>
      </div>
    </div>

    <!-- Architecture -->
    <div class="rounded-2xl bg-slate-900/60 p-6 border border-white/5">
      <h3 class="text-lg font-semibold mb-3 text-white">Architecture</h3>
      <ul class="list-disc list-inside text-slate-300 space-y-1">
        <li v-for="item in project.frontend.architecture" :key="item">
          {{ item }}
        </li>
      </ul>
    </div>

    <!-- Features -->
    <div class="rounded-2xl bg-slate-900/60 p-6 border border-white/5">
      <h3 class="text-lg font-semibold mb-3 text-white">Key Features</h3>
      <ul class="list-disc list-inside text-slate-300 space-y-1">
        <li v-for="feature in project.frontend.features" :key="feature">
          {{ feature }}
        </li>
      </ul>
    </div>

    <!-- UI -->
    <div class="rounded-2xl bg-slate-900/60 p-6 border border-white/5">
      <h3 class="text-lg font-semibold mb-2 text-white">UI / UX</h3>
      <p class="text-slate-300">
        {{ project.frontend.ui }}
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
