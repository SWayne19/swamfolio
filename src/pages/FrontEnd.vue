<template>
  <section v-if="project" ref="root" aria-label="Frontend">
    <DetailSection title="Tech stack" :chips="project.frontend.stack" />
    <DetailSection title="Architecture" :list="project.frontend.architecture" />
    <DetailSection title="Key features" :list="project.frontend.features" />
    <DetailSection title="UI / UX" :text="project.frontend.ui" />
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
