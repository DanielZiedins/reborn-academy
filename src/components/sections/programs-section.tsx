"use client";

import { programs } from "@/lib/content";
import { FadeInUp } from "@/components/ui/motion";
import { motion } from "framer-motion";

export function ProgramsSection() {
  return (
    <section id="programs" className="section section-dark overflow-hidden">
      <div className="page-width">
        <FadeInUp>
          <span className="eyebrow">Programs · Coming soon</span>
          <h2 className="display mt-4 text-[clamp(32px,5vw,56px)] text-white">
            Five pillars. One trajectory.
          </h2>
          <p className="mt-4 max-w-2xl text-[#999]">
            Full curriculum drops at relaunch — every area rooted in Scripture, built for believers
            who refuse to live small.
          </p>
        </FadeInUp>

        <div className="programs-scroll mt-14">
          {programs.map((p, i) => (
            <FadeInUp key={p.id} delay={i * 0.06}>
              <motion.article
                className="program-card program-card-icon-only group"
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
              >
                <div
                  className={`program-icon-header accent-${p.accent}`}
                >
                  <p.icon size={32} />
                  <span className="coming-soon-mini">Soon</span>
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
              </motion.article>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
