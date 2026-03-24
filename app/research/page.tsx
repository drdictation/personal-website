import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { researchContent, siteConfig } from "@/lib/site-content";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(
  "Research, Leadership & Media",
  "Research interests, clinical trials, academic roles, invited talks, and publications for Associate Professor Chamara Basnayake.",
  "/research"
);

export default function ResearchPage() {
  return (
    <>
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
          <h2>Publication list</h2>
          <p>
            For the most current journal articles, abstracts, and collaborative publications, use
            the live Google Scholar record.
          </p>
          <Link className="button button-secondary" href={siteConfig.googleScholar} target="_blank">
            Open Google Scholar
          </Link>
        </div>
      </section>
    </>
  );
}
