import Image from "next/image";
import { communityFeatures } from "@/lib/content";
import { FadeInUp, ParallaxLayer } from "@/components/ui/motion";

export function CommunitySection() {
  return (
    <section id="community" className="section section-dark overflow-hidden">
      <div className="page-width grid items-center gap-12 lg:grid-cols-2">
        <div>
          <FadeInUp>
            <span className="eyebrow">Community · Launching soon</span>
            <h2 className="display mt-4 text-[clamp(32px,5vw,52px)] text-white">
              Ambitious believers. One powerful room.
            </h2>
            <p className="mt-5 text-[#aaa] leading-relaxed">
              Like-minded believers maxing out faith, fitness, business, finances, and family —
              together. You weren&apos;t built to transform alone.
            </p>
          </FadeInUp>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {communityFeatures.slice(0, 4).map((f, i) => (
              <FadeInUp key={f.title} delay={i * 0.06}>
                <div className="community-mini">
                  <f.icon size={18} className="text-[#b8962e]" />
                  <div>
                    <h3 className="text-xs font-extrabold uppercase tracking-wider text-white">{f.title}</h3>
                    <p className="mt-1 text-xs text-[#777]">{f.desc}</p>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>

        <FadeInUp delay={0.15}>
          <ParallaxLayer strength={-30}>
            <div className="relative">
              <Image
                src="/images/war-room.png"
                alt="Reborn Prayer War Room — faith and community at Reborn Academy"
                width={600}
                height={500}
                className="w-full rounded-sm border border-[#2a2a2a]"
              />
              <div className="community-quote">
                <p className="text-sm italic text-[#e7d9ae]">
                  &ldquo;My sheep hear my voice, and I know them, and they follow me.&rdquo;
                </p>
                <cite className="mt-2 block text-[10px] font-bold uppercase tracking-widest text-[#b8962e]">
                  John 10:27
                </cite>
              </div>
            </div>
          </ParallaxLayer>
        </FadeInUp>
      </div>
    </section>
  );
}
