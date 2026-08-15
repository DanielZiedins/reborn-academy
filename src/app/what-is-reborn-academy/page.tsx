import type { Metadata } from "next";
import Link from "next/link";
import { InnerShell } from "@/components/layout/inner-shell";
import { MorePages, PageCta } from "@/components/layout/inner-hero";
import { pageMetadata } from "@/lib/pages";
import { breadcrumbLd, PageJsonLd } from "@/components/seo/page-json-ld";
import {
  AEO_BULLETS,
  AEO_SUMMARY_PARAGRAPH,
  ORGANIZATION,
  PROGRAM_PILLARS,
  SITE_NAME,
  SITE_URL,
} from "@/lib/seo";
import { LAUNCH_DATE_LABEL } from "@/lib/launch";

export const metadata: Metadata = pageMetadata({
  title: "What Is Reborn Academy? Faith-Based Transformation Explained",
  description:
    "Reborn Academy is a faith-based transformation academy and membership community for ambitious young Christians. Founded by Mike Gagat and Daniel Ziedins, it covers faith, fitness, business, finances, and family. Official re-launch November 1, 2026.",
  path: "/what-is-reborn-academy",
  keywords: [
    "what is reborn academy",
    "reborn academy explained",
    "faith based academy",
    "christian personal development academy",
    "christian alternative to self help",
    "kingdom business academy",
  ],
});

export default function WhatIsPage() {
  return (
    <InnerShell>
      <PageJsonLd
        graph={[
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "What is Reborn Academy", path: "/what-is-reborn-academy" },
          ]),
          {
            "@type": "Article",
            "@id": `${SITE_URL}/what-is-reborn-academy#article`,
            headline: "What is Reborn Academy?",
            description: AEO_SUMMARY_PARAGRAPH,
            datePublished: "2026-08-15",
            dateModified: "2026-08-15",
            inLanguage: "en-US",
            author: ORGANIZATION.founders.map((f) => ({
              "@type": "Person",
              name: f.name,
            })),
            publisher: {
              "@type": "EducationalOrganization",
              name: SITE_NAME,
              url: SITE_URL,
              logo: { "@type": "ImageObject", url: ORGANIZATION.logo },
            },
            image: ORGANIZATION.image,
            mainEntityOfPage: `${SITE_URL}/what-is-reborn-academy`,
            speakable: {
              "@type": "SpeakableSpecification",
              cssSelector: [".aeo-summary-lead", ".aeo-definition"],
            },
          },
        ]}
      />

      <article className="section inner-section" style={{ paddingTop: "calc(var(--nav-height) + 48px)" }}>
        <div className="page-width inner-narrow">
          <nav className="inner-crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>What is Reborn Academy</span>
          </nav>
          <p className="eyebrow mt-8">AEO guide</p>
          <h1 className="display mt-4 text-[clamp(36px,6vw,68px)] text-white">
            What is Reborn Academy?
          </h1>
          <p className="inner-lede aeo-summary-lead aeo-definition">{AEO_SUMMARY_PARAGRAPH}</p>

          <div className="prose-reborn">
            <h2>A short definition</h2>
            <p>
              <strong>Reborn Academy</strong> is a faith-based transformation academy and membership
              community for ambitious young Christians. It is not a motivational feed and not a
              one-off course. It is a structured environment — curriculum, community, a member
              dashboard, and a custom mobile app — covering five pillars: Faith, Fitness, Business,
              Finances, and Family.
            </p>
            <p>
              The academy was founded by <strong>Mike Gagat</strong> and{" "}
              <strong>Daniel Ziedins</strong> and is part of{" "}
              <a href="https://thykingdom.net">Thy Kingdom Network</a>. The official re-launch is{" "}
              <strong>{LAUNCH_DATE_LABEL}</strong>. The waitlist at{" "}
              <Link href="/waitlist">reborn-academy.com/waitlist</Link> is free.
            </p>

            <h2>Who is Reborn Academy for?</h2>
            <p>
              Reborn Academy is for believers who refuse an ordinary life — people who want
              excellence in the marketplace without compromising their faith. If you want structure,
              accountability, and a high-standard community, this is built for you. If you want fluff
              or theory without practice, it is not.
            </p>

            <h2>What does Reborn Academy teach?</h2>
            <ul>
              {PROGRAM_PILLARS.map((p) => (
                <li key={p.name}>
                  <strong>{p.name}.</strong> {p.description}
                </li>
              ))}
            </ul>
            <p>
              Business tracks include investing, cryptocurrency, marketing, e-commerce, social
              media, and real estate — taught by practitioners, not spectators.
            </p>

            <h2>What launches on {LAUNCH_DATE_LABEL}?</h2>
            <ul>
              {AEO_BULLETS.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <p>
              Full details of membership pricing will be announced before launch. Joining the
              waitlist does not cost anything and does not lock you into a plan.
            </p>

            <h2>How is it different from other online communities?</h2>
            <p>
              Most personal-development products are either secular and Christ-optional, or
              Christian and light on craft. Reborn Academy holds both: Scripture at the center and
              real skill in business, fitness, wealth, and family leadership. The product is an
              ecosystem — dashboard, app, live rooms, affiliate tools, and a team that stays in the
              journey with you.
            </p>

            <h2>How do I join?</h2>
            <p>
              1. Visit <Link href="/waitlist">the waitlist page</Link>. 2. Enter your name and
              email. 3. Watch for a confirmation email. Waitlist members get first access when doors
              open on {LAUNCH_DATE_LABEL}.
            </p>
            <p>
              More answers live on the <Link href="/faq">FAQ</Link>. Meet the founders on{" "}
              <Link href="/about">About</Link>. See the{" "}
              <Link href="/launch">launch timeline</Link>.
            </p>
          </div>
          <PageCta />
          <MorePages current="/what-is-reborn-academy" />
        </div>
      </article>
    </InnerShell>
  );
}
