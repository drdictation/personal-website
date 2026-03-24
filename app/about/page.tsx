import { ScrollReveal } from "@/components/scroll-reveal";
import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { AccordionItem } from "@/components/accordion";
import { aboutContent, siteConfig } from "@/lib/site-content";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(
  "About",
  "Professional biography, academic roles, research interests, and leadership profile for Associate Professor Chamara Basnayake.",
  "/about"
);

export default function AboutPage() {
  return (
    <>
      <PageHero {...aboutContent.hero} />
      <ScrollReveal as="section" className="shell section">
        <div className="prose-block">
          {aboutContent.biography.map((paragraph, idx) => (
            <p key={idx} className="lead-paragraph">
              {paragraph}
            </p>
          ))}
        </div>
      </ScrollReveal>
      <ScrollReveal as="section" className="shell section">
        <div className="faq-list">
          {aboutContent.sections.map((section, idx) => (
            <AccordionItem key={section.title} title={section.title} defaultOpen={idx === 0}>
              <p>{section.body}</p>
            </AccordionItem>
          ))}
        </div>
      </ScrollReveal>
      <ScrollReveal as="section" className="shell section split-section">
        <div className="feature-card">
          <SectionHeading
            eyebrow="Awards and Affiliations"
            title="Academic and service contributions"
          />
          <ul className="simple-list">
            {aboutContent.credibility.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="feature-card feature-card-alt">
          <SectionHeading
            eyebrow="Publications"
            title="Live publication record"
            body="Google Scholar provides the most current list of journal publications and collaborative research output."
          />
          <Link className="button button-secondary" href={siteConfig.googleScholar} target="_blank">
            View Google Scholar
          </Link>
        </div>
      </ScrollReveal>
    </>
  );
}
