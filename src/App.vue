<template>
  <div class="relative min-h-screen bg-bg text-fg">
    <a href="#main"
      class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-invert focus:px-4 focus:py-2 focus:text-invert-fg">
      Skip to content
    </a>

    <NavBar />

    <main id="main">
      <RouterView v-slot="{ Component, route }">
        <Transition name="page" mode="out-in" @after-enter="onTransitionEnd">
          <component :is="Component" :key="route.params.id ?? route.name" />
        </Transition>
      </RouterView>
    </main>

    <AppFooter v-if="ready" />
  </div>
</template>

<script setup>
import { provide, ref } from "vue";
import { useRouter } from "vue-router";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NavBar from "./components/NavBar.vue";
import AppFooter from "./components/AppFooter.vue";
import { projects } from "./data/projects";
import { useLenis } from "./composables/useLenis";

provide("projects", projects);
useLenis();

// Mount the footer after the first page resolves so its scroll triggers
// are measured against the real page height.
const ready = ref(false);
useRouter()
  .isReady()
  .then(() => requestAnimationFrame(() => (ready.value = true)));

const onTransitionEnd = () => ScrollTrigger.refresh();
</script>
