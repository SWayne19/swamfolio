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
        <p class="mt-2.5 text-sm leading-relaxed text-gray-600 dark:text-slate-300">{{ skill.items }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const skills = ref([
  { title: "Frontend", items: "Vue 3, Composition API, Vue Router, Pinia, Vite, Blade, Inertia.js" },
  { title: "Backend", items: "Laravel, RESTful APIs, Sanctum, authentication & validation, Eloquent ORM" },
  { title: "Databases", items: "PostgreSQL, MySQL, migrations, query optimization" },
  { title: "Styling", items: "Tailwind CSS, component systems, dark mode, motion" },
  { title: "Quality", items: "Testing (Vitest, Playwright), Lighthouse, a11y, linting, code review" },
  { title: "Integration", items: "API integration, OAuth, third-party services (Mail, S3, Pusher)" },
  { title: "Performance", items: "Bundle awareness, lazy loading, caching, queue jobs, image optimization" },
  { title: "Collaboration", items: "Figma handoff, Git/GitHub, Jira/Notion, async updates, code reviews" },
]);
</script>
