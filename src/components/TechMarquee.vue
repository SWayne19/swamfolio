<template>
  <div class="marquee overflow-hidden py-2" role="list" aria-label="Technologies I use">
    <div class="marquee-track">
      <div v-for="copy in 2" :key="copy" class="flex shrink-0 items-center" :aria-hidden="copy === 2">
        <span v-for="tool in tools" :key="tool.name" role="listitem"
          class="flex items-center gap-3 px-6 text-xl font-medium tracking-tight text-subtle transition-colors hover:text-fg sm:px-10 sm:text-2xl">
          <img :src="tool.icon" alt="" class="h-6 w-6 opacity-60 grayscale sm:h-7 sm:w-7" loading="lazy" />
          {{ tool.name }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  tools: { type: Array, required: true },
});
</script>
