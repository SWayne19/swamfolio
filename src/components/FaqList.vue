<template>
  <ul class="border-t border-line">
    <li v-for="(item, i) in items" :key="item.q" class="border-b border-line">
      <h3>
        <button type="button" :id="`faq-q-${i}`" :aria-expanded="open === i" :aria-controls="`faq-a-${i}`"
          @click="open = open === i ? null : i"
          class="flex w-full cursor-pointer items-center justify-between gap-6 py-5 text-left text-lg font-medium tracking-tight transition-colors hover:text-muted sm:py-6 sm:text-xl">
          {{ item.q }}
          <span
            class="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line transition-transform duration-300"
            :class="open === i ? 'rotate-45 bg-fg text-bg' : ''" aria-hidden="true">
            <svg class="h-3.5 w-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" d="M12 5v14M5 12h14" />
            </svg>
          </span>
        </button>
      </h3>
      <div :id="`faq-a-${i}`" role="region" :aria-labelledby="`faq-q-${i}`"
        class="grid transition-[grid-template-rows] duration-300 ease-out"
        :class="open === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'">
        <div class="overflow-hidden">
          <p class="max-w-2xl pb-6 text-pretty text-base leading-relaxed text-muted sm:text-lg">{{ item.a }}</p>
        </div>
      </div>
    </li>
  </ul>
</template>

<script setup>
import { ref } from "vue";

defineProps({
  items: { type: Array, required: true },
});

const open = ref(0);
</script>
