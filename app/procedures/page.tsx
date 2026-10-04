import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";
import { BreadcrumbStructuredData } from "@/components/breadcrumb-structured-data";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { proceduresContent } from "@/lib/site-content";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(
  "Gastroscopy & Colonoscopy Melbourne | Endoscopy Procedures",
  "Diagnostic gastroscopy, colonoscopy, and bowel cancer screening in Melbourne by Associate Professor Chamara Basnayake.",
  "/procedures",
  { exactTitle: true }
);

export default function ProceduresPage() {
  return (
    <>
      <BreadcrumbStructuredData items={[{ name: "Procedures", item: "/procedures" }]} />
      <PageHero {...proceduresContent.hero} />

      <ScrollReveal as="section" className="shell section">
        <SectionHeading
          eyebrow="Specialist Endoscopy"
          title="Diagnostic Endoscopy Procedures"
          body="Procedures are performed with gentle sedation at accredited Melbourne private hospital facilities with modern endoscopy suites and comprehensive clinical monitoring."
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
          <h2>Oesophageal Motility &amp; Manometry</h2>
          <p style={{ marginTop: "0.75rem" }}>
            {proceduresContent.publicPhysiologyNotice}
          </p>
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
