import { cn } from "@/lib/utils";

/**
 * A leafy bough that is ANCHORED to the edge of its section rather than
 * floating in mid air.
 *
 * Replaces the old free-floating `Vine`, which read as a stick because it
 * (a) started and ended in empty space, (b) was a constant-width stroke in a
 * desaturated green that renders grey over cream, and (c) carried identical
 * ellipses at even intervals, like beads on a wire.
 *
 * Here the stem is a FILLED tapering ribbon (thick where it meets the edge,
 * thin at the tip), the leaves are pointed ovate shapes that shrink toward the
 * tip and sit ON the curve at its tangent angle, and the tip finishes in a
 * curling tendril. Position it so x=0 sits at or just past the frame edge.
 */

type Pt = [number, number];

// Cubic bezier position and tangent.
function bez(p0: Pt, p1: Pt, p2: Pt, p3: Pt, t: number): Pt {
  const u = 1 - t;
  return [
    u * u * u * p0[0] + 3 * u * u * t * p1[0] + 3 * u * t * t * p2[0] + t * t * t * p3[0],
    u * u * u * p0[1] + 3 * u * u * t * p1[1] + 3 * u * t * t * p2[1] + t * t * t * p3[1],
  ];
}
function tangent(p0: Pt, p1: Pt, p2: Pt, p3: Pt, t: number): Pt {
  const u = 1 - t;
  return [
    3 * u * u * (p1[0] - p0[0]) + 6 * u * t * (p2[0] - p1[0]) + 3 * t * t * (p3[0] - p2[0]),
    3 * u * u * (p1[1] - p0[1]) + 6 * u * t * (p2[1] - p1[1]) + 3 * t * t * (p3[1] - p2[1]),
  ];
}

const P0: Pt = [0, 34];
const P1: Pt = [110, 14];
const P2: Pt = [232, 104];
const P3: Pt = [372, 78];

/** Outline of a stem that tapers from `w0` at the anchor to `w1` at the tip. */
function taperedStem(w0 = 7, w1 = 1.1) {
  const STEPS = 26;
  const left: string[] = [];
  const right: Pt[] = [];
  for (let i = 0; i <= STEPS; i++) {
    const t = i / STEPS;
    const [x, y] = bez(P0, P1, P2, P3, t);
    const [dx, dy] = tangent(P0, P1, P2, P3, t);
    const len = Math.hypot(dx, dy) || 1;
    const nx = -dy / len, ny = dx / len;
    const w = (w0 + (w1 - w0) * t) / 2;
    left.push(`${(x + nx * w).toFixed(2)} ${(y + ny * w).toFixed(2)}`);
    right.push([x - nx * w, y - ny * w]);
  }
  const back = right.reverse().map(([x, y]) => `${x.toFixed(2)} ${y.toFixed(2)}`);
  return `M${left.join("L")}L${back.join("L")}Z`;
}

/** A pointed ovate leaf with a midrib, drawn from its stalk at the origin. */
function Leaf({ len, fill, opacity = 1 }: { len: number; fill: string; opacity?: number }) {
  const w = len * 0.42;
  return (
    <>
      <path
        d={`M0 0 C ${len * 0.22} ${-w} ${len * 0.72} ${-w * 0.86} ${len} 0 C ${len * 0.72} ${w * 0.86} ${len * 0.22} ${w} 0 0 Z`}
        fill={fill}
        opacity={opacity}
      />
      <path d={`M${len * 0.06} 0 L ${len * 0.9} 0`} stroke="var(--leaf-deep)" strokeWidth={Math.max(0.7, len * 0.035)} opacity=".28" strokeLinecap="round" />
    </>
  );
}

export function Bough({
  className,
  style,
  width = 300,
  flip = false,
  draw = false,
  delay = 0,
  leafCount = 9,
  blossom,
}: {
  className?: string;
  style?: React.CSSProperties;
  width?: number;
  /** Mirror horizontally, for a bough anchored to the right edge. */
  flip?: boolean;
  draw?: boolean;
  delay?: number;
  leafCount?: number;
  /** Optional blossom colour at the tip. Omit for a plain leafy bough. */
  blossom?: string;
}) {
  // Leaves start a little way out from the anchor and alternate sides, shrinking
  // toward the tip the way real growth does.
  const leaves = Array.from({ length: leafCount }, (_, i) => {
    const t = 0.14 + (i / (leafCount - 1)) * 0.76;
    const [x, y] = bez(P0, P1, P2, P3, t);
    const [dx, dy] = tangent(P0, P1, P2, P3, t);
    const stemAngle = (Math.atan2(dy, dx) * 180) / Math.PI;
    const side = i % 2 === 0 ? -1 : 1;
    // splay off the stem, steeper near the base, swept back near the tip
    const splay = side * (54 - t * 22);
    const len = 30 - t * 15 + (i % 3 === 0 ? 2.5 : 0);
    return { x, y, angle: stemAngle + splay, len, t, i };
  });

  const [tipX, tipY] = P3;
  // Blossom sits on the curve just behind the tip, not floating beside it.
  const [bx, by] = bez(P0, P1, P2, P3, 0.9);
  const [tdx, tdy] = tangent(P0, P1, P2, P3, 1);
  const tipAngle = (Math.atan2(tdy, tdx) * 180) / Math.PI;

  return (
    <span
      aria-hidden="true"
      className={cn("absolute", className)}
      style={{ ...style, width, height: width * 0.4 }}
    >
      <svg
        width={width}
        height={width * 0.4}
        viewBox="0 0 400 160"
        fill="none"
        style={flip ? { transform: "scaleX(-1)" } : undefined}
      >
        <g
          className={draw ? "yh-draw-clip" : undefined}
          style={draw ? { ["--draw-delay" as string]: `${delay}s` } : undefined}
        >
          {/* stem: a filled taper in bark, not a flat grey stroke */}
          <path d={taperedStem()} fill="var(--bark)" opacity=".62" />

          {/* tendril curling off the tip */}
          <g transform={`translate(${tipX} ${tipY}) rotate(${tipAngle})`}>
            <path
              d="M0 0 c 12 -2 20 4 19 12 c -1 7 -9 10 -13 6 c -4 -4 -1 -10 4 -9 c 4 1 5 5 3 8"
              stroke="var(--bark)" strokeWidth="1.6" strokeLinecap="round" fill="none" opacity=".55"
            />
          </g>

          {leaves.map((l) => (
            <g
              key={l.i}
              className={draw ? "yh-unfurl" : undefined}
              style={
                draw
                  ? { transformOrigin: `${l.x}px ${l.y}px`, ["--unfurl-delay" as string]: `${delay + 0.35 + l.i * 0.11}s` }
                  : undefined
              }
            >
              <g transform={`translate(${l.x} ${l.y}) rotate(${l.angle})`}>
                <Leaf len={l.len} fill="var(--leaf)" opacity={l.i % 3 === 1 ? 0.78 : 0.95} />
              </g>
            </g>
          ))}

          {blossom && (
            <g
              className={draw ? "yh-bloom" : undefined}
              style={draw ? { transformOrigin: `${bx}px ${by}px`, ["--bloom-delay" as string]: `${delay + 1.5}s` } : undefined}
            >
              {/* Petals orbit the same centre the heart sits on. They previously
                  used cy = centre - 10 while rotating about centre, which threw
                  the flower off its own middle. */}
              {[0, 72, 144, 216, 288].map((d) => (
                <ellipse
                  key={d}
                  cx={bx} cy={by - 9} rx="5.5" ry="9"
                  fill={blossom} opacity=".95"
                  transform={`rotate(${d} ${bx} ${by})`}
                />
              ))}
              <circle cx={bx} cy={by} r="4" fill="var(--apricot)" />
            </g>
          )}
        </g>
      </svg>
    </span>
  );
}
