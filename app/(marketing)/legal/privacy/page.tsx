import Script from "next/script";
import { createMetadata, buildBreadcrumbSchema } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "Privacy policy describing how Multimedium.dev collects and protects information shared by visitors, clients, and residents.",
  path: "/legal/privacy"
});

export default function PrivacyPage() {
  const breadcrumb = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Privacy Policy", path: "/legal/privacy" }
  ]);

  return (
    <div className="container prose prose-slate mx-auto py-20 dark:prose-invert">
      <Script
        id="breadcrumb-privacy"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <h1>Privacy Policy</h1>
      <p>Last updated: February 23, 2024</p>

      <p>
        Multimedium.dev (“we”, “us”, “our”) respects your privacy. This policy outlines how we collect, use, and protect personal information shared through our website and services.
      </p>

      <h2>Information We Collect</h2>
      <p>We collect information that you voluntarily provide when:</p>
      <ul>
        <li>Completing contact forms or booking a consultation</li>
        <li>Requesting a portal walkthrough</li>
        <li>Subscribing to updates or resources</li>
        <li>Engaging Multimedium.dev for client services</li>
      </ul>
      <p>
        This may include your name, email address, phone number, organization details, project goals, and any additional context you choose to share. For member portals, user data is handled according to the client’s direction and applicable regulations.
      </p>

      <h2>How We Use Information</h2>
      <ul>
        <li>Respond to inquiries and provide proposals</li>
        <li>Deliver contracted services and onboarding</li>
        <li>Send updates, resources, or maintenance notices</li>
        <li>Improve the performance and security of our platforms</li>
      </ul>

      <h2>Cookies & Analytics</h2>
      <p>
        We may use privacy-friendly analytics (e.g., Plausible or Vercel Analytics) to understand aggregate traffic patterns. These tools do not collect personally identifiable information.
      </p>

      <h2>Data Sharing</h2>
      <p>
        We do not sell your information. Data is shared only with trusted partners or processors who assist in delivering our services (hosting providers, email services, payment processors) and only to the extent necessary.
      </p>

      <h2>Data Retention</h2>
      <p>
        Inquiry records and project documentation are retained for as long as needed to support your organization or comply with legal obligations. You may request deletion by contacting us.
      </p>

      <h2>Security</h2>
      <p>
        We implement reasonable administrative, technical, and physical safeguards to protect personal information. However, no system is completely secure—please share only necessary data.
      </p>

      <h2>Your Rights</h2>
      <p>
        Depending on your location, you may have rights to access, correct, or delete your personal information. Contact us to exercise these rights.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy? Email <a href="mailto:haydn@multimedium.dev">haydn@multimedium.dev</a> or call <a href="tel:+15709946186">570-994-6186</a>.
      </p>
    </div>
  );
}

