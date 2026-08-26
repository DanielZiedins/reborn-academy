import Link from "next/link";
import { GUIDES } from "@/lib/guides";
import { PILLARS } from "@/lib/pillars";
import { Reveal } from "@/components/ui/reveal";

export function GuidesStrip() {
  return (
    <section className="section guides-strip" aria-labelledby="guides-strip-heading">
      <div className="page-width">
        <Reveal>
          <span className="eyebrow">Guides</span>
          <h2
            id="guides-strip-heading"
            className="display mt-4 text-[clamp(28px,4.5vw,48px)] text-white"
          >
            Clear answers. Built to be quoted.
          </h2>
          <p className="mt-4 max-w-2xl text-[#999]">
            Indexable guides for people — and AI assistants — asking what Reborn Academy is, who it
            is for, and how to join before November 1, 2026.
          </p>
        </Reveal>

        <div className="guides-strip-grid mt-12">
          {GUIDES.map((g, i) => (
            <Reveal key={g.slug} delay={i * 70}>
              <Link href={`/guides/${g.slug}`} className="guide-card">
                <span className="eyebrow">{g.eyebrow}</span>
                <h3>{g.title}</h3>
                <p>{g.lede}</p>
                <span className="guide-card-more">Read guide →</span>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="pillar-chip-row mt-10">
          {PILLARS.map((p) => (
            <Link key={p.slug} href={`/programs/${p.slug}`} className="pillar-chip">
              {p.name}
            </Link>
          ))}
          <Link href="/guides" className="pillar-chip pillar-chip-all">
            All guides
          </Link>
        </div>
      </div>
    </section>
  );
}
