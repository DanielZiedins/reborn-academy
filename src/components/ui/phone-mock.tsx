"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const screens = [
  { title: "Today's focus", value: "Faith + Fitness", sub: "Morning routine locked in" },
  { title: "Community", value: "12 new wins", sub: "War room active now" },
  { title: "Your progress", value: "87%", sub: "Week 4 challenge" },
  { title: "Affiliate", value: "Refer & earn", sub: "Share the mission" },
];

export function PhoneMock() {
  const [screen, setScreen] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setScreen((s) => (s + 1) % screens.length), 3500);
    return () => clearInterval(id);
  }, []);

  const current = screens[screen];

  return (
    <div className="phone-mock" aria-hidden="true">
      <div className="phone-mock-notch" />
      <div className="phone-mock-screen">
        <div className="phone-mock-header">
          <span className="phone-mock-logo">REBORN</span>
          <span className="coming-soon-mini">App</span>
        </div>
        <motion.div
          key={screen}
          className="phone-mock-card"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <p className="phone-mock-card-label">{current.title}</p>
          <p className="phone-mock-card-value display">{current.value}</p>
          <p className="phone-mock-card-sub">{current.sub}</p>
        </motion.div>
        <div className="phone-mock-nav">
          {["Home", "Learn", "Community", "Profile"].map((item, i) => (
            <span key={item} className={i === 0 ? "active" : ""}>{item}</span>
          ))}
        </div>
      </div>
      <div className="phone-mock-glow" />
    </div>
  );
}
