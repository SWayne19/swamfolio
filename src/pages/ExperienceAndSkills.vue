<template>
  <!-- Projects Section -->
  <section id="projects" data-aos="fade-up">
    <div class="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p class="text-xs font-medium uppercase tracking-wider text-gray-400 dark:text-slate-500">
          Projects
        </p>
        <h3 class="mt-1 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">Selected work</h3>
      </div>
      <p class="text-sm text-gray-400 dark:text-slate-500">
        More details available on request.
      </p>
    </div>

    <div class="group/slider relative">
      <button
        @click="slideProjects('left')"
        :class="[
          'absolute -left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-lg border border-gray-200 bg-white shadow-md transition-all hover:bg-gray-50 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700',
          canScrollLeft ? 'opacity-100' : 'pointer-events-none opacity-0',
        ]"
        aria-label="Previous projects"
      >
        <svg class="h-4 w-4 text-gray-600 dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      <div
        ref="carouselRef"
        @scroll="checkScroll"
        class="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth py-2"
      >
        <router-link
          v-for="project in projects"
          :key="project.id"
          :to="{ name: 'project', params: { id: project.id } }"
          class="group block w-[80vw] max-w-xs flex-shrink-0 snap-start overflow-hidden rounded-xl border border-gray-200/80 bg-white shadow-sm p-5 transition-all duration-200 hover:border-primary-200 hover:shadow-md sm:w-72 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-slate-600"
        >
          <div class="flex h-full flex-col gap-3">
            <div class="flex h-32 w-full items-center justify-center rounded-lg bg-gray-100 dark:bg-slate-800">
              <template v-if="project.image">
                <img
                  :src="project.image"
                  :alt="`${project.title} cover`"
                  class="h-full w-full rounded-lg object-contain"
                  loading="lazy"
                />
              </template>
              <template v-else>
                <svg class="h-8 w-8 text-gray-300 dark:text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                  <rect x="5" y="5" width="14" height="14" rx="4" />
                  <path d="M8 12h8M12 8v8" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </template>
            </div>

            <h4 class="text-base font-semibold text-gray-900 transition-colors group-hover:text-primary-600 dark:text-white dark:group-hover:text-primary-400">
              {{ project.title }}
            </h4>
            <p class="line-clamp-2 text-sm text-gray-500 dark:text-slate-400">
              {{ project.description }}
            </p>

            <div class="mt-auto flex flex-wrap gap-1.5 pt-1">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="rounded-md bg-gray-50 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-gray-500 dark:bg-slate-800 dark:text-slate-400"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </router-link>
      </div>

      <button
        @click="slideProjects('right')"
        :class="[
          'absolute -right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-lg border border-gray-200 bg-white shadow-md transition-all hover:bg-gray-50 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700',
          canScrollRight ? 'opacity-100' : 'pointer-events-none opacity-0',
        ]"
        aria-label="Next projects"
      >
        <svg class="h-4 w-4 text-gray-600 dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
  </section>

  <!-- Experience Section - Horizontal Scroll -->
  <section id="experience" class="mt-16" data-aos="fade-up">
    <div class="mb-6">
      <p class="text-xs font-medium uppercase tracking-wider text-gray-400 dark:text-slate-500">
        Experience
      </p>
      <h3 class="mt-1 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
        Early-career Milestones
      </h3>
    </div>

    <!-- Horizontal Timeline -->
    <div class="relative">
      <!-- Timeline line -->
      <div class="absolute top-[52px] left-0 right-0 h-px bg-gray-200 dark:bg-slate-800"></div>

      <div
        ref="expCarouselRef"
        @scroll="checkExpScroll"
        class="no-scrollbar flex gap-6 overflow-x-auto scroll-smooth pb-4 pt-2"
      >
        <div
          v-for="(experience, i) in experiences"
          :key="experience.role"
          class="group relative flex w-[85vw] max-w-sm flex-shrink-0 flex-col sm:w-80"
        >
          <!-- Timeline dot + connector -->
          <div class="flex items-center gap-3 pb-6">
            <div class="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-[3px] border-white bg-primary-500 shadow-sm transition-transform group-hover:scale-110 dark:border-slate-950">
              <span class="text-[10px] font-bold text-white">{{ i + 1 }}</span>
            </div>
            <span class="text-xs font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
              {{ experience.period }}
            </span>
          </div>

          <!-- Card -->
          <div class="flex flex-1 flex-col rounded-xl border border-gray-200/80 bg-white shadow-sm p-5 transition-all duration-200 group-hover:border-primary-200 group-hover:shadow-md dark:border-slate-800 dark:bg-slate-900/60 dark:group-hover:border-slate-600">
            <p class="text-[11px] font-medium uppercase tracking-wider text-gray-400 dark:text-slate-500">
              {{ experience.company }}
            </p>
            <h4 class="mt-2 text-lg font-semibold text-gray-900 transition-colors group-hover:text-primary-600 dark:text-white dark:group-hover:text-primary-400">
              {{ experience.role }}
            </h4>
            <p class="mt-3 text-sm leading-relaxed text-gray-500 dark:text-slate-400">
              {{ experience.highlights }}
            </p>
          </div>
        </div>
      </div>

      <!-- Horizontal scroll arrows for experience -->
      <div class="mt-3 flex items-center justify-end gap-2">
        <button
          @click="slideExp('left')"
          :class="[
            'flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 bg-white transition hover:bg-gray-50 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700',
            canExpScrollLeft ? 'opacity-100' : 'pointer-events-none opacity-30',
          ]"
          aria-label="Previous experience"
        >
          <svg class="h-3.5 w-3.5 text-gray-600 dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button
          @click="slideExp('right')"
          :class="[
            'flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 bg-white transition hover:bg-gray-50 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700',
            canExpScrollRight ? 'opacity-100' : 'pointer-events-none opacity-30',
          ]"
          aria-label="Next experience"
        >
          <svg class="h-3.5 w-3.5 text-gray-600 dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </div>
  </section>

  <Skill />
</template>

<script setup>
import { inject, ref, onMounted, onUnmounted, nextTick } from "vue";
import Skill from "./Skill.vue";

// Project carousel
const carouselRef = ref(null);
const canScrollLeft = ref(false);
const canScrollRight = ref(true);

const checkScroll = () => {
  if (!carouselRef.value) return;
  const { scrollLeft, scrollWidth, clientWidth } = carouselRef.value;
  canScrollLeft.value = scrollLeft > 0;
  canScrollRight.value = Math.ceil(scrollLeft + clientWidth) < scrollWidth - 2;
};

const slideProjects = (direction) => {
  if (!carouselRef.value) return;
  const container = carouselRef.value;
  const itemWidth = container.firstElementChild?.offsetWidth || 288;
  const gap = 16;
  const scrollAmount = itemWidth + gap;
  const rawTarget = container.scrollLeft + (direction === "right" ? scrollAmount : -scrollAmount);
  const maxScroll = container.scrollWidth - container.clientWidth;
  container.scrollTo({ left: Math.max(0, Math.min(rawTarget, maxScroll)), behavior: "smooth" });
  setTimeout(checkScroll, 350);
};

// Experience horizontal carousel
const expCarouselRef = ref(null);
const canExpScrollLeft = ref(false);
const canExpScrollRight = ref(true);

const checkExpScroll = () => {
  if (!expCarouselRef.value) return;
  const { scrollLeft, scrollWidth, clientWidth } = expCarouselRef.value;
  canExpScrollLeft.value = scrollLeft > 0;
  canExpScrollRight.value = Math.ceil(scrollLeft + clientWidth) < scrollWidth - 2;
};

const slideExp = (direction) => {
  if (!expCarouselRef.value) return;
  const container = expCarouselRef.value;
  const itemWidth = container.firstElementChild?.offsetWidth || 320;
  const gap = 24;
  const scrollAmount = itemWidth + gap;
  const rawTarget = container.scrollLeft + (direction === "right" ? scrollAmount : -scrollAmount);
  const maxScroll = container.scrollWidth - container.clientWidth;
  container.scrollTo({ left: Math.max(0, Math.min(rawTarget, maxScroll)), behavior: "smooth" });
  setTimeout(checkExpScroll, 350);
};

onMounted(() => {
  nextTick(() => {
    checkScroll();
    checkExpScroll();
  });
  window.addEventListener("resize", checkScroll);
  window.addEventListener("resize", checkExpScroll);
});

onUnmounted(() => {
  window.removeEventListener("resize", checkScroll);
  window.removeEventListener("resize", checkExpScroll);
});

const experiences = ref([
  {
    role: "Intern Programmer",
    company: "KMD Group of Company Limited (SoftComm Technology)",
    period: "Jan -- Feb 2025",
    highlights: "Assisted with frontend development tasks, participated in team meetings, and supported ongoing project implementations as an intern.",
  },
  {
    role: "Trainee Programmer",
    company: "KMD Group of Company Limited (SoftComm Technology)",
    period: "Mar -- Apr 2025",
    highlights: "Received hands-on training in Vue.js and modern JavaScript, contributed bug fixes, and collaborated with senior developers as a trainee.",
  },
  {
    role: "Junior Programmer",
    company: "KMD Group of Company Limited (SoftComm Technology)",
    period: "May 2025 -- Present",
    highlights: "Promoted to Junior Programmer; actively developing and maintaining web applications, building UI components, and optimizing user experiences alongside a cross-functional team.",
  },
]);

const projects = inject("projects");
</script>
