import { FadeInUp } from "@/components/ui/motion";
import { PhoneMock } from "@/components/ui/phone-mock";

export function AcademyPreviewSection() {
  return (
    <section id="academy" className="section overflow-hidden">
      <div className="page-width">
        <FadeInUp>
          <span className="eyebrow">Inside the academy · Coming soon</span>
          <h2 className="display mt-4 text-[clamp(32px,5vw,52px)] text-white">
            Epic dashboard + custom app
          </h2>
          <p className="mt-4 max-w-2xl text-[#999]">
            A member dashboard and custom Reborn app — courses, progress, community, challenges, and
            affiliate tools. Preview while we build for November 1, 2026.
          </p>
        </FadeInUp>

        <FadeInUp delay={0.15}>
          <div className="academy-showcase-grid mt-14">
            <div className="academy-showcase-phone">
              <PhoneMock />
              <p className="mt-6 text-center text-xs font-bold uppercase tracking-[0.18em] text-[#666]">
                Reborn App · iOS & Android
              </p>
            </div>

            <div className="academy-browser coming-soon-overlay-wrap">
              <div className="coming-soon-ribbon">Coming November 1, 2026</div>
              <div className="academy-browser-bar">
                <div className="browser-dots">
                  <span /><span /><span />
                </div>
                <span className="browser-url">reborn-academy.com / academy</span>
                <span className="browser-badge">Preview</span>
              </div>
              <div className="academy-browser-body">
                <aside className="academy-sidebar">
                  <p className="sidebar-label">Your path</p>
                  <ul>
                    <li className="active">Dashboard</li>
                    <li>Faith</li>
                    <li>Fitness</li>
                    <li>Business</li>
                    <li>Finances</li>
                    <li>Family</li>
                    <li>Community</li>
                    <li>Affiliate</li>
                  </ul>
                  <div className="sidebar-progress">
                    <p>Build progress</p>
                    <div className="progress-bar"><div className="progress-fill" /></div>
                    <span>Launching soon</span>
                  </div>
                </aside>
                <div className="academy-main">
                  <div className="academy-hero-card">
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#cc1111]">
                      Member dashboard
                    </p>
                    <h3 className="display mt-2 text-3xl text-white">Your Reborn Command Center</h3>
                    <p className="mt-2 text-sm text-[#888]">Courses · Progress · Community · Rewards</p>
                  </div>
                  <div className="academy-grid">
                    <div className="academy-mini-card">
                      <span>Mobile app</span>
                      <strong>Reborn App</strong>
                      <small>Custom build</small>
                    </div>
                    <div className="academy-mini-card">
                      <span>Affiliate</span>
                      <strong>Refer & Earn</strong>
                      <small>Built-in program</small>
                    </div>
                    <div className="academy-mini-card">
                      <span>Rewards</span>
                      <strong>Giveaways</strong>
                      <small>Member perks</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
