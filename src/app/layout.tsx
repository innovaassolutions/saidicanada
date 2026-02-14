import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SAIDI Canada | Sustainable Data Centre Services",
  description:
    "SAIDI Canada delivers sustainable, high-performance data centre services powered by renewable energy. Colocation, cloud, managed hosting, and more — built for a greener future.",
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
