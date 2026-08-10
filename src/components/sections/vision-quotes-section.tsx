"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const quotes = [
  {
    text: "We built Reborn Academy so believers stop drifting — and start building every area of life with Christ at the center.",
    author: "Mike Gagat & Daniel Ziedins",
  },
  {
    text: "This isn't motivation. It's a system — faith, fitness, business, finances, family — with community that walks with you.",
    author: "Reborn Academy",
  },
  {
    text: "November 1, 2026 isn't just a launch date. It's the day the full Reborn ecosystem opens for believers ready to go all in.",
    author: "Reborn Academy",
  },
];

export function VisionQuotesSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % quotes.length), 6000);
    return () => clearInterval(id);
  }, []);

  const quote = quotes[index];

  return (
    <section className="vision-quotes-section" aria-label="Founder vision">
      <div className="page-width">
        <div className="vision-quote-card">
          <span className="eyebrow">The vision</span>
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45 }}
              className="vision-quote-text"
            >
              &ldquo;{quote.text}&rdquo;
            </motion.blockquote>
          </AnimatePresence>
          <p className="vision-quote-author">{quote.author}</p>
          <div className="vision-quote-dots" role="tablist" aria-label="Vision quotes">
            {quotes.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Quote ${i + 1}`}
                className={`vision-quote-dot ${i === index ? "active" : ""}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
