<template>
  <div>
    <p class="text-sm text-muted">{{ date }}</p>
    <p class="mt-1 font-mono text-3xl tabular-nums tracking-tight sm:text-4xl">
      <time :datetime="iso">{{ time }}</time>
    </p>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const props = defineProps({
  timeZone: { type: String, default: "Asia/Yangon" },
});

const dateFmt = new Intl.DateTimeFormat("en-GB", {
  timeZone: props.timeZone,
  weekday: "long",
  day: "numeric",
  month: "long",
});
const timeFmt = new Intl.DateTimeFormat("en-GB", {
  timeZone: props.timeZone,
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
});

const date = ref("");
const time = ref("");
const iso = ref("");

function tick() {
  const now = new Date();
  date.value = dateFmt.format(now);
  time.value = timeFmt.format(now);
  iso.value = now.toISOString();
}

let timer = null;
tick();
onMounted(() => (timer = setInterval(tick, 1000)));
onUnmounted(() => clearInterval(timer));
</script>
