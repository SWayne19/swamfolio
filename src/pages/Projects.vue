<template>
  <section id="projects">
    <div ref="heading" class="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p class="text-xs font-semibold uppercase tracking-widest text-gray-900 dark:text-slate-500">
          Projects
        </p>
        <h3 class="mt-1.5 text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl md:text-4xl dark:text-white">
          Selected work
        </h3>
      </div>
      <p class="text-base text-gray-800 dark:text-slate-400">
        {{ projects.length }} projects, full stack to static.
      </p>
    </div>

    <!-- Featured carousel -->
    <div ref="carousel">
      <ProjectCarousel :items="projects" />
    </div>
  </section>
</template>

<script setup>
import { inject, ref, onMounted, nextTick } from "vue";
import { useScrollReveal } from "../composables/useScrollReveal";
import ProjectCarousel from "../components/ProjectCarousel.vue";

const projects = inject("projects");
const { revealUp } = useScrollReveal();

const heading = ref(null);
const carousel = ref(null);

onMounted(() => {
  nextTick(() => {
    revealUp(heading.value);
    revealUp(carousel.value, { delay: 0.1 });
  });
});
</script>
