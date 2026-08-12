import { ORGANIZATION, SITE_URL } from "@/lib/seo";

export async function GET() {
  const lines = [
    `Contact: mailto:${ORGANIZATION.email}`,
    `Expires: 2027-11-01T00:00:00.000Z`,
    `Preferred-Languages: en`,
    `Canonical: ${SITE_URL}/.well-known/security.txt`,
    `Policy: ${SITE_URL}`,
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
