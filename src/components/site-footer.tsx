import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#1a1a1a] bg-[#050505] py-12">
      <div className="page-width flex flex-col items-center gap-6 text-center">
        <Image src="/images/logo-horizontal.png" alt="Reborn Academy" width={180} height={48} className="h-12 w-auto" />
        <p className="max-w-lg text-sm text-[#666]">
          A faith-based development academy by Mike Gagat and Daniel Ziedins — part of the Thy Kingdom Network.
        </p>
        <div className="flex flex-wrap justify-center gap-6 text-xs font-bold uppercase tracking-wider text-[#888]">
          <Link href="https://thykingdom.net" target="_blank" rel="noopener" className="hover:text-white">
            Thy Kingdom Network
          </Link>
          <Link href="https://iamreborn.net" target="_blank" rel="noopener" className="hover:text-white">
            I AM REBORN
          </Link>
          <Link href="https://danielziedins.com" target="_blank" rel="noopener" className="hover:text-white">
            Daniel Ziedins
          </Link>
        </div>
        <p className="text-[11px] text-[#444]">
          © {new Date().getFullYear()} Reborn Academy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
