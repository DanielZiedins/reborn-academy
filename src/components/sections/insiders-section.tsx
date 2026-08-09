import Image from "next/image";
import { Sparkles } from "lucide-react";
import { FadeInUp } from "@/components/ui/motion";
import { LAUNCH_DATE_LABEL } from "@/lib/launch";

export function InsidersSection() {
  return (
    <section className="section overflow-hidden">
      <div className="page-width grid items-center gap-10 lg:grid-cols-2">
        <FadeInUp>
          <div className="relative coming-soon-overlay-wrap">
            <span className="coming-soon-ribbon">RB Insiders · Soon</span>
            <Image
              src="/images/insiders.png"
              alt="RB Insiders — premium Reborn Academy membership tier"
              width={600}
              height={400}
              className="w-full rounded-sm border border-[#2a2a2a]"
            />
          </div>
        </FadeInUp>
        <div>
          <FadeInUp delay={0.1}>
            <span className="eyebrow">Premium · Coming soon</span>
            <h2 className="display mt-4 text-[clamp(32px,5vw,52px)] text-white">RB Insiders</h2>
            <p className="mt-5 text-[#aaa] leading-relaxed">
              The inner circle — deepest teachings, exclusive calls, highest community access. For
              believers serious about transformation, not just information.
            </p>
            <div className="mt-6 flex items-center gap-3 text-sm text-[#888]">
              <Sparkles size={16} className="text-[#b8962e]" />
              <span>Details at launch ({LAUNCH_DATE_LABEL}) — waitlist gets first access.</span>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
