import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";
import { BreadcrumbStructuredData } from "@/components/breadcrumb-structured-data";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { AccordionItem } from "@/components/accordion";
import { aboutContent, siteConfig } from "@/lib/site-content";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(
  "About A/Prof Chamara Basnayake | Melbourne Gastroenterologist",
  "Professional biography, academic roles at University of Melbourne, clinical leadership at St Vincent's Hospital, and credentials for A/Prof Chamara Basnayake.",
  "/about",
  { exactTitle: true }
);

export default function AboutPage() {
  return (
    <>
      <BreadcrumbStructuredData items={[{ name: "About", item: "/about" }]} />
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
        <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Link className="button button-secondary" href="/conditions">
            Explore conditions treated &rarr;
          </Link>
          <Link className="button button-secondary" href="/procedures">
            Endoscopy &amp; procedures &rarr;
          </Link>
          <Link className="button button-primary" href="/contact">
            Consulting &amp; referrals &rarr;
          </Link>
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
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "1rem" }}>
            <Link className="button button-secondary" href={siteConfig.googleScholar} target="_blank" rel="noopener noreferrer">
              View Google Scholar
            </Link>
            <Link className="button button-secondary" href="/research">
              View Research &amp; Clinical Trials
            </Link>
          </div>
        </div>
      </ScrollReveal>
    </>
  );
}
