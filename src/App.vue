<template>
  <!-- Floating Dots Background -->
  <FloatingDots />

  <div class="relative z-10 min-h-screen text-gray-900 transition-colors duration-300 dark:text-gray-100">
    <!-- Scroll Progress Bar -->
    <ScrollProgress />

    <!-- Top Nav Bar -->
    <NavBar />

    <div class="mx-auto max-w-6xl px-5 pb-16 pt-8 sm:px-8 sm:pb-24 sm:pt-12 lg:px-10">
      <router-view v-slot="{ Component }">
        <Suspense>
          <component :is="Component" />
          <template #fallback>
            <PageSkeleton />
          </template>
        </Suspense>
      </router-view>
    </div>

    <!-- Scroll To Top Button -->
    <ScrollToTop />

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script setup>
import { provide } from "vue";
import FloatingDots from "./components/FloatingDots.vue";
import ScrollProgress from "./components/ScrollProgress.vue";
import NavBar from "./components/NavBar.vue";
import ScrollToTop from "./components/ScrollToTop.vue";
import AppFooter from "./components/AppFooter.vue";
import { projects } from "./data/projects";

provide("projects", projects);
</script>