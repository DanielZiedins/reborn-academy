"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

type Props = {
  children: ReactNode;
  className?: string;
  strength?: number;
};

export function ParallaxLayer({ children, className = "", strength = 80 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, strength]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30, mass: 0.5 });

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y: smoothY }}>{children}</motion.div>
    </div>
  );
}

export function FadeInUp({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function FloatingOrb({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`floating-orb ${className}`}
      animate={{
        y: [0, -18, 0],
        opacity: [0.4, 0.7, 0.4],
      }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}
