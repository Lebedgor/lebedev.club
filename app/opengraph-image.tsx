import { ImageResponse } from "next/og";

export const alt = "LEBEDEV LABS — Full Stack Web Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0c0d12",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -220,
            left: 60,
            width: 620,
            height: 620,
            borderRadius: 9999,
            background: "#7c5cff",
            opacity: 0.32,
            filter: "blur(120px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -240,
            right: -60,
            width: 560,
            height: 560,
            borderRadius: 9999,
            background: "#2dd4bf",
            opacity: 0.2,
            filter: "blur(130px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 140,
            right: 220,
            width: 420,
            height: 420,
            borderRadius: 9999,
            background: "#f472b6",
            opacity: 0.12,
            filter: "blur(130px)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            marginBottom: 34,
          }}
        >
          <div
            style={{
              width: 16,
              height: 16,
              borderRadius: 5,
              background: "linear-gradient(135deg, #7c5cff, #2dd4bf)",
            }}
          />
          <div style={{ color: "#f2f4f8", fontSize: 34, fontWeight: 800, letterSpacing: 6 }}>
            LEBEDEV LABS
          </div>
        </div>
        <div
          style={{
            color: "#f2f4f8",
            fontSize: 64,
            fontWeight: 800,
            letterSpacing: -2,
            display: "flex",
          }}
        >
          Full Stack Web Developer
        </div>
        <div
          style={{
            marginTop: 16,
            display: "flex",
            color: "#9aa3b2",
            fontSize: 30,
          }}
        >
          From database to pixel · 8+ years · 800+ sales
        </div>
      </div>
    ),
    size
  );
}
