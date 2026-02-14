import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SAIDI Canada | Lower-Carbon Data Centre Services",
  description:
    "SAIDI Canada delivers high-performance data centre services powered by LNG and Canada's natural cooling advantage. Colocation, cloud, managed hosting, and more — with a smaller carbon footprint.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
