# Multimedium.dev

A production-ready marketing site for Haydn at Multimedium.dev. Built with Next.js 14 (App Router + TypeScript), Tailwind CSS, shadcn/ui, Framer Motion, MDX, and server actions.

## Getting Started

### Prerequisites
- Node.js ≥ 18.18
- npm ≥ 9 (or yarn/pnpm)

### Install
```bash
npm install
```

### Develop
```bash
npm run dev
```
Visit http://localhost:3000.

### Lint
```bash
npm run lint
```

### Build & Preview
```bash
npm run build
npm start
```

## Deploying to Vercel
1. Push this repository to GitHub.
2. "Import Project" on Vercel, pointing to the repo.
3. Ensure the build command is `npm run build` and output is `.next`.
4. Set environment variables (see Forms & Integrations).
5. Vercel will deploy on every push to `main`.

## Content & Customization

### Navigation & Site Settings
Edit `config/site.ts` for navigation, contact info, social links, and global metadata.

### Styling
- Tailwind theme tokens set in `tailwind.config.ts`.
- Global styles live in `app/globals.css`.
- shadcn components under `components/ui`.

### Pages & Sections
App Router pages are in `app/(marketing)/**`. They’re composed of section components plus Framer Motion reveal animations that respect `prefers-reduced-motion`.

### Blog & Resources
- MDX posts live in `content/blog`.
- Each file requires front matter (`title`, `description`, `date`, `category`).
- Posts render via `getPostBySlug` using `next-mdx-remote`, add ToC + reading progress indicators automatically.

### Forms & Integrations
- The contact form uses a server action (`app/(marketing)/contact/actions.ts`) with Zod validation.
- Hook into Resend, Nodemailer, or another provider inside the `try` block.
- Set environment variables (e.g., `RESEND_API_KEY`, `INQUIRY_RECIPIENT`) and wire your mailer send logic where indicated.

### SEO & Metadata
- `app/layout.tsx` sets base metadata and JSON-LD structured data (`lib/seo.ts`).
- `app/opengraph-image.tsx` generates dynamic OG images.
- `app/sitemap.ts` and `app/robots.ts` handle indexing.
- Each page exports metadata for focused titles/descriptions.

### Accessibility
- Light/dark mode via `next-themes`.
- Skip link, focus states, semantic markup, and reduced-motion handling are included.
- Components target WCAG 2.2 AA contrast.

## Post-Build Checklist

- [ ] Update social links and testimonials with live data.
- [ ] Configure email delivery inside `submitContactForm`.
- [ ] Add analytics (Vercel, Plausible, GA4) in `app/layout.tsx`.
- [ ] Provide real portfolio imagery under `public/`.
- [ ] Run `npm run lint` and `npm run build` before deployment.
- [ ] Connect custom domain on Vercel and verify SSL.
- [ ] Set up backups/monitoring for client handoff.

Happy launching!
