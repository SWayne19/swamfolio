<template>
  <button v-show="showScrollTop" @click="scrollToTop"
    class="fixed right-5 bottom-5 z-40 flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200/60 bg-white/80 text-gray-700 shadow-lg backdrop-blur-sm transition-all hover:scale-105 hover:bg-white hover:text-primary-600 hover:shadow-xl sm:right-8 sm:bottom-8 dark:border-slate-700/60 dark:bg-slate-800/80 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-primary-400"
    :class="showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'"
    aria-label="Scroll to top">
    <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
    </svg>
  </button>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";

const showScrollTop = ref(false);

const handleScroll = () => {
  showScrollTop.value = window.scrollY > 200;
};

const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

onMounted(() => window.addEventListener("scroll", handleScroll, { passive: true }));
onBeforeUnmount(() => window.removeEventListener("scroll", handleScroll));
</script>