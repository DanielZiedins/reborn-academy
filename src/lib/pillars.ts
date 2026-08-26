export type Pillar = {
  slug: string;
  name: string;
  outcome: string;
  summary: string;
  description: string;
  keywords: string[];
  sections: { id: string; heading: string; paragraphs: string[] }[];
};

export const PILLARS: Pillar[] = [
  {
    slug: "faith",
    name: "Faith",
    outcome: "Rooted identity in Christ",
    summary: "Scripture, prayer, spiritual warfare, and daily obedience rooted in Christ.",
    description:
      "Reborn Academy’s Faith pillar is the foundation of the academy: Scripture, prayer, spiritual warfare, and daily obedience so marketplace skill never outruns character. Built for ambitious Christians who want a living faith, not a branded one.",
    keywords: [
      "christian faith academy",
      "spiritual growth academy",
      "scripture based personal development",
      "christian discipleship community",
      "faith first academy",
    ],
    sections: [
      {
        id: "why-faith-first",
        heading: "Why faith is the first pillar",
        paragraphs: [
          "Most personal-development systems treat faith as optional seasoning. Reborn Academy treats it as the load-bearing wall. If identity is not rooted in Christ, fitness becomes vanity, business becomes idolatry, money becomes a master, and family becomes a performance.",
          "The Faith pillar exists so every other area of the academy stays submitted. Members do not add Jesus to a self-help stack. They rebuild the stack around Him — Scripture, prayer, obedience, and a community that will not let you drift into a private, unaccountable Christianity.",
        ],
      },
      {
        id: "what-you-practice",
        heading: "What you actually practice",
        paragraphs: [
          "This is not a theology lecture series you binge and forget. The Faith track is built around rhythms you can keep: daily Scripture that forms the mind, prayer that is honest instead of theatrical, and obedience in the small assignments where character is actually forged.",
          "Spiritual warfare is treated as reality, not metaphor. Ambition without discernment is how gifted people shipwreck. Members learn to recognize accusation, distraction, and compromise — then respond with the Word, community, and action instead of isolation.",
        ],
      },
      {
        id: "how-it-connects",
        heading: "How it connects to the rest of Reborn",
        paragraphs: [
          "Faith is not siloed from the dashboard, the app, or the live rooms. Assignments, check-ins, and conversations assume Christ is at the center of fitness, business, finances, and family. That is the difference between a Christian aesthetic and a Christian academy.",
          "The official re-launch is November 1, 2026. Join the free waitlist to be first when the Faith curriculum, member dashboard, and Reborn app open.",
        ],
      },
    ],
  },
  {
    slug: "fitness",
    name: "Fitness",
    outcome: "A body built for the mission",
    summary: "Training, nutrition, and discipline — stewarding the body for God's mission.",
    description:
      "Reborn Academy’s Fitness pillar treats the body as stewardship for mission: training, nutrition, recovery, and discipline for ambitious Christians who want strength they can actually use.",
    keywords: [
      "christian fitness academy",
      "faith and fitness community",
      "christian workout community",
      "stewardship of the body",
      "faith based fitness training",
    ],
    sections: [
      {
        id: "stewardship-not-vanity",
        heading: "Stewardship, not vanity",
        paragraphs: [
          "The body is not a billboard and not an afterthought. Scripture calls it a temple. Reborn Academy’s Fitness pillar exists so members stop treating health as a New Year’s hobby and start treating it as readiness — strength, energy, and discipline for whatever God assigns.",
          "Mike Gagat’s leadership in this area is practical: training you will actually do, nutrition you can keep, recovery you respect. No crash programs. No shame cycles. Standards with a reason.",
        ],
      },
      {
        id: "what-training-looks-like",
        heading: "What training looks like inside the academy",
        paragraphs: [
          "Members get structure, not a dump of random workouts. The point is consistency that compounds: sessions you can execute around work and family, progress you can track in the dashboard and on the Reborn app, and a community that notices when you disappear.",
          "Fitness here is never separated from faith. Discipline in the gym is practice for discipline everywhere else. The same person who skips training for weeks usually skips prayer, budget, and hard conversations too. The academy treats that as one problem, not five.",
        ],
      },
      {
        id: "who-it-is-for",
        heading: "Who the Fitness pillar is for",
        paragraphs: [
          "It is for believers who want to be dangerous in the best sense — capable, durable, and clear-headed. It is not for people chasing a look without character, or for anyone who wants a faith-branded excuse to stay soft.",
          "Full programming launches November 1, 2026. Waitlist members get first access to the Fitness track alongside the rest of the academy.",
        ],
      },
    ],
  },
  {
    slug: "business",
    name: "Business",
    outcome: "Kingdom marketplace skill",
    summary: "Kingdom business skills: investing, crypto, marketing, e-commerce, real estate.",
    description:
      "Reborn Academy’s Business pillar teaches Kingdom marketplace skill from practitioners: investing, cryptocurrency, marketing, e-commerce, social media, and real estate — so ambitious Christians can execute without compromising faith.",
    keywords: [
      "kingdom business training",
      "christian entrepreneurship academy",
      "faith based business course",
      "christian marketing training",
      "christian real estate investing",
    ],
    sections: [
      {
        id: "practitioners-not-spectators",
        heading: "Practitioners, not spectators",
        paragraphs: [
          "Christian business content often splits into two failures: secular tactics with a verse taped on, or spiritual language with no craft. Reborn Academy’s Business pillar is built by people who actually operate — investing, marketing, e-commerce, social, real estate, and more — and who refuse to leave Jesus at the door of the marketplace.",
          "Members learn skills they can run this week: offers, audiences, systems, and judgment. Theory without execution is entertainment. The academy is not entertainment.",
        ],
      },
      {
        id: "tracks-inside-business",
        heading: "Tracks inside Business",
        paragraphs: [
          "Business at Reborn is not a single course. It includes investing, cryptocurrency, marketing, e-commerce, social media, and real estate — with sales, branding, automation, and leadership woven through. The mix is intentional: one believer may be building a brand, another acquiring property, another learning to allocate capital without panic.",
          "Integrity is not a module at the end. How you sell, how you hire, how you talk about money, and how you handle slow seasons are all faith questions. The Business pillar treats them that way.",
        ],
      },
      {
        id: "why-community-matters",
        heading: "Why community matters in the marketplace",
        paragraphs: [
          "Isolated entrepreneurs make isolated mistakes. Live rooms, strategy calls, and a high-standard community exist so you are not inventing ethics and tactics alone at 1 a.m. You get pushback, ideas, and people who will not applaud a shortcut that costs your soul.",
          "The Business curriculum opens with the November 1, 2026 re-launch. The waitlist is how you get first access.",
        ],
      },
    ],
  },
  {
    slug: "finances",
    name: "Finances",
    outcome: "Wealth with wisdom",
    summary: "Wealth stewardship, budgeting, investing, and generational impact.",
    description:
      "Reborn Academy’s Finances pillar covers biblical wealth stewardship: budgeting, investing, debt freedom, and generational impact so money becomes a tool for the Kingdom — not an idol.",
    keywords: [
      "christian finances course",
      "biblical wealth stewardship",
      "faith based investing education",
      "christian money management",
      "kingdom finances academy",
    ],
    sections: [
      {
        id: "money-as-stewardship",
        heading: "Money as stewardship",
        paragraphs: [
          "Anxiety about money and worship of money are two sides of the same unbelief. The Finances pillar exists so members can look at cash flow, debt, giving, and investing without either panic or greed. Scripture is not used to baptize hustle culture. It is used to tell the truth about ownership: it is all His.",
          "Practical skill still matters. Budgets that match real life. Investing without gambling your peace. Debt paydown that is a plan, not a personality. Generational impact that includes family, church, and the work of your hands.",
        ],
      },
      {
        id: "what-you-will-build",
        heading: "What you will build",
        paragraphs: [
          "Members work toward clarity first: what comes in, what goes out, what you owe, and what you are actually building. From there the academy adds investing education, wealth frameworks, and the habits that keep a household from leaking.",
          "This sits next to Business on purpose. Skill that makes money without wisdom to steward it just upgrades the prison. Finances is where ambition gets a spine.",
        ],
      },
      {
        id: "launch",
        heading: "When it launches",
        paragraphs: [
          "Full Finances programming is part of the official Reborn Academy re-launch on November 1, 2026. Join the free waitlist for first access to the dashboard, app, and this track.",
        ],
      },
    ],
  },
  {
    slug: "family",
    name: "Family",
    outcome: "Legacy on purpose",
    summary: "Marriage, parenting, and household leadership on biblical foundations.",
    description:
      "Reborn Academy’s Family pillar covers marriage, parenting, and household leadership on biblical foundations so ambitious Christians do not win in the marketplace and lose at home.",
    keywords: [
      "biblical family leadership",
      "christian marriage academy",
      "faith based parenting",
      "christian household leadership",
      "kingdom family community",
    ],
    sections: [
      {
        id: "home-first",
        heading: "Home first, then multiplied",
        paragraphs: [
          "A booming brand with a collapsing household is not a win. The Family pillar exists because Reborn Academy will not disciple people into that trade. Marriage, parenting, and household leadership are treated as the first marketplace — the one that reveals whether your faith is real.",
          "Biblical foundations here are not slogans. They are how you speak, how you keep covenants, how you parent without passivity or rage, and how you lead a home that can survive success.",
        ],
      },
      {
        id: "what-it-covers",
        heading: "What the Family pillar covers",
        paragraphs: [
          "Members get frameworks for marriage, parenting, and the ordinary logistics of a Christian household under pressure — time, attention, technology, and the slow drift that happens when work always wins. The academy assumes you want a legacy, not a highlight reel.",
          "Community matters here too. Isolated couples invent private rules. A high-standard community tells the truth, celebrates faithfulness, and will not let “I’m busy building” become an excuse to neglect the people who bear your name.",
        ],
      },
      {
        id: "who-it-is-for",
        heading: "Who it is for",
        paragraphs: [
          "It is for believers who refuse to treat family as the leftover of ambition. Single, dating, married, or parenting — the standard is the same: Christ at the center, and a life that will still make sense in twenty years.",
          "Family curriculum launches with the rest of Reborn Academy on November 1, 2026. The waitlist is free.",
        ],
      },
    ],
  },
];

export function getPillar(slug: string) {
  return PILLARS.find((p) => p.slug === slug);
}
