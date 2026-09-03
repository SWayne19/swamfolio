<template>
  <canvas ref="rainCanvas" class="dot-canvas" aria-hidden="true"></canvas>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const rainCanvas = ref(null);
let animFrameId = null;
let lines = [];
let onResize = null;

const initRain = () => {
  const canvas = rainCanvas.value;
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

  const COUNT = 35;
  lines = Array.from({ length: COUNT }, () => createLine());

  function createLine() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    return {
      x: Math.random() * w,
      y: Math.random() * h,
      len: 15 + Math.random() * 30,
      speed: 2 + Math.random() * 4,
      opacity: 0.25 + Math.random() * 0.35,
      width: 0.5 + Math.random() * 1,
    };
  }

  const draw = () => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    ctx.clearRect(0, 0, w, h);

    const dark = document.documentElement.classList.contains("dark");

    for (const l of lines) {
      l.y += l.speed;

      if (l.y > h + l.len) {
        l.y = -l.len;
        l.x = Math.random() * w;
      }

      const color = dark
        ? `rgba(149, 165, 190, ${l.opacity})`
        : `rgba(42, 53, 72, ${l.opacity})`;

      ctx.beginPath();
      ctx.moveTo(l.x, l.y);
      ctx.lineTo(l.x, l.y + l.len);
      ctx.strokeStyle = color;
      ctx.lineWidth = l.width;
      ctx.lineCap = "round";
      ctx.stroke();
    }

    animFrameId = requestAnimationFrame(draw);
  };
  draw();
};

onMounted(initRain);

onUnmounted(() => {
  if (animFrameId) cancelAnimationFrame(animFrameId);
  if (onResize) window.removeEventListener("resize", onResize);
});
</script>
