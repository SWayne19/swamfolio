import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";

gsap.registerPlugin(ScrollTrigger);

let lenisInstance = null;

export function getLenisInstance() {
  return lenisInstance;
}

export function useLenis() {
  const router = useRouter();

  onMounted(() => {
    // Respect reduced-motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    lenisInstance = new Lenis({
      lerp: 0.1,
      duration: 1.2,
      smoothWheel: true,
    });

    // Sync Lenis scroll with ScrollTrigger
    lenisInstance.on("scroll", ScrollTrigger.update);

    // Drive Lenis from GSAP ticker
    gsap.ticker.add((time) => {
      lenisInstance.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // Scroll to top on route change
    router.afterEach(() => {
      if (lenisInstance) {
        lenisInstance.scrollTo(0, { immediate: true });
      }
    });
  });

  onUnmounted(() => {
    if (lenisInstance) {
      lenisInstance.destroy();
      lenisInstance = null;
    }
  });

  return {
    getLenis: () => lenisInstance,
    scrollTo: (target, options) => {
      if (lenisInstance) {
        lenisInstance.scrollTo(target, options);
      }
    },
  };
}
