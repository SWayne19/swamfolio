<template>
  <nav
    class="sticky top-0 z-50 border-b border-slate-200/60 bg-[#ebebdf]/70 shadow-sm backdrop-blur-xl dark:border-slate-800/60 dark:bg-slate-950/70 dark:shadow-none">
    <div class="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-8 sm:py-4 lg:px-10">
      <!-- Logo / Name with typing animation -->
      <RouterLink :to="{ name: 'home' }" class="mr-2 min-w-0 flex-shrink items-center truncate">
        <TypingName />
      </RouterLink>

      <!-- Desktop Navigation Links -->
      <div class="hidden items-center gap-1.5 sm:flex">
        <RouterLink v-for="link in navLinks" :key="link.name" :to="{ name: link.route }"
          class="relative rounded-lg px-3.5 py-2 text-[13px] font-medium text-gray-700 transition-all after:absolute after:bottom-0.5 after:left-3 after:right-3 after:h-[2px] after:scale-x-0 after:rounded-full after:bg-primary-600 after:transition-transform after:duration-200 hover:after:scale-x-100 hover:text-primary-700 dark:text-slate-400 dark:after:bg-primary-400 dark:hover:text-primary-300"
          active-class="!text-primary-600 after:scale-x-100 dark:!text-primary-400">
          {{ link.name }}
        </RouterLink>

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
  <Transition enter-active-class="transition duration-200 ease-out" enter-from-class="opacity-0"
    enter-to-class="opacity-100" leave-active-class="transition duration-150 ease-in" leave-from-class="opacity-100"
    leave-to-class="opacity-0">
    <div v-show="mobileMenuOpen"
      class="fixed inset-0 top-[57px] z-30 bg-black/20 backdrop-blur-sm sm:hidden dark:bg-black/40"
      @click="mobileMenuOpen = false"></div>
  </Transition>

  <!-- Mobile Menu Dropdown -->
  <Transition enter-active-class="transition duration-200 ease-out" enter-from-class="opacity-0 -translate-y-2"
    enter-to-class="opacity-100 translate-y-0" leave-active-class="transition duration-150 ease-in"
    leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-2">
    <div v-show="mobileMenuOpen"
      class="fixed inset-x-0 top-[57px] z-40 border-b border-slate-200/60 bg-[#ebebdf]/95 shadow-lg backdrop-blur-xl sm:hidden dark:border-slate-800/60 dark:bg-slate-950/95 dark:shadow-none">
      <div class="flex flex-col px-4 py-3">
        <RouterLink v-for="link in navLinks" :key="link.name" :to="{ name: link.route }"
          class="relative rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition-all after:absolute after:bottom-1 after:left-4 after:right-4 after:h-[2px] after:origin-left after:scale-x-0 after:rounded-full after:bg-primary-600 after:transition-transform after:duration-200 hover:after:scale-x-100 hover:text-primary-700 dark:text-slate-400 dark:after:bg-primary-400 dark:hover:text-primary-300"
          active-class="!text-primary-600 after:scale-x-100 dark:!text-primary-400"
          @click="mobileMenuOpen = false">
          {{ link.name }}
        </RouterLink>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import TypingName from "./TypingName.vue";
import ThemeToggle from "./ThemeToggle.vue";

const mobileMenuOpen = ref(false);

const router = useRouter();

router.beforeEach(() => {
  mobileMenuOpen.value = false;
});

const navLinks = [
  { name: "Home", route: "home" },
  { name: "About", route: "about" },
  { name: "Experiences", route: "experienceAndSkills" },
];
</script>