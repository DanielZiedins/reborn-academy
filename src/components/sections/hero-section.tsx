"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { WaitlistForm } from "@/components/waitlist-form";
import { Reveal } from "@/components/ui/reveal";
import { CtaButton } from "@/components/ui/cta-button";

export function HeroSection() {
  return (
    <section
      className="hero relative min-h-[100svh] overflow-hidden pt-[var(--nav-height)]"
      aria-labelledby="hero-heading"
    >
      <div className="hero-atmosphere" />
      <div className="absolute inset-0 grid-bg opacity-30" />
      <Image
        src="/images/hero-mountain.png"
        alt="Warrior standing on a mountain overlooking misty peaks — Reborn Academy transformation imagery"
        fill
        priority
        className="object-cover object-center opacity-20 mix-blend-luminosity"
        sizes="100vw"
      />
      <div className="hero-vignette absolute inset-0" />

      <div className="page-width relative z-10 grid min-h-[calc(100svh-var(--nav-height))] items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        <div className="text-center lg:text-left">
          <Reveal>
            <div className="status-pill mx-auto lg:mx-0">
              <span className="live-dot" />
              <span>Reborn — Reborn · Waitlist open</span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 id="hero-heading" className="display mt-8 text-[clamp(44px,8vw,88px)] text-white">
              <span className="mb-3 block text-[clamp(18px,3vw,28px)] tracking-[0.28em] text-[#cc1111]">
                REBORN ACADEMY
              </span>
              You don&apos;t need
              <br />
              more information.
              <br />
              <span className="text-gradient-red">You need a new environment.</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#a8a8a8] lg:text-lg">
              A faith-based transformation academy for ambitious young Christians — faith, fitness,
              business, finances, and family. Built by{" "}
              <strong className="text-white">Mike Gagat</strong> and{" "}
              <strong className="text-white">Daniel Ziedins</strong>.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center lg:justify-start">
              <CtaButton href="#waitlist" className="group w-full sm:w-auto">
                Enter The Academy
              </CtaButton>
              <CtaButton href="#academy" variant="outline" className="w-full sm:w-auto" icon={false}>
                See What&apos;s Inside
              </CtaButton>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-10 w-full max-w-lg mx-auto lg:mx-0">
              <WaitlistForm variant="hero" />
            </div>
          </Reveal>

          <Reveal delay={400}>
            <Link
              href="#video"
              className="mt-8 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#666] transition-colors hover:text-white"
            >
              Watch the vision <ArrowDown size={14} />
            </Link>
          </Reveal>
        </div>

        <Reveal direction="right" delay={120} className="relative hidden lg:block">
          <div className="hero-visual-frame">
            <Image
              src="/images/phoenix.png"
              alt="Reborn Academy phoenix rising — faith-based transformation academy branding"
              width={560}
              height={560}
              className="hero-visual-image"
              priority
            />
            <div className="hero-visual-badge">
              <Image src="/images/icon.png" alt="Reborn Academy logo" width={32} height={32} />
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#888]">Academy</p>
                <p className="display text-2xl text-white">REBORN</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="hero-scroll-hint" aria-hidden="true">
        <span>Scroll</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
}
