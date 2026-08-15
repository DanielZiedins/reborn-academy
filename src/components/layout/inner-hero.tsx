import Link from "next/link";
import { SITE_PAGES } from "@/lib/pages";

export function InnerHero({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede: string;
}) {
  return (
    <header className="inner-hero">
      <div className="page-width">
        <nav className="inner-crumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span>{eyebrow}</span>
        </nav>
        <p className="eyebrow mt-8">{eyebrow}</p>
        <h1 className="display mt-4 text-[clamp(36px,6vw,72px)] text-white">{title}</h1>
        <p className="inner-lede aeo-summary-lead">{lede}</p>
      </div>
    </header>
  );
}

export function PageCta() {
  return (
    <div className="inner-cta">
      <p className="display text-4xl text-white">The re-launch is November 1, 2026.</p>
      <p className="mt-3 text-sm text-[#888]">Waitlist members get first access to the dashboard, app, community, and rewards.</p>
      <Link href="/waitlist" className="btn btn-red mt-8">
        Join the free waitlist
      </Link>
    </div>
  );
}

export function MorePages({ current }: { current: string }) {
  return (
    <nav className="more-pages" aria-label="More Reborn Academy pages">
      {SITE_PAGES.filter((p) => p.href !== current).map((p) => (
        <Link key={p.href} href={p.href} className="more-pages-link">
          {p.label}
        </Link>
      ))}
    </nav>
  );
}
