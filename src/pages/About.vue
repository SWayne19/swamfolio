<template>
  <!-- Stats -->
  <div class="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5">
    <div v-for="stat in stats" :key="stat.label" class="glass-card p-4 sm:p-6"
      :class="{ 'col-span-2 sm:col-span-1': stat.value.length > 5 }">
      <p class="break-words font-extrabold tracking-tight text-gray-900 dark:text-white"
        :class="stat.value.length > 5
          ? 'text-base sm:text-lg md:text-xl lg:text-2xl'
          : 'text-2xl sm:text-3xl md:text-4xl'">
        {{ stat.value }}
      </p>
      <p class="mt-2 text-[10px] font-semibold uppercase tracking-widest text-gray-600 sm:text-[11px] dark:text-slate-500">
        {{ stat.label }}
      </p>
    </div>
  </div>

  <!-- About -->
  <section id="about" class="mt-10 sm:mt-14">
    <div class="glass-card p-5 sm:p-7 md:p-8">
      <p class="text-[11px] font-semibold uppercase tracking-widest text-gray-600 dark:text-slate-500">About</p>
      <h3 class="mt-3 text-xl font-extrabold tracking-tight text-gray-900 sm:text-2xl md:text-3xl dark:text-white">
        Full Stack Vue &amp; Laravel developer
      </h3>
      <div class="mt-6 space-y-4 text-pretty text-sm leading-relaxed text-gray-500 sm:text-[15px] dark:text-slate-400">
        <p>
          I build web apps with
          <span class="font-semibold text-primary-600 dark:text-primary-400">Vue</span> and
          <span class="font-semibold text-primary-600 dark:text-primary-400">Laravel</span>, focusing on
          creating seamless, secure, and reliable user experiences from the database to the UI.
          I also integrate AI-assisted workflows into development -- writing smarter code, shipping faster, and learning
          continuously.
        </p>
      </div>
      <div class="mt-6 flex flex-wrap gap-2">
        <span v-for="chip in chips" :key="chip"
          class="rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-semibold text-gray-700 dark:bg-slate-800 dark:text-slate-300">
          {{ chip }}
        </span>
      </div>
    </div>
  </section>

  <Skill />

  <!-- Experience Section - Vertical Timeline -->
  <section id="experience" class="mt-12 sm:mt-20">
    <div class="mb-8">
      <p class="text-[11px] font-semibold uppercase tracking-widest text-gray-600 dark:text-slate-500">
        Experience
      </p>
      <h3 class="mt-1.5 text-xl font-extrabold tracking-tight text-gray-900 sm:text-2xl md:text-3xl dark:text-white">
        Career Milestones
      </h3>
    </div>

    <div class="relative">
      <!-- Vertical line -->
      <div
        class="absolute top-2 bottom-2 left-[11px] w-px bg-gradient-to-b from-primary-200 via-primary-300 to-primary-200 md:left-1/2 md:-translate-x-1/2 dark:from-slate-700 dark:via-slate-600 dark:to-slate-700">
      </div>

      <div class="flex flex-col gap-8 sm:gap-12">
        <div v-for="(experience, i) in [...experiences].reverse()" :key="experience.role" :class="[
          'group relative md:flex',
          i % 2 === 0 ? 'md:justify-start' : 'md:justify-end',
        ]">
          <!-- Timeline dot -->
          <div
            class="absolute left-[11px] top-1.5 z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-primary-500 shadow-md shadow-primary-500/15 ring-4 ring-[#f5f5f0] transition-transform group-hover:scale-125 md:left-1/2 dark:ring-[#141418]">
          </div>

          <!-- Card -->
          <div class="w-full pl-8 md:w-[calc(50%-2.5rem)] md:pl-0">
            <span
              class="mb-2 inline-block text-xs font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400">
              {{ experience.period }}
            </span>
            <div class="glass-card p-5 sm:p-6">
              <p class="text-[10px] font-semibold uppercase tracking-widest text-gray-600 dark:text-slate-500">
                {{ experience.company }}
              </p>
              <h4
                class="mt-2.5 text-base font-bold text-gray-900 transition-colors group-hover:text-primary-600 sm:text-lg dark:text-white dark:group-hover:text-primary-400">
                {{ experience.role }}
              </h4>
              <p class="mt-3 text-pretty text-sm leading-relaxed text-gray-700 dark:text-slate-400">
                {{ experience.highlights }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Skill from "./Skill.vue";

const chips = ["Vue 3", "Laravel", "Inertia.js", "PostgreSQL", "Tailwind CSS"];

const experiences = [
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
];

const stats = [
  { label: "Years Experience", value: "1+" },
  { label: "Projects Delivered", value: "6" },
  { label: "Current Role", value: "Mid Programmer" },
];
</script>