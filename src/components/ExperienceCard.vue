<template>
  <div class="panel flex flex-col justify-between gap-10 p-6 sm:p-8" @mouseenter="paused = true"
    @mouseleave="paused = false" @focusin="paused = true" @focusout="paused = false">
    <div class="flex items-center justify-between">
      <p class="eyebrow">Career</p>
      <p class="eyebrow tabular-nums">{{ String(active + 1).padStart(2, "0") }} / {{ String(items.length).padStart(2, "0") }}</p>
    </div>

    <div class="min-h-[9rem]" aria-live="polite">
      <Transition mode="out-in" enter-active-class="transition duration-500 ease-out"
        enter-from-class="translate-y-2 opacity-0" leave-active-class="transition duration-200 ease-in"
        leave-to-class="opacity-0">
        <div :key="active">
          <p class="text-pretty text-xl leading-snug tracking-tight sm:text-2xl">
            {{ current.highlights }}
          </p>
          <div class="mt-6">
            <p class="text-sm font-medium">{{ current.role }}</p>
            <p class="text-sm text-muted">{{ current.company }} · {{ current.period }}</p>
          </div>
        </div>
      </Transition>
    </div>

    <div class="flex items-center justify-between">
      <div class="flex gap-1.5">
        <button v-for="(item, i) in items" :key="item.role" type="button" @click="active = i"
          class="h-1.5 cursor-pointer rounded-full transition-all duration-500"
          :class="i === active ? 'w-6 bg-fg' : 'w-1.5 bg-subtle hover:bg-muted'"
          :aria-label="`Show ${item.role}`" :aria-current="i === active"></button>
      </div>
      <div class="flex gap-2">
        <button type="button" @click="step(-1)" aria-label="Previous role"
          class="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-line text-muted transition-colors hover:bg-raised hover:text-fg">
          <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button type="button" @click="step(1)" aria-label="Next role"
          class="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-line text-muted transition-colors hover:bg-raised hover:text-fg">
          <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref, watch } from "vue";
import { prefersReducedMotion } from "../composables/useGsap";

const props = defineProps({
  items: { type: Array, required: true },
  interval: { type: Number, default: 6000 },
});

// Newest role first
const items = computed(() => [...props.items].reverse());
const active = ref(0);
const paused = ref(false);
const current = computed(() => items.value[active.value]);

const step = (dir) => {
  active.value = (active.value + dir + items.value.length) % items.value.length;
};

let timer = null;
function restart() {
  clearInterval(timer);
  if (prefersReducedMotion()) return;
  timer = setInterval(() => {
    if (!paused.value && !document.hidden) step(1);
  }, props.interval);
}

watch(active, restart);
onMounted(restart);
onUnmounted(() => clearInterval(timer));
</script>
