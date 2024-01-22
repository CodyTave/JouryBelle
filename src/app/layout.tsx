import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import LayoutComponent from "./components/LayoutComponent";
import { main } from "@/assets";

export const metadata: Metadata = {
  title: "JouryBelle Salon",
  description: "...",
  icons: { icon: "/logo.png" },
};

const Beauu = localFont({
  src: [
    { path: "../fonts/Beauu-Light.ttf", weight: "200" },
    { path: "../fonts/Beauu-Regular.ttf", weight: "400" },
    { path: "../fonts/Beauu-Medium.ttf", weight: "500" },
    { path: "../fonts/Beauu-Bold.ttf", weight: "700" },
  ],
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={Beauu.className}>{children}</body>
    </html>
  );
}
