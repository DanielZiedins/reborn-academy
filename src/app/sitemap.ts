import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { GUIDES } from "@/lib/guides";
import { PILLARS } from "@/lib/pillars";
import { POSTS } from "@/lib/posts";

const CONTENT_DATE = new Date("2026-09-24T12:00:00Z");
const FAQ_DATE = new Date("2026-09-25T12:00:00Z");

export default function sitemap(): MetadataRoute.Sitemap {

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
    { path: "/blog", changeFrequency: "weekly", priority: 0.9 },
    ...POSTS.map((post) => ({
      path: `/blog/${post.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.84,
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
    { path: "/geo.txt", changeFrequency: "monthly", priority: 0.35 },
    { path: "/humans.txt", changeFrequency: "yearly", priority: 0.2 },
  ];

  return pages.map((page) => ({
    url: page.path === "/" ? SITE_URL : `${SITE_URL}${page.path}`,
    lastModified: lastModifiedFor(page.path),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}

function lastModifiedFor(path: string) {
  const post = POSTS.find((item) => path === `/blog/${item.slug}`);
  if (post) return new Date(`${post.dateModified}T12:00:00Z`);
  if (path.startsWith("/programs/")) return FAQ_DATE;
  if (
    path === "/blog" ||
    path === "/feed.xml" ||
    path === "/geo.txt" ||
    path === "/llms.txt" ||
    path === "/llms-full.txt" ||
    path === "/ai.txt" ||
    path === "/faq"
  ) {
    return FAQ_DATE;
  }
  return CONTENT_DATE;
}
