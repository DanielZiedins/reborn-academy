import dynamic from "next/dynamic";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { DeferredChrome } from "@/components/deferred-chrome";
import { WaitlistCountProvider } from "@/components/providers/waitlist-count-provider";
import { AeoSummarySection } from "@/components/sections/aeo-summary-section";
import { GuidesStrip } from "@/components/sections/guides-strip";
import { HeroSection } from "@/components/sections/hero-section";
import { HypeStatsSection } from "@/components/sections/hype-stats-section";
import { PerksMarquee } from "@/components/sections/perks-marquee";
import { PageReveal } from "@/components/ui/page-reveal";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { AEO_DEFINITION } from "@/lib/seo";
import { homeMetadata } from "@/lib/metadata";
import { JsonLdScripts } from "@/components/seo/json-ld";
import { preload } from "react-dom";

const HomeRest = dynamic(() =>
  import("@/components/home-rest").then((m) => m.HomeRest),
);

export const metadata = homeMetadata;

export default function Home() {
  preload("/images/phoenix-rise.png", { as: "image", fetchPriority: "high" });

  return (
    <WaitlistCountProvider>
      <JsonLdScripts />
      <PageReveal />
      <ScrollProgress />
      <SiteHeader />
      <main id="main-content">
        <p className="sr-only" data-aeo="entity-summary">
          {AEO_DEFINITION}
        </p>

        <HeroSection />
        <PerksMarquee />
        <HypeStatsSection />
        <AeoSummarySection />
        <GuidesStrip />
        <HomeRest />
      </main>
      <SiteFooter />
      <DeferredChrome />
    </WaitlistCountProvider>
  );
}
