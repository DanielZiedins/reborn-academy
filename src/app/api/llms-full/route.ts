import {
  AEO_DEFINITION,
  FAQ_ITEMS,
  INTRO_VIDEO,
  ORGANIZATION,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
} from "@/lib/seo";

export async function GET() {
  const lines = [
    `# ${SITE_NAME} — Full site summary for AI systems`,
    "",
    AEO_DEFINITION,
    "",
    "## Metadata",
    `- Name: ${SITE_NAME}`,
    `- URL: ${SITE_URL}`,
    `- Description: ${SITE_DESCRIPTION}`,
    `- Tagline: ${SITE_TAGLINE}`,
    `- Email: ${ORGANIZATION.email}`,
    `- Parent: ${ORGANIZATION.parentOrganization.name} (${ORGANIZATION.parentOrganization.url})`,
    "",
    "## Keywords (discovery)",
    SITE_KEYWORDS.join(", "),
    "",
    "## Founders",
    ...ORGANIZATION.founders.map((f) => {
      const url = f.url ? ` (${f.url})` : "";
      return `- ${f.name}, ${f.role}${url}: ${f.description}`;
    }),
    "",
    "## Intro video",
    `- Title: ${INTRO_VIDEO.name}`,
    `- URL: ${INTRO_VIDEO.watchUrl}`,
    `- Description: ${INTRO_VIDEO.description}`,
    "",
    "## Site sections",
    "- #programs — Faith, Fitness, Business, Finances, Family pillars",
    "- #academy — Platform preview (curriculum, dashboard, live calls)",
    "- #community — Live community, accountability, faith-first culture",
    "- #founders — Mike Gagat and Daniel Ziedins",
    "- #faq — Frequently asked questions",
    "- #waitlist — Join waitlist for relaunch",
    "",
    "## Membership includes (at launch)",
    "- Academy curriculum across five pillars",
    "- Live strategy calls and sessions",
    "- Community of ambitious believers",
    "- RB Insiders premium tier",
    "",
    "## FAQ (complete)",
    ...FAQ_ITEMS.flatMap((f) => [`### ${f.question}`, f.answer, ""]),
    "",
    "## Same as / official links",
    ORGANIZATION.sameAs.join("\n"),
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
