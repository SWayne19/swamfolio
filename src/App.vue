<template>
  <div class="min-h-screen bg-slate-950 text-slate-50">
    <!-- Top gradient accents -->
    <div class="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        class="absolute left-10 top-[-200px] h-[420px] w-[420px] rounded-full bg-blue-500/30 blur-[180px]"
      />
      <div
        class="absolute right-[-120px] top-10 h-[420px] w-[420px] rounded-full bg-indigo-500/30 blur-[180px]"
      />
      <div
        class="absolute bottom-[-220px] left-1/3 h-[380px] w-[480px] rounded-full bg-cyan-400/20 blur-[160px]"
      />
    </div>

    <div class="mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
      <!-- Navbar -->
      <header
        ref="headerRef"
        class="mb-14 flex flex-col items-center justify-center gap-6 mb-[100px]"
      >
        <!-- Profile Section -->
        <div class="flex flex-col items-center gap-4">
          <!-- Circular Profile Picture -->
          <div class="relative">
            <img
              src="/src/assets/images/swampyaepaing.jpg"
              alt="Profile"
              class="h-52 w-52 rounded-full object-cover ring-4 ring-slate-800/50 shadow-lg shadow-blue-900/30"
            />
          </div>
          <!-- Name and Title -->
          <div class="text-center">
            <h1 class="text-4xl font-semibold text-slate-50">
              Swam Pyae Paing
            </h1>
            <p class="mt-2 text-md font-medium text-blue-200/80">
              Junior Web Developer
            </p>
          </div>
        </div>

        <!-- Navigation Links -->
        <nav
          ref="navRef"
          class="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-200/80 sm:gap-6 transition-all duration-300 ease-in-out will-change-[transform,opacity,background-color]"
        >
          <RouterLink
            :to="{ name: 'home' }"
            class="transition-all duration-200 ease-in-out hover:text-white text-lg"
            active-class="text-white font-medium"
          >
            Home
          </RouterLink>
          <RouterLink
            :to="{ name: 'about' }"
            class="transition-all duration-200 ease-in-out hover:text-white text-lg"
            active-class="text-white font-medium"
          >
            About
          </RouterLink>
          <RouterLink
            :to="{ name: 'experienceAndSkills' }"
            class="transition-all duration-200 ease-in-out hover:text-white text-lg"
            active-class="text-white font-medium"
          >
            Experiences
          </RouterLink>
        </nav>
      </header>

      <router-view></router-view>
    </div>

    <!-- Footer -->
    <footer class="mt-20 border-t border-white/5 py-8">
      <div
        class="mx-auto max-w-6xl px-4 text-center text-sm text-slate-400/60 sm:px-6 lg:px-8"
      >
        <p>swamfolio © {{ currentYear }}</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { provide, ref } from "vue";

const headerRef = ref(null);
const navRef = ref(null);
const currentYear = new Date().getFullYear();

const projects = ref([
  {
    id: 1,
    title: "Insight Dashboard",
    description:
      "Responsive analytics dashboard with Vue + Tailwind cards, filters, and chart-ready layouts.",
    tags: ["Vue", "Tailwind", "Charts-ready", "Dark mode"],
  },
  {
    id: 2,
    title: "Team Kanban",
    description:
      "Drag-and-drop kanban concepts with smooth micro-interactions and keyboard-friendly controls.",
    tags: ["Vue", "DnD UX", "Accessibility", "State mgmt"],
  },
  {
    id: 3,
    title: "Landing Refresh",
    description:
      "Conversion-focused landing page with gradients, scroll cues, and mobile-first typography.",
    tags: ["Vite", "Tailwind", "Animation", "SEO basics"],
  },
]);

provide("projects", projects);
</script>
