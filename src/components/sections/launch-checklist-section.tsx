"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, Circle } from "lucide-react";
import { FadeInUp } from "@/components/ui/motion";
import { CtaButton } from "@/components/ui/cta-button";
import { LAUNCH_DATE_LABEL } from "@/lib/launch";

const STORAGE_KEY = "reborn-launch-checklist-v1";

const ITEMS = [
  { id: "waitlist", label: "Join the free waitlist", href: "#waitlist" },
  { id: "calendar", label: `Add ${LAUNCH_DATE_LABEL} to your calendar`, href: "#waitlist" },
  { id: "video", label: "Watch the Reborn vision video", href: "#video" },
  { id: "share", label: "Share Reborn with one believer who needs this", href: "#waitlist" },
  { id: "pray", label: "Pray for the launch and the people who will join", href: "#values" },
];

export function LaunchChecklistSection() {
  const [done, setDone] = useState<Record<string, boolean>>({});

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setDone(JSON.parse(raw));
    } catch {
      /* ignore */
    }
  }, []);

  function toggle(id: string) {
    setDone((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        /* ignore */
      }
      return next;
    });
  }

  const completed = ITEMS.filter((i) => done[i.id]).length;
  const pct = Math.round((completed / ITEMS.length) * 100);

  return (
    <section id="checklist" className="section" aria-labelledby="checklist-heading">
      <div className="page-width">
        <div className="checklist-layout">
          <FadeInUp>
            <span className="eyebrow">Before launch day</span>
            <h2 id="checklist-heading" className="display mt-4 text-[clamp(32px,5vw,52px)] text-white">
              Your Reborn launch checklist
            </h2>
            <p className="mt-4 max-w-xl text-[#999]">
              Small acts of faithfulness before {LAUNCH_DATE_LABEL}. Progress saves on this device —
              come back and finish what you started.
            </p>
            <div className="checklist-progress mt-8">
              <div className="checklist-progress-head">
                <span>
                  {completed}/{ITEMS.length} complete
                </span>
                <span>{pct}%</span>
              </div>
              <div className="checklist-progress-track">
                <div className="checklist-progress-fill" style={{ width: `${pct}%` }} />
              </div>
            </div>
            <div className="mt-8">
              <CtaButton href="#waitlist" className="group">
                Start with the waitlist
              </CtaButton>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <ul className="checklist-list">
              {ITEMS.map((item) => {
                const isDone = Boolean(done[item.id]);
                return (
                  <li key={item.id} className={`checklist-item ${isDone ? "checklist-item-done" : ""}`}>
                    <button
                      type="button"
                      className="checklist-toggle"
                      onClick={() => toggle(item.id)}
                      aria-pressed={isDone}
                    >
                      {isDone ? (
                        <CheckCircle2 size={22} className="text-[#4ade80]" aria-hidden="true" />
                      ) : (
                        <Circle size={22} className="text-[#555]" aria-hidden="true" />
                      )}
                      <span>{item.label}</span>
                    </button>
                    <a href={item.href} className="checklist-link">
                      Go →
                    </a>
                  </li>
                );
              })}
            </ul>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
