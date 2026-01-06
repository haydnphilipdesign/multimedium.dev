import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Script from "next/script";
import { ArrowLeft, ArrowUpRight, CheckCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { caseStudies, getCaseStudyBySlug } from "@/content/case-studies";
import { createMetadata, buildBreadcrumbSchema } from "@/lib/seo";
import { buildPrismBackground } from "@/lib/visual";
import { MotionSection } from "@/components/motion-section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/cta-banner";

type PageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const study = getCaseStudyBySlug(params.slug);
  if (!study) {
    return createMetadata({
      title: "Case study not found",
      description: "The project you were looking for isn't available.",
      path: "/work"
    });
  }

  return createMetadata({
    title: `${study.title} — Case Study`,
    description: study.summary,
    path: `/work/${study.slug}`
  });
}

export default function CaseStudyPage({ params }: PageProps) {
  const study = getCaseStudyBySlug(params.slug);

  if (!study) {
    notFound();
  }

  const breadcrumb = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Work", path: "/work" },
    { name: study.title, path: `/work/${study.slug}` }
  ]);

  return (
    <div className="container space-y-14 py-16 md:py-20">
      <Script
        id={`breadcrumb-work-${study.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <MotionSection className="relative overflow-hidden rounded-3xl border border-surface-muted bg-surface/50 p-8 shadow-soft md:p-10">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-80"
          style={{ backgroundImage: buildPrismBackground(study.slug) }}
        />
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.10),rgba(0,0,0,0.35))] dark:bg-[linear-gradient(to_bottom,rgba(0,0,0,0.35),rgba(0,0,0,0.70))]" />

        <div className="relative space-y-6">
          <Link href="/work" className="inline-flex items-center gap-2 text-sm text-ink-subtle hover:text-ink">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to work
          </Link>

          <div className="space-y-4">
            <Badge variant="secondary" className="w-fit bg-surface/70">
              {study.industry}
            </Badge>
            <h1 className="max-w-3xl font-display text-4xl font-semibold leading-tight text-ink md:text-6xl">
              {study.title}
            </h1>
            <p className="max-w-3xl text-base text-ink-subtle md:text-lg">{study.summary}</p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/contact">Discuss a similar project</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={study.externalUrl} target="_blank" rel="noreferrer">
                View the live site <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="grid gap-4 md:grid-cols-3" delay={0.1}>
        {study.metrics.map((metric) => (
          <div
            key={`${study.slug}-${metric.label}`}
            className="rounded-3xl border border-surface-muted bg-surface/50 px-7 py-6 shadow-soft"
          >
            <p className="font-mono text-xs text-ink-subtle">{metric.label}</p>
            <p className="mt-3 font-display text-3xl font-semibold text-ink">{metric.value}</p>
          </div>
        ))}
      </MotionSection>

      <MotionSection className="grid gap-6 lg:grid-cols-2" delay={0.18}>
        <div className="rounded-3xl border border-surface-muted bg-surface/50 px-8 py-8 shadow-soft">
          <h2 className="font-display text-2xl font-semibold text-ink">The challenge</h2>
          <p className="mt-4 text-sm leading-relaxed text-ink-subtle">{study.problem}</p>
        </div>
        <div className="rounded-3xl border border-surface-muted bg-surface/50 px-8 py-8 shadow-soft">
          <h2 className="font-display text-2xl font-semibold text-ink">The solution</h2>
          <p className="mt-4 text-sm leading-relaxed text-ink-subtle">{study.solution}</p>
        </div>
      </MotionSection>

      <MotionSection className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]" delay={0.26}>
        <div className="rounded-3xl border border-surface-muted bg-surface/50 px-8 py-8 shadow-soft">
          <h2 className="font-display text-2xl font-semibold text-ink">What changed</h2>
          <p className="mt-4 text-sm leading-relaxed text-ink-subtle">{study.results}</p>
          <ul className="mt-6 space-y-3 text-sm text-ink">
            {study.highlights.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-surface-muted bg-surface/50 px-8 py-8 shadow-soft">
          <h2 className="font-display text-2xl font-semibold text-ink">Stack</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {study.stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-surface-muted bg-surface/50 px-3 py-1 text-xs text-ink-subtle"
              >
                {item}
              </span>
            ))}
          </div>
          <p className="mt-6 text-sm text-ink-subtle">
            Want a similar build? Email{" "}
            <a className="text-ink underline underline-offset-4" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>{" "}
            with your brief.
          </p>
        </div>
      </MotionSection>

      <CtaBanner />
    </div>
  );
}

