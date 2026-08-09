import { membershipBenefits } from "@/lib/content";
import { CtaButton } from "@/components/ui/cta-button";
import { Reveal } from "@/components/ui/reveal";

export function MembershipSection() {
  return (
    <section className="section section-dark">
      <div className="page-width">
        <Reveal>
          <span className="eyebrow">Membership</span>
          <h2 className="display mt-4 text-[clamp(32px,5vw,52px)] text-white">
            What you get when you join
          </h2>
          <p className="mt-4 max-w-2xl text-[#999]">
            One membership. A complete environment — not a scattered library of videos.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {membershipBenefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 80}>
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
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <CtaButton href="#waitlist" className="group">Become A Member</CtaButton>
            <p className="text-xs text-[#555]">Pricing revealed at launch · Join waitlist for early access</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
