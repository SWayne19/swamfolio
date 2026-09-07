<template>
  <div class="scroll-bg" :style="{ background: bgGradient }" aria-hidden="true"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// Each section's background color as [R, G, B]
const palette = {
  light: {
    hero:       [245, 245, 240],   // warm cream
    about:      [230, 236, 246],   // cool blue mist
    skills:     [242, 238, 228],   // warm sand
    experience: [225, 231, 245],   // slate blue
    projects:   [235, 228, 242],   // soft purple
    contact:    [242, 237, 226],   // warm amber
  },
  dark: {
    hero:       [20,  20,  24],    // charcoal base
    about:      [14,  19,  30],    // deep navy
    skills:     [22,  19,  24],    // warm ebony
    experience: [12,  17,  30],    // ocean midnight
    projects:   [19,  14,  26],    // dark plum
    contact:    [22,  20,  15],    // warm dark
  },
};

const sectionIds = ["hero", "about", "skills", "experience", "projects", "contact"];

const bgGradient = ref("");

function isDark() {
  return document.documentElement.classList.contains("dark");
}

function lerp(a, b, t) {
  return [
    Math.round(a[0] + (b[0] - a[0]) * t),
    Math.round(a[1] + (b[1] - a[1]) * t),
    Math.round(a[2] + (b[2] - a[2]) * t),
  ];
}

function toRgb(arr) {
  return `rgb(${arr[0]}, ${arr[1]}, ${arr[2]})`;
}

function getProgress() {
  const scrollY = window.scrollY;
  const viewH = window.innerHeight;
  const mode = isDark() ? "dark" : "light";
  const colors = palette[mode];

  // Build section positions
  const sections = [];
  for (const id of sectionIds) {
    const el = document.getElementById(id);
    if (el) {
      sections.push({
        id,
        top: el.offsetTop,
        bottom: el.offsetTop + el.offsetHeight,
        color: colors[id],
      });
    }
  }

  if (sections.length === 0) {
    return toRgb(colors.hero);
  }

  // Find which section the viewport center is in, then blend
  const viewCenter = scrollY + viewH * 0.4;

  for (let i = 0; i < sections.length; i++) {
    const sec = sections[i];
    const next = sections[i + 1];

    if (!next || viewCenter < next.top) {
      // We're in this section — blend toward next if close to boundary
      if (next) {
        const blendZone = viewH * 0.6;
        const distToNext = next.top - viewCenter;

        if (distToNext < blendZone && distToNext > 0) {
          const t = 1 - distToNext / blendZone;
          // Ease in-out for smoother feel
          const eased = t * t * (3 - 2 * t);
          const blended = lerp(sec.color, next.color, eased);
          return toRgb(blended);
        }
      }
      return toRgb(sec.color);
    }
  }

  return toRgb(sections[sections.length - 1].color);
}

let rafId = null;

function onScroll() {
  if (rafId) return;
  rafId = requestAnimationFrame(() => {
    bgGradient.value = getProgress();
    rafId = null;
  });
}

// Also update on theme change
let themeObserver = null;

onMounted(() => {
  bgGradient.value = getProgress();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Watch for theme class changes
  themeObserver = new MutationObserver(() => {
    bgGradient.value = getProgress();
  });
  themeObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
  if (rafId) cancelAnimationFrame(rafId);
  if (themeObserver) themeObserver.disconnect();
});
</script>
