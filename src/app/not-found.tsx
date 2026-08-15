import Link from "next/link";
import { SITE_NAME } from "@/lib/seo";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <p className="eyebrow">404</p>
      <h1 className="display mt-4 text-[clamp(40px,8vw,88px)] text-white">Lost in the wilderness.</h1>
      <p className="mt-4 max-w-md text-[#888]">
        This page doesn&apos;t exist. The waitlist does. Come back to {SITE_NAME} and lock your
        founding spot.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn btn-red">
          Return home
        </Link>
        <Link href="/#waitlist" className="btn btn-outline">
          Join the waitlist
        </Link>
      </div>
    </main>
  );
}
