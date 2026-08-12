import { FadeInUp } from "@/components/ui/motion";
import { CtaButton } from "@/components/ui/cta-button";
import { WaitlistCounter } from "@/components/ui/waitlist-counter";
import { LAUNCH_DATE_LABEL } from "@/lib/launch";

const contrasts = [
  { left: "Scattered motivation", right: "Structured transformation" },
  { left: "Alone in the grind", right: "Community that pushes you" },
  { left: "Generic self-help", right: "Faith-first excellence" },
  { left: "Courses you forget", right: "Dashboard + app + action" },
  { left: "Waiting to feel ready", right: "Launching November 1, 2026" },
];

export function ContrastSection() {
  return (
    <section className="section section-dark contrast-section" aria-labelledby="contrast-heading">
      <div className="page-width">
        <FadeInUp>
          <span className="eyebrow">The choice</span>
          <h2 id="contrast-heading" className="display mt-4 text-[clamp(32px,5vw,52px)] text-white">
            Ordinary drift — or Reborn
          </h2>
        </FadeInUp>

        <div className="contrast-table mt-14">
          <div className="contrast-header">
            <span>Without Reborn</span>
            <span>With Reborn Academy</span>
          </div>
          {contrasts.map((row, i) => (
            <FadeInUp key={row.left} delay={0.05 * i}>
              <div className="contrast-row">
                <span className="contrast-left">{row.left}</span>
                <span className="contrast-arrow" aria-hidden="true">
                  →
                </span>
                <span className="contrast-right">{row.right}</span>
              </div>
            </FadeInUp>
          ))}
        </div>

        <FadeInUp delay={0.25} className="mt-12 flex flex-col items-center gap-4 text-center">
          <WaitlistCounter />
          <CtaButton href="#waitlist" className="group">
            Choose Reborn — join waitlist
          </CtaButton>
          <p className="text-xs text-[#555]">Official re-launch {LAUNCH_DATE_LABEL}</p>
        </FadeInUp>
      </div>
    </section>
  );
}
