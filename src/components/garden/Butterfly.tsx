import { cn } from "@/lib/utils";

/**
 * A butterfly drawn as real SVG paths (no emoji, no raster).
 *
 * Motion is entirely CSS — see globals.css:
 *   .yh-butterfly  drifts along `offset-path`
 *   .yh-wing       flaps via scaleX
 * Both stop dead under prefers-reduced-motion.
 *
 * Always rendered inside the FRONT band, so it is aria-hidden and pointer-events:none.
 */
export function Butterfly({
  className,
  wing = "var(--petal)",
  wingAlt = "var(--wisteria)",
  body = "var(--bark)",
  size = 34,
  path,
  duration = "19s",
  delay = "0s",
  flapDelay = "0s",
  opacity = 0.9,
}: {
  className?: string;
  wing?: string;
  wingAlt?: string;
  body?: string;
  size?: number;
  /** An `offset-path` value. Omit for a butterfly that sits still. */
  path?: string;
  duration?: string;
  delay?: string;
  flapDelay?: string;
  opacity?: number;
}) {
  return (
    <span
      aria-hidden="true"
      className={cn("absolute yh-front", path && "yh-butterfly", className)}
      style={{
        offsetPath: path,
        animationDuration: duration,
        animationDelay: delay,
        opacity,
      }}
    >
      <svg width={size} height={size * 0.86} viewBox="0 0 100 86" fill="none">
        {/* upper wings */}
        <g className="yh-wing" style={{ animationDelay: flapDelay, ["--wing-origin" as string]: "50% 62%" }}>
          <path
            d="M49 54C41 24 30 8 18 6 6 4 1 15 4 28c3 13 16 26 45 30z"
            fill={wing}
          />
          <path
            d="M51 54c8-30 19-46 31-48 12-2 17 9 14 22-3 13-16 26-45 30z"
            fill={wing}
          />
          {/* lower wings */}
          <path
            d="M49 56C43 74 34 84 24 83 14 82 11 73 15 65c4-8 15-12 34-9z"
            fill={wingAlt}
          />
          <path
            d="M51 56c6 18 15 28 25 27 10-1 13-10 9-18-4-8-15-12-34-9z"
            fill={wingAlt}
          />
          {/* wing spots */}
          <circle cx="26" cy="26" r="5" fill="var(--paper)" opacity=".7" />
          <circle cx="74" cy="26" r="5" fill="var(--paper)" opacity=".7" />
        </g>
        {/* body + antennae sit above the wings */}
        <ellipse cx="50" cy="55" rx="3.2" ry="21" fill={body} />
        <circle cx="50" cy="33" r="4" fill={body} />
        <path d="M48 30C44 22 40 19 35 18" stroke={body} strokeWidth="2" strokeLinecap="round" />
        <path d="M52 30c4-8 8-11 13-12" stroke={body} strokeWidth="2" strokeLinecap="round" />
        <circle cx="34.5" cy="17.5" r="2" fill={body} />
        <circle cx="65.5" cy="17.5" r="2" fill={body} />
      </svg>
    </span>
  );
}
