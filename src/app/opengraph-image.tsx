import { ImageResponse } from "next/og";
import { LAUNCH_DATE_LABEL } from "@/lib/launch";
import { SITE_NAME } from "@/lib/seo";

export const alt = `${SITE_NAME} — Faith-Based Transformation Academy`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
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
          background: "linear-gradient(145deg, #0a0a0a 0%, #050505 50%, #1a0808 100%)",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 8,
              background: "#cc1111",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 900,
            }}
          >
            R
          </div>
          <span
            style={{
              fontSize: 22,
              fontWeight: 800,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#cc1111",
            }}
          >
            {SITE_NAME}
          </span>
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: 2,
            textTransform: "uppercase",
            maxWidth: 900,
          }}
        >
          Faith-Based Transformation Academy
        </div>
        <p
          style={{
            marginTop: 24,
            fontSize: 26,
            color: "#b8962e",
            fontWeight: 700,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          Re-launch {LAUNCH_DATE_LABEL}
        </p>
        <p
          style={{
            marginTop: 20,
            fontSize: 22,
            color: "#999",
            maxWidth: 720,
            lineHeight: 1.5,
          }}
        >
          Dashboard · Custom App · Community · Affiliate Program · Giveaways
        </p>
        <div
          style={{
            marginTop: 40,
            display: "flex",
            gap: 12,
          }}
        >
          {["Faith", "Fitness", "Business", "Finances", "Family"].map((pillar) => (
            <span
              key={pillar}
              style={{
                padding: "8px 16px",
                border: "1px solid #333",
                fontSize: 14,
                fontWeight: 700,
                letterSpacing: 2,
                textTransform: "uppercase",
                color: "#ccc",
              }}
            >
              {pillar}
            </span>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
