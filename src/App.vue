<template>
  <div class="relative z-10 min-h-screen text-gray-900 transition-colors duration-300 dark:text-gray-100">
    <!-- Scroll Progress Bar -->
    <ScrollProgress />

    <!-- Route Loading Bar -->
    <RouteLoader />

    <!-- Top Nav Bar -->
    <NavBar />

    <!-- Single router-view with conditional wrapper -->
    <div :class="isHome ? '' : 'mx-auto max-w-6xl px-5 pb-16 sm:px-8 sm:pb-24 lg:px-10'">
      <router-view v-slot="{ Component }">
        <Transition name="page" mode="out-in" @after-enter="onTransitionEnd">
          <component :is="Component" />
        </Transition>
      </router-view>
    </div>

    <!-- Scroll To Top Button -->
    <ScrollToTop />

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script setup>
import { computed, provide } from "vue";
import { useRoute } from "vue-router";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollProgress from "./components/ScrollProgress.vue";
import RouteLoader from "./components/RouteLoader.vue";
import NavBar from "./components/NavBar.vue";
import ScrollToTop from "./components/ScrollToTop.vue";
import AppFooter from "./components/AppFooter.vue";
import { projects } from "./data/projects";
import { useLenis } from "./composables/useLenis";

const route = useRoute();
const isHome = computed(() => route.name === "home");

provide("projects", projects);

useLenis();

const onTransitionEnd = () => {
  ScrollTrigger.refresh();
};
</script>
