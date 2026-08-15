import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/seo";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function pageMetadata({ title, description, path, keywords }: PageMetaInput): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
      types: {
        "application/rss+xml": `${SITE_URL}/feed.xml`,
        "application/llms.txt": `${SITE_URL}/llms.txt`,
      },
    },
    openGraph: {
      type: "website",
      url,
      siteName: SITE_NAME,
      title: `${title} | ${SITE_NAME}`,
      description,
      locale: "en_US",
      images: [
        {
          url: "/images/phoenix-rise.png",
          width: 819,
          height: 696,
          alt: `${SITE_NAME} — faith-based transformation academy`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
      images: ["/images/phoenix-rise.png"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    },
  };
}

export const SITE_PAGES = [
  { href: "/", label: "Home" },
  { href: "/what-is-reborn-academy", label: "What is Reborn" },
  { href: "/programs", label: "Programs" },
  { href: "/launch", label: "Launch" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/waitlist", label: "Waitlist" },
];
