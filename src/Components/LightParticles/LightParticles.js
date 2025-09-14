import React, { useEffect, useRef } from "react";
import "./LightParticlesStyles.css";

export default function LightParticles({
  density = 0.000045,
  minParticles = 40,
  maxParticles = 140,
  colors = ["#9bbde6", "#b5cae8", "#d0def2"], // slightly darker on white
  radius = [1.0, 2.2],
  speed = [18, 42],
  linkDistance = 0, // background-only look
  linkOpacity = 0.06,
  glow = 4,
  twinkle = true,
  excludeSelectors = ["header", ".carousel-container", "footer"], // << NEW
}) {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });

    let w = 0,
      h = 0,
      dpr = 1;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    function fit() {
      w = window.innerWidth;
      h = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0); // draw in CSS pixels
    }

    fit();
    window.addEventListener("resize", fit, { passive: true });

    // Particle count
    const area = w * h;
    let count = Math.round(area * density);
    if (w < 900) count = Math.round(count * 0.65);
    count = Math.max(minParticles, Math.min(maxParticles, count));

    // Helpers
    const rnd = (a, b) => a + Math.random() * (b - a);
    const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
    const dir = () => Math.random() * Math.PI * 2;

    // Build particles
    const particles = Array.from({ length: count }, () => {
      const ang = dir();
      const spd = rnd(speed[0], speed[1]);
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        r: rnd(radius[0], radius[1]),
        vx: Math.cos(ang) * spd,
        vy: Math.sin(ang) * spd,
        c: pick(colors),
        a: rnd(0.55, 0.9),
        phase: Math.random() * Math.PI,
        tw: rnd(0.8, 1.4),
      };
    });

    // Collect elements to exclude
    const getExclusionRects = () => {
      const rects = [];
      excludeSelectors.forEach((sel) => {
        document.querySelectorAll(sel).forEach((el) => {
          const r = el.getBoundingClientRect();
          // Only add if it intersects the viewport
          if (
            r.width > 0 &&
            r.height > 0 &&
            r.bottom > 0 &&
            r.top < window.innerHeight
          ) {
            rects.push(r);
          }
        });
      });
      return rects;
    };

    let last = performance.now();
    function frame(now) {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      ctx.clearRect(0, 0, w, h);

      // Draw particles
      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      for (const p of particles) {
        if (!reduceMotion) {
          p.x += p.vx * dt;
          p.y += p.vy * dt;
          if (p.x > w + p.r) p.x = -p.r;
          if (p.x < -p.r) p.x = w + p.r;
          if (p.y > h + p.r) p.y = -p.r;
          if (p.y < -p.r) p.y = h + p.r;
          if (twinkle) p.phase += 0.8 * p.tw * dt;
        }
        const alpha = twinkle ? p.a * (0.85 + 0.15 * Math.sin(p.phase)) : p.a;
        ctx.shadowBlur = glow;
        ctx.shadowColor = p.c;
        ctx.fillStyle = p.c;
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      // Optional link lines (kept off by default)
      if (linkDistance > 0) {
        ctx.save();
        ctx.globalCompositeOperation = "screen";
        for (let i = 0; i < particles.length; i++) {
          const a = particles[i];
          for (let j = i + 1; j < particles.length; j++) {
            const b = particles[j];
            const dx = a.x - b.x;
            const dy = a.y - b.y;
            const d2 = dx * dx + dy * dy;
            const maxD = linkDistance;
            if (d2 < maxD * maxD) {
              const d = Math.sqrt(d2);
              const t = 1 - d / maxD;
              ctx.globalAlpha = linkOpacity * t;
              ctx.strokeStyle = "rgba(0, 92, 115, 0.85)";
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.stroke();
            }
          }
        }
        ctx.restore();
      }

      // ERASE particles under excluded elements (header, carousel, footer)
      const rects = getExclusionRects();
      for (const r of rects) {
        ctx.clearRect(r.left, r.top, r.width, r.height);
      }

      rafRef.current = requestAnimationFrame(frame);
    }

    if (reduceMotion) {
      // Draw one frame (no animation)
      ctx.clearRect(0, 0, w, h);
      particles.forEach((p) => {
        ctx.shadowBlur = glow;
        ctx.shadowColor = p.c;
        ctx.fillStyle = p.c;
        ctx.globalAlpha = p.a;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });
    } else {
      rafRef.current = requestAnimationFrame(frame);
    }

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", fit);
    };
  }, [
    density,
    minParticles,
    maxParticles,
    colors,
    radius,
    speed,
    linkDistance,
    linkOpacity,
    glow,
    twinkle,
    excludeSelectors,
  ]);

  return (
    <div className="light-particles" aria-hidden="true">
      <canvas ref={canvasRef} className="light-particles__canvas" />
    </div>
  );
}
