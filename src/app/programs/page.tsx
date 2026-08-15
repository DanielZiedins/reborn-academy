import type { Metadata } from "next";
import { InnerShell } from "@/components/layout/inner-shell";
import { InnerHero, MorePages, PageCta } from "@/components/layout/inner-hero";
import { pageMetadata } from "@/lib/pages";
import { breadcrumbLd, PageJsonLd } from "@/components/seo/page-json-ld";
import { ORGANIZATION, PROGRAM_PILLARS, SITE_NAME, SITE_URL } from "@/lib/seo";
import { LAUNCH_DATE_LABEL } from "@/lib/launch";

export const metadata: Metadata = pageMetadata({
  title: "Programs — Faith, Fitness, Business, Finances, Family",
  description:
    "Reborn Academy programs cover five pillars for ambitious Christians: Faith, Fitness, Business, Finances, and Family. Curriculum, community, dashboard, and app launch November 1, 2026.",
  path: "/programs",
  keywords: [
    "reborn academy programs",
    "christian faith fitness business",
    "faith based business training",
    "christian fitness academy",
    "biblical family leadership",
    "kingdom finances course",
  ],
});

const PILLAR_COPY: Record<string, string> = {
  Faith:
    "Identity in Christ is the foundation, not a module you skip. Scripture, prayer, spiritual warfare, and daily obedience sit at the center of every other pillar — so marketplace skill never outruns character.",
  Fitness:
    "The body is for the mission. Training, nutrition, recovery, and discipline are treated as stewardship — strength you can actually use when God assigns the next assignment.",
  Business:
    "Kingdom marketplace skill from practitioners: investing, cryptocurrency, marketing, e-commerce, social media, and real estate. No spectator theory. Skills you can execute this week.",
  Finances:
    "Wealth with wisdom. Budgeting, investing, debt freedom, and generational impact without compromising integrity. Money as a tool for the Kingdom, not an idol.",
  Family:
    "Marriage, parenting, and household leadership on biblical foundations. Legacy is built at home first — then multiplied in business and community.",
};

export default function ProgramsPage() {
  return (
    <InnerShell>
      <PageJsonLd
        graph={[
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Programs", path: "/programs" },
          ]),
          {
            "@type": "CollectionPage",
            "@id": `${SITE_URL}/programs#webpage`,
            url: `${SITE_URL}/programs`,
            name: `${SITE_NAME} programs`,
            description: `Five pillars launching ${LAUNCH_DATE_LABEL}: Faith, Fitness, Business, Finances, and Family.`,
            speakable: {
              "@type": "SpeakableSpecification",
              cssSelector: [".aeo-summary-lead"],
            },
          },
          {
            "@type": "ItemList",
            "@id": `${SITE_URL}/programs#list`,
            name: `${SITE_NAME} program pillars`,
            numberOfItems: PROGRAM_PILLARS.length,
            itemListElement: PROGRAM_PILLARS.map((p, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: {
                "@type": "Course",
                name: `${p.name} — ${SITE_NAME}`,
                description: p.description,
                provider: { "@type": "EducationalOrganization", name: ORGANIZATION.name, url: SITE_URL },
                url: `${SITE_URL}/programs#${p.name.toLowerCase()}`,
                inLanguage: "en-US",
              },
            })),
          },
        ]}
      />
      <InnerHero
        eyebrow="Programs"
        title="Five pillars. One trajectory."
        lede={`Full curriculum drops ${LAUNCH_DATE_LABEL}. Every area is rooted in Scripture and built for believers who refuse to live small.`}
      />
      <section className="section inner-section">
        <div className="page-width">
          <div className="programs-page-grid">
            {PROGRAM_PILLARS.map((p) => (
              <article key={p.name} id={p.name.toLowerCase()} className="programs-page-card">
                <p className="eyebrow">{p.name}</p>
                <h2>{p.name}</h2>
                <p className="aeo-summary-text mt-4">{p.description}</p>
                <p className="mt-4 text-sm leading-relaxed text-[#888]">{PILLAR_COPY[p.name]}</p>
              </article>
            ))}
          </div>
          <article className="prose-reborn inner-narrow">
            <h2>How the programs work</h2>
            <p>
              Reborn Academy is not five disconnected courses. Members move through a shared
              environment — dashboard, app, live rooms, and assignments — so faith, fitness,
              business, finances, and family compound instead of competing.
            </p>
            <p>
              Pricing and the full syllabus publish before launch. The{" "}
              <a href="/waitlist">free waitlist</a> is how you get first access.
            </p>
          </article>
          <PageCta />
          <MorePages current="/programs" />
        </div>
      </section>
    </InnerShell>
  );
}
