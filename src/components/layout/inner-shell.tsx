import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { DeferredChrome } from "@/components/deferred-chrome";
import { WaitlistCountProvider } from "@/components/providers/waitlist-count-provider";
import type { ReactNode } from "react";

export function InnerShell({ children }: { children: ReactNode }) {
  return (
    <WaitlistCountProvider>
      <SiteHeader />
      <main id="main-content" className="inner-main">
        {children}
      </main>
      <SiteFooter />
      <DeferredChrome />
    </WaitlistCountProvider>
  );
}
