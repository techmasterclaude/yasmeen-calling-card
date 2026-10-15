"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Staggered reveal driven by IntersectionObserver.
 *
 * The contract that keeps this safe: the hidden state lives behind
 * `html.js-reveal`, a class an inline script in the root layout adds only when
 * JS is running and reduced motion is not requested. If the script never runs,
 * every child is visible with no transition, so content is never gated on JS.
 */
export function Reveal({
  children,
  className,
  stagger = 90,
  y = 16,
  scale = 1,
  once = true,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  y?: number;
  scale?: number;
  once?: boolean;
  as?: "div" | "section" | "ul" | "header";
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !document.documentElement.classList.contains("js-reveal")) return;

    Array.from(el.children).forEach((c, i) => {
      (c as HTMLElement).classList.add("yh-r");
      (c as HTMLElement).style.setProperty("--r-d", `${i * stagger}ms`);
    });

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            if (once) io.unobserve(e.target);
          } else if (!once) {
            e.target.classList.remove("is-in");
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [stagger, once]);

  return (
    <Tag
      ref={ref as never}
      className={cn("yh-reveal", className)}
      style={{ ["--r-y" as string]: `${y}px`, ["--r-s" as string]: scale }}
    >
      {children}
    </Tag>
  );
}

/**
 * A heading whose words rise, un-blur and settle one after another.
 * Splits on spaces and keeps them as real text nodes, so the accessible name
 * and the copyable text are unchanged.
 */
export function RevealWords({
  text,
  className,
  stagger = 62,
  as: Tag = "h2",
  delay = 0,
}: {
  text: string;
  className?: string;
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "p";
  delay?: number;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !document.documentElement.classList.contains("js-reveal")) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const words = text.split(" ");
  return (
    <Tag ref={ref as never} className={cn("yh-words", className)}>
      {words.map((w, i) => (
        <span key={i}>
          <span className="yh-w" style={{ ["--w-d" as string]: `${delay + i * stagger}ms` }}>
            {w}
          </span>
          {i < words.length - 1 ? " " : null}
        </span>
      ))}
    </Tag>
  );
}
