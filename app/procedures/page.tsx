import { ScrollReveal } from "@/components/scroll-reveal";
import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { ExpandableCard } from "@/components/expandable-card";
import { proceduresContent } from "@/lib/site-content";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(
  "Procedures",
  "Gastroscopy, colonoscopy, and diagnostic endoscopy provided within a specialist gastroenterology assessment pathway.",
  "/procedures"
);

export default function ProceduresPage() {
  return (
    <>
      <PageHero {...proceduresContent.hero} />
      <ScrollReveal as="section" className="shell section">
        <div className="card-grid card-grid-tight">
          {proceduresContent.procedures.map((procedure) => (
            <ExpandableCard
              key={procedure.title}
              title={procedure.title}
              description={procedure.body}
            />
          ))}
        </div>
      </ScrollReveal>
      <ScrollReveal as="section" className="shell section">
        <div className="note-panel">
          <p>{proceduresContent.pathway}</p>
        </div>
      </ScrollReveal>
    </>
  );
}
