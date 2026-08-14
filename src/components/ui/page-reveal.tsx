"use client";

import { useEffect, useState } from "react";

export function PageReveal() {
  const [done, setDone] = useState(false);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setHide(true);
      setDone(true);
      return;
    }

    const t1 = setTimeout(() => setDone(true), 650);
    const t2 = setTimeout(() => setHide(true), 1100);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (hide) return null;

  return (
    <div className={`page-reveal ${done ? "page-reveal-done" : ""}`} aria-hidden="true">
      <div className="page-reveal-panel page-reveal-top" />
      <div className="page-reveal-panel page-reveal-bottom" />
      <div className="page-reveal-mark">
        <span>REBORN</span>
      </div>
    </div>
  );
}
