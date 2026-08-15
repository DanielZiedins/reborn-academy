import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

const AI_BOTS = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "anthropic-ai",
  "PerplexityBot",
  "Google-Extended",
  "Google-CloudVertexBot",
  "Applebot-Extended",
  "Meta-ExternalAgent",
  "Bytespider",
  "CCBot",
  "Amazonbot",
  "YouBot",
  "DuckAssistBot",
  "cohere-ai",
  "Diffbot",
  "ImagesiftBot",
  "Timpibot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      ...AI_BOTS.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: ["/api/"],
      })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
