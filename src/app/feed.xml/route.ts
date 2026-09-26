import {
  AEO_SUMMARY_PARAGRAPH,
  FAQ_ITEMS,
  ORGANIZATION,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
} from "@/lib/seo";
import { LAUNCH_DATE_LABEL } from "@/lib/launch";
import { GUIDES } from "@/lib/guides";
import { PILLARS } from "@/lib/pillars";
import { POSTS } from "@/lib/posts";
import { AUTHOR } from "@/lib/author";

type FeedItem = {
  title: string;
  path: string;
  summary: string;
  date?: string;
  author?: string;
};

export async function GET() {
  const items: FeedItem[] = [
    ...POSTS.map((post) => ({
      title: `${post.title} — ${AUTHOR.name}`,
      path: `/blog/${post.slug}`,
      summary: post.takeaway,
      date: post.datePublished,
      author: AUTHOR.name,
    })),
    {
      title: `What is ${SITE_NAME}?`,
      path: "/what-is-reborn-academy",
      summary: AEO_SUMMARY_PARAGRAPH,
      date: "2026-09-24",
    },
    {
      title: `Official re-launch ${LAUNCH_DATE_LABEL}`,
      path: "/launch",
      summary: `Reborn Academy re-launches ${LAUNCH_DATE_LABEL} with dashboard, app, community, affiliate program, and giveaways.`,
    },
    {
      title: "FAQ",
      path: "/faq",
      summary: FAQ_ITEMS.find((item) => item.id === "is-it-a-church")?.answer ?? SITE_TAGLINE,
      date: "2026-09-25",
    },
    {
      title: "Programs — five pillars",
      path: "/programs",
      summary:
        "Faith, Fitness, Business, Finances, and Family — the Reborn Academy curriculum for ambitious Christians.",
    },
    ...GUIDES.map((g) => ({
      title: g.title,
      path: `/guides/${g.slug}`,
      summary: g.description,
    })),
    ...PILLARS.map((p) => ({
      title: `${p.name} — ${p.outcome}`,
      path: `/programs/${p.slug}`,
      summary: p.description,
    })),
  ];

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
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
      <guid isPermaLink="true">${SITE_URL}${item.path}</guid>
      <pubDate>${rssDate(item.date ?? "2026-09-24")}</pubDate>
      ${item.author ? `<dc:creator>${escapeXml(item.author)}</dc:creator>` : ""}
      <description>${escapeXml(item.summary)}</description>
    </item>`,
      )
      .join("\n    ")}
    <item>
      <title>About ${SITE_NAME} — ${ORGANIZATION.founders.map((f) => f.name).join(" & ")}</title>
      <link>${SITE_URL}/about</link>
      <guid isPermaLink="true">${SITE_URL}/about</guid>
      <pubDate>${rssDate("2026-09-24")}</pubDate>
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

function rssDate(isoDate: string) {
  return new Date(`${isoDate}T12:00:00Z`).toUTCString();
}

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
