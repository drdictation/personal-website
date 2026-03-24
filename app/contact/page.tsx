import type { Metadata } from "next";

import { LocationPreview } from "@/components/location-preview";
import { PageHero } from "@/components/page-hero";
import { buildMetadata } from "@/lib/metadata";
import { contactContent, siteConfig } from "@/lib/site-content";

export const metadata: Metadata = buildMetadata(
  "Contact",
  "Practice contact details, referral instructions, location information, and transport guidance for Focus Gastroenterology in East Melbourne.",
  "/contact"
);

export default function ContactPage() {
  return (
    <>
      <PageHero {...contactContent.hero} />
      <section className="shell section split-section">
        <div className="feature-card">
          <h2>Practice details</h2>
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
          <h2>Referral instructions</h2>
          <p>{contactContent.referralNote}</p>
          <p>{contactContent.transport}</p>
          <p>
            Private procedure locations currently include {siteConfig.contact.procedures.join(" and ")}.
          </p>
        </div>
      </section>
      <LocationPreview />
    </>
  );
}
