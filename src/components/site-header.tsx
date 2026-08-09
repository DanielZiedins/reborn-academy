"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/content";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`site-header ${scrolled ? "site-header-scrolled" : "site-header-transparent"}`}
    >
      <div className="page-width flex h-full items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/icon.png" alt="Reborn Academy" width={36} height={36} />
          <span className="hidden text-[11px] font-extrabold uppercase tracking-[0.22em] text-white sm:block">
            Reborn
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="nav-link">
              {l.label}
            </Link>
          ))}
          <Link href="#waitlist" className="btn btn-red !min-h-[42px] !px-5 !text-[10px]">
            Enter The Academy
          </Link>
        </nav>

        <button
          type="button"
          className="lg:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="mobile-nav lg:hidden">
          <div className="mobile-nav-backdrop" onClick={() => setOpen(false)} />
          <div className="mobile-nav-panel">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="mobile-nav-link"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="#waitlist"
              className="btn btn-red mt-4 w-full"
              onClick={() => setOpen(false)}
            >
              Enter The Academy
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
