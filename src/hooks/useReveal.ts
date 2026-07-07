import { useState, useEffect, useRef } from "react";

/* ─── scroll-reveal hook ──────────────────────────── */

// A single IntersectionObserver can only carry one threshold, so we keep one
// shared observer per distinct threshold and register every element against it.
// This replaces the ~20 per-element observers the sections would otherwise
// create with a handful (one per threshold in use).
const observers = new Map<number, IntersectionObserver>();
const callbacks = new WeakMap<Element, () => void>();

function getObserver(threshold: number) {
  let obs = observers.get(threshold);
  if (!obs) {
    obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          callbacks.get(e.target)?.();
          callbacks.delete(e.target);
          obs!.unobserve(e.target);
        }
      },
      { threshold }
    );
    observers.set(threshold, obs);
  }
  return obs;
}

export function useReveal(
  threshold = 0.15
): [React.RefObject<HTMLDivElement>, boolean] {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = getObserver(threshold);
    callbacks.set(el, () => setVisible(true));
    obs.observe(el);
    return () => {
      callbacks.delete(el);
      obs.unobserve(el);
    };
  }, [threshold]);
  return [ref, visible];
}
