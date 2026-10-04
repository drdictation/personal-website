import type { Metadata } from "next";
import Link from "next/link";

import { BreadcrumbStructuredData } from "@/components/breadcrumb-structured-data";
import { FaqList } from "@/components/faq-list";
import { FaqStructuredData } from "@/components/faq-structured-data";
import { PageHero } from "@/components/page-hero";
import { patientsContent, siteConfig } from "@/lib/site-content";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(
  "Patient Information & Appointments | Melbourne Gastroenterology",
  "Information for patients seeing A/Prof Chamara Basnayake at Focus Gastroenterology: referrals, what to bring, consultation preparation, and hospital locations.",
  "/for-patients",
  { exactTitle: true }
);

export default function ForPatientsPage() {
  const baseUrl = siteConfig.siteUrl.replace(/\/+$/, "");

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "@id": `${baseUrl}/for-patients#webpage`,
    url: `${baseUrl}/for-patients`,
    name: "Patient Information and Consultation Details",
    author: {
      "@id": `${baseUrl}/#physician`
    }
  };

  return (
    <>
      <BreadcrumbStructuredData items={[{ name: "For Patients", item: "/for-patients" }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <FaqStructuredData faqs={patientsContent.faqs} />
      <PageHero {...patientsContent.hero} />
      <section className="shell section">
        <div className="editorial-grid">
          {patientsContent.sections.map((section) => (
            <article className="editorial-card" key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="shell section">
        <div className="feature-card">
          <h2>Frequently Asked Questions</h2>
          <FaqList items={patientsContent.faqs} />
          <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link className="button button-primary" href="/contact">
              Contact &amp; Location Details &rarr;
            </Link>
            <Link className="button button-secondary" href="/procedures">
              Endoscopy &amp; Procedure Information &rarr;
            </Link>
            <Link className="button button-secondary" href="/conditions">
              Conditions &amp; Symptoms Overview &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
