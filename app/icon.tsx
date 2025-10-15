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
          background: "#2563eb",
          color: "#eff6ff",
          fontSize: 34,
          fontWeight: 700,
          fontFamily: "system-ui, sans-serif"
        }}
      >
        M
      </div>
    ),
    size
  );
}
