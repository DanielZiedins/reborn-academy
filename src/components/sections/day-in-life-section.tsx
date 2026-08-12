import { FadeInUp } from "@/components/ui/motion";

const day = [
  {
    time: "05:30",
    title: "Faith first",
    desc: "Scripture, prayer, and identity — start the day rooted before the world pulls you.",
    pillar: "Faith",
  },
  {
    time: "06:15",
    title: "Train the body",
    desc: "Workout protocols from the Fitness track — strength for the mission, not vanity.",
    pillar: "Fitness",
  },
  {
    time: "09:00",
    title: "Build in the marketplace",
    desc: "Business modules, investing lessons, and real execution inside the member dashboard.",
    pillar: "Business",
  },
  {
    time: "12:30",
    title: "War room check-in",
    desc: "Community wins, accountability, and live energy from believers who refuse to drift.",
    pillar: "Community",
  },
  {
    time: "19:00",
    title: "Steward home",
    desc: "Family frameworks — marriage, parenting, and legacy on biblical foundations.",
    pillar: "Family",
  },
  {
    time: "21:00",
    title: "Review & reset",
    desc: "Track progress in the app. Lock tomorrow's focus. Sleep like someone with a mission.",
    pillar: "Finances",
  },
];

export function DayInLifeSection() {
  return (
    <section id="journey" className="section overflow-hidden">
      <div className="page-width">
        <FadeInUp>
          <span className="eyebrow">A day inside Reborn</span>
          <h2 className="display mt-4 text-[clamp(32px,5vw,52px)] text-white">
            What life looks like when you go all in
          </h2>
          <p className="mt-4 max-w-2xl text-[#999]">
            Not another course you abandon. A daily rhythm across every pillar — powered by the
            dashboard, app, and community launching November 1, 2026.
          </p>
        </FadeInUp>

        <ol className="day-timeline mt-14">
          {day.map((item, i) => (
            <FadeInUp key={item.time} delay={0.05 * i}>
              <li className="day-timeline-item">
                <div className="day-time">{item.time}</div>
                <div className="day-marker" aria-hidden="true" />
                <div className="day-content">
                  <span className="day-pillar">{item.pillar}</span>
                  <h3 className="mt-2 text-sm font-extrabold uppercase tracking-wider text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#888]">{item.desc}</p>
                </div>
              </li>
            </FadeInUp>
          ))}
        </ol>
      </div>
    </section>
  );
}
