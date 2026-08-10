"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2, Sparkles } from "lucide-react";
import { ConfettiBurst } from "@/components/ui/confetti-burst";

type Props = {
  variant?: "hero" | "inline" | "footer";
  source?: string;
};

export function WaitlistForm({ variant = "inline", source = "reborn-academy.com" }: Props) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          full_name: name.trim() || undefined,
          source,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setMessage(
        "You're on the list. Watch your inbox — we'll be first to tell you when we launch November 1, 2026.",
      );
      setShowConfetti(true);
      setEmail("");
      setName("");
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="waitlist-success-wrap">
        <ConfettiBurst active={showConfetti} />
        <div className="waitlist-success-card">
          <div className="waitlist-success-icon">
            <Sparkles size={20} aria-hidden="true" />
          </div>
          <CheckCircle2 className="shrink-0 text-[#4ade80]" size={28} aria-hidden="true" />
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-[#4ade80]">
              You&apos;re on the waitlist
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[#a8c4a8]">{message}</p>
            <p className="mt-3 text-xs text-[#6a8a6a]">
              Check your email for confirmation. Share Reborn with a believer who needs this.
            </p>
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
      {status === "error" && (
        <p className="mt-3 text-sm text-[#ff6b6b]" role="alert">{message}</p>
      )}
      {variant !== "inline" && status !== "error" && (
        <p className="mt-3 text-xs text-[#666]">
          Be the first to know when Reborn Academy relaunches. No spam — unsubscribe anytime.
        </p>
      )}
    </form>
  );
}
