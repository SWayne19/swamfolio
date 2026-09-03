<template>
  <Transition enter-active-class="transition-opacity duration-200" enter-from-class="opacity-0"
    enter-to-class="opacity-100" leave-active-class="transition-opacity duration-300" leave-from-class="opacity-100"
    leave-to-class="opacity-0">
    <div v-if="loading" class="fixed inset-0 z-[200] flex items-center justify-center bg-[#f5f5f0]/60 backdrop-blur-sm dark:bg-[#141418]/60">
      <div class="flex items-center gap-2">
        <span class="route-dot" style="animation-delay: 0ms"></span>
        <span class="route-dot" style="animation-delay: 150ms"></span>
        <span class="route-dot" style="animation-delay: 300ms"></span>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";

const loading = ref(false);
let timeout = null;

const router = useRouter();

router.beforeEach(() => {
  clearTimeout(timeout);
  loading.value = true;
});

router.afterEach(() => {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    loading.value = false;
  }, 150);
});

onBeforeUnmount(() => {
  clearTimeout(timeout);
});
</script>
