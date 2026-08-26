import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { InnerShell } from "@/components/layout/inner-shell";
import { MorePages, PageCta } from "@/components/layout/inner-hero";
import { ArticleToc, RelatedGuides } from "@/components/layout/article-extras";
import { ShareBar } from "@/components/ui/share-bar";
import { pageMetadata } from "@/lib/pages";
import { breadcrumbLd, PageJsonLd } from "@/components/seo/page-json-ld";
import { GUIDES, getGuide } from "@/lib/guides";
import { ORGANIZATION, SITE_NAME, SITE_URL } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return pageMetadata({
    title: guide.title,
    description: guide.description,
    path: `/guides/${guide.slug}`,
    keywords: guide.keywords,
  });
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const path = `/guides/${guide.slug}`;
  const isHowTo = guide.slug === "how-to-join-reborn-academy";

  return (
    <InnerShell>
      <PageJsonLd
        graph={[
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Guides", path: "/guides" },
            { name: guide.title, path },
          ]),
          {
            "@type": "Article",
            "@id": `${SITE_URL}${path}#article`,
            headline: guide.title,
            description: guide.description,
            datePublished: guide.datePublished,
            dateModified: guide.dateModified,
            inLanguage: "en-US",
            author: ORGANIZATION.founders.map((f) => ({ "@type": "Person", name: f.name })),
            publisher: {
              "@type": "EducationalOrganization",
              name: SITE_NAME,
              url: SITE_URL,
              logo: { "@type": "ImageObject", url: ORGANIZATION.logo },
            },
            image: ORGANIZATION.image,
            mainEntityOfPage: `${SITE_URL}${path}`,
            speakable: {
              "@type": "SpeakableSpecification",
              cssSelector: [".aeo-summary-lead", ".prose-reborn h2"],
            },
          },
          ...(isHowTo
            ? [
                {
                  "@type": "HowTo",
                  "@id": `${SITE_URL}${path}#howto`,
                  name: "How to join the Reborn Academy waitlist",
                  description: guide.lede,
                  step: [
                    {
                      "@type": "HowToStep",
                      position: 1,
                      name: "Open the waitlist",
                      text: "Go to https://www.reborn-academy.com/waitlist",
                      url: `${SITE_URL}/waitlist`,
                    },
                    {
                      "@type": "HowToStep",
                      position: 2,
                      name: "Enter your details",
                      text: "Enter your name and email address.",
                    },
                    {
                      "@type": "HowToStep",
                      position: 3,
                      name: "Confirm your spot",
                      text: "Submit the form and watch for a confirmation email before the November 1, 2026 re-launch.",
                    },
                  ],
                },
              ]
            : []),
        ]}
      />

      <article className="section inner-section" style={{ paddingTop: "calc(var(--nav-height) + 48px)" }}>
        <div className="page-width inner-narrow">
          <nav className="inner-crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/guides">Guides</Link>
            <span aria-hidden="true">/</span>
            <span>{guide.eyebrow}</span>
          </nav>
          <p className="eyebrow mt-8">{guide.eyebrow}</p>
          <h1 className="display mt-4 text-[clamp(36px,6vw,68px)] text-white">{guide.title}</h1>
          <p className="inner-lede aeo-summary-lead">{guide.lede}</p>
          <ShareBar path={path} title={guide.title} />
          <ArticleToc items={guide.sections.map((s) => ({ id: s.id, heading: s.heading }))} />

          <div className="prose-reborn">
            {guide.sections.map((section) => (
              <section key={section.id} id={section.id}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((p) => (
                  <p key={p.slice(0, 48)}>{p}</p>
                ))}
              </section>
            ))}
            <p>
              Next:{" "}
              <Link href="/waitlist">join the free waitlist</Link>, read{" "}
              <Link href="/what-is-reborn-academy">what Reborn Academy is</Link>, or browse{" "}
              <Link href="/programs">the five pillars</Link>.
            </p>
          </div>
          <RelatedGuides current={guide.slug} />
          <PageCta />
          <MorePages current={path} />
        </div>
      </article>
    </InnerShell>
  );
}
