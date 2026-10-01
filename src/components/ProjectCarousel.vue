<template>
  <div
    class="relative mx-[calc(50%-50vw)] w-screen select-none"
    role="region"
    aria-roledescription="carousel"
    aria-label="Featured projects"
    @mouseenter="paused = true"
    @mouseleave="paused = false"
    @focusin="paused = true"
    @focusout="paused = false"
  >
    <!-- Viewport -->
    <div class="overflow-hidden py-2">
      <div
        class="flex w-full touch-pan-y"
        :class="animate ? 'transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]' : ''"
        :style="trackStyle"
        @transitionend.self="onTransitionEnd"
        @pointerdown="onPointerDown"
        @pointermove="onPointerMove"
        @pointerup="onPointerUp"
        @pointercancel="onPointerUp"
        @pointerleave="onPointerUp"
      >
        <router-link
          v-for="(slide, i) in slides"
          :key="slide.key"
          :to="{ name: 'project', params: { id: slide.project.id } }"
          :aria-hidden="i !== index"
          :tabindex="i === index ? 0 : -1"
          :style="{ flexBasis: `${SLIDE_WIDTH}%`, marginRight: `${GAP}px` }"
          class="group relative block aspect-4/5 shrink-0 overflow-hidden rounded-2xl bg-slate-800 shadow-xl transition-[opacity,transform] duration-700 max-h-[80vh] sm:aspect-video lg:aspect-2/1"
          :class="i === index ? 'opacity-100' : 'scale-[0.97] opacity-50 hover:opacity-70'"
          draggable="false"
          @click="onSlideClick($event, i)"
        >
          <img
            v-if="slide.project.image"
            :src="slide.project.image"
            :alt="`${slide.project.title} cover`"
            class="absolute inset-0 h-full w-full object-cover object-top"
            draggable="false"
          />

          <!-- Gradient for legibility -->
          <div class="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-transparent"></div>
          <div class="absolute inset-0 bg-linear-to-r from-black/50 via-transparent to-transparent"></div>

          <!-- Title -->
          <h4
            class="absolute right-5 top-5 max-w-[80%] text-right text-3xl font-black uppercase italic leading-none tracking-tight text-white drop-shadow-lg sm:right-10 sm:top-10 sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            {{ slide.project.title }}
          </h4>

          <!-- Bottom bar: CTA + meta -->
          <div class="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:gap-4 sm:p-10">
            <span
              class="w-fit shrink-0 rounded-full bg-white px-5 py-2 text-sm font-medium sm:px-6 sm:py-2.5 sm:text-base text-gray-900 shadow transition-colors group-hover:bg-white/90"
            >
              View project
            </span>
            <p class="line-clamp-2 text-sm text-white/90 sm:line-clamp-1 sm:text-base lg:text-lg">
              <span class="font-bold text-white">{{ slide.project.tags?.[0] }}</span>
              <span class="mx-1.5">•</span>
              {{ slide.project.description }}
            </p>
          </div>
        </router-link>
      </div>
    </div>

    <!-- Arrows -->
    <button
      type="button"
      aria-label="Previous project"
      class="absolute left-4 top-[calc(50%-1rem)] z-10 hidden -translate-y-1/2 cursor-pointer rounded-full bg-black/40 p-3 text-white backdrop-blur transition hover:bg-black/60 sm:block"
      @click="prev"
    >
      <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path d="M15 18l-6-6 6-6" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </button>
    <button
      type="button"
      aria-label="Next project"
      class="absolute right-4 top-[calc(50%-1rem)] z-10 hidden -translate-y-1/2 cursor-pointer rounded-full bg-black/40 p-3 text-white backdrop-blur transition hover:bg-black/60 sm:block"
      @click="next"
    >
      <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path d="M9 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </button>

    <!-- Dots -->
    <div class="mt-4 flex justify-center gap-2">
      <button
        v-for="(project, i) in items"
        :key="project.id"
        type="button"
        :aria-label="`Go to ${project.title}`"
        :aria-current="i === activeIndex"
        class="h-1.5 cursor-pointer rounded-full transition-all duration-500"
        :class="
          i === activeIndex
            ? 'w-6 bg-gray-900 dark:bg-white'
            : 'w-1.5 bg-gray-400 hover:bg-gray-600 dark:bg-slate-600 dark:hover:bg-slate-400'
        "
        @click="goTo(i)"
      ></button>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref, watch } from "vue";

const props = defineProps({
  items: { type: Array, required: true },
  interval: { type: Number, default: 3000 },
});

const SLIDE_WIDTH = 84; // % of viewport width taken by the active slide
const GAP = 16; // px between slides

// Render three copies so there is always a neighbour on both sides,
// then silently jump back to the middle copy after crossing an edge.
const count = computed(() => props.items.length);
const slides = computed(() =>
  [0, 1, 2].flatMap((copy) =>
    props.items.map((project) => ({ key: `${copy}-${project.id}`, project }))
  )
);

const index = ref(count.value);
const animate = ref(true);
const moving = ref(false);
const paused = ref(false);
const dragOffset = ref(0);

const activeIndex = computed(() => ((index.value % count.value) + count.value) % count.value);

const trackStyle = computed(() => ({
  transform: `translateX(calc(${(100 - SLIDE_WIDTH) / 2}% - ${index.value} * (${SLIDE_WIDTH}% + ${GAP}px) + ${dragOffset.value}px))`,
}));

function move(to) {
  if (moving.value || count.value < 2 || to === index.value) return;
  moving.value = true;
  animate.value = true;
  index.value = to;
}

const next = () => move(index.value + 1);
const prev = () => move(index.value - 1);
const goTo = (i) => move(count.value + i);

function onTransitionEnd(e) {
  if (e.propertyName !== "transform") return;
  moving.value = false;
  // Wrap back into the middle copy without animating.
  if (index.value >= count.value * 2 || index.value < count.value) {
    animate.value = false;
    index.value = count.value + activeIndex.value;
    requestAnimationFrame(() => requestAnimationFrame(() => (animate.value = true)));
  }
}

// Clicking a side slide brings it to the centre instead of navigating.
function onSlideClick(e, i) {
  if (dragged || i !== index.value) {
    e.preventDefault();
    if (!dragged) move(i);
  }
}

// --- Swipe / drag ---
let startX = null;
let dragged = false;

function onPointerDown(e) {
  if (moving.value) return;
  startX = e.clientX;
  dragged = false;
}

function onPointerMove(e) {
  if (startX === null) return;
  const dx = e.clientX - startX;
  if (Math.abs(dx) > 5) {
    dragged = true;
    animate.value = false;
    dragOffset.value = dx;
  }
}

function onPointerUp() {
  if (startX === null) return;
  const dx = dragOffset.value;
  startX = null;
  dragOffset.value = 0;
  animate.value = true;
  if (dx < -50) next();
  else if (dx > 50) prev();
  // Let the click handler see `dragged`, then reset.
  setTimeout(() => (dragged = false));
}

// --- Autoplay ---
let timer = null;

function startTimer() {
  stopTimer();
  timer = setInterval(() => {
    if (!paused.value && !document.hidden) next();
  }, props.interval);
}

function stopTimer() {
  if (timer) clearInterval(timer);
  timer = null;
}

// Restart the countdown after any slide change so manual navigation gets a full interval.
watch(activeIndex, startTimer);

// Recover if the track never fires transitionend (e.g. tab was hidden mid-slide).
function onVisibilityChange() {
  if (!document.hidden) moving.value = false;
}

onMounted(() => {
  startTimer();
  document.addEventListener("visibilitychange", onVisibilityChange);
});

onUnmounted(() => {
  stopTimer();
  document.removeEventListener("visibilitychange", onVisibilityChange);
});
</script>
