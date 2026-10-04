import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";
import { BreadcrumbStructuredData } from "@/components/breadcrumb-structured-data";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { AccordionItem } from "@/components/accordion";
import { conditionsContent } from "@/lib/site-content";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(
  "Gastrointestinal Conditions & Symptoms | Melbourne Specialist",
  "Specialist clinical assessment for irritable bowel syndrome (IBS), reflux, coeliac disease, IBD, EoE, and bowel cancer screening in Melbourne by A/Prof Chamara Basnayake.",
  "/conditions",
  { exactTitle: true }
);

export default function ConditionsPage() {
  return (
    <>
      <BreadcrumbStructuredData items={[{ name: "Conditions", item: "/conditions" }]} />
      <PageHero {...conditionsContent.hero} />

      <ScrollReveal as="section" className="shell section">
        <SectionHeading
          eyebrow="Areas of Clinical Expertise"
          title="Conditions Assessed &amp; Managed"
          body="Providing structured assessment for common digestive symptoms and focused subspecialty conditions."
        />
        <div className="editorial-grid">
          {conditionsContent.subspecialties?.map((sub) => (
            <article className="editorial-card" key={sub.title}>
              <h2>{sub.title}</h2>
              <p>{sub.description}</p>
            </article>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal as="section" className="shell section">
        <SectionHeading
          eyebrow="Presenting Symptoms"
          title="Digestive Symptoms Evaluated"
          body="Structured clinical evaluation to identify underlying causes, exclude organic pathology, and guide appropriate investigation."
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
