import { professionalRecognition, siteConfig } from "@/lib/site-content";

export function StructuredData() {
  const baseUrl = siteConfig.siteUrl.replace(/\/+$/, "");

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${baseUrl}/#person`,
        name: siteConfig.name,
        alternateName: [
          "Dr Chamara Basnayake",
          "A/Prof Chamara Basnayake",
          "Associate Professor Chamara Basnayake",
          "Chamara Basnayake"
        ],
        givenName: "Chamara",
        familyName: "Basnayake",
        honorificPrefix: "Associate Professor",
        jobTitle: siteConfig.role,
        honorificSuffix: siteConfig.qualifications,
        description: siteConfig.description,
        image: `${baseUrl}/images/chamara-headshot.jpg`,
        url: baseUrl,
        telephone: siteConfig.contact.phone,
        email: siteConfig.contact.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.contact.addressLine1,
          addressLocality: "East Melbourne",
          addressRegion: "VIC",
          postalCode: "3002",
          addressCountry: "AU"
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
          },
          {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "fellowship",
            name: "Fellow of GESA (FGESA), 2026"
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
          }
        ],
        award: professionalRecognition.map(({ title, detail }) => `${title}: ${detail}`),
        sameAs: [
          siteConfig.googleScholar,
          siteConfig.findAnExpert
        ],
        knowsAbout: [
          "Gastroenterology",
          "Endoscopy",
          "Colonoscopy",
          "Disorders of Gut-Brain Interaction (DGBI)",
          "Irritable Bowel Syndrome (IBS)",
          "Functional Dyspepsia",
          "Oesophageal Motility Disorders",
          "High-Resolution Oesophageal Manometry",
          "Eosinophilic Oesophagitis (EoE)",
          "Inflammatory Bowel Disease (IBD)",
          "Coeliac Disease",
          "Bowel Cancer Screening",
          "Polypectomy",
          "Iron Deficiency and Anaemia",
          "Gastro-oesophageal Reflux Disease (GORD)",
          "Dysphagia"
        ],
        worksFor: {
          "@id": `${baseUrl}/#clinic`
        }
      },
      {
        "@type": ["MedicalClinic", "Physician"],
        "@id": `${baseUrl}/#clinic`,
        name: siteConfig.contact.practice,
        medicalSpecialty: "https://schema.org/Gastroenterologic",
        url: `${baseUrl}/contact`,
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
        employee: {
          "@id": `${baseUrl}/#person`
        },
        hospitalAffiliation: siteConfig.contact.procedures.map((name) => ({
          "@type": "Hospital",
          name
        })),
        availableService: [
          {
            "@type": "MedicalProcedure",
            name: "Gastroscopy",
            url: `${baseUrl}/procedures/gastroscopy`,
            procedureType: "https://schema.org/DiagnosticProcedure",
            description:
              "Diagnostic upper gastrointestinal endoscopy to assess reflux, swallowing difficulties, coeliac disease, and persistent upper digestive symptoms."
          },
          {
            "@type": "MedicalProcedure",
            name: "Colonoscopy",
            url: `${baseUrl}/procedures/colonoscopy`,
            procedureType: "https://schema.org/DiagnosticProcedure",
            description:
              "Lower gastrointestinal endoscopy for bowel cancer screening, positive FOBT, polyp surveillance, rectal bleeding, and inflammatory bowel disease."
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
          "@id": `${baseUrl}/#person`
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
