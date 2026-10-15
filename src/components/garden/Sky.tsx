import { cn } from "@/lib/utils";

/** A soft sun with slowly turning rays. BEHIND band. */
export function Sun({ className, size = 260 }: { className?: string; size?: number }) {
  return (
    <span aria-hidden="true" className={cn("absolute", className)} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
        <g className="yh-rays" opacity=".55">
          {Array.from({ length: 12 }, (_, i) => (
            <path
              key={i}
              d="M100 100 L86 8 L114 8 Z"
              fill="var(--apricot)"
              opacity={i % 2 ? 0.55 : 0.85}
              transform={`rotate(${i * 30} 100 100)`}
            />
          ))}
        </g>
        <circle cx="100" cy="100" r="46" fill="var(--apricot)" opacity=".9" />
        <circle cx="100" cy="100" r="36" fill="#FFE7C6" opacity=".95" />
      </svg>
    </span>
  );
}

/** A few clouds drifting across the top of a section. BEHIND band. */
export function Clouds({ className }: { className?: string }) {
  const clouds = [
    { top: "6%",  scale: 1,   dur: "95s",  delay: "-20s", op: 0.9 },
    { top: "18%", scale: 0.7, dur: "130s", delay: "-70s", op: 0.75 },
    { top: "11%", scale: 0.55, dur: "110s", delay: "-45s", op: 0.6 },
  ];
  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      {clouds.map((c, i) => (
        <span
          key={i}
          className="yh-cloud absolute left-0"
          style={{
            top: c.top, opacity: c.op,
            ["--cloud-dur" as string]: c.dur,
            ["--cloud-delay" as string]: c.delay,
          }}
        >
          <svg width={180 * c.scale} height={70 * c.scale} viewBox="0 0 180 70" fill="none">
            <path
              d="M28 62h124a20 20 0 0 0 2-40 30 30 0 0 0-56-10 24 24 0 0 0-40 14A22 22 0 0 0 28 62z"
              fill="#FFFFFF" opacity=".9"
            />
            <path
              d="M28 62h124a20 20 0 0 0 2-40 30 30 0 0 0-56-10 24 24 0 0 0-40 14A22 22 0 0 0 28 62z"
              fill="var(--sky)" opacity=".25"
            />
          </svg>
        </span>
      ))}
    </div>
  );
}
