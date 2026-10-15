import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const runtime = "nodejs";
export const alt = "Yasmeen Hasan";
export const size = { width: 1200, height: 630 };

/**
 * Social preview card, drawn in the site's own palette with a simplified
 * version of the garden. Rendered at request time by next/og rather than
 * shipped as a static PNG, so every page gets its own titled card.
 */
export function GET(req: Request) {
  const t = new URL(req.url).searchParams.get("t") ?? site.title;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%", height: "100%", display: "flex", flexDirection: "column",
          justifyContent: "space-between", padding: 72,
          background: "linear-gradient(160deg, #FDF2E4 0%, #FFFBF4 58%)",
          fontFamily: "serif", position: "relative",
        }}
      >
        {/* sun */}
        <div style={{ position: "absolute", top: -90, right: -70, width: 320, height: 320, borderRadius: 999, background: "#FFD2A6", opacity: 0.75, display: "flex" }} />
        {/* canopy */}
        <div style={{ position: "absolute", left: -60, bottom: -120, width: 340, height: 340, borderRadius: 999, background: "#AEDCA7", opacity: 0.6, display: "flex" }} />
        <div style={{ position: "absolute", left: 150, bottom: -170, width: 300, height: 300, borderRadius: 999, background: "#AEDCA7", opacity: 0.45, display: "flex" }} />
        {/* meadow */}
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 90, background: "#AEDCA7", opacity: 0.5, display: "flex" }} />

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 34, height: 34, borderRadius: 999, background: "#F9C0D0", display: "flex" }} />
          <div style={{ fontSize: 26, color: "#645578", letterSpacing: 1 }}>{site.name}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22, maxWidth: 900 }}>
          <div style={{ fontSize: t.length > 46 ? 62 : 78, lineHeight: 1.05, color: "#332A46" }}>{t}</div>
          <div style={{ fontSize: 30, color: "#A83E66", fontFamily: "sans-serif" }}>{site.role}</div>
        </div>

        <div style={{ display: "flex", gap: 14, alignItems: "center", fontSize: 24, color: "#645578", fontFamily: "sans-serif" }}>
          <div style={{ width: 12, height: 12, borderRadius: 999, background: "#CDBBE7", display: "flex" }} />
          Ten live sites you can open
        </div>
      </div>
    ),
    {
      ...size,
      // Deterministic per `t`, so this is safe to cache aggressively. Without
      // it every unfurl bot and every crawler re-ran the full Satori render.
      headers: {
        "Cache-Control": "public, immutable, no-transform, max-age=86400, s-maxage=31536000",
      },
    }
  );
}
