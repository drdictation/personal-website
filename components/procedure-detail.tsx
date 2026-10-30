import Link from "next/link";

import { BreadcrumbStructuredData } from "@/components/breadcrumb-structured-data";
import { PageHero } from "@/components/page-hero";
import { procedureDetails, type ProcedureSlug } from "@/lib/procedure-content";
import { proceduresContent, siteConfig } from "@/lib/site-content";

export function ProcedureDetail({ slug }: { slug: ProcedureSlug }) {
  const procedure = procedureDetails[slug];
  const other = slug === "gastroscopy" ? "colonoscopy" : "gastroscopy";

  return (
    <>
      <BreadcrumbStructuredData items={[
        { name: "Procedures", item: "/procedures" },
        { name: procedure.name, item: `/procedures/${slug}` }
      ]} />
      <nav className="shell breadcrumbs" aria-label="Breadcrumb">
        <Link className="text-link" href="/procedures">Procedures</Link> / {procedure.name}
      </nav>
      <PageHero eyebrow="Specialist endoscopy" title={procedure.title} intro={procedure.intro} />
      <div className="shell section procedure-body">
        <section>
          <h2>Open-access referrals</h2>
          <p>{proceduresContent.pathway}</p>
          <p className="supporting-note">Patients may contact {siteConfig.contact.practice} directly with enquiries. The rooms explain referral requirements; a procedure is arranged only after clinical review.</p>
          <div className="hero-actions supporting-note">
            <Link className="button button-primary" href="/for-referrers">Information for referring doctors</Link>
            <Link className="button button-secondary" href="/contact">Contact the rooms</Link>
          </div>
        </section>
        {procedure.sections.map((section) => (
          <section key={section.title}>
            <h2>{section.title}</h2>
            <p>{section.body}</p>
          </section>
        ))}
        <section>
          <h2>Hospital locations</h2>
          <ul className="simple-list">{siteConfig.contact.procedures.map((hospital) => <li key={hospital}>{hospital}</li>)}</ul>
        </section>
        <section>
          <h2>Further information</h2>
          <p>This overview supports discussion with your treating team and does not replace your individual preparation or discharge instructions.</p>
          <p className="supporting-note"><a className="text-link" href={procedure.resource.href}>{procedure.resource.title}</a></p>
          <p className="supporting-note"><Link className="text-link" href={`/procedures/${other}`}>Read about {other}</Link> · <Link className="text-link" href="/for-patients">Patient information</Link></p>
        </section>
      </div>
    </>
  );
}
