import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";
import { BreadcrumbStructuredData } from "@/components/breadcrumb-structured-data";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { AccordionItem } from "@/components/accordion";
import { conditionsContent, siteConfig } from "@/lib/site-content";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(
  "Gastrointestinal Conditions & Symptoms | Melbourne Specialist",
  "Specialist assessment of IBS, reflux, coeliac disease, IBD, EoE, swallowing difficulties, and bowel cancer screening in Melbourne by A/Prof Chamara Basnayake.",
  "/conditions",
  { exactTitle: true }
);

export default function ConditionsPage() {
  const baseUrl = siteConfig.siteUrl.replace(/\/+$/, "");

  const conditionsSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "@id": `${baseUrl}/conditions#webpage`,
    url: `${baseUrl}/conditions`,
    name: "Gastrointestinal Conditions & Clinical Subspecialties",
    description: "Specialist investigation and management of digestive symptoms, motility disorders, inflammatory bowel disease, and eosinophilic oesophagitis in Melbourne.",
    author: {
      "@id": `${baseUrl}/#physician`
    },
    about: [
      { "@type": "MedicalCondition", name: "Irritable Bowel Syndrome" },
      { "@type": "MedicalCondition", name: "Functional Dyspepsia" },
      { "@type": "MedicalCondition", name: "Gastro-oesophageal Reflux Disease" },
      { "@type": "MedicalCondition", name: "Dysphagia" },
      { "@type": "MedicalCondition", name: "Eosinophilic Oesophagitis" },
      { "@type": "MedicalCondition", name: "Coeliac Disease" },
      { "@type": "MedicalCondition", name: "Inflammatory Bowel Disease" },
      { "@type": "MedicalCondition", name: "Iron Deficiency Anaemia" }
    ]
  };

  return (
    <>
      <BreadcrumbStructuredData items={[{ name: "Conditions", item: "/conditions" }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(conditionsSchema) }}
      />
      <PageHero {...conditionsContent.hero} />

      <ScrollReveal as="section" className="shell section">
        <SectionHeading
          eyebrow="Clinical Subspecialties"
          title="Areas of Focused Subspecialty Expertise"
          body="Structured clinical evaluation integrating advanced diagnostics, evidence-based medication, dietary strategies, and multidisciplinary care."
        />
        <div className="editorial-grid">
          {conditionsContent.subspecialties?.map((sub) => (
            <article className="editorial-card" key={sub.title}>
              <h2>{sub.title}</h2>
              <p>{sub.description}</p>
              <ul className="simple-list" style={{ marginTop: "1rem" }}>
                {sub.keyAreas.map((area) => (
                  <li key={area}>{area}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal as="section" className="shell section">
        <SectionHeading
          eyebrow="Presenting Symptoms"
          title="Digestive Symptoms Evaluated"
          body="Common and complex gastrointestinal symptoms requiring structured assessment and diagnostic clarification."
        />
        <div className="faq-list">
          {conditionsContent.symptomGroups.map((group, idx) => (
            <AccordionItem key={group.title} title={group.title} defaultOpen={idx === 0}>
              <p>{group.body}</p>
              <ul className="simple-list" style={{ marginTop: "1rem" }}>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </AccordionItem>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal as="section" className="shell section">
        <div className="note-panel">
          <p>{conditionsContent.note}</p>
          <div style={{ marginTop: "1.5rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link className="button button-primary" href="/procedures">
              Diagnostic Endoscopy &amp; Procedures &rarr;
            </Link>
            <Link className="button button-secondary" href="/for-referrers">
              Referral Guidelines for Doctors &rarr;
            </Link>
            <Link className="button button-secondary" href="/contact">
              Consulting Rooms &amp; Appointments &rarr;
            </Link>
          </div>
        </div>
      </ScrollReveal>
    </>
  );
}
