/** Official Reborn Academy re-launch — midnight Eastern (Hamilton, ON) */
export const LAUNCH_DATE = new Date("2026-11-01T00:00:00-04:00");

export const LAUNCH_DATE_LABEL = "November 1, 2026";

/** Whole calendar days from today in Hamilton, Ontario until November 1, 2026. */
export function calendarDaysUntilLaunch(from = new Date()) {
  const today = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Toronto",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(from);
  const diff = Date.parse("2026-11-01T00:00:00Z") - Date.parse(`${today}T00:00:00Z`);
  return Math.max(0, Math.round(diff / 86_400_000));
}

export const launchFeatures = [
  {
    id: "dashboard",
    title: "Epic Member Dashboard",
    desc: "A custom-built academy dashboard — courses, progress, challenges, and your entire Reborn journey in one place.",
    tag: "Coming soon",
  },
  {
    id: "app",
    title: "Custom Reborn App",
    desc: "Train, learn, connect, and execute on the go. The full academy experience in your pocket.",
    tag: "Coming soon",
  },
  {
    id: "community",
    title: "Powerful Community",
    desc: "Like-minded believers maxing out faith, fitness, business, finances, and family — together, not alone.",
    tag: "Launch day",
  },
  {
    id: "affiliate",
    title: "Epic Affiliate Program",
    desc: "Built-in referral rewards for members who spread the mission. Share Reborn. Get rewarded.",
    tag: "Coming soon",
  },
  {
    id: "giveaways",
    title: "Giveaways & Rewards",
    desc: "Launch giveaways, member rewards, and surprises designed to celebrate momentum and faithfulness.",
    tag: "Coming soon",
  },
  {
    id: "walkthrough",
    title: "We Walk With You",
    desc: "Mike and Daniel built this to walk the journey with you — so you start living to the full as the Lord intended.",
    tag: "Our promise",
  },
];
