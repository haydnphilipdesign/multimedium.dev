import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 64,
  height: 64
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #07090e 0%, #7c3aed 55%, #22d3ee 100%)",
          color: "#ecf1fc",
          fontSize: 34,
          fontWeight: 700,
          fontFamily: "system-ui, sans-serif"
        }}
      >
        MM
      </div>
    ),
    size
  );
}
