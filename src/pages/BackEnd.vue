<template>
  <section v-if="project" ref="root" aria-label="Backend">
    <template v-if="project.backend.stack.length">
      <DetailSection title="Tech stack" :chips="project.backend.stack" />
      <DetailSection title="Core features" :list="project.backend.features" />
      <DetailSection v-if="project.backend.database.length" title="Database" :chips="project.backend.database" />
      <DetailSection v-if="project.backend.security" title="Security" :text="project.backend.security" />
    </template>
    <DetailSection v-else title="Backend">
      {{ project.backend.features[0] || "This project is frontend only, with no backend." }}
    </DetailSection>
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
