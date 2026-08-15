"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export function SpotlightCard({ children, className = "" }: Props) {
  const ref = useRef<HTMLElement>(null);

  function onMove(e: MouseEvent<HTMLElement>) {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
  }

  return (
    <article ref={ref} className={`spotlight-card ${className}`} onMouseMove={onMove}>
      {children}
    </article>
  );
}
