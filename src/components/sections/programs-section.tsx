"use client";

import { useState } from "react";
import { programs } from "@/lib/content";
import { FadeInUp } from "@/components/ui/motion";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export function ProgramsSection() {
  const [openId, setOpenId] = useState<string | null>(programs[0]?.id ?? null);

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
            who refuse to live small.{" "}
            <Link href="/programs" className="text-[#b8962e] hover:text-white">
              Read the programs guide →
            </Link>
          </p>
        </FadeInUp>

        <div className="programs-scroll mt-14">
          {programs.map((p, i) => {
            const isOpen = openId === p.id;
            return (
              <FadeInUp key={p.id} delay={i * 0.06}>
                <motion.article
                  className={`program-card program-card-icon-only group ${isOpen ? "program-card-open" : ""}`}
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                >
                  <button
                    type="button"
                    className="program-card-trigger"
                    onClick={() => setOpenId(isOpen ? null : p.id)}
                    aria-expanded={isOpen}
                  >
                    <div className={`program-icon-header accent-${p.accent}`}>
                      <p.icon size={32} />
                      <span className="coming-soon-mini">Soon</span>
                    </div>
                    <div className="program-card-body">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="program-card-outcome">{p.outcome}</p>
                          <h3 className="display mt-2 text-4xl text-white text-left">{p.title}</h3>
                        </div>
                        <ChevronDown
                          size={18}
                          className={`mt-2 shrink-0 text-[#666] transition-transform ${isOpen ? "rotate-180 text-[#cc1111]" : ""}`}
                          aria-hidden="true"
                        />
                      </div>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <p className="mt-3 text-sm leading-relaxed text-[#888] text-left">
                              {p.desc}
                            </p>
                            {p.tracks && (
                              <div className="mt-4 flex flex-wrap gap-1.5">
                                {p.tracks.map((t) => (
                                  <span key={t} className="track-tag">
                                    {t}
                                  </span>
                                ))}
                              </div>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </button>
                </motion.article>
              </FadeInUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
