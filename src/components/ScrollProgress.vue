<template>
  <div class="scroll-progress" :style="{ width: scrollProgress + '%' }"></div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";

const scrollProgress = ref(0);

const handleScroll = () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  const maxScroll = scrollHeight - clientHeight;
  scrollProgress.value = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
};

onMounted(() => window.addEventListener("scroll", handleScroll, { passive: true }));
onBeforeUnmount(() => window.removeEventListener("scroll", handleScroll));
</script>