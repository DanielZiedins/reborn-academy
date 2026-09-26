import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { InnerShell } from "@/components/layout/inner-shell";
import { MorePages, PageCta } from "@/components/layout/inner-hero";
import { ArticleToc, RelatedGuides, RelatedPillars } from "@/components/layout/article-extras";
import { ShareBar } from "@/components/ui/share-bar";
import { pageMetadata } from "@/lib/pages";
import { breadcrumbLd, PageJsonLd } from "@/components/seo/page-json-ld";
import { PILLARS, getPillar } from "@/lib/pillars";
import { ORGANIZATION, SITE_NAME, SITE_URL } from "@/lib/seo";
import { LAUNCH_DATE_LABEL } from "@/lib/launch";
import { AUTHOR } from "@/lib/author";

const PILLAR_ESSAYS: Record<string, { slug: string; title: string }> = {
  faith: { slug: "what-reborn-means", title: "What “Reborn” Means If You Are Already Saved" },
  fitness: { slug: "fitness-is-stewardship", title: "Fitness Is Stewardship, Not a Brand" },
  business: { slug: "kingdom-business-standards", title: "Kingdom Business Is a Standard, Not a Niche" },
  finances: { slug: "money-is-a-tool", title: "Money Is a Tool. It Is Not a Savior." },
  family: { slug: "ambition-and-the-household", title: "Ambition Has to Fit the Household" },
};

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return PILLARS.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pillar = getPillar(slug);
  if (!pillar) return {};
  return pageMetadata({
    title: `${pillar.name} — ${pillar.outcome}`,
    description: pillar.description,
    path: `/programs/${pillar.slug}`,
    keywords: pillar.keywords,
  });
}

export default async function PillarPage({ params }: Props) {
  const { slug } = await params;
  const pillar = getPillar(slug);
  if (!pillar) notFound();

  const path = `/programs/${pillar.slug}`;
  const essay = PILLAR_ESSAYS[pillar.slug];

  return (
    <InnerShell>
      <PageJsonLd
        graph={[
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Programs", path: "/programs" },
            { name: pillar.name, path },
          ]),
          {
            "@type": "Course",
            "@id": `${SITE_URL}${path}#course`,
            name: `${pillar.name} — ${SITE_NAME}`,
            description: pillar.description,
            url: `${SITE_URL}${path}`,
            provider: {
              "@type": "EducationalOrganization",
              name: ORGANIZATION.name,
              url: SITE_URL,
            },
            inLanguage: "en-US",
            educationalLevel: "Beginner to Advanced",
            offers: {
              "@type": "Offer",
              availability: "https://schema.org/PreOrder",
              url: `${SITE_URL}/waitlist`,
              price: "0",
              priceCurrency: "USD",
            },
          },
          {
            "@type": "Article",
            "@id": `${SITE_URL}${path}#article`,
            headline: `${pillar.name} at ${SITE_NAME}`,
            description: pillar.description,
            datePublished: "2026-08-26",
            dateModified: "2026-09-25",
            author: ORGANIZATION.founders.map((f) => ({ "@type": "Person", name: f.name })),
            publisher: {
              "@type": "EducationalOrganization",
              name: SITE_NAME,
              url: SITE_URL,
              logo: { "@type": "ImageObject", url: ORGANIZATION.logo },
            },
            image: ORGANIZATION.image,
            speakable: {
              "@type": "SpeakableSpecification",
              cssSelector: [".aeo-summary-lead"],
            },
          },
        ]}
      />

      <article className="section inner-section" style={{ paddingTop: "calc(var(--nav-height) + 48px)" }}>
        <div className="page-width inner-narrow">
          <nav className="inner-crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/programs">Programs</Link>
            <span aria-hidden="true">/</span>
            <span>{pillar.name}</span>
          </nav>
          <p className="eyebrow mt-8">Pillar · {LAUNCH_DATE_LABEL}</p>
          <h1 className="display mt-4 text-[clamp(36px,6vw,72px)] text-white">{pillar.name}</h1>
          <p className="inner-lede aeo-summary-lead">{pillar.description}</p>
          <p className="mt-3 text-sm font-semibold tracking-wide text-[#b8962e]">{pillar.outcome}</p>
          <ShareBar path={path} title={`${pillar.name} — ${SITE_NAME}`} />
          <ArticleToc items={pillar.sections.map((s) => ({ id: s.id, heading: s.heading }))} />

          <div className="prose-reborn">
            {pillar.sections.map((section) => (
              <section key={section.id} id={section.id}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((p) => (
                  <p key={p.slice(0, 48)}>{p}</p>
                ))}
              </section>
            ))}
            <p>
              See all five pillars on <Link href="/programs">Programs</Link>, or{" "}
              <Link href="/waitlist">join the waitlist</Link> for first access.
            </p>
            {essay ? (
              <p>
                From the journal by {AUTHOR.name}:{" "}
                <Link href={`/blog/${essay.slug}`}>{essay.title}</Link>.
              </p>
            ) : null}
          </div>
          <RelatedPillars current={pillar.slug} />
          <RelatedGuides />
          <PageCta />
          <MorePages current="/programs" />
        </div>
      </article>
    </InnerShell>
  );
}
