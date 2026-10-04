import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";
import { BreadcrumbStructuredData } from "@/components/breadcrumb-structured-data";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { proceduresContent, siteConfig } from "@/lib/site-content";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(
  "Gastroscopy & Colonoscopy Melbourne | Endoscopy Procedures",
  "Diagnostic gastroscopy, colonoscopy, bowel cancer screening, and high-resolution oesophageal manometry in Melbourne by A/Prof Chamara Basnayake.",
  "/procedures",
  { exactTitle: true }
);

export default function ProceduresPage() {
  const baseUrl = siteConfig.siteUrl.replace(/\/+$/, "");

  const proceduresSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "@id": `${baseUrl}/procedures#webpage`,
    url: `${baseUrl}/procedures`,
    name: "Endoscopy and Diagnostic Procedures in Melbourne",
    description: "Gastroscopy, colonoscopy, bowel cancer screening, and oesophageal physiology assessment.",
    author: {
      "@id": `${baseUrl}/#physician`
    },
    about: [
      {
        "@type": "MedicalProcedure",
        name: "Gastroscopy",
        procedureType: "https://schema.org/DiagnosticProcedure",
        description: "Diagnostic upper gastrointestinal endoscopy to assess reflux, swallowing difficulties, coeliac disease, and persistent upper digestive symptoms."
      },
      {
        "@type": "MedicalProcedure",
        name: "Colonoscopy",
        procedureType: "https://schema.org/DiagnosticProcedure",
        description: "Lower gastrointestinal endoscopy for bowel cancer screening, positive FOBT, polyp surveillance, rectal bleeding, and inflammatory bowel disease."
      },
      {
        "@type": "MedicalProcedure",
        name: "High-Resolution Oesophageal Manometry",
        procedureType: "https://schema.org/DiagnosticProcedure",
        description: "Tertiary-level physiological assessment of oesophageal motility, achalasia, non-cardiac chest pain, and refractory reflux."
      }
    ]
  };

  return (
    <>
      <BreadcrumbStructuredData items={[{ name: "Procedures", item: "/procedures" }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(proceduresSchema) }}
      />
      <PageHero {...proceduresContent.hero} />

      <ScrollReveal as="section" className="shell section">
        <SectionHeading
          eyebrow="Specialist Endoscopy"
          title="Diagnostic &amp; Physiological Investigations"
          body="Procedures are performed with gentle sedation at leading Melbourne hospitals with modern endoscopy facilities and strict quality assurance."
        />
        <div className="editorial-grid">
          {proceduresContent.procedures.map((procedure) => (
            <article className="editorial-card" key={procedure.title}>
              <h2>{procedure.title}</h2>
              <p>{procedure.body}</p>
            </article>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal as="section" className="shell section">
        <div className="note-panel">
          <h2>Referral Pathways &amp; Hospital Locations</h2>
          <p style={{ marginTop: "0.75rem" }}>{proceduresContent.pathway}</p>
          <div style={{ marginTop: "1.5rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link className="button button-primary" href="/for-referrers">
              Open-Access Endoscopy Referral Guidelines &rarr;
            </Link>
            <Link className="button button-secondary" href="/for-patients">
              Patient Preparation &amp; Hospital Info &rarr;
            </Link>
            <Link className="button button-secondary" href="/contact">
              Contact Consulting Rooms &rarr;
            </Link>
          </div>
        </div>
      </ScrollReveal>
    </>
  );
}
