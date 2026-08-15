import type { Metadata } from "next";
import Image from "next/image";
import { InnerShell } from "@/components/layout/inner-shell";
import { InnerHero, MorePages, PageCta } from "@/components/layout/inner-hero";
import { ORGANIZATION, SITE_NAME, SITE_URL } from "@/lib/seo";
import { pageMetadata } from "@/lib/pages";
import { breadcrumbLd, PageJsonLd } from "@/components/seo/page-json-ld";

export const metadata: Metadata = pageMetadata({
  title: "About — Mike Gagat & Daniel Ziedins",
  description:
    "Meet Reborn Academy founders Mike Gagat and Daniel Ziedins. A faith-based academy inside Thy Kingdom Network, built to walk with ambitious believers across faith, fitness, business, finances, and family.",
  path: "/about",
  keywords: [
    "mike gagat",
    "daniel ziedins",
    "reborn academy founders",
    "thy kingdom network",
    "christian academy founders",
  ],
});

export default function AboutPage() {
  return (
    <InnerShell>
      <PageJsonLd
        graph={[
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
          {
            "@type": "AboutPage",
            "@id": `${SITE_URL}/about#webpage`,
            url: `${SITE_URL}/about`,
            name: `About ${SITE_NAME}`,
            description: `Founded by ${ORGANIZATION.founders.map((f) => f.name).join(" and ")}.`,
            speakable: {
              "@type": "SpeakableSpecification",
              cssSelector: [".aeo-summary-lead", ".aeo-summary-text"],
            },
          },
          ...ORGANIZATION.founders.map((f) => ({
            "@type": "Person",
            name: f.name,
            jobTitle: f.role,
            description: f.description,
            ...(f.url ? { url: f.url } : {}),
            worksFor: { "@type": "EducationalOrganization", name: SITE_NAME, url: SITE_URL },
          })),
        ]}
      />
      <InnerHero
        eyebrow="About"
        title="Founded by practitioners, not theorists"
        lede={`${SITE_NAME} was founded by Mike Gagat and Daniel Ziedins — entrepreneurs and Kingdom builders creating a faith-first academy so believers can max out every area of life as the Lord intended.`}
      />
      <section className="section inner-section">
        <div className="page-width">
          <Image
            src="/images/founders-hero.png"
            alt="Mike Gagat and Daniel Ziedins, founders of Reborn Academy"
            width={1100}
            height={720}
            className="w-full border border-[#2a2a2a]"
            sizes="(max-width: 1180px) 100vw, 1100px"
            quality={78}
          />
          <div className="about-grid mt-14">
            <article className="about-card">
              <h2 className="display text-4xl text-white">Mike Gagat</h2>
              <p className="aeo-summary-text mt-4 text-sm leading-relaxed text-[#999]">
                {ORGANIZATION.founders[0]?.description} Faith-driven entrepreneur and fitness
                leader. Building believers strong in spirit, mind, and body — ready for whatever God
                assigns.
              </p>
            </article>
            <article className="about-card">
              <h2 className="display text-4xl text-white">Daniel Ziedins</h2>
              <p className="aeo-summary-text mt-4 text-sm leading-relaxed text-[#999]">
                {ORGANIZATION.founders[1]?.description} Architect of{" "}
                <a href="https://thykingdom.net" className="text-[#b8962e]">
                  Thy Kingdom Network
                </a>
                , connecting faith-based initiatives across business, community, and culture.
              </p>
            </article>
          </div>
          <article className="prose-reborn mt-16">
            <h2>Part of Thy Kingdom Network</h2>
            <p>
              Reborn Academy sits inside the Thy Kingdom Network family alongside I AM REBORN and
              other Kingdom initiatives. The point is not another isolated course. It is an
              ecosystem — academy, community, app, and network — with Jesus at the center.
            </p>
            <h2>Why we built it</h2>
            <p>
              Too many ambitious believers are left with two bad options: secular self-help that
              ignores Christ, or Christian content that never demands excellence. Reborn Academy is
              the third path — structure, standards, and a community that walks with you.
            </p>
          </article>
          <PageCta />
          <MorePages current="/about" />
        </div>
      </section>
    </InnerShell>
  );
}
