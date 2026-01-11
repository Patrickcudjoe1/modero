import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fashion E-commerce | New Collection",
  description: "Discover our new Summer 2024 collection",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
