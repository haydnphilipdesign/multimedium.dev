import Link from "next/link";
import { ArrowRight, BadgeCheck, BrainCircuit, Sparkles, Zap } from "lucide-react";
import { siteConfig } from "@/config/site";
import { MotionSection } from "@/components/motion-section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/cta-banner";
import { caseStudies } from "@/content/case-studies";
import { CaseStudyCard } from "@/components/case-study-card";

const proof = [
  {
    icon: Zap,
    value: "4–6 weeks",
    label: "typical launch timeline",
    detail: "Strategy → design → build → QA"
  },
  {
    icon: BadgeCheck,
    value: "95+",
    label: "Lighthouse scores",
    detail: "Performance + accessibility"
  },
  {
    icon: BrainCircuit,
    value: "Systems",
    label: "that scale with you",
    detail: "Design system + components"
  }
];

const pillars = [
  {
    title: "Design that wins trust fast",
    description:
      "Messaging, layout, and UI decisions built around clarity, credibility, and the next click."
  },
  {
    title: "Development that stays fast",
    description:
      "Modern Next.js builds with clean architecture, solid SEO foundations, and a smooth editing workflow."
  },
  {
    title: "Conversion, SEO, and iteration",
    description:
      "Analytics, experiments, and landing pages that turn traffic into leads you actually want."
  }
];

const process = [
  {
    step: "01",
    title: "Discovery & positioning",
    description: "Get crisp on audience, offers, objections, and what “success” means for you."
  },
  {
    step: "02",
    title: "Design system + pages",
    description: "High-fidelity design with real copy, then components that keep everything consistent."
  },
  {
    step: "03",
    title: "Build, launch, iterate",
    description: "Ship fast, QA hard, instrument analytics, then keep improving what converts."
  }
];

export default function HomePage() {
  return (
    <div className="container space-y-20 py-16 md:py-20">
      <MotionSection className="relative overflow-hidden rounded-3xl border border-surface-muted bg-surface/50 px-8 py-14 shadow-soft md:px-12 md:py-16">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgb(var(--brand-2)_/_0.20),transparent_55%)]" />
        <div aria-hidden className="pointer-events-none absolute -top-24 right-[-6rem] h-72 w-72 rounded-full bg-brand/20 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -bottom-24 left-[-6rem] h-72 w-72 rounded-full bg-brand-3/20 blur-3xl" />

        <div className="relative mx-auto flex max-w-4xl flex-col gap-6">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="secondary" className="bg-surface/60">
              {siteConfig.owner} • {siteConfig.location.city}, {siteConfig.location.region}
            </Badge>
            <span className="inline-flex items-center gap-2 rounded-full border border-surface-muted bg-surface/50 px-4 py-1 text-xs text-ink-subtle">
              <Sparkles className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
              Available for new builds + redesigns
            </span>
          </div>

          <h1 className="font-display text-4xl font-semibold leading-tight text-ink md:text-6xl md:leading-[1.05]">
            Websites that{" "}
            <span className="bg-gradient-to-r from-brand via-brand-2 to-brand-3 bg-clip-text text-transparent">
              look premium
            </span>{" "}
            and convert.
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-ink-subtle md:text-lg">
            Multimedium is a designer-developer practice built for teams that need a site that feels expensive, loads fast, and drives inquiries. No handoffs—strategy, design, and engineering shipped as one system.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="shadow-soft">
              <Link href="/contact">Start a project</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/work">
                View work <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {proof.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-surface-muted bg-surface/40 px-5 py-4"
              >
                <div className="flex items-center gap-2 text-sm font-semibold text-ink">
                  <item.icon className="h-4 w-4 text-brand" aria-hidden="true" />
                  {item.value}
                </div>
                <p className="mt-1 text-sm text-ink-subtle">{item.label}</p>
                <p className="mt-2 text-xs text-ink-subtle/90">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="space-y-6" delay={0.08}>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-2">
            <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">Selected work</h2>
            <p className="text-sm text-ink-subtle md:text-base">
              A few recent builds—each one designed to earn trust, communicate value, and make contacting you feel like the obvious next step.
            </p>
          </div>
          <Button asChild variant="ghost" className="w-fit px-0 text-brand hover:bg-transparent hover:text-ink">
            <Link href="/work">
              Browse case studies <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
      </MotionSection>

      <MotionSection className="grid gap-10 rounded-3xl border border-surface-muted bg-surface/50 px-8 py-12 shadow-soft lg:grid-cols-[1.15fr_0.85fr]" delay={0.16}>
        <div className="space-y-4">
          <Badge className="w-fit">What I build</Badge>
          <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
            A portfolio-grade site that still behaves like a sales machine
          </h2>
          <p className="max-w-2xl text-base text-ink-subtle">
            You get a clean system—not a one-off page. Everything is built to be edited, extended, and iterated without the site collapsing into chaos.
          </p>
        </div>
        <div className="grid gap-3">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="rounded-2xl border border-surface-muted bg-surface/40 px-6 py-5">
              <p className="font-semibold text-ink">{pillar.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-subtle">{pillar.description}</p>
            </div>
          ))}
        </div>
      </MotionSection>

      <MotionSection className="space-y-6" delay={0.24}>
        <div className="space-y-3">
          <Badge variant="secondary" className="w-fit bg-surface/60">
            Process
          </Badge>
          <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">Fast pace. Calm execution.</h2>
          <p className="max-w-2xl text-base text-ink-subtle">
            Weekly checkpoints, clear deliverables, and a build that’s performance-ready from day one.
          </p>
        </div>
        <ol className="grid gap-6 md:grid-cols-3">
          {process.map((item) => (
            <li key={item.step} className="rounded-3xl border border-surface-muted bg-surface/50 px-7 py-7 shadow-soft">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-ink-subtle">{item.step}</span>
                <span className="h-2 w-2 rounded-full bg-gradient-to-br from-brand via-brand-2 to-brand-3" aria-hidden />
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-subtle">{item.description}</p>
            </li>
          ))}
        </ol>
      </MotionSection>

      <CtaBanner />
    </div>
  );
}

