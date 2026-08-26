import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { GUIDES } from "@/lib/guides";
import { PILLARS } from "@/lib/pillars";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages: {
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }[] = [
    { path: "/", changeFrequency: "weekly", priority: 1 },
    { path: "/what-is-reborn-academy", changeFrequency: "weekly", priority: 0.95 },
    { path: "/waitlist", changeFrequency: "daily", priority: 0.95 },
    { path: "/launch", changeFrequency: "weekly", priority: 0.9 },
    { path: "/programs", changeFrequency: "weekly", priority: 0.9 },
    ...PILLARS.map((p) => ({
      path: `/programs/${p.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    { path: "/guides", changeFrequency: "weekly", priority: 0.88 },
    ...GUIDES.map((g) => ({
      path: `/guides/${g.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.86,
    })),
    { path: "/about", changeFrequency: "monthly", priority: 0.85 },
    { path: "/faq", changeFrequency: "weekly", priority: 0.85 },
    { path: "/feed.xml", changeFrequency: "weekly", priority: 0.4 },
    { path: "/llms.txt", changeFrequency: "monthly", priority: 0.3 },
    { path: "/llms-full.txt", changeFrequency: "monthly", priority: 0.3 },
    { path: "/ai.txt", changeFrequency: "monthly", priority: 0.3 },
    { path: "/humans.txt", changeFrequency: "yearly", priority: 0.2 },
  ];

  return pages.map((page) => ({
    url: page.path === "/" ? SITE_URL : `${SITE_URL}${page.path}`,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
