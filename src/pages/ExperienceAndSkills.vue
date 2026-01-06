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

    <div class="grid gap-6 lg:grid-cols-3">
      <router-link
        v-for="(project, idx) in projects"
        :key="project.id"
        :to="{ name : 'project' , params : {id : project.id} }"
        class="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-xl shadow-indigo-950/30 transition hover:-translate-y-1 hover:border-white/20 block"
        :data-aos="'fade-up'"
        :data-aos-delay="180 + idx * 80"
      >
        <div
          class="absolute inset-0 bg-linear-to-br from-white/5 via-transparent to-indigo-600/10 opacity-0 transition group-hover:opacity-100"
        />

        <div class="relative flex h-full flex-col gap-4">
          <div
            class="h-36 rounded-2xl bg-linear-to-br from-blue-600/50 via-indigo-600/40 to-slate-800/60 shadow-inner shadow-black/40"
            data-aos="zoom-in"
            :data-aos-delay="200 + idx * 60"
          />

          <h4 class="text-xl font-semibold text-white">
            {{ project.title }}
          </h4>
          <p class="text-sm text-slate-200/80">
            {{ project.description }}
          </p>

          <div
            class="mt-auto inline-flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-100/80"
          >
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="rounded-full bg-white/5 px-3 py-1"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </router-link>
    </div>
  </section>

  <!-- Experience -->
  <section id="experience" class="mt-14" data-aos="fade-in" data-aos-delay="400">
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

  <Skill data-aos="fade-up" data-aos-delay="900" />
</template>
<script setup>
import { inject, ref } from "vue";


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


const projects = inject('projects')
</script>
