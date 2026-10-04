import type { Metadata } from "next";
import Link from "next/link";

import { BreadcrumbStructuredData } from "@/components/breadcrumb-structured-data";
import { PageHero } from "@/components/page-hero";
import { referrersContent, siteConfig } from "@/lib/site-content";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(
  "GP & Specialist Referrals | Gastroenterology Melbourne",
  "Referral guidelines, open-access endoscopy triage, and communication protocols for GPs and specialists referring to A/Prof Chamara Basnayake.",
  "/for-referrers",
  { exactTitle: true }
);

export default function ForReferrersPage() {
  return (
    <>
      <BreadcrumbStructuredData items={[{ name: "For Referrers", item: "/for-referrers" }]} />
      <PageHero {...referrersContent.hero} />
      <section className="shell section split-section">
        <div className="feature-card">
          <h2>Referral Checklist</h2>
          <ul className="simple-list">
            {referrersContent.referralChecklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="note-panel">
          <h2>Direct Referral Submissions</h2>
          <p style={{ marginTop: "0.5rem" }}>
            Referrals are welcomed for outpatient consultation, direct-access endoscopy (gastroscopy and colonoscopy), and complex second-opinion assessments.
          </p>
          <div style={{ marginTop: "1rem" }}>
            <p><strong>Fax:</strong> {siteConfig.contact.fax}</p>
            <p><strong>Email:</strong> <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a></p>
            <p><strong>Phone:</strong> {siteConfig.contact.phone}</p>
          </div>
          <div style={{ marginTop: "1.5rem" }}>
            <Link className="button button-primary" href="/contact">
              View Consulting &amp; Location Details &rarr;
            </Link>
          </div>
        </div>
      </section>
      <section className="shell section">
        <div className="editorial-grid">
          {referrersContent.sections.map((section) => (
            <article className="editorial-card" key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
            </article>
          ))}
        </div>
        <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Link className="button button-secondary" href="/procedures">
            Endoscopy Indications &amp; Locations &rarr;
          </Link>
          <Link className="button button-secondary" href="/conditions">
            Clinical Subspecialties Overview &rarr;
          </Link>
          <Link className="button button-secondary" href="/research">
            Clinical Trials &amp; Research Portfolio &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}
