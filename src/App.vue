<template>
  <div
    class="min-h-screen bg-gray-50 text-gray-900 transition-colors duration-300 dark:bg-slate-950 dark:text-gray-100"
  >
    <div class="mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
      <!-- Header -->
      <header class="mb-20 flex flex-col items-center justify-center gap-6">
        <!-- Profile -->
        <div class="flex flex-col items-center gap-4">
          <img
            src="/src/assets/images/swampyaepaing.jpg"
            alt="Profile"
            class="h-44 w-44 rounded-full object-cover ring-4 ring-gray-200 shadow-lg dark:ring-slate-700 dark:shadow-blue-900/20"
          />
          <div class="text-center">
            <h1 class="text-4xl font-semibold text-gray-900 dark:text-white">
              Swam Pyae Paing
            </h1>
            <p class="mt-3 text-md font-medium text-primary-600 dark:text-primary-300">
              Web Developer
            </p>
          </div>
        </div>

        <!-- Navigation -->
        <nav
          class="flex flex-wrap items-center justify-center gap-6 text-lg text-gray-500 dark:text-slate-400"
        >
          <RouterLink
            :to="{ name: 'home' }"
            class="transition hover:text-gray-900 dark:hover:text-white"
            active-class="text-gray-900 dark:text-white font-medium"
          >
            Home
          </RouterLink>
          <RouterLink
            :to="{ name: 'about' }"
            class="transition hover:text-gray-900 dark:hover:text-white"
            active-class="text-gray-900 dark:text-white font-medium"
          >
            About
          </RouterLink>
          <RouterLink
            :to="{ name: 'experienceAndSkills' }"
            class="transition hover:text-gray-900 dark:hover:text-white"
            active-class="text-gray-900 dark:text-white font-medium"
          >
            Experiences
          </RouterLink>

          <!-- Theme Toggle -->
          <button
            @click="toggleTheme"
            class="ml-2 flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm transition hover:bg-gray-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
            :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          >
            <!-- Sun icon (shown in dark mode) -->
            <svg
              v-if="isDark"
              class="h-5 w-5"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
            <!-- Moon icon (shown in light mode) -->
            <svg
              v-else
              class="h-5 w-5"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </button>
        </nav>
      </header>

      <!-- Page Content -->
      <router-view />
    </div>

    <!-- Scroll To Top Button -->
    <button
      v-show="showScrollTop"
      @click="scrollToTop"
      class="fixed right-7 bottom-7 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-lg transition-all hover:bg-gray-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 sm:right-5 sm:bottom-5"
      :class="showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'"
      aria-label="Scroll to top"
    >
      <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>

    <!-- Footer -->
    <footer class="border-t border-gray-200 py-8 dark:border-slate-800">
      <div class="mx-auto max-w-6xl px-4 text-center text-sm text-gray-400 dark:text-slate-500">
        <p>swamfolio &copy; {{ currentYear }}</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, provide, ref } from "vue";

const currentYear = new Date().getFullYear();

// Dark mode
const isDark = ref(document.documentElement.classList.contains("dark"));

const toggleTheme = () => {
  isDark.value = !isDark.value;
  document.documentElement.classList.toggle("dark", isDark.value);
  localStorage.setItem("theme", isDark.value ? "dark" : "light");
};

// Scroll to top
const showScrollTop = ref(false);

const handleScroll = () => {
  showScrollTop.value = window.scrollY > 200;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const projects = ref([
  {
    id: 1,
    title: "Cyclist",
    description:
      "Cyclist is a static website project for showcasing and selling sport bicycles, featuring a clean, responsive design and easy product browsing.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/images/cyclist.png",
    url: "https://cyclist-rho.vercel.app/",
    overview: {
      goal: "Create a modern, visually attractive landing page for bicycles using only static HTML, CSS, and JavaScript.",
      highlights: [
        "Fully static site - no front-end frameworks or backend",
        "Responsive grid layout and CSS-only tabs for product details",
        "Optimized, lightweight images and minimal JS for quick page loads",
      ],
      challenges:
        "Delivering interactivity and a polished user experience without any framework or backend features.",
      outcome:
        "Elegant and fast-loading website, easy to host or deploy on any platform, providing clear product discovery for visitors.",
    },
    frontend: {
      stack: ["HTML", "CSS", "JavaScript"],
      architecture: [
        "Responsive layout using flex and grid",
        "Organized HTML structure with reusable sections",
        "Separation of concerns for styles and scripts",
      ],
      features: [
        "Clean landing page design",
        "Responsive product grid",
        "Fast page load with minimal JS",
      ],
      ui: "Modern, clean look with sports-inspired visuals and smooth CSS interactions.",
    },
    backend: {
      stack: [],
      features: ["No backend implemented - static frontend only"],
      database: [],
      security: "",
    },
  },
  {
    id: 2,
    title: "TailNet",
    description:
      "A modern, responsive landing page demo for an internet provider—built with Tailwind CSS and enhanced with Vue for interactive features like plan selection and real-time FAQs.",
    tags: ["Tailwind", "Vue", "Interactive", "Landing Page"],
    image: "/images/tailnet.png",
    url: "https://tail-net.vercel.app/",
    overview: {
      goal: "Create an engaging, interactive landing site for TailNet internet services using Tailwind CSS for styling and Vue for user-driven elements.",
      highlights: [
        "Responsive, utility-class-driven layout for all devices",
        "Vue-powered interactive pricing selector for service packages",
        "Collapsible FAQs for quick answers",
        "Animated transitions and hover interactions with Tailwind",
      ],
      challenges:
        "Blending minimal static content with Vue-based reactivity while keeping load times fast — achieving interactivity without backend complexity.",
      outcome:
        "A visually polished, interactive front page that lets users compare plans, open FAQs, and quickly access CTA areas, showcasing what can be done with Tailwind and Vue.",
    },
    frontend: {
      stack: ["HTML", "Tailwind CSS", "Vue 3", "Composition API"],
      architecture: [
        "Single page layout split into hero, plans, and FAQ sections",
        "Vue components for pricing cards and collapsible FAQ accordions",
        "Tailwind utility classes for quick styling, transitions, and effects",
        "No backend — all interactivity handled on the client side",
      ],
      features: [
        "Interactive plan selection with price highlight (Vue reactive state)",
        "FAQ section using accordion (Vue v-for, v-show/toggle)",
        "Hover, focus, and transition effects for calls-to-action and cards",
        "Mobile-first responsive design flows using Tailwind flex/grid",
      ],
      ui: "Bright, trustworthy look with Tailwind gradients, subtle motion, and clear Vue-driven interactivity: hover glows, animated accordions, and context-driven plan details.",
    },
    backend: {
      stack: [],
      features: [
        "No backend — all data and behavior handled on the frontend via Vue reactive state.",
      ],
      database: [],
      security: "",
    },
  },
  {
    id: 3,
    title: "WebLibra",
    description:
      "A full-featured library management system built with Laravel on the server side and styled using Bootstrap CSS.",
    tags: ["Bootstrap", "Library Management", "Laravel", "PostgresSQL"],
    image: "/images/weblibra.png",
    url: "",
    overview: {
      goal: "Streamline and digitize all aspects of library management including book inventory, member tracking, and loan transactions.",
      highlights: [
        "Intuitive book catalog and search",
        "Role-based access for admins and members",
        "Fast, responsive Bootstrap UI",
      ],
      challenges:
        "Ensuring smooth integration of all features with robust backend logic while keeping the interface user-friendly.",
      outcome:
        "Modern, maintainable library software that reduces manual work and improves accessibility for both staff and patrons.",
    },
    frontend: {
      stack: ["Blade Templating", "Bootstrap CSS", "JavaScript"],
      architecture: [
        "Blade-driven server-rendered views",
        "Reusable Bootstrap components",
        "Clear separation of UI and server logic",
      ],
      features: [
        "Book listings and filtering",
        "Member login and registration",
        "Responsive layouts for desktop and mobile",
        "Admin dashboard with statistics and controls",
      ],
      ui: "Clean, familiar Bootstrap design with focus on usability and clarity.",
    },
    backend: {
      stack: ["Laravel", "PostgresSQL"],
      features: [
        "Book, member, and Stock management",
        "Role-based permissions",
        "CRUD for all library assets",
        "Search and filtering APIs",
      ],
      database: ["Books", "Users", "Balances", "Borrows", "Returns"],
      security: "Authentication, Authorization , Input validation.",
    },
  },
  {
    id: 4,
    title: "ForumZone",
    description:
      "A community-driven forum platform built with Vue, Laravel, and PostgreSQL, supporting rich discussions and user engagement.",
    tags: ["Vue", "Laravel", "Postgres", "Forum", "Comments"],
    image: "/images/forumzone.png",
    url: "",
    overview: {
      goal: "Create a modern, easy-to-use forum where users can create threads, share ideas, and participate in discussions.",
      highlights: [
        "Dynamic thread and category organization",
        "User-focused, interactive commenting",
        "Fast, mobile-friendly Vue SPA frontend",
      ],
      challenges:
        "Implementing scalable real-time discussions while maintaining robust data relationships between users, threads, comments, and categories.",
      outcome:
        "A maintainable and extensible forum platform enabling community interaction, with a clean and intuitive UI.",
    },
    frontend: {
      stack: ["Vue 3", "JavaScript", "Tailwind CSS"],
      architecture: [
        "Vue SPA for seamless in-app navigation",
        "Component-driven UI design",
        "Dynamic thread and comment rendering",
      ],
      features: [
        "User registration, authentication, and profiles",
        "Create, view, and reply to threads",
        "Organize discussions by category",
        "Live updating conversations",
      ],
      ui: "Modern, minimal design with category and thread navigation, responsive layouts for desktop and mobile.",
    },
    backend: {
      stack: ["Laravel", "Postgres"],
      features: [
        "CRUD for threads, comments, users, and categories",
        "User roles and moderation",
        "Thread/category organization",
        "REST APIs for all main entities",
      ],
      database: ["Users", "Threads", "Categories", "Comments"],
      security:
        "Secure authentication, input validation, and permission checks.",
    },
  },
]);

provide("projects", projects);
</script>
