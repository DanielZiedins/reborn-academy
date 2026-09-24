import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { InnerShell } from "@/components/layout/inner-shell";
import { MorePages, PageCta } from "@/components/layout/inner-hero";
import { ArticleToc } from "@/components/layout/article-extras";
import { AuthorByline, KeyTakeaway } from "@/components/blog/author-byline";
import { ShareBar } from "@/components/ui/share-bar";
import { pageMetadata } from "@/lib/pages";
import { breadcrumbLd, PageJsonLd } from "@/components/seo/page-json-ld";
import { AUTHOR, authorLd } from "@/lib/author";
import { POSTS, getPost } from "@/lib/posts";
import { ORGANIZATION, SITE_NAME, SITE_URL } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    ...pageMetadata({
      title: post.title,
      description: post.description,
      path: `/blog/${post.slug}`,
      keywords: post.keywords,
    }),
    authors: [{ name: AUTHOR.name, url: AUTHOR.url }],
    creator: AUTHOR.name,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const path = `/blog/${post.slug}`;
  const related = POSTS.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <InnerShell>
      <PageJsonLd
        graph={[
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Journal", path: "/blog" },
            { name: post.title, path },
          ]),
          authorLd(),
          {
            "@type": "BlogPosting",
            "@id": `${SITE_URL}${path}#article`,
            headline: post.title,
            description: post.description,
            datePublished: post.datePublished,
            dateModified: post.dateModified,
            inLanguage: "en-US",
            articleSection: "Faith",
            wordCount: post.sections.reduce(
              (n, section) => n + section.paragraphs.join(" ").split(/\s+/).length,
              post.takeaway.split(/\s+/).length,
            ),
            author: { "@id": `${AUTHOR.url}/#person` },
            publisher: {
              "@type": "EducationalOrganization",
              name: SITE_NAME,
              url: SITE_URL,
              logo: { "@type": "ImageObject", url: ORGANIZATION.logo },
            },
            image: ORGANIZATION.image,
            mainEntityOfPage: `${SITE_URL}${path}`,
            speakable: {
              "@type": "SpeakableSpecification",
              cssSelector: [".geo-answer"],
            },
          },
          ...(post.faqs.length
            ? [
                {
                  "@type": "FAQPage",
                  "@id": `${SITE_URL}${path}#faq`,
                  mainEntity: post.faqs.map((item) => ({
                    "@type": "Question",
                    name: item.question,
                    acceptedAnswer: { "@type": "Answer", text: item.answer },
                  })),
                },
              ]
            : []),
        ]}
      />

      <article className="section inner-section" style={{ paddingTop: "calc(var(--nav-height) + 48px)" }}>
        <div className="page-width inner-narrow">
          <nav className="inner-crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/blog">Journal</Link>
            <span aria-hidden="true">/</span>
            <span>Essay</span>
          </nav>
          <p className="eyebrow mt-8">Journal</p>
          <h1 className="display mt-4 text-[clamp(36px,6vw,68px)] text-white">{post.title}</h1>
          <AuthorByline date={post.datePublished} readingMinutes={post.readingMinutes} />
          <KeyTakeaway>{post.takeaway}</KeyTakeaway>
          <ShareBar path={path} title={post.title} />
          <ArticleToc items={post.sections.map((section) => ({ id: section.id, heading: section.heading }))} />

          <div className="prose-reborn">
            {post.sections.map((section) => (
              <section key={section.id} id={section.id}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
              </section>
            ))}

            {post.faqs.length > 0 && (
              <section id="answers">
                <h2>Straight answers</h2>
                {post.faqs.map((item) => (
                  <div key={item.question}>
                    <h3 className="blog-faq-q">{item.question}</h3>
                    <p>{item.answer}</p>
                  </div>
                ))}
              </section>
            )}

            <p>
              Written by{" "}
              <a href={AUTHOR.url} rel="author">
                {AUTHOR.name}
              </a>
              , co-founder of Reborn Academy. Next:{" "}
              <Link href="/waitlist">join the free waitlist</Link> or read{" "}
              <Link href="/what-is-reborn-academy">what Reborn Academy is</Link>.
            </p>
          </div>

          <aside className="related-guides" aria-label="More essays">
            <p className="eyebrow">More from {AUTHOR.name}</p>
            <div className="related-guides-grid">
              {related.map((item) => (
                <Link key={item.slug} href={`/blog/${item.slug}`} className="related-guide-card">
                  <span>Journal</span>
                  <strong>{item.title}</strong>
                  <p>{item.description}</p>
                </Link>
              ))}
            </div>
          </aside>
          <PageCta />
          <MorePages current="/blog" />
        </div>
      </article>
    </InnerShell>
  );
}
