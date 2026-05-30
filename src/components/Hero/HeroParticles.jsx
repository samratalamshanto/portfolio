import { useEffect, useRef } from "react";
import "./HeroParticles.css";

const COUNT = 42;
const MAX_DIST = 130;
const SPEED = 0.18;

// Read --accent-rgb (space-separated "r g b") from CSS tokens. We avoid
// reading --accent itself because modern browsers may return it as the
// original oklch(...) string, which we cannot parse.
function readAccent() {
  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue("--accent-rgb")
    .trim();
  if (!raw) return "116, 156, 220";
  // Normalise "116 156 220" -> "116, 156, 220" for legacy rgba() syntax.
  return raw.replace(/\s+/g, ", ");
}

export default function HeroParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = canvas.getContext("2d");
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    let raf = 0;
    let running = true;
    let observerActive = true;
    let accent = readAccent();

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const particles = Array.from({ length: COUNT }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * SPEED,
      vy: (Math.random() - 0.5) * SPEED,
      r: Math.random() * 1.4 + 0.8,
    }));

    const step = () => {
      if (!running) return;
      ctx.clearRect(0, 0, w, h);

      for (const p of particles) {
        p.x += p.vx / w;
        p.y += p.vy / h;
        if (p.x < 0 || p.x > 1) p.vx *= -1;
        if (p.y < 0 || p.y > 1) p.vy *= -1;
        ctx.fillStyle = `rgba(${accent}, 0.55)`;
        ctx.beginPath();
        ctx.arc(p.x * w, p.y * h, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = (a.x - b.x) * w;
          const dy = (a.y - b.y) * h;
          const d = Math.hypot(dx, dy);
          if (d < MAX_DIST) {
            const alpha = (1 - d / MAX_DIST) * 0.22;
            ctx.strokeStyle = `rgba(${accent}, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x * w, a.y * h);
            ctx.lineTo(b.x * w, b.y * h);
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(step);
    };

    const start = () => {
      if (running) return;
      running = true;
      raf = requestAnimationFrame(step);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    resize();
    raf = requestAnimationFrame(step);

    const onResize = () => resize();
    window.addEventListener("resize", onResize);

    const onVisibility = () => {
      if (document.hidden) stop();
      else if (observerActive) start();
    };
    document.addEventListener("visibilitychange", onVisibility);

    const io = new IntersectionObserver(
      ([entry]) => {
        observerActive = entry.isIntersecting;
        if (entry.isIntersecting && !document.hidden) start();
        else stop();
      },
      { threshold: 0 }
    );
    io.observe(canvas);

    const themeObserver = new MutationObserver(() => {
      accent = readAccent();
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => {
      stop();
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
      io.disconnect();
      themeObserver.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-particles" aria-hidden="true" />;
}
