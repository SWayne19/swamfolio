import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onUnmounted } from "vue";

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function useScrollReveal() {
  const triggers = [];

  const addTrigger = (trigger) => {
    triggers.push(trigger);
  };

  onUnmounted(() => {
    triggers.forEach((t) => t.kill());
    triggers.length = 0;
  });

  const defaultConfig = {
    duration: 0.8,
    ease: "power3.out",
    start: "top 85%",
  };

  function revealUp(el, config = {}) {
    if (!el || prefersReducedMotion()) return;
    const tween = gsap.from(el, {
      y: 40,
      opacity: 0,
      duration: config.duration ?? defaultConfig.duration,
      delay: config.delay ?? 0,
      ease: config.ease ?? defaultConfig.ease,
      scrollTrigger: {
        trigger: el,
        start: config.start ?? defaultConfig.start,
        once: true,
        onEnter: (self) => addTrigger(self),
      },
    });
    return tween;
  }

  function revealLeft(el, config = {}) {
    if (!el || prefersReducedMotion()) return;
    gsap.from(el, {
      x: -50,
      opacity: 0,
      duration: config.duration ?? defaultConfig.duration,
      delay: config.delay ?? 0,
      ease: config.ease ?? defaultConfig.ease,
      scrollTrigger: {
        trigger: el,
        start: config.start ?? defaultConfig.start,
        once: true,
        onEnter: (self) => addTrigger(self),
      },
    });
  }

  function revealRight(el, config = {}) {
    if (!el || prefersReducedMotion()) return;
    gsap.from(el, {
      x: 50,
      opacity: 0,
      duration: config.duration ?? defaultConfig.duration,
      delay: config.delay ?? 0,
      ease: config.ease ?? defaultConfig.ease,
      scrollTrigger: {
        trigger: el,
        start: config.start ?? defaultConfig.start,
        once: true,
        onEnter: (self) => addTrigger(self),
      },
    });
  }

  function revealScale(el, config = {}) {
    if (!el || prefersReducedMotion()) return;
    gsap.from(el, {
      scale: config.from ?? 0.9,
      opacity: 0,
      duration: config.duration ?? 0.6,
      delay: config.delay ?? 0,
      ease: config.ease ?? defaultConfig.ease,
      scrollTrigger: {
        trigger: el,
        start: config.start ?? defaultConfig.start,
        once: true,
        onEnter: (self) => addTrigger(self),
      },
    });
  }

  function staggerReveal(els, config = {}) {
    if (!els || !els.length || prefersReducedMotion()) return;
    gsap.from(els, {
      y: config.y ?? 40,
      opacity: 0,
      duration: config.duration ?? defaultConfig.duration,
      delay: config.delay ?? 0,
      stagger: config.stagger ?? 0.1,
      ease: config.ease ?? defaultConfig.ease,
      scrollTrigger: {
        trigger: config.trigger ?? els[0],
        start: config.start ?? defaultConfig.start,
        once: true,
        onEnter: (self) => addTrigger(self),
      },
    });
  }

  return { revealUp, revealLeft, revealRight, revealScale, staggerReveal };
}
