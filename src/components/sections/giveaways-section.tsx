import { Gift, Trophy, Sparkles, PartyPopper } from "lucide-react";
import { FadeInUp } from "@/components/ui/motion";
import { CtaButton } from "@/components/ui/cta-button";
import { LAUNCH_DATE_LABEL } from "@/lib/launch";

const rewards = [
  {
    icon: Gift,
    title: "Launch giveaways",
    desc: "Exclusive prizes and surprises for waitlist members and early joiners when doors open.",
  },
  {
    icon: Trophy,
    title: "Member rewards",
    desc: "Win streaks, challenges, and faithfulness milestones celebrated with real rewards.",
  },
  {
    icon: Sparkles,
    title: "Founding perks",
    desc: "Early waitlist members get first access to perks before the public floodgates open.",
  },
  {
    icon: PartyPopper,
    title: "Launch night energy",
    desc: "A celebration built for believers who showed up early — not spectators who waited.",
  },
];

export function GiveawaysSection() {
  return (
    <section id="giveaways" className="section giveaways-section overflow-hidden">
      <div className="giveaways-glow" aria-hidden="true" />
      <div className="page-width relative z-10">
        <FadeInUp>
          <span className="eyebrow">Rewards · Coming {LAUNCH_DATE_LABEL}</span>
          <h2 className="display mt-4 text-[clamp(32px,5vw,56px)] text-white">
            Giveaways that hit different
          </h2>
          <p className="mt-4 max-w-2xl text-[#999]">
            Reborn isn&apos;t just curriculum. We celebrate momentum — with launch giveaways, member
            rewards, and founding perks for those who join the waitlist now.
          </p>
        </FadeInUp>

        <div className="giveaways-grid mt-14">
          {rewards.map((r, i) => {
            const Icon = r.icon;
            return (
              <FadeInUp key={r.title} delay={0.06 * i}>
                <article className="giveaway-card">
                  <div className="giveaway-icon">
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-sm font-extrabold uppercase tracking-wider text-white">
                    {r.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#888]">{r.desc}</p>
                </article>
              </FadeInUp>
            );
          })}
        </div>

        <FadeInUp delay={0.2} className="mt-12 text-center">
          <CtaButton href="#waitlist" className="group">
            Claim your waitlist spot
          </CtaButton>
        </FadeInUp>
      </div>
    </section>
  );
}
