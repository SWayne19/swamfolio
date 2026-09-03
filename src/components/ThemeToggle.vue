<template>
  <div ref="toggleRef" class="relative">
    <button @click="dropdownOpen = !dropdownOpen"
      class="flex h-9 w-9 items-center justify-center rounded-lg text-gray-600 transition-all hover:bg-gray-100 hover:text-gray-700 dark:text-slate-500 dark:hover:bg-slate-800 dark:hover:text-slate-300"
      aria-label="Theme settings">
      <!-- Sun icon (light effective) -->
      <svg v-if="!isDark" class="h-[18px] w-[18px]" fill="none" stroke="currentColor" stroke-width="2"
        viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="5" />
        <path
          d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
      <!-- Moon icon (dark effective) -->
      <svg v-else class="h-[18px] w-[18px]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </button>

    <Transition enter-active-class="transition duration-150 ease-out" enter-from-class="scale-95 opacity-0"
      enter-to-class="scale-100 opacity-100" leave-active-class="transition duration-100 ease-in"
      leave-from-class="scale-100 opacity-100" leave-to-class="scale-95 opacity-0">
      <div v-show="dropdownOpen"
        class="absolute right-0 mt-2 w-36 origin-top-right overflow-hidden rounded-xl border border-slate-200/60 bg-white/90 shadow-lg backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/90">
        <button v-for="option in options" :key="option.value" @click="selectTheme(option.value)"
          class="flex w-full items-center gap-2.5 px-3.5 py-2.5 text-left text-[13px] font-medium transition-colors"
          :class="themePreference === option.value
            ? 'bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400'
            : 'text-gray-600 hover:bg-gray-50 dark:text-slate-400 dark:hover:bg-slate-800/60'">
          <svg class="h-4 w-4 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"
            v-html="option.icon"></svg>
          {{ option.label }}
        </button>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const toggleRef = ref(null);
const dropdownOpen = ref(false);
const themePreference = ref(localStorage.getItem("theme") || "system");
const isDark = ref(document.documentElement.classList.contains("dark"));

const options = [
  {
    value: "light",
    label: "Light",
    icon: '<circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />',
  },
  {
    value: "dark",
    label: "Dark",
    icon: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />',
  },
  {
    value: "system",
    label: "System",
    icon: '<rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />',
  },
];

function applyTheme(pref) {
  themePreference.value = pref;
  localStorage.setItem("theme", pref);

  let dark;
  if (pref === "system") {
    dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  } else {
    dark = pref === "dark";
  }

  isDark.value = dark;
  document.documentElement.classList.toggle("dark", dark);
}

function selectTheme(value) {
  applyTheme(value);
  dropdownOpen.value = false;
}

function onClickOutside(e) {
  if (toggleRef.value && !toggleRef.value.contains(e.target)) {
    dropdownOpen.value = false;
  }
}

function onKeydown(e) {
  if (e.key === "Escape") {
    dropdownOpen.value = false;
  }
}

function onSystemChange() {
  if (themePreference.value === "system") {
    applyTheme("system");
  }
}

const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

onMounted(() => {
  document.addEventListener("click", onClickOutside);
  document.addEventListener("keydown", onKeydown);
  mediaQuery.addEventListener("change", onSystemChange);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", onClickOutside);
  document.removeEventListener("keydown", onKeydown);
  mediaQuery.removeEventListener("change", onSystemChange);
});
</script>
