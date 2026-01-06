import Link from "next/link";
import { CalendarDays, Phone, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";
import { buildPrismBackground } from "@/lib/visual";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-surface-muted bg-surface/50 px-8 py-12 shadow-soft">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-90"
        style={{ backgroundImage: buildPrismBackground("cta") }}
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.10),rgba(0,0,0,0.35))] dark:bg-[linear-gradient(to_bottom,rgba(0,0,0,0.35),rgba(0,0,0,0.70))]" />

      <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl space-y-3">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="secondary" className="bg-surface/60">
              Open for new projects
            </Badge>
            <span className="inline-flex items-center gap-2 rounded-full border border-surface-muted bg-surface/50 px-4 py-1 text-xs text-ink-subtle">
              <Sparkles className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
              Fast builds, calm execution
            </span>
          </div>
          <h3 className="font-display text-3xl font-semibold text-ink">Let&apos;s build something that sells.</h3>
          <p className="text-sm text-ink-subtle md:text-base">
            Share what you&apos;re building and what a win looks like. I&apos;ll respond with a tailored plan and timeline within one business day.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" className="shadow-soft">
            <Link href="/contact">Start the conversation</Link>
          </Button>
          {siteConfig.calendar ? (
            <Button asChild size="lg" variant="outline">
              <a href={siteConfig.calendar} target="_blank" rel="noreferrer">
                <CalendarDays className="mr-2 h-4 w-4" aria-hidden="true" />
                Book a call
              </a>
            </Button>
          ) : null}
          <Button asChild size="lg" variant="outline">
            <a href={`tel:${siteConfig.phoneInternational}`}>
              <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
              Call {siteConfig.phone}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

