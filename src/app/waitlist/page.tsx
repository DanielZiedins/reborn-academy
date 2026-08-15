import type { Metadata } from "next";
import Link from "next/link";
import { InnerShell } from "@/components/layout/inner-shell";
import { InnerHero, MorePages } from "@/components/layout/inner-hero";
import { WaitlistForm } from "@/components/waitlist-form";
import { WaitlistCounter } from "@/components/ui/waitlist-counter";
import { FoundingMeter } from "@/components/ui/founding-meter";
import { AddToCalendar } from "@/components/ui/add-to-calendar";
import { LaunchCountdown } from "@/components/ui/launch-countdown";
import { pageMetadata } from "@/lib/pages";
import { breadcrumbLd, PageJsonLd } from "@/components/seo/page-json-ld";
import { AEO_SUMMARY_PARAGRAPH, SITE_NAME, SITE_URL } from "@/lib/seo";
import { LAUNCH_DATE_LABEL } from "@/lib/launch";

export const metadata: Metadata = pageMetadata({
  title: `Join the Waitlist — Re-Launch ${LAUNCH_DATE_LABEL}`,
  description: `Join the free Reborn Academy waitlist. Be first in line for the ${LAUNCH_DATE_LABEL} re-launch: member dashboard, custom app, community, affiliate program, and giveaways.`,
  path: "/waitlist",
  keywords: [
    "reborn academy waitlist",
    "join reborn academy",
    "reborn academy sign up",
    "christian academy waitlist",
    "faith based academy waitlist",
  ],
});

export default function WaitlistPage() {
  return (
    <InnerShell>
      <PageJsonLd
        graph={[
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Waitlist", path: "/waitlist" },
          ]),
          {
            "@type": "WebPage",
            "@id": `${SITE_URL}/waitlist#webpage`,
            url: `${SITE_URL}/waitlist`,
            name: `Join the ${SITE_NAME} waitlist`,
            description: AEO_SUMMARY_PARAGRAPH,
            speakable: {
              "@type": "SpeakableSpecification",
              cssSelector: [".aeo-summary-lead"],
            },
          },
        ]}
      />
      <InnerHero
        eyebrow="Waitlist"
        title="Lock your founding spot"
        lede={`Official re-launch ${LAUNCH_DATE_LABEL}. The waitlist is free. Members who join now get first access to the dashboard, Reborn app, community, affiliate program, and launch giveaways.`}
      />
      <section className="section inner-section">
        <div className="page-width inner-narrow">
          <div className="flex justify-center">
            <WaitlistCounter />
          </div>
          <div className="mt-8">
            <FoundingMeter />
          </div>
          <div className="mt-10">
            <LaunchCountdown />
          </div>
          <div className="mt-10">
            <WaitlistForm variant="footer" source="reborn-academy.com/waitlist" />
          </div>
          <div className="mt-10">
            <AddToCalendar />
          </div>
          <p className="mt-8 text-center text-xs text-[#555]">
            Prefer the full story first?{" "}
            <Link href="/what-is-reborn-academy" className="text-[#b8962e] hover:text-white">
              What is Reborn Academy
            </Link>{" "}
            ·{" "}
            <Link href="/faq" className="text-[#b8962e] hover:text-white">
              FAQ
            </Link>
          </p>
        </div>
      </section>
      <div className="page-width pb-20">
        <MorePages current="/waitlist" />
      </div>
    </InnerShell>
  );
}
