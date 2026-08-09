import Image from "next/image";
import { programs } from "@/lib/content";
import { Reveal } from "@/components/ui/reveal";

export function ProgramsSection() {
  return (
    <section id="programs" className="section section-dark overflow-hidden">
      <div className="page-width">
        <Reveal>
          <span className="eyebrow">Programs</span>
          <h2 className="display mt-4 text-[clamp(32px,5vw,56px)] text-white">
            Five pillars. One trajectory.
          </h2>
          <p className="mt-4 max-w-2xl text-[#999]">
            Premium development academy structure — every area rooted in Scripture, built for believers
            who refuse to live small.
          </p>
        </Reveal>

        <div className="programs-scroll mt-14">
          {programs.map((p, i) => (
            <Reveal key={p.id} delay={i * 60}>
              <article className="program-card group">
                <div className="program-card-media">
                  <Image
                    src={p.image}
                    alt=""
                    width={400}
                    height={280}
                    className="program-card-image"
                  />
                  <div className="program-card-overlay" />
                  <div className="program-card-icon">
                    <p.icon size={22} />
                  </div>
                </div>
                <div className="program-card-body">
                  <p className="program-card-outcome">{p.outcome}</p>
                  <h3 className="display mt-2 text-4xl text-white">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#888]">{p.desc}</p>
                  {p.tracks && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.tracks.map((t) => (
                        <span key={t} className="track-tag">{t}</span>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
