import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { referrersContent } from "@/lib/site-content";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(
  "For Referrers",
  "Referral information, procedure pathways, communication approach, and reporting expectations for GPs and specialists.",
  "/for-referrers"
);

export default function ForReferrersPage() {
  return (
    <>
      <PageHero {...referrersContent.hero} />
      <section className="shell section split-section">
        <div className="feature-card">
          <h2>Referral checklist</h2>
          <ul className="simple-list">
            {referrersContent.referralChecklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="note-panel">
          <p>
            Referrals are accepted for both consultation and procedural assessment, with clear
            reporting and practical follow-up recommendations.
          </p>
        </div>
      </section>
      <section className="shell section">
        <div className="editorial-grid">
          {referrersContent.sections.map((section) => (
            <article className="editorial-card" key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
