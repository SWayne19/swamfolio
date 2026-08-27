<template>
  <section id="skills" class="mt-12 sm:mt-20" data-aos="fade-up">
    <div class="mb-8 flex items-center justify-between">
      <div>
        <p class="text-[11px] font-semibold uppercase tracking-widest text-gray-600 dark:text-slate-500">Skills</p>
        <h3 class="mt-1.5 text-xl font-extrabold tracking-tight text-gray-900 sm:text-2xl md:text-3xl dark:text-white">
          Tools I ship with
        </h3>
      </div>
      <span
        class="rounded-lg bg-gray-100 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-slate-400"
      >
        Full Stack
      </span>
    </div>

    <div class="glass-card overflow-hidden p-5 sm:p-6">
      <div class="ticker-track">
        <span
          v-for="tool in [...tools, ...tools]"
          :key="tool + Math.random()"
          class="mx-3 inline-flex shrink-0 items-center rounded-lg bg-gray-100 px-4 py-2 text-sm font-semibold tracking-wide text-gray-700 sm:mx-4 sm:px-5 sm:py-2.5 sm:text-base dark:bg-slate-800 dark:text-slate-300"
        >
          {{ tool }}
        </span>
      </div>
    </div>
  </section>
</template>

<script setup>
const tools = [
  "HTML",
  "CSS",
  "JavaScript",
  "PHP",
  "Tailwind",
  "Bootstrap",
  "Vue",
  "Inertia",
  "Laravel",
  "MySQL",
  "PostgreSQL",
  "Git",
  "GitHub",
];
</script>
