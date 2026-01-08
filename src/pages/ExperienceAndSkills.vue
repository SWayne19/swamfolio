<template lang="">
  <!-- Projects -->
  <section id="projects" class="mt-14" data-aos="fade-up" data-aos-delay="100">
    <div
      class="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between"
      data-aos="fade-down"
      data-aos-delay="120"
    >
      <div>
        <p class="text-sm uppercase tracking-[0.25em] text-blue-100/60">
          Projects
        </p>
        <h3 class="text-3xl font-semibold text-white">Selected work</h3>
      </div>
      <p class="text-sm text-slate-200/70">
        More details available on request.
      </p>
    </div>

    <div class="relative">
      <!-- Left Arrow -->
      <button
        @click="slideProjects('left')"
        class="absolute z-10 left-0 top-1/2 -translate-y-1/2 bg-slate-800/80 hover:bg-blue-700/80 border border-white/10 hover:border-blue-400/40 shadow-xl rounded-full w-11 h-11 flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 group"
        aria-label="Previous projects"
      >
        <svg
          class="w-6 h-6 text-white group-hover:text-blue-200 transition"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      <!-- Slide Show -->
      <div
        ref="carouselRef"
        class="flex overflow-x-auto no-scrollbar gap-6 py-2 px-2 scroll-smooth snap-x snap-mandatory"
        tabindex="0"
        style="scrollbar-width: none"
      >
        <router-link
          v-for="(project, idx) in projects"
          :key="project.id"
          :to="{ name: 'project', params: { id: project.id } }"
          class="group min-w-[310px] max-w-sm w-80 flex-shrink-0 overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-xl shadow-indigo-950/30 transition-all duration-300 ease-out hover:border-white/30 block snap-center"
          :data-aos="'fade-up'"
          :data-aos-delay="180 + idx * 80"
          style="will-change: transform, border-color, box-shadow"
        >
          <div
            class="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-indigo-600/10 opacity-0 transition-all duration-300 pointer-events-none"
          ></div>

          <div class="relative flex h-full flex-col gap-4">
            <!-- Image Box -->
            <div
              class="h-36 w-full flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600/60 via-indigo-600/40 to-slate-900/70 shadow-inner shadow-black/30 mb-2 transition-all duration-300 ease-out"
              data-aos="zoom-in"
              :data-aos-delay="200 + idx * 60"
              style="will-change: transform"
            >
              <template v-if="project.image">
                <img
                  :src="project.image"
                  :alt="`${project.title} cover`"
                  class="h-full w-full object-contain rounded-xl border border-white/5 shadow-lg shadow-indigo-900/30 bg-white/10 transition-all duration-300 ease-out group-hover:shadow-2xl group-hover:border-white/15"
                  style="will-change: box-shadow, border-color"
                />
              </template>
              <template v-else>
                <span
                  class="flex items-center justify-center h-14 w-14 rounded-xl bg-white/10 transition-all duration-300 ease-out group-hover:bg-white/15"
                >
                  <svg
                    class="h-8 w-8 text-blue-200/80 transition-all duration-300 ease-out group-hover:text-blue-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="1.5"
                  >
                    <rect
                      x="5"
                      y="5"
                      width="14"
                      height="14"
                      rx="4"
                      stroke="currentColor"
                      stroke-width="1.5"
                    />
                    <path
                      d="M8 12h8M12 8v8"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </template>
            </div>

            <h4
              class="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-blue-200"
            >
              {{ project.title }}
            </h4>
            <p
              class="text-sm text-slate-200/80 transition-colors duration-300 group-hover:text-blue-100/90"
            >
              {{ project.description }}
            </p>

            <div
              class="mt-auto inline-flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-100/80"
            >
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="rounded-full bg-white/5 px-3 py-1 transition-all duration-300 ease-out group-hover:bg-blue-600/10 group-hover:text-blue-200"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </router-link>
      </div>

      <!-- Right Arrow -->
      <button
        @click="slideProjects('right')"
        class="absolute z-10 right-0 top-1/2 -translate-y-1/2 bg-slate-800/80 hover:bg-blue-700/80 border border-white/10 hover:border-blue-400/40 shadow-xl rounded-full w-11 h-11 flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 group"
        aria-label="Next projects"
      >
        <svg
          class="w-6 h-6 text-white group-hover:text-blue-200 transition"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  </section>

  <!-- Experience -->
  <section
    id="experience"
    class="mt-14"
    data-aos="fade-in"
    data-aos-delay="200"
  >
    <div class="mb-6" data-aos="fade-down" data-aos-delay="420">
      <p class="text-sm uppercase tracking-[0.25em] text-blue-100/60">
        Experience
      </p>
      <h3 class="mt-2 text-3xl font-semibold text-white">
        Early-career milestones
      </h3>
    </div>
    <div class="space-y-4">
      <div
        v-for="(experience, i) in experiences"
        :key="experience.role"
        class="flex flex-col gap-2 rounded-2xl border border-white/10 bg-slate-900/60 p-5 shadow-lg shadow-slate-950/30 sm:flex-row sm:items-start sm:justify-between"
        :data-aos="'fade-up'"
        :data-aos-delay="450 + i * 120"
      >
        <div>
          <p class="text-sm uppercase tracking-[0.2em] text-blue-100/60">
            {{ experience.period }}
          </p>
          <h4 class="text-xl font-semibold text-white">
            {{ experience.role }}
          </h4>
          <p class="text-sm text-slate-200/75">{{ experience.company }}</p>
        </div>
        <p class="max-w-xl text-sm text-slate-200/80">
          {{ experience.highlights }}
        </p>
      </div>
    </div>
  </section>

  <Skill data-aos="fade-up" data-aos-delay="400" />
</template>
<script setup>
import { inject, ref } from "vue";
import Skill from "./Skill.vue";

const carouselRef = ref(null);

const slideProjects = (direction) => {
  if (!carouselRef.value) return;

  const container = carouselRef.value;

  const scrollAmount = 340; 

  container.scrollBy({
    left: direction === "right" ? scrollAmount : -scrollAmount,
    behavior: "smooth",
  });
};

const experiences = ref([
  {
    role: "Junior Frontend Developer",
    company: "Freelance / Personal",
    period: "2024 — Present",
    highlights:
      "Built Vue SPA prototypes, iterated with Tailwind, collaborated with designers on component libraries.",
  },
  {
    role: "Intern Frontend Developer",
    company: "Local Studio",
    period: "2023 — 2024",
    highlights:
      "Implemented UI tickets, improved accessibility on forms, and documented reusable patterns.",
  },
]);

const projects = inject("projects");
</script>
