import { ImageResponse } from "next/og";
import path from "path";

export const runtime = "edge";

export const contentType = "image/png";
export const alt = "Crunchies Logo";
export const size = {
  width: 1200,
  height: 630,
};

const imagePath = path.join(process.cwd(), "images/og-image-white.png");
export default async function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "692px", height: "692px" }}>
        <img src={imagePath} alt="Crunchies Logo" style={{ width: "100%", height: "100%" }} />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
