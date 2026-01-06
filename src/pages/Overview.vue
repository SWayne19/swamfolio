<template>
  <section v-if="project" class="space-y-8">
    <h2 class="text-2xl font-extrabold text-blue-300">Project Overview</h2>

    <!-- Goal -->
    <div class="rounded-2xl bg-slate-900/60 p-6 border border-white/5">
      <h3 class="text-lg font-semibold mb-2 text-white">Goal</h3>
      <p class="text-slate-300 leading-relaxed">
        {{ project.overview.goal }}
      </p>
    </div>

    <!-- Highlights -->
    <div class="rounded-2xl bg-slate-900/60 p-6 border border-white/5">
      <h3 class="text-lg font-semibold mb-3 text-white">Highlights</h3>
      <ul class="list-disc list-inside text-slate-300 space-y-1">
        <li v-for="item in project.overview.highlights" :key="item">
          {{ item }}
        </li>
      </ul>
    </div>

    <!-- Challenges -->
    <div class="rounded-2xl bg-slate-900/60 p-6 border border-white/5">
      <h3 class="text-lg font-semibold mb-2 text-white">Challenges</h3>
      <p class="text-slate-300">
        {{ project.overview.challenges }}
      </p>
    </div>

    <!-- Outcome -->
    <div class="rounded-2xl bg-slate-900/60 p-6 border border-white/5">
      <h3 class="text-lg font-semibold mb-2 text-white">Outcome</h3>
      <p class="text-slate-300">
        {{ project.overview.outcome }}
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
