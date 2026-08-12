"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LAUNCH_DATE, LAUNCH_DATE_LABEL } from "@/lib/launch";

export function MobileStickyCta() {
  const [visible, setVisible] = useState(false);
  const [days, setDays] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const update = () => {
      const diff = LAUNCH_DATE.getTime() - Date.now();
      setDays(diff <= 0 ? 0 : Math.ceil(diff / (1000 * 60 * 60 * 24)));
    };
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, []);

  if (!visible) return null;

  return (
    <div className="mobile-sticky-cta lg:hidden" role="complementary" aria-label="Join waitlist">
      <div className="mobile-sticky-meta">
        <span className="coming-soon-mini">Coming soon</span>
        <span>
          {days === null
            ? LAUNCH_DATE_LABEL
            : days === 0
              ? "Launch day"
              : `${days}d to launch`}
        </span>
      </div>
      <Link href="#waitlist" className="mobile-sticky-cta-btn">
        Join the waitlist
      </Link>
    </div>
  );
}
