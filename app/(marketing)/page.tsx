import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle,
  MapPin,
  MessageSquareText,
  Rocket,
  Sparkles,
  TrendingUp,
  Users
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MotionSection } from "@/components/motion-section";
import { CtaBanner } from "@/components/cta-banner";
import { HeroParallaxBackground } from "@/components/hero-parallax";
import { caseStudies } from "@/content/case-studies";

const audienceSegments = [
  {
    tag: "Business",
    title: "Small Business Websites",
    description: "Look established, book more projects, and capture leads automatically—without hiring an in-house team.",
    highlights: ["Messaging workshop & brand positioning", "SEO-ready architecture from day one", "Conversion-focused design & analytics"],
    primaryCta: { label: "Explore Business Solutions", href: "/small-business" },
    secondaryCta: { label: "See case studies", href: "/work#small-business" }
  },
  {
    tag: "Organizations",
    title: "HOA Portals & Community Sites",
    description: "Give residents a single, secure home for documents, alerts, and support—even when board volunteers rotate.",
    highlights: ["Resident accounts with approvals", "Document concierge service", "Emergency + seasonal announcements"],
    primaryCta: { label: "See HOA Packages", href: "/hoa" },
    secondaryCta: { label: "View HOA features", href: "/pricing#hoa" }
  }
];
const proofHighlights = [
  {
    icon: TrendingUp,
    value: "32%",
    label: "lift in qualified bookings within 90 days",
    detail: "Average client result after website refresh"
  },
  {
    icon: Sparkles,
    value: "4-6 weeks",
    label: "average launch timeline for most projects",
    detail: "Strategy, design, development, QA"
  },
  {
    icon: Users,
    value: "95+",
    label: "Lighthouse performance score on every build",
    detail: "Fast, accessible, SEO-ready from day one"
  }
];

// Limit testimonials to the three featured case study companies
const testimonials = caseStudies.map((study) => ({
  quote: study.results,
  name: study.title,
  role: `Case study — ${study.industry}`
}));


const serviceTracks = [
  {
    kicker: "Launch & Refresh",
    title: "Websites shaped around conversions",
    summary:
      "Discovery, messaging, and high-fidelity design rolled straight into a type-safe Next.js build.",
    bullets: ["Competitive + audience research", "Component library + CMS setup", "Accessibility + performance QA"],
    stat: "Typical timeline: 4–6 weeks",
    href: "/services#capabilities"
  },
  {
    kicker: "Keep Growing",
    title: "Marketing & SEO continuums",
    summary:
      "Monthly and quarterly sprints that mix SEO, landing pages, and analytics so you always know what’s working.",
    bullets: ["Keyword research & editorial calendar", "Conversion experiments + reporting", "Marketing automation tune-ups"],
    stat: "Ideal cadence: monthly or quarterly",
    href: "/services#capabilities"
  },
  {
    kicker: "Automation & Portals",
    title: "AI chat, resident hubs, and internal tools",
    summary:
      "Practical automation layered onto your workflows—no gimmicks, just faster responses and happier users.",
    bullets: ["Resident + admin permissions", "Chat concierge & FAQ training", "Workflow automation + CRM sync"],
    stat: "Best for HOAs + multi-location teams",
    href: "/services#hoa"
  }
];

const process = [
  {
    title: "Discover & Plan",
    description:
      "Stakeholder interviews, analytics review, and success metrics that guide every design and development decision.",
    icon: Sparkles
  },
  {
    title: "Design & Preview",
    description:
      "Interactive prototypes with real copy so your team can react quickly and align before a line of code ships.",
    icon: MessageSquareText
  },
  {
    title: "Build, Launch, Grow",
    description:
      "Production-ready Next.js build, launch checklist, and ongoing care that keeps the experience sharp.",
    icon: Rocket
  }
];

const localSupport = [
  {
    icon: MapPin,
    title: "Regional coverage",
    description: "On-site sessions across the Poconos, Lehigh Valley, Scranton/WB, and Northern NJ."
  },
  {
    icon: MessageSquareText,
    title: "Responsive communication",
    description: "Same-day email replies and shared Slack for active clients—no ticket purgatory."
  },
  {
    icon: Users,
    title: "Trusted partners",
    description: "Collaborations with local creatives, photographers, and drone teams when you need extra firepower."
  }
];

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <HeroParallaxBackground />
      <div className="container flex flex-col gap-16 pb-20 pt-16 md:pt-24">
        <MotionSection className="relative grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 right-[-6rem] hidden h-72 w-72 rounded-full bg-brand/25 blur-3xl animate-float-slow lg:block"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-36 left-[-4rem] hidden h-56 w-56 rounded-full bg-indigo-400/25 blur-2xl animate-pulse-soft md:block"
          />
          <div className="space-y-7">
            <Badge className="w-fit" variant="secondary">
              Professional Web Design for Growing Businesses
            </Badge>
            <h1 className="max-w-2xl font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">
              Professional websites that turn visitors into customers—and make your business look established.
            </h1>
            <p className="max-w-2xl text-lg text-ink-subtle md:text-xl">
              Full-service strategy, design, development, and marketing for businesses across the Poconos and NEPA—from service providers to retailers to professional firms.
            </p>
            <ul className="grid gap-3 text-base text-ink">
              <li className="group flex items-start gap-3 rounded-xl px-3 py-2 transition-all duration-300 hover:-translate-y-1 hover:bg-surface-muted/70">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand transition-colors duration-300 group-hover:text-brand-foreground" aria-hidden="true" />
                <span>Designer, developer, and marketer in one—no agency handoffs or finger-pointing.</span>
              </li>
              <li className="group flex items-start gap-3 rounded-xl px-3 py-2 transition-all duration-300 hover:-translate-y-1 hover:bg-surface-muted/70">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand transition-colors duration-300 group-hover:text-brand-foreground" aria-hidden="true" />
                <span>Launch in 4-6 weeks with conversion-optimized design, automations, and SEO foundations.</span>
              </li>
              <li className="group flex items-start gap-3 rounded-xl px-3 py-2 transition-all duration-300 hover:-translate-y-1 hover:bg-surface-muted/70">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand transition-colors duration-300 group-hover:text-brand-foreground" aria-hidden="true" />
                <span>Local-first support with on-site workshops across NEPA & the Poconos when you need them.</span>
              </li>
            </ul>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/contact">Book a Strategy Call</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/work">See recent projects</Link>
              </Button>
            </div>
          </div>
          <div className="relative flex flex-col items-center gap-5">
            <div className="relative h-80 w-full max-w-[22rem] overflow-hidden rounded-3xl border border-surface-muted shadow-soft">
              <Image
                src="/quotes/4e8cb72c-0f2d-4997-871e-eb3d87bc3465.png"
                alt="Business card quote artwork"
                fill
                priority
                className="object-contain object-center"
              />
            </div>
          </div>
        </MotionSection>
        <MotionSection className="rounded-3xl border border-brand/15 bg-brand/5 px-8 py-8 shadow-soft" delay={0.05}>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3 lg:max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-brand">Community & HOA option</p>
              <h2 className="font-display text-2xl font-semibold text-ink">30-day launch for associations & community organizations</h2>
              <p className="text-sm text-ink-subtle">
                If you’re modernizing an HOA, a resident-first portal keeps bylaws, dues, amenities, and emergency updates in one reliable place. Here’s how the first month stays on track.
              </p>
            </div>
            <ol className="grid flex-1 gap-3 text-sm text-ink md:grid-cols-2">
              <li className="rounded-2xl border border-surface-muted bg-surface px-4 py-4 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:border-brand/30 hover:bg-brand/5">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand">Week 1</p>
                <p className="mt-2 text-ink">Board kickoff workshop, content audit, and resident feedback review.</p>
              </li>
              <li className="rounded-2xl border border-surface-muted bg-surface px-4 py-4 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:border-brand/30 hover:bg-brand/5">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand">Week 2</p>
                <p className="mt-2 text-ink">Interactive portal prototype with your association’s branding and navigation preview.</p>
              </li>
              <li className="rounded-2xl border border-surface-muted bg-surface px-4 py-4 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:border-brand/30 hover:bg-brand/5">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand">Week 3</p>
                <p className="mt-2 text-ink">Next.js build, resident account import, and automated alerts wiring.</p>
              </li>
              <li className="rounded-2xl border border-surface-muted bg-surface px-4 py-4 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:border-brand/30 hover:bg-brand/5">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand">Week 4</p>
                <p className="mt-2 text-ink">Board walkthrough, resident communications toolkit, and go-live checklist.</p>
              </li>
            </ol>
          </div>
        </MotionSection>
        <MotionSection className="relative overflow-hidden rounded-3xl border border-surface-muted bg-surface px-8 py-8 shadow-soft" delay={0.07}>
          <div
            aria-hidden
            className="pointer-events-none absolute -top-28 left-[-5rem] hidden h-64 w-64 rounded-full bg-amber-300/25 blur-3xl animate-float-slow md:block"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 right-[-6rem] hidden h-56 w-56 rounded-full bg-brand/20 blur-3xl animate-pulse-soft lg:block"
          />
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3 lg:max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-brand">Business growth sprint</p>
              <h2 className="font-display text-2xl font-semibold text-ink">A 4-week website refresh that lifts bookings fast</h2>
              <p className="text-sm text-ink-subtle">
                Service businesses, retailers, and professional firms need leads flowing while the site evolves. This sprint keeps marketing live, tunes messaging, and wires automation so every inquiry lands in the right place.
              </p>
            </div>
            <ol className="grid flex-1 gap-3 text-sm text-ink md:grid-cols-2">
              <li className="rounded-2xl border border-surface-muted bg-surface px-4 py-4 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:border-brand/30 hover:bg-brand/5">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand">Week 1</p>
                <p className="mt-2 text-ink">Positioning workshop, analytics baseline, and conversion goal alignment.</p>
              </li>
              <li className="rounded-2xl border border-surface-muted bg-surface px-4 py-4 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:border-brand/30 hover:bg-brand/5">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand">Week 2</p>
                <p className="mt-2 text-ink">Homepage and services redesign with copy and visual hierarchy tuned for trust.</p>
              </li>
              <li className="rounded-2xl border border-surface-muted bg-surface px-4 py-4 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:border-brand/30 hover:bg-brand/5">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand">Week 3</p>
                <p className="mt-2 text-ink">Lead capture upgrades, CRM and automation wiring, plus a targeted landing page launch.</p>
              </li>
              <li className="rounded-2xl border border-surface-muted bg-surface px-4 py-4 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:border-brand/30 hover:bg-brand/5">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand">Week 4</p>
                <p className="mt-2 text-ink">Performance dashboard walkthrough and next-quarter experiment backlog.</p>
              </li>
            </ol>
          </div>
        </MotionSection>

        <MotionSection className="rounded-3xl border border-surface-muted bg-surface px-8 py-10 shadow-soft" delay={0.1}>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-lg space-y-3">
              <p className="text-sm font-semibold uppercase tracking-wide text-brand">Proof in the numbers</p>
              <h2 className="font-display text-3xl font-semibold text-ink">Results you can reference in your next team meeting</h2>
              <p className="text-base text-ink-subtle">Every engagement ships with measurable outcomes—tracked and reported so you always know where momentum is coming from.</p>
            </div>
            <div className="grid w-full gap-4 md:grid-cols-3">
              {proofHighlights.map((item) => (
                <Card key={item.label} className="group border border-surface-muted/70 bg-surface-muted/60 p-6 shadow-none transition-all duration-300 hover:-translate-y-2 hover:border-brand/30 hover:shadow-xl">
                <div aria-hidden className="pointer-events-none absolute -top-16 right-[-2rem] h-24 w-24 rounded-full bg-brand/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />                  <div className="flex items-center gap-3 text-brand">
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                    <span className="text-xs uppercase tracking-wide">Snapshot</span>
                  </div>
                  <p className="mt-4 font-display text-3xl font-semibold text-ink">{item.value}</p>
                  <p className="text-sm text-ink">{item.label}</p>
                  <p className="mt-2 text-xs text-ink-subtle">{item.detail}</p>
                </Card>
              ))}
            </div>
          </div>
        </MotionSection>

        <MotionSection className="grid gap-6 md:grid-cols-2" delay={0.15}>
          {audienceSegments.map((segment) => (
            <Card key={segment.title} className="group relative flex h-full flex-col gap-5 overflow-hidden border border-surface-muted/70 bg-surface shadow-soft transition-all duration-300 hover:-translate-y-2 hover:border-brand/30 hover:shadow-xl">
            <div aria-hidden className="pointer-events-none absolute -top-20 right-[-3rem] h-32 w-32 rounded-full bg-brand/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />              <CardHeader className="space-y-3">
                <Badge variant="outline" className="w-fit border-brand/20 text-brand">
                  {segment.tag}
                </Badge>
                <CardTitle>{segment.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed text-ink">{segment.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-ink">
                  {segment.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex flex-col gap-2 pt-0 sm:flex-row">
                <Button asChild size="sm">
                  <Link href={segment.primaryCta.href}>{segment.primaryCta.label}</Link>
                </Button>
                <Button asChild size="sm" variant="ghost" className="justify-start px-0 text-brand">
                  <Link href={segment.secondaryCta.href} className="inline-flex items-center gap-1">
                    {segment.secondaryCta.label}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </MotionSection>

        <MotionSection className="space-y-10" delay={0.2}>
          <div className="flex flex-col gap-3 text-center">
            <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">Pick the track that fits your next milestone</h2>
            <p className="mx-auto max-w-2xl text-base text-ink-subtle md:text-lg">
              Whether you need a fast relaunch, ongoing marketing muscle, or a resident portal with concierge support, the approach flexes to your team’s bandwidth.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {serviceTracks.map((track) => (
              <Card key={track.title} className="group relative flex h-full flex-col overflow-hidden border border-surface-muted bg-surface shadow-soft transition-all duration-300 hover:-translate-y-2 hover:border-brand/30 hover:shadow-xl">
            <div aria-hidden className="pointer-events-none absolute -top-20 right-[-3rem] h-28 w-28 rounded-full bg-brand/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />                <CardHeader className="space-y-4">
                  <Badge variant="outline" className="w-fit border-brand/30 text-brand">
                    {track.kicker}
                  </Badge>
                  <CardTitle className="text-2xl text-ink">{track.title}</CardTitle>
                  <CardDescription className="text-sm text-ink-subtle">{track.summary}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 space-y-3 text-sm text-ink">
                  {track.bullets.map((bullet) => (
                    <div key={bullet} className="flex items-start gap-2">
                      <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </CardContent>
                <CardFooter className="flex items-center justify-between text-sm text-ink-subtle">
                  <span>{track.stat}</span>
                  <Button asChild variant="ghost" className="gap-1 px-0 text-brand">
                    <Link href={track.href}>
                      Learn more
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </MotionSection>

        <MotionSection className="space-y-8 rounded-3xl border border-brand/15 bg-brand/5 px-8 py-12 shadow-soft" delay={0.27}>
          <div className="flex flex-col gap-3 text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand">Kind words</p>
            <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">Trusted by growing businesses across NEPA</h2>
            <p className="mx-auto max-w-2xl text-base text-ink-subtle">Real clients, real results. Ask for a reference—happy businesses are ready to share their experience.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <Card key={item.name} className="h-full border border-brand/10 bg-surface px-6 py-7 shadow-soft">
                <p className="text-base italic text-ink">“{item.quote}”</p>
                <div className="mt-6 text-sm font-semibold text-ink">{item.name}</div>
                <div className="text-sm text-ink-subtle">{item.role}</div>
              </Card>
            ))}
          </div>
        </MotionSection>

        <MotionSection className="space-y-6" delay={0.32}>
          <div className="flex flex-col gap-3 text-center">
            <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">A guided process that keeps momentum</h2>
            <p className="mx-auto max-w-2xl text-base text-ink-subtle md:text-lg">No guesswork—each phase ships with deliverables, approvals, and a clear next step so your team stays aligned.</p>
          </div>
          <ol className="grid gap-6 md:grid-cols-3">
            {process.map((step, index) => (
              <li
                key={step.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-surface-muted bg-gradient-to-b from-surface to-surface-muted px-6 py-7 shadow-soft"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-brand/30 bg-brand/10 text-xs font-semibold uppercase tracking-wide text-brand">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex items-center gap-2">
                    <step.icon className="h-5 w-5 text-brand" aria-hidden="true" />
                    <p className="text-sm font-semibold uppercase tracking-wide text-ink">{step.title}</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-ink-subtle">{step.description}</p>
              </li>
            ))}
          </ol>
        </MotionSection>

        <MotionSection className="rounded-3xl border border-surface-muted bg-surface px-8 py-12 shadow-soft" delay={0.38}>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-wide text-brand">Local-first support</p>
              <h2 className="font-display text-3xl font-semibold text-ink">Show up in person when it matters, stay close the rest of the time</h2>
              <p className="text-base text-ink-subtle">
                Discovery workshops, team presentations, and content days can happen on-site. Between visits, you get responsive communication, Loom updates, and dashboards you can share with stakeholders.
              </p>
            </div>
            <div className="grid gap-4 text-sm text-ink md:grid-cols-2">
              {localSupport.map((item) => (
                <Card key={item.title} className="border border-surface-muted bg-surface-muted px-5 py-5 shadow-none transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-3 text-brand">
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                    <p className="text-xs uppercase tracking-wide">{item.title}</p>
                  </div>
                  <p className="mt-3 text-sm text-ink-subtle">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </MotionSection>

        <CtaBanner />
      </div>
    </div>
  );
}






















