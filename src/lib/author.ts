/** Blog and article author. Always Daniel Ziedins. */
export const AUTHOR = {
  name: "Daniel Ziedins",
  url: "https://danielziedins.com",
  role: "Co-founder, Reborn Academy",
  sameAs: ["https://danielziedins.com", "https://thykingdom.net"],
} as const;

export function authorLd(): Record<string, unknown> {
  return {
    "@type": "Person",
    "@id": `${AUTHOR.url}/#person`,
    name: AUTHOR.name,
    url: AUTHOR.url,
    jobTitle: AUTHOR.role,
    sameAs: AUTHOR.sameAs,
    worksFor: {
      "@type": "EducationalOrganization",
      name: "Reborn Academy",
      url: "https://www.reborn-academy.com",
    },
  };
}
