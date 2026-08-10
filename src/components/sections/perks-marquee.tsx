const perks = [
  "Member dashboard",
  "Custom Reborn app",
  "Faith · Fitness · Business",
  "Finances · Family",
  "Live community",
  "RB Insiders",
  "Affiliate rewards",
  "Launch giveaways",
  "Mike Gagat & Daniel Ziedins",
  "Thy Kingdom Network",
  "November 1, 2026",
  "Free waitlist",
];

export function PerksMarquee() {
  const items = [...perks, ...perks];

  return (
    <div className="perks-marquee" aria-hidden="true">
      <div className="perks-marquee-track">
        {items.map((perk, i) => (
          <span key={`${perk}-${i}`} className="perks-marquee-item">
            <span className="perks-marquee-dot" />
            {perk}
          </span>
        ))}
      </div>
    </div>
  );
}
