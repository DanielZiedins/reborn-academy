import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  email: z.string().email().max(200),
  full_name: z.string().max(120).optional(),
  source: z.string().max(80).optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ ok: false, error: "Please enter a valid email address." }, { status: 400 });
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !anonKey) {
      return NextResponse.json({ ok: false, error: "Server configuration error." }, { status: 500 });
    }

    const res = await fetch(`${supabaseUrl}/functions/v1/reborn-academy-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${anonKey}`,
      },
      body: JSON.stringify({
        mode: "subscribe",
        email: parsed.data.email.toLowerCase().trim(),
        full_name: parsed.data.full_name?.trim() || null,
        source: parsed.data.source ?? "reborn-academy.com",
      }),
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok || !data.ok) {
      return NextResponse.json(
        { ok: false, error: data.error ?? "Could not join waitlist. Please try again." },
        { status: res.status >= 400 ? res.status : 500 },
      );
    }

    return NextResponse.json({ ok: true, subscribed: true });
  } catch (err) {
    console.error("[waitlist]", err);
    return NextResponse.json({ ok: false, error: "Server error." }, { status: 500 });
  }
}
