import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { nextTick, onMounted, onUnmounted } from "vue";

gsap.registerPlugin(ScrollTrigger);

export const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Runs GSAP setup scoped to `rootRef` and reverts every tween / ScrollTrigger
 * on unmount. Elements with `data-reveal` fade up when they enter the viewport.
 */
export function useGsap(rootRef, setup, { reveal = true } = {}) {
  let ctx = null;

  onMounted(async () => {
    await nextTick();
    if (!rootRef.value || prefersReducedMotion()) return;

    ctx = gsap.context(() => {
      if (reveal) gsap.utils.toArray("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          y: 36,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          delay: Number(el.dataset.reveal) || 0,
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
        });
      });
      setup?.(gsap);
    }, rootRef.value);
  });

  onUnmounted(() => ctx?.revert());
}
