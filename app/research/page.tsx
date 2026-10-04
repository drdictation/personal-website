import type { Metadata } from "next";
import Link from "next/link";

import { BreadcrumbStructuredData } from "@/components/breadcrumb-structured-data";
import { PageHero } from "@/components/page-hero";
import { researchContent, siteConfig } from "@/lib/site-content";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(
  "Research, Clinical Trials & Publications | A/Prof Basnayake",
  "Academic research at University of Melbourne, MANTRA trial in Lancet Gastroenterology, clinical trials in EoE and coeliac disease, and peer-reviewed publications.",
  "/research",
  { exactTitle: true }
);

export default function ResearchPage() {
  return (
    <>
      <BreadcrumbStructuredData items={[{ name: "Research", item: "/research" }]} />
      <PageHero {...researchContent.hero} />
      <section className="shell section">
        <div className="editorial-grid">
          {researchContent.sections.map((section) => (
            <article className="editorial-card" key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="shell section">
        <div className="feature-card feature-card-alt">
          <h2>Peer-Reviewed Publications</h2>
          <p>
            Associate Professor Basnayake has published widely across major international gastroenterology journals including <em>The Lancet Gastroenterology &amp; Hepatology</em>, <em>Clinical Gastroenterology &amp; Hepatology</em>, <em>Neurogastroenterology &amp; Motility</em>, and <em>Inflammatory Bowel Diseases</em>.
          </p>
          <div style={{ marginTop: "1.5rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link className="button button-primary" href={siteConfig.googleScholar} target="_blank" rel="noopener noreferrer">
              View Google Scholar Profile &rarr;
            </Link>
            <Link className="button button-secondary" href="https://findanexpert.unimelb.edu.au/profile/866034-chamara-basnayake" target="_blank" rel="noopener noreferrer">
              University of Melbourne Profile &rarr;
            </Link>
            <Link className="button button-secondary" href="/about">
              Biography &amp; Appointments &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
