import { CalendarPlus } from "lucide-react";
import { LAUNCH_DATE_LABEL } from "@/lib/launch";
import { SITE_URL } from "@/lib/seo";

const GOOGLE_CAL =
  "https://calendar.google.com/calendar/render?action=TEMPLATE" +
  "&text=" +
  encodeURIComponent("Reborn Academy Official Re-Launch") +
  "&dates=20261101T040000Z/20261102T040000Z" +
  "&details=" +
  encodeURIComponent(
    "Official re-launch of Reborn Academy — member dashboard, custom app, community, affiliate program, and giveaways. Join the waitlist: " +
      SITE_URL,
  ) +
  "&location=" +
  encodeURIComponent(SITE_URL);

type Props = {
  className?: string;
  compact?: boolean;
};

export function AddToCalendar({ className = "", compact = false }: Props) {
  return (
    <div className={`add-to-calendar ${className}`}>
      {!compact && (
        <p className="add-to-calendar-label">
          Lock {LAUNCH_DATE_LABEL} on your calendar
        </p>
      )}
      <div className="add-to-calendar-actions">
        <a href="/api/calendar" className="add-to-calendar-btn" download="reborn-academy-launch.ics">
          <CalendarPlus size={14} aria-hidden="true" />
          Apple / Outlook (.ics)
        </a>
        <a
          href={GOOGLE_CAL}
          target="_blank"
          rel="noopener noreferrer"
          className="add-to-calendar-btn add-to-calendar-btn-alt"
        >
          <CalendarPlus size={14} aria-hidden="true" />
          Google Calendar
        </a>
      </div>
    </div>
  );
}
