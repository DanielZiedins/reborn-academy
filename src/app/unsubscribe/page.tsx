import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Unsubscribed",
  description: `Unsubscribe from ${SITE_NAME} waitlist emails.`,
  robots: { index: false, follow: false },
  alternates: { canonical: `${SITE_URL}/unsubscribe` },
};

type Props = {
  searchParams: Promise<{ token?: string }>;
};

async function unsubscribe(token: string) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!supabaseUrl || !anonKey) return false;

  const res = await fetch(`${supabaseUrl}/functions/v1/reborn-academy-email`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${anonKey}`,
    },
    body: JSON.stringify({ mode: "unsubscribe", token }),
    cache: "no-store",
  });

  const data = await res.json().catch(() => ({}));
  return res.ok && data.ok;
}

export default async function UnsubscribePage({ searchParams }: Props) {
  const { token } = await searchParams;

  if (!token) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#050505] px-6 text-center">
        <div>
          <h1 className="text-2xl font-extrabold text-white">Invalid link</h1>
          <p className="mt-3 text-[#888]">This unsubscribe link is missing a token.</p>
          <Link href="/" className="mt-6 inline-block text-[#b8962e] underline">
            Return to {SITE_NAME}
          </Link>
        </div>
      </main>
    );
  }

  const ok = await unsubscribe(token);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#050505] px-6 text-center">
      <div>
        <h1 className="text-2xl font-extrabold text-[#cc1111]">
          {ok ? "Unsubscribed" : "Something went wrong"}
        </h1>
        <p className="mt-3 text-[#888]">
          {ok
            ? `You've been removed from the ${SITE_NAME} waitlist.`
            : "We couldn't process your request. Please email hello@thykingdom.net"}
        </p>
        <Link href="/" className="mt-6 inline-block text-[#b8962e] underline">
          Return to reborn-academy.com
        </Link>
      </div>
    </main>
  );
}
