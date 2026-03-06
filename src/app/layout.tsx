import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import PremiumHeader from "@/components/PremiumHeader";
import PremiumFooter from "@/components/PremiumFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AfriBridge - Premium Clearing & Logistics Across Africa",
  description: "Expert customs clearing, freight forwarding, and cross-border logistics for SADC trade corridors. 98% on-time delivery, 25+ countries served.",
  keywords: "customs clearing, freight forwarding, logistics, SADC, Africa, cross-border, cargo, shipping",
  openGraph: {
    title: "AfriBridge - Premium Clearing & Logistics",
    description: "Expert logistics solutions for African trade corridors",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PremiumHeader />
        <main>
          {children}
        </main>
        <PremiumFooter />
        <WhatsAppButton />
      </body>
    </html>
  );
}
