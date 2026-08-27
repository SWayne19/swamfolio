<template>
  <!-- Projects Section -->
  <section id="projects" data-aos="fade-up">
    <div class="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p class="text-[11px] font-semibold uppercase tracking-widest text-gray-400 dark:text-slate-500">
          Projects
        </p>
        <h3 class="mt-1.5 text-xl font-extrabold tracking-tight text-gray-900 sm:text-2xl md:text-3xl dark:text-white">Selected work</h3>
      </div>
    </div>

    <div class="group/slider relative">
      <button
        @click="slideProjects('left')"
        :class="[
          'absolute -left-3 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-xl border border-slate-200/60 bg-white/80 shadow-lg backdrop-blur-sm transition-all hover:scale-105 hover:bg-white focus:outline-none sm:flex dark:border-slate-700/60 dark:bg-slate-800/80 dark:hover:bg-slate-800',
          canScrollLeft ? 'sm:opacity-100' : 'pointer-events-none opacity-0',
        ]"
        aria-label="Previous projects"
      >
        <svg class="h-4 w-4 text-gray-500 dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      <div
        ref="carouselRef"
        @scroll="checkScroll"
        class="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth py-2"
      >
        <router-link
          v-for="project in [...projects].reverse()"
          :key="project.id"
          :to="{ name: 'project', params: { id: project.id } }"
          class="glass-card group block w-[78vw] max-w-xs flex-shrink-0 snap-start overflow-hidden p-5 sm:w-72 sm:p-6"
        >
          <div class="flex h-full flex-col gap-3.5">
            <div class="flex h-36 w-full items-center justify-center overflow-hidden rounded-xl bg-gray-50 dark:bg-slate-800/60">
              <template v-if="project.image">
                <img
                  :src="project.image"
                  :alt="`${project.title} cover`"
                  class="h-full w-full rounded-xl object-contain transition-transform duration-300 group-hover:scale-105"
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

            <h4 class="text-base font-bold text-gray-900 transition-colors group-hover:text-primary-600 dark:text-white dark:group-hover:text-primary-400">
              {{ project.title }}
            </h4>
            <p class="line-clamp-2 text-pretty text-sm leading-relaxed text-gray-500 dark:text-slate-400">
              {{ project.description }}
            </p>

            <div class="mt-auto flex flex-wrap gap-1.5 pt-1">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="rounded-md bg-gray-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-gray-500 dark:bg-slate-800 dark:text-slate-400"
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
          'absolute -right-3 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-xl border border-slate-200/60 bg-white/80 shadow-lg backdrop-blur-sm transition-all hover:scale-105 hover:bg-white focus:outline-none sm:flex dark:border-slate-700/60 dark:bg-slate-800/80 dark:hover:bg-slate-800',
          canScrollRight ? 'sm:opacity-100' : 'pointer-events-none opacity-0',
        ]"
        aria-label="Next projects"
      >
        <svg class="h-4 w-4 text-gray-500 dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
  </section>

  <!-- Experience Section -->
  <section id="experience" class="mt-12 sm:mt-20" data-aos="fade-up">
    <div class="mb-8">
      <p class="text-[11px] font-semibold uppercase tracking-widest text-gray-400 dark:text-slate-500">
        Experience
      </p>
      <h3 class="mt-1.5 text-xl font-extrabold tracking-tight text-gray-900 sm:text-2xl md:text-3xl dark:text-white">
        Career Milestones
      </h3>
    </div>

    <!-- Horizontal Timeline -->
    <div class="group/slider relative">
      <!-- Timeline line -->
      <div class="absolute top-[52px] left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent dark:via-slate-800"></div>

      <button
        @click="slideExp('left')"
        :class="[
          'absolute -left-3 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-xl border border-slate-200/60 bg-white/80 shadow-lg backdrop-blur-sm transition-all hover:scale-105 hover:bg-white focus:outline-none sm:flex dark:border-slate-700/60 dark:bg-slate-800/80 dark:hover:bg-slate-800',
          canExpScrollLeft ? 'sm:opacity-100' : 'pointer-events-none opacity-0',
        ]"
        aria-label="Previous experience"
      >
        <svg class="h-4 w-4 text-gray-500 dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      <div
        ref="expCarouselRef"
        @scroll="checkExpScroll"
        class="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4 pt-2"
      >
        <div
          v-for="experience in [...experiences].reverse()"
          :key="experience.role"
          class="group relative flex w-[78vw] max-w-sm flex-shrink-0 snap-start flex-col sm:w-80"
        >
          <!-- Timeline dot -->
          <div class="flex items-center gap-3 pb-6">
            <div class="relative z-10 h-3.5 w-3.5 rounded-full bg-primary-500 shadow-md shadow-primary-500/15 ring-4 ring-white transition-transform group-hover:scale-125 dark:ring-slate-950"></div>
            <span class="text-xs font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400">
              {{ experience.period }}
            </span>
          </div>

          <!-- Card -->
          <div class="glass-card flex flex-1 flex-col p-5 sm:p-6">
            <p class="text-[10px] font-semibold uppercase tracking-widest text-gray-400 dark:text-slate-500">
              {{ experience.company }}
            </p>
            <h4 class="mt-2.5 text-base font-bold text-gray-900 transition-colors group-hover:text-primary-600 sm:text-lg dark:text-white dark:group-hover:text-primary-400">
              {{ experience.role }}
            </h4>
            <p class="mt-3 text-pretty text-sm leading-relaxed text-gray-500 dark:text-slate-400">
              {{ experience.highlights }}
            </p>
          </div>
        </div>
      </div>

      <button
        @click="slideExp('right')"
        :class="[
          'absolute -right-3 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-xl border border-slate-200/60 bg-white/80 shadow-lg backdrop-blur-sm transition-all hover:scale-105 hover:bg-white focus:outline-none sm:flex dark:border-slate-700/60 dark:bg-slate-800/80 dark:hover:bg-slate-800',
          canExpScrollRight ? 'sm:opacity-100' : 'pointer-events-none opacity-0',
        ]"
        aria-label="Next experience"
      >
        <svg class="h-4 w-4 text-gray-500 dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
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
  const gap = 20;
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
  const gap = 20;
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
    period: "May 2025 -- May 2026",
    highlights: "Promoted to Junior Programmer; actively developing and maintaining web applications, building UI components, and optimizing user experiences alongside a cross-functional team.",
  },
  {
    role: "Mid Programmer",
    company: "KMD Group of Company Limited (SoftComm Technology)",
    period: "May 2026 -- Present",
    highlights: "Promoted to Mid Programmer; leading the KMD Inventory Project with finance modules, audit trails, role-based access, and real-time dashboard analytics.",
  },
]);

const projects = inject("projects");
</script>
