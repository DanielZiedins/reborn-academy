import { membershipBenefits } from "@/lib/content";
import { CtaButton } from "@/components/ui/cta-button";
import { FadeInUp } from "@/components/ui/motion";
import { LAUNCH_DATE_LABEL } from "@/lib/launch";

export function MembershipSection() {
  return (
    <section className="section section-dark">
      <div className="page-width">
        <FadeInUp>
          <span className="eyebrow">Membership · Coming {LAUNCH_DATE_LABEL}</span>
          <h2 className="display mt-4 text-[clamp(32px,5vw,52px)] text-white">
            What you get when you join
          </h2>
          <p className="mt-4 max-w-2xl text-[#999]">
            One membership — dashboard, app, community, affiliate program, giveaways, and a team
            walking with you. Not a scattered library of videos.
          </p>
        </FadeInUp>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {membershipBenefits.map((b, i) => (
            <FadeInUp key={b.title} delay={i * 0.08}>
              <div className="membership-card">
                <b.icon size={24} className="text-[#b8962e]" />
                <h3 className="mt-5 text-sm font-extrabold uppercase tracking-wider text-white">
                  {b.title}
                </h3>
                <ul className="mt-4 space-y-2">
                  {b.items.map((item) => (
                    <li key={item} className="text-sm text-[#888]">{item}</li>
                  ))}
                </ul>
              </div>
            </FadeInUp>
          ))}
        </div>

        <FadeInUp delay={0.2}>
          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <CtaButton href="#waitlist" className="group">Join Waitlist — First Access</CtaButton>
            <p className="text-xs text-[#555]">Official launch {LAUNCH_DATE_LABEL}</p>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
