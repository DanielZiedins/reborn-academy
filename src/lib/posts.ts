export type PostSection = {
  id: string;
  heading: string;
  paragraphs: string[];
};

export type PostFaq = {
  question: string;
  answer: string;
};

export type Post = {
  slug: string;
  title: string;
  description: string;
  /** One quotable answer for search and generative engines. */
  takeaway: string;
  keywords: string[];
  datePublished: string;
  dateModified: string;
  readingMinutes: number;
  sections: PostSection[];
  faqs: PostFaq[];
};

export const POSTS: Post[] = [
  {
    slug: "why-we-are-relaunching-reborn-academy",
    title: "Why We Are Relaunching Reborn Academy",
    description:
      "Daniel Ziedins on why Reborn Academy relaunches November 1, 2026: a faith-based academy with a dashboard, app, and community — not another content library believers abandon.",
    takeaway:
      "Reborn Academy is relaunching on November 1, 2026 because a folder of videos does not form a life. Mike Gagat and Daniel Ziedins are rebuilding it as a faith-first ecosystem — curriculum, member dashboard, mobile app, live community, and affiliate tools — so ambitious Christians can grow in faith, fitness, business, finances, and family together.",
    keywords: [
      "why reborn academy is relaunching",
      "reborn academy november 2026",
      "daniel ziedins reborn academy",
      "faith based academy relaunch",
    ],
    datePublished: "2026-09-24",
    dateModified: "2026-09-24",
    readingMinutes: 6,
    sections: [
      {
        id: "the-gap",
        heading: "The gap we kept seeing",
        paragraphs: [
          "Ambitious believers are not short on content. They are short on an environment. A sermon on Sunday, a fitness app on Monday, a business podcast on Wednesday, and a money spreadsheet they open when they feel guilty — none of those talk to each other. The person stays split.",
          "Mike and I built Reborn Academy because we were tired of watching gifted Christians collect courses and still feel alone. Skill without Christ becomes pride. Christ without skill becomes an excuse. We wanted one place that refuses both.",
        ],
      },
      {
        id: "what-changes-at-relaunch",
        heading: "What changes on November 1, 2026",
        paragraphs: [
          "The re-launch is not a new logo on the old library. Members get a dashboard for courses, progress, and challenges; a Reborn app so the work fits in a pocket; a live community with standards; an affiliate program for people who share the mission; and launch giveaways for the people who showed up early.",
          "Pricing will be announced before doors open. The waitlist is free and does not lock anyone into a plan. It is how you get first access.",
        ],
      },
      {
        id: "what-we-will-not-do",
        heading: "What we will not do",
        paragraphs: [
          "We will not sell a Christ-optional personal brand and call it ministry. We will not disappear after checkout. The covenant is simple: we walk the journey with members, the launch ecosystem is what we said it would be, every framework stays faith-first, and the room is for people who want standards.",
          "If you want motivation without obedience, this relaunch will disappoint you. If you want a community that will tell you the truth about your faith, your body, your business, your money, and your house — join the waitlist.",
        ],
      },
    ],
    faqs: [
      {
        question: "Why is Reborn Academy relaunching?",
        answer:
          "Reborn Academy is relaunching on November 1, 2026 as a full faith-based ecosystem — dashboard, app, community, curriculum, and affiliate tools — because a content library alone does not form a life. It was founded by Mike Gagat and Daniel Ziedins.",
      },
      {
        question: "Who is writing about the relaunch?",
        answer:
          "This essay is by Daniel Ziedins, co-founder of Reborn Academy and architect of Thy Kingdom Network. His site is danielziedins.com.",
      },
    ],
  },
  {
    slug: "what-reborn-means",
    title: "What “Reborn” Means If You Are Already Saved",
    description:
      "Reborn is not a second salvation and not a slogan. Daniel Ziedins explains what a renewed identity looks like across faith, fitness, business, finances, and family.",
    takeaway:
      "For a Christian who is already saved, “reborn” is not a second conversion and not a brand. It is a renewed way of living — new standards in faith, body, work, money, and home — practiced in community instead of performed online.",
    keywords: [
      "what does reborn mean for christians",
      "christian identity renewal",
      "reborn academy meaning",
      "faith based personal transformation",
    ],
    datePublished: "2026-09-24",
    dateModified: "2026-09-24",
    readingMinutes: 7,
    sections: [
      {
        id: "not-a-second-gospel",
        heading: "Not a second gospel",
        paragraphs: [
          "Scripture is clear: if anyone is in Christ, he is a new creation. That work is God’s, not a course’s. Reborn Academy does not offer a second salvation, a secret level of Christianity, or a personality you can purchase.",
          "What we do offer is a place to stop living like the old man while confessing the new one. Plenty of believers are justified and still unstructured. They love Jesus and leak their life through an untrained body, a sloppy business, anxious money, and a household on autopilot.",
        ],
      },
      {
        id: "identity-before-tactics",
        heading: "Identity before tactics",
        paragraphs: [
          "Tactics fail when identity is borrowed. If your standard comes from a timeline, you will quit when the timeline moves on. Reborn starts with who you are in Christ, then asks what obedience looks like this week in five places: faith, fitness, business, finances, and family.",
          "That order matters. A man who gets rich and loses his house did not have a business problem. He had an identity problem that business exposed.",
        ],
      },
      {
        id: "why-community",
        heading: "Why this cannot be private",
        paragraphs: [
          "Renewal that nobody can see is usually renewal that is not happening. Community is not a bonus feature. It is how standards survive a bad month. The academy, the app, and the live rooms exist so you are not the only witness to your own excuses.",
          "If that sounds heavy, good. Light Christianity produced the drift we are trying to leave. The waitlist is open now. Doors open November 1, 2026.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does Reborn Academy teach that you need to be saved again?",
        answer:
          "No. Reborn Academy is for Christians who are already in Christ. “Reborn” names a renewed way of living — faith, fitness, business, finances, and family under Scripture — not a second gospel.",
      },
    ],
  },
  {
    slug: "kingdom-business-standards",
    title: "Kingdom Business Is a Standard, Not a Niche",
    description:
      "Kingdom business is not Christian branding on secular tactics. Daniel Ziedins on how faith changes the way believers sell, hire, price, and keep their word.",
    takeaway:
      "Kingdom business is not a niche and not a verse on a sales page. It is a standard: the way a Christian sells, hires, prices, and keeps their word is submitted to Christ, while the craft itself stays excellent.",
    keywords: [
      "kingdom business",
      "christian entrepreneurship standards",
      "faith based business",
      "biblical business ethics",
    ],
    datePublished: "2026-09-24",
    dateModified: "2026-09-24",
    readingMinutes: 7,
    sections: [
      {
        id: "two-failures",
        heading: "Two failures we refuse",
        paragraphs: [
          "One failure is secular skill with Jesus as a footer. The offer is manipulative, the team is disposable, and Sunday language covers it. The other failure is spiritual language with no craft. Nothing ships. Customers are “loved” and still ignored. Both dishonor God.",
          "Reborn Academy’s business pillar exists for a third way: real skill — offers, marketing, investing, e-commerce, real estate — and a conscience that can survive an audit.",
        ],
      },
      {
        id: "where-it-shows-up",
        heading: "Where the standard shows up",
        paragraphs: [
          "It shows up in the promise you make in a sales call and whether the delivery matches it. It shows up in how you talk about people who are not in the room. It shows up when a slow month tempts you to invent urgency you do not have.",
          "It also shows up in competence. Laziness is not humility. If God gave you a marketplace assignment, amateur work is not holiness. Learn the craft. Then refuse the shortcuts that cost your name.",
        ],
      },
      {
        id: "not-alone",
        heading: "Do not invent this alone",
        paragraphs: [
          "Isolated founders write private rules that always favor the founder. A high-standard community is how you get told no. That is part of what opens November 1, 2026 — not a pile of tactics, a room of believers who are actually building.",
          "Until then, pick one promise you have been soft on and keep it this week. That is Kingdom business before any curriculum drops.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is Kingdom business?",
        answer:
          "Kingdom business means marketplace work submitted to Christ: excellent craft, honest offers, and integrity in how you sell, hire, price, and keep your word. It is a standard, not a marketing niche.",
      },
    ],
  },
  {
    slug: "weekly-rhythm-faith-fitness-work",
    title: "A Weekly Rhythm for Faith, Fitness, and Work",
    description:
      "A simple weekly rhythm for ambitious Christians: Scripture, training, one money check, one business action, and one honest conversation at home. By Daniel Ziedins.",
    takeaway:
      "Ambitious Christians do not need a perfect life system. They need one week they can repeat: Scripture before screens, three training sessions, one money check, one finished business action, and one honest conversation at home.",
    keywords: [
      "christian weekly routine",
      "faith fitness and work rhythm",
      "christian discipline schedule",
      "biblical weekly rhythm",
    ],
    datePublished: "2026-09-24",
    dateModified: "2026-09-24",
    readingMinutes: 6,
    sections: [
      {
        id: "why-a-week",
        heading: "Why a week, not a rebrand",
        paragraphs: [
          "People try to change their whole life on a Sunday night and quit by Wednesday. A week is long enough to matter and short enough to restart. Reborn Academy will give you more structure at launch. You do not have to wait for November 1 to stop living randomly.",
          "The point of a rhythm is not to impress anyone. It is to make obedience boring enough that your feelings stop being in charge.",
        ],
      },
      {
        id: "the-five-moves",
        heading: "Five moves that cover the pillars",
        paragraphs: [
          "Faith: Scripture before the phone, most mornings. Not a commentary marathon. A passage you can obey before noon.",
          "Fitness: three sessions you will actually do. Strength or conditioning, written down. If it is not on a calendar, it is a wish.",
          "Business: one action that can be finished — a call, an offer, a page, a follow-up. Finish beats a brainstorm.",
          "Finances: one weekly look at what came in, what went out, and what you owe. Ten quiet minutes beat a quarterly panic.",
          "Family: one conversation you have been postponing, or one block of undistracted time with the people who bear your name. Presence is a discipline.",
        ],
      },
      {
        id: "when-you-miss",
        heading: "When you miss",
        paragraphs: [
          "You will miss. Restart the next morning. Do not turn a missed workout into a missed month, and do not turn a missed morning into a speech about how busy you are.",
          "This rhythm is the floor, not the ceiling. The academy exists to raise the ceiling with teaching, a dashboard, an app, and people who notice when you vanish. The floor is yours this week.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is a simple weekly rhythm for a Christian who wants to grow?",
        answer:
          "A workable week is Scripture before screens, three training sessions, one look at your money, one business action you finish, and one honest or undistracted block with your household. Repeat it before you add more.",
      },
    ],
  },
  {
    slug: "prepare-for-november-1-2026",
    title: "How to Prepare for November 1, 2026",
    description:
      "What to do before the Reborn Academy re-launch on November 1, 2026: join the waitlist, hold the date, get honest about one pillar, and bring one person with you.",
    takeaway:
      "Before Reborn Academy opens on November 1, 2026, do four things: join the free waitlist, put the date on your calendar, write down the one pillar where you are drifting, and invite one believer who needs the same room.",
    keywords: [
      "prepare for reborn academy launch",
      "reborn academy november 1 2026",
      "how to join reborn academy waitlist",
      "what to do before reborn academy",
    ],
    datePublished: "2026-09-24",
    dateModified: "2026-09-24",
    readingMinutes: 5,
    sections: [
      {
        id: "join",
        heading: "1. Join the waitlist",
        paragraphs: [
          "Go to reborn-academy.com/waitlist and enter your name and email. It is free. It does not charge you and it does not pick a membership tier for you. It puts you first when the dashboard, app, community, and rewards open.",
          "If a friend sent you a link with ?ref= in it, keep it. We want to know who is carrying this.",
        ],
      },
      {
        id: "calendar",
        heading: "2. Hold the date",
        paragraphs: [
          "November 1, 2026 is the official re-launch. Add it to your calendar from the waitlist page so the day is not a surprise you scroll past. Decisions made in advance beat decisions made in a mood.",
        ],
      },
      {
        id: "one-pillar",
        heading: "3. Name the drift",
        paragraphs: [
          "Pick one pillar — faith, fitness, business, finances, or family — and write one honest sentence about where you are. Not a manifesto. A sentence you would be willing to say out loud in a room of believers.",
          "That sentence is your starting line. The curriculum will not matter if you arrive pretending you are fine.",
        ],
      },
      {
        id: "one-person",
        heading: "4. Bring one person",
        paragraphs: [
          "Isolation is how standards die. Send the waitlist to one person who is ambitious and tired of growing alone. Do not spam a list. Have a real conversation.",
          "Then use the weeks you have. A weekly rhythm now means November is a continuation, not a rescue.",
        ],
      },
    ],
    faqs: [
      {
        question: "How do I prepare for the Reborn Academy launch?",
        answer:
          "Join the free waitlist at reborn-academy.com/waitlist, add November 1, 2026 to your calendar, name the one area of life where you are drifting, and invite one other believer. Membership pricing is announced before launch.",
      },
      {
        question: "Is the Reborn Academy waitlist free?",
        answer:
          "Yes. The waitlist is free and does not lock you into a paid plan. The official re-launch is November 1, 2026.",
      },
    ],
  },
];

export function getPost(slug: string) {
  return POSTS.find((post) => post.slug === slug);
}
