import Link from "next/link";
import Script from "next/script";
import { ArrowRight } from "lucide-react";
import { createMetadata, buildBreadcrumbSchema } from "@/lib/seo";
import { MotionSection } from "@/components/motion-section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { caseStudies } from "@/content/case-studies";
import { CaseStudyCard } from "@/components/case-study-card";
import { CtaBanner } from "@/components/cta-banner";

export const metadata = createMetadata({
  title: "Work",
  description:
    "Selected case studies from Multimedium.dev — conversion-focused websites and portals designed and built by Haydn.",
  path: "/work"
});

export default function WorkPage() {
  const breadcrumb = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Work", path: "/work" }
  ]);

  return (
    <div className="container space-y-14 py-16 md:py-20">
      <Script
        id="breadcrumb-work"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <MotionSection className="relative overflow-hidden rounded-3xl border border-surface-muted bg-surface/50 px-8 py-12 shadow-soft">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgb(var(--brand)_/_0.18),transparent_55%)]" />
        <Badge variant="secondary" className="w-fit bg-surface/60">
          Case studies
        </Badge>
        <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-tight text-ink md:text-6xl">
          Work that makes the next “yes” feel easy
        </h1>
        <p className="mt-4 max-w-2xl text-base text-ink-subtle md:text-lg">
          A small sample of recent builds—each designed to clarify value, earn trust, and create a frictionless path to contact.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/contact">Start a project</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/services">
              See services <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </MotionSection>

      <MotionSection className="grid gap-6 lg:grid-cols-3" delay={0.1}>
        {caseStudies.map((study) => (
          <CaseStudyCard key={study.slug} study={study} />
        ))}
      </MotionSection>

      <MotionSection className="grid gap-6 rounded-3xl border border-surface-muted bg-surface/50 px-8 py-10 shadow-soft md:grid-cols-3" delay={0.18}>
        <div className="space-y-2">
          <p className="font-display text-xl font-semibold text-ink">Designed for clarity</p>
          <p className="text-sm text-ink-subtle">
            Structure, messaging, and hierarchy that make your value obvious in under 10 seconds.
          </p>
        </div>
        <div className="space-y-2">
          <p className="font-display text-xl font-semibold text-ink">Engineered to perform</p>
          <p className="text-sm text-ink-subtle">
            Fast load times, accessibility guardrails, and a clean component system that’s easy to maintain.
          </p>
        </div>
        <div className="space-y-2">
          <p className="font-display text-xl font-semibold text-ink">Built to convert</p>
          <p className="text-sm text-ink-subtle">
            CTAs, forms, and tracking built in from the start so you can iterate with confidence.
          </p>
        </div>
      </MotionSection>

      <CtaBanner />
    </div>
  );
}

