import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          fontFamily: "system-ui, sans-serif",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(120deg, #07090e 0%, #7c3aed 52%, #22d3ee 100%)",
          color: "#ecf1fc",
          width: "100%",
          height: "100%",
          padding: "60px"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: 28, fontWeight: 600, marginBottom: "40px" }}>
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "999px",
              background: "rgba(255,255,255,0.14)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 36
            }}
          >
            MM
          </div>
          <span>Multimedium.dev</span>
        </div>
        <div style={{ maxWidth: "900px", fontSize: 64, fontWeight: 700, lineHeight: 1.1, textAlign: "center" }}>
          Websites That Look Premium and Convert
        </div>
        <div style={{ fontSize: 28, opacity: 0.9, textAlign: "center", marginTop: "20px" }}>
          Strategy-led design + clean development for teams that want a site that ships fast and sells.
        </div>
      </div>
    ),
    size
  );
}
