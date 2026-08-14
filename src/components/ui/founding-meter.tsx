"use client";

import { useEffect, useState } from "react";
import { Users } from "lucide-react";

/** Soft founding-cohort visual — uses real waitlist count, labeled honestly */
const GOAL = 250;

export function FoundingMeter({ className = "" }: { className?: string }) {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/waitlist/count")
      .then((r) => r.json())
      .then((d) => {
        if (!cancelled && d.ok) setCount(typeof d.count === "number" ? d.count : 0);
      })
      .catch(() => {
        if (!cancelled) setCount(0);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (count === null) return null;

  const pct = Math.min(100, Math.max(2, Math.round((count / GOAL) * 100)));

  return (
    <div className={`founding-meter ${className}`}>
      <div className="founding-meter-head">
        <span className="founding-meter-title">
          <Users size={14} aria-hidden="true" />
          Founding waitlist
        </span>
        <span className="founding-meter-nums">
          {count.toLocaleString()} / {GOAL.toLocaleString()}
        </span>
      </div>
      <div className="founding-meter-track" role="progressbar" aria-valuenow={count} aria-valuemin={0} aria-valuemax={GOAL} aria-label="Founding waitlist progress">
        <div className="founding-meter-fill" style={{ width: `${pct}%` }} />
      </div>
      <p className="founding-meter-sub">
        Early believers securing first access before the November 1, 2026 re-launch.
      </p>
    </div>
  );
}
