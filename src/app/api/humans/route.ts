import { ORGANIZATION, SITE_NAME, SITE_URL } from "@/lib/seo";

export async function GET() {
  const lines = [
    `/* TEAM */`,
    `Founder: Mike Gagat`,
    `Founder: Daniel Ziedins`,
    `Contact: ${ORGANIZATION.email}`,
    `Site: ${SITE_URL}`,
    ``,
    `/* SITE */`,
    `Name: ${SITE_NAME}`,
    `Parent: Thy Kingdom Network`,
    `Standards: HTML5, CSS, Next.js`,
    `Pages: /, /what-is-reborn-academy, /programs, /launch, /about, /faq, /waitlist`,
    `Components: Waitlist, SEO/AEO, RSS, Launch countdown`,
    `Launch: November 1, 2026`,
    ``,
    `/* THANKS */`,
    `Built for believers who refuse an ordinary life.`,
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
