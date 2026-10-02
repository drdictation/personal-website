import { siteConfig } from "@/lib/site-content";

export function StructuredData() {
  const baseUrl = siteConfig.siteUrl.replace(/\/+$/, "");

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Physician",
        "@id": `${baseUrl}/#physician`,
        name: siteConfig.name,
        givenName: "Chamara",
        familyName: "Basnayake",
        honorificPrefix: "Associate Professor",
        jobTitle: siteConfig.role,
        description: siteConfig.description,
        image: `${baseUrl}/images/chamara-headshot.jpg`,
        url: baseUrl,
        medicalSpecialty: "https://schema.org/Gastroenterology",
        areaServed: {
          "@type": "AdministrativeArea",
          name: "Melbourne, Victoria, Australia"
        },
        hasCredential: [
          {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "degree",
            name: "MBBS (Hons)"
          },
          {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "fellowship",
            name: "Fellow of the Royal Australasian College of Physicians (FRACP)"
          },
          {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "degree",
            name: "PhD in Medicine (University of Melbourne)"
          }
        ],
        alumniOf: [
          {
            "@type": "CollegeOrUniversity",
            name: "Monash University"
          },
          {
            "@type": "CollegeOrUniversity",
            name: "University of Melbourne"
          },
          {
            "@type": "CollegeOrUniversity",
            name: "KU Leuven"
          }
        ],
        affiliation: [
          {
            "@type": "CollegeOrUniversity",
            name: "University of Melbourne",
            url: "https://www.unimelb.edu.au"
          },
          {
            "@type": "Hospital",
            name: "St Vincent's Hospital Melbourne",
            url: "https://www.svhm.org.au"
          }
        ],
        memberOf: [
          {
            "@type": "MedicalOrganization",
            name: "Gastroenterological Society of Australia (GESA)"
          },
          {
            "@type": "MedicalOrganization",
            name: "Royal Australasian College of Physicians (FRACP)"
          },
          {
            "@type": "MedicalOrganization",
            name: "The Rome Foundation"
          }
        ],
        award: [
          "Ray Clouse Award (2021) - The Rome Foundation",
          "TJ Martin Award for Best PhD Project (2022) - St Vincent's Hospital Melbourne",
          "John Burgess Prize for Best Medical Registrar - Monash Health"
        ],
        sameAs: [
          siteConfig.googleScholar,
          "https://findanexpert.unimelb.edu.au/profile/866034-chamara-basnayake",
          "https://pubmed.ncbi.nlm.nih.gov/?term=Basnayake+C%5BAuthor%5D"
        ],
        knowsAbout: [
          "Disorders of Gut-Brain Interaction (DGBI)",
          "Irritable Bowel Syndrome (IBS)",
          "Oesophageal Motility Disorders",
          "High-Resolution Oesophageal Manometry",
          "Eosinophilic Oesophagitis (EoE)",
          "Inflammatory Bowel Disease (IBD)",
          "Coeliac Disease",
          "Bowel Cancer Screening",
          "Colonoscopy and Polypectomy",
          "Gastroscopy (Endoscopy)",
          "Iron Deficiency and Anaemia",
          "Gastro-oesophageal Reflux Disease (GORD)",
          "Dysphagia"
        ],
        worksFor: {
          "@id": `${baseUrl}/#clinic`
        }
      },
      {
        "@type": "MedicalClinic",
        "@id": `${baseUrl}/#clinic`,
        name: siteConfig.contact.practice,
        medicalSpecialty: "https://schema.org/Gastroenterology",
        url: baseUrl,
        telephone: siteConfig.contact.phone,
        faxNumber: siteConfig.contact.fax,
        email: siteConfig.contact.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.contact.addressLine1,
          addressLocality: "East Melbourne",
          addressRegion: "VIC",
          postalCode: "3002",
          addressCountry: "AU"
        },
        physician: {
          "@id": `${baseUrl}/#physician`
        },
        hospitalAffiliation: siteConfig.contact.procedures.map((name) => ({
          "@type": "Hospital",
          name
        })),
        availableService: [
          {
            "@type": "MedicalProcedure",
            name: "Gastroscopy",
            procedureType: "https://schema.org/DiagnosticProcedure",
            description:
              "Diagnostic upper gastrointestinal endoscopy to assess reflux, swallowing difficulties, coeliac disease, and persistent upper digestive symptoms."
          },
          {
            "@type": "MedicalProcedure",
            name: "Colonoscopy",
            procedureType: "https://schema.org/DiagnosticProcedure",
            description:
              "Lower gastrointestinal endoscopy for bowel cancer screening, positive FOBT, polyp surveillance, rectal bleeding, and inflammatory bowel disease."
          },
          {
            "@type": "MedicalProcedure",
            name: "Oesophageal High-Resolution Manometry",
            procedureType: "https://schema.org/DiagnosticProcedure",
            description:
              "Tertiary-level physiological assessment of oesophageal motility, achalasia, non-cardiac chest pain, and refractory reflux."
          }
        ]
      },
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        url: baseUrl,
        name: `${siteConfig.name} - Melbourne Gastroenterology`,
        description: siteConfig.description,
        publisher: {
          "@id": `${baseUrl}/#physician`
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
