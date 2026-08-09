import {
  FAQ_ITEMS,
  INTRO_VIDEO,
  ORGANIZATION,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
} from "@/lib/seo";

type JsonLd = Record<string, unknown>;

function orgJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": `${SITE_URL}/#organization`,
    name: ORGANIZATION.name,
    alternateName: ["Reborn Academy", "RB Academy"],
    url: ORGANIZATION.url,
    logo: {
      "@type": "ImageObject",
      url: ORGANIZATION.logo,
      width: 512,
      height: 512,
    },
    image: ORGANIZATION.image,
    description: SITE_DESCRIPTION,
    email: ORGANIZATION.email,
    areaServed: ORGANIZATION.areaServed,
    knowsAbout: ORGANIZATION.knowsAbout,
    parentOrganization: {
      "@type": "Organization",
      name: ORGANIZATION.parentOrganization.name,
      url: ORGANIZATION.parentOrganization.url,
    },
    founder: ORGANIZATION.founders.map((f) => ({
      "@type": "Person",
      name: f.name,
      jobTitle: f.role,
      description: f.description,
      ...(f.url ? { url: f.url } : {}),
    })),
    sameAs: ORGANIZATION.sameAs,
  };
}

function websiteJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_TAGLINE,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-US",
  };
}

function webpageJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/#webpage`,
    url: SITE_URL,
    name: `${SITE_NAME} — Faith-Based Transformation Academy`,
    description: SITE_DESCRIPTION,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-US",
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: ORGANIZATION.image,
    },
  };
}

function faqJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}/#faq`,
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

function videoJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "@id": `${SITE_URL}/#intro-video`,
    name: INTRO_VIDEO.name,
    description: INTRO_VIDEO.description,
    thumbnailUrl: INTRO_VIDEO.thumbnailUrl,
    embedUrl: INTRO_VIDEO.embedUrl,
    contentUrl: INTRO_VIDEO.watchUrl,
    uploadDate: INTRO_VIDEO.uploadDate,
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

function breadcrumbJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
    ],
  };
}

function itemListJsonLd(): JsonLd {
  const pillars = ["Faith", "Fitness", "Business", "Finances", "Family"];
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${SITE_URL}/#programs`,
    name: "Reborn Academy Programs",
    description: "Core transformation pillars taught at Reborn Academy.",
    numberOfItems: pillars.length,
    itemListElement: pillars.map((name, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
      url: `${SITE_URL}/#programs`,
    })),
  };
}

function launchEventJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Reborn Academy Official Re-Launch",
    description: "Official re-launch of Reborn Academy — faith-based transformation academy with dashboard, app, and community.",
    startDate: "2026-11-01T00:00:00-04:00",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    location: {
      "@type": "VirtualLocation",
      url: SITE_URL,
    },
    organizer: { "@id": `${SITE_URL}/#organization` },
    image: ORGANIZATION.image,
  };
}

const SCHEMAS = [
  orgJsonLd(),
  websiteJsonLd(),
  webpageJsonLd(),
  faqJsonLd(),
  videoJsonLd(),
  breadcrumbJsonLd(),
  itemListJsonLd(),
  launchEventJsonLd(),
];

export function JsonLdScripts() {
  return (
    <>
      {SCHEMAS.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
