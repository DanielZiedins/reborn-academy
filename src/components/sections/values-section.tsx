import { BookOpen, Cross, Flame, HeartHandshake, Shield, Sparkles } from "lucide-react";
import { FadeInUp } from "@/components/ui/motion";

const values = [
  {
    icon: Cross,
    title: "Christ at the center",
    desc: "Every framework — business, fitness, finances, family — filtered through Scripture first.",
  },
  {
    icon: Flame,
    title: "Excellence without apology",
    desc: "Faith is not an excuse for mediocrity. We train for mastery in the arenas God assigns.",
  },
  {
    icon: HeartHandshake,
    title: "Community over isolation",
    desc: "Transformation sticks when ambitious believers walk together — not alone in the feed.",
  },
  {
    icon: BookOpen,
    title: "Practice over theory",
    desc: "Teachings from people actually doing the work. Weekly actions. Measurable growth.",
  },
  {
    icon: Shield,
    title: "Integrity in the marketplace",
    desc: "Wealth and influence stewarded for Kingdom impact — not compromise for applause.",
  },
  {
    icon: Sparkles,
    title: "Identity renewal",
    desc: "Reborn means a new standard: discipline, courage, and a life lived to the full.",
  },
];

export function ValuesSection() {
  return (
    <section id="values" className="section section-dark" aria-labelledby="values-heading">
      <div className="page-width">
        <FadeInUp>
          <span className="eyebrow">What we believe</span>
          <h2 id="values-heading" className="display mt-4 text-[clamp(32px,5vw,52px)] text-white">
            Non-negotiables of Reborn
          </h2>
          <p className="mt-4 max-w-2xl text-[#999]">
            This academy isn&apos;t neutral self-help. It&apos;s a faith-first environment for believers who
            want structure, standards, and a community that refuses to drift.
          </p>
        </FadeInUp>

        <div className="values-grid mt-14">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <FadeInUp key={v.title} delay={0.05 * i}>
                <article className="value-card">
                  <Icon size={22} className="text-[#cc1111]" aria-hidden="true" />
                  <h3 className="mt-4 text-sm font-extrabold uppercase tracking-wider text-white">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#888]">{v.desc}</p>
                </article>
              </FadeInUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
