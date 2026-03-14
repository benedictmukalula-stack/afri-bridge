import "./globals.css";
import type { Metadata } from "next";
import { AssistantProvider } from "@/contexts/AssistantContext";

export const metadata: Metadata = {
  title: "AfriBridge Clearing & Logistics",
<<<<<<< HEAD
  description: "Premium customs clearing, freight forwarding, and cross-border logistics solutions across Africa and the SADC region.",
=======
  description:
    "Premium customs clearing, freight forwarding, and cross-border logistics solutions across Africa and the SADC region.",
>>>>>>> e3720a4 (Fix AfriBridge production build and deployment issues)
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
<<<<<<< HEAD
      <body>{children}</body>
=======
      <body>
        <AssistantProvider>{children}</AssistantProvider>
      </body>
>>>>>>> e3720a4 (Fix AfriBridge production build and deployment issues)
    </html>
  );
}
