<template>
  <canvas ref="dotCanvas" class="dot-canvas" aria-hidden="true"></canvas>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const dotCanvas = ref(null);
let animFrameId = null;
let dots = [];
let onResize = null;

const initDots = () => {
  const canvas = dotCanvas.value;
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const dpr = window.devicePixelRatio || 1;

  onResize = () => {
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    ctx.scale(dpr, dpr);
  };
  onResize();
  window.addEventListener("resize", onResize);

  const COUNT = 60;
  dots = Array.from({ length: COUNT }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    r: 1 + Math.random() * 3,
    vy: 1.2 + Math.random() * 1.8,
  }));

  const draw = () => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    ctx.clearRect(0, 0, w, h);

    const dark = document.documentElement.classList.contains("dark");
    ctx.fillStyle = dark ? "rgba(149, 165, 190, 0.55)" : "rgba(42, 53, 72, 0.7)";

    for (const d of dots) {
      d.y += d.vy;
      if (d.y > h + 10) {
        d.y = -10;
        d.x = Math.random() * w;
      }

      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      ctx.fill();
    }
    animFrameId = requestAnimationFrame(draw);
  };
  draw();
};

onMounted(initDots);

onUnmounted(() => {
  if (animFrameId) cancelAnimationFrame(animFrameId);
  if (onResize) window.removeEventListener("resize", onResize);
});
</script>