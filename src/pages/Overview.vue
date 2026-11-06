<template>
  <section v-if="project" ref="root" aria-label="Overview">
    <DetailSection title="Goal" :text="project.overview.goal" />
    <DetailSection title="Highlights" :list="project.overview.highlights" />
    <DetailSection title="Challenges" :text="project.overview.challenges" />
    <DetailSection title="Outcome" :text="project.overview.outcome" />
  </section>
</template>

<script setup>
import { ref } from "vue";
import DetailSection from "../components/DetailSection.vue";
import { useCurrentProject } from "../composables/useCurrentProject";
import { useGsap } from "../composables/useGsap";

const project = useCurrentProject();
const root = ref(null);
useGsap(root);
</script>
