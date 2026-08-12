import Link from "next/link";
import { FadeInUp } from "@/components/ui/motion";

const nodes = [
  {
    name: "Reborn Academy",
    desc: "Faith-based transformation academy — dashboard, app, community.",
    href: "https://www.reborn-academy.com",
    primary: true,
  },
  {
    name: "Thy Kingdom Network",
    desc: "Parent network connecting Kingdom initiatives across culture & business.",
    href: "https://thykingdom.net",
  },
  {
    name: "I AM REBORN",
    desc: "Identity & lifestyle movement for believers living renewed.",
    href: "https://iamreborn.net",
  },
  {
    name: "Daniel Ziedins",
    desc: "Kingdom builder & network architect.",
    href: "https://danielziedins.com",
  },
];

export function NetworkSection() {
  return (
    <section id="network" className="section overflow-hidden" aria-labelledby="network-heading">
      <div className="network-glow" aria-hidden="true" />
      <div className="page-width relative z-10">
        <FadeInUp>
          <span className="eyebrow">Kingdom ecosystem</span>
          <h2 id="network-heading" className="display mt-4 text-[clamp(32px,5vw,52px)] text-white">
            Part of something bigger
          </h2>
          <p className="mt-4 max-w-2xl text-[#999]">
            Reborn Academy sits inside Thy Kingdom Network — a family of faith-driven initiatives
            built by Mike Gagat and Daniel Ziedins to put Jesus at the center of culture, community,
            and craft.
          </p>
        </FadeInUp>

        <div className="network-grid mt-14">
          {nodes.map((n, i) => (
            <FadeInUp key={n.name} delay={0.06 * i}>
              <Link
                href={n.href}
                target={n.primary ? undefined : "_blank"}
                rel={n.primary ? undefined : "noopener noreferrer"}
                className={`network-node ${n.primary ? "network-node-primary" : ""}`}
              >
                <span className="network-node-label">{n.primary ? "You are here" : "Connected"}</span>
                <h3 className="mt-3 text-sm font-extrabold uppercase tracking-wider text-white">
                  {n.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#888]">{n.desc}</p>
              </Link>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
