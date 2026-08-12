"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { WaitlistForm } from "@/components/waitlist-form";
import { CtaButton } from "@/components/ui/cta-button";
import { LaunchCountdown } from "@/components/ui/launch-countdown";
import { WaitlistCounter } from "@/components/ui/waitlist-counter";
import { FloatingOrb, ParallaxLayer } from "@/components/ui/motion";

export function HeroSection() {
  return (
    <section
      className="hero relative min-h-[100svh] overflow-hidden pt-[var(--nav-height)]"
      aria-labelledby="hero-heading"
    >
      <div className="hero-atmosphere" />
      <FloatingOrb className="orb-red orb-hero-1" />
      <FloatingOrb className="orb-gold orb-hero-2" />
      <div className="absolute inset-0 grid-bg opacity-30" />

      <ParallaxLayer className="absolute inset-0" strength={120}>
        <Image
          src="/images/hero-mountain.png"
          alt="Warrior on a mountain peak — Reborn Academy faith-based transformation"
          fill
          priority
          className="object-cover object-center opacity-25 mix-blend-luminosity scale-110"
          sizes="100vw"
        />
      </ParallaxLayer>

      <div className="hero-vignette absolute inset-0" />

      <div className="page-width relative z-10 grid min-h-[calc(100svh-var(--nav-height))] items-center gap-12 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="status-pill mx-auto lg:mx-0">
              <span className="live-dot" />
              <span>Coming soon · Waitlist open now</span>
            </div>
          </motion.div>

          <motion.h1
            id="hero-heading"
            className="display mt-6 text-[clamp(40px,7.5vw,84px)] text-white"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
          >
            An epic faith-based academy with a custom dashboard, member app, powerful community,
            affiliate rewards, and giveaways — built so you max out every area of life as the Lord
            intended. By <strong className="text-white">Mike Gagat</strong> &{" "}
            <strong className="text-white">Daniel Ziedins</strong>.
          </motion.p>

          <motion.div
            className="mt-6 flex justify-center lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <WaitlistCounter />
          </motion.div>

          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            <LaunchCountdown />
          </motion.div>

          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
          >
            <WaitlistForm variant="hero" />
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }}>
            <Link
              href="#video"
              className="mt-6 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#666] transition-colors hover:text-white"
            >
              Watch the vision <ArrowDown size={14} />
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="relative hidden lg:block"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <ParallaxLayer strength={-40}>
            <div className="hero-visual-frame hero-phoenix-frame">
              <Image
                src="/images/phoenix-rise.png"
                alt="Phoenix rising — Reborn Academy transformation symbol"
                width={560}
                height={480}
                className="hero-visual-image hero-phoenix-crop"
                priority
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
