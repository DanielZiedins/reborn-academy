"use client";

import { useEffect, useState } from "react";
import { Users } from "lucide-react";
import { useWaitlistCount } from "@/components/providers/waitlist-count-provider";

type Props = {
  className?: string;
  compact?: boolean;
};

export function WaitlistCounter({ className = "", compact = false }: Props) {
  const { count, loading } = useWaitlistCount();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (count === null) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || count === 0) {
      setDisplay(count);
      return;
    }

    const start = display;
    const end = count;
    const duration = 900;
    const startTime = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const t = Math.min(1, (now - startTime) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(start + (end - start) * eased));
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- animate only when count changes
  }, [count]);

  if (loading && count === null) {
    return (
      <div className={`waitlist-counter waitlist-counter-loading ${className}`} aria-hidden="true">
        <Users size={14} />
        <span>Loading waitlist…</span>
      </div>
    );
  }

  const n = count ?? 0;
  const label =
    n <= 1
      ? "Be among the first believers on the waitlist"
      : compact
        ? `${display.toLocaleString()} on the waitlist`
        : `${display.toLocaleString()} believers already locked in`;

  return (
    <div
      className={`waitlist-counter ${compact ? "waitlist-counter-compact" : ""} ${className}`}
      aria-live="polite"
    >
      <span className="waitlist-counter-pulse" aria-hidden="true" />
      <Users size={14} aria-hidden="true" />
      <span>{label}</span>
    </div>
  );
}
