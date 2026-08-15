"use client";

import { useEffect, useState } from "react";

const verses = [
  {
    text: "Do not be conformed to this world, but be transformed by the renewal of your mind.",
    ref: "Romans 12:2",
  },
  {
    text: "I came that they may have life and have it abundantly.",
    ref: "John 10:10",
  },
  {
    text: "Whatever you do, work heartily, as for the Lord and not for men.",
    ref: "Colossians 3:23",
  },
  {
    text: "Be strong and courageous. Do not be frightened, and do not be dismayed.",
    ref: "Joshua 1:9",
  },
  {
    text: "If anyone is in Christ, he is a new creation. The old has passed away.",
    ref: "2 Corinthians 5:17",
  },
];

export function ScriptureStrip() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % verses.length), 7000);
    return () => clearInterval(id);
  }, []);

  const v = verses[index];

  return (
    <aside className="scripture-strip" aria-label="Scripture">
      <div className="page-width">
        <blockquote key={index} className="scripture-quote">
          <p>&ldquo;{v.text}&rdquo;</p>
          <cite>{v.ref}</cite>
        </blockquote>
      </div>
    </aside>
  );
}
