import { siteConfig } from "@/lib/site-content";

export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: siteConfig.name,
    description: siteConfig.description,
    medicalSpecialty: "Gastroenterology",
    areaServed: "Melbourne, Victoria, Australia",
    knowsAbout: [
      "Digestive symptoms",
      "Bowel cancer screening",
      "Iron deficiency",
      "Inflammatory bowel disease",
      "Coeliac disease",
      "Eosinophilic oesophagitis",
      "Oesophageal disorders",
      "Endoscopy"
    ],
    alumniOf: "University of Melbourne",
    affiliation: [
      {
        "@type": "CollegeOrUniversity",
        name: "University of Melbourne"
      },
      {
        "@type": "Hospital",
        name: "St Vincent's Hospital Melbourne"
      }
    ],
    availableService: [
      {
        "@type": "MedicalProcedure",
        name: "Gastroscopy"
      },
      {
        "@type": "MedicalProcedure",
        name: "Colonoscopy"
      }
    ],
    medicalOrganization: {
      "@type": "MedicalClinic",
      name: siteConfig.contact.practice,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.contact.addressLine1,
        addressLocality: "East Melbourne",
        addressRegion: "VIC",
        postalCode: "3002",
        addressCountry: "AU"
      },
      telephone: siteConfig.contact.phone,
      faxNumber: siteConfig.contact.fax,
      email: siteConfig.contact.email
    },
    url: siteConfig.siteUrl,
    sameAs: [siteConfig.googleScholar]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
