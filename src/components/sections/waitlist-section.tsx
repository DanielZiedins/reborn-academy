import { WaitlistForm } from "@/components/waitlist-form";
import { LaunchCountdown } from "@/components/ui/launch-countdown";
import { WaitlistCounter } from "@/components/ui/waitlist-counter";
import { FadeInUp } from "@/components/ui/motion";
import { LAUNCH_DATE_LABEL } from "@/lib/launch";

export function WaitlistSection() {
  return (
    <section id="waitlist" className="section waitlist-section relative overflow-hidden">
      <div className="absolute inset-0 red-glow" />
      <div className="page-width relative z-10">
        <FadeInUp>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">The invitation</span>
            <h2 className="display mt-4 text-[clamp(40px,6vw,80px)] text-white">
              Ready to be Reborn?
            </h2>
            <p className="mt-4 text-[#999]">
              Official re-launch: <strong className="text-white">{LAUNCH_DATE_LABEL}</strong>. Join the
              waitlist now — first access to the dashboard, app, community, affiliate program, and
              launch giveaways.
            </p>
          </div>
        </FadeInUp>

        <FadeInUp delay={0.08} className="mt-8 flex justify-center">
          <WaitlistCounter />
        </FadeInUp>

        <FadeInUp delay={0.1} className="mx-auto mt-10 max-w-lg">
          <LaunchCountdown />
        </FadeInUp>

        <FadeInUp delay={0.2} className="mx-auto mt-10 max-w-xl">
          <WaitlistForm variant="footer" />
        </FadeInUp>

        <p className="mt-8 text-center text-xs text-[#555]">
          Free to join · No spam · Unsubscribe anytime · Thy Kingdom Network
        </p>
      </div>
    </section>
  );
}
