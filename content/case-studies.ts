export type CaseStudy = {
  slug: string;
  title: string;
  industry: string;
  summary: string;
  problem: string;
  solution: string;
  results: string;
  metrics: Array<{ label: string; value: string }>;
  highlights: string[];
  stack: string[];
  externalUrl: string;
  ctaLabel: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "pa-real-estate-support",
    title: "PA Real Estate Support Services, LLC",
    industry: "Real estate operations",
    summary:
      "Responsive web presence for a Pennsylvania-based real estate transaction coordination team with clear services, pricing, and intake flows.",
    problem:
      "The team relied on spreadsheets and email to collect brokerage requests. Their DIY site left prospects unsure which services were covered and how to start.",
    solution:
      "Multimedium.dev created a revised brand voice, service breakdown, and guided intake forms that sync to the team’s workflow. A component library empowers future landing pages and campaigns.",
    results:
      "Within 60 days of launch, branded search clicks climbed and coordinators spent less time clarifying scope before projects began.",
    metrics: [
      { label: "Intake completion rate", value: "+42%" },
      { label: "Search impressions", value: "+37%" }
    ],
    highlights: [
      "Service packages and FAQs written for busy brokerages",
      "Multiple contact paths—consult scheduling, intake form, and direct phone",
      "Search-friendly copy and schema to capture local queries"
    ],
    stack: ["Next.js", "Tailwind CSS", "Vercel"],
    externalUrl: "https://parealestatesupport.com",
    ctaLabel: "Visit parealestatesupport.com"
  },
  {
    slug: "blissful-existence",
    title: "Blissful Existence Healing Acres",
    industry: "Hospitality & wellness",
    summary:
      "Nature-inspired design system for a healing retreat center with event booking flows, story-driven copy, and automation-ready forms.",
    problem:
      "Retreats were filling via phone call sign-ups. The team needed a site that reflected the property experience and captured bookings without manual follow-up.",
    solution:
      "We delivered immersive visuals, dynamic event listings, and automated confirmations. An email nurture sequence and resource library keeps guests engaged.",
    results:
      "Online bookings doubled within three months and staff cut admin time by automating confirmations and reminders.",
    metrics: [
      { label: "Online bookings", value: "2× in 90 days" },
      { label: "Manual follow-up", value: "–6 hrs/week" }
    ],
    highlights: [
      "Soft gradients, curated photography, and motion micro-interactions",
      "Event calendar with lead capture and automated confirmations",
      "Story-driven copy to communicate mission, practitioners, and facilities"
    ],
    stack: ["Next.js", "Framer Motion", "Resend"],
    externalUrl: "https://blissfulexistencehealingacres.com",
    ctaLabel: "Visit blissfulexistencehealingacres.com"
  },
  {
    slug: "three-penn-properties",
    title: "Three Penn Properties, LLC",
    industry: "Property management & investment",
    summary:
      "Professional web presence for a property management and investment firm that highlights available properties and investor messaging.",
    problem:
      "Investors and tenants received PDFs and ad-hoc updates. Leadership wanted a modern hub that showcased portfolio metrics and routed leads correctly.",
    solution:
      "Multimedium.dev built modular property cards, lead routing workflows, and analytics dashboards so the team could monitor outreach and conversions.",
    results:
      "The site captures higher-quality investor leads and keeps tenant support organized through dedicated forms.",
    metrics: [
      { label: "Investor inquiries", value: "+55%" },
      { label: "Support ticket response", value: "<12 hrs" }
    ],
    highlights: [
      "Modular property cards with key metrics and inquiry CTAs",
      "Lead routing for tenant, investor, and partnership inquiries",
      "Performance-first build with Lighthouse 95+ scores"
    ],
    stack: ["Next.js", "Sanity CMS", "Vercel"],
    externalUrl: "https://threepenn.com",
    ctaLabel: "Visit threepenn.com"
  }
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((item) => item.slug === slug) ?? null;
}

