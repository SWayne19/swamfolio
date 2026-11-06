<template>
  <div v-if="project" ref="root" class="shell pt-6 sm:pt-10">
    <!-- Back -->
    <RouterLink :to="{ name: 'home' }" class="detail-in inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-fg">
      <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19 12H5M11 18l-6-6 6-6" />
      </svg>
      All projects
    </RouterLink>

    <!-- Header -->
    <header class="mt-10 grid gap-8 lg:grid-cols-12 lg:items-end">
      <div class="lg:col-span-7">
        <p class="detail-in eyebrow">Project {{ String(index + 1).padStart(2, "0") }} / {{ String(projects.length).padStart(2, "0") }}</p>
        <h1 class="detail-in mt-4 text-[clamp(3rem,9vw,8rem)] font-medium leading-[0.9] tracking-[-0.05em]">
          {{ project.title }}
        </h1>
      </div>
      <div class="detail-in lg:col-span-5">
        <p class="text-pretty text-lg leading-relaxed text-muted">{{ project.description }}</p>
        <div class="mt-6 flex flex-wrap gap-3">
          <a v-if="project.url" :href="project.url" target="_blank" rel="noopener" class="btn btn-solid">
            Visit live site ↗
          </a>
          <span v-else class="btn btn-ghost cursor-default text-muted">Private build</span>
        </div>
      </div>
    </header>

    <!-- Meta -->
    <dl class="detail-in mt-12 grid grid-cols-2 gap-6 border-t border-line pt-6 text-sm sm:grid-cols-4">
      <div>
        <dt class="eyebrow">Type</dt>
        <dd class="mt-2">{{ hasBackend ? "Full stack app" : "Frontend" }}</dd>
      </div>
      <div>
        <dt class="eyebrow">Frontend</dt>
        <dd class="mt-2">{{ project.frontend.stack.slice(0, 3).join(", ") || "—" }}</dd>
      </div>
      <div>
        <dt class="eyebrow">Backend</dt>
        <dd class="mt-2">{{ project.backend.stack.join(", ") || "None" }}</dd>
      </div>
      <div>
        <dt class="eyebrow">Status</dt>
        <dd class="mt-2 flex items-center gap-2">
          <span class="h-1.5 w-1.5 rounded-full" :class="project.url ? 'bg-accent' : 'bg-subtle'"></span>
          {{ project.url ? "Live" : "Private" }}
        </dd>
      </div>
    </dl>

    <!-- Cover -->
    <div class="detail-cover panel mt-10 overflow-hidden p-2 sm:p-3">
      <img v-if="project.image" :src="project.image" :alt="`${project.title} screenshot`"
        class="w-full rounded-[1.1rem] bg-raised" loading="eager" />
    </div>

    <!-- Tabs -->
    <div class="sticky top-20 z-30 mt-16 flex justify-center sm:mt-24">
      <nav class="inline-flex gap-1 rounded-full border border-line bg-surface/85 p-1 shadow-sm backdrop-blur-xl"
        aria-label="Project sections">
        <RouterLink v-for="tab in tabs" :key="tab.name" :to="{ name: tab.name, params: { id: project.id } }"
          class="rounded-full px-4 py-2 text-sm font-medium transition-colors sm:px-5"
          :class="route.name === tab.name ? 'bg-invert text-invert-fg' : 'text-muted hover:text-fg'">
          {{ tab.label }}
        </RouterLink>
      </nav>
    </div>

    <div class="mt-10">
      <RouterView v-slot="{ Component }">
        <Transition name="page" mode="out-in" @after-enter="refreshTriggers">
          <component :is="Component" :key="route.name" />
        </Transition>
      </RouterView>
    </div>

    <!-- Prev / Next -->
    <nav class="mt-20 grid gap-3 sm:grid-cols-2" aria-label="More projects">
      <RouterLink :to="{ name: 'project', params: { id: prev.id } }"
        class="panel group flex flex-col gap-6 p-6 transition-colors hover:bg-raised sm:p-8">
        <span class="eyebrow">← Previous</span>
        <span class="text-2xl font-medium tracking-tight sm:text-3xl">{{ prev.title }}</span>
      </RouterLink>
      <RouterLink :to="{ name: 'project', params: { id: next.id } }"
        class="panel group flex flex-col items-end gap-6 p-6 text-right transition-colors hover:bg-raised sm:p-8">
        <span class="eyebrow">Next →</span>
        <span class="text-2xl font-medium tracking-tight sm:text-3xl">{{ next.title }}</span>
      </RouterLink>
    </nav>
  </div>

  <!-- Not found -->
  <div v-else class="shell flex min-h-[60vh] flex-col items-center justify-center text-center">
    <p class="eyebrow">404</p>
    <h1 class="mt-4 text-4xl font-medium tracking-tight sm:text-5xl">Project not found.</h1>
    <RouterLink :to="{ name: 'home' }" class="btn btn-solid mt-8">Back to home</RouterLink>
  </div>
</template>

<script setup>
import { computed, inject, ref } from "vue";
import { useRoute } from "vue-router";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGsap } from "../composables/useGsap";

const route = useRoute();
const projects = inject("projects");
const root = ref(null);

const tabs = [
  { name: "overView", label: "Overview" },
  { name: "frontEnd", label: "Frontend" },
  { name: "backEnd", label: "Backend" },
];

const index = computed(() => projects.value.findIndex((p) => p.id === Number(route.params.id)));
const project = computed(() => projects.value[index.value]);
const prev = computed(() => projects.value.at(index.value - 1));
const next = computed(() => projects.value[(index.value + 1) % projects.value.length]);
const hasBackend = computed(() => project.value?.backend.stack.length > 0);

const refreshTriggers = () => ScrollTrigger.refresh();

useGsap(root, (gsap) => {
  gsap
    .timeline({ defaults: { ease: "power3.out" } })
    .from(".detail-in", { y: 24, opacity: 0, duration: 0.8, stagger: 0.07 }, 0.05)
    .from(".detail-cover", { y: 40, opacity: 0, duration: 1 }, 0.3);
}, { reveal: false });
</script>
