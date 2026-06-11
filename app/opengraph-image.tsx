import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Big.dev — Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#09090b",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 24,
          fontFamily: "sans-serif",
        }}
      >
        {/* Logo */}
        <div
          style={{
            fontSize: 28,
            fontWeight: 700,
            color: "#a1a1aa",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          Big.dev
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: "#fafafa",
            letterSpacing: "-0.03em",
          }}
        >
          Gritsada Leeyao
        </div>

        {/* Role */}
        <div
          style={{
            fontSize: 32,
            color: "#71717a",
            fontWeight: 500,
          }}
        >
          Full Stack Developer
        </div>

        {/* Divider */}
        <div
          style={{
            width: 60,
            height: 3,
            background: "#fafafa",
            borderRadius: 9999,
            marginTop: 8,
          }}
        />

        {/* Stack */}
        <div
          style={{
            fontSize: 20,
            color: "#52525b",
            display: "flex",
            gap: 16,
          }}
        >
          {["React", "Next.js", "Node.js", "TypeScript"].map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
    ),
    size
  );
}
