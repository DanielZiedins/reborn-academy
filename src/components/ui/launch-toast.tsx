"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X, Flame } from "lucide-react";
import { LAUNCH_DATE_LABEL } from "@/lib/launch";

const STORAGE_KEY = "reborn-launch-toast-dismissed";

export function LaunchToast() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY) === "1") return;
    } catch {
      /* ignore */
    }

    const timer = setTimeout(() => setOpen(true), 2800);
    return () => clearTimeout(timer);
  }, []);

  function dismiss() {
    setOpen(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
  }

  if (!open) return null;

  return (
    <div className="launch-toast" role="status" aria-live="polite">
      <div className="launch-toast-icon">
        <Flame size={18} aria-hidden="true" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#b8962e]">
          Official re-launch
        </p>
        <p className="mt-1 text-sm text-white font-semibold">{LAUNCH_DATE_LABEL}</p>
        <p className="mt-1 text-xs text-[#888]">Waitlist open — first access to dashboard, app & rewards.</p>
        <Link href="#waitlist" className="launch-toast-cta" onClick={dismiss}>
          Join now →
        </Link>
      </div>
      <button type="button" className="launch-toast-close" onClick={dismiss} aria-label="Dismiss">
        <X size={16} />
      </button>
    </div>
  );
}
