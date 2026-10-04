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
        description: siteConfig.description,
        image: `${baseUrl}/images/chamara-headshot.jpg`,
        url: baseUrl,
        telephone: siteConfig.contact.phone,
        email: siteConfig.contact.email,
        priceRange: "$$",
        medicalSpecialty: "https://schema.org/Gastroenterology",
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.contact.addressLine1,
          addressLocality: "East Melbourne",
          addressRegion: "VIC",
          postalCode: "3002",
          addressCountry: "AU"
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: -37.8087,
          longitude: 144.976
        },
        areaServed: [
          {
            "@type": "City",
            name: "Melbourne"
          },
          {
            "@type": "AdministrativeArea",
            name: "Victoria"
          },
          {
            "@type": "Country",
            name: "Australia"
          }
        ],
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
          "Crohn's Disease",
          "Ulcerative Colitis",
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
        "@type": "MedicalClinic",
        "@id": `${baseUrl}/#clinic`,
        name: siteConfig.contact.practice,
        medicalSpecialty: "https://schema.org/Gastroenterology",
        url: baseUrl,
        telephone: siteConfig.contact.phone,
        faxNumber: siteConfig.contact.fax,
        email: siteConfig.contact.email,
        priceRange: "$$",
        currenciesAccepted: "AUD",
        paymentAccepted: "Cash, Credit Card, Direct Debit",
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.contact.addressLine1,
          addressLocality: "East Melbourne",
          addressRegion: "VIC",
          postalCode: "3002",
          addressCountry: "AU"
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: -37.8087,
          longitude: 144.976
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
