import { Reveal } from "@/components/ui/reveal";

export function ProblemSection() {
  const gaps = [
    "Direction",
    "Structure",
    "Discipline",
    "Environment",
    "Accountability",
    "Relevant skills",
    "High standards",
    "The right people",
  ];

  return (
    <section className="section section-minimal">
      <div className="page-width">
        <Reveal>
          <span className="eyebrow">Act I — The gap</span>
          <h2 className="display mt-4 max-w-3xl text-[clamp(32px,5vw,56px)] text-white">
            Ambitious people are drowning in content.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal delay={100}>
            <p className="text-lg leading-relaxed text-[#999]">
              You can watch a hundred videos on business, fitness, faith, and finance. You can read
              every thread. You still wake up without a system, without people who hold you to a
              standard, without an environment that demands your next version.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-[#999]">
              The problem isn&apos;t motivation. It&apos;s <strong className="text-white">architecture</strong>.
              Most young believers have access to endless information — but lack what actually changes
              a life.
            </p>
          </Reveal>

          <Reveal delay={180}>
            <div className="gap-grid">
              {gaps.map((g, i) => (
                <div key={g} className="gap-cell" style={{ animationDelay: `${i * 60}ms` }}>
                  <span className="gap-index">{String(i + 1).padStart(2, "0")}</span>
                  <span className="gap-label">{g}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={240}>
          <p className="statement-line mt-16 text-center">
            This isn&apos;t another course.{" "}
            <em>It&apos;s an environment built for change.</em>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
