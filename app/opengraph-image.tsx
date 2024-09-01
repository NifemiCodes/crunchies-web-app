import { ImageResponse } from "next/og";

export const runtime = "edge";

export const contentType = "image/png";
export const alt = "Crunchies Logo";
export const size = {
  width: 1200,
  height: 630,
};

export default async function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "692px", height: "692px" }}>
        <img
          src="C:\Users\aking\OneDrive\Desktop\Kotafuz Internship\crunchies-nextjs\images\og-image-white.png"
          alt="Crunchies Logo"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
