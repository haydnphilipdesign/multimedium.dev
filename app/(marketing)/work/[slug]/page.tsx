import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Script from "next/script";
import { CheckCircle, ExternalLink, TrendingUp } from "lucide-react";
import { caseStudies, getCaseStudyBySlug } from "@/content/case-studies";
import { createMetadata, buildBreadcrumbSchema } from "@/lib/seo";
import { MotionSection } from "@/components/motion-section";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export async function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

type PageProps = {
  params: {
    slug: string;
  };
};

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
    title: `${study.title} Case Study`,
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
    <div className="container space-y-16 py-20">
      <Script
        id={`breadcrumb-work-${study.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <MotionSection className="space-y-5 text-center">
        <Badge variant="secondary" className="mx-auto w-fit px-3 py-1 text-xs uppercase tracking-wide">
          {study.industry}
        </Badge>
        <h1 className="font-display text-4xl font-semibold text-ink md:text-5xl">{study.title}</h1>
        <p className="mx-auto max-w-3xl text-lg text-ink-subtle">{study.summary}</p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/contact?type=smb">Discuss a similar build</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={study.externalUrl} target="_blank" rel="noreferrer">
              See the live site
              <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>
          </Button>
        </div>
      </MotionSection>

      <MotionSection className="grid gap-6 md:grid-cols-3" delay={0.1}>
        {study.metrics.map((metric) => (
          <Card key={`${study.slug}-${metric.label}`} className="space-y-2 rounded-3xl border border-surface-muted bg-surface px-6 py-6 shadow-soft">
            <div className="flex items-center gap-2 text-sm font-semibold text-brand">
              <TrendingUp className="h-4 w-4" aria-hidden="true" />
              {metric.label}
            </div>
            <p className="text-2xl font-semibold text-ink">{metric.value}</p>
          </Card>
        ))}
      </MotionSection>

      <MotionSection className="grid gap-8 rounded-3xl border border-surface-muted bg-surface px-8 py-10 shadow-soft lg:grid-cols-2" delay={0.18}>
        <div className="space-y-5">
          <h2 className="font-display text-2xl font-semibold text-ink">The challenge</h2>
          <p className="text-sm text-ink-subtle">{study.problem}</p>
        </div>
        <div className="space-y-5">
          <h2 className="font-display text-2xl font-semibold text-ink">Solution</h2>
          <p className="text-sm text-ink-subtle">{study.solution}</p>
        </div>
      </MotionSection>

      <MotionSection className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]" delay={0.26}>
        <Card className="space-y-4 rounded-3xl border border-brand/15 bg-brand/5 px-8 py-10 shadow-soft">
          <h2 className="font-display text-2xl font-semibold text-ink">Results in practice</h2>
          <p className="text-sm text-ink">{study.results}</p>
          <ul className="space-y-2 text-sm text-ink">
            {study.highlights.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </Card>
        <Card className="space-y-4 rounded-3xl border border-surface-muted bg-surface px-8 py-10 shadow-soft">
          <h2 className="font-display text-xl font-semibold text-ink">Tooling & integrations</h2>
          <ul className="grid gap-2 text-sm text-ink">
            {study.stack.map((item) => (
              <li key={item} className="rounded-xl border border-surface-muted bg-surface-muted px-4 py-2">{item}</li>
            ))}
          </ul>
        </Card>
      </MotionSection>

      <MotionSection className="rounded-3xl border border-brand/10 bg-brand/5 px-8 py-12 text-center shadow-soft" delay={0.34}>
        <h2 className="font-display text-3xl font-semibold text-ink">Have a similar project in mind?</h2>
        <p className="mt-4 text-base text-ink-subtle">
          Book a quick consult with Haydn to map out your roadmap, or email {siteConfig.email} with your brief.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/contact">Start a project conversation</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={`mailto:${siteConfig.email}`}>Email {siteConfig.email}</a>
          </Button>
        </div>
      </MotionSection>
    </div>
  );
}

