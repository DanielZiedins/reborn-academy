"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/seo";
import { Reveal } from "@/components/ui/reveal";

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0]?.id ?? null);

  return (
    <section id="faq" className="section" aria-labelledby="faq-heading">
      <div className="page-width">
        <Reveal>
          <span className="eyebrow">Questions</span>
          <h2 id="faq-heading" className="display mt-4 text-[clamp(32px,5vw,52px)] text-white">
            About Reborn Academy
          </h2>
          <p className="mt-4 max-w-2xl text-[#999]">
            Clear answers for search, discovery, and anyone researching what Reborn Academy is and
            who it&apos;s for.
          </p>
        </Reveal>

        <dl className="faq-accordion mt-14">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openId === item.id;
            return (
              <Reveal key={item.id} delay={i * 30}>
                <div className={`faq-accordion-item ${isOpen ? "faq-accordion-open" : ""}`}>
                  <dt id={`faq-${item.id}`}>
                    <button
                      type="button"
                      className="faq-accordion-trigger"
                      onClick={() => setOpenId(isOpen ? null : item.id)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${item.id}`}
                    >
                      <span>{item.question}</span>
                      <ChevronDown
                        size={18}
                        className={`faq-accordion-icon ${isOpen ? "faq-accordion-icon-open" : ""}`}
                        aria-hidden="true"
                      />
                    </button>
                  </dt>
                  <dd
                    id={`faq-answer-${item.id}`}
                    className="faq-accordion-panel"
                    hidden={!isOpen}
                  >
                    <p className="faq-answer">{item.answer}</p>
                  </dd>
                </div>
              </Reveal>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
