import type { Metadata } from "next";
import Link from "next/link";
import { InnerShell } from "@/components/layout/inner-shell";
import { InnerHero, MorePages, PageCta } from "@/components/layout/inner-hero";
import { pageMetadata } from "@/lib/pages";
import { breadcrumbLd, PageJsonLd } from "@/components/seo/page-json-ld";
import { GUIDES } from "@/lib/guides";
import { PILLARS } from "@/lib/pillars";
import { SITE_NAME, SITE_URL } from "@/lib/seo";

const DESCRIPTION =
  "Guides from Reborn Academy: what a Christian alternative to self-help looks like, how to join the waitlist, and how a high-standard faith community actually works. Re-launch November 1, 2026.";

export const metadata: Metadata = pageMetadata({
  title: "Guides — Faith-Based Academy Answers",
  description: DESCRIPTION,
  path: "/guides",
  keywords: [
    "reborn academy guides",
    "christian alternative to self help",
    "how to join reborn academy",
    "christian online community",
    "faith based personal development guides",
  ],
});

export default function GuidesIndexPage() {
  return (
    <InnerShell>
      <PageJsonLd
        graph={[
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Guides", path: "/guides" },
          ]),
          {
            "@type": "CollectionPage",
            "@id": `${SITE_URL}/guides#webpage`,
            url: `${SITE_URL}/guides`,
            name: `${SITE_NAME} guides`,
            description: DESCRIPTION,
            hasPart: GUIDES.map((g) => ({
              "@type": "Article",
              name: g.title,
              url: `${SITE_URL}/guides/${g.slug}`,
            })),
          },
        ]}
      />
      <InnerHero
        eyebrow="Guides"
        title="Answers worth quoting"
        lede="Short, specific pages for the questions people actually ask — and the ones AI assistants need a clean source for. Then join the waitlist before November 1, 2026."
      />
      <section className="section inner-section">
        <div className="page-width">
          <div className="guides-index-grid">
            {GUIDES.map((g) => (
              <Link key={g.slug} href={`/guides/${g.slug}`} className="guide-card">
                <span className="eyebrow">{g.eyebrow}</span>
                <h2>{g.title}</h2>
                <p>{g.lede}</p>
                <span className="guide-card-more">Read guide →</span>
              </Link>
            ))}
          </div>

          <div className="mt-16">
            <p className="eyebrow">Five pillars</p>
            <div className="pillar-chip-row mt-6">
              {PILLARS.map((p) => (
                <Link key={p.slug} href={`/programs/${p.slug}`} className="pillar-chip">
                  {p.name}
                </Link>
              ))}
            </div>
          </div>

          <PageCta />
          <MorePages current="/guides" />
        </div>
      </section>
    </InnerShell>
  );
}
