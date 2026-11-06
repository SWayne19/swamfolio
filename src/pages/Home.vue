<template>
  <div ref="root">
    <!-- ==================== HERO ==================== -->
    <section class="shell pt-2">
      <div class="grid gap-3 lg:grid-cols-12">
        <div class="panel flex min-h-[520px] flex-col justify-between p-6 sm:p-10 lg:col-span-7 lg:min-h-[680px] lg:p-12">
          <div class="hero-in flex items-center gap-2 text-sm text-muted">
            <span class="pulse-dot"></span>
            {{ profile.currentTitle }} at {{ profile.company }}
          </div>

          <div class="py-12">
            <h1 class="text-balance text-[clamp(2.75rem,6.4vw,6rem)] font-medium leading-[0.95] tracking-[-0.045em]">
              <span class="hero-line block">Crafted interfaces,</span>
              <span class="hero-line block text-muted">engineered from</span>
              <span class="hero-line block text-muted">database to UI.</span>
            </h1>
            <p class="hero-in mt-8 max-w-md text-pretty text-base leading-relaxed text-muted sm:text-lg">
              I'm {{ profile.name }}, a full stack developer building fast, reliable web applications with Vue and
              Laravel.
            </p>
            <div class="hero-in mt-8 flex flex-wrap gap-3">
              <a href="#contact" @click.prevent="scrollToTarget('contact')" class="btn btn-solid">
                Get in touch
              </a>
              <a href="#work" @click.prevent="scrollToTarget('work')" class="btn btn-ghost">
                View my work
                <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 5v14M6 13l6 6 6-6" />
                </svg>
              </a>
            </div>
          </div>

          <dl class="hero-in grid grid-cols-3 gap-4 border-t border-line pt-6">
            <div v-for="stat in stats" :key="stat.label">
              <dt class="eyebrow">{{ stat.label }}</dt>
              <dd class="mt-2 text-xl font-medium tracking-tight sm:text-2xl">{{ stat.value }}</dd>
            </div>
          </dl>
        </div>

        <div class="hero-photo panel relative min-h-[440px] overflow-hidden lg:col-span-5">
          <img :src="profile.photo" :alt="profile.name"
            class="hero-img absolute inset-0 h-full w-full scale-110 object-cover object-top" width="718" height="856"
            loading="eager" fetchpriority="high" />
          <div class="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black/60 to-transparent"></div>
          <div class="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 text-white">
            <div>
              <p class="text-sm font-medium">{{ profile.name }}</p>
              <p class="text-sm text-white/70">{{ profile.role }}</p>
            </div>
            <p class="font-mono text-xs uppercase tracking-wider text-white/70">{{ profile.location }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== BENTO ==================== -->
    <section class="shell mt-3" aria-label="Highlights">
      <div class="grid gap-3 md:grid-cols-2 lg:grid-cols-12">
        <!-- Role + clock -->
        <div data-reveal class="panel flex flex-col justify-between gap-10 p-6 sm:p-8 lg:col-span-3">
          <div>
            <p class="eyebrow">Now</p>
            <p class="mt-4 text-pretty text-lg leading-snug tracking-tight">
              Full stack developer with hands-on experience taking products from schema to launch.
            </p>
            <a :href="profile.linkedin" target="_blank" rel="noreferrer" class="btn btn-ghost btn-sm mt-6">
              LinkedIn ↗
            </a>
          </div>
          <LocalClock :time-zone="profile.timeZone" />
        </div>

        <!-- Rotating experience -->
        <ExperienceCard data-reveal="0.08" :items="experiences" class="md:col-span-2 lg:col-span-6 lg:order-none md:order-last" />

        <!-- Stack -->
        <div data-reveal="0.16" class="panel flex flex-col gap-8 p-6 sm:p-8 lg:col-span-3">
          <div>
            <p class="eyebrow">Frontend</p>
            <p class="mt-3 text-sm leading-relaxed text-muted">Responsive, accessible interfaces in Vue 3 and Tailwind.</p>
            <div class="mt-4 flex gap-2">
              <span v-for="t in ['Vue', 'Tailwind', 'JavaScript']" :key="t"
                class="flex h-11 w-11 items-center justify-center rounded-xl bg-raised" :title="t">
                <img :src="toolIcon(t)" :alt="t" class="h-5 w-5" />
              </span>
            </div>
          </div>
          <div class="border-t border-line pt-8">
            <p class="eyebrow">Backend</p>
            <p class="mt-3 text-sm leading-relaxed text-muted">Secure Laravel APIs backed by well-modelled data.</p>
            <div class="mt-4 flex gap-2">
              <span v-for="t in ['Laravel', 'PostgreSQL', 'MySQL']" :key="t"
                class="flex h-11 w-11 items-center justify-center rounded-xl bg-raised" :title="t">
                <img :src="toolIcon(t)" :alt="t" class="h-5 w-5" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== MARQUEE ==================== -->
    <section class="py-16 sm:py-20" aria-label="Technologies">
      <TechMarquee :tools="tools" />
    </section>

    <!-- ==================== APPROACH ==================== -->
    <section id="about" class="shell py-20 sm:py-32">
      <div class="grid gap-8 lg:grid-cols-12">
        <p class="eyebrow lg:col-span-3 lg:pt-3">Approach</p>
        <div ref="approachEl" class="space-y-8 lg:col-span-9">
          <p v-for="(para, p) in approachWords" :key="p"
            class="text-[clamp(1.6rem,3.3vw,3rem)] font-medium leading-[1.15] tracking-[-0.03em]">
            <span v-for="(word, w) in para" :key="w" class="approach-word">{{ word + " " }}</span>
          </p>
        </div>
      </div>
    </section>

    <!-- ==================== WORK ==================== -->
    <section id="work" class="shell py-16 sm:py-24">
      <div class="mb-10 grid gap-6 sm:mb-14 lg:grid-cols-12">
        <h2 data-reveal class="text-[clamp(2.5rem,5vw,4.5rem)] font-medium leading-none tracking-[-0.04em] lg:col-span-7">
          Selected work
        </h2>
        <p data-reveal="0.1" class="max-w-md self-end text-pretty text-muted lg:col-span-5 lg:justify-self-end">
          A selection of {{ projects.length }} projects, from static landing pages to full stack Laravel apps with
          authentication, roles and dashboards.
        </p>
      </div>

      <div class="space-y-3">
        <RouterLink v-for="(project, i) in projects" :key="project.id"
          :to="{ name: 'project', params: { id: project.id } }"
          class="project-card panel group grid overflow-hidden md:sticky md:h-[min(560px,calc(100vh-7rem))] md:grid-cols-12"
          :style="{ top: `calc(5rem + ${i * 0.75}rem)` }">
          <div class="flex flex-col justify-between gap-8 p-6 sm:p-8 md:col-span-5 lg:p-10">
            <div class="flex items-center justify-between">
              <p class="text-sm font-medium">{{ project.title }}</p>
              <p class="eyebrow">{{ String(i + 1).padStart(2, "0") }}</p>
            </div>
            <div>
              <p class="text-pretty text-xl leading-snug tracking-tight sm:text-2xl lg:text-[1.75rem]">
                {{ project.description }}
              </p>
              <p class="mt-4 text-sm text-muted">Built with {{ formatList(project.tags) }}.</p>
            </div>
            <div class="flex items-center gap-3">
              <span class="btn btn-solid btn-sm">
                Open project
                <svg class="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none"
                  stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
              <span v-if="project.url" class="eyebrow flex items-center gap-1.5">
                <span class="h-1.5 w-1.5 rounded-full bg-accent"></span> Live
              </span>
            </div>
          </div>
          <div class="order-first p-2 md:order-none md:col-span-7 md:p-3">
            <div class="relative h-full min-h-[220px] overflow-hidden rounded-[1.1rem] bg-raised sm:min-h-[300px]">
              <img v-if="project.image" :src="project.image" :alt="`${project.title} screenshot`"
                class="absolute inset-0 h-full w-full object-cover object-left-top transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                loading="lazy" />
            </div>
          </div>
        </RouterLink>
      </div>
    </section>

    <!-- ==================== EXPERIENCE ==================== -->
    <section id="experience" class="shell py-20 sm:py-32">
      <div class="grid gap-8 lg:grid-cols-12">
        <div class="lg:col-span-3">
          <p class="eyebrow lg:pt-3">Experience</p>
        </div>
        <div class="lg:col-span-9">
          <h2 data-reveal class="max-w-2xl text-balance text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.04em]">
            Growing from intern to mid-level in under two years.
          </h2>
          <ol class="mt-12 border-t border-line">
            <li v-for="(exp, i) in [...experiences].reverse()" :key="exp.role" data-reveal
              class="grid gap-3 border-b border-line py-7 sm:grid-cols-12 sm:gap-6">
              <p class="font-mono text-sm text-muted sm:col-span-3">{{ exp.period }}</p>
              <div class="sm:col-span-4">
                <p class="flex items-center gap-2 text-lg font-medium tracking-tight">
                  {{ exp.role }}
                  <span v-if="i === 0" class="rounded-full border border-line px-2 py-0.5 text-xs font-normal text-muted">Current</span>
                </p>
                <p class="text-sm text-muted">{{ exp.company }}</p>
              </div>
              <p class="text-pretty text-muted sm:col-span-5">{{ exp.highlights }}</p>
            </li>
          </ol>
        </div>
      </div>
    </section>

    <!-- ==================== FAQ ==================== -->
    <section id="faq" class="shell py-16 sm:py-24">
      <div class="grid gap-10 lg:grid-cols-12">
        <div class="lg:col-span-4">
          <p class="eyebrow">FAQ</p>
          <h2 data-reveal class="mt-4 text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.04em]">
            Questions, answered.
          </h2>
          <p data-reveal="0.1" class="mt-4 max-w-xs text-muted">
            Something else on your mind?
            <a :href="`mailto:${profile.email}`" class="text-fg underline underline-offset-4 hover:text-muted">Send me an email.</a>
          </p>
        </div>
        <div data-reveal="0.1" class="lg:col-span-8">
          <FaqList :items="faqs" />
        </div>
      </div>
    </section>

    <!-- ==================== TOOLBOX ==================== -->
    <section class="shell py-16 sm:py-24" aria-labelledby="toolbox-title">
      <div class="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <h2 id="toolbox-title" data-reveal class="text-[clamp(2rem,4vw,3.5rem)] font-medium leading-none tracking-[-0.04em]">
          Toolbox
        </h2>
        <p data-reveal="0.1" class="max-w-sm text-muted">The tools I reach for every day, across every layer of the stack.</p>
      </div>
      <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <article v-for="(box, i) in toolbox" :key="box.title" :data-reveal="i * 0.08" class="panel group p-2">
          <div class="flex aspect-[4/3] items-center justify-center gap-4 rounded-[1.1rem] bg-raised">
            <img v-for="src in box.icons" :key="src" :src="src" alt=""
              class="h-12 w-12 opacity-80 transition duration-500 group-hover:-translate-y-1 group-hover:opacity-100 sm:h-14 sm:w-14"
              loading="lazy" />
          </div>
          <div class="p-4">
            <h3 class="font-medium">{{ box.title }}</h3>
            <p class="mt-1.5 text-sm leading-relaxed text-muted">{{ box.text }}</p>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup>
import { inject, ref } from "vue";
import ExperienceCard from "../components/ExperienceCard.vue";
import FaqList from "../components/FaqList.vue";
import LocalClock from "../components/LocalClock.vue";
import TechMarquee from "../components/TechMarquee.vue";
import { approach, experiences, faqs, profile, toolbox, tools } from "../data/profile";
import { scrollToTarget } from "../composables/useLenis";
import { useGsap } from "../composables/useGsap";

const projects = inject("projects");

const root = ref(null);
const approachEl = ref(null);

const stats = [
  { label: "Experience", value: "1+ yrs" },
  { label: "Projects", value: String(projects.value.length) },
  { label: "Focus", value: "Full stack" },
];

const approachWords = approach.map((p) => p.split(" "));
const toolIcon = (name) => tools.find((t) => t.name === name)?.icon;

const formatList = (items = []) =>
  items.length < 2 ? items.join("") : `${items.slice(0, -1).join(", ")} and ${items.at(-1)}`;

useGsap(root, (gsap) => {
  // Hero entrance
  gsap
    .timeline({ defaults: { ease: "power3.out" } })
    .from(".hero-line", { yPercent: 60, opacity: 0, duration: 1, stagger: 0.08 }, 0.1)
    .from(".hero-in", { y: 20, opacity: 0, duration: 0.8, stagger: 0.08 }, 0.35)
    .from(".hero-photo", { opacity: 0, scale: 0.97, duration: 1.1 }, 0.15);

  // Subtle parallax on the portrait
  gsap.to(".hero-img", {
    yPercent: 8,
    ease: "none",
    scrollTrigger: { trigger: ".hero-photo", start: "top top", end: "bottom top", scrub: true },
  });

  // Approach: words brighten as you scroll through
  gsap.fromTo(
    ".approach-word",
    { opacity: 0.15 },
    {
      opacity: 1,
      ease: "none",
      stagger: 0.1,
      scrollTrigger: { trigger: approachEl.value, start: "top 80%", end: "bottom 45%", scrub: true },
    }
  );

  // Stacked project cards dim slightly as the next one covers them (desktop only)
  const mm = gsap.matchMedia();
  mm.add("(min-width: 768px)", () => {
    const cards = gsap.utils.toArray(".project-card");
    cards.slice(0, -1).forEach((card, i) => {
      gsap.to(card, {
        scale: 0.96,
        opacity: 0.55,
        ease: "none",
        scrollTrigger: { trigger: cards[i + 1], start: "top bottom", end: "top 30%", scrub: true },
      });
    });
  });
});
</script>
