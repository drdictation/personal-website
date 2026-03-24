import { ScrollReveal } from "@/components/scroll-reveal";
import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { AccordionItem } from "@/components/accordion";
import { conditionsContent } from "@/lib/site-content";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(
  "Conditions",
  "Digestive symptoms, coeliac disease, inflammatory bowel disease, eosinophilic oesophagitis, reflux, dysphagia, and oesophageal disorders.",
  "/conditions"
);

export default function ConditionsPage() {
  return (
    <>
      <PageHero {...conditionsContent.hero} />
      <ScrollReveal as="section" className="shell section">
        <div className="faq-list">
          {conditionsContent.symptomGroups.map((group, idx) => (
            <AccordionItem key={group.title} title={group.title} defaultOpen={idx === 0}>
              <p>{group.body}</p>
              <ul className="simple-list" style={{ marginTop: '1rem' }}>
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
        </div>
      </ScrollReveal>
    </>
  );
}
