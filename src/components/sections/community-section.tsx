import Image from "next/image";
import { communityFeatures } from "@/lib/content";
import { Reveal } from "@/components/ui/reveal";

export function CommunitySection() {
  return (
    <section id="community" className="section section-dark overflow-hidden">
      <div className="page-width grid items-center gap-12 lg:grid-cols-2">
        <div>
          <Reveal>
            <span className="eyebrow">Community</span>
            <h2 className="display mt-4 text-[clamp(32px,5vw,52px)] text-white">
              Ambitious people surrounded by ambitious people
            </h2>
            <p className="mt-5 text-[#aaa] leading-relaxed">
              You weren&apos;t built to transform alone. Reborn Academy is a room full of believers who
              expect more from themselves — and from each other.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {communityFeatures.slice(0, 4).map((f, i) => (
              <Reveal key={f.title} delay={i * 50}>
                <div className="community-mini">
                  <f.icon size={18} className="text-[#b8962e]" />
                  <div>
                    <h3 className="text-xs font-extrabold uppercase tracking-wider text-white">{f.title}</h3>
                    <p className="mt-1 text-xs text-[#777]">{f.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal direction="right">
          <div className="relative">
            <Image
              src="/images/war-room.png"
              alt="Reborn Prayer War Room"
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
        </Reveal>
      </div>
    </section>
  );
}
