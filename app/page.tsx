import { ScrollReveal } from "@/components/scroll-reveal";
import Image from "next/image";
import Link from "next/link";
import { ExpandableCard } from "@/components/expandable-card";
import { LocationPreview } from "@/components/location-preview";
import { SectionHeading } from "@/components/section-heading";
import { homeContent, siteConfig } from "@/lib/site-content";

export default function HomePage() {
  return (
    <>
      <ScrollReveal as="section" className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow">{homeContent.hero.eyebrow}</p>
          <h1>{homeContent.hero.title}</h1>
          <p className="hero-summary">{homeContent.hero.summary}</p>
          <div className="hero-actions">
            <Link className="button button-primary" href={homeContent.hero.primaryAction.href}>
              {homeContent.hero.primaryAction.label}
            </Link>
            <Link className="button button-secondary" href={homeContent.hero.secondaryAction.href}>
              {homeContent.hero.secondaryAction.label}
            </Link>
          </div>
          <ul className="hero-list">
            {homeContent.hero.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="hero-media">
          <div className="portrait-frame">
            <Image
              src="/images/chamara-headshot.jpg"
              alt="Associate Professor Chamara Basnayake"
              width={780}
              height={940}
              priority
            />
          </div>
          <div className="credential-card">
            <p className="credential-title">Appointments and training</p>
            <ul>
              {homeContent.hero.credentials.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal as="section" className="shell section">
        <SectionHeading
          eyebrow="Areas of care"
          title="Specialist Gastroenterology Care"
          body="Providing careful assessment of common digestive concerns as well as more complex oesophageal and inflammatory conditions."
        />
        <div className="card-grid">
          {homeContent.areasOfCare.map((item) => (
            <ExpandableCard 
               key={item.title}
               title={item.title}
               description={item.description}
            />
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal as="section" className="shell section split-section">
        <div className="feature-card">
          <SectionHeading
            eyebrow="Procedures"
            title={homeContent.procedures.title}
            body={homeContent.procedures.body}
          />
        </div>
        <div className="pill-panel">
          {homeContent.procedures.items.map((item) => (
            <span className="pill" key={item}>
              {item}
            </span>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal as="section" className="shell section">
        <div className="leadership-panel">
          <SectionHeading
            eyebrow="Academic and clinical leadership"
            title={homeContent.leadership.title}
            body={homeContent.leadership.body}
          />
          <div className="metric-grid">
            {homeContent.leadership.points.map((item) => (
              <div className="metric-card" key={item}>
                <span aria-hidden="true">•</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal as="section" className="shell section">
        <div className="location-intro">
          <SectionHeading
            eyebrow="Consulting location"
            title={homeContent.location.title}
            body={homeContent.location.body}
          />
        </div>
      </ScrollReveal>

      <LocationPreview />

      <ScrollReveal as="section" className="shell section cta-band">
        <p className="eyebrow">Referrals and enquiries</p>
        <h2>Contact {siteConfig.contact.practice} directly</h2>
        <p>
          For appointments, referral enquiries, and practice information, contact the rooms by
          phone, fax, or email.
        </p>
        <div className="cta-inline">
          <a href={`tel:${siteConfig.contact.phone.replace(/[^\d+]/g, "")}`}>
            {siteConfig.contact.phone}
          </a>
          <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
        </div>
      </ScrollReveal>
    </>
  );
}
