import { FAQ_ITEMS, ORGANIZATION, SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/lib/seo";

export async function GET() {
  const lines = [
    `# ${SITE_NAME}`,
    "",
    `> ${SITE_TAGLINE}`,
    "",
    "## Canonical URL",
    SITE_URL,
    "",
    "## What is Reborn Academy?",
    FAQ_ITEMS.find((f) => f.id === "what-is-reborn-academy")?.answer ?? "",
    "",
    "## Founders",
    ...ORGANIZATION.founders.map((f) => `- ${f.name} (${f.role}): ${f.description}`),
    "",
    "## Topics & Programs",
    "- Faith — Scripture, prayer, spiritual growth",
    "- Fitness — training, nutrition, discipline",
    "- Business — investing, crypto, marketing, e-commerce, social media, real estate",
    "- Finances — budgeting, investing, generational wealth",
    "- Family — marriage, parenting, legacy",
    "",
    "## How to join",
    `Reborn Academy is relaunching. Join the free waitlist at ${SITE_URL} (#waitlist).`,
    "",
    "## Premium tier",
    "RB Insiders — premium membership with deeper access (details at launch).",
    "",
    "## Parent organization",
    `Thy Kingdom Network — ${ORGANIZATION.parentOrganization.url}`,
    "",
    "## Related",
    "- I AM REBORN: https://iamreborn.net",
    "- Daniel Ziedins: https://danielziedins.com",
    "",
    "## FAQ",
    ...FAQ_ITEMS.map((f) => `### ${f.question}\n${f.answer}`),
    "",
    "## Full documentation",
    `${SITE_URL}/llms-full.txt`,
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
