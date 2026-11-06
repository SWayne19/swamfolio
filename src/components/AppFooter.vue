<template>
  <footer id="contact" class="shell pt-24 pb-6 sm:pt-32">
    <div ref="root" class="panel relative overflow-hidden p-6 sm:p-12 lg:p-16">
      <h2 data-reveal
        class="max-w-5xl text-balance text-[clamp(2.4rem,6.5vw,6rem)] font-medium leading-[0.95] tracking-[-0.045em]">
        It's time to build your next web app.
      </h2>
      <p data-reveal="0.1" class="mt-6 max-w-lg text-pretty text-lg text-muted">
        Let's work together and ship something that lasts. I usually reply within 24 hours.
      </p>

      <a data-reveal="0.2" :href="`mailto:${profile.email}`"
        class="group mt-10 inline-flex items-center gap-3 text-2xl font-medium tracking-tight sm:text-4xl">
        <span class="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_2px] bg-left-bottom bg-no-repeat pb-1 transition-[background-size] duration-500 group-hover:bg-[length:100%_2px]">
          {{ profile.email }}
        </span>
        <svg class="h-6 w-6 shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 sm:h-8 sm:w-8"
          fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M8 7h9v9" />
        </svg>
      </a>

      <dl class="mt-14 grid grid-cols-2 gap-6 border-t border-line pt-8 text-sm lg:grid-cols-4">
        <div>
          <dt class="eyebrow">Phone</dt>
          <dd class="mt-2"><a :href="`tel:${profile.phone}`" class="hover:text-muted">{{ profile.phone }}</a></dd>
        </div>
        <div>
          <dt class="eyebrow">Location</dt>
          <dd class="mt-2">{{ profile.location }} <span class="text-muted">· {{ profile.utcOffset }}</span></dd>
        </div>
        <div>
          <dt class="eyebrow">LinkedIn</dt>
          <dd class="mt-2"><a :href="profile.linkedin" target="_blank" rel="noreferrer" class="hover:text-muted">Swam Pyae ↗</a></dd>
        </div>
        <div>
          <dt class="eyebrow">GitHub</dt>
          <dd class="mt-2"><a :href="profile.github" target="_blank" rel="noreferrer" class="hover:text-muted">SWayne19 ↗</a></dd>
        </div>
      </dl>
    </div>

    <div class="flex items-center justify-between gap-4 px-1 pt-6 text-sm text-muted">
      <p>© {{ year }} {{ profile.name }}</p>
      <button type="button" @click="scrollToTarget('top')" class="cursor-pointer transition-colors hover:text-fg">
        Back to top ↑
      </button>
    </div>
  </footer>
</template>

<script setup>
import { ref } from "vue";
import { profile } from "../data/profile";
import { scrollToTarget } from "../composables/useLenis";
import { useGsap } from "../composables/useGsap";

const root = ref(null);
const year = new Date().getFullYear();

useGsap(root);
</script>
