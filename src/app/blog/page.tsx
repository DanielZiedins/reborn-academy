import type { Metadata } from "next";
import Link from "next/link";
import { InnerShell } from "@/components/layout/inner-shell";
import { InnerHero, MorePages, PageCta } from "@/components/layout/inner-hero";
import { pageMetadata } from "@/lib/pages";
import { breadcrumbLd, PageJsonLd } from "@/components/seo/page-json-ld";
import { AUTHOR, authorLd } from "@/lib/author";
import { POSTS } from "@/lib/posts";
import { SITE_NAME, SITE_URL } from "@/lib/seo";

const DESCRIPTION =
  "Essays by Daniel Ziedins, co-founder of Reborn Academy, on Christian identity, Kingdom business, weekly discipline, and the November 1, 2026 re-launch.";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Journal — Essays by Daniel Ziedins",
    description: DESCRIPTION,
    path: "/blog",
    keywords: [
      "daniel ziedins",
      "reborn academy blog",
      "kingdom business essay",
      "christian personal development essays",
      "reborn academy november 2026",
    ],
  }),
  authors: [{ name: AUTHOR.name, url: AUTHOR.url }],
  creator: AUTHOR.name,
};

export default function BlogIndexPage() {
  return (
    <InnerShell>
      <PageJsonLd
        graph={[
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Journal", path: "/blog" },
          ]),
          authorLd(),
          {
            "@type": "Blog",
            "@id": `${SITE_URL}/blog#blog`,
            url: `${SITE_URL}/blog`,
            name: `${SITE_NAME} Journal`,
            description: DESCRIPTION,
            author: { "@id": `${AUTHOR.url}/#person` },
            blogPost: POSTS.map((post) => ({
              "@type": "BlogPosting",
              headline: post.title,
              url: `${SITE_URL}/blog/${post.slug}`,
              datePublished: post.datePublished,
              author: { "@id": `${AUTHOR.url}/#person` },
            })),
          },
        ]}
      />
      <InnerHero
        eyebrow="Journal"
        title="Essays from the rebuild"
        lede={`Written by ${AUTHOR.name}, co-founder of ${SITE_NAME}. Clear pieces on identity, work, and how to walk into November 1, 2026 without drifting.`}
      />
      <section className="section inner-section">
        <div className="page-width">
          <div className="blog-grid">
            {POSTS.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card">
                <time dateTime={post.datePublished}>
                  {new Date(`${post.datePublished}T12:00:00`).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                  {" · "}
                  {post.readingMinutes} min
                </time>
                <h2>{post.title}</h2>
                <p>{post.takeaway}</p>
                <span className="guide-card-more">Read essay →</span>
              </Link>
            ))}
          </div>
          <p className="author-note">
            Every essay on this journal is by{" "}
            <a href={AUTHOR.url} rel="author">
              {AUTHOR.name}
            </a>
            .
          </p>
          <PageCta />
          <MorePages current="/blog" />
        </div>
      </section>
    </InnerShell>
  );
}
