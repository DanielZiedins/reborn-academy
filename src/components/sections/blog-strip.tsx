import Link from "next/link";
import { POSTS } from "@/lib/posts";
import { AUTHOR } from "@/lib/author";

export function BlogStrip() {
  return (
    <section className="section section-dark" aria-labelledby="blog-strip-heading">
      <div className="page-width">
        <span className="eyebrow">Journal</span>
        <h2 id="blog-strip-heading" className="display mt-4 text-[clamp(28px,4.5vw,48px)] text-white">
          Notes from the rebuild
        </h2>
        <p className="mt-4 max-w-2xl text-[#999]">
          Essays by{" "}
          <a href={AUTHOR.url} className="text-[#b8962e] hover:text-white">
            {AUTHOR.name}
          </a>{" "}
          on identity, Kingdom business, and how to walk into November 1, 2026 ready.
        </p>

        <div className="blog-grid mt-12">
          {POSTS.slice(0, 3).map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card">
              <time dateTime={post.datePublished}>
                {new Date(`${post.datePublished}T12:00:00`).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
              <h3>{post.title}</h3>
              <p>{post.takeaway}</p>
              <span className="guide-card-more">Read essay →</span>
            </Link>
          ))}
        </div>

        <p className="mt-8">
          <Link href="/blog" className="guide-card-more">
            All essays →
          </Link>
        </p>
      </div>
    </section>
  );
}
