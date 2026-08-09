"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#video", label: "Watch" },
  { href: "#pillars", label: "What You Get" },
  { href: "#founders", label: "Founders" },
  { href: "#waitlist", label: "Waitlist" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-[#1a1a1a] bg-[rgba(5,5,5,0.92)] backdrop-blur-md">
      <div className="page-width flex h-[72px] items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/icon.png" alt="Reborn Academy" width={36} height={36} />
          <span className="hidden text-xs font-extrabold uppercase tracking-[0.2em] text-white sm:block">
            Reborn Academy
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-xs font-bold uppercase tracking-wider text-[#999] transition-colors hover:text-white"
            >
              {l.label}
            </Link>
          ))}
          <Link href="#waitlist" className="btn btn-red !min-h-[40px] !px-5 !text-[11px]">
            Join Waitlist
          </Link>
        </nav>

        <button
          type="button"
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[#1a1a1a] bg-[#0a0a0a] px-5 py-4 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block py-3 text-sm font-bold uppercase tracking-wider text-[#ccc]"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
