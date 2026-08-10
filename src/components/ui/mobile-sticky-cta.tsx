"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function MobileStickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="mobile-sticky-cta lg:hidden" role="complementary" aria-label="Join waitlist">
      <Link href="#waitlist" className="mobile-sticky-cta-btn">
        Join the waitlist — Nov 1 launch
      </Link>
    </div>
  );
}
