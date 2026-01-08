<template>
  <div class="min-h-screen relative overflow-hidden">
    <div
      class="tech-bg pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div class="tech-grid"></div>
      <div class="tech-glow glow-1"></div>
      <div class="tech-glow glow-2"></div>
      <div class="scan-lines"></div>
    </div>

    <div class="mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
      <!-- Navbar / Header -->
      <header
        ref="headerRef"
        class="mb-[100px] flex flex-col items-center justify-center gap-6"
      >
        <!-- Profile -->
        <div class="flex flex-col items-center gap-4">
          <img
            src="/src/assets/images/swampyaepaing.jpg"
            alt="Profile"
            class="h-52 w-52 rounded-full object-cover ring-4 ring-slate-800/50 shadow-lg shadow-blue-900/30"
          />

          <div class="text-center">
            <h1 class="text-4xl font-semibold text-slate-50">
              Swam Pyae Paing
            </h1>
            <p class="mt-2 text-md font-medium text-blue-200/80">
              Junior Web Developer
            </p>
          </div>
        </div>

        <!-- Navigation -->
        <nav
          ref="navRef"
          class="flex flex-wrap items-center justify-center gap-6 text-lg text-slate-200/80 transition-all"
        >
          <RouterLink
            :to="{ name: 'home' }"
            class="hover:text-white transition"
            active-class="text-white font-medium"
          >
            Home
          </RouterLink>
          <RouterLink
            :to="{ name: 'about' }"
            class="hover:text-white transition"
            active-class="text-white font-medium"
          >
            About
          </RouterLink>
          <RouterLink
            :to="{ name: 'experienceAndSkills' }"
            class="hover:text-white transition"
            active-class="text-white font-medium"
          >
            Experiences
          </RouterLink>
        </nav>
      </header>

      <!-- Page Content -->
      <router-view />
    </div>

    <!-- Footer -->
    <footer class="border-t border-white/5 py-8">
      <div class="mx-auto max-w-6xl px-4 text-center text-sm text-slate-400/60">
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
      "A modern analytics dashboard designed for business insights with real-time metrics, filters, and responsive charts.",
    tags: ["Vue 3", "Tailwind", "Charts", "Dashboard"],

    overview: {
      goal: "Help teams visualize KPIs and track performance through clean, interactive dashboards.",
      highlights: [
        "Real-time metric updates",
        "Dark mode & responsive layout",
        "Reusable chart components",
      ],
      challenges:
        "Managing component reactivity and keeping chart performance smooth.",
      outcome: "Improved data visibility and faster decision-making for users.",
    },

    frontend: {
      stack: ["Vue 3", "Tailwind CSS", "Vue Router", "Chart.js"],
      architecture: [
        "Component-based layout",
        "Composable chart hooks",
        "Centralized state handling",
      ],
      features: [
        "Dynamic filters and date ranges",
        "Animated stat cards",
        "Accessible color contrast",
        "Skeleton loaders",
      ],
      ui: "Glassmorphism cards, gradient accents, subtle hover animations.",
    },

    backend: {
      stack: ["Laravel 10", "REST API", "MySQL"],
      features: [
        "KPI data aggregation",
        "Token-based authentication",
        "API resource transformers",
      ],
      database: ["Users", "Metrics", "Metric_logs"],
      security: "Sanctum authentication with role-based access.",
    },
  },

  {
    id: 2,
    title: "Team Kanban",
    description:
      "A collaborative kanban board for managing tasks with drag-and-drop and real-time updates.",
    tags: ["Vue", "Drag & Drop", "Productivity"],

    overview: {
      goal: "Provide teams with a simple, intuitive way to manage tasks and workflows.",
      highlights: [
        "Drag-and-drop columns",
        "Keyboard-friendly interactions",
        "Team collaboration features",
      ],
      challenges: "Ensuring state consistency during drag operations.",
      outcome:
        "Boosted team productivity and reduced task management overhead.",
    },

    frontend: {
      stack: ["Vue 3", "Tailwind CSS", "Vue Router", "Vue Draggable"],
      architecture: [
        "Column-based board system",
        "Reusable task cards",
        "Optimistic UI updates",
      ],
      features: [
        "Drag & drop tasks",
        "Inline task editing",
        "Task priority labels",
        "Smooth micro-interactions",
      ],
      ui: "Minimalist layout with focus-based highlights and motion feedback.",
    },

    backend: {
      stack: ["Laravel", "REST API", "MySQL"],
      features: [
        "Task CRUD operations",
        "Board and column management",
        "User collaboration",
      ],
      database: ["Boards", "Columns", "Tasks", "Users"],
      security: "Role-based permissions using Spatie.",
    },
  },

  {
    id: 3,
    title: "Landing Refresh",
    description:
      "A conversion-focused marketing landing page optimized for speed, SEO, and mobile users.",
    tags: ["SEO", "Animation", "Tailwind", "Vite"],

    overview: {
      goal: "Increase user engagement and conversion rates through modern UI and optimized UX.",
      highlights: [
        "Fast page load",
        "Scroll-based animations",
        "SEO best practices",
      ],
      challenges: "Balancing animations with performance and accessibility.",
      outcome: "Improved conversion rate and reduced bounce rate.",
    },

    frontend: {
      stack: ["Vue 3", "Vite", "Tailwind CSS"],
      architecture: [
        "Section-based layout",
        "Reusable CTA components",
        "Animation composables",
      ],
      features: [
        "Scroll-triggered animations",
        "Responsive typography",
        "Optimized images",
        "Dark/light contrast tuning",
      ],
      ui: "Bold typography, soft gradients, and strong visual hierarchy.",
    },

    backend: {
      stack: ["Laravel", "Form Handling", "MySQL"],
      features: [
        "Contact form submission",
        "Email notifications",
        "Admin lead dashboard",
      ],
      database: ["Leads", "Contact_messages"],
      security: "Form validation and spam protection.",
    },
  },
]);

provide("projects", projects);
</script>

<style>

.tech-bg {
  background: radial-gradient(circle at top, #020617 0%, #020617 100%);
}

/* Grid */
.tech-grid {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(
      rgba(99, 102, 241, 0.08) 1px,
      transparent 1px
    ),
    linear-gradient(90deg, rgba(99, 102, 241, 0.08) 1px, transparent 1px);
  background-size: 60px 60px;
  animation: gridMove 30s linear infinite;
  mask-image: radial-gradient(circle at center, black 45%, transparent 80%);
}

@keyframes gridMove {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(60px);
  }
}

/* Glow orbs */
.tech-glow {
  position: absolute;
  width: 480px;
  height: 480px;
  border-radius: 50%;
  filter: blur(160px);
  opacity: 0.35;
  animation: floatGlow 20s ease-in-out infinite alternate;
}

.glow-1 {
  background: #3b82f6;
  top: -120px;
  left: -120px;
}

.glow-2 {
  background: #22d3ee;
  bottom: -160px;
  right: -120px;
  animation-delay: 4s;
}

@keyframes floatGlow {
  from {
    transform: translate(0, 0);
  }
  to {
    transform: translate(60px, 40px);
  }
}

/* Scan lines */
.scan-lines {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(255, 255, 255, 0.03) 50%,
    transparent 100%
  );
  background-size: 100% 6px;
  animation: scanMove 8s linear infinite;
  opacity: 0.25;
}

@keyframes scanMove {
  from {
    background-position-y: 0;
  }
  to {
    background-position-y: 100%;
  }
}
</style>
