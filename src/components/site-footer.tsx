import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/lib/content";
import { CtaButton } from "@/components/ui/cta-button";

export function SiteFooter() {
  return (
    <footer>
      <div className="site-footer-cta">
        <div className="page-width">
          <h2 className="display text-[clamp(36px,6vw,64px)] text-white">Ready to be Reborn?</h2>
          <p className="mt-4 max-w-md mx-auto text-sm text-[#888]">
            Join the waitlist. Be first when the academy opens.
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
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
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
            <Link href="https://thykingdom.net" target="_blank" rel="noopener" className="hover:text-white">
              Thy Kingdom
            </Link>
            <Link href="https://iamreborn.net" target="_blank" rel="noopener" className="hover:text-white">
              I AM REBORN
            </Link>
            <Link href="https://danielziedins.com" target="_blank" rel="noopener" className="hover:text-white">
              Daniel Ziedins
            </Link>
          </div>
        </div>

        <p className="page-width mt-8 text-center text-[10px] text-[#444]">
          © {new Date().getFullYear()} Reborn Academy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
