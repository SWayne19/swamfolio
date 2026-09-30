import { onMounted, onUnmounted } from "vue";

/**
 * Refined scroll animations inspired by jomor.design.
 *
 * - `data-reveal`        — fades in + subtle translateY when entering viewport.
 *   Optional values: "left", "right", "scale" (default is "up").
 * - `data-reveal-delay`  — delay in ms before reveal starts (for staggering).
 * - `data-parallax`      — subtle translateY based on scroll. Value is speed
 *   multiplier (e.g. "0.08" = 8% of scroll offset).
 */
export function useScrollAnimation() {
  let rafId = null;
  let observer = null;

  // ── Parallax ──
  const applyParallax = () => {
    const scrollY = window.scrollY;
    const viewH = window.innerHeight;

    // Standard element parallax
    const els = document.querySelectorAll("[data-parallax]");
    for (const el of els) {
      const speed = parseFloat(el.dataset.parallax) || 0.08;
      const rect = el.getBoundingClientRect();
      const center = rect.top + rect.height / 2 + scrollY;
      const offset = (scrollY - center + viewH / 2) * speed;
      el.style.transform = `translate3d(0, ${offset}px, 0)`;
      el.style.willChange = "transform";
    }

    // Image parallax — images taller than container shift within
    const imgs = document.querySelectorAll("[data-parallax-img]");
    for (const img of imgs) {
      const parent = img.parentElement;
      if (!parent) continue;
      const rect = parent.getBoundingClientRect();
      // How far through the viewport the element is (0 = top, 1 = bottom)
      const progress = (viewH - rect.top) / (viewH + rect.height);
      const clamped = Math.max(0, Math.min(1, progress));
      // Shift image within its container (max ~5% of height)
      const shift = (clamped - 0.5) * -10;
      img.style.transform = `translate3d(0, ${shift}%, 0)`;
      img.style.willChange = "transform";
    }
  };

  const onScroll = () => {
    if (rafId) return;
    rafId = requestAnimationFrame(() => {
      applyParallax();
      rafId = null;
    });
  };

  // ── Scroll reveal ──
  const setupReveal = () => {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const delay = parseInt(entry.target.dataset.revealDelay, 10) || 0;
            if (delay > 0) {
              setTimeout(() => {
                entry.target.classList.add("revealed");
              }, delay);
            } else {
              entry.target.classList.add("revealed");
            }
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -60px 0px" }
    );

    const els = document.querySelectorAll("[data-reveal]");
    for (const el of els) {
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
