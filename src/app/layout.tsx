import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "AfriBridge Clearing & Logistics",
  description:
    "Premium customs clearing, freight forwarding, and cross-border logistics solutions across Africa and the SADC region.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 antialiased">
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
