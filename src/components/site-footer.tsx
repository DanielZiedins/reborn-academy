import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/lib/content";
import { LAUNCH_DATE_LABEL } from "@/lib/launch";
import { CtaButton } from "@/components/ui/cta-button";

export function SiteFooter() {
  return (
    <footer>
      <div className="site-footer-cta">
        <div className="page-width">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b8962e]">
            Re-launch {LAUNCH_DATE_LABEL}
          </p>
          <h2 className="display mt-3 text-[clamp(36px,6vw,64px)] text-white">Ready to be Reborn?</h2>
          <p className="mt-4 max-w-md mx-auto text-sm text-[#888]">
            Join the waitlist. Be first when the dashboard, app, community, and affiliate program open.
          </p>
          <div className="mt-8 flex justify-center">
            <CtaButton href="#waitlist" className="group">Enter The Academy</CtaButton>
          </div>
        </div>
      </div>

      <div className="site-footer-base">
        <div className="page-width flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="text-center md:text-left">
            <Image
              src="/images/logo-horizontal.png"
              alt="Reborn Academy"
              width={160}
              height={44}
              className="h-10 w-auto mx-auto md:mx-0"
            />
            <p className="mt-3 max-w-sm text-xs text-[#666]">
              Faith-based development academy by Mike Gagat and Daniel Ziedins — Thy Kingdom Network.
            </p>
            <p className="mt-2 text-xs text-[#555]">
              <a href="mailto:hello@thykingdom.net" className="hover:text-white transition-colors">
                hello@thykingdom.net
              </a>
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6" aria-label="Footer navigation">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[10px] font-bold uppercase tracking-wider text-[#888] hover:text-white transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-wrap justify-center gap-5 text-[10px] font-bold uppercase tracking-wider text-[#666]">
            <Link href="https://thykingdom.net" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              Thy Kingdom
            </Link>
            <Link href="https://iamreborn.net" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              I AM REBORN
            </Link>
            <Link href="https://danielziedins.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              Daniel Ziedins
            </Link>
          </div>
        </div>

        <div className="page-width mt-8 flex flex-wrap justify-center gap-4 text-[10px] text-[#444]">
          <Link href="/llms.txt" className="hover:text-[#888]">llms.txt</Link>
          <span aria-hidden="true">·</span>
          <Link href="/ai.txt" className="hover:text-[#888]">ai.txt</Link>
          <span aria-hidden="true">·</span>
          <Link href="/humans.txt" className="hover:text-[#888]">humans.txt</Link>
          <span aria-hidden="true">·</span>
          <Link href="/sitemap.xml" className="hover:text-[#888]">Sitemap</Link>
        </div>

        <p className="page-width mt-6 text-center text-[10px] text-[#444]">
          © {new Date().getFullYear()} Reborn Academy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
