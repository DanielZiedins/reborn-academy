"use client";

import { Check, X } from "lucide-react";
import { FadeInUp } from "@/components/ui/motion";
import { CtaButton } from "@/components/ui/cta-button";

const forYou = [
  "Young, ambitious Christians who refuse an ordinary life",
  "Believers who want faith AND excellence in business, fitness, finances, and family",
  "People hungry for structure, accountability, and a high-standard community",
  "Those ready to execute — not just consume motivation",
];

const notFor = [
  "Anyone looking for fluff, hype without substance, or compromised teaching",
  "People who want results without obedience, discipline, or community",
  "Those allergic to standards, feedback, or doing the work",
  "Anyone looking for a secular self-help clone with Christian branding",
];

export function WhoItsForSection() {
  return (
    <section id="fit" className="section section-dark" aria-labelledby="fit-heading">
      <div className="page-width">
        <FadeInUp>
          <span className="eyebrow">Is this for you?</span>
          <h2 id="fit-heading" className="display mt-4 text-[clamp(32px,5vw,52px)] text-white">
            Clarity before commitment
          </h2>
          <p className="mt-4 max-w-2xl text-[#999]">
            Reborn Academy is built for a specific kind of believer. If that&apos;s you — the waitlist is
            your next move.
          </p>
        </FadeInUp>

        <div className="fit-grid mt-14">
          <FadeInUp delay={0.05}>
            <article className="fit-card fit-card-yes">
              <h3 className="fit-card-title">
                <Check size={18} aria-hidden="true" />
                This is for you if…
              </h3>
              <ul className="fit-list">
                {forYou.map((item) => (
                  <li key={item}>
                    <Check size={14} className="fit-icon-yes" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <article className="fit-card fit-card-no">
              <h3 className="fit-card-title">
                <X size={18} aria-hidden="true" />
                This is not for you if…
              </h3>
              <ul className="fit-list">
                {notFor.map((item) => (
                  <li key={item}>
                    <X size={14} className="fit-icon-no" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </FadeInUp>
        </div>

        <FadeInUp delay={0.15} className="mt-12 flex justify-center">
          <CtaButton href="#waitlist" className="group">
            I&apos;m ready — join the waitlist
          </CtaButton>
        </FadeInUp>
      </div>
    </section>
  );
}
