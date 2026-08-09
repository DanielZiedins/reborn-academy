import { systemSteps } from "@/lib/content";
import { Reveal } from "@/components/ui/reveal";

export function SystemSection() {
  return (
    <section id="system" className="section section-dark">
      <div className="page-width">
        <Reveal>
          <span className="eyebrow">The system</span>
          <h2 className="display mt-4 text-[clamp(32px,5vw,52px)] text-white">
            How transformation actually happens
          </h2>
          <p className="mt-4 max-w-2xl text-[#999]">
            Not inspiration alone. A repeatable path — learn, apply, build, connect, evolve.
          </p>
        </Reveal>

        <div className="system-rail mt-14">
          {systemSteps.map((s, i) => (
            <Reveal key={s.label} delay={i * 70}>
              <div className="system-step">
                <div className="system-step-marker">
                  <span>{s.step}</span>
                  {i < systemSteps.length - 1 && <div className="system-step-line" />}
                </div>
                <div className="system-step-body">
                  <h3 className="display text-3xl text-white">{s.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#888]">{s.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
