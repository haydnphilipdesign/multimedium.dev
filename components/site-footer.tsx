import Link from "next/link";
import { Dribbble, Github, Linkedin, Mail, MapPin, PenTool, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-surface-muted/60 bg-surface/40 backdrop-blur">
      <div className="container grid gap-12 py-16 md:grid-cols-12">
        <div className="space-y-5 md:col-span-5">
          <Link href="/" className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand via-brand-2 to-brand-3 text-ink-contrast shadow-soft ring-1 ring-white/10">
              <span className="font-display text-sm font-semibold tracking-tight">MM</span>
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-base font-semibold text-ink">Multimedium</span>
              <span className="font-mono text-[11px] text-ink-subtle">Web design + development</span>
            </span>
          </Link>
          <p className="max-w-md text-sm text-ink-subtle">
            Conversion-first design, clean Next.js builds, and a process that keeps momentum. Based in {siteConfig.location.city}, {siteConfig.location.region} — available remote.
          </p>
          <div className="grid gap-2 text-sm text-ink-subtle">
            <a className="inline-flex items-center gap-2 hover:text-ink" href={`tel:${siteConfig.phoneInternational}`}>
              <Phone className="h-4 w-4 text-brand" aria-hidden="true" />
              {siteConfig.phone}
            </a>
            <a className="inline-flex items-center gap-2 hover:text-ink" href={`mailto:${siteConfig.email}`}>
              <Mail className="h-4 w-4 text-brand" aria-hidden="true" />
              {siteConfig.email}
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-brand" aria-hidden="true" />
              {siteConfig.location.city}, {siteConfig.location.region}
            </span>
          </div>
        </div>

        <div className="space-y-4 md:col-span-3">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-ink">Explore</h3>
          <nav className="flex flex-col gap-2 text-sm text-ink-subtle">
            <Link className="hover:text-ink" href="/work">
              Work
            </Link>
            <Link className="hover:text-ink" href="/services">
              Services
            </Link>
            <Link className="hover:text-ink" href="/pricing">
              Pricing
            </Link>
            <Link className="hover:text-ink" href="/about">
              About
            </Link>
            <Link className="hover:text-ink" href="/blog">
              Notes
            </Link>
          </nav>
        </div>

        <div className="space-y-4 md:col-span-2">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-ink">Details</h3>
          <nav className="flex flex-col gap-2 text-sm text-ink-subtle">
            <Link className="hover:text-ink" href="/contact">
              Contact
            </Link>
            <Link className="hover:text-ink" href="/legal/privacy">
              Privacy Policy
            </Link>
            <Link className="hover:text-ink" href="/legal/terms">
              Terms of Service
            </Link>
          </nav>
        </div>

        <div className="space-y-4 md:col-span-2">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-ink">Social</h3>
          <div className="grid grid-cols-2 gap-2">
            <a
              className="inline-flex items-center gap-2 rounded-xl border border-surface-muted bg-surface/60 px-3 py-2 text-sm text-ink-subtle transition hover:border-brand/40 hover:text-ink"
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin className="h-4 w-4 text-brand" aria-hidden="true" />
              LinkedIn
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-xl border border-surface-muted bg-surface/60 px-3 py-2 text-sm text-ink-subtle transition hover:border-brand/40 hover:text-ink"
              href={siteConfig.social.github}
              target="_blank"
              rel="noreferrer"
            >
              <Github className="h-4 w-4 text-brand" aria-hidden="true" />
              GitHub
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-xl border border-surface-muted bg-surface/60 px-3 py-2 text-sm text-ink-subtle transition hover:border-brand/40 hover:text-ink"
              href={siteConfig.social.dribbble}
              target="_blank"
              rel="noreferrer"
            >
              <Dribbble className="h-4 w-4 text-brand" aria-hidden="true" />
              Dribbble
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-xl border border-surface-muted bg-surface/60 px-3 py-2 text-sm text-ink-subtle transition hover:border-brand/40 hover:text-ink"
              href={siteConfig.social.behance}
              target="_blank"
              rel="noreferrer"
            >
              <PenTool className="h-4 w-4 text-brand" aria-hidden="true" />
              Behance
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-surface-muted/60 py-6">
        <div className="container flex flex-col gap-2 text-xs text-ink-subtle md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</span>
          <span className="font-mono">Built with Next.js • Deployed on Vercel</span>
        </div>
      </div>
    </footer>
  );
}
