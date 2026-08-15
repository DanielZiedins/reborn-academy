"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { WaitlistForm } from "@/components/waitlist-form";
import { CtaButton } from "@/components/ui/cta-button";
import { LaunchCountdown } from "@/components/ui/launch-countdown";
import { WaitlistCounter } from "@/components/ui/waitlist-counter";
import { JoinPulse } from "@/components/ui/join-pulse";
import { FloatingOrb, ParallaxLayer } from "@/components/ui/motion";

export function HeroSection() {
  const reduced = useReducedMotion();
  const enter = (delay = 0) =>
    reduced
      ? undefined
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.55, delay },
        };

  return (
    <section
      className="hero relative min-h-[100svh] overflow-hidden pt-[var(--nav-height)]"
      aria-labelledby="hero-heading"
    >
      <div className="hero-atmosphere" />
      <FloatingOrb className="orb-red orb-hero-1" />
      <FloatingOrb className="orb-gold orb-hero-2" />
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="hero-noise" aria-hidden="true" />
      <div className="hero-embers" aria-hidden="true">
        <span /><span /><span /><span /><span /><span />
      </div>

      <ParallaxLayer className="absolute inset-0" strength={90}>
        <Image
          src="/images/hero-mountain.png"
          alt="Warrior on a mountain peak — Reborn Academy faith-based transformation"
          fill
          priority
          quality={70}
          className="object-cover object-center opacity-25 mix-blend-luminosity scale-110"
          sizes="100vw"
        />
      </ParallaxLayer>

      <div className="hero-vignette absolute inset-0" />

      <div className="page-width relative z-10 grid min-h-[calc(100svh-var(--nav-height))] items-center gap-12 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
        <div className="text-center lg:text-left">
          <motion.div {...enter(0)}>
            <div className="status-pill mx-auto lg:mx-0">
              <span className="live-dot" />
              <span>Coming soon · Waitlist open now</span>
            </div>
          </motion.div>

          <motion.h1
            id="hero-heading"
            className="display mt-6 text-[clamp(40px,7.5vw,84px)] text-white"
            {...(reduced
              ? {}
              : {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.65, delay: 0.08 },
                })}
          >
            <span className="mb-3 block text-[clamp(16px,2.5vw,26px)] tracking-[0.28em] text-[#cc1111]">
              REBORN ACADEMY
            </span>
            The re-launch is coming.
            <br />
            <span className="text-gradient-red">You won&apos;t want to miss this.</span>
          </motion.h1>

          <motion.p
            className="mt-5 max-w-xl text-base leading-relaxed text-[#a8a8a8] lg:text-lg"
            {...enter(0.18)}
          >
            An epic faith-based academy with a custom dashboard, member app, powerful community,
            affiliate rewards, and giveaways — built so you max out every area of life as the Lord
            intended. By <strong className="text-white">Mike Gagat</strong> &{" "}
            <strong className="text-white">Daniel Ziedins</strong>.
          </motion.p>

          <motion.div className="mt-5" {...enter(0.22)}>
            <JoinPulse className="mx-auto lg:mx-0" />
          </motion.div>

          <motion.div
            className="mt-6 flex justify-center lg:justify-start"
            {...enter(0.26)}
          >
            <WaitlistCounter />
          </motion.div>

          <motion.div className="mt-6" {...enter(0.3)}>
            <LaunchCountdown />
          </motion.div>

          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center lg:justify-start"
            {...enter(0.38)}
          >
            <CtaButton href="#waitlist" className="group w-full sm:w-auto">
              Join The Waitlist
            </CtaButton>
            <CtaButton href="#launch" variant="outline" className="w-full sm:w-auto" icon={false}>
              What&apos;s Launching
            </CtaButton>
          </motion.div>

          <motion.div
            className="mt-8 w-full max-w-lg mx-auto lg:mx-0"
            {...enter(0.45)}
          >
            <WaitlistForm variant="hero" />
          </motion.div>

          <motion.div {...enter(0.52)}>
            <Link
              href="#video"
              className="mt-6 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#666] transition-colors hover:text-white"
            >
              Watch the vision <ArrowDown size={14} />
            </Link>
            <p className="mt-3 hidden text-[10px] uppercase tracking-[0.16em] text-[#444] lg:block">
              Tip: <kbd className="kbd">W</kbd> waitlist · <kbd className="kbd">⌘K</kbd> command palette
            </p>
          </motion.div>
        </div>

        <motion.div
          className="relative hidden lg:block"
          {...(reduced
            ? {}
            : {
                initial: { opacity: 0, x: 28 },
                animate: { opacity: 1, x: 0 },
                transition: { duration: 0.75, delay: 0.15 },
              })}
        >
          <ParallaxLayer strength={-28}>
            <div className="hero-visual-frame hero-phoenix-frame">
              <Image
                src="/images/phoenix-rise.png"
                alt="Phoenix rising — Reborn Academy transformation symbol"
                width={560}
                height={480}
                className="hero-visual-image hero-phoenix-crop"
                priority
                quality={80}
                sizes="(max-width: 1024px) 0px, 560px"
              />
              <div className="hero-visual-shine" />
              <div className="hero-visual-badge">
                <Image src="/images/icon.png" alt="Reborn Academy logo" width={32} height={32} />
                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#888]">
                    Coming soon
                  </p>
                  <p className="display text-2xl text-white">REBORN</p>
                </div>
              </div>
            </div>
          </ParallaxLayer>
        </motion.div>
      </div>

      <div className="hero-scroll-hint" aria-hidden="true">
        <span>Scroll</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
}
