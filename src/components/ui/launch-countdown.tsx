"use client";

import { useEffect, useState } from "react";
import { LAUNCH_DATE, LAUNCH_DATE_LABEL } from "@/lib/launch";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  launched: boolean;
};

function calcTimeLeft(): TimeLeft {
  const diff = LAUNCH_DATE.getTime() - Date.now();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, launched: true };
  }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds, launched: false };
}

type Props = {
  variant?: "hero" | "compact";
};

export function LaunchCountdown({ variant = "hero" }: Props) {
  const [time, setTime] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTime(calcTimeLeft());
    const id = setInterval(() => setTime(calcTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!time) return null;

  const units = [
    { label: "Days", value: time.days },
    { label: "Hours", value: time.hours },
    { label: "Minutes", value: time.minutes },
    { label: "Seconds", value: time.seconds },
  ];

  if (variant === "compact") {
    return (
      <div className="countdown-compact">
        <span className="coming-soon-badge">Coming soon</span>
        <span className="countdown-compact-text">
          {time.launched ? "We're live!" : `${time.days}d ${time.hours}h until relaunch`}
        </span>
      </div>
    );
  }

  return (
    <div className="countdown-block" aria-live="polite">
      <div className="countdown-header">
        <span className="coming-soon-badge pulse-badge">Official re-launch</span>
        <p className="countdown-date">{LAUNCH_DATE_LABEL}</p>
      </div>

      {time.launched ? (
        <p className="display countdown-launched text-4xl text-[#cc1111]">The academy is opening</p>
      ) : (
      <div className="countdown-grid">
          {units.map((u) => (
            <div key={u.label} className="countdown-cell">
              <span key={`${u.label}-${u.value}`} className="countdown-value countdown-tick">
                {String(u.value).padStart(2, "0")}
              </span>
              <span className="countdown-label">{u.label}</span>
            </div>
          ))}
        </div>
      )}

      <p className="countdown-sub">
        Don&apos;t miss the Reborn re-launch. Waitlist members get first access.
      </p>
    </div>
  );
}
