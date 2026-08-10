"use client";

import { motion } from "framer-motion";
import { LAUNCH_DATE_LABEL } from "@/lib/launch";

const stats = [
  { value: "5", label: "Core pillars", sub: "Faith · Fitness · Business · Finances · Family" },
  { value: "2", label: "Founders", sub: "Mike Gagat & Daniel Ziedins" },
  { value: "1", label: "Epic ecosystem", sub: "Dashboard · App · Community · Affiliate" },
  { value: "∞", label: "Kingdom impact", sub: "Built for believers worldwide" },
];

export function HypeStatsSection() {
  return (
    <section className="hype-stats-section" aria-label="Reborn Academy highlights">
      <div className="page-width">
        <div className="hype-stats-grid">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="hype-stat-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="hype-stat-value display">{stat.value}</span>
              <span className="hype-stat-label">{stat.label}</span>
              <span className="hype-stat-sub">{stat.sub}</span>
            </motion.div>
          ))}
        </div>
        <p className="hype-stats-launch">
          Official re-launch · <strong>{LAUNCH_DATE_LABEL}</strong> · Join the waitlist for first access
        </p>
      </div>
    </section>
  );
}
