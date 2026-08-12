import { ImageResponse } from "next/og";
import { LAUNCH_DATE_LABEL } from "@/lib/launch";
import { SITE_NAME } from "@/lib/seo";

export const alt = `${SITE_NAME} — Faith-Based Transformation Academy`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          background: "linear-gradient(135deg, #050505 0%, #1a0505 55%, #0a0a0a 100%)",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
          <div
            style={{
              width: 48,
              height: 48,
              background: "#cc1111",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 24,
              fontWeight: 900,
            }}
          >
            R
          </div>
          <span
            style={{
              fontSize: 20,
              fontWeight: 800,
              letterSpacing: 5,
              textTransform: "uppercase",
              color: "#e81818",
            }}
          >
            {SITE_NAME}
          </span>
        </div>
        <div
          style={{
            fontSize: 58,
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: 1,
            textTransform: "uppercase",
            maxWidth: 920,
          }}
        >
          You won&apos;t want to miss the re-launch
        </div>
        <p
          style={{
            marginTop: 22,
            fontSize: 24,
            color: "#b8962e",
            fontWeight: 700,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          {LAUNCH_DATE_LABEL}
        </p>
        <p style={{ marginTop: 18, fontSize: 20, color: "#999", maxWidth: 700 }}>
          Faith · Fitness · Business · Finances · Family — dashboard, app, community & affiliate
        </p>
      </div>
    ),
    { ...size },
  );
}
