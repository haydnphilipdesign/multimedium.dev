import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { MotionSection } from "@/components/motion-section";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/cta-banner";
import { createMetadata, buildBreadcrumbSchema } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Pricing",
  description:
    "Straightforward pricing for website projects, hybrid subscription builds, and HOA website packages. Choose the model that fits your team.",
  path: "/pricing"
});

const plans = [
  {
    name: "Starter",
    price: "$500 – $1,000 + $150–$200/mo",
    summary: "Launch fast with a beautiful 5-page site, hosting, updates, and foundational SEO.",
    features: [
      "Discovery call + content planning",
      "Custom design system with copy support",
      "Uptime monitoring and security patching",
      "Monthly analytics snapshots and tune-ups"
    ],
    cta: "Book a Strategy Call",
    highlighted: false
  },
  {
    name: "Growth",
    price: "$3,000 + $199/mo",
    summary: "Full-featured site with blog, lead funnels, and quarterly optimization sessions.",
    features: [
      "Component-driven Next.js build",
      "Blog setup + editorial calendar kickoff",
      "CRM + marketing automation integrations",
      "Quarterly strategy + conversion reviews"
    ],
    badge: "Most Popular",
    cta: "Book a Strategy Call",
    highlighted: true
  },
  {
    name: "Scale",
    price: "Custom Quote",
    summary: "Advanced integrations, multi-brand sites, or product-led growth journeys.",
    features: [
      "AI chat concierge, portals, or dashboards",
      "Enterprise accessibility & security reviews",
      "Dedicated sprint cadence and roadmap",
      "Deployment, documentation, and training"
    ],
    cta: "Book a Strategy Call",
    highlighted: false
  }
];

const hoaPlan = {
  upfront: "$6,499 one-time",
  hybrid: "$2,499 upfront + $349/mo (24-month lock)",
  inclusions: [
    "Board + resident portals with secure logins",
    "Unlimited document posting by Multimedium",
    "Announcements, events, and broadcast alerts",
    "Support inbox with next-business-day response",
    "Board meeting recap deck with adoption metrics and talking points",
    "Quarterly accessibility & SEO audits"
  ]
};

export default function PricingPage() {
  const breadcrumb = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Pricing", path: "/pricing" }
  ]);

  return (
    <div className="container space-y-16 py-20">
      <Script
        id="breadcrumb-pricing"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <MotionSection className="grid items-center gap-10 md:grid-cols-2">
        <div className="space-y-5">
          <Badge variant="secondary">Pricing Options</Badge>
          <h1 className="font-display text-4xl font-semibold text-ink md:text-5xl">
            Pick the engagement style that fits your business
          </h1>
          <ul className="grid gap-2 text-base text-ink-subtle">
            <li className="inline-flex items-center gap-3"><span className="inline-block h-1.5 w-1.5 rounded-full bg-brand" /> Transparent scope, clear proposals, and realistic timelines</li>
            <li className="inline-flex items-center gap-3"><span className="inline-block h-1.5 w-1.5 rounded-full bg-brand" /> Hosting, monitoring, and accessibility built in</li>
            <li className="inline-flex items-center gap-3"><span className="inline-block h-1.5 w-1.5 rounded-full bg-brand" /> Options for upfront payment, hybrid subscription, or monthly retainers</li>
          </ul>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/contact">Book a Strategy Call</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#plans">View Pricing Options</a>
            </Button>
          </div>
        </div>
        <div className="relative h-80 overflow-hidden rounded-3xl border border-surface-muted shadow-soft">
          <Image
            src="/quotes/f333fc21-ac25-4619-b20c-feafd5e7ddb7.png"
            alt="Business card quote artwork"
            fill
            priority
            className="object-contain object-center"
          />
        </div>
      </MotionSection>

      <nav className="sticky top-16 z-40 -mb-6 border-y border-surface-muted/70 bg-surface/80 py-2 backdrop-blur supports-[backdrop-filter]:bg-surface/60 relative">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,_rgba(37,99,235,0.08),_transparent_30%,_transparent_70%,_rgba(37,99,235,0.08))]" />
        <ul className="container flex flex-wrap gap-4 text-xs font-semibold uppercase tracking-wide text-ink-subtle">
          <li><a href="#plans" className="hover:text-brand">Plans</a></li>
          <li><a href="#hoa" className="hover:text-brand">HOA Pricing</a></li>
          <li><a href="#faq" className="hover:text-brand">FAQs</a></li>
        </ul>
      </nav>

      <MotionSection id="plans" className="grid gap-6 md:grid-cols-3" delay={0.15}>
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={plan.highlighted ? "border-brand/40 bg-gradient-to-b from-brand/10 to-transparent shadow-soft" : ""}
          >
            <CardHeader className="space-y-3">
              {plan.badge ? <Badge>{plan.badge}</Badge> : null}
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <CardDescription className="text-lg text-ink">{plan.price}</CardDescription>
              <p className="text-sm text-ink-subtle">{plan.summary}</p>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-ink">
              {plan.features.map((feature) => (
                <div key={feature} className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" aria-hidden="true" />
                  {feature}
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <Button asChild variant={plan.highlighted ? "default" : "outline"} className="w-full">
                <Link href="/contact">{plan.cta}</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </MotionSection>

      <MotionSection id="hoa" className="grid gap-10 rounded-3xl border border-brand/20 bg-surface px-8 py-12 shadow-soft md:grid-cols-[1.4fr_1fr]" delay={0.25}>
        <div className="space-y-5">
          <Badge className="w-fit">HOA Website Pricing</Badge>
          <h2 className="font-display text-3xl font-semibold text-ink">Modern HOA Platform + Concierge Support</h2>
          <p className="text-base text-ink-subtle">
            Choose a one-time investment or a hybrid build with predictable monthly care. Every plan includes resident portal access, security updates, and document posting handled by Multimedium so leadership can stay focused on operations.
          </p>
          <div className="grid gap-4 text-sm text-ink">
            <div className="rounded-2xl border border-surface-muted bg-surface-muted px-4 py-3">
              <strong>One-time Build:</strong> {hoaPlan.upfront}
            </div>
            <div className="rounded-2xl border border-surface-muted bg-surface-muted px-4 py-3">
              <strong>Hybrid Subscription:</strong> {hoaPlan.hybrid}
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <Link href="/contact?type=hoa">Book a Strategy Call</Link>
            </Button>
            <Button asChild variant="outline">
              <a href="#plans">View Pricing Options</a>
            </Button>
          </div>
        </div>
        <Card className="space-y-3 bg-surface-muted">
          <CardHeader>
            <CardTitle className="text-lg">What you get</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-ink">
            {hoaPlan.inclusions.map((item) => (
              <div key={item} className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" aria-hidden="true" />
                {item}
              </div>
            ))}
          </CardContent>
          <CardFooter className="text-xs text-ink-subtle">
            Need a custom workflow—like resident onboarding, dues payments, or committee portals? Let’s scope it together.
          </CardFooter>
        </Card>
      </MotionSection>

      <MotionSection id="faq" className="space-y-6 rounded-3xl border border-surface-muted bg-surface px-8 py-10 shadow-soft" delay={0.35}>
        <h2 className="font-display text-2xl font-semibold text-ink">Frequently asked questions</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="font-semibold text-ink">Can we migrate an existing site?</h3>
            <p className="mt-2 text-sm text-ink-subtle">
              Yes. Migrations from WordPress, Wix, Squarespace, or legacy systems include content audit, redirect plan, and training for your team.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-ink">Do you handle copywriting and imagery?</h3>
            <p className="mt-2 text-sm text-ink-subtle">
              Absolutely. Projects include messaging workshops, draft copy, and asset sourcing. Bring your brand files or leverage our creative partners.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-ink">What about hosting and maintenance?</h3>
            <p className="mt-2 text-sm text-ink-subtle">
              Sites deploy to Vercel or the platform you choose. Ongoing care plans cover updates, monitoring, analytics reviews, and content support.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-ink">Need to coordinate with another vendor?</h3>
            <p className="mt-2 text-sm text-ink-subtle">
              Multimedium slots into your existing marketing, IT, or property management partner workflows to keep launch timelines smooth.
            </p>
          </div>
        </div>
      </MotionSection>

      <CtaBanner />
    </div>
  );
}






