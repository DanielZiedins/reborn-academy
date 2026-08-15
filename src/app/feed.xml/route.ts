import {
  AEO_SUMMARY_PARAGRAPH,
  FAQ_ITEMS,
  ORGANIZATION,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
} from "@/lib/seo";
import { LAUNCH_DATE_LABEL } from "@/lib/launch";

export async function GET() {
  const items = [
    {
      title: `What is ${SITE_NAME}?`,
      path: "/what-is-reborn-academy",
      summary: AEO_SUMMARY_PARAGRAPH,
    },
    {
      title: `Official re-launch ${LAUNCH_DATE_LABEL}`,
      path: "/launch",
      summary: `Reborn Academy re-launches ${LAUNCH_DATE_LABEL} with dashboard, app, community, affiliate program, and giveaways.`,
    },
    {
      title: "FAQ",
      path: "/faq",
      summary: FAQ_ITEMS[0]?.answer ?? SITE_TAGLINE,
    },
    {
      title: "Programs — five pillars",
      path: "/programs",
      summary:
        "Faith, Fitness, Business, Finances, and Family — the Reborn Academy curriculum for ambitious Christians.",
    },
  ];

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${SITE_NAME}</title>
    <link>${SITE_URL}</link>
    <description>${SITE_TAGLINE}</description>
    <language>en-us</language>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
    ${items
      .map(
        (item) => `<item>
      <title>${escapeXml(item.title)}</title>
      <link>${SITE_URL}${item.path}</link>
      <guid>${SITE_URL}${item.path}</guid>
      <description>${escapeXml(item.summary)}</description>
    </item>`,
      )
      .join("\n    ")}
    <item>
      <title>About ${SITE_NAME} — ${ORGANIZATION.founders.map((f) => f.name).join(" & ")}</title>
      <link>${SITE_URL}/about</link>
      <guid>${SITE_URL}/about</guid>
      <description>Meet the founders of Reborn Academy.</description>
    </item>
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
