import type { Metadata } from "next";
import "./globals.css";
import { DM_Sans } from "next/font/google";

export const metadata: Metadata = {
  title: "Crunchies",
  description: "A clone of the crunchies food ordering app",
  keywords: "Crunchies, food, order, app, web app",
};

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["300", "500", "700"] });

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={dmSans.className} style={{ paddingBottom: "25%" }}>
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
