import { AcademyPreviewSection } from "@/components/sections/academy-preview-section";
import { AffiliateSection } from "@/components/sections/affiliate-section";
import { CommunitySection } from "@/components/sections/community-section";
import { ContrastSection } from "@/components/sections/contrast-section";
import { CovenantSection } from "@/components/sections/covenant-section";
import { DayInLifeSection } from "@/components/sections/day-in-life-section";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { FoundersSection } from "@/components/sections/founders-section";
import { GiveawaysSection } from "@/components/sections/giveaways-section";
import { InsidersSection } from "@/components/sections/insiders-section";
import { LaunchChecklistSection } from "@/components/sections/launch-checklist-section";
import { LaunchFeaturesSection } from "@/components/sections/launch-features-section";
import { LaunchTimelineSection } from "@/components/sections/launch-timeline-section";
import { MembershipSection } from "@/components/sections/membership-section";
import { NetworkSection } from "@/components/sections/network-section";
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

export function HomeRest() {
  return (
    <>
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
    </>
  );
}
