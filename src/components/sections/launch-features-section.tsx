import { launchFeatures, LAUNCH_DATE_LABEL } from "@/lib/launch";
import { FadeInUp } from "@/components/ui/motion";
import { SpotlightCard } from "@/components/ui/spotlight-card";

export function LaunchFeaturesSection() {
  return (
    <section id="launch" className="section section-dark overflow-hidden">
      <div className="launch-aurora" />
      <div className="page-width relative z-10">
        <FadeInUp>
          <span className="eyebrow">Coming soon</span>
          <h2 className="display mt-4 text-[clamp(32px,5vw,56px)] text-white">
            Everything launching {LAUNCH_DATE_LABEL}
          </h2>
          <p className="mt-4 max-w-2xl text-[#999]">
            This isn&apos;t a course dump. It&apos;s a full ecosystem — dashboard, app, community,
            affiliate program, giveaways, and a team that walks the journey with you so you can live
            to the full as the Lord intended.
          </p>
        </FadeInUp>

        <FadeInUp delay={0.1} className="mt-10">
          <p className="text-center text-sm font-bold uppercase tracking-[0.2em] text-[#b8962e]">
            Mark your calendar — November 1, 2026
          </p>
        </FadeInUp>

        <div className="launch-features-grid mt-14">
          {launchFeatures.map((f, i) => (
            <FadeInUp key={f.id} delay={0.05 * i}>
              <SpotlightCard className="launch-feature-card">
                <span className="launch-feature-tag">{f.tag}</span>
                <h3 className="mt-4 text-sm font-extrabold uppercase tracking-wider text-white">
                  {f.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#888]">{f.desc}</p>
              </SpotlightCard>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
