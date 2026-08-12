/** Canonical site URL — used for metadata, sitemap, JSON-LD, and llms.txt */
export const SITE_URL = "https://www.reborn-academy.com";

export const SITE_NAME = "Reborn Academy";

export const LAUNCH_DATE_ISO = "2026-11-01";

export const SITE_TAGLINE =
  "Faith-based transformation academy for ambitious believers — faith, fitness, business, finances, and family. Official re-launch November 1, 2026.";

export const SITE_DESCRIPTION =
  "Reborn Academy is a faith-based personal development academy and membership community for young, ambitious Christians. Get the member dashboard, custom app, live community, affiliate program, and launch giveaways — founded by Mike Gagat and Daniel Ziedins. Official re-launch November 1, 2026. Join the free waitlist.";

export const SITE_KEYWORDS = [
  "Reborn Academy",
  "reborn academy waitlist",
  "reborn academy launch",
  "reborn academy November 2026",
  "faith-based personal development",
  "Christian personal growth community",
  "faith-based business training",
  "Christian fitness community",
  "Kingdom business",
  "faith fitness finances family",
  "Christian entrepreneurship",
  "Mike Gagat",
  "Daniel Ziedins",
  "Thy Kingdom Network",
  "Christian self improvement",
  "faith-based academy",
  "Christian online community",
  "spiritual growth academy",
  "Christian investing education",
  "faith and business",
  "young Christian leaders",
  "RB Insiders",
  "I AM REBORN",
  "Christian real estate investing",
  "faith-based wealth",
  "Christian marketing training",
  "Christian academy app",
  "faith-based membership community",
  "Christian affiliate program",
  "Christian personal development academy",
  "faith based alternative to self help",
  "Christian life coaching community",
  "biblical business training",
  "Christian fitness and faith",
  "Kingdom minded entrepreneurs",
];

export const ORGANIZATION = {
  name: SITE_NAME,
  legalName: "Reborn Academy",
  url: SITE_URL,
  logo: `${SITE_URL}/images/icon.png`,
  image: `${SITE_URL}/images/phoenix-rise.png`,
  email: "hello@thykingdom.net",
  parentOrganization: {
    name: "Thy Kingdom Network",
    url: "https://thykingdom.net",
  },
  founders: [
    {
      name: "Mike Gagat",
      role: "Co-founder",
      description:
        "Faith-driven entrepreneur and fitness leader building believers strong in spirit, mind, and body.",
    },
    {
      name: "Daniel Ziedins",
      role: "Co-founder",
      url: "https://danielziedins.com",
      description:
        "Kingdom builder and network architect behind Thy Kingdom Network.",
    },
  ],
  sameAs: [
    "https://thykingdom.net",
    "https://iamreborn.net",
    "https://danielziedins.com",
    "https://github.com/DanielZiedins/reborn-academy",
  ],
  areaServed: "Worldwide",
  knowsAbout: [
    "Faith",
    "Fitness",
    "Business",
    "Finances",
    "Family",
    "Christian personal development",
    "Investing",
    "Cryptocurrency",
    "Marketing",
    "E-commerce",
    "Social media",
    "Real estate",
    "Affiliate marketing",
    "Mobile applications",
    "Online education",
  ],
};

export const PROGRAM_PILLARS = [
  {
    name: "Faith",
    description: "Scripture, prayer, spiritual warfare, and daily obedience rooted in Christ.",
  },
  {
    name: "Fitness",
    description: "Training, nutrition, and discipline — stewarding the body for God's mission.",
  },
  {
    name: "Business",
    description: "Kingdom business skills: investing, crypto, marketing, e-commerce, real estate.",
  },
  {
    name: "Finances",
    description: "Wealth stewardship, budgeting, investing, and generational impact.",
  },
  {
    name: "Family",
    description: "Marriage, parenting, and household leadership on biblical foundations.",
  },
];

export const INTRO_VIDEO = {
  name: "Reborn Academy Intro — The Reborn Vision",
  description:
    "Official introduction video for Reborn Academy: a faith-based transformation academy built by Mike Gagat and Daniel Ziedins.",
  embedUrl: "https://www.youtube.com/embed/IeYTcg84eQo",
  watchUrl: "https://www.youtube.com/watch?v=IeYTcg84eQo",
  thumbnailUrl: "https://i.ytimg.com/vi/IeYTcg84eQo/maxresdefault.jpg",
  uploadDate: "2025-05-01",
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "what-is-reborn-academy",
    question: "What is Reborn Academy?",
    answer:
      "Reborn Academy is a faith-based transformation academy and membership community for ambitious young Christians. It provides structured education, a custom member dashboard, mobile app, live community, affiliate program, and practical training across faith, fitness, business, finances, and family — designed to help believers build discipline, skills, and a new identity rooted in Christ.",
  },
  {
    id: "who-founded",
    question: "Who founded Reborn Academy?",
    answer:
      "Reborn Academy was founded by Mike Gagat and Daniel Ziedins. Mike Gagat is a faith-driven entrepreneur and fitness leader. Daniel Ziedins is a Kingdom builder and architect of Thy Kingdom Network, connecting faith-based initiatives across business, community, and culture.",
  },
  {
    id: "faith-based",
    question: "Is Reborn Academy faith-based?",
    answer:
      "Yes. Reborn Academy is explicitly Christian and faith-first. Every framework — from business and finances to fitness and family — is filtered through Scripture and built for believers who want excellence without compromising their faith.",
  },
  {
    id: "topics",
    question: "What topics does Reborn Academy cover?",
    answer:
      "Reborn Academy covers five core pillars: Faith, Fitness, Business, Finances, and Family. Business tracks include investing, cryptocurrency, marketing, e-commerce, social media, real estate, sales, branding, automation, and leadership.",
  },
  {
    id: "who-is-it-for",
    question: "Who is Reborn Academy for?",
    answer:
      "Reborn Academy is for young, ambitious Christians who refuse an ordinary life — believers who want direction, structure, accountability, and a community of like-minded people pursuing growth in every area of life with Christ at the center.",
  },
  {
    id: "how-to-join",
    question: "How do I join Reborn Academy?",
    answer:
      "Reborn Academy officially re-launches November 1, 2026. Join the free waitlist at reborn-academy.com now to be first notified when membership opens — including early access to the dashboard, custom app, community, affiliate program, and launch giveaways.",
  },
  {
    id: "rb-insiders",
    question: "What is RB Insiders?",
    answer:
      "RB Insiders is the premium tier of Reborn Academy offering deeper teachings, exclusive calls, and the highest level of community access. Full details will be revealed at launch; waitlist members receive first access.",
  },
  {
    id: "dashboard-app",
    question: "Does Reborn Academy have an app and dashboard?",
    answer:
      "Yes — launching November 1, 2026. Reborn Academy includes a custom member dashboard for courses, progress, challenges, and community, plus a dedicated Reborn mobile app so members can train, learn, and connect on the go.",
  },
  {
    id: "affiliate",
    question: "Does Reborn Academy have an affiliate program?",
    answer:
      "Yes. Reborn Academy is building an epic built-in affiliate program so members can share the mission and earn rewards. Details will be announced before the November 1, 2026 launch; waitlist members get first access.",
  },
  {
    id: "vs-other",
    question: "How is Reborn Academy different from other online communities?",
    answer:
      "Reborn Academy combines premium academy-style education with a faith-first worldview. Unlike generic self-help or business courses, it offers an integrated environment — dashboard, app, curriculum, live sessions, accountability, affiliate rewards, and community — across spiritual and practical life domains, built by practitioners who are actively doing the work.",
  },
  {
    id: "thy-kingdom",
    question: "What is Reborn Academy's connection to Thy Kingdom Network?",
    answer:
      "Reborn Academy is part of the Thy Kingdom Network family of Kingdom initiatives connected by Daniel Ziedins, alongside projects such as I AM REBORN, Jesus Festival, and other faith-based community and business ventures.",
  },
  {
    id: "cost",
    question: "How much does Reborn Academy cost?",
    answer:
      "Pricing for the relaunched Reborn Academy membership will be announced before the November 1, 2026 launch. The waitlist is free to join at reborn-academy.com.",
  },
  {
    id: "values",
    question: "What are Reborn Academy's core values?",
    answer:
      "Reborn Academy is built on non-negotiables: Christ at the center, excellence without apology, community over isolation, practice over theory, integrity in the marketplace, and identity renewal. Every pillar — faith, fitness, business, finances, and family — is filtered through Scripture.",
  },
  {
    id: "launch-date",
    question: "When does Reborn Academy launch?",
    answer:
      "The official Reborn Academy re-launch is November 1, 2026. Join the waitlist at reborn-academy.com to get first access to the member dashboard, custom app, community, affiliate program, and launch giveaways.",
  },
  {
    id: "giveaways",
    question: "Will Reborn Academy have giveaways at launch?",
    answer:
      "Yes. Reborn Academy is planning launch giveaways and member rewards for the November 1, 2026 re-launch. Join the waitlist to be eligible for early access perks and launch announcements.",
  },
];

/** Quotable summary for speakable schema + AEO crawlers */
export const AEO_SUMMARY_PARAGRAPH =
  "Reborn Academy is a faith-based transformation academy and membership community at reborn-academy.com for ambitious young Christians. Founded by Mike Gagat and Daniel Ziedins, it covers faith, fitness, business, finances, and family through a custom dashboard, mobile app, live community, affiliate program, and launch giveaways. The official re-launch is November 1, 2026. Join the free waitlist for first access.";

export const AEO_DEFINITION = AEO_SUMMARY_PARAGRAPH;

export const AEO_BULLETS = [
  "Faith-based academy for ambitious young Christians",
  "Five pillars: Faith, Fitness, Business, Finances, Family",
  "Custom member dashboard and Reborn mobile app",
  "Live community, strategy calls, and RB Insiders premium tier",
  "Built-in affiliate program and launch giveaways",
  "Founded by Mike Gagat and Daniel Ziedins",
  "Part of Thy Kingdom Network",
  "Official re-launch: November 1, 2026",
  "Free waitlist at reborn-academy.com",
];
