import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  Briefcase,
  Church,
  Cross,
  Dumbbell,
  Flame,
  Heart,
  LineChart,
  Shield,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WaitlistForm } from "@/components/waitlist-form";

const pillars = [
  {
    icon: Cross,
    title: "Faith",
    desc: "Deepen your walk with God. Scripture, prayer, spiritual warfare, and living as a new creation daily.",
    color: "#cc1111",
  },
  {
    icon: Dumbbell,
    title: "Fitness",
    desc: "Steward your body as a temple. Training, nutrition, discipline, and energy for the mission ahead.",
    color: "#b8962e",
  },
  {
    icon: Briefcase,
    title: "Business",
    desc: "Build with excellence for the Kingdom. Real strategies from practitioners who put faith first.",
    color: "#cc1111",
  },
  {
    icon: LineChart,
    title: "Finances",
    desc: "Steward wealth wisely. Investing, budgeting, debt freedom, and building generational impact.",
    color: "#b8962e",
  },
  {
    icon: Heart,
    title: "Family",
    desc: "Lead your household with intention. Marriage, parenting, and legacy built on biblical foundations.",
    color: "#cc1111",
  },
];

const businessTopics = [
  "Investing",
  "Crypto",
  "Marketing",
  "E-Commerce",
  "Social Media",
  "Real Estate",
  "Sales",
  "Branding",
  "Automation",
  "Leadership",
];

const stats = [
  { label: "Pillars of Growth", value: "5" },
  { label: "Business Tracks", value: "10+" },
  { label: "Kingdom Builders", value: "2" },
  { label: "Relaunch", value: "SOON" },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* HERO */}
        <section className="relative min-h-screen overflow-hidden pt-[72px]">
          <div className="absolute inset-0 red-glow" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <Image
            src="/images/hero-mountain.png"
            alt=""
            fill
            className="object-cover opacity-25"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/60 via-[#050505]/80 to-[#050505]" />

          <div className="page-width relative z-10 flex min-h-[calc(100vh-72px)] flex-col items-center justify-center py-16 text-center">
            <div className="mb-6 flex items-center gap-2 rounded-full border border-[#333] bg-[#111] px-4 py-2">
              <span className="live-dot" />
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#ccc]">
                Reborn — Reborn Launch · Waitlist Open
              </span>
            </div>

            <Image
              src="/images/logo.png"
              alt="Reborn Academy"
              width={120}
              height={120}
              className="mb-6 float"
              priority
            />

            <span className="eyebrow mb-4">Faith-Based Development Academy</span>

            <h1 className="display max-w-4xl text-[clamp(48px,10vw,96px)] text-white">
              The Most High-Value
              <br />
              <span className="text-[#cc1111]">Personal Growth</span>
              <br />
              Community For Believers
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#aaa]">
              We had Reborn Academy. Now we&apos;re rebuilding everything — faith, fitness, business,
              finances, and family — into the academy believers have been waiting for. Built by{" "}
              <strong className="text-white">Mike Gagat</strong> and{" "}
              <strong className="text-white">Daniel Ziedins</strong>.
            </p>

            <div className="mt-10 w-full max-w-xl">
              <WaitlistForm variant="hero" />
            </div>

            <Link
              href="#video"
              className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#888] transition-colors hover:text-white"
            >
              Watch the intro <ArrowDown size={14} />
            </Link>
          </div>
        </section>

        {/* STATS STRIP */}
        <section className="border-y border-[#1a1a1a] bg-[#0a0a0a] py-8">
          <div className="page-width grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="display text-4xl text-[#cc1111] md:text-5xl">{s.value}</p>
                <p className="mt-1 text-[11px] font-bold uppercase tracking-widest text-[#666]">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* VIDEO */}
        <section id="video" className="section relative">
          <div className="absolute inset-0 gold-glow" />
          <div className="page-width relative z-10">
            <div className="mx-auto max-w-3xl text-center">
              <span className="eyebrow">Start Here</span>
              <h2 className="display mt-3 text-[clamp(36px,6vw,64px)] text-white">
                Watch The Reborn Vision
              </h2>
              <p className="mt-4 text-[#999]">
                This is what we&apos;re building. A community where believers stop drifting and start
                dominating every area of life — with Christ at the center.
              </p>
            </div>

            <div className="mx-auto mt-12 max-w-4xl video-frame overflow-hidden rounded-sm">
              <div className="relative z-10 aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/IeYTcg84eQo?rel=0&modestbranding=1"
                  title="Reborn Academy Intro"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </div>

            <div className="mt-10 flex justify-center">
              <Link href="#waitlist" className="btn btn-red">
                Join The Waitlist <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* REBORN REBORN */}
        <section className="section section-dark overflow-hidden">
          <div className="page-width grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="eyebrow">The Relaunch</span>
              <h2 className="display mt-3 text-[clamp(36px,5vw,56px)] text-white">
                Reborn — <span className="text-[#cc1111]">Reborn</span>
              </h2>
              <p className="mt-5 text-[#aaa] leading-relaxed">
                Everything is under construction because we&apos;re not doing a refresh — we&apos;re doing a
                rebuild. Higher value content. Deeper community. Real practitioners teaching what
                actually works in faith, fitness, business, and life.
              </p>
              <p className="mt-4 text-[#aaa] leading-relaxed">
                Inspired by what works in modern development communities — but fully Christian.
                No compromise. No drift. Kingdom first.
              </p>
              <blockquote className="mt-8 border-l-2 border-[#b8962e] pl-5">
                <p className="text-lg italic text-[#e7d9ae]">
                  &ldquo;My sheep hear my voice, and I know them, and they follow me.&rdquo;
                </p>
                <cite className="mt-2 block text-xs font-bold uppercase tracking-widest text-[#b8962e]">
                  John 10:27
                </cite>
              </blockquote>
            </div>
            <div className="relative">
              <Image
                src="/images/phoenix.png"
                alt="Reborn Phoenix"
                width={600}
                height={600}
                className="w-full rounded-sm border border-[#2a2a2a]"
              />
              <div className="absolute -bottom-4 -left-4 border border-[#cc1111] bg-[#cc1111] px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-white">
                Rising Again
              </div>
            </div>
          </div>
        </section>

        {/* PILLARS */}
        <section id="pillars" className="section">
          <div className="page-width">
            <div className="mx-auto max-w-2xl text-center">
              <span className="eyebrow">What You&apos;ll Master</span>
              <h2 className="display mt-3 text-[clamp(36px,5vw,56px)] text-white">
                Five Pillars. One Mission.
              </h2>
              <p className="mt-4 text-[#999]">
                Like the best development academies — but every lesson rooted in Scripture and built
                for believers who refuse to live small.
              </p>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {pillars.map((p) => (
                <div key={p.title} className="pillar-card rounded-sm">
                  <p.icon size={28} style={{ color: p.color }} />
                  <h3 className="display mt-4 text-3xl text-white">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#888]">{p.desc}</p>
                </div>
              ))}
              <div className="pillar-card rounded-sm flex flex-col items-center justify-center text-center border-[#cc1111]/30 bg-gradient-to-br from-[#1a0808] to-[#0a0a0a]">
                <Flame size={32} className="text-[#cc1111]" />
                <h3 className="display mt-4 text-3xl text-white">+ More</h3>
                <p className="mt-3 text-sm text-[#888]">
                  Mindset, community, accountability, live calls, and insider access.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* BUSINESS TOPICS */}
        <section className="section section-dark">
          <div className="page-width grid items-center gap-12 lg:grid-cols-2">
            <div className="relative order-2 lg:order-1">
              <Image
                src="/images/war-room.png"
                alt="Reborn Prayer War Room"
                width={600}
                height={500}
                className="w-full rounded-sm border border-[#2a2a2a]"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="eyebrow">Business &amp; Wealth</span>
              <h2 className="display mt-3 text-[clamp(36px,5vw,56px)] text-white">
                Kingdom Business
                <br />
                Without Compromise
              </h2>
              <p className="mt-5 text-[#aaa] leading-relaxed">
                Learn investing, crypto, marketing, e-commerce, social media, real estate, and more —
                from believers who are actually doing it. No guru nonsense. No get-rich-quick garbage.
                Just proven strategies with integrity.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {businessTopics.map((t) => (
                  <span
                    key={t}
                    className="rounded border border-[#333] bg-[#111] px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#ccc]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* COMMUNITY FEATURES */}
        <section className="section">
          <div className="page-width">
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  icon: Users,
                  title: "Live Community",
                  desc: "Strategy calls, accountability, and believers who push you forward.",
                },
                {
                  icon: BookOpen,
                  title: "Expert Teachings",
                  desc: "Courses and content from practitioners — not theorists.",
                },
                {
                  icon: Shield,
                  title: "Faith-First",
                  desc: "Every framework filtered through Scripture. Kingdom over culture.",
                },
                {
                  icon: Target,
                  title: "Clear Action Steps",
                  desc: "Not just inspiration — real assignments you can execute this week.",
                },
                {
                  icon: Zap,
                  title: "High Energy",
                  desc: "Built for people who want to move. No passive consumption.",
                },
                {
                  icon: Star,
                  title: "RB Insiders",
                  desc: "Premium tier for those who want the deepest access and highest value.",
                },
              ].map((f) => (
                <div key={f.title} className="panel rounded-sm p-6">
                  <f.icon size={22} className="text-[#b8962e]" />
                  <h3 className="mt-4 text-sm font-extrabold uppercase tracking-wider text-white">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#888]">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INSIDERS */}
        <section className="section section-dark overflow-hidden">
          <div className="page-width grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="eyebrow">Premium Access</span>
              <h2 className="display mt-3 text-[clamp(36px,5vw,56px)] text-white">
                RB Insiders
              </h2>
              <p className="mt-5 text-[#aaa] leading-relaxed">
                The inner circle. Deeper teachings, exclusive calls, and the highest level of
                community access. For believers who are serious about transformation — not just
                information.
              </p>
              <div className="mt-6 flex items-center gap-3 text-sm text-[#888]">
                <Sparkles size={16} className="text-[#b8962e]" />
                <span>Details revealed at launch — join the waitlist to be first in.</span>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/insiders.png"
                alt="RB Insiders"
                width={600}
                height={400}
                className="w-full rounded-sm border border-[#2a2a2a]"
              />
            </div>
          </div>
        </section>

        {/* FOUNDERS */}
        <section id="founders" className="section">
          <div className="page-width">
            <div className="mx-auto max-w-2xl text-center">
              <span className="eyebrow">Built By</span>
              <h2 className="display mt-3 text-[clamp(36px,5vw,56px)] text-white">
                Mike Gagat &amp; Daniel Ziedins
              </h2>
              <p className="mt-4 text-[#999]">
                Entrepreneurs, leaders, and believers committed to building the Kingdom through
                faith, fitness, business, and community.
              </p>
            </div>

            <div className="mt-12 grid items-end gap-8 lg:grid-cols-2">
              <Image
                src="/images/founders-hero.png"
                alt="Mike Gagat and Daniel Ziedins"
                width={700}
                height={500}
                className="w-full rounded-sm border border-[#2a2a2a]"
              />
              <div className="space-y-6">
                <div className="panel rounded-sm p-6">
                  <div className="flex items-center gap-3">
                    <Church size={20} className="text-[#cc1111]" />
                    <h3 className="text-sm font-extrabold uppercase tracking-wider text-white">
                      Mike Gagat
                    </h3>
                  </div>
                  <p className="mt-3 text-sm text-[#888] leading-relaxed">
                    Faith-driven entrepreneur and fitness leader. Building believers who are strong in
                    spirit, mind, and body — ready for whatever God assigns.
                  </p>
                </div>
                <div className="panel rounded-sm p-6">
                  <div className="flex items-center gap-3">
                    <TrendingUp size={20} className="text-[#b8962e]" />
                    <h3 className="text-sm font-extrabold uppercase tracking-wider text-white">
                      Daniel Ziedins
                    </h3>
                  </div>
                  <p className="mt-3 text-sm text-[#888] leading-relaxed">
                    Kingdom builder, marketer, and network architect behind Thy Kingdom Network.
                    Connecting initiatives that put Jesus at the center of culture, business, and
                    community.
                  </p>
                </div>
                <Image
                  src="/images/founders.png"
                  alt="Mike and Daniel"
                  width={500}
                  height={400}
                  className="w-full rounded-sm border border-[#2a2a2a]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section id="waitlist" className="section section-dark relative overflow-hidden">
          <div className="absolute inset-0 red-glow" />
          <div className="page-width relative z-10">
            <div className="mx-auto max-w-2xl text-center">
              <span className="eyebrow">Be First To Know</span>
              <h2 className="display mt-3 text-[clamp(40px,6vw,72px)] text-white">
                Join The Waitlist
              </h2>
              <p className="mt-4 text-[#999]">
                We&apos;re rebuilding Reborn Academy into something extraordinary. Drop your email and
                you&apos;ll be the first to know when we launch — plus get early access perks.
              </p>
            </div>
            <div className="mx-auto mt-10 max-w-xl">
              <WaitlistForm variant="footer" />
            </div>
            <p className="mt-8 text-center text-xs text-[#555]">
              Free to join · No spam · Unsubscribe anytime · Powered by Thy Kingdom Network
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
