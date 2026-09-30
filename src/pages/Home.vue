<template>
  <div>
    <!-- ==================== HERO SECTION ==================== -->
    <section id="hero" class="relative flex min-h-[calc(100vh-3rem)] items-center">
      <div class="mx-auto w-full max-w-6xl px-5 py-4 sm:px-8 sm:py-6 lg:px-10">
        <div
          class="flex flex-col-reverse items-center gap-6 sm:gap-8 md:flex-row md:items-center md:justify-between md:gap-14">
          <!-- Text content -->
          <div class="flex flex-1 flex-col gap-5 text-center md:text-left">
            <p class="word-reveal text-base font-medium text-gray-800 sm:text-lg dark:text-slate-500">Hi, I'm</p>
            <h1
              class="text-5xl font-extrabold leading-[1.1] tracking-tight text-gray-900 sm:text-6xl md:text-7xl lg:text-8xl dark:text-white">
              <span class="word-reveal">Swam</span> <span class="word-reveal">Pyae</span> <span class="word-reveal">Paing</span>
            </h1>
            <p class="word-reveal text-xl font-medium text-gray-800 sm:text-2xl dark:text-slate-300" style="transition-delay: 0.1s">
              Building robust, scalable
              <span class="font-semibold text-primary-600 dark:text-primary-400">full stack</span>
              applications.
            </p>

            <div class="word-reveal flex flex-wrap items-center justify-center gap-3 pt-3 md:justify-start" style="transition-delay: 0.15s">
              <a href="#projects"
                class="inline-flex items-center gap-2 bg-primary-600 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-700">
                View Projects
                <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a href="#about"
                class="glass-card inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-gray-900 dark:text-slate-300">
                About Me
              </a>
            </div>
          </div>

          <!-- Profile photo -->
          <div class="shrink-0" data-parallax="0.06">
            <div class="relative h-40 w-40 rounded-full border-2 border-primary-500/30 p-1 sm:h-48 sm:w-48 md:h-56 md:w-56 lg:h-64 lg:w-64">
              <img src="/images/profile/profile.jpg" alt="Swam Pyae Paing"
                class="h-full w-full rounded-full border-4 border-white object-cover dark:border-slate-900" width="256"
                height="256" loading="eager" decoding="async" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== ABOUT SECTION ==================== -->
    <section id="about" class="relative py-24 sm:py-32">
      <div class="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <!-- Stats -->
        <div class="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5" data-reveal data-reveal-delay="100">
          <div v-for="stat in stats" :key="stat.label" class="glass-card p-4 sm:p-6"
            :class="{ 'col-span-2 sm:col-span-1': stat.value.length > 5 }">
            <p class="break-words font-extrabold tracking-tight text-gray-900 dark:text-white"
              :class="stat.value.length > 5
                ? 'text-lg sm:text-xl md:text-2xl lg:text-3xl'
                : 'text-3xl sm:text-4xl md:text-5xl'">
              {{ stat.value }}
            </p>
            <p
              class="mt-2 text-xs font-semibold uppercase tracking-widest text-gray-800 sm:text-sm dark:text-slate-500">
              {{ stat.label }}
            </p>
          </div>
        </div>

        <!-- Bio -->
        <div class="mt-10 sm:mt-14" data-reveal>
          <div class="glass-card p-5 sm:p-7 md:p-8">
            <p class="text-xs font-semibold uppercase tracking-widest text-gray-800 dark:text-slate-500">About</p>
            <h3
              class="mt-3 text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl md:text-4xl dark:text-white">
              Full Stack Vue &amp; Laravel developer
            </h3>
            <div
              class="mt-6 space-y-4 text-pretty text-base leading-relaxed text-gray-800 sm:text-lg dark:text-slate-400">
              <p>
                I build web apps with
                <span class="font-semibold text-primary-600 dark:text-primary-400">Vue</span> and
                <span class="font-semibold text-primary-600 dark:text-primary-400">Laravel</span>, focusing on
                creating seamless, secure, and reliable user experiences from the database to the UI.
                I also integrate AI-assisted workflows into development -- writing smarter code, shipping faster, and
                learning continuously.
              </p>
            </div>
            <div class="mt-6 flex flex-wrap gap-2">
              <span v-for="chip in chips" :key="chip"
                class="bg-gray-100 px-3 py-1.5 text-sm font-semibold text-gray-900 dark:bg-slate-800 dark:text-slate-300">
                {{ chip }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== SKILLS SECTION ==================== -->
    <section id="skills" class="relative py-20 sm:py-28">
      <div class="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <div class="mb-8 flex items-center justify-between" data-parallax="0.03">
          <div>
            <p class="text-xs font-semibold uppercase tracking-widest text-gray-900 dark:text-slate-500">Skills</p>
            <h3
              class="mt-1.5 text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl md:text-4xl dark:text-white">
              Tools I ship with
            </h3>
          </div>
          <span
            class="bg-gray-100 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-gray-900 dark:bg-slate-800 dark:text-slate-400">
            Full Stack
          </span>
        </div>

        <div class="glass-card overflow-hidden p-5 sm:p-6" data-reveal>
          <div class="ticker-track">
            <span v-for="(tool, index) in [...tools, ...tools]" :key="tool.name + index"
              class="mx-3 inline-flex shrink-0 items-center gap-2 bg-gray-100 px-4 py-2 text-base font-semibold tracking-wide text-gray-900 sm:mx-4 sm:px-5 sm:py-2.5 sm:text-lg dark:bg-slate-800 dark:text-slate-300">
              <img v-if="tool.icon" :src="tool.icon" :alt="tool.name" class="h-5 w-5 sm:h-6 sm:w-6" />
              {{ tool.name }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== EXPERIENCE SECTION ==================== -->
    <section id="experience" class="relative py-20 sm:py-28">
      <div class="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <div class="mb-8" data-parallax="0.03">
          <p class="text-xs font-semibold uppercase tracking-widest text-gray-900 dark:text-slate-500">
            Experience
          </p>
          <h3
            class="mt-1.5 text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl md:text-4xl dark:text-white">
            Career Milestones
          </h3>
        </div>

        <div class="relative">
          <!-- Vertical line -->
          <div
            class="absolute top-2 bottom-2 left-[11px] w-px bg-gradient-to-b from-primary-200 via-primary-300 to-primary-200 md:left-1/2 md:-translate-x-1/2 dark:from-slate-700 dark:via-slate-600 dark:to-slate-700">
          </div>

          <div class="flex flex-col gap-8 sm:gap-12">
            <div v-for="(experience, i) in [...experiences].reverse()" :key="experience.role"
              data-reveal
              :data-reveal-delay="i * 100"
              :class="[
                'group relative md:flex',
                i % 2 === 0 ? 'md:justify-start' : 'md:justify-end',
              ]">
              <!-- Timeline dot -->
              <div
                class="absolute left-[11px] top-1.5 z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-primary-500 ring-4 ring-[#f5f5f0] md:left-1/2 dark:ring-[#141418]">
              </div>

              <!-- Card -->
              <div class="w-full pl-8 md:w-[calc(50%-2.5rem)] md:pl-0">
                <span
                  class="mb-2 inline-block text-sm font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400">
                  {{ experience.period }}
                </span>
                <div class="glass-card p-5 sm:p-6">
                  <p class="text-xs font-semibold uppercase tracking-widest text-gray-900 dark:text-slate-500">
                    {{ experience.company }}
                  </p>
                  <h4
                    class="mt-2.5 text-lg font-bold text-gray-900 sm:text-xl dark:text-white">
                    {{ experience.role }}
                  </h4>
                  <p class="mt-3 text-pretty text-base leading-relaxed text-gray-900 dark:text-slate-400">
                    {{ experience.highlights }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== PROJECTS SECTION ==================== -->
    <section id="projects" class="relative py-20 sm:py-28">
      <div class="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <div class="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between" data-parallax="0.03">
          <div>
            <p class="text-xs font-semibold uppercase tracking-widest text-gray-900 dark:text-slate-500">
              Projects
            </p>
            <h3
              class="mt-1.5 text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl md:text-4xl dark:text-white">
              Selected work
            </h3>
          </div>
          <p class="text-base text-gray-800 dark:text-slate-400">
            {{ projects.length }} projects, full stack to static.
          </p>
        </div>

        <!-- Bento grid -->
        <div class="grid auto-rows-fr gap-2 md:grid-cols-3 md:gap-3" data-reveal>
          <router-link v-for="(project, i) in projects" :key="project.id"
            :to="{ name: 'project', params: { id: project.id } }"
            :class="[
              layouts[i % layouts.length].grid,
              layouts[i % layouts.length].minH,
              'group relative block overflow-hidden',
            ]">
            <!-- Background image with parallax -->
            <img v-if="project.image" :src="project.image" :alt="`${project.title} cover`"
              class="absolute inset-0 h-[110%] w-full object-cover"
              data-parallax-img
              loading="lazy" />
            <!-- No-image fallback -->
            <div v-else class="absolute inset-0 flex items-center justify-center bg-slate-800">
              <svg class="h-12 w-12 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                stroke-width="1.5">
                <rect x="5" y="5" width="14" height="14" rx="4" />
                <path d="M8 12h8M12 8v8" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>

            <!-- Gradient overlay -->
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/15 dark:from-black/95 dark:via-black/70 dark:to-black/30">
            </div>

            <!-- Text content overlay -->
            <div class="absolute inset-x-0 bottom-0 z-10 p-5">
              <h4 :class="layouts[i % layouts.length].title" class="font-bold text-white">
                {{ project.title }}
              </h4>
              <p :class="layouts[i % layouts.length].desc" class="mt-1.5 text-base leading-relaxed text-white/90">
                {{ project.description }}
              </p>
              <div class="mt-3 flex flex-wrap items-center gap-1.5">
                <span v-for="tag in project.tags" :key="tag"
                  class="bg-white/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white/90">
                  {{ tag }}
                </span>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </section>

    <!-- ==================== CONTACT SECTION ==================== -->
    <section id="contact" class="relative py-20 sm:py-28">
      <div class="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <!-- Section header -->
        <div class="mb-10 sm:mb-14">
          <div class="flex items-center gap-3">
            <p class="text-xs font-semibold uppercase tracking-widest text-primary-600 dark:text-primary-400">
              Contact
            </p>
            <span
              class="inline-flex items-center gap-1.5 bg-emerald-50 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
              <span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
              Open to work
            </span>
          </div>
          <h3
            class="mt-3 text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl md:text-4xl dark:text-white">
            Let's build something<br class="hidden sm:block" /> thoughtful together.
          </h3>
          <p class="mt-3 max-w-lg text-pretty text-base leading-relaxed text-gray-800 sm:text-lg dark:text-slate-400">
            I'm always interested in new opportunities, collaborations, and connecting with fellow developers.
            Feel free to reach out through any channel below.
          </p>
        </div>

        <!-- Contact cards grid — non-linear layout -->
        <div class="grid gap-4 sm:grid-cols-3" data-reveal>
          <!-- Email card — wide -->
          <a href="mailto:swampyae330@gmail.com"
            class="glass-card flex flex-col gap-4 p-5 sm:col-span-2 sm:p-6">
            <div
              class="flex h-10 w-10 items-center justify-center bg-primary-100/80 text-primary-600 dark:bg-primary-500/15 dark:text-primary-400">
              <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <rect x="4" y="6" width="16" height="12" rx="2" />
                <path d="m4 6 8 7 8-7" />
              </svg>
            </div>
            <div class="min-w-0">
              <p class="text-xs font-semibold uppercase tracking-widest text-gray-800 dark:text-slate-500">Email</p>
              <p class="mt-1 truncate text-base font-semibold text-gray-900 dark:text-white">swampyae330@gmail.com</p>
            </div>
          </a>

          <!-- Phone card -->
          <a href="tel:09422150195"
            class="glass-card flex flex-col gap-4 p-5 sm:p-6">
            <div
              class="flex h-10 w-10 items-center justify-center bg-primary-100/80 text-primary-600 dark:bg-primary-500/15 dark:text-primary-400">
              <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.13.9.36 1.76.67 2.6a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.84.31 1.7.54 2.6.67A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div>
              <p class="text-xs font-semibold uppercase tracking-widest text-gray-800 dark:text-slate-500">Phone</p>
              <p class="mt-1 text-base font-semibold text-gray-900 dark:text-white">09422150195</p>
            </div>
          </a>

          <!-- Location card -->
          <div class="glass-card flex flex-col gap-4 p-5 sm:p-6">
            <div
              class="flex h-10 w-10 items-center justify-center bg-primary-100/80 text-primary-600 dark:bg-primary-500/15 dark:text-primary-400">
              <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0 1 15 0Z" />
              </svg>
            </div>
            <div>
              <p class="text-xs font-semibold uppercase tracking-widest text-gray-800 dark:text-slate-500">Location
              </p>
              <p class="mt-1 text-base font-semibold text-gray-900 dark:text-white">Yangon, Myanmar</p>
            </div>
            <p class="mt-auto text-sm text-gray-800 dark:text-slate-500">UTC +6:30</p>
          </div>

          <!-- Response time card — wide -->
          <div class="glass-card flex flex-col gap-4 p-5 sm:col-span-2 sm:p-6">
            <div
              class="flex h-10 w-10 items-center justify-center bg-primary-100/80 text-primary-600 dark:bg-primary-500/15 dark:text-primary-400">
              <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <div>
              <p class="text-xs font-semibold uppercase tracking-widest text-gray-800 dark:text-slate-500">Response
                Time</p>
              <p class="mt-1 text-base font-semibold text-gray-900 dark:text-white">Within 24 hours</p>
            </div>
            <p class="mt-auto text-sm text-gray-800 dark:text-slate-500">Usually faster</p>
          </div>
        </div>

        <!-- Social links + CTA row -->
        <div class="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between" data-reveal data-reveal-delay="200">
          <!-- Social icons -->
          <div class="flex items-center gap-3">
            <span class="mr-1 text-sm font-semibold uppercase tracking-widest text-gray-800 dark:text-slate-600">Connect</span>
            <a href="https://www.linkedin.com/in/swam-pyae-88aa96369" target="_blank" rel="noreferrer"
              class="flex h-10 w-10 items-center justify-center border border-gray-200/60 bg-white/60 text-gray-800 transition-colors hover:bg-[#0A66C2] hover:text-white dark:border-slate-700/60 dark:bg-slate-800/60 dark:text-slate-400">
              <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.23 8.08h4.56V24H.23zM8.59 8.08h4.37v2.16h.06c.61-1.16 2.1-2.38 4.32-2.38 4.62 0 5.47 3.04 5.47 6.99V24h-4.56v-8.22c0-1.96-.03-4.48-2.73-4.48-2.73 0-3.15 2.13-3.15 4.33V24H8.59z" />
              </svg>
            </a>
            <a href="https://github.com/SWayne19" target="_blank" rel="noreferrer"
              class="flex h-10 w-10 items-center justify-center border border-gray-200/60 bg-white/60 text-gray-800 transition-colors hover:bg-gray-800 hover:text-white dark:border-slate-700/60 dark:bg-slate-800/60 dark:text-slate-400">
              <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 2C6.48 2 2 6.58 2 12.26c0 4.47 2.87 8.26 6.84 9.59.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.36-3.37-1.36-.46-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1.01.07 1.54 1.05 1.54 1.05.9 1.57 2.37 1.12 2.95.86.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.15-4.56-5.14 0-1.14.39-2.07 1.03-2.8-.1-.26-.45-1.32.1-2.74 0 0 .84-.27 2.75 1.03A9.25 9.25 0 0 1 12 6.58a9.23 9.23 0 0 1 2.5.34c1.9-1.3 2.74-1.03 2.74-1.03.55 1.42.2 2.48.1 2.74.64.73 1.03 1.66 1.03 2.8 0 4-2.34 4.87-4.57 5.13.36.32.68.95.68 1.92 0 1.39-.01 2.52-.01 2.87 0 .26.18.58.69.48C19.14 20.52 22 16.73 22 12.26 22 6.58 17.52 2 12 2z" />
              </svg>
            </a>
          </div>

          <!-- Email CTA -->
          <a href="mailto:swampyae330@gmail.com"
            class="inline-flex items-center gap-2.5 bg-primary-600 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-700">
            <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <rect x="4" y="6" width="16" height="12" rx="2" />
              <path d="m4 6 8 7 8-7" />
            </svg>
            Get in touch
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { inject, nextTick, onMounted } from "vue";
import { useScrollAnimation } from "../composables/useScrollAnimation";

const projects = inject("projects");

useScrollAnimation();

onMounted(() => {
  nextTick(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute("href"));
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });

    // Staggered hero word reveal
    document.querySelectorAll(".word-reveal").forEach((el, i) => {
      setTimeout(() => {
        el.classList.add("visible");
      }, 200 + i * 120);
    });
  });
});

const chips = ["Vue 3", "Laravel", "Inertia.js", "PostgreSQL", "Tailwind CSS"];

const stats = [
  { label: "Years Experience", value: "1+" },
  { label: "Projects Delivered", value: "6" },
  { label: "Current Role", value: "Mid Programmer" },
];

const experiences = [
  {
    role: "Intern Programmer",
    company: "KMD Group of Company Limited (SoftComm Technology)",
    period: "Jan -- Feb 2025",
    highlights:
      "Assisted with frontend development tasks, participated in team meetings, and supported ongoing project implementations as an intern.",
  },
  {
    role: "Trainee Programmer",
    company: "KMD Group of Company Limited (SoftComm Technology)",
    period: "Mar -- Apr 2025",
    highlights:
      "Received hands-on training in Vue.js and modern JavaScript, contributed bug fixes, and collaborated with senior developers as a trainee.",
  },
  {
    role: "Junior Programmer",
    company: "KMD Group of Company Limited (SoftComm Technology)",
    period: "May 2025 -- May 2026",
    highlights:
      "Promoted to Junior Programmer; actively developing and maintaining web applications, building UI components, and optimizing user experiences alongside a cross-functional team.",
  },
  {
    role: "Mid Programmer",
    company: "KMD Group of Company Limited (SoftComm Technology)",
    period: "May 2026 -- Present",
    highlights:
      "Promoted to Mid Programmer; leading the KMD Inventory Project with finance modules, audit trails, role-based access, and real-time dashboard analytics.",
  },
];

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

const layouts = [
  {
    grid: "md:col-span-2 md:row-span-2",
    minH: "min-h-64 md:min-h-0",
    title: "text-xl sm:text-2xl",
    desc: "line-clamp-3",
  },
  {
    grid: "md:col-span-1",
    minH: "min-h-56",
    title: "text-lg",
    desc: "line-clamp-2",
  },
  {
    grid: "md:col-span-1 md:row-span-2",
    minH: "min-h-64 md:min-h-0",
    title: "text-lg",
    desc: "line-clamp-3",
  },
  {
    grid: "md:col-span-1",
    minH: "min-h-52",
    title: "text-lg",
    desc: "line-clamp-2",
  },
  {
    grid: "md:col-span-1",
    minH: "min-h-56",
    title: "text-lg",
    desc: "line-clamp-2",
  },
];
</script>
