<template>
  <div data-reveal class="grid gap-4 border-t border-line py-8 sm:py-10 lg:grid-cols-12 lg:gap-8">
    <h3 class="eyebrow lg:col-span-4 lg:pt-1.5">{{ title }}</h3>
    <div class="lg:col-span-8">
      <!-- Chips -->
      <div v-if="chips" class="flex flex-wrap gap-2">
        <span v-for="chip in chips" :key="chip" class="rounded-full border border-line px-3.5 py-1.5 text-sm">
          {{ chip }}
        </span>
      </div>

      <!-- Numbered list -->
      <ol v-else-if="list" class="divide-y divide-line">
        <li v-for="(item, i) in list" :key="item" class="flex gap-5 py-3.5 first:pt-0 last:pb-0">
          <span class="font-mono text-sm text-subtle tabular-nums">{{ String(i + 1).padStart(2, "0") }}</span>
          <span class="text-pretty text-lg leading-snug">{{ item }}</span>
        </li>
      </ol>

      <!-- Paragraph -->
      <p v-else class="text-pretty text-xl leading-snug tracking-tight sm:text-2xl">
        <slot>{{ text }}</slot>
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  text: { type: String, default: "" },
  list: { type: Array, default: null },
  chips: { type: Array, default: null },
});
</script>
