import Link from "next/link";
import { AEO_BULLETS, AEO_SUMMARY_PARAGRAPH } from "@/lib/seo";
import { LAUNCH_DATE_LABEL } from "@/lib/launch";
import { Reveal } from "@/components/ui/reveal";

export function AeoSummarySection() {
  return (
    <section
      id="about"
      className="section section-dark"
      aria-labelledby="aeo-summary-heading"
    >
      <div className="page-width">
        <Reveal>
          <span className="eyebrow">What is Reborn Academy?</span>
          <h2
            id="aeo-summary-heading"
            className="display mt-4 text-[clamp(28px,4.5vw,48px)] text-white"
          >
            Faith-based academy for ambitious believers
          </h2>
        </Reveal>

        <div className="aeo-summary-grid mt-12">
          <Reveal delay={60}>
            <article className="aeo-summary-card">
              <p className="aeo-summary-lead text-lg font-semibold text-white leading-relaxed">
                Reborn Academy is a faith-based transformation academy and membership community
                re-launching {LAUNCH_DATE_LABEL}.
              </p>
              <p className="aeo-summary-text mt-4 text-[#999] leading-relaxed">
                {AEO_SUMMARY_PARAGRAPH}
              </p>
              <p className="mt-4 text-sm text-[#777]">
                Founded by{" "}
                <strong className="text-[#ccc]">Mike Gagat</strong> and{" "}
                <strong className="text-[#ccc]">Daniel Ziedins</strong>. Part of Thy Kingdom
                Network.{" "}
                <Link href="/what-is-reborn-academy" className="text-[#b8962e] hover:text-white">
                  Read the full guide →
                </Link>
              </p>
            </article>
          </Reveal>

          <Reveal delay={120}>
            <aside className="aeo-summary-aside">
              <h3 className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#b8962e]">
                At launch you get
              </h3>
              <ul className="aeo-summary-list mt-5">
                {AEO_BULLETS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link href="/waitlist" className="btn btn-red mt-8 w-full">
                Join free waitlist
              </Link>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
