import type { Metadata } from "next";
import {
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_URL,
  SITE_TAGLINE,
} from "@/lib/seo";

const OG_IMAGE = "/images/phoenix-rise.png";

export const homeMetadata: Metadata = {
  title: `${SITE_NAME} | Faith-Based Transformation Academy & Community`,
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  authors: [
    { name: "Mike Gagat", url: "https://thykingdom.net" },
    { name: "Daniel Ziedins", url: "https://danielziedins.com" },
  ],
  creator: "Reborn Academy",
  publisher: "Thy Kingdom Network",
  category: "Education",
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Faith-Based Transformation Academy`,
    description: SITE_TAGLINE,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Reborn Academy — faith-based transformation academy for ambitious believers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Enter The Academy`,
    description: SITE_TAGLINE,
    images: [OG_IMAGE],
  },
  other: {
    "apple-mobile-web-app-title": SITE_NAME,
    "application-name": SITE_NAME,
  },
};
