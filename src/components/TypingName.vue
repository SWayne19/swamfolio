<template>
  <span class="text-lg font-bold tracking-tight text-gray-900 sm:text-xl md:text-2xl dark:text-white">
    <span>{{ displayedName }}</span>
    <span class="typewriter-cursor ml-[1px] inline-block h-[1.1em] w-[2px] align-middle bg-primary-500"></span>
  </span>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const phrases = ["Swam Pyae Paing", "Full Stack Developer"];
const displayedName = ref("");
let typingTimeout = null;
let cancelled = false;

const sleep = (ms) =>
  new Promise((resolve) => {
    typingTimeout = setTimeout(resolve, ms);
  });

const typeLoop = async () => {
  let index = 0;
  while (!cancelled) {
    const text = phrases[index];

    for (let i = 0; i <= text.length; i++) {
      if (cancelled) return;
      displayedName.value = text.slice(0, i);
      await sleep(80);
    }

    if (cancelled) return;
    await sleep(2000);

    for (let i = text.length; i >= 0; i--) {
      if (cancelled) return;
      displayedName.value = text.slice(0, i);
      await sleep(40);
    }

    if (cancelled) return;
    await sleep(500);

    index = (index + 1) % phrases.length;
  }
};

onMounted(typeLoop);

onUnmounted(() => {
  cancelled = true;
  if (typingTimeout) clearTimeout(typingTimeout);
});
</script>

<style>
@keyframes blink {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }
}

.typewriter-cursor {
  animation: blink 0.8s step-end infinite;
}
</style>