<template>
  <section id="skills" class="mt-12 sm:mt-20" data-aos="fade-up">
    <div class="mb-8 flex items-center justify-between">
      <div>
        <p class="text-[11px] font-semibold uppercase tracking-widest text-gray-400 dark:text-slate-500">Skills</p>
        <h3 class="mt-1.5 text-xl font-extrabold tracking-tight text-gray-900 sm:text-2xl md:text-3xl dark:text-white">
          Tools I ship with
        </h3>
      </div>
      <span
        class="rounded-lg bg-gray-100 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-gray-500 dark:bg-slate-800 dark:text-slate-400"
      >
        Full Stack
      </span>
    </div>
    <div class="grid gap-4 sm:grid-cols-2">
      <div
        v-for="skill in skills"
        :key="skill.title"
        class="glass-card p-5 sm:p-6"
        data-aos="fade-up"
      >
        <p class="text-[11px] font-semibold uppercase tracking-widest text-gray-400 dark:text-slate-500">
          {{ skill.title }}
        </p>
        <div class="mt-3 flex flex-wrap gap-2">
          <span
            v-for="item in skill.items"
            :key="item"
            class="rounded-md bg-gray-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-gray-500 dark:bg-slate-800 dark:text-slate-400"
          >
            {{ item }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const skills = ref([
  { title: "Frontend", items: ["Vue 3", "Composition API", "Vue Router", "Pinia", "Vite", "Blade", "Inertia.js"] },
  { title: "Backend", items: ["Laravel", "RESTful APIs", "Sanctum", "Auth & Validation", "Eloquent ORM"] },
  { title: "Databases", items: ["PostgreSQL", "MySQL", "Migrations", "Query Optimization"] },
  { title: "Styling", items: ["Tailwind CSS", "Component Systems", "Dark Mode", "Motion"] },
  { title: "Quality", items: ["Vitest", "Playwright", "Lighthouse", "A11y", "Linting", "Code Review"] },
  { title: "Integration", items: ["API Integration", "OAuth", "Mail", "S3", "Pusher"] },
  { title: "Performance", items: ["Bundle Awareness", "Lazy Loading", "Caching", "Queue Jobs", "Image Optimization"] },
  { title: "Collaboration", items: ["Figma Handoff", "Git / GitHub", "Jira / Notion", "Async Updates", "Code Reviews"] },
]);
</script>
