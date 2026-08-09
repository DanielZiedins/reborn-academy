# Reborn Academy

Faith-based personal growth community — waitlist landing page for the **Reborn — Reborn** relaunch.

Built by Mike Gagat and Daniel Ziedins.

## Stack

- Next.js 16 (App Router)
- Tailwind CSS v4
- Supabase (`THY KINGDOM NETWORK - MAIN`) — `reborn_academy_waitlist`
- Resend — welcome emails via `reborn-academy-email` edge function

## Local development

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon / publishable key |

Edge function secrets (`RESEND_API_KEY`) are configured in Supabase — not in this repo.

## Deploy

Connected to Vercel. Push to `main` triggers deployment.

## Waitlist flow

1. User submits email on landing page
2. `POST /api/waitlist` → Supabase `reborn-academy-email` edge function
3. Subscriber stored in `reborn_academy_waitlist`
4. Welcome email sent via Resend (`reborn@team.thykingdom.net`)
