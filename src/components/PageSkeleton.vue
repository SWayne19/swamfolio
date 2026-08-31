<template>
  <div class="space-y-8">
    <!-- Hero skeleton -->
    <div class="flex flex-col-reverse items-center gap-8 py-4 sm:gap-10 sm:py-16 md:flex-row md:items-center md:justify-between md:gap-16">
      <div class="flex flex-1 flex-col items-center gap-5 md:items-start">
        <SkeletonLoader width="80px" height="16px" pill :backgroundColor="bgColor" />
        <SkeletonLoader width="100%" height="48px" pill :backgroundColor="bgColor" />
        <SkeletonLoader width="70%" height="24px" pill :backgroundColor="bgColor" />
        <SkeletonLoader width="100%" height="60px" pill :backgroundColor="bgColor" />
        <div class="flex gap-3 pt-3">
          <SkeletonLoader width="140px" height="44px" pill :backgroundColor="bgColor" />
          <SkeletonLoader width="110px" height="44px" pill :backgroundColor="bgColor" />
        </div>
      </div>
      <SkeletonLoader size="224px" circle :backgroundColor="bgColor" />
    </div>

    <!-- Cards skeleton -->
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
      <div v-for="i in 3" :key="i" class="glass-card flex items-start gap-4 p-5 sm:p-6">
        <SkeletonLoader size="44px" pill :backgroundColor="bgColor" />
        <div class="flex-1 space-y-2">
          <SkeletonLoader width="60%" height="14px" pill :backgroundColor="bgColor" />
          <SkeletonLoader width="90%" height="14px" pill :backgroundColor="bgColor" />
        </div>
      </div>
    </div>

    <!-- Content block skeleton -->
    <div class="glass-card space-y-4 p-5 sm:p-7 md:p-8">
      <div class="flex items-center justify-between">
        <div class="space-y-2">
          <SkeletonLoader width="120px" height="12px" pill :backgroundColor="bgColor" />
          <SkeletonLoader width="200px" height="24px" pill :backgroundColor="bgColor" />
        </div>
        <SkeletonLoader width="60px" height="28px" pill :backgroundColor="bgColor" />
      </div>
      <div class="mt-5 rounded-xl border border-gray-100 p-4 dark:border-slate-800/60">
        <div class="flex items-start gap-4">
          <SkeletonLoader size="36px" pill :backgroundColor="bgColor" />
          <div class="flex-1 space-y-2">
            <SkeletonLoader width="50%" height="14px" pill :backgroundColor="bgColor" />
            <SkeletonLoader width="100%" height="40px" pill :backgroundColor="bgColor" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { SkeletonLoader } from "vue3-loading-skeleton";
import "vue3-loading-skeleton/dist/style.css";

const bgColor = computed(() =>
  document.documentElement.classList.contains("dark") ? "#1e2330" : "#e2e2da"
);
</script>
