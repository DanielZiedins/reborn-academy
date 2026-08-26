"use client";

import { useState } from "react";
import { Check, Link2, Share2 } from "lucide-react";
import { SITE_URL } from "@/lib/seo";

export function ShareBar({ path, title }: { path: string; title: string }) {
  const [copied, setCopied] = useState(false);
  const url = `${SITE_URL}${path}`;

  async function copy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* ignore */
    }
  }

  async function share() {
    if (typeof navigator.share === "function") {
      try {
        await navigator.share({ title, url, text: title });
        return;
      } catch {
        /* user cancel or unsupported */
      }
    }
    await copy();
  }

  return (
    <div className="share-bar">
      <button type="button" className="share-bar-btn" onClick={share}>
        <Share2 size={14} aria-hidden="true" />
        Share
      </button>
      <button type="button" className="share-bar-btn" onClick={copy}>
        {copied ? <Check size={14} aria-hidden="true" /> : <Link2 size={14} aria-hidden="true" />}
        {copied ? "Copied" : "Copy link"}
      </button>
    </div>
  );
}
