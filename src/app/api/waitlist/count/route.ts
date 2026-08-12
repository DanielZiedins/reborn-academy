import { NextResponse } from "next/server";

export const revalidate = 60;

export async function GET() {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !anonKey) {
      return NextResponse.json({ ok: true, count: 0 });
    }

    const res = await fetch(`${supabaseUrl}/rest/v1/rpc/reborn_academy_waitlist_count`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: anonKey,
        Authorization: `Bearer ${anonKey}`,
      },
      body: "{}",
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      return NextResponse.json({ ok: true, count: 0 });
    }

    const count = await res.json();
    const n = typeof count === "number" ? count : Number(count) || 0;

    return NextResponse.json(
      { ok: true, count: n },
      {
        headers: {
          "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
        },
      },
    );
  } catch {
    return NextResponse.json({ ok: true, count: 0 });
  }
}
