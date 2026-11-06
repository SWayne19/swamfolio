<template>
  <button type="button" @click="toggle"
    class="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-line text-muted transition-colors hover:bg-raised hover:text-fg"
    :aria-label="isDark ? 'Switch to light theme' : 'Switch to dark theme'">
    <svg v-if="isDark" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"
      aria-hidden="true">
      <circle cx="12" cy="12" r="4.5" />
      <path stroke-linecap="round"
        d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
    <svg v-else class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"
      aria-hidden="true">
      <path stroke-linejoin="round" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  </button>
</template>

<script setup>
import { ref } from "vue";

const isDark = ref(document.documentElement.classList.contains("dark"));

function toggle() {
  isDark.value = !isDark.value;
  document.documentElement.classList.toggle("dark", isDark.value);
  try {
    localStorage.setItem("theme", isDark.value ? "dark" : "light");
  } catch {
    /* storage unavailable */
  }
}
</script>
