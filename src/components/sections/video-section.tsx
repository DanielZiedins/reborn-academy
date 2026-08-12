import { CtaButton } from "@/components/ui/cta-button";
import { Reveal } from "@/components/ui/reveal";
import { VideoFacade } from "@/components/ui/video-facade";

export function VideoSection() {
  return (
    <section id="video" className="section relative overflow-hidden">
      <div className="absolute inset-0 gold-glow" />
      <div className="page-width relative z-10">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Start here</span>
            <h2 className="display mt-3 text-[clamp(32px,5vw,56px)] text-white">
              Watch the Reborn vision
            </h2>
            <p className="mt-4 text-[#999]">
              Before you join anything — see what we&apos;re building. Faith at the center. Excellence in
              every pillar.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mx-auto mt-12 max-w-4xl video-frame overflow-hidden rounded-sm">
            <VideoFacade />
          </div>
        </Reveal>

        <Reveal delay={180}>
          <div className="mt-10 flex justify-center">
            <CtaButton href="#waitlist" className="group">
              Enter The Academy
            </CtaButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
