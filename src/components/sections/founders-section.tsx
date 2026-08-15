import { Church, TrendingUp } from "lucide-react";
import Link from "next/link";
import { FadeInUp } from "@/components/ui/motion";
import Image from "next/image";

export function FoundersSection() {
  return (
    <section id="founders" className="section section-dark">
      <div className="page-width">
        <FadeInUp>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">About</span>
            <h2 className="display mt-4 text-[clamp(32px,5vw,56px)] text-white">
              Mike Gagat &amp; Daniel Ziedins
            </h2>
            <p className="mt-4 text-[#999]">
              We&apos;re building this to walk the journey with you — not hand you videos and disappear.
              Entrepreneurs, leaders, and believers committed to the Kingdom.{" "}
              <Link href="/about" className="text-[#b8962e] hover:text-white">
                Full founder story →
              </Link>
            </p>
          </div>
        </FadeInUp>

        <div className="mt-14 grid items-start gap-10 lg:grid-cols-12">
          <FadeInUp className="lg:col-span-7">
            <Image
              src="/images/founders-hero.png"
              alt="Mike Gagat and Daniel Ziedins — founders of Reborn Academy"
              width={700}
              height={500}
              className="w-full rounded-sm border border-[#2a2a2a]"
              sizes="(max-width: 1024px) 100vw, 700px"
              quality={78}
            />
          </FadeInUp>

          <div className="lg:col-span-5 space-y-5">
            <FadeInUp delay={0.1}>
              <div className="founder-card">
                <div className="flex items-center gap-3">
                  <Church size={20} className="text-[#cc1111]" />
                  <h3 className="text-sm font-extrabold uppercase tracking-wider text-white">Mike Gagat</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[#888]">
                  Faith-driven entrepreneur and fitness leader. Building believers strong in spirit,
                  mind, and body — ready for whatever God assigns.
                </p>
              </div>
            </FadeInUp>
            <FadeInUp delay={0.15}>
              <div className="founder-card">
                <div className="flex items-center gap-3">
                  <TrendingUp size={20} className="text-[#b8962e]" />
                  <h3 className="text-sm font-extrabold uppercase tracking-wider text-white">
                    Daniel Ziedins
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[#888]">
                  Kingdom builder and network architect behind Thy Kingdom Network — connecting
                  initiatives that put Jesus at the center of culture, business, and community.
                </p>
              </div>
            </FadeInUp>
          </div>
        </div>
      </div>
    </section>
  );
}
