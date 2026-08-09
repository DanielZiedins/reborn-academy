import Image from "next/image";
import { Sparkles } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

export function InsidersSection() {
  return (
    <section className="section overflow-hidden">
      <div className="page-width grid items-center gap-10 lg:grid-cols-2">
        <Reveal direction="left">
          <div className="relative">
            <Image
              src="/images/insiders.png"
              alt="RB Insiders"
              width={600}
              height={400}
              className="w-full rounded-sm border border-[#2a2a2a]"
            />
          </div>
        </Reveal>
        <div>
          <Reveal>
            <span className="eyebrow">Premium</span>
            <h2 className="display mt-4 text-[clamp(32px,5vw,52px)] text-white">RB Insiders</h2>
            <p className="mt-5 text-[#aaa] leading-relaxed">
              The inner circle. Deeper teachings, exclusive calls, highest community access — for
              believers serious about transformation, not just information.
            </p>
            <div className="mt-6 flex items-center gap-3 text-sm text-[#888]">
              <Sparkles size={16} className="text-[#b8962e]" />
              <span>Details at launch — waitlist members get first access.</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
