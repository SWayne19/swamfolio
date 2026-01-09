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
            <p class="mt-4 text-md font-medium text-blue-200/80">
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

    <!-- Scroll To Top Button -->
    <button
      v-show="showScrollTop"
      @click="scrollToTop"
      class="scroll-top-btn group"
      :class="{ 'scroll-top-visible': showScrollTop }"
      aria-label="Scroll to top"
    >
      <span class="scroll-top-inner">
        <span class="scroll-top-icon"> ▲ </span>
      </span>
    </button>

    <!-- Footer -->
    <footer class="border-t border-white/5 py-8">
      <div class="mx-auto max-w-6xl px-4 text-center text-sm text-slate-400/60">
        <p>swamfolio © {{ currentYear }}</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, provide, ref } from "vue";

const headerRef = ref(null);
const navRef = ref(null);
const currentYear = new Date().getFullYear();

// Scroll to top button state
const showScrollTop = ref(false);

const handleScroll = () => {
  showScrollTop.value = window.scrollY > 200;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
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
      features: ["No backend implemented – static frontend only"],
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

/* Scroll to Top Button */
.scroll-top-btn {
  position: fixed;
  right: 1.75rem;
  bottom: 1.75rem;
  z-index: 40;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  opacity: 0;
  transform: translateY(12px);
  pointer-events: none;
  transition: opacity 0.25s ease-out, transform 0.25s ease-out,
    box-shadow 0.25s ease-out;
}

.scroll-top-visible {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

.scroll-top-inner {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 9999px;
  background: radial-gradient(
    circle at 10% 0%,
    #38bdf8 0%,
    #4f46e5 60%,
    #020617 100%
  );
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.9),
    0 0 0 1px rgba(148, 163, 184, 0.25);
  overflow: hidden;
}

.scroll-top-inner::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at 30% 0%,
    rgba(248, 250, 252, 0.3),
    transparent 60%
  );
  opacity: 0.75;
  mix-blend-mode: screen;
  transition: opacity 0.2s ease-out;
}

.scroll-top-btn:hover .scroll-top-inner::before {
  opacity: 1;
}

.scroll-top-icon {
  position: relative;
  font-size: 1.1rem;
  color: #e5e7eb;
  text-shadow: 0 0 12px rgba(248, 250, 252, 0.8);
  transition: transform 0.22s ease-out, color 0.22s ease-out;
}

.scroll-top-btn:hover .scroll-top-icon {
  transform: translateY(-2px);
  color: #f9fafb;
}

.scroll-top-btn:active .scroll-top-inner {
  transform: scale(0.96);
}

@media (max-width: 640px) {
  .scroll-top-btn {
    right: 1.25rem;
    bottom: 1.25rem;
  }

  .scroll-top-inner {
    width: 2.75rem;
    height: 2.75rem;
  }
}
</style>
