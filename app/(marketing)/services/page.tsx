import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BarChart3,
  Cog,
  Layout,
  LineChart,
  ShieldCheck,
  Sparkles,
  Workflow
} from "lucide-react";
import Script from "next/script";
import { MotionSection } from "@/components/motion-section";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { createMetadata, buildBreadcrumbSchema } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Services",
  description:
    "Strategy, design, development, marketing, SEO, and AI integrations led by Haydn at Multimedium.dev. Built for SMBs and HOA communities.",
  path: "/services"
});

const serviceSections = [
  {
    title: "Web Strategy & Design",
    icon: Layout,
    description: "Shape a clear story, navigation, and visual language around what makes you the safe choice.",
    outcome: "Clients typically approve the final concept in one round because they saw real copy from day one.",
    bullets: ["Stakeholder + audience interviews", "Messaging + conversion plan", "Component-based design system"],
    cta: { label: "See design approach", href: "/work" }
  },
  {
    title: "Next.js Development",
    icon: Workflow,
    description: "Type-safe, maintainable builds with analytics, SEO, and content tooling wired in from the start.",
    outcome: "Lighthouse 90+ and CMS onboarding ready before launch—no scramble after go-live.",
    bullets: ["App Router architecture", "Sanity / Contentful / Storyblok setup", "Testing + deployment playbooks"],
    cta: { label: "Review build checklist", href: "/pricing#plans" }
  },
  {
    title: "Marketing & SEO Sprints",
    icon: LineChart,
    description: "Fill the funnel with the right traffic using quarterly and monthly experiments you can measure.",
    outcome: "Typical retainer clients see 20–35% growth in form submissions within the first three months.",
    bullets: ["Keyword + content roadmap", "Landing pages + conversion copy", "Analytics dashboards + reporting"],
    cta: { label: "Explore growth plans", href: "/pricing" }
  },
  {
    title: "Automation & Portals",
    icon: Sparkles,
    description: "Bring AI and workflow automation into resident support, lead nurture, or internal knowledge bases.",
    outcome: "Boards and teams save 5–10 hours/week by letting bots handle FAQs and routing tasks.",
    bullets: ["AI chat concierge", "CRM + ticketing integrations", "Governance and guardrail playbooks"],
    cta: { label: "Request a demo", href: "/contact?type=hoa" }
  }
];

const engagementHighlights = [
  {
    title: "Strategy, design, build—no handoffs",
    description: "One partner from roadmap to launch, so your board never loses context or waits on another vendor.",
    icon: Workflow
  },
  {
    title: "Local commitment",
    description: "On-site workshops across the Poconos, Lehigh Valley, and Northern NJ, plus responsive virtual support.",
    icon: ShieldCheck
  },
  {
    title: "Measurable outcomes",
    description: "Dashboards and review sessions that tie traffic and engagement to business or resident goals—and make board updates effortless.",
    icon: BarChart3
  }
];

const audienceMatrix = [
  {
    audience: "Small businesses",
    priorities: ["Conversion-ready website", "Local SEO foundation", "Marketing automation basics"],
    recommended: ["Web Strategy & Design", "Next.js Development", "Marketing & SEO Sprints"]
  },
  {
    audience: "HOA & associations",
    priorities: ["Resident portal", "Document concierge", "Emergency communications", "Board-ready reporting"],
    recommended: ["Next.js Development", "Automation & Portals", "Marketing & SEO Sprints"]
  },
  {
    audience: "Agencies & partner teams",
    priorities: ["Component libraries", "Complex integrations", "White-label collaboration"],
    recommended: ["Web Strategy & Design", "Next.js Development", "Automation & Portals"]
  }
];


export default function ServicesPage() {
  const breadcrumb = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" }
  ]);

  return (
    <div className="container space-y-20 py-20">
      <Script
        id="breadcrumb-services"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <MotionSection className="grid items-start gap-12 rounded-3xl border border-surface-muted bg-surface px-10 py-12 shadow-soft md:grid-cols-[1.2fr_1fr]">
        <div className="space-y-6">
          <Badge variant="secondary">Services & Retainers</Badge>
          <h1 className="font-display text-4xl font-semibold text-ink md:text-5xl">
            Strategy, design, development, and growth for HOA boards and small business teams with one accountable partner
          </h1>
          <p className="text-lg text-ink-subtle">
            Multimedium.dev plans, builds, and maintains digital experiences for small businesses, HOAs, and the teams who support them—especially organizations that need concierge communication across stakeholders. Every engagement ships with messaging, design, build, training, and performance reviews your stakeholders can approve quickly.
          </p>
          <ul className="grid gap-3 text-base text-ink">
            <li className="group flex items-start gap-3 rounded-xl px-3 py-2 transition-all duration-300 hover:-translate-y-1 hover:bg-surface-muted/70">
              <Sparkles className="mt-1 h-5 w-5 text-brand" aria-hidden="true" />
              <span>Hands-on discovery and copywriting so approvals happen faster.</span>
            </li>
            <li className="group flex items-start gap-3 rounded-xl px-3 py-2 transition-all duration-300 hover:-translate-y-1 hover:bg-surface-muted/70">
              <Workflow className="mt-1 h-5 w-5 text-brand" aria-hidden="true" />
              <span>Next.js builds with performance, accessibility, and CMS workflows ready before launch.</span>
            </li>
            <li className="group flex items-start gap-3 rounded-xl px-3 py-2 transition-all duration-300 hover:-translate-y-1 hover:bg-surface-muted/70">
              <LineChart className="mt-1 h-5 w-5 text-brand" aria-hidden="true" />
              <span>Marketing, SEO, and automation sprints that show clear metrics in every review.</span>
            </li>
          </ul>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/contact">Book a strategy call</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/pricing">Compare pricing options</Link>
            </Button>
          </div>
        </div>
        <div className="space-y-5">
          <div className="relative h-72 overflow-hidden rounded-3xl border border-surface-muted shadow-soft">
            <Image
              src="/quotes/4a019746-6780-4308-a0b7-6477130c6942.png"
              alt="Business card quote artwork"
              fill
              priority
              className="object-contain object-center"
            />
          </div>
          <Card className="border border-brand/20 bg-brand/5 px-5 py-4 text-sm text-ink">
            <p className="font-semibold text-brand">Where we collaborate</p>
            <p className="mt-1 text-ink-subtle">On-site workshops across the Poconos, Lehigh Valley, and Northern NJ. Remote support for teams across the U.S.</p>
          </Card>
        </div>
      </MotionSection>

      <nav className="sticky top-16 z-40 -mb-6 border-y border-surface-muted/70 bg-surface/80 py-2 backdrop-blur supports-[backdrop-filter]:bg-surface/60 relative">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,_rgba(37,99,235,0.08),_transparent_30%,_transparent_70%,_rgba(37,99,235,0.08))]" />
        <ul className="container flex flex-wrap gap-4 text-xs font-semibold uppercase tracking-wide text-ink-subtle">
          <li><a href="#services" className="hover:text-brand">Services</a></li>
          <li><a href="#engagement" className="hover:text-brand">Why Multimedium.dev</a></li>
          <li><a href="#audiences" className="hover:text-brand">Tailored Programs</a></li>
          <li><a href="#hoa" className="hover:text-brand">HOA Concierge</a></li>
          <li><a href="#tech" className="hover:text-brand">Technology</a></li>
        </ul>
      </nav>

      <MotionSection id="services" className="grid gap-8 lg:grid-cols-2" delay={0.12}>
        {serviceSections.map((service) => (
          <Card key={service.title} className="flex h-full flex-col border border-surface-muted bg-surface shadow-soft">
            <CardHeader className="space-y-4">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand">
                <service.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="space-y-2">
                <CardTitle className="text-2xl text-ink">{service.title}</CardTitle>
                <CardDescription className="text-sm text-ink-subtle">{service.description}</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-ink">
              <p className="rounded-2xl border border-surface-muted bg-surface-muted px-4 py-3 text-ink-subtle">{service.outcome}</p>
              <ul className="space-y-3">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <Cog className="mt-1 h-4 w-4 text-brand" aria-hidden="true" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="pt-0">
              <Button asChild variant="link" className="px-0">
                <Link href={service.cta.href} className="inline-flex items-center gap-2 text-brand">
                  {service.cta.label}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </MotionSection>

      <MotionSection id="engagement" className="rounded-3xl border border-brand/15 bg-brand/5 px-8 py-12 shadow-soft" delay={0.18}>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl space-y-4">
            <Badge variant="secondary" className="w-fit text-brand">Why Multimedium.dev</Badge>
            <h2 className="font-display text-3xl font-semibold text-ink">Full-stack delivery built for busy local teams</h2>
            <p className="text-base text-ink-subtle">
              Skip the agency shuffle. You get one point of contact who handles discovery, design, development, and marketing sprints—and shows up to your stakeholder or leadership meetings if that’s what the project needs.
            </p>
          </div>
          <div className="grid w-full gap-4 md:grid-cols-3">
            {engagementHighlights.map((item) => (
              <Card key={item.title} className="border border-brand/20 bg-surface px-5 py-6 shadow-soft">
                <item.icon className="h-6 w-6 text-brand" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-subtle">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection id="audiences" className="space-y-8 rounded-3xl border border-surface-muted bg-surface px-8 py-10 shadow-soft" delay={0.22}>
        <div className="space-y-5">
          <Badge variant="outline" className="w-fit border-brand/20 text-brand">Tailored programs</Badge>
          <h2 className="font-display text-3xl font-semibold text-ink">Choose the path that fits your stakeholders</h2>
          <p className="text-base text-ink-subtle">
            Each audience gets a roadmap, deliverables, and success metrics aligned to their priorities. When you work across multiple audiences, we blend the packages and cadence.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <div className="space-y-4 text-sm text-ink">
            {audienceMatrix.map((item) => (
              <Card key={item.audience} className="flex flex-col gap-4 border border-surface-muted/70 bg-surface-muted px-5 py-5">
                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold text-ink">{item.audience}</p>
                  <ArrowRight className="h-4 w-4 text-brand" aria-hidden="true" />
                </div>
                <div className="grid gap-3 md:grid-cols-2">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-ink-subtle">Priorities</p>
                    <ul className="mt-2 space-y-1.5 text-ink">
                      {item.priorities.map((priority) => (
                        <li key={priority} className="flex items-start gap-2">
                          <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
                          {priority}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-ink-subtle">Recommended services</p>
                    <ul className="mt-2 space-y-1.5 text-ink">
                      {item.recommended.map((rec) => (
                        <li key={rec}>{rec}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <Card className="border border-brand/20 bg-brand/5 px-6 py-6 shadow-soft">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-ink">Need something hybrid?</h3>
              <p className="text-sm text-ink-subtle">
                Combine packages across audiences. We&rsquo;ll map milestones, content support, and ongoing care to the people who need it—boards, admin teams, marketing, or leadership.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/contact">Share your priorities</Link>
              </Button>
            </div>
          </Card>
        </div>
      </MotionSection>

      <MotionSection id="hoa" className="grid gap-10 rounded-3xl border border-brand/20 bg-surface px-8 py-10 shadow-soft md:grid-cols-[1.3fr_1fr]" delay={0.26}>
        <div className="space-y-5">
          <Badge>HOA Website Concierge</Badge>
          <h2 className="font-display text-3xl font-semibold text-ink">Your HOA’s digital headquarters</h2>
          <p className="text-base text-ink-subtle">
            Board-friendly content workflows, secure resident access, and concierge support for uploading documents, newsletters, and urgent alerts. Launch with either a one-time build or a hybrid plan that spreads costs across a predictable monthly agreement—perfect for associations balancing annual budgets.
          </p>
          <ul className="space-y-3 text-sm text-ink">
            <li>Board + committee permissions with approval flows</li>
            <li>Document libraries and resident self-service portals</li>
            <li>Maintenance request logging and follow-up tracking</li>
            <li>Emergency announcement system & SMS gateway ready</li>
          </ul>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <Link href="/pricing#hoa">Compare HOA Plans</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact?type=hoa">Request an HOA Demo</Link>
            </Button>
          </div>
        </div>
        <Card className="space-y-5 bg-surface-muted">
          <CardHeader>
            <CardTitle className="text-lg">What’s Included Monthly</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-ink">
            <div className="flex items-start gap-2">
              <ArrowRight className="mt-0.5 h-3.5 w-3.5 text-brand" aria-hidden="true" />
              Document posting and version archiving
            </div>
            <div className="flex items-start gap-2">
              <ArrowRight className="mt-0.5 h-3.5 w-3.5 text-brand" aria-hidden="true" />
              Resident support inbox with 24h response window
            </div>
            <div className="flex items-start gap-2">
              <ArrowRight className="mt-0.5 h-3.5 w-3.5 text-brand" aria-hidden="true" />
              Security updates and uptime monitoring
            </div>
            <div className="flex items-start gap-2">
              <ArrowRight className="mt-0.5 h-3.5 w-3.5 text-brand" aria-hidden="true" />
              Quarterly strategy and analytics review
            </div>
          </CardContent>
        </Card>
      </MotionSection>

      <MotionSection id="tech" className="rounded-3xl border border-surface-muted bg-surface px-8 py-12 shadow-soft" delay={0.34}>
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-4">
            <h2 className="font-display text-2xl font-semibold text-ink">Technology & toolchain</h2>
            <p className="text-sm text-ink-subtle">
              Modern, well-supported tools so your stack stays fast, secure, and easy to maintain.
            </p>
            <ul className="space-y-2 text-sm text-ink-subtle">
              <li>Full CI/CD pipelines with preview environments on every change.</li>
              <li>Accessibility and performance audits before launch and quarterly for retainers.</li>
              <li>Documentation and training library—delivered as Loom walkthroughs and Notion guides.</li>
            </ul>
          </div>
          <div className="grid gap-4 text-sm text-ink">
            <Card className="flex items-center justify-between border border-surface-muted bg-surface-muted px-5 py-4">
              <span>Next.js · TypeScript · Tailwind</span>
              <span className="text-xs uppercase tracking-wide text-ink-subtle">Frontend</span>
            </Card>
            <Card className="flex items-center justify-between border border-surface-muted bg-surface-muted px-5 py-4">
              <span>Sanity · Contentful · Storyblok · Notion</span>
              <span className="text-xs uppercase tracking-wide text-ink-subtle">Content</span>
            </Card>
            <Card className="flex items-center justify-between border border-surface-muted bg-surface-muted px-5 py-4">
              <span>Resend · Postmark · Twilio · Make.com</span>
              <span className="text-xs uppercase tracking-wide text-ink-subtle">Automation</span>
            </Card>
            <Card className="flex items-center justify-between border border-surface-muted bg-surface-muted px-5 py-4">
              <span>Vercel · AWS · Supabase · PlanetScale</span>
              <span className="text-xs uppercase tracking-wide text-ink-subtle">Ops</span>
            </Card>
          </div>
        </div>
      </MotionSection>
    </div>
  );
}










