import { cn } from "@/lib/utils";

/** A bee on a figure-8. FRONT band; aria-hidden, pointer-events none. */
export function Bee({
  className, path, duration = "14s", delay = "0s", size = 30,
}: { className?: string; path: string; duration?: string; delay?: string; size?: number }) {
  return (
    <span
      aria-hidden="true"
      className={cn("yh-front yh-bee absolute", className)}
      style={{ offsetPath: path, ["--bee-dur" as string]: duration, animationDelay: delay }}
    >
      <svg width={size} height={size * 0.8} viewBox="0 0 50 40" fill="none" className="yh-bee-body">
        <g className="yh-bee-wing">
          <ellipse cx="20" cy="12" rx="9" ry="7" fill="var(--sky)" opacity=".75" />
          <ellipse cx="32" cy="12" rx="9" ry="7" fill="var(--sky)" opacity=".75" />
        </g>
        <ellipse cx="26" cy="24" rx="15" ry="10" fill="var(--apricot)" />
        <path d="M19 15v18M26 14v20M33 15v18" stroke="var(--ink)" strokeWidth="3.2" strokeLinecap="round" opacity=".8" />
        <circle cx="10" cy="24" r="5.5" fill="var(--ink)" opacity=".85" />
        <path d="M41 24l6 2" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" opacity=".8" />
      </svg>
    </span>
  );
}
