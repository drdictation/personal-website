import type { Metadata } from "next";

import { BreadcrumbStructuredData } from "@/components/breadcrumb-structured-data";
import { LocationPreview } from "@/components/location-preview";
import { PageHero } from "@/components/page-hero";
import { buildMetadata } from "@/lib/metadata";
import { contactContent, siteConfig } from "@/lib/site-content";

export const metadata: Metadata = buildMetadata(
  "Contact Focus Gastroenterology | East Melbourne Consulting",
  "Contact details, consulting suites at 100 Victoria Parade East Melbourne, phone, fax, and email for Associate Professor Chamara Basnayake.",
  "/contact",
  { exactTitle: true }
);

export default function ContactPage() {
  return (
    <>
      <BreadcrumbStructuredData items={[{ name: "Contact", item: "/contact" }]} />
      <PageHero {...contactContent.hero} />
      <section className="shell section split-section">
        <div className="feature-card">
          <h2>Practice Details</h2>
          <p>
            Consulting at {siteConfig.contact.practice} from {siteConfig.contact.consultingStart}.
          </p>
          <dl className="contact-list">
            <div>
              <dt>Location</dt>
              <dd>
                <a href={siteConfig.contact.mapsLink} target="_blank" rel="noopener noreferrer" className="address-link">
                  {siteConfig.contact.practice}
                  <br />
                  {siteConfig.contact.addressLine1}
                  <br />
                  {siteConfig.contact.addressLine2}
                </a>
              </dd>
            </div>
            <div>
              <dt>Phone</dt>
              <dd>
                <a href={`tel:${siteConfig.contact.phone.replace(/[^\d+]/g, "")}`}>
                  {siteConfig.contact.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt>Fax</dt>
              <dd>{siteConfig.contact.fax}</dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
              </dd>
            </div>
          </dl>
        </div>
        <div className="feature-card feature-card-alt">
          <h2>Referral &amp; Procedure Locations</h2>
          <p>{contactContent.referralNote}</p>
          <p style={{ marginTop: "0.5rem" }}>{contactContent.transport}</p>
          <p style={{ marginTop: "0.5rem" }}>
            <strong>Procedural Hospitals:</strong> {siteConfig.contact.procedures.join(", ")}.
          </p>
        </div>
      </section>
      <LocationPreview />
    </>
  );
}
