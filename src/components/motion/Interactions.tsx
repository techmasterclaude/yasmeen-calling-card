"use client";

import { useEffect } from "react";

/**
 * Two pointer interactions, both written as CSS custom properties so the
 * easing and the transform live in the stylesheet rather than in a rAF loop.
 *
 *   [data-tilt]   a card that tips toward the pointer, with a sheen that
 *                 tracks the same position
 *   [data-magnet] a button that leans toward an approaching pointer
 *
 * Attaches only for a fine pointer with reduced motion off, and detaches on
 * unmount. Nothing here is required for the page to work.
 */
export function Interactions() {
  useEffect(() => {
    const fine = matchMedia("(hover: hover) and (pointer: fine)").matches;
    const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || still) return;

    const cleanups: (() => void)[] = [];

    document.querySelectorAll<HTMLElement>("[data-tilt]").forEach((el) => {
      const MAX = Number(el.dataset.tilt) || 6;
      const move = (e: PointerEvent) => {
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        el.classList.add("is-tilting");
        el.style.setProperty("--tilt-y", String((px - 0.5) * 2 * MAX));
        el.style.setProperty("--tilt-x", String((0.5 - py) * 2 * MAX));
        el.style.setProperty("--tilt-lift", "-6px");
        el.style.setProperty("--px", `${px * 100}%`);
        el.style.setProperty("--py", `${py * 100}%`);
      };
      const leave = () => {
        el.classList.remove("is-tilting");
        el.style.setProperty("--tilt-y", "0");
        el.style.setProperty("--tilt-x", "0");
        el.style.setProperty("--tilt-lift", "0px");
      };
      el.addEventListener("pointermove", move);
      el.addEventListener("pointerleave", leave);
      cleanups.push(() => {
        el.removeEventListener("pointermove", move);
        el.removeEventListener("pointerleave", leave);
      });
    });

    document.querySelectorAll<HTMLElement>("[data-magnet]").forEach((el) => {
      const PULL = Number(el.dataset.magnet) || 0.28;
      const RADIUS = 110;
      const move = (e: PointerEvent) => {
        const r = el.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        if (Math.hypot(dx, dy) > RADIUS + Math.max(r.width, r.height) / 2) return;
        el.classList.add("is-pulling");
        el.style.setProperty("--mx", `${dx * PULL}px`);
        el.style.setProperty("--my", `${dy * PULL}px`);
      };
      const leave = () => {
        el.classList.remove("is-pulling");
        el.style.setProperty("--mx", "0px");
        el.style.setProperty("--my", "0px");
      };
      window.addEventListener("pointermove", move, { passive: true });
      el.addEventListener("pointerleave", leave);
      cleanups.push(() => {
        window.removeEventListener("pointermove", move);
        el.removeEventListener("pointerleave", leave);
      });
    });

    return () => cleanups.forEach((c) => c());
  }, []);

  return null;
}
