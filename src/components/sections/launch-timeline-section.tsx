import { LAUNCH_DATE_LABEL } from "@/lib/launch";
import { Reveal } from "@/components/ui/reveal";

const timeline = [
  {
    phase: "Now",
    title: "Waitlist open",
    desc: "Join free. Get launch updates, early perks, and first access when doors open.",
    status: "active",
  },
  {
    phase: "Pre-launch",
    title: "Member previews",
    desc: "Waitlist members receive sneak peeks of the dashboard, app, and community before launch.",
    status: "upcoming",
  },
  {
    phase: LAUNCH_DATE_LABEL,
    title: "Official re-launch",
    desc: "Full academy opens — dashboard, custom app, community, affiliate program, and giveaways.",
    status: "launch",
  },
  {
    phase: "Beyond",
    title: "Walk the journey",
    desc: "Live sessions, curriculum drops, RB Insiders, and ongoing transformation across all five pillars.",
    status: "upcoming",
  },
];

export function LaunchTimelineSection() {
  return (
    <section id="timeline" className="section" aria-labelledby="timeline-heading">
      <div className="page-width">
        <Reveal>
          <span className="eyebrow">Road to launch</span>
          <h2 id="timeline-heading" className="display mt-4 text-[clamp(32px,5vw,52px)] text-white">
            Your path to {LAUNCH_DATE_LABEL}
          </h2>
          <p className="mt-4 max-w-2xl text-[#999]">
            A clear timeline from waitlist to full membership — built for believers who want
            structure, community, and momentum.
          </p>
        </Reveal>

        <ol className="launch-timeline mt-14">
          {timeline.map((step, i) => (
            <Reveal key={step.title} delay={i * 70}>
              <li className={`launch-timeline-step launch-timeline-${step.status}`}>
                <div className="launch-timeline-marker" aria-hidden="true" />
                <div className="launch-timeline-content">
                  <span className="launch-timeline-phase">{step.phase}</span>
                  <h3 className="mt-2 text-sm font-extrabold uppercase tracking-wider text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#888]">{step.desc}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
