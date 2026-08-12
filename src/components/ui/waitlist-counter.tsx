"use client";

import { useEffect, useState } from "react";
import { Users } from "lucide-react";

type Props = {
  className?: string;
  compact?: boolean;
};

export function WaitlistCounter({ className = "", compact = false }: Props) {
  const [count, setCount] = useState<number | null>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch("/api/waitlist/count");
        const data = await res.json();
        if (!cancelled && data.ok) setCount(typeof data.count === "number" ? data.count : 0);
      } catch {
        if (!cancelled) setCount(0);
      }
    }

    load();
    const id = setInterval(load, 90_000);
    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, []);

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

  if (count === null) {
    return (
      <div className={`waitlist-counter waitlist-counter-loading ${className}`} aria-hidden="true">
        <Users size={14} />
        <span>Loading waitlist…</span>
      </div>
    );
  }

  const label =
    count <= 1
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
