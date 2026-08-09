import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

export const metadata: Metadata = {
  title: "Reborn Academy — Faith-Based Personal Growth Community",
  description:
    "The high-value faith-based development academy built by Mike Gagat and Daniel Ziedins. Grow in faith, fitness, business, finances, and family. Join the waitlist for the Reborn relaunch.",
  keywords: [
    "Reborn Academy",
    "faith-based",
    "personal growth",
    "Christian community",
    "business",
    "fitness",
    "Mike Gagat",
    "Daniel Ziedins",
  ],
  openGraph: {
    title: "Reborn Academy — Be First to Know",
    description:
      "A faith-based development academy for believers who refuse to drift. Join the waitlist.",
    images: ["/images/phoenix.png"],
    type: "website",
  },
  icons: {
    icon: "/images/icon.png",
    apple: "/images/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${bebas.variable}`}>
      <body>{children}</body>
    </html>
  );
}
