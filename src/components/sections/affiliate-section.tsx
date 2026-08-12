import { Share2, DollarSign, Megaphone, Link2 } from "lucide-react";
import { FadeInUp } from "@/components/ui/motion";
import { CtaButton } from "@/components/ui/cta-button";

const pillars = [
  {
    icon: Share2,
    title: "Share the mission",
    desc: "Invite believers who are hungry for growth — not another empty motivational feed.",
  },
  {
    icon: DollarSign,
    title: "Earn rewards",
    desc: "Built-in affiliate tools so members who spread Reborn get rewarded for impact.",
  },
  {
    icon: Megaphone,
    title: "Amplify Kingdom work",
    desc: "Your network becomes a pipeline for transformation across faith, fitness, business, and family.",
  },
  {
    icon: Link2,
    title: "One-click tracking",
    desc: "Dashboard-ready referral links and progress — designed into the academy from day one.",
  },
];

export function AffiliateSection() {
  return (
    <section id="affiliate" className="section section-dark">
      <div className="page-width">
        <div className="affiliate-layout">
          <FadeInUp>
            <span className="eyebrow">Affiliate program</span>
            <h2 className="display mt-4 text-[clamp(32px,5vw,52px)] text-white">
              Spread the mission.
              <br />
              <span className="text-gradient-red">Get rewarded.</span>
            </h2>
            <p className="mt-4 max-w-xl text-[#999]">
              An epic built-in affiliate program for members who share Reborn. Not a side hustle
              gimmick — a Kingdom growth engine woven into the dashboard and app.
            </p>
            <div className="mt-8">
              <CtaButton href="#waitlist" className="group">
                Get first affiliate access
              </CtaButton>
            </div>
          </FadeInUp>

          <div className="affiliate-grid">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <FadeInUp key={p.title} delay={0.08 * i}>
                  <article className="affiliate-card">
                    <Icon size={20} className="text-[#cc1111]" aria-hidden="true" />
                    <h3 className="mt-3 text-sm font-extrabold uppercase tracking-wider text-white">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#888]">{p.desc}</p>
                  </article>
                </FadeInUp>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
