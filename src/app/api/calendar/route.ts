import { SITE_URL } from "@/lib/seo";
import { LAUNCH_DATE_LABEL } from "@/lib/launch";

export async function GET() {
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Reborn Academy//Launch//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    "UID:reborn-academy-launch-2026-11-01@reborn-academy.com",
    "DTSTAMP:20260101T000000Z",
    "DTSTART:20261101T040000Z",
    "DTEND:20261102T040000Z",
    "SUMMARY:Reborn Academy Official Re-Launch",
    `DESCRIPTION:Official re-launch of Reborn Academy (${LAUNCH_DATE_LABEL}). Member dashboard\\, custom app\\, community\\, affiliate program\\, and giveaways. Waitlist: ${SITE_URL}`,
    `LOCATION:${SITE_URL}`,
    `URL:${SITE_URL}`,
    "STATUS:CONFIRMED",
    "SEQUENCE:0",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  return new Response(ics, {
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": 'attachment; filename="reborn-academy-launch.ics"',
      "Cache-Control": "public, max-age=86400",
    },
  });
}
