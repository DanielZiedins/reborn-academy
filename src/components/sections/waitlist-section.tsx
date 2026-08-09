import { WaitlistForm } from "@/components/waitlist-form";
import { Reveal } from "@/components/ui/reveal";

export function WaitlistSection() {
  return (
    <section id="waitlist" className="section waitlist-section relative overflow-hidden">
      <div className="absolute inset-0 red-glow" />
      <div className="page-width relative z-10">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">The invitation</span>
            <h2 className="display mt-4 text-[clamp(40px,6vw,80px)] text-white">
              Ready to be Reborn?
            </h2>
            <p className="mt-4 text-[#999]">
              We&apos;re rebuilding Reborn Academy into something extraordinary. Enter the waitlist — be
              first to know when the academy opens, with early access perks.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mx-auto mt-10 max-w-xl">
            <WaitlistForm variant="footer" />
          </div>
        </Reveal>

        <p className="mt-8 text-center text-xs text-[#555]">
          Free to join · No spam · Unsubscribe anytime · Thy Kingdom Network
        </p>
      </div>
    </section>
  );
}
