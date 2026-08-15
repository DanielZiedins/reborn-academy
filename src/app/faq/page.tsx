import type { Metadata } from "next";
import { InnerShell } from "@/components/layout/inner-shell";
import { InnerHero, MorePages, PageCta } from "@/components/layout/inner-hero";
import { FAQ_ITEMS, ORGANIZATION, SITE_NAME, SITE_URL } from "@/lib/seo";
import { pageMetadata } from "@/lib/pages";
import { breadcrumbLd, PageJsonLd } from "@/components/seo/page-json-ld";

export const metadata: Metadata = pageMetadata({
  title: "FAQ — Faith-Based Academy Answers",
  description:
    "Frequently asked questions about Reborn Academy: what it is, who founded it, launch date, app and dashboard, affiliate program, RB Insiders, and how to join the waitlist.",
  path: "/faq",
  keywords: [
    "reborn academy faq",
    "what is reborn academy",
    "reborn academy cost",
    "reborn academy launch date",
    "christian academy questions",
  ],
});

export default function FaqPage() {
  return (
    <InnerShell>
      <PageJsonLd
        graph={[
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "FAQ", path: "/faq" },
          ]),
          {
            "@type": "FAQPage",
            "@id": `${SITE_URL}/faq#faq`,
            url: `${SITE_URL}/faq`,
            name: `${SITE_NAME} FAQ`,
            mainEntity: FAQ_ITEMS.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: { "@type": "Answer", text: item.answer },
            })),
          },
        ]}
      />
      <InnerHero
        eyebrow="FAQ"
        title="Clear answers about Reborn Academy"
        lede={`${SITE_NAME} is a faith-based transformation academy founded by ${ORGANIZATION.founders.map((f) => f.name).join(" and ")}. Official re-launch November 1, 2026. These are the questions people — and AI assistants — ask most.`}
      />
      <section className="section inner-section">
        <div className="page-width inner-narrow">
          <dl className="faq-article">
            {FAQ_ITEMS.map((item) => (
              <div key={item.id} id={item.id} className="faq-article-item">
                <dt>
                  <h2>{item.question}</h2>
                </dt>
                <dd className="aeo-summary-text">{item.answer}</dd>
              </div>
            ))}
          </dl>
          <PageCta />
          <MorePages current="/faq" />
        </div>
      </section>
    </InnerShell>
  );
}
