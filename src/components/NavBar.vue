<template>
  <header class="sticky top-0 z-50 transition-colors duration-300"
    :class="scrolled ? 'border-b border-line bg-bg/80 backdrop-blur-xl' : 'border-b border-transparent'">
    <nav class="shell flex h-16 items-center justify-between gap-4" aria-label="Primary">
      <!-- Brand -->
      <a href="/" @click.prevent="go('top')" class="group flex min-w-0 items-center gap-3">
        <img :src="profile.photo" alt="" class="h-8 w-8 shrink-0 rounded-full object-cover" width="32" height="32" />
        <span class="truncate text-sm font-medium">
          {{ profile.name }}
          <span class="hidden text-muted md:inline">/ {{ profile.role }}</span>
        </span>
      </a>

      <!-- Desktop links -->
      <div class="hidden items-center gap-1 md:flex">
        <a v-for="link in links" :key="link.id" :href="`/#${link.id}`" @click.prevent="go(link.id)"
          class="rounded-full px-3.5 py-2 text-sm transition-colors hover:text-fg"
          :class="activeSection === link.id && isHome ? 'text-fg' : 'text-muted'">
          {{ link.name }}
        </a>
        <ThemeToggle class="ml-2" />
        <a href="/#contact" @click.prevent="go('contact')" class="btn btn-solid btn-sm ml-2">
          Get in touch
        </a>
      </div>

      <!-- Mobile controls -->
      <div class="flex items-center gap-2 md:hidden">
        <ThemeToggle />
        <button type="button" @click="menuOpen = !menuOpen" class="btn btn-ghost btn-sm" :aria-expanded="menuOpen"
          aria-controls="mobile-menu">
          {{ menuOpen ? "Close" : "Menu" }}
        </button>
      </div>
    </nav>
  </header>

  <!-- Mobile full-screen menu -->
  <Transition enter-active-class="transition duration-300 ease-out" enter-from-class="opacity-0"
    leave-active-class="transition duration-200 ease-in" leave-to-class="opacity-0">
    <div v-if="menuOpen" id="mobile-menu"
      class="fixed inset-x-0 top-16 bottom-0 z-40 flex flex-col justify-between bg-bg px-4 pb-8 pt-6 md:hidden">
      <ul class="flex flex-col">
        <li v-for="(link, i) in links" :key="link.id" class="border-b border-line">
          <a :href="`/#${link.id}`" @click.prevent="go(link.id)"
            class="flex items-baseline justify-between py-4 text-4xl font-medium tracking-tight">
            {{ link.name }}
            <span class="eyebrow">0{{ i + 1 }}</span>
          </a>
        </li>
      </ul>
      <div class="space-y-4">
        <a :href="`mailto:${profile.email}`" class="block text-lg font-medium">{{ profile.email }}</a>
        <div class="flex gap-3">
          <a :href="profile.linkedin" target="_blank" rel="noreferrer" class="btn btn-ghost btn-sm">LinkedIn</a>
          <a :href="profile.github" target="_blank" rel="noreferrer" class="btn btn-ghost btn-sm">GitHub</a>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import ThemeToggle from "./ThemeToggle.vue";
import { profile } from "../data/profile";
import { scrollToTarget, setScrollLocked } from "../composables/useLenis";

const links = [
  { name: "About", id: "about" },
  { name: "Work", id: "work" },
  { name: "Experience", id: "experience" },
  { name: "FAQ", id: "faq" },
];

const route = useRoute();
const router = useRouter();
const isHome = computed(() => route.name === "home");

const menuOpen = ref(false);
const scrolled = ref(false);
const activeSection = ref("");

async function go(id) {
  menuOpen.value = false;
  if (!isHome.value) {
    await router.push({ name: "home" });
    // wait for the page transition to mount Home
    setTimeout(() => scrollToTarget(id), 450);
    return;
  }
  await nextTick();
  scrollToTarget(id);
}

const sectionIds = ["about", "work", "experience", "faq", "contact"];
let rafId = null;

function update() {
  rafId = null;
  scrolled.value = window.scrollY > 8;
  const probe = window.scrollY + window.innerHeight * 0.35;
  let current = "";
  for (const id of sectionIds) {
    const el = document.getElementById(id);
    if (el && el.offsetTop <= probe) current = id;
  }
  activeSection.value = current;
}

function onScroll() {
  if (!rafId) rafId = requestAnimationFrame(update);
}

function onKeydown(e) {
  if (e.key === "Escape") menuOpen.value = false;
}

watch(menuOpen, (open) => setScrollLocked(open));
watch(() => route.fullPath, () => (menuOpen.value = false));

onMounted(() => {
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("keydown", onKeydown);
  update();
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
  window.removeEventListener("keydown", onKeydown);
  if (rafId) cancelAnimationFrame(rafId);
  setScrollLocked(false);
});
</script>
