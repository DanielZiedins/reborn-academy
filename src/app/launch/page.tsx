import type { Metadata } from "next";
import { InnerShell } from "@/components/layout/inner-shell";
import { InnerHero, MorePages, PageCta } from "@/components/layout/inner-hero";
import { LaunchCountdown } from "@/components/ui/launch-countdown";
import { AddToCalendar } from "@/components/ui/add-to-calendar";
import { launchFeatures, LAUNCH_DATE_LABEL } from "@/lib/launch";
import { pageMetadata } from "@/lib/pages";
import { breadcrumbLd, PageJsonLd } from "@/components/seo/page-json-ld";
import { ORGANIZATION, SITE_NAME, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: `Official Re-Launch ${LAUNCH_DATE_LABEL}`,
  description: `Reborn Academy officially re-launches ${LAUNCH_DATE_LABEL}. Member dashboard, custom app, live community, affiliate program, and launch giveaways. Join the waitlist for first access.`,
  path: "/launch",
  keywords: [
    "reborn academy launch",
    "reborn academy november 2026",
    "reborn academy relaunch",
    "christian academy launch date",
  ],
});

export default function LaunchPage() {
  return (
    <InnerShell>
      <PageJsonLd
        graph={[
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Launch", path: "/launch" },
          ]),
          {
            "@type": "Event",
            "@id": `${SITE_URL}/launch#event`,
            name: `${SITE_NAME} Official Re-Launch`,
            description: `Official re-launch of ${SITE_NAME} with member dashboard, custom app, community, affiliate program, and giveaways.`,
            startDate: "2026-11-01T00:00:00-04:00",
            endDate: "2026-11-01T23:59:59-04:00",
            eventStatus: "https://schema.org/EventScheduled",
            eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
            location: { "@type": "VirtualLocation", url: SITE_URL },
            organizer: { "@type": "EducationalOrganization", name: ORGANIZATION.name, url: SITE_URL },
            image: ORGANIZATION.image,
            offers: {
              "@type": "Offer",
              url: `${SITE_URL}/waitlist`,
              availability: "https://schema.org/PreOrder",
              price: "0",
              priceCurrency: "USD",
            },
          },
        ]}
      />
      <InnerHero
        eyebrow="Launch"
        title={`November 1, 2026`}
        lede={`The official Reborn Academy re-launch. Dashboard. Custom app. Community. Affiliate program. Giveaways. Waitlist members go first.`}
      />
      <section className="section inner-section">
        <div className="page-width">
          <div className="mx-auto max-w-lg">
            <LaunchCountdown />
          </div>
          <div className="mt-10 flex justify-center">
            <AddToCalendar />
          </div>
          <ul className="launch-page-list mt-16">
            {launchFeatures.map((f) => (
              <li key={f.id}>
                <span>{f.tag}</span>
                <h2>{f.title}</h2>
                <p>{f.desc}</p>
              </li>
            ))}
          </ul>
          <PageCta />
          <MorePages current="/launch" />
        </div>
      </section>
    </InnerShell>
  );
}
