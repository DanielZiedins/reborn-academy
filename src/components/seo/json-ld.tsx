import {
  AEO_SUMMARY_PARAGRAPH,
  FAQ_ITEMS,
  INTRO_VIDEO,
  ORGANIZATION,
  PROGRAM_PILLARS,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
} from "@/lib/seo";
import { LAUNCH_DATE_LABEL } from "@/lib/launch";

type Node = Record<string, unknown>;

function buildGraph(): Node[] {
  const orgId = `${SITE_URL}/#organization`;
  const websiteId = `${SITE_URL}/#website`;
  const webpageId = `${SITE_URL}/#webpage`;

  const organization: Node = {
    "@type": "EducationalOrganization",
    "@id": orgId,
    name: ORGANIZATION.name,
    alternateName: ["Reborn Academy", "RB Academy", "Reborn Academy Christian"],
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

  const website: Node = {
    "@type": "WebSite",
    "@id": websiteId,
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_TAGLINE,
    publisher: { "@id": orgId },
    inLanguage: "en-US",
  };

  const webpage: Node = {
    "@type": "WebPage",
    "@id": webpageId,
    url: SITE_URL,
    name: `${SITE_NAME} — Faith-Based Transformation Academy`,
    description: SITE_DESCRIPTION,
    isPartOf: { "@id": websiteId },
    about: { "@id": orgId },
    inLanguage: "en-US",
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: ORGANIZATION.image,
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".aeo-summary-text", ".aeo-summary-lead"],
    },
  };

  const faqPage: Node = {
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

  const video: Node = {
    "@type": "VideoObject",
    "@id": `${SITE_URL}/#intro-video`,
    name: INTRO_VIDEO.name,
    description: INTRO_VIDEO.description,
    thumbnailUrl: INTRO_VIDEO.thumbnailUrl,
    embedUrl: INTRO_VIDEO.embedUrl,
    contentUrl: INTRO_VIDEO.watchUrl,
    uploadDate: INTRO_VIDEO.uploadDate,
    publisher: { "@id": orgId },
  };

  const breadcrumbs: Node = {
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

  const programs: Node = {
    "@type": "ItemList",
    "@id": `${SITE_URL}/#programs`,
    name: "Reborn Academy Programs",
    description: "Core transformation pillars at Reborn Academy.",
    numberOfItems: PROGRAM_PILLARS.length,
    itemListElement: PROGRAM_PILLARS.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Course",
        name: `${p.name} — Reborn Academy`,
        description: p.description,
        provider: { "@id": orgId },
        url: `${SITE_URL}/#programs`,
        educationalLevel: "Beginner to Advanced",
        inLanguage: "en-US",
        isAccessibleForFree: false,
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/PreOrder",
          url: `${SITE_URL}/#waitlist`,
        },
      },
    })),
  };

  const launchEvent: Node = {
    "@type": "Event",
    "@id": `${SITE_URL}/#launch-event`,
    name: "Reborn Academy Official Re-Launch",
    description:
      "Official re-launch of Reborn Academy with member dashboard, custom app, community, affiliate program, and giveaways.",
    startDate: "2026-11-01T00:00:00-04:00",
    endDate: "2026-11-01T23:59:59-04:00",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    location: {
      "@type": "VirtualLocation",
      url: SITE_URL,
    },
    organizer: { "@id": orgId },
    image: ORGANIZATION.image,
    offers: {
      "@type": "Offer",
      url: `${SITE_URL}/#waitlist`,
      availability: "https://schema.org/PreOrder",
      price: "0",
      priceCurrency: "USD",
      description: "Free waitlist for early access",
    },
  };

  const mobileApp: Node = {
    "@type": "MobileApplication",
    "@id": `${SITE_URL}/#reborn-app`,
    name: "Reborn Academy App",
    description: "Custom mobile app for Reborn Academy members — courses, community, and progress on the go.",
    applicationCategory: "EducationalApplication",
    operatingSystem: "iOS, Android",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/PreOrder",
      url: `${SITE_URL}/#waitlist`,
    },
    publisher: { "@id": orgId },
  };

  const webApp: Node = {
    "@type": "WebApplication",
    "@id": `${SITE_URL}/#member-dashboard`,
    name: "Reborn Academy Member Dashboard",
    description: "Member dashboard for courses, progress tracking, challenges, affiliate tools, and community.",
    applicationCategory: "EducationalApplication",
    browserRequirements: "Requires JavaScript",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/PreOrder",
      url: `${SITE_URL}/#waitlist`,
    },
    provider: { "@id": orgId },
  };

  const howToJoin: Node = {
    "@type": "HowTo",
    "@id": `${SITE_URL}/#how-to-join`,
    name: "How to join the Reborn Academy waitlist",
    description: `Join the free waitlist before the ${LAUNCH_DATE_LABEL} re-launch.`,
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Visit reborn-academy.com",
        text: "Go to https://www.reborn-academy.com",
        url: SITE_URL,
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Enter your details",
        text: "Enter your name and email address in the waitlist form.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Confirm your spot",
        text: "Submit the form. You'll receive a welcome email and launch updates before November 1, 2026.",
      },
    ],
  };

  const nav: Node = {
    "@type": "SiteNavigationElement",
    "@id": `${SITE_URL}/#navigation`,
    name: "Main Navigation",
    url: SITE_URL,
    hasPart: [
      { "@type": "SiteNavigationElement", name: "Launch", url: `${SITE_URL}/#launch` },
      { "@type": "SiteNavigationElement", name: "Programs", url: `${SITE_URL}/#programs` },
      { "@type": "SiteNavigationElement", name: "Academy", url: `${SITE_URL}/#academy` },
      { "@type": "SiteNavigationElement", name: "FAQ", url: `${SITE_URL}/#faq` },
      { "@type": "SiteNavigationElement", name: "Waitlist", url: `${SITE_URL}/#waitlist` },
    ],
  };

  return [
    organization,
    website,
    webpage,
    faqPage,
    video,
    breadcrumbs,
    programs,
    launchEvent,
    mobileApp,
    webApp,
    howToJoin,
    nav,
  ];
}

export function JsonLdScripts() {
  const payload = {
    "@context": "https://schema.org",
    "@graph": buildGraph(),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
