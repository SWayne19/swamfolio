<template>
  <nav
    class="sticky top-0 z-50 border-b border-slate-200/60 bg-[#ebebdf]/70 shadow-sm backdrop-blur-xl dark:border-slate-800/60 dark:bg-slate-950/70 dark:shadow-none">
    <div class="mx-auto flex max-w-6xl items-center justify-between px-5 py-2.5 sm:px-8 sm:py-3 lg:px-10">
      <!-- Logo / Name with typing animation -->
      <a href="#hero" @click.prevent="scrollToSection('hero')" class="mr-2 min-w-0 flex-shrink items-center truncate cursor-pointer">
        <TypingName />
      </a>

      <!-- Desktop Navigation Links -->
      <div class="hidden items-center gap-1.5 sm:flex">
        <template v-for="link in navLinks" :key="link.name">
          <!-- Section anchor links (home page) -->
          <a v-if="link.section" :href="`#${link.section}`" @click.prevent="scrollToSection(link.section)"
            class="relative rounded-lg px-3.5 py-2 text-[13px] font-medium text-gray-700 transition-all after:absolute after:bottom-0.5 after:left-3 after:right-3 after:h-[2px] after:scale-x-0 after:rounded-full after:bg-primary-600 after:transition-transform after:duration-200 hover:after:scale-x-100 hover:text-primary-700 dark:text-slate-400 dark:after:bg-primary-400 dark:hover:text-primary-300"
            :class="{ '!text-primary-600 after:scale-x-100 dark:!text-primary-400': activeSection === link.section }">
            {{ link.name }}
          </a>
          <!-- Router links (project detail pages etc) -->
          <RouterLink v-else :to="{ name: link.route }"
            class="relative rounded-lg px-3.5 py-2 text-[13px] font-medium text-gray-700 transition-all after:absolute after:bottom-0.5 after:left-3 after:right-3 after:h-[2px] after:scale-x-0 after:rounded-full after:bg-primary-600 after:transition-transform after:duration-200 hover:after:scale-x-100 hover:text-primary-700 dark:text-slate-400 dark:after:bg-primary-400 dark:hover:text-primary-300"
            active-class="!text-primary-600 after:scale-x-100 dark:!text-primary-400">
            {{ link.name }}
          </RouterLink>
        </template>

        <ThemeToggle class="ml-2" />
      </div>

      <!-- Mobile: Theme Toggle + Hamburger -->
      <div class="flex items-center gap-1 sm:hidden">
        <ThemeToggle />
        <button @click="mobileMenuOpen = !mobileMenuOpen"
          class="flex h-9 w-9 items-center justify-center rounded-lg text-gray-600 transition-all hover:bg-gray-100 hover:text-gray-700 dark:text-slate-500 dark:hover:bg-slate-800 dark:hover:text-slate-300"
          aria-label="Toggle menu">
          <svg v-if="!mobileMenuOpen" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2"
            viewBox="0 0 24 24">
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
  <Transition enter-active-class="transition duration-300 ease-out" enter-from-class="opacity-0"
    enter-to-class="opacity-100" leave-active-class="transition duration-200 ease-in" leave-from-class="opacity-100"
    leave-to-class="opacity-0">
    <div v-show="mobileMenuOpen"
      class="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm sm:hidden dark:bg-black/50"
      @click="mobileMenuOpen = false"></div>
  </Transition>

  <!-- Mobile Sidebar (slides from right) -->
  <Transition enter-active-class="transition duration-300 ease-out" enter-from-class="translate-x-full"
    enter-to-class="translate-x-0" leave-active-class="transition duration-200 ease-in"
    leave-from-class="translate-x-0" leave-to-class="translate-x-full">
    <div v-show="mobileMenuOpen"
      class="fixed top-0 right-0 bottom-0 z-50 flex w-72 flex-col border-l border-slate-200/60 bg-[#ebebdf]/95 shadow-2xl backdrop-blur-xl sm:hidden dark:border-slate-800/60 dark:bg-slate-950/95 dark:shadow-none">

      <!-- Sidebar header with close button -->
      <div class="flex items-center justify-between border-b border-slate-200/40 px-5 py-4 dark:border-slate-800/40">
        <span class="text-sm font-semibold text-gray-800 dark:text-slate-200">Menu</span>
        <button @click="mobileMenuOpen = false"
          class="flex h-8 w-8 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700 dark:text-slate-500 dark:hover:bg-slate-800 dark:hover:text-slate-300"
          aria-label="Close menu">
          <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Nav links -->
      <div class="flex flex-1 flex-col gap-1 px-3 py-4">
        <template v-for="link in navLinks" :key="link.name">
          <a v-if="link.section" :href="`#${link.section}`"
            @click.prevent="scrollToSection(link.section); mobileMenuOpen = false"
            class="rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition-all hover:bg-gray-100/60 hover:text-primary-700 dark:text-slate-400 dark:hover:bg-slate-800/60 dark:hover:text-primary-300"
            :class="{ '!bg-primary-50/60 !text-primary-600 dark:!bg-primary-900/20 dark:!text-primary-400': activeSection === link.section }">
            {{ link.name }}
          </a>
          <RouterLink v-else :to="{ name: link.route }"
            class="rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition-all hover:bg-gray-100/60 hover:text-primary-700 dark:text-slate-400 dark:hover:bg-slate-800/60 dark:hover:text-primary-300"
            active-class="!bg-primary-50/60 !text-primary-600 dark:!bg-primary-900/20 dark:!text-primary-400"
            @click="mobileMenuOpen = false">
            {{ link.name }}
          </RouterLink>
        </template>
      </div>

    </div>
  </Transition>
</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from "vue";
import { useRouter, useRoute } from "vue-router";
import TypingName from "./TypingName.vue";
import ThemeToggle from "./ThemeToggle.vue";

const mobileMenuOpen = ref(false);
const activeSection = ref("hero");

const router = useRouter();
const route = useRoute();

router.beforeEach(() => {
  mobileMenuOpen.value = false;
});

const navLinks = [
  { name: "Home", section: "hero" },
  { name: "About", section: "about" },
  { name: "Projects", section: "projects" },
  { name: "Contact", section: "contact" },
];

const scrollToSection = (sectionId) => {
  // If not on home page, navigate there first
  if (route.name !== "home") {
    router.push({ name: "home" }).then(() => {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    });
    return;
  }

  const el = document.getElementById(sectionId);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

// Track active section based on scroll position
const sectionIds = ["hero", "about", "skills", "experience", "projects", "contact"];
let rafId = null;

const updateActiveSection = () => {
  const scrollY = window.scrollY + 120;

  for (let i = sectionIds.length - 1; i >= 0; i--) {
    const el = document.getElementById(sectionIds[i]);
    if (el && el.offsetTop <= scrollY) {
      // Map skills/experience to "about" for nav highlight
      const id = sectionIds[i];
      if (id === "skills" || id === "experience") {
        activeSection.value = "about";
      } else {
        activeSection.value = id;
      }
      break;
    }
  }
};

const onScroll = () => {
  if (rafId) return;
  rafId = requestAnimationFrame(() => {
    updateActiveSection();
    rafId = null;
  });
};

onMounted(() => {
  window.addEventListener("scroll", onScroll, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
  if (rafId) cancelAnimationFrame(rafId);
  document.body.style.overflow = "";
});

watch(mobileMenuOpen, (open) => {
  document.body.style.overflow = open ? "hidden" : "";
});
</script>
