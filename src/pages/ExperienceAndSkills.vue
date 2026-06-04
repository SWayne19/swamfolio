<template>
  <section id="projects" class="mt-14" data-aos="fade-up">
    <div class="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p class="text-sm uppercase tracking-[0.25em] text-gray-400 dark:text-slate-500">
          Projects
        </p>
        <h3 class="text-3xl font-semibold text-gray-900 dark:text-white">Selected work</h3>
      </div>
      <p class="text-sm text-gray-400 dark:text-slate-500">
        More details available on request.
      </p>
    </div>

    <div class="group/slider relative">
      <button
        @click="slideProjects('left')"
        :class="[
          'absolute left-0 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white shadow-md transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-400 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700',
          canScrollLeft ? 'opacity-100' : 'pointer-events-none opacity-0',
        ]"
        aria-label="Previous projects"
      >
        <svg class="h-6 w-6 text-gray-600 dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      <div
        ref="carouselRef"
        @scroll="checkScroll"
        class="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-4 py-4"
      >
        <router-link
          v-for="project in projects"
          :key="project.id"
          :to="{ name: 'project', params: { id: project.id } }"
          class="group block w-[85vw] max-w-sm flex-shrink-0 snap-center overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:border-primary-300 hover:shadow-md sm:w-80 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-slate-600"
        >
          <div class="relative flex h-full flex-col gap-4">
            <div
              class="mb-2 flex h-36 w-full items-center justify-center rounded-xl bg-gray-100 dark:bg-slate-800"
            >
              <template v-if="project.image">
                <img
                  :src="project.image"
                  :alt="`${project.title} cover`"
                  class="h-full w-full rounded-xl border border-gray-100 object-contain shadow-sm dark:border-slate-700"
                  loading="lazy"
                />
              </template>
              <template v-else>
                <span class="flex h-14 w-14 items-center justify-center rounded-xl bg-gray-200 dark:bg-slate-700">
                  <svg class="h-8 w-8 text-gray-400 dark:text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                    <rect x="5" y="5" width="14" height="14" rx="4" />
                    <path d="M8 12h8M12 8v8" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </span>
              </template>
            </div>

            <h4 class="text-xl font-semibold text-gray-900 transition-colors group-hover:text-primary-600 dark:text-white dark:group-hover:text-primary-400">
              {{ project.title }}
            </h4>
            <p class="text-sm text-gray-500 dark:text-slate-400">
              {{ project.description }}
            </p>

            <div class="mt-auto inline-flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.2em]">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-gray-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400"
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
          'absolute right-0 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white shadow-md transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-400 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700',
          canScrollRight ? 'opacity-100' : 'pointer-events-none opacity-0',
        ]"
        aria-label="Next projects"
      >
        <svg class="h-6 w-6 text-gray-600 dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
  </section>

  <section id="experience" class="mt-14" data-aos="fade-up">
    <div class="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p class="text-sm uppercase tracking-[0.25em] text-gray-400 dark:text-slate-500">
          Experience
        </p>
        <h3 class="text-3xl font-semibold text-gray-900 dark:text-white">
          Early-career Milestones
        </h3>
      </div>
    </div>
    <div class="relative mx-auto max-w-3xl">
      <div class="absolute bottom-0 left-6 top-0 hidden w-0.5 rounded-full bg-gray-200 pointer-events-none sm:block dark:bg-slate-800"></div>
      <div
        v-for="experience in experiences"
        :key="experience.role"
        class="group relative mb-10 flex gap-6 last:mb-0 sm:items-center sm:gap-8"
      >
        <div class="z-10 hidden shrink-0 flex-col items-center sm:flex">
          <div class="h-5 w-5 rounded-full border-4 border-white bg-primary-500 shadow-sm transition-all group-hover:scale-110 dark:border-slate-950"></div>
          <div class="mt-1.5 w-px flex-1 bg-gray-200 dark:bg-slate-800"></div>
        </div>
        <div class="flex-1 sm:ml-6">
          <div class="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <span class="inline-block w-fit rounded-full border border-primary-200 bg-primary-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary-700 dark:border-primary-500/20 dark:bg-primary-500/10 dark:text-primary-300">
              {{ experience.period }}
            </span>
            <span class="font-mono text-xs tracking-tight text-gray-400 sm:text-right sm:text-sm dark:text-slate-500">
              {{ experience.company }}
            </span>
          </div>
          <div
            class="overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-200 group-hover:border-primary-200 group-hover:shadow-md sm:p-6 dark:border-slate-800 dark:bg-slate-900/60 dark:group-hover:border-slate-600"
          >
            <h4 class="mb-2 text-xl font-semibold text-gray-900 transition-colors group-hover:text-primary-600 sm:text-2xl dark:text-white dark:group-hover:text-primary-400">
              {{ experience.role }}
            </h4>
            <p class="text-sm leading-relaxed text-gray-500 sm:text-base dark:text-slate-400">
              {{ experience.highlights }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <Skill />
</template>

<script setup>
import { inject, ref, onMounted, onUnmounted, nextTick } from "vue";
import Skill from "./Skill.vue";

const carouselRef = ref(null);
const canScrollLeft = ref(false);
const canScrollRight = ref(true);

const checkScroll = () => {
  if (!carouselRef.value) return;
  const { scrollLeft, scrollWidth, clientWidth } = carouselRef.value;
  canScrollLeft.value = scrollLeft > 0;
  canScrollRight.value = Math.ceil(scrollLeft + clientWidth) < scrollWidth - 2;
};

onMounted(() => {
  nextTick(() => checkScroll());
  window.addEventListener("resize", checkScroll);
});

onUnmounted(() => {
  window.removeEventListener("resize", checkScroll);
});

const slideProjects = (direction) => {
  if (!carouselRef.value) return;
  const container = carouselRef.value;
  const itemWidth = container.firstElementChild?.offsetWidth || 320;
  const gap = 24;
  const scrollAmount = itemWidth + gap;
  const rawTarget = container.scrollLeft + (direction === "right" ? scrollAmount : -scrollAmount);
  const maxScroll = container.scrollWidth - container.clientWidth;
  const targetScroll = Math.max(0, Math.min(rawTarget, maxScroll));
  container.scrollTo({ left: targetScroll, behavior: "smooth" });
  window.setTimeout(checkScroll, 320);
};

const experiences = ref([
  {
    role: "Intern Programmer",
    company: "KMD Group of Company Limited (SoftComm Technology)",
    period: "Jan — Feb 2025",
    highlights: "Assisted with frontend development tasks, participated in team meetings, and supported ongoing project implementations as an intern.",
  },
  {
    role: "Trainee Programmer",
    company: "KMD Group of Company Limited (SoftComm Technology)",
    period: "Mar — Apr 2025",
    highlights: "Received hands-on training in Vue.js and modern JavaScript, contributed bug fixes, and collaborated with senior developers as a trainee.",
  },
  {
    role: "Junior Programmer",
    company: "KMD Group of Company Limited (SoftComm Technology)",
    period: "May 2025 — Present",
    highlights: "Promoted to Junior Programmer; actively developing and maintaining web applications, building UI components, and optimizing user experiences alongside a cross-functional team.",
  },
]);

const projects = inject("projects");
</script>
