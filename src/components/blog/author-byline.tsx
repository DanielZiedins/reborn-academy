import { AUTHOR } from "@/lib/author";

export function AuthorByline({
  date,
  readingMinutes,
}: {
  date: string;
  readingMinutes: number;
}) {
  const label = new Date(`${date}T12:00:00`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <p className="author-byline">
      <span>By </span>
      <a href={AUTHOR.url} rel="author">
        {AUTHOR.name}
      </a>
      <span className="author-byline-meta">
        {" "}
        · <time dateTime={date}>{label}</time> · {readingMinutes} min read
      </span>
    </p>
  );
}

export function KeyTakeaway({ children }: { children: string }) {
  return (
    <aside className="geo-answer" aria-label="Key takeaway">
      <p className="geo-answer-label">Key takeaway</p>
      <p>{children}</p>
    </aside>
  );
}
