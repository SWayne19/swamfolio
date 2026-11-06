import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";

gsap.registerPlugin(ScrollTrigger);

let lenisInstance = null;
const NAV_OFFSET = -72;

export function getLenisInstance() {
  return lenisInstance;
}

// Switching between Overview / FrontEnd / BackEnd tabs of the same project
// should keep the scroll position.
export function isTabSwitch(to, from) {
  return Boolean(to.params?.id && to.params.id === from.params?.id);
}

export function scrollToTarget(target) {
  const lenis = lenisInstance;
  if (target === "top" || target === 0) {
    if (lenis) lenis.scrollTo(0, { duration: 1.2 });
    else window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const el = typeof target === "string" ? document.getElementById(target) : target;
  if (!el) return;
  if (lenis) {
    // Page height may have changed since Lenis last measured (route change, lazy content).
    lenis.resize();
    lenis.scrollTo(el, { duration: 1.2, offset: NAV_OFFSET });
  }
  else el.scrollIntoView({ behavior: "smooth" });
}

export function setScrollLocked(locked) {
  if (lenisInstance) {
    locked ? lenisInstance.stop() : lenisInstance.start();
  }
  document.body.style.overflow = locked ? "hidden" : "";
}

export function useLenis() {
  const router = useRouter();
  let tick = null;
  let removeAfterEach = null;

  onMounted(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    lenisInstance = new Lenis({ lerp: 0.1, smoothWheel: true });
    lenisInstance.on("scroll", ScrollTrigger.update);

    tick = (time) => lenisInstance?.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    removeAfterEach = router.afterEach((to, from) => {
      if (lenisInstance && !isTabSwitch(to, from)) {
        lenisInstance.scrollTo(0, { immediate: true });
      }
    });
  });

  onUnmounted(() => {
    if (tick) gsap.ticker.remove(tick);
    removeAfterEach?.();
    lenisInstance?.destroy();
    lenisInstance = null;
  });
}
