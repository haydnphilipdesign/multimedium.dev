export const siteConfig = {
  name: "Multimedium.dev",
  shortName: "Multimedium",
  description:
    "Professional web design, development, and marketing for businesses across the Poconos and NEPA. Trusted by service providers, retailers, professional firms, and organizations that want to convert visitors into customers.",
  url: "https://multimedium.dev",
  locale: "en_US",
  owner: "Haydn",
  phone: "570-994-6186",
  phoneInternational: "+15709946186",
  email: "haydn@multimedium.dev",
  calendar: "https://cal.com/multimedium/consult",
  location: {
    city: "Poconos",
    region: "Pennsylvania",
    country: "United States"
  },
  focusAreas: [
    "Web design",
    "Web development",
    "Marketing & SEO",
    "Small business websites",
    "AI automation"
  ],
  baseKeywords: [
    "web design poconos",
    "web development nepa",
    "small business websites",
    "next.js agency",
    "marketing automation",
    "seo consultant",
    "professional web design",
    "business website design",
    "ai chatbot integration",
    "multimedium.dev"
  ],
  navItems: [
    { label: "Services", href: "/services" },
    { label: "Pricing", href: "/pricing" },
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" }
  ],
  social: {
    linkedin: "https://www.linkedin.com/in/haydnm",
    github: "https://github.com/MultimediumDev",
    behance: "https://www.behance.net/multimedium",
    dribbble: "https://dribbble.com/multimedium"
  },
  hero: {
    headline: "Turn Website Visitors Into Customers",
    subheadline:
      "Professional websites that convert browsers into bookings. Trusted by service providers, retailers, and growing businesses across the Poconos."
  },
  heroAlt: {
    headline: "Make Your Business Look Established",
    subheadline:
      "High-converting websites designed to capture leads and build trust—whether you're a team of 3 or 30."
  }
};

export type SiteConfig = typeof siteConfig;
