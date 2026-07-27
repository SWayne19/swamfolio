<template>
  <!-- Animated Background Orbs -->
  <div class="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
    <div class="bg-orb bg-orb-1"></div>
    <div class="bg-orb bg-orb-2"></div>
    <div class="bg-orb bg-orb-3"></div>
  </div>

  <div
    class="relative z-10 min-h-screen text-gray-900 transition-colors duration-300 dark:text-gray-100"
  >
    <!-- Progress Bar -->
    <div
      v-if="isLoading"
      class="fixed top-0 left-0 z-[100] h-[3px] bg-gradient-to-r from-primary-500 via-primary-400 to-sky-500 transition-all duration-200 ease-out"
      :style="{ width: loadingProgress + '%' }"
    ></div>

    <!-- Top Nav Bar -->
    <nav
      class="sticky top-0 z-50 border-b border-slate-200/60 bg-white/70 shadow-sm backdrop-blur-xl dark:border-slate-800/60 dark:bg-slate-950/70 dark:shadow-none"
    >
      <div class="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-8 sm:py-4 lg:px-10">
        <!-- Logo / Name with typing animation -->
        <RouterLink :to="{ name: 'home' }" class="mr-2 min-w-0 flex-shrink items-center truncate">
          <span class="text-lg font-bold tracking-tight text-gray-900 sm:text-xl md:text-2xl dark:text-white">
            <span>{{ displayedName }}</span>
            <span class="typewriter-cursor ml-[1px] inline-block h-[1.1em] w-[2px] align-middle bg-primary-500"></span>
          </span>
        </RouterLink>

        <!-- Desktop Navigation Links -->
        <div class="hidden items-center gap-1.5 sm:flex">
          <RouterLink
            v-for="link in navLinks"
            :key="link.name"
            :to="{ name: link.route }"
            class="rounded-lg px-3.5 py-2 text-[13px] font-medium text-gray-500 transition-all hover:bg-primary-50 hover:text-primary-700 dark:text-slate-400 dark:hover:bg-primary-500/10 dark:hover:text-primary-300"
            active-class="!text-primary-600 !bg-primary-50 dark:!text-primary-400 dark:!bg-primary-500/10"
          >
            {{ link.name }}
          </RouterLink>

          <!-- Theme Toggle -->
          <button
            @click="toggleTheme"
            class="ml-2 flex h-9 w-9 items-center justify-center rounded-lg text-gray-400 transition-all hover:bg-gray-100 hover:text-gray-700 dark:text-slate-500 dark:hover:bg-slate-800 dark:hover:text-slate-300"
            :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          >
            <svg v-if="isDark" class="h-[18px] w-[18px]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
            <svg v-else class="h-[18px] w-[18px]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </button>
        </div>

        <!-- Mobile: Theme Toggle + Hamburger -->
        <div class="flex items-center gap-1 sm:hidden">
          <button
            @click="toggleTheme"
            class="flex h-9 w-9 items-center justify-center rounded-lg text-gray-400 transition-all hover:bg-gray-100 hover:text-gray-700 dark:text-slate-500 dark:hover:bg-slate-800 dark:hover:text-slate-300"
            :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          >
            <svg v-if="isDark" class="h-[18px] w-[18px]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
            <svg v-else class="h-[18px] w-[18px]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </button>
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="flex h-9 w-9 items-center justify-center rounded-lg text-gray-400 transition-all hover:bg-gray-100 hover:text-gray-700 dark:text-slate-500 dark:hover:bg-slate-800 dark:hover:text-slate-300"
            aria-label="Toggle menu"
          >
            <svg v-if="!mobileMenuOpen" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </nav>

    <!-- Mobile Menu Backdrop -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-show="mobileMenuOpen"
        class="fixed inset-0 top-[57px] z-30 bg-black/20 backdrop-blur-sm sm:hidden dark:bg-black/40"
        @click="mobileMenuOpen = false"
      ></div>
    </Transition>

    <!-- Mobile Menu Dropdown -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
    <div
      v-show="mobileMenuOpen"
      class="fixed inset-x-0 top-[57px] z-40 border-b border-slate-200/60 bg-white/95 shadow-lg backdrop-blur-xl sm:hidden dark:border-slate-800/60 dark:bg-slate-950/95 dark:shadow-none"
    >
      <div class="flex flex-col px-4 py-3">
        <RouterLink
          v-for="link in navLinks"
          :key="link.name"
          :to="{ name: link.route }"
          class="rounded-lg px-4 py-3 text-sm font-medium text-gray-500 transition-all hover:bg-primary-50 hover:text-primary-700 dark:text-slate-400 dark:hover:bg-primary-500/10 dark:hover:text-primary-300"
          active-class="!text-primary-600 !bg-primary-50 dark:!text-primary-400 dark:!bg-primary-500/10"
          @click="mobileMenuOpen = false"
        >
          {{ link.name }}
        </RouterLink>
      </div>
    </div>
    </Transition>

    <div class="mx-auto max-w-6xl px-5 pb-16 pt-8 sm:px-8 sm:pb-24 sm:pt-12 lg:px-10">
      <router-view />
    </div>

    <!-- Scroll To Top Button -->
    <button
      v-show="showScrollTop"
      @click="scrollToTop"
      class="fixed right-5 bottom-5 z-40 flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200/60 bg-white/80 text-gray-500 shadow-lg backdrop-blur-sm transition-all hover:scale-105 hover:bg-white hover:text-primary-600 hover:shadow-xl sm:right-8 sm:bottom-8 dark:border-slate-700/60 dark:bg-slate-800/80 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-primary-400"
      :class="showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'"
      aria-label="Scroll to top"
    >
      <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>

    <!-- Footer -->
    <footer class="border-t border-slate-200/60 py-6 sm:py-8 dark:border-slate-800/40">
      <div class="mx-auto max-w-6xl px-5 text-center sm:px-8 lg:px-10">
        <p class="text-xs font-medium tracking-wide text-gray-400 dark:text-slate-600">
          swamfolio &copy; {{ currentYear }}
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, provide, ref } from "vue";
import { useRouter } from "vue-router";

const currentYear = new Date().getFullYear();

// Mobile menu
const mobileMenuOpen = ref(false);

// Progress bar
const router = useRouter();
const isLoading = ref(false);
const loadingProgress = ref(0);
let progressInterval = null;

router.beforeEach(() => {
  mobileMenuOpen.value = false;
  isLoading.value = true;
  loadingProgress.value = 0;
  progressInterval = setInterval(() => {
    if (loadingProgress.value < 90) {
      loadingProgress.value += Math.random() * 15;
    }
  }, 100);
});

router.afterEach(() => {
  loadingProgress.value = 100;
  setTimeout(() => {
    isLoading.value = false;
    loadingProgress.value = 0;
    if (progressInterval) clearInterval(progressInterval);
  }, 300);
});

// Typing animation
const phrases = ["Swam Pyae Paing", "Full Stack Developer"];
const displayedName = ref("");
let typingTimeout = null;
let cancelled = false;

const sleep = (ms) =>
  new Promise((resolve) => {
    typingTimeout = setTimeout(resolve, ms);
  });

const typeLoop = async () => {
  let index = 0;
  while (!cancelled) {
    const text = phrases[index];

    for (let i = 0; i <= text.length; i++) {
      if (cancelled) return;
      displayedName.value = text.slice(0, i);
      await sleep(80);
    }

    if (cancelled) return;
    await sleep(2000);

    for (let i = text.length; i >= 0; i--) {
      if (cancelled) return;
      displayedName.value = text.slice(0, i);
      await sleep(40);
    }

    if (cancelled) return;
    await sleep(500);

    index = (index + 1) % phrases.length;
  }
};

// Navigation
const navLinks = [
  { name: "Home", route: "home" },
  { name: "About", route: "about" },
  { name: "Experiences", route: "experienceAndSkills" },
];

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
  typeLoop();
  window.addEventListener("scroll", handleScroll, { passive: true });
});

onUnmounted(() => {
  cancelled = true;
  if (typingTimeout) clearTimeout(typingTimeout);
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
      "A modern, responsive landing page demo for an internet provider -- built with Tailwind CSS and enhanced with Vue for interactive features like plan selection and real-time FAQs.",
    tags: ["Tailwind CSS", "Vue 3", "Interactive", "Landing Page"],
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
        "Blending minimal static content with Vue-based reactivity while keeping load times fast -- achieving interactivity without backend complexity.",
      outcome:
        "A visually polished, interactive front page that lets users compare plans, open FAQs, and quickly access CTA areas, showcasing what can be done with Tailwind and Vue.",
    },
    frontend: {
      stack: ["HTML", "Tailwind CSS", "Vue 3", "Composition API"],
      architecture: [
        "Single page layout split into hero, plans, and FAQ sections",
        "Vue components for pricing cards and collapsible FAQ accordions",
        "Tailwind utility classes for quick styling, transitions, and effects",
        "No backend -- all interactivity handled on the client side",
      ],
      features: [
        "Interactive plan selection with price highlight (Vue reactive state)",
        "FAQ section using accordion (Vue v-for, v-show/toggle)",
        "Hover, focus, and transition effects for calls-to-action and cards",
        "Mobile-first responsive design flows using Tailwind flex/grid",
      ],
      ui: "Bright, trustworthy look with Tailwind gradients, subtle motion, and clear Vue-driven interactivity.",
    },
    backend: {
      stack: [],
      features: [
        "No backend -- all data and behavior handled on the frontend via Vue reactive state.",
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
    tags: ["Bootstrap", "Library Management", "Laravel", "PostgreSQL"],
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
      stack: ["Blade", "Bootstrap", "JavaScript"],
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
      stack: ["Laravel", "PostgreSQL"],
      features: [
        "Book, member, and Stock management",
        "Role-based permissions",
        "CRUD for all library assets",
        "Search and filtering APIs",
      ],
      database: ["Books", "Users", "Balances", "Borrows", "Returns"],
      security: "Authentication, Authorization, Input validation.",
    },
  },
  {
    id: 4,
    title: "ForumZone",
    description:
      "A community-driven forum platform built with Vue, Laravel, and PostgreSQL, supporting rich discussions and user engagement.",
    tags: ["Vue 3", "Laravel", "PostgreSQL", "Forum", "Comments"],
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
      stack: ["Laravel", "PostgreSQL"],
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
  {
    id: 5,
    title: "YummyShare",
    description:
      "A recipe sharing platform with an admin panel for managing recipe categories and configurations, and a user panel where anyone can share recipes globally with the community.",
    tags: ["Laravel", "Vue 3", "Inertia.js", "Tailwind CSS", "PostgreSQL"],
    image: "/images/YummyShare.png",
    url: "",
    overview: {
      goal: "Build a recipe sharing platform with admin-managed categories and a user panel for sharing recipes globally, powered by Laravel, Vue, and Inertia.js.",
      highlights: [
        "Admin panel for recipe category configuration and content management",
        "User panel for creating and sharing recipes with the global community",
        "Full SPA experience powered by Inertia.js without a separate API layer",
        "Role-based access separating admin and user functionalities",
      ],
      challenges:
        "Balancing admin control over categories and configurations with a smooth, open user experience for recipe sharing, while maintaining clean role-based access.",
      outcome:
        "A full-featured recipe platform where admins manage categories and settings, and users freely share and discover recipes from a global community.",
    },
    frontend: {
      stack: ["Vue 3", "Inertia.js", "Tailwind CSS", "Composition API"],
      architecture: [
        "Inertia.js-driven SPA with server-side routing",
        "Vue 3 components with Composition API for reactive UI",
        "Tailwind CSS utility-first styling with responsive layouts",
        "Shared layouts and reusable form components",
      ],
      features: [
        "Admin dashboard for category and recipe configuration",
        "User panel for creating and sharing recipes globally",
        "Browse and search recipes with admin-managed category filters",
        "User profile with published and saved recipes",
      ],
      ui: "Warm, appetizing design with clean typography, card-based layouts, and smooth Inertia page transitions.",
    },
    backend: {
      stack: ["Laravel", "PostgreSQL", "Inertia.js"],
      features: [
        "Admin panel with recipe category CRUD and configuration",
        "User recipe CRUD with image storage",
        "Role-based access control for admin and user panels",
        "Global recipe feed with search and filtering",
      ],
      database: ["Users", "Recipes", "Categories", "Tags", "Favorites"],
      security: "Sanctum authentication, authorization policies, input validation, and file upload sanitization.",
    },
  },
]);

provide("projects", projects);
</script>

<style>
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
.typewriter-cursor {
  animation: blink 0.8s step-end infinite;
}
</style>
