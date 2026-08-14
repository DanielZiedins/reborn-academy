"use client";

import { useEffect, useState, type ReactNode } from "react";
import dynamic from "next/dynamic";

const CursorGlow = dynamic(
  () => import("@/components/ui/cursor-glow").then((m) => m.CursorGlow),
  { ssr: false },
);
const LaunchToast = dynamic(
  () => import("@/components/ui/launch-toast").then((m) => m.LaunchToast),
  { ssr: false },
);
const SectionNav = dynamic(
  () => import("@/components/ui/section-nav").then((m) => m.SectionNav),
  { ssr: false },
);
const BackToTop = dynamic(
  () => import("@/components/ui/back-to-top").then((m) => m.BackToTop),
  { ssr: false },
);
const MobileStickyCta = dynamic(
  () => import("@/components/ui/mobile-sticky-cta").then((m) => m.MobileStickyCta),
  { ssr: false },
);

export function DeferredChrome({ children }: { children?: ReactNode }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const enable = () => setReady(true);
    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(enable, { timeout: 1800 });
      return () => window.cancelIdleCallback(id);
    }
    const t = setTimeout(enable, 400);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || (e.target as HTMLElement)?.isContentEditable) {
        return;
      }
      if (e.key === "w" || e.key === "W") {
        e.preventDefault();
        document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (!ready) return children ?? null;

  return (
    <>
      {children}
      <CursorGlow />
      <SectionNav />
      <MobileStickyCta />
      <BackToTop />
      <LaunchToast />
    </>
  );
}
