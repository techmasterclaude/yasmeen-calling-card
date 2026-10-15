import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ *
 * Hand-authored botanical layer. All paths drawn for this page.
 * Nothing here is decorative-but-interactive: every export is
 * aria-hidden, and anything in the FRONT band is pointer-events:none.
 * ------------------------------------------------------------------ */

type FloraProps = { className?: string; style?: React.CSSProperties };

/**
 * A leafy tree. The canopy is a lobed outline path with individually drawn
 * leaves along the boughs, NOT a stack of overlapping circles — a pile of
 * primitives at this size reads as clip art rather than illustration.
 * Lives in the BEHIND band. Sways at the trunk.
 */
export function Tree({ className, style }: FloraProps) {
  return (
    <span aria-hidden="true" className={cn("absolute", className)} style={style}>
      <svg width="100%" height="100%" viewBox="0 0 220 300" fill="none" preserveAspectRatio="xMidYMax meet">
        <g className="yh-sway" style={{ ["--sway-origin" as string]: "50% 100%" }}>
          {/* trunk and boughs */}
          <path
            d="M104 300c0-40 2-72 4-92 2-18-12-30-26-40"
            stroke="var(--bark)" strokeWidth="9" strokeLinecap="round" opacity=".7"
          />
          <path
            d="M112 300c0-52 2-90 6-116 3-20 20-30 36-40M108 214c-2-14-12-22-24-30"
            stroke="var(--bark)" strokeWidth="6" strokeLinecap="round" opacity=".6"
          />

          {/* canopy: one lobed silhouette, then a second lighter lobe for depth */}
          <path
            d="M110 22c26 0 40 12 48 26 20-2 34 12 34 30 0 14-8 24-20 29 6 10 4 24-6 32-11 9-26 8-36 1-9 10-24 14-38 9-13-5-21-16-22-28-14-1-26-11-28-25-2-15 7-28 20-33-2-16 8-30 22-35 8-4 18-6 26-6z"
            fill="var(--leaf)" opacity=".62"
          />
          <path
            d="M104 40c20-4 36 4 44 18 14 0 24 12 22 26-2 13-13 21-26 21-4 11-16 18-29 16-13-2-22-12-23-24-11-3-18-13-16-25 2-13 14-22 28-22z"
            fill="var(--leaf)" opacity=".38"
          />

          {/* individual leaves catching the edge of the canopy */}
          {[
            [46, 96, -40], [176, 88, 34], [70, 40, -18],
            [154, 40, 22], [104, 154, 6], [40, 138, -52], [184, 132, 46],
          ].map(([x, y, r], i) => (
            <ellipse
              key={i} cx={x} cy={y} rx="15" ry="7.5"
              fill="var(--leaf)" opacity=".85"
              transform={`rotate(${r} ${x} ${y})`}
            />
          ))}

          {/* blossoms tucked into the foliage */}
          <circle cx="86" cy="70" r="7" fill="var(--petal)" opacity=".9" />
          <circle cx="150" cy="106" r="6" fill="var(--petal)" opacity=".85" />
          <circle cx="62" cy="124" r="5.5" fill="var(--apricot)" opacity=".9" />
          <circle cx="128" cy="52" r="5" fill="var(--wisteria)" opacity=".9" />
        </g>
      </svg>
    </span>
  );
}

/** A five-petal blossom on a stem. */
export function Blossom({
  className, style, petal = "var(--petal)", heart = "var(--apricot)", size = 64, bloom = false, delay = 0,
}: FloraProps & { petal?: string; heart?: string; size?: number; bloom?: boolean; delay?: number }) {
  return (
    <span aria-hidden="true" className={cn("absolute", className)} style={style}>
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <g className="yh-sway" style={{ ["--sway-origin" as string]: "50% 92%" }}>
          {[0, 72, 144, 216, 288].map((deg, i) => (
            <g
              key={deg}
              className={bloom ? "yh-bloom" : undefined}
              style={bloom ? { transformOrigin: "50px 50px", ["--bloom-delay" as string]: `${delay + i * 0.09}s` } : undefined}
            >
              <ellipse
                cx="50" cy="30" rx="13" ry="21"
                fill={petal}
                transform={`rotate(${deg} 50 50)`}
                opacity=".92"
              />
            </g>
          ))}
          <circle cx="50" cy="50" r="10" fill={heart} />
          <circle cx="50" cy="50" r="4.5" fill="var(--paper)" opacity=".55" />
        </g>
      </svg>
    </span>
  );
}

/** A single leaf, for scattering. */
export function Leaf({
  className, style, fill = "var(--leaf)", size = 40, rotate = 0, unfurl = false, delay = 0,
}: FloraProps & { fill?: string; size?: number; rotate?: number; unfurl?: boolean; delay?: number }) {
  return (
    <span aria-hidden="true" className={cn("absolute", className)} style={style}>
      <svg width={size} height={size} viewBox="0 0 60 60" fill="none" style={{ transform: `rotate(${rotate}deg)` }}>
        <g
          className={unfurl ? "yh-unfurl" : undefined}
          style={unfurl ? { transformOrigin: "8px 52px", ["--unfurl-delay" as string]: `${delay}s` } : undefined}
        >
        <g className="yh-sway" style={{ ["--sway-origin" as string]: "14% 86%" }}>
          <path d="M8 52C8 26 26 8 52 8c0 26-18 44-44 44z" fill={fill} opacity=".9" />
          <path d="M8 52C20 40 34 26 50 10" stroke="var(--leaf-deep)" strokeWidth="2" strokeLinecap="round" opacity=".45" />
        </g>
        </g>
      </svg>
    </span>
  );
}

/** Falling petals. FRONT band. Hidden entirely under reduced motion. */
export function PetalFall({ count = 5 }: { count?: number }) {
  const petals = [
    { left: "8%",  delay: "0s",   dur: "15s", fill: "var(--petal)",    size: 14 },
    { left: "27%", delay: "3.5s", dur: "18s", fill: "var(--wisteria)", size: 11 },
    { left: "52%", delay: "7s",   dur: "16s", fill: "var(--petal)",    size: 16 },
    { left: "71%", delay: "1.8s", dur: "20s", fill: "var(--apricot)",  size: 12 },
    { left: "89%", delay: "9.5s", dur: "17s", fill: "var(--petal)",    size: 13 },
  ].slice(0, count);

  return (
    <div aria-hidden="true" className="yh-front absolute inset-0 overflow-hidden">
      {petals.map((p, i) => (
        <span
          key={i}
          className="yh-petal absolute top-0"
          style={{ left: p.left, animationDelay: p.delay, animationDuration: p.dur }}
        >
          <svg width={p.size} height={p.size} viewBox="0 0 20 20" fill="none">
            <path d="M10 1c5 4 7 9 5 13s-8 5-11 1S5 4 10 1z" fill={p.fill} opacity=".9" />
          </svg>
        </span>
      ))}
    </div>
  );
}
