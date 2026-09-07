import { onMounted, onUnmounted } from "vue";

/**
 * Composable for parallax transforms and scroll-reveal animations.
 *
 * - Elements with `data-parallax` attribute get translateY based on scroll.
 *   Value is the speed multiplier (e.g. "0.3" = 30% of scroll speed).
 *
 * - Elements with `data-reveal` attribute fade/slide in when they enter
 *   the viewport. Optional value: "left", "right", "scale" (default is "up").
 */
export function useScrollAnimation() {
  let rafId = null;
  let observer = null;

  const applyParallax = () => {
    const els = document.querySelectorAll("[data-parallax]");
    const scrollY = window.scrollY;

    for (const el of els) {
      const speed = parseFloat(el.dataset.parallax) || 0.3;
      const rect = el.getBoundingClientRect();
      const center = rect.top + rect.height / 2 + scrollY;
      const offset = (scrollY - center + window.innerHeight / 2) * speed;
      el.style.transform = `translateY(${offset}px)`;
    }
  };

  const onScroll = () => {
    if (rafId) return;
    rafId = requestAnimationFrame(() => {
      applyParallax();
      rafId = null;
    });
  };

  const setupReveal = () => {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    const revealEls = document.querySelectorAll("[data-reveal]");
    for (const el of revealEls) {
      observer.observe(el);
    }
  };

  onMounted(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    applyParallax();
    setupReveal();
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", onScroll);
    if (rafId) cancelAnimationFrame(rafId);
    if (observer) observer.disconnect();
  });
}
