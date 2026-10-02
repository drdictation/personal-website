import type { Metadata } from "next";

import { FaqList } from "@/components/faq-list";
import { FaqStructuredData } from "@/components/faq-structured-data";
import { PageHero } from "@/components/page-hero";
import { patientsContent } from "@/lib/site-content";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(
  "For Patients",
  "Referral requirements, what to bring, appointment preparation, and practical gastroenterology consultation information for patients.",
  "/for-patients"
);

export default function ForPatientsPage() {
  return (
    <>
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
          <h2>Frequently asked questions</h2>
          <FaqList items={patientsContent.faqs} />
        </div>
      </section>
    </>
  );
}
