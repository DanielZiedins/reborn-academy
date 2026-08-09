import { Reveal } from "@/components/ui/reveal";

export function AcademyPreviewSection() {
  return (
    <section id="academy" className="section overflow-hidden">
      <div className="page-width">
        <Reveal>
          <span className="eyebrow">Inside the academy</span>
          <h2 className="display mt-4 text-[clamp(32px,5vw,52px)] text-white">
            See the environment before you enter
          </h2>
          <p className="mt-4 max-w-2xl text-[#999]">
            Curriculum, progress, community, and live sessions — one digital academy. Platform preview
            while we rebuild for relaunch.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="academy-browser mt-14">
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
                </ul>
                <div className="sidebar-progress">
                  <p>Relaunch progress</p>
                  <div className="progress-bar"><div className="progress-fill" /></div>
                  <span>Rebuilding for launch</span>
                </div>
              </aside>
              <div className="academy-main">
                <div className="academy-hero-card">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#cc1111]">
                    Continue learning
                  </p>
                  <h3 className="display mt-2 text-3xl text-white">Kingdom Business Foundations</h3>
                  <p className="mt-2 text-sm text-[#888]">Module 3 · Marketing with integrity</p>
                </div>
                <div className="academy-grid">
                  <div className="academy-mini-card">
                    <span>Live call</span>
                    <strong>Strategy Session</strong>
                    <small>Members only</small>
                  </div>
                  <div className="academy-mini-card">
                    <span>Challenge</span>
                    <strong>7-Day Discipline</strong>
                    <small>Starts at launch</small>
                  </div>
                  <div className="academy-mini-card">
                    <span>Community</span>
                    <strong>RB Insiders</strong>
                    <small>Premium tier</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
