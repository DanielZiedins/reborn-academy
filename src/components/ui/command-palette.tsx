"use client";

import { useEffect, useMemo, useState } from "react";
import {
  CalendarPlus,
  Copy,
  Cross,
  HelpCircle,
  LayoutDashboard,
  Play,
  Sparkles,
  Users,
  Gift,
  User,
  ListChecks,
} from "lucide-react";
import { SITE_URL } from "@/lib/seo";

type Command = {
  id: string;
  label: string;
  hint: string;
  icon: typeof Play;
  run: () => void;
};

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      const typing =
        tag === "INPUT" || tag === "TEXTAREA" || (e.target as HTMLElement)?.isContentEditable;

      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
        setQuery("");
        return;
      }

      if (e.key === "Escape") setOpen(false);

      if (!typing && e.key === "/") {
        e.preventDefault();
        setOpen(true);
        setQuery("");
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const commands = useMemo<Command[]>(
    () => [
      {
        id: "waitlist",
        label: "Join the waitlist",
        hint: "W",
        icon: Sparkles,
        run: () => document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" }),
      },
      {
        id: "video",
        label: "Watch the Reborn vision",
        hint: "Video",
        icon: Play,
        run: () => document.getElementById("video")?.scrollIntoView({ behavior: "smooth" }),
      },
      {
        id: "programs",
        label: "Explore five pillars",
        hint: "Programs",
        icon: Cross,
        run: () => document.getElementById("programs")?.scrollIntoView({ behavior: "smooth" }),
      },
      {
        id: "academy",
        label: "Preview dashboard + app",
        hint: "Academy",
        icon: LayoutDashboard,
        run: () => document.getElementById("academy")?.scrollIntoView({ behavior: "smooth" }),
      },
      {
        id: "giveaways",
        label: "See rewards & giveaways",
        hint: "Rewards",
        icon: Gift,
        run: () => document.getElementById("giveaways")?.scrollIntoView({ behavior: "smooth" }),
      },
      {
        id: "community",
        label: "Community & war room",
        hint: "Community",
        icon: Users,
        run: () => document.getElementById("community")?.scrollIntoView({ behavior: "smooth" }),
      },
      {
        id: "founders",
        label: "Meet the founders",
        hint: "About",
        icon: User,
        run: () => document.getElementById("founders")?.scrollIntoView({ behavior: "smooth" }),
      },
      {
        id: "faq",
        label: "Read FAQs",
        hint: "FAQ",
        icon: HelpCircle,
        run: () => document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" }),
      },
      {
        id: "checklist",
        label: "Open launch checklist",
        hint: "Checklist",
        icon: ListChecks,
        run: () => document.getElementById("checklist")?.scrollIntoView({ behavior: "smooth" }),
      },
      {
        id: "calendar",
        label: "Add Nov 1, 2026 to calendar",
        hint: ".ics",
        icon: CalendarPlus,
        run: () => {
          window.location.href = "/api/calendar";
        },
      },
      {
        id: "copy",
        label: copied ? "Link copied" : "Copy site link",
        hint: "Share",
        icon: Copy,
        run: async () => {
          try {
            await navigator.clipboard.writeText(SITE_URL);
            setCopied(true);
            setTimeout(() => setCopied(false), 1600);
          } catch {
            /* ignore */
          }
        },
      },
    ],
    [copied],
  );

  const filtered = commands.filter((c) => {
    const q = query.trim().toLowerCase();
    if (!q) return true;
    return c.label.toLowerCase().includes(q) || c.hint.toLowerCase().includes(q);
  });

  if (!open) return null;

  return (
    <div className="cmdk" role="dialog" aria-modal="true" aria-label="Command palette">
      <button type="button" className="cmdk-backdrop" onClick={() => setOpen(false)} aria-label="Close" />
      <div className="cmdk-panel">
        <input
          autoFocus
          className="cmdk-input"
          placeholder="Jump anywhere… waitlist, video, FAQ"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search commands"
        />
        <ul className="cmdk-list">
          {filtered.length === 0 && <li className="cmdk-empty">No matches</li>}
          {filtered.map((c) => {
            const Icon = c.icon;
            return (
              <li key={c.id}>
                <button
                  type="button"
                  className="cmdk-item"
                  onClick={() => {
                    c.run();
                    if (c.id !== "copy") setOpen(false);
                  }}
                >
                  <Icon size={16} aria-hidden="true" />
                  <span>{c.label}</span>
                  <kbd>{c.hint}</kbd>
                </button>
              </li>
            );
          })}
        </ul>
        <p className="cmdk-foot">
          <kbd>⌘K</kbd> open · <kbd>/</kbd> search · <kbd>W</kbd> waitlist · <kbd>Esc</kbd> close
        </p>
      </div>
    </div>
  );
}
