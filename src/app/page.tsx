import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { DeferredChrome } from "@/components/deferred-chrome";
import { WaitlistCountProvider } from "@/components/providers/waitlist-count-provider";
import { AcademyPreviewSection } from "@/components/sections/academy-preview-section";
import { AeoSummarySection } from "@/components/sections/aeo-summary-section";
import { AffiliateSection } from "@/components/sections/affiliate-section";
import { CommunitySection } from "@/components/sections/community-section";
import { ContrastSection } from "@/components/sections/contrast-section";
import { CovenantSection } from "@/components/sections/covenant-section";
import { DayInLifeSection } from "@/components/sections/day-in-life-section";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { FoundersSection } from "@/components/sections/founders-section";
import { GiveawaysSection } from "@/components/sections/giveaways-section";
import { HeroSection } from "@/components/sections/hero-section";
import { HypeStatsSection } from "@/components/sections/hype-stats-section";
import { InsidersSection } from "@/components/sections/insiders-section";
import { LaunchChecklistSection } from "@/components/sections/launch-checklist-section";
import { LaunchFeaturesSection } from "@/components/sections/launch-features-section";
import { LaunchTimelineSection } from "@/components/sections/launch-timeline-section";
import { MembershipSection } from "@/components/sections/membership-section";
import { NetworkSection } from "@/components/sections/network-section";
import { PerksMarquee } from "@/components/sections/perks-marquee";
import { ProblemSection } from "@/components/sections/problem-section";
import { ProgramsSection } from "@/components/sections/programs-section";
import { RebornMomentSection } from "@/components/sections/reborn-moment-section";
import { ScriptureStrip } from "@/components/sections/scripture-strip";
import { SystemSection } from "@/components/sections/system-section";
import { TransformationSection } from "@/components/sections/transformation-section";
import { ValuesSection } from "@/components/sections/values-section";
import { VideoSection } from "@/components/sections/video-section";
import { VisionQuotesSection } from "@/components/sections/vision-quotes-section";
import { WaitlistSection } from "@/components/sections/waitlist-section";
import { WhoItsForSection } from "@/components/sections/who-its-for-section";
import { PageReveal } from "@/components/ui/page-reveal";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { AEO_DEFINITION } from "@/lib/seo";
import { homeMetadata } from "@/lib/metadata";

export const metadata = homeMetadata;

export default function Home() {
  return (
    <WaitlistCountProvider>
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
        <ValuesSection />
        <CovenantSection />
        <ScriptureStrip />
        <LaunchFeaturesSection />
        <LaunchTimelineSection />
        <LaunchChecklistSection />
        <VisionQuotesSection />
        <WhoItsForSection />
        <ContrastSection />
        <ProblemSection />
        <RebornMomentSection />
        <SystemSection />
        <DayInLifeSection />
        <VideoSection />
        <ProgramsSection />
        <AcademyPreviewSection />
        <MembershipSection />
        <AffiliateSection />
        <GiveawaysSection />
        <TransformationSection />
        <CommunitySection />
        <InsidersSection />
        <NetworkSection />
        <FoundersSection />
        <FaqSection />
        <FinalCtaSection />
        <WaitlistSection />
      </main>
      <SiteFooter />
      <DeferredChrome />
    </WaitlistCountProvider>
  );
}
