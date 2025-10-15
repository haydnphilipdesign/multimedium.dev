import Script from "next/script";
import Link from "next/link";
import { Building2, CheckCircle, ExternalLink, Network, Users } from "lucide-react";
import { MotionSection } from "@/components/motion-section";
import { Card, CardContent, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { createMetadata, buildBreadcrumbSchema } from "@/lib/seo";
import { caseStudies } from "@/content/case-studies";
import { HeroParallaxBackground } from "@/components/hero-parallax";

export const metadata = createMetadata({
  title: "Work & Case Studies",
  description:
    "Selected case studies from Multimedium.dev featuring HOA communities, hospitality, professional services, and AI-powered workflows.",
  path: "/work"
});

// Removed upcoming projects to avoid publishing speculative items.

export default function WorkPage() {
  const breadcrumb = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Work", path: "/work" }
  ]);

  return (
    <div className="container space-y-16 py-20">
      <Script
        id="breadcrumb-work"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <MotionSection className="relative mx-auto flex max-w-3xl flex-col gap-5 text-center">
        <HeroParallaxBackground />
        <Badge variant="secondary">Case Studies</Badge>
        <h1 className="font-display text-4xl font-semibold text-ink md:text-5xl">Outcomes for communities and growing brands</h1>
        <p className="text-lg text-ink-subtle">
          A sample of recent wins across HOA boards, Poconos communities, hospitality groups, and modern professional services.
        </p>
      </MotionSection>

      <MotionSection id="small-business" className="grid gap-6 md:grid-cols-2 xl:grid-cols-3" delay={0.15}>
        {caseStudies.map((project) => (
          <Card
            key={project.slug}
            className="relative flex h-full flex-col gap-6 rounded-3xl border border-surface-muted/80 bg-gradient-to-br from-surface to-surface-muted px-6 py-7 shadow-soft transition hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl"
          >
            <Link
              href={`/work/${project.slug}`}
              aria-label={`View case study: ${project.title}`}
              className="absolute inset-0 z-10 rounded-3xl"
            />
            <div className="flex h-full flex-col gap-5">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="rounded-full px-3 py-1 text-xs uppercase tracking-wide">
                    {project.industry}
                  </Badge>
                  <span className="text-xs uppercase tracking-wide text-ink-subtle">Case study</span>
                </div>
                <CardTitle className="text-2xl text-ink">{project.title}</CardTitle>
                <CardDescription className="text-sm text-ink-subtle leading-relaxed">
                  {project.summary}
                </CardDescription>
              </div>
              <CardContent className="space-y-4">
                <p className="text-sm text-ink">{project.results}</p>
                <ul className="space-y-2 text-sm text-ink">
                  {project.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.stack.map((item) => (
                    <Badge key={item} variant="secondary">
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="relative z-20 mt-auto flex flex-wrap gap-3 p-0">
                <Button asChild className="gap-2" variant="outline">
                  <a href={project.externalUrl} target="_blank" rel="noreferrer">
                    {project.ctaLabel}
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </a>
                </Button>
              </CardFooter>
            </div>
          </Card>
        ))}
      </MotionSection>

      <MotionSection className="grid gap-6 rounded-3xl border border-surface-muted bg-surface px-8 py-10 shadow-soft md:grid-cols-3" delay={0.25}>
        <div className="space-y-3">
          <Users className="h-8 w-8 text-brand" aria-hidden="true" />
          <h2 className="font-display text-xl font-semibold text-ink">Stakeholder-friendly process</h2>
          <p className="text-sm text-ink-subtle">
            Board members, marketing teams, and leadership stay aligned with weekly updates and transparent milestones.
          </p>
        </div>
        <div className="space-y-3">
          <Network className="h-8 w-8 text-brand" aria-hidden="true" />
          <h2 className="font-display text-xl font-semibold text-ink">Integrated toolchain</h2>
          <p className="text-sm text-ink-subtle">
            Connect to CRMs, property management platforms, and marketing automation tools you already rely on.
          </p>
        </div>
        <div className="space-y-3">
          <Building2 className="h-8 w-8 text-brand" aria-hidden="true" />
          <h2 className="font-display text-xl font-semibold text-ink">Built for longevity</h2>
          <p className="text-sm text-ink-subtle">
            Documentation, training, and support tiers ensure your team can update confidently—or call for help when needed.
          </p>
        </div>
      </MotionSection>
    </div>
  );
}



