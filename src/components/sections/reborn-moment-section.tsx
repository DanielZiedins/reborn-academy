"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/ui/reveal";

export function RebornMomentSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setProgress(1);
      return;
    }

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      const raw = 1 - rect.bottom / (rect.height + vh);
      setProgress(Math.min(1, Math.max(0, raw)));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={sectionRef} className="reborn-moment section overflow-hidden">
      <div className="reborn-moment-bg" style={{ opacity: 0.15 + progress * 0.35 }} />
      <div className="page-width relative z-10">
        <Reveal>
          <span className="eyebrow text-center lg:text-left">The philosophy</span>
        </Reveal>

        <div className="reborn-typography mt-8" style={{ "--reborn-p": progress } as React.CSSProperties}>
          <span className="reborn-word reborn-word-old" data-state="old">WHO YOU WERE</span>
          <span className="reborn-word reborn-word-core display">REBORN</span>
          <span className="reborn-word reborn-word-new" data-state="new">WHO YOU BUILD</span>
        </div>

        <Reveal delay={120}>
          <div className="mx-auto mt-12 max-w-2xl text-center lg:mx-0 lg:text-left">
            <p className="text-lg leading-relaxed text-[#aaa]">
              Reborn isn&apos;t a feeling that arrives one Sunday. It&apos;s a deliberate exit from drift —
              spirit, mind, body, purpose — forged inside an academy that refuses ordinary.
            </p>
            <p className="mt-4 text-sm font-bold uppercase tracking-[0.2em] text-[#b8962e]">
              The old identity ends here. The new one is built on purpose.
            </p>
          </div>
        </Reveal>

        <div className="reborn-progress-track mt-16">
          <div className="reborn-progress-fill" style={{ width: `${progress * 100}%` }} />
        </div>
      </div>
    </section>
  );
}
