"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CtaButton } from "@/components/ui/cta-button";
import { LaunchCountdown } from "@/components/ui/launch-countdown";
import { WaitlistCounter } from "@/components/ui/waitlist-counter";
import { LAUNCH_DATE_LABEL } from "@/lib/launch";

export function FinalCtaSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.4, 1, 1, 0.5]);

  return (
    <section ref={ref} className="final-cta-section" aria-labelledby="final-cta-heading">
      <motion.div className="final-cta-bg" style={{ y, opacity }} aria-hidden="true" />
      <div className="final-cta-grid" aria-hidden="true" />
      <div className="page-width relative z-10 py-[clamp(80px,12vw,140px)] text-center">
        <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-[#b8962e]">
          November 1, 2026
        </p>
        <h2
          id="final-cta-heading"
          className="display mt-4 text-[clamp(40px,8vw,96px)] text-white leading-[0.95]"
        >
          Don&apos;t miss
          <br />
          <span className="text-gradient-red">the re-launch.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base text-[#999]">
          Dashboard. Custom app. Community. Affiliate program. Giveaways. Founders who walk with you.
          Official re-launch {LAUNCH_DATE_LABEL} — waitlist members go first.
        </p>

        <div className="mx-auto mt-10 max-w-md">
          <LaunchCountdown />
        </div>

        <div className="mt-8 flex flex-col items-center gap-4">
          <WaitlistCounter />
          <CtaButton href="#waitlist" className="group">
            Lock in your waitlist spot
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
