import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { AcademyPreviewSection } from "@/components/sections/academy-preview-section";
import { CommunitySection } from "@/components/sections/community-section";
import { FaqSection } from "@/components/sections/faq-section";
import { FoundersSection } from "@/components/sections/founders-section";
import { HeroSection } from "@/components/sections/hero-section";
import { InsidersSection } from "@/components/sections/insiders-section";
import { MembershipSection } from "@/components/sections/membership-section";
import { ProblemSection } from "@/components/sections/problem-section";
import { ProgramsSection } from "@/components/sections/programs-section";
import { RebornMomentSection } from "@/components/sections/reborn-moment-section";
import { SystemSection } from "@/components/sections/system-section";
import { TransformationSection } from "@/components/sections/transformation-section";
import { VideoSection } from "@/components/sections/video-section";
import { WaitlistSection } from "@/components/sections/waitlist-section";
import { AEO_DEFINITION } from "@/lib/seo";
import { homeMetadata } from "@/lib/metadata";

export const metadata = homeMetadata;

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        {/* AEO: machine-readable entity summary for crawlers and answer engines */}
        <p className="sr-only" data-aeo="entity-summary">{AEO_DEFINITION}</p>

        <HeroSection />
        <ProblemSection />
        <RebornMomentSection />
        <SystemSection />
        <VideoSection />
        <ProgramsSection />
        <AcademyPreviewSection />
        <MembershipSection />
        <TransformationSection />
        <CommunitySection />
        <InsidersSection />
        <FoundersSection />
        <FaqSection />
        <WaitlistSection />
      </main>
      <SiteFooter />
    </>
  );
}
