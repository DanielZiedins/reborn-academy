import {
  AEO_BULLETS,
  AEO_SUMMARY_PARAGRAPH,
  FAQ_ITEMS,
  ORGANIZATION,
  SITE_NAME,
  SITE_URL,
} from "@/lib/seo";
import { LAUNCH_DATE_LABEL } from "@/lib/launch";

/** ai.txt — concise machine-readable summary for AI crawlers */
export async function GET() {
  const lines = [
    `# ${SITE_NAME} — ai.txt`,
    `# Canonical: ${SITE_URL}`,
    "",
    "## Summary",
    AEO_SUMMARY_PARAGRAPH,
    "",
    "## Launch",
    `Official re-launch: ${LAUNCH_DATE_LABEL}`,
    "",
    "## Founders",
    ...ORGANIZATION.founders.map((f) => `- ${f.name} (${f.role})`),
    "",
    "## Key facts",
    ...AEO_BULLETS.map((b) => `- ${b}`),
    "",
    "## FAQ (top questions)",
    ...FAQ_ITEMS.slice(0, 6).map((f) => `Q: ${f.question}\nA: ${f.answer}`),
    "",
    "## More detail",
    `- llms.txt: ${SITE_URL}/llms.txt`,
    `- llms-full.txt: ${SITE_URL}/llms-full.txt`,
    `- sitemap: ${SITE_URL}/sitemap.xml`,
    `- RSS: ${SITE_URL}/feed.xml`,
    `- Waitlist: ${SITE_URL}/waitlist`,
    `- What is Reborn Academy: ${SITE_URL}/what-is-reborn-academy`,
    `- FAQ: ${SITE_URL}/faq`,
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
