import Script from "next/script";
import { createMetadata, buildBreadcrumbSchema } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Terms of Service",
  description:
    "Terms of service governing the use of Multimedium.dev and client engagements.",
  path: "/legal/terms"
});

export default function TermsPage() {
  const breadcrumb = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Terms of Service", path: "/legal/terms" }
  ]);

  return (
    <div className="container prose prose-slate mx-auto py-20 dark:prose-invert">
      <Script
        id="breadcrumb-terms"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <h1>Terms of Service</h1>
      <p>Last updated: February 23, 2024</p>

      <p>
        These terms (“Terms”) govern your use of the Multimedium.dev website and any services provided by Multimedium.dev (“we”, “us”, “our”). By accessing our site or engaging our services, you agree to these Terms.
      </p>

      <h2>Use of Website</h2>
      <p>
        You agree not to misuse the website or interfere with its normal operation. Content, copy, and visual assets on the site are owned by Multimedium.dev unless otherwise noted and may not be reproduced without consent.
      </p>

      <h2>Services & Proposals</h2>
      <p>
        Statements of work, proposals, or quotes provided by Multimedium.dev are valid for 30 days unless otherwise noted. Project timelines are estimates and depend on client responsiveness, approvals, and scope.
      </p>

      <h2>Client Responsibilities</h2>
      <ul>
        <li>Provide timely access to stakeholders, content, and required assets</li>
        <li>Review deliverables and provide feedback within agreed timelines</li>
        <li>Ensure any supplied content does not infringe on third-party rights</li>
      </ul>

      <h2>Payment & Billing</h2>
      <p>
        Payment schedules are defined in each proposal or invoice. Late payments may pause project work or incur finance charges as specified in the agreement.
      </p>

      <h2>Intellectual Property</h2>
      <p>
        Upon full payment, ownership of final project deliverables transfers to the client unless otherwise specified. Multimedium.dev retains the right to showcase work in portfolios and marketing materials.
      </p>

      <h2>Portal Data</h2>
      <p>
        Portal deployments may collect member or resident information as instructed by the client. Multimedium.dev acts as a processor, and the client retains responsibility for data governance and compliance.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        Multimedium.dev is not liable for indirect, incidental, or consequential damages arising from site usage or services, including lost profits or data.
      </p>

      <h2>Termination</h2>
      <p>
        Either party may terminate an agreement with written notice. Clients are responsible for fees incurred through the termination date. Upon termination, access to managed services or portals may be removed.
      </p>

      <h2>Updates</h2>
      <p>
        We may update these Terms from time to time. Continued use of the website or services after updates constitutes acceptance of the revised Terms.
      </p>

      <h2>Contact</h2>
      <p>
        For questions, email <a href="mailto:haydn@multimedium.dev">haydn@multimedium.dev</a> or call <a href="tel:+15709946186">570-994-6186</a>.
      </p>
    </div>
  );
}

