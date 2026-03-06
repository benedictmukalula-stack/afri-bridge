import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AfriBridge Clearing & Logistics",
  description: "Premium customs clearing, freight forwarding, and cross-border logistics solutions across Africa and the SADC region.",
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