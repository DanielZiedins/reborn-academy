import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { AcademyPreviewSection } from "@/components/sections/academy-preview-section";
import { AeoSummarySection } from "@/components/sections/aeo-summary-section";
import { AffiliateSection } from "@/components/sections/affiliate-section";
import { CommunitySection } from "@/components/sections/community-section";
import { ContrastSection } from "@/components/sections/contrast-section";
import { DayInLifeSection } from "@/components/sections/day-in-life-section";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { FoundersSection } from "@/components/sections/founders-section";
import { GiveawaysSection } from "@/components/sections/giveaways-section";
import { HeroSection } from "@/components/sections/hero-section";
import { HypeStatsSection } from "@/components/sections/hype-stats-section";
import { InsidersSection } from "@/components/sections/insiders-section";
import { LaunchFeaturesSection } from "@/components/sections/launch-features-section";
import { LaunchTimelineSection } from "@/components/sections/launch-timeline-section";
import { MembershipSection } from "@/components/sections/membership-section";
import { PerksMarquee } from "@/components/sections/perks-marquee";
import { ProblemSection } from "@/components/sections/problem-section";
import { ProgramsSection } from "@/components/sections/programs-section";
import { RebornMomentSection } from "@/components/sections/reborn-moment-section";
import { SystemSection } from "@/components/sections/system-section";
import { TransformationSection } from "@/components/sections/transformation-section";
import { VideoSection } from "@/components/sections/video-section";
import { VisionQuotesSection } from "@/components/sections/vision-quotes-section";
import { WaitlistSection } from "@/components/sections/waitlist-section";
import { BackToTop } from "@/components/ui/back-to-top";
import { CursorGlow } from "@/components/ui/cursor-glow";
import { MobileStickyCta } from "@/components/ui/mobile-sticky-cta";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { AEO_DEFINITION } from "@/lib/seo";
import { homeMetadata } from "@/lib/metadata";

export const metadata = homeMetadata;

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <CursorGlow />
      <SiteHeader />
      <main id="main-content">
        <p className="sr-only" data-aeo="entity-summary">{AEO_DEFINITION}</p>

        <HeroSection />
        <PerksMarquee />
        <HypeStatsSection />
        <AeoSummarySection />
        <LaunchFeaturesSection />
        <LaunchTimelineSection />
        <VisionQuotesSection />
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
        <FoundersSection />
        <FaqSection />
        <FinalCtaSection />
        <WaitlistSection />
      </main>
      <SiteFooter />
      <MobileStickyCta />
      <BackToTop />
    </>
  );
}
