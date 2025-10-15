import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-surface-muted bg-surface">
      <div className="container grid gap-10 py-16 md:grid-cols-4">
        <div className="space-y-4 md:col-span-2">
          <Link href="/" className="flex items-center gap-2 font-display text-lg font-semibold text-ink">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand text-brand-foreground shadow-soft">
              M
            </span>
            Multimedium.dev
          </Link>
          <p className="max-w-sm text-sm text-ink-subtle">
            Web design, development, marketing, and AI integrations that make small businesses look big and keep HOA communities humming.
          </p>
          <div className="flex flex-col gap-2 text-sm text-ink-subtle">
            <a className="inline-flex items-center gap-2 hover:text-brand" href={`tel:${siteConfig.phoneInternational}`}>
              <Phone className="h-4 w-4" aria-hidden="true" />
              {siteConfig.phone}
            </a>
            <a className="inline-flex items-center gap-2 hover:text-brand" href={`mailto:${siteConfig.email}`}>
              <Mail className="h-4 w-4" aria-hidden="true" />
              {siteConfig.email}
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              {siteConfig.location.city}, {siteConfig.location.region}
            </span>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-ink">Company</h3>
          <nav className="flex flex-col gap-2 text-sm text-ink-subtle">
            <Link className="hover:text-brand" href="/services">
              Services
            </Link>
            <Link className="hover:text-brand" href="/small-business">
              SMB Websites
            </Link>
            <Link className="hover:text-brand" href="/hoa">
              HOA Portals
            </Link>
            <Link className="hover:text-brand" href="/pricing">
              Pricing
            </Link>
            <Link className="hover:text-brand" href="/work">
              Work
            </Link>
            <Link className="hover:text-brand" href="/blog">
              Blog
            </Link>
          </nav>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-ink">Resources</h3>
          <nav className="flex flex-col gap-2 text-sm text-ink-subtle">
            <Link className="hover:text-brand" href="/contact">
              Contact
            </Link>
            <Link className="hover:text-brand" href="/legal/privacy">
              Privacy Policy
            </Link>
            <Link className="hover:text-brand" href="/legal/terms">
              Terms of Service
            </Link>
          </nav>
        </div>
      </div>
      <div className="border-t border-surface-muted bg-surface-muted py-6">
        <div className="container text-xs text-ink-subtle">
          <span>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
