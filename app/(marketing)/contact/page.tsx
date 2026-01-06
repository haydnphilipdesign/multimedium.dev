import Script from "next/script";
import { CalendarDays, Clock3, Mail, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { buildPrismBackground } from "@/lib/visual";
import { createMetadata, buildBreadcrumbSchema } from "@/lib/seo";
import { MotionSection } from "@/components/motion-section";
import { Badge } from "@/components/ui/badge";
import { ContactForm } from "@/components/contact-form";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Start a web design, development, or growth project with Multimedium. Share your goals and get a tailored plan and timeline.",
  path: "/contact"
});

const expectations = [
  { label: "Response time", value: "Within 1 business day" },
  { label: "Typical build window", value: "4–6 weeks" },
  { label: "Best call hours", value: "Mon–Thu • 9am–5pm ET" }
];

export default function ContactPage() {
  const breadcrumb = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" }
  ]);

  return (
    <div className="container grid gap-10 py-16 md:py-20 lg:grid-cols-[1.15fr_0.85fr]">
      <Script
        id="breadcrumb-contact"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <MotionSection className="space-y-8">
        <div className="relative overflow-hidden rounded-3xl border border-surface-muted bg-surface/50 px-8 py-10 shadow-soft">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-80"
            style={{ backgroundImage: buildPrismBackground("contact") }}
          />
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.10),rgba(0,0,0,0.35))] dark:bg-[linear-gradient(to_bottom,rgba(0,0,0,0.35),rgba(0,0,0,0.70))]" />

          <div className="relative space-y-4">
            <Badge variant="secondary" className="w-fit bg-surface/60">
              Contact
            </Badge>
            <h1 className="font-display text-4xl font-semibold leading-tight text-ink md:text-6xl">
              Let&apos;s build your next site
            </h1>
            <p className="max-w-2xl text-base text-ink-subtle md:text-lg">
              Tell me what you&apos;re building, what you want the site to do, and what constraints we should respect. I&apos;ll reply with a plan and timeline within one business day.
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-surface-muted bg-surface/50 px-8 py-10 shadow-soft">
          <ContactForm />
        </div>
      </MotionSection>

      <MotionSection className="space-y-6" delay={0.12}>
        <div className="rounded-3xl border border-surface-muted bg-surface/50 px-8 py-8 shadow-soft">
          <h2 className="font-display text-2xl font-semibold text-ink">Direct contact</h2>
          <p className="mt-2 text-sm text-ink-subtle">
            Prefer a quick call or email? Here are the fastest ways to reach me.
          </p>

          <div className="mt-6 grid gap-3 text-sm">
            {siteConfig.calendar ? (
              <a
                href={siteConfig.calendar}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-2xl border border-surface-muted bg-surface/40 px-4 py-4 text-ink-subtle transition hover:border-brand/40 hover:text-ink"
              >
                <CalendarDays className="h-4 w-4 text-brand" aria-hidden="true" />
                Book a call
              </a>
            ) : null}
            <a
              href={`tel:${siteConfig.phoneInternational}`}
              className="flex items-center gap-2 rounded-2xl border border-surface-muted bg-surface/40 px-4 py-4 text-ink-subtle transition hover:border-brand/40 hover:text-ink"
            >
              <Phone className="h-4 w-4 text-brand" aria-hidden="true" />
              Call or text {siteConfig.phone}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-2 rounded-2xl border border-surface-muted bg-surface/40 px-4 py-4 text-ink-subtle transition hover:border-brand/40 hover:text-ink"
            >
              <Mail className="h-4 w-4 text-brand" aria-hidden="true" />
              {siteConfig.email}
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-surface-muted bg-surface/50 px-8 py-8 shadow-soft">
          <h2 className="font-display text-2xl font-semibold text-ink">What to expect</h2>
          <ul className="mt-5 space-y-3 text-sm text-ink-subtle">
            {expectations.map((item) => (
              <li key={item.label} className="flex items-start gap-3">
                <Clock3 className="mt-0.5 h-4 w-4 text-brand" aria-hidden="true" />
                <span>
                  <span className="font-semibold text-ink">{item.label}:</span> {item.value}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-7">
            <Button asChild variant="outline" className="w-full">
              <Link href="/work">See examples of recent work</Link>
            </Button>
          </div>
        </div>
      </MotionSection>
    </div>
  );
}

