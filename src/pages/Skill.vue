<template>
  <!-- Skills -->
  <section id="skills" class="mt-14" data-aos="fade-up">
    <div class="mb-6 flex items-center justify-between">
      <div>
        <p class="text-sm uppercase tracking-[0.25em] text-gray-400 dark:text-slate-500">
          Skills
        </p>
        <h3 class="mt-2 text-3xl font-semibold text-gray-900 dark:text-white">
          Tools I ship with
        </h3>
      </div>
      <span
        class="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400"
      >
        Full Stack
      </span>
    </div>
    <div class="grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
      <div
        v-for="skill in skills"
        :key="skill.title"
        class="rounded-xl border border-gray-100 bg-gray-50 p-5 dark:border-slate-800 dark:bg-slate-800/60"
        data-aos="fade-up"
      >
        <p class="text-xs uppercase tracking-[0.2em] text-gray-400 dark:text-slate-500">
          {{ skill.title }}
        </p>
        <p class="mt-3 text-sm text-gray-600 dark:text-slate-300">{{ skill.items }}</p>
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
