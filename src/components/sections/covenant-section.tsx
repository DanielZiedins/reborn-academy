import { FadeInUp } from "@/components/ui/motion";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Handshake, Eye, Shield, Heart } from "lucide-react";

const promises = [
  {
    icon: Handshake,
    title: "We walk with you",
    desc: "Not a content dump. Mike and Daniel built Reborn to stay in the journey — live sessions, community, and real accountability.",
  },
  {
    icon: Eye,
    title: "No bait-and-switch",
    desc: "What you see is what launches November 1, 2026: dashboard, app, community, affiliate, and giveaways. Waitlist members go first.",
  },
  {
    icon: Shield,
    title: "Faith without compromise",
    desc: "Every framework is filtered through Scripture. Excellence in the marketplace never means selling out the Gospel.",
  },
  {
    icon: Heart,
    title: "Built for the remnant",
    desc: "This is for believers who want standards. If you want fluff, this isn't home — and that's by design.",
  },
];

export function CovenantSection() {
  return (
    <section id="covenant" className="section" aria-labelledby="covenant-heading">
      <div className="page-width">
        <FadeInUp>
          <span className="eyebrow">Our covenant</span>
          <h2 id="covenant-heading" className="display mt-4 text-[clamp(32px,5vw,52px)] text-white">
            What we refuse to break
          </h2>
          <p className="mt-4 max-w-2xl text-[#999]">
            Reborn Academy is a promise between founders and members. These four commitments hold
            whether we&apos;re 10 people or 10,000.
          </p>
        </FadeInUp>

        <div className="covenant-grid mt-14">
          {promises.map((p, i) => {
            const Icon = p.icon;
            return (
              <FadeInUp key={p.title} delay={0.06 * i}>
                <SpotlightCard className="covenant-card">
                  <Icon size={22} className="text-[#cc1111]" aria-hidden="true" />
                  <h3 className="mt-4 text-sm font-extrabold uppercase tracking-wider text-white">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#888]">{p.desc}</p>
                </SpotlightCard>
              </FadeInUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
