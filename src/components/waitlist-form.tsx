"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Loader2,
  Sparkles,
  Share2,
  Copy,
  Check,
  BadgeCheck,
} from "lucide-react";
import { ConfettiBurst } from "@/components/ui/confetti-burst";
import { useWaitlistCount } from "@/components/providers/waitlist-count-provider";
import { suggestEmailFix } from "@/lib/email-suggest";
import { SITE_URL } from "@/lib/seo";

type Props = {
  variant?: "hero" | "inline" | "footer";
  source?: string;
};

function resolveSource(fallback: string) {
  if (typeof window === "undefined") return fallback;
  try {
    const params = new URLSearchParams(window.location.search);
    const ref = params.get("ref") || params.get("utm_source") || params.get("source");
    if (ref) return `ref:${ref.slice(0, 60)}`;
  } catch {
    /* ignore */
  }
  return fallback;
}

function referralSlug(name: string, email: string) {
  const base = (name.trim() || email.split("@")[0] || "reborn")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 24);
  return base || "reborn";
}

export function WaitlistForm({ variant = "inline", source = "reborn-academy.com" }: Props) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);
  const [copied, setCopied] = useState(false);
  const [resolvedSource, setResolvedSource] = useState(source);
  const [suggestion, setSuggestion] = useState<string | null>(null);
  const [rank, setRank] = useState<number | null>(null);
  const [inviteUrl, setInviteUrl] = useState(SITE_URL);
  const { refresh } = useWaitlistCount();

  useEffect(() => {
    setResolvedSource(resolveSource(source));
  }, [source]);

  useEffect(() => {
    setSuggestion(suggestEmailFix(email));
  }, [email]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");
    setMessage("");

    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 15000);
      const invite = `${SITE_URL}/waitlist?ref=${encodeURIComponent(referralSlug(name, email))}`;

      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          full_name: name.trim() || undefined,
          source: resolvedSource,
        }),
        signal: controller.signal,
      });
      clearTimeout(timeout);

      const data = await res.json();

      if (!res.ok || !data.ok) {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setInviteUrl(invite);
      setRank(typeof data.count === "number" && data.count > 0 ? data.count : null);
      setStatus("success");
      setMessage(
        "You're on the list. Watch your inbox — we'll be first to tell you when we launch November 1, 2026.",
      );
      setShowConfetti(true);
      setEmail("");
      setName("");
      setSuggestion(null);
      void refresh();
    } catch (err) {
      setStatus("error");
      setMessage(
        err instanceof Error && err.name === "AbortError"
          ? "Request timed out. Please try again."
          : "Network error. Please try again.",
      );
    }
  }

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(inviteUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  }

  async function nativeShare() {
    const payload = {
      title: "Reborn Academy",
      text: "I just joined the Reborn Academy waitlist — faith-based academy re-launching November 1, 2026.",
      url: inviteUrl,
    };
    try {
      if (navigator.share) {
        await navigator.share(payload);
        return;
      }
    } catch {
      /* fall through to copy */
    }
    await copyLink();
  }

  if (status === "success") {
    const shareText = encodeURIComponent(
      "I just joined the Reborn Academy waitlist — faith-based academy re-launching November 1, 2026. Join me:",
    );
    const shareUrl = encodeURIComponent(inviteUrl);

    return (
      <div className="waitlist-success-wrap">
        <ConfettiBurst active={showConfetti} />
        <div className="waitlist-success-card">
          <div className="waitlist-success-icon">
            <Sparkles size={20} aria-hidden="true" />
          </div>
          <CheckCircle2 className="shrink-0 text-[#4ade80]" size={28} aria-hidden="true" />
          <div className="flex-1">
            <div className="founding-badge">
              <BadgeCheck size={14} aria-hidden="true" />
              {rank ? `Founding member #${rank}` : "Founding waitlist member"}
            </div>
            <p className="mt-3 text-sm font-bold uppercase tracking-wider text-[#4ade80]">
              You&apos;re on the waitlist
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[#a8c4a8]">{message}</p>
            <p className="mt-3 text-xs text-[#6a8a6a]">
              Share your invite link so another believer can lock a founding spot.
            </p>
            <div className="waitlist-share mt-4">
              <button type="button" className="waitlist-share-btn" onClick={nativeShare}>
                <Share2 size={14} aria-hidden="true" /> Share invite
              </button>
              <a
                href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="waitlist-share-btn"
              >
                Post
              </a>
              <button type="button" className="waitlist-share-btn" onClick={copyLink}>
                {copied ? <Check size={14} aria-hidden="true" /> : <Copy size={14} aria-hidden="true" />}
                {copied ? "Copied" : "Copy invite"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const showName = variant === "hero" || variant === "footer";

  return (
    <form onSubmit={handleSubmit} className="w-full" noValidate>
      <div className={`flex flex-col gap-3 ${variant === "hero" ? "sm:flex-row" : ""}`}>
        {showName && (
          <input
            type="text"
            className="waitlist-input sm:max-w-[200px]"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={120}
            aria-label="Full name"
            autoComplete="name"
          />
        )}
        <input
          type="email"
          required
          className="waitlist-input"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-label="Email address"
          autoComplete="email"
          inputMode="email"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="btn btn-red shrink-0 disabled:opacity-60"
        >
          {status === "loading" ? (
            <Loader2 size={18} className="animate-spin" aria-label="Submitting" />
          ) : (
            <>
              Enter The Academy <ArrowRight size={16} aria-hidden="true" />
            </>
          )}
        </button>
      </div>
      {suggestion && (
        <p className="mt-3 text-xs text-[#b8962e]">
          Did you mean{" "}
          <button
            type="button"
            className="email-suggest-btn"
            onClick={() => {
              setEmail(suggestion);
              setSuggestion(null);
            }}
          >
            {suggestion}
          </button>
          ?
        </p>
      )}
      {status === "error" && (
        <p className="mt-3 text-sm text-[#ff6b6b]" role="alert">
          {message}
        </p>
      )}
      {variant !== "inline" && status !== "error" && !suggestion && (
        <p className="mt-3 text-xs text-[#666]">
          Be the first to know when Reborn Academy relaunches. No spam — unsubscribe anytime.
        </p>
      )}
    </form>
  );
}
