import Link from "next/link";
import { GUIDES } from "@/lib/guides";
import { PILLARS } from "@/lib/pillars";

export function ArticleToc({
  items,
}: {
  items: { id: string; heading: string }[];
}) {
  return (
    <nav className="article-toc" aria-label="On this page">
      <p className="article-toc-label">On this page</p>
      <ol>
        {items.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`}>{item.heading}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function RelatedGuides({ current }: { current?: string }) {
  const items = GUIDES.filter((g) => g.slug !== current).slice(0, 3);
  return (
    <aside className="related-guides" aria-label="Related guides">
      <p className="eyebrow">Keep reading</p>
      <div className="related-guides-grid">
        {items.map((g) => (
          <Link key={g.slug} href={`/guides/${g.slug}`} className="related-guide-card">
            <span>{g.eyebrow}</span>
            <strong>{g.title}</strong>
            <p>{g.description}</p>
          </Link>
        ))}
      </div>
    </aside>
  );
}

export function RelatedPillars({ current }: { current?: string }) {
  const items = PILLARS.filter((p) => p.slug !== current);
  return (
    <nav className="more-pages" aria-label="Other pillars">
      {items.map((p) => (
        <Link key={p.slug} href={`/programs/${p.slug}`} className="more-pages-link">
          {p.name}
        </Link>
      ))}
      <Link href="/programs" className="more-pages-link">
        All programs
      </Link>
    </nav>
  );
}
