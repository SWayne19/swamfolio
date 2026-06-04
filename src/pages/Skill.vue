<template>
  <section id="skills" class="mt-16" data-aos="fade-up">
    <div class="mb-6 flex items-center justify-between">
      <div>
        <p class="text-xs font-medium uppercase tracking-wider text-gray-400 dark:text-slate-500">Skills</p>
        <h3 class="mt-1 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
          Tools I ship with
        </h3>
      </div>
      <span
        class="rounded-md bg-gray-50 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-gray-500 dark:bg-slate-800 dark:text-slate-400"
      >
        Full Stack
      </span>
    </div>
    <div class="grid gap-3 sm:grid-cols-2">
      <div
        v-for="skill in skills"
        :key="skill.title"
        class="rounded-xl border border-gray-200/80 bg-white shadow-sm p-5 dark:border-slate-800 dark:bg-slate-900/60"
        data-aos="fade-up"
      >
        <p class="text-xs font-medium uppercase tracking-wider text-gray-400 dark:text-slate-500">
          {{ skill.title }}
        </p>
        <p class="mt-2 text-sm text-gray-600 dark:text-slate-300">{{ skill.items }}</p>
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
