"use client";

import { useEffect, useRef, useState } from "react";
import { transformationPairs } from "@/lib/content";
import { Reveal } from "@/components/ui/reveal";

export function TransformationSection() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const progress = 1 - rect.bottom / (rect.height + window.innerHeight * 0.5);
      const idx = Math.min(
        transformationPairs.length - 1,
        Math.max(0, Math.floor(progress * transformationPairs.length)),
      );
      setActive(idx);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const current = transformationPairs[active];

  return (
    <section ref={ref} className="transform-section section">
      <div className="page-width">
        <Reveal>
          <span className="eyebrow">Transformation</span>
          <h2 className="display mt-4 text-[clamp(32px,5vw,52px)] text-white">
            The shift we engineer
          </h2>
        </Reveal>

        <div className="transform-stage mt-14">
          <div className="transform-from">
            <span className="transform-label">From</span>
            <p className="display text-[clamp(36px,6vw,72px)] text-[#555]">{current.from}</p>
          </div>
          <div className="transform-arrow" aria-hidden="true">
            <div className="transform-arrow-line" />
          </div>
          <div className="transform-to">
            <span className="transform-label text-[#cc1111]">To</span>
            <p className="display text-[clamp(36px,6vw,72px)] text-white">{current.to}</p>
          </div>
        </div>

        <div className="transform-dots mt-10 flex justify-center gap-2">
          {transformationPairs.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`transform-dot ${i === active ? "active" : ""}`}
              aria-label={`Transformation ${i + 1}`}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
