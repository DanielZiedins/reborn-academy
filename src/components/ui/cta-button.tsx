"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useRef, type MouseEvent, type ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  icon?: boolean;
};

let prefetchedCount = false;

function prefetchWarm() {
  if (prefetchedCount) return;
  prefetchedCount = true;
  void fetch("/api/waitlist/count").catch(() => {});
}

export function CtaButton({
  href,
  children,
  variant = "primary",
  className = "",
  icon = true,
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const variantClass =
    variant === "primary" ? "btn-red" : variant === "outline" ? "btn-outline" : "btn-ghost";

  function onMove(e: MouseEvent<HTMLAnchorElement>) {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.12}px, ${y * 0.18}px)`;
  }

  function onLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0, 0)";
  }

  return (
    <Link
      ref={ref}
      href={href}
      className={`btn ${variantClass} magnetic-cta ${className}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onMouseEnter={prefetchWarm}
      onFocus={prefetchWarm}
    >
      {children}
      {icon && <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />}
    </Link>
  );
}
