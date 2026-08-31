<template>
  <section id="skills" class="mt-12 sm:mt-20">
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
          v-for="(tool, index) in [...tools, ...tools]"
          :key="tool.name + index"
          class="mx-3 inline-flex shrink-0 items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-sm font-semibold tracking-wide text-gray-700 sm:mx-4 sm:px-5 sm:py-2.5 sm:text-base dark:bg-slate-800 dark:text-slate-300"
        >
          <img v-if="tool.icon" :src="tool.icon" :alt="tool.name" class="h-5 w-5 sm:h-6 sm:w-6" />
          {{ tool.name }}
        </span>
      </div>
    </div>
  </section>
</template>

<script setup>
const tools = [
  { name: "HTML", icon: "/images/tools/html.svg" },
  { name: "CSS", icon: "/images/tools/css.svg" },
  { name: "JavaScript", icon: "/images/tools/javascript.svg" },
  { name: "PHP", icon: "/images/tools/php.svg" },
  { name: "Tailwind", icon: "/images/tools/tailwind-css.svg" },
  { name: "Bootstrap", icon: "/images/tools/bootstrap.svg" },
  { name: "Vue", icon: "/images/tools/vue.svg" },
  { name: "Inertia", icon: "/images/tools/inertia.svg" },
  { name: "Laravel", icon: "/images/tools/laravel.svg" },
  { name: "MySQL", icon: "/images/tools/mysql.svg" },
  { name: "PostgreSQL", icon: "/images/tools/postgresql.svg" },
  { name: "Git", icon: "/images/tools/git.svg" },
];
</script>
