import { cn } from "@/lib/utils";

/**
 * A strip of meadow along the bottom of a section: grass blades that ripple
 * with staggered sway, and wildflowers among them. Sits in the BEHIND band
 * so buttons and text stay on top; it is aria-hidden throughout.
 */
export function Meadow({
  className,
  blades = 46,
  flowers = true,
  height = 96,
}: {
  className?: string;
  blades?: number;
  flowers?: boolean;
  height?: number;
}) {
  // Deterministic pseudo-random so server and client render the same meadow.
  const rnd = (i: number, k: number) => {
    const x = Math.sin(i * 12.9898 + k * 78.233) * 43758.5453;
    return x - Math.floor(x);
  };

  const flowerPalette = ["var(--petal)", "var(--wisteria)", "var(--apricot)", "var(--sky)"];

  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-x-0 bottom-0 overflow-hidden", className)}
      style={{ height }}
    >
      <svg
        width="100%" height={height}
        viewBox={`0 0 1440 ${height}`}
        preserveAspectRatio="none"
        fill="none"
      >
        {/* ground */}
        <path
          d={`M0 ${height} L0 ${height - 22} Q 360 ${height - 34} 720 ${height - 24} T 1440 ${height - 26} L1440 ${height} Z`}
          fill="var(--leaf)" opacity=".38"
        />
      </svg>

      {/* blades are separate elements so each can carry its own animation delay */}
      {Array.from({ length: blades }, (_, i) => {
        const x = (i / blades) * 100 + rnd(i, 1) * 2;
        const h = 34 + rnd(i, 2) * 44;
        const w = 8 + rnd(i, 3) * 6;
        const lean = (rnd(i, 4) - 0.5) * 22;
        const shade = rnd(i, 5) > 0.5 ? "var(--leaf)" : "var(--leaf-deep)";
        const op = shade === "var(--leaf)" ? 0.85 : 0.42;
        return (
          <span
            key={i}
            className="yh-grass absolute bottom-3"
            style={{
              left: `${x}%`,
              width: w, height: h,
              ["--grass-delay" as string]: `${-rnd(i, 6) * 3.6}s`,
            }}
          >
            <svg width={w} height={h} viewBox="0 0 12 60" preserveAspectRatio="none">
              <path
                d={`M6 60 C ${6 + lean * 0.2} 40, ${6 + lean} 20, ${6 + lean * 0.6} 0`}
                stroke={shade} strokeWidth="3.2" strokeLinecap="round" opacity={op} fill="none"
              />
            </svg>
          </span>
        );
      })}

      {flowers &&
        Array.from({ length: Math.round(blades / 6) }, (_, i) => {
          const x = 4 + (i / (blades / 6)) * 92 + rnd(i, 7) * 6;
          const size = 14 + rnd(i, 8) * 12;
          const fill = flowerPalette[i % flowerPalette.length];
          const stem = 26 + rnd(i, 9) * 26;
          return (
            <span
              key={`f${i}`}
              className="yh-grass absolute bottom-3"
              style={{
                left: `${x}%`, width: size, height: stem + size,
                ["--grass-delay" as string]: `${-rnd(i, 10) * 3.6}s`,
              }}
            >
              <svg width={size} height={stem + size} viewBox={`0 0 ${size} ${stem + size}`}>
                <path
                  d={`M${size / 2} ${stem + size} V ${size / 2}`}
                  stroke="var(--leaf-deep)" strokeWidth="2" strokeLinecap="round" opacity=".5"
                />
                {[0, 72, 144, 216, 288].map((d) => (
                  <ellipse
                    key={d}
                    cx={size / 2} cy={size * 0.28}
                    rx={size * 0.16} ry={size * 0.26}
                    fill={fill} opacity=".95"
                    transform={`rotate(${d} ${size / 2} ${size / 2})`}
                  />
                ))}
                <circle cx={size / 2} cy={size / 2} r={size * 0.13} fill="var(--apricot-deep)" opacity=".8" />
              </svg>
            </span>
          );
        })}
    </div>
  );
}
