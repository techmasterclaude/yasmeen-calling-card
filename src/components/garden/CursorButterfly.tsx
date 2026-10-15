"use client";

import { useEffect, useRef } from "react";

/**
 * One butterfly that lazily follows the pointer. ~1 KB of vanilla JS, no library.
 * CSS hides it entirely on touch devices and under prefers-reduced-motion
 * (.yh-cursor-fly), and the effect only attaches when it is visible.
 * It is aria-hidden and pointer-events:none, so it never intercepts a click.
 */
export function CursorButterfly() {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || getComputedStyle(el).display === "none") return;

    // Parked off-screen until the pointer first moves, so it never sits on a
    // headline at load in a narrow window that still reports a fine pointer.
    let tx = -120, ty = -120;
    let x = tx, y = ty, px = x, py = y;
    let raf = 0, active = false;

    const onMove = (e: PointerEvent) => {
      // trail behind and above the cursor, never sit on the thing being pointed at
      tx = e.clientX - 46;
      ty = e.clientY - 54;
      if (!active) { active = true; raf = requestAnimationFrame(tick); }
    };

    const tick = () => {
      px = x; py = y;
      x += (tx - x) * 0.06;
      y += (ty - y) * 0.06;
      const dx = x - px, dy = y - py;
      const speed = Math.hypot(dx, dy);
      const angle = speed > 0.2 ? Math.atan2(dy, dx) * (180 / Math.PI) : 0;
      // face the direction of travel, flatten to level as it settles
      el.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${angle * 0.35}deg)`;
      if (speed > 0.05) raf = requestAnimationFrame(tick);
      else active = false;
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => { window.removeEventListener("pointermove", onMove); cancelAnimationFrame(raf); };
  }, []);

  return (
    <span
      ref={ref}
      aria-hidden="true"
      className="yh-cursor-fly yh-front fixed left-0 top-0 z-30 will-change-transform"
      style={{ transform: "translate3d(-120px, -120px, 0)" }}
    >
      <svg width="44" height="38" viewBox="0 0 100 86" fill="none">
        <g className="yh-wing" style={{ ["--wing-origin" as string]: "50% 62%" }}>
          <path d="M49 54C41 24 30 8 18 6 6 4 1 15 4 28c3 13 16 26 45 30z" fill="var(--wisteria)" />
          <path d="M51 54c8-30 19-46 31-48 12-2 17 9 14 22-3 13-16 26-45 30z" fill="var(--wisteria)" />
          <path d="M49 56C43 74 34 84 24 83 14 82 11 73 15 65c4-8 15-12 34-9z" fill="var(--sky)" />
          <path d="M51 56c6 18 15 28 25 27 10-1 13-10 9-18-4-8-15-12-34-9z" fill="var(--sky)" />
          <circle cx="26" cy="26" r="5" fill="var(--paper)" opacity=".7" />
          <circle cx="74" cy="26" r="5" fill="var(--paper)" opacity=".7" />
        </g>
        <ellipse cx="50" cy="55" rx="3.2" ry="21" fill="var(--bark)" />
        <circle cx="50" cy="33" r="4" fill="var(--bark)" />
        <path d="M48 30C44 22 40 19 35 18M52 30c4-8 8-11 13-12" stroke="var(--bark)" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </span>
  );
}
