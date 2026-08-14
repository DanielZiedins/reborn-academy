"use client";

import { useEffect, useState } from "react";
import { Radio } from "lucide-react";

const LINES = [
  "Waitlist open — first access for believers who move early",
  "Dashboard · App · Community · Affiliate · Giveaways",
  "Official re-launch November 1, 2026",
  "Founding waitlist members get launch-day priority",
  "Faith · Fitness · Business · Finances · Family",
];

export function JoinPulse({ className = "" }: { className?: string }) {
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % LINES.length), 4200);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/waitlist/count")
      .then((r) => r.json())
      .then((d) => {
        if (!cancelled && d.ok) setCount(typeof d.count === "number" ? d.count : null);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className={`join-pulse ${className}`} aria-live="polite">
      <span className="join-pulse-live">
        <Radio size={12} aria-hidden="true" />
        Live
      </span>
      <p key={index} className="join-pulse-text">
        {LINES[index]}
      </p>
      {count !== null && count > 0 && (
        <span className="join-pulse-count">{count.toLocaleString()} locked in</span>
      )}
    </div>
  );
}
