<template lang="">
  <!-- Skills -->
  <section
    id="skills"
    class="mt-14"
    data-aos="fade-up"
    data-aos-delay="400"
  >
    <div
      class="mb-6 flex items-center justify-between"
      data-aos="fade-down"
      data-aos-delay="420"
    >
      <div>
        <p class="text-sm uppercase tracking-[0.25em] text-blue-100/60">
          Skills
        </p>
        <h3 class="mt-2 text-3xl font-semibold text-white">
          Tools I ship with
        </h3>
      </div>
      <span
        class="rounded-full bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200/70"
        >Full Stack</span
      >
    </div>
    <div class="grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
      <div
        v-for="(skill, i) in skills"
        :key="skill.title"
        class="rounded-2xl border border-white/5 bg-white/5 p-5 shadow-sm shadow-slate-950/30"
        :data-aos="'fade-up'"
        :data-aos-delay="440 + i * 70"
      >
        <p class="text-xs uppercase tracking-[0.2em] text-blue-100/60">
          {{ skill.title }}
        </p>
        <p class="mt-3 text-sm text-slate-200/80">{{ skill.items }}</p>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue';

const skills = ref([
  {
    title: "Frontend",
    items: "Vue 3, Composition API, Vue Router, Pinia, Vite, Blade, Inertia.js",
  },
  {
    title: "Backend",
    items: "Laravel, RESTful APIs, Sanctum, authentication & validation, Eloquent ORM",
  },
  {
    title: "Databases",
    items: "PostgreSQL, MySQL, migrations, query optimization",
  },
  {
    title: "Styling",
    items: "Tailwind CSS, component systems, dark mode, motion",
  },
  {
    title: "Quality",
    items: "Testing (Vitest, Playwright), Lighthouse, a11y, linting, code review",
  },
  {
    title: "Integration",
    items: "API integration, OAuth, third-party services (Mail, S3, Pusher)",
  },
  {
    title: "Performance",
    items: "Bundle awareness, lazy loading, caching, queue jobs, image optimization",
  },
  {
    title: "Collaboration",
    items: "Figma handoff, Git/GitHub, Jira/Notion, async updates, code reviews",
  },
]);
</script>
