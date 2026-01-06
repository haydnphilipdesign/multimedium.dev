import Link from "next/link";
import Script from "next/script";
import { AlertTriangle, CalendarCheck, ClipboardCheck, FileText, Shield, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";
import { buildPrismBackground } from "@/lib/visual";
import { createMetadata, buildBreadcrumbSchema } from "@/lib/seo";
import { MotionSection } from "@/components/motion-section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata = createMetadata({
  title: "Association Portals & HOA Websites",
  description:
    "Modern association and HOA portals with secure logins, document libraries, announcements, and concierge support so updates never fall on volunteers.",
  path: "/hoa"
});

const portalFeatures = [
  {
    icon: ClipboardCheck,
    title: "Role-based accounts",
    description: "Access for boards, committees, and members—with clear permissions and audit history."
  },
  {
    icon: FileText,
    title: "Document library",
    description: "Minutes, bylaws, forms, newsletters, and policies—organized and searchable."
  },
  {
    icon: AlertTriangle,
    title: "Announcements & alerts",
    description: "Urgent notices, scheduled reminders, and broadcast communication when it matters."
  },
  {
    icon: CalendarCheck,
    title: "Events & amenities",
    description: "Event RSVPs, calendars, and scheduling workflows in one consistent hub."
  }
];

const conciergeSupport = [
  {
    icon: Sparkles,
    title: "Concierge posting",
    description: "Send PDFs, photos, or quick notes—updates go live without board members formatting anything."
  },
  {
    icon: Shield,
    title: "Security + governance",
    description: "Quarterly checks on accessibility, privacy, and basic governance so the portal stays compliant."
  }
];

const onboardingSteps = [
  "Discovery with board leadership and stakeholders",
  "Content inventory + document organization plan",
  "Design preview + portal walkthrough",
  "Build, permissions, and member onboarding toolkit",
  "Launch communications + training",
  "30-day adoption review + next-quarter priorities"
];

export default function HoaPage() {
  const breadcrumb = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Association Portals", path: "/hoa" }
  ]);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Association Portal & HOA Website",
    description:
      "Secure portals, document libraries, announcements, and concierge support for associations and communities.",
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url
    },
    areaServed: [siteConfig.location.region, siteConfig.location.country],
    serviceType: ["HOA website", "Member portal", "Community communications"],
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `${siteConfig.url}/pricing#hoa`
    }
  };

  return (
    <div className="container space-y-14 py-16 md:py-20">
      <Script
        id="breadcrumb-hoa"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <Script
        id="service-schema-hoa"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <MotionSection className="relative overflow-hidden rounded-3xl border border-surface-muted bg-surface/50 px-8 py-12 shadow-soft md:px-12">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-80"
          style={{ backgroundImage: buildPrismBackground("hoa") }}
        />
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.10),rgba(0,0,0,0.35))] dark:bg-[linear-gradient(to_bottom,rgba(0,0,0,0.35),rgba(0,0,0,0.70))]" />

        <div className="relative max-w-3xl space-y-5">
          <Badge variant="secondary" className="w-fit bg-surface/60">
            Portals & Communities
          </Badge>
          <h1 className="font-display text-4xl font-semibold leading-tight text-ink md:text-6xl">
            A calmer digital home base for members and residents
          </h1>
          <p className="text-base text-ink-subtle md:text-lg">
            Centralize documents and communication, reduce repetitive questions, and keep updates flowing—even when volunteer roles rotate.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/contact">Discuss a portal</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/pricing#hoa">View portal pricing</Link>
            </Button>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="grid gap-6 md:grid-cols-2" delay={0.1}>
        {portalFeatures.map((feature) => (
          <div key={feature.title} className="rounded-3xl border border-surface-muted bg-surface/50 px-7 py-7 shadow-soft">
            <div className="flex items-center gap-3">
              <feature.icon className="h-5 w-5 text-brand" aria-hidden="true" />
              <p className="font-display text-xl font-semibold text-ink">{feature.title}</p>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-ink-subtle">{feature.description}</p>
          </div>
        ))}
      </MotionSection>

      <MotionSection className="grid gap-6 rounded-3xl border border-surface-muted bg-surface/50 px-8 py-12 shadow-soft md:grid-cols-2" delay={0.18}>
        <div className="space-y-4">
          <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">Concierge support</h2>
          <p className="text-base text-ink-subtle">
            Most portals fail because updates stop. Concierge coverage keeps the system alive and useful—without relying on volunteers to format PDFs.
          </p>
        </div>
        <div className="grid gap-4">
          {conciergeSupport.map((item) => (
            <div key={item.title} className="rounded-3xl border border-surface-muted bg-surface/40 px-7 py-7">
              <div className="flex items-center gap-3">
                <item.icon className="h-5 w-5 text-brand" aria-hidden="true" />
                <p className="font-display text-xl font-semibold text-ink">{item.title}</p>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink-subtle">{item.description}</p>
            </div>
          ))}
        </div>
      </MotionSection>

      <MotionSection className="rounded-3xl border border-surface-muted bg-surface/50 px-8 py-12 shadow-soft" delay={0.26}>
        <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">Onboarding flow</h2>
        <ol className="mt-8 grid gap-4 md:grid-cols-2">
          {onboardingSteps.map((step, index) => (
            <li key={step} className="rounded-2xl border border-surface-muted bg-surface/40 px-5 py-4 text-sm text-ink-subtle">
              <span className="font-mono text-xs text-ink-subtle">0{index + 1}</span>
              <p className="mt-2 text-ink">{step}</p>
            </li>
          ))}
        </ol>
      </MotionSection>

      <MotionSection className="rounded-3xl border border-surface-muted bg-surface/50 px-8 py-12 text-center shadow-soft" delay={0.34}>
        <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
          Want a portal that people actually use?
        </h2>
        <p className="mt-4 text-base text-ink-subtle">
          Share your current workflow and pain points. I&apos;ll reply with a scoped plan and timeline within one business day.
        </p>
        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/contact">Start the conversation</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/pricing#hoa">See pricing</Link>
          </Button>
        </div>
      </MotionSection>
    </div>
  );
}

