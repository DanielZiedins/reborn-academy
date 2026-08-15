"use client";

import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "launch", label: "Launch" },
  { id: "programs", label: "Programs" },
  { id: "academy", label: "Academy" },
  { id: "giveaways", label: "Rewards" },
  { id: "community", label: "Community" },
  { id: "founders", label: "Founders" },
  { id: "faq", label: "FAQ" },
  { id: "waitlist", label: "Waitlist" },
];

export function SectionNav() {
  const [active, setActive] = useState("launch");
  const [visible, setVisible] = useState(false);
  const [hasSections, setHasSections] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );
    setHasSections(els.length > 0);
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (hit?.target.id) setActive(hit.target.id);
      },
      { rootMargin: "-30% 0px -50% 0px", threshold: [0, 0.2, 0.5] },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  if (!visible || !hasSections) return null;

  return (
    <nav className="section-nav" aria-label="Page sections">
      {SECTIONS.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className={`section-nav-dot ${active === s.id ? "active" : ""}`}
          aria-label={s.label}
          aria-current={active === s.id ? "true" : undefined}
          title={s.label}
        >
          <span className="section-nav-label">{s.label}</span>
        </a>
      ))}
    </nav>
  );
}
