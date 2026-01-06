export const siteConfig = {
  name: "Multimedium.dev",
  shortName: "Multimedium",
  description:
    "Conversion-first web design and development for teams that want to look premium, load fast, and turn attention into inquiries. Based in the Poconos — available remote.",
  url: "https://multimedium.dev",
  locale: "en_US",
  owner: "Haydn",
  phone: "570-994-6186",
  phoneInternational: "+15709946186",
  email: "haydn@multimedium.dev",
  calendar: "",
  location: {
    city: "Poconos",
    region: "Pennsylvania",
    country: "United States"
  },
  focusAreas: [
    "Web design",
    "Web development",
    "Conversion strategy",
    "Marketing & SEO",
    "Automation & portals"
  ],
  baseKeywords: [
    "web design poconos",
    "web development nepa",
    "conversion focused web design",
    "next.js agency",
    "marketing automation",
    "seo consultant",
    "professional web design",
    "business website design",
    "website redesign",
    "ai chatbot integration",
    "multimedium.dev"
  ],
  navItems: [
    { label: "Work", href: "/work" },
    { label: "Services", href: "/services" },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
    { label: "Notes", href: "/blog" }
  ],
  social: {
    linkedin: "https://www.linkedin.com/in/haydnm",
    github: "https://github.com/MultimediumDev",
    behance: "https://www.behance.net/multimedium",
    dribbble: "https://dribbble.com/multimedium"
  },
  hero: {
    headline: "Websites That Look Premium and Convert",
    subheadline:
      "Strategy-led design and clean Next.js builds that ship fast, load fast, and make contacting you feel inevitable."
  },
  heroAlt: {
    headline: "Make Your Business Look Established",
    subheadline:
      "High-converting websites designed to capture leads and build trust-whether you're a team of 3 or 30."
  }
};

export type SiteConfig = typeof siteConfig;
