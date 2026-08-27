<template>
  <footer class="border-t border-slate-200/60 py-6 sm:py-8 dark:border-slate-800/40">
    <div class="mx-auto max-w-6xl px-5 text-center sm:px-8 lg:px-10">
      <p class="text-xs font-medium tracking-wide text-gray-600 dark:text-slate-600">
        swamfolio &copy; {{ currentYear }}
      </p>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>