import { useEffect, useState } from "react";

// Track which section id is most-in-view. The rootMargin biases detection
// toward the top of the viewport so a section "wins" as it scrolls past
// the upper third — feels right for sticky-nav scroll-spy.
export function useActiveSection(ids) {
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (typeof window === "undefined" || ids.length === 0) return;
    const observers = [];
    const visible = new Map();

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          visible.set(id, entry.intersectionRatio);
          // Pick the id with the highest intersection ratio currently in view.
          let bestId = null;
          let bestRatio = 0;
          visible.forEach((ratio, k) => {
            if (ratio > bestRatio) {
              bestRatio = ratio;
              bestId = k;
            }
          });
          if (bestId) setActive(bestId);
        },
        { threshold: [0, 0.15, 0.35, 0.6, 1], rootMargin: "-20% 0px -45% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [ids.join("|")]);

  return active;
}
