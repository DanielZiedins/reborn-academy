"use client";

import { useEffect, useState } from "react";

const COLORS = ["#cc1111", "#b8962e", "#e7d9ae", "#ffffff", "#ff4444"];

type Particle = {
  id: number;
  left: number;
  delay: number;
  duration: number;
  color: string;
  size: number;
};

export function ConfettiBurst({ active }: { active: boolean }) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (!active) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const newParticles: Particle[] = Array.from({ length: 48 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.3,
      duration: 1.2 + Math.random() * 0.8,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      size: 4 + Math.random() * 6,
    }));
    setParticles(newParticles);

    const timer = setTimeout(() => setParticles([]), 2200);
    return () => clearTimeout(timer);
  }, [active]);

  if (particles.length === 0) return null;

  return (
    <div className="confetti-burst" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="confetti-particle"
          style={{
            left: `${p.left}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            backgroundColor: p.color,
            width: p.size,
            height: p.size,
          }}
        />
      ))}
    </div>
  );
}
