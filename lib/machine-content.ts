import {
  aboutContent, conditionsContent, contactContent, homeContent, navigation,
  patientsContent, proceduresContent, professionalRecognition, referralPolicy, referrersContent,
  researchContent, siteConfig
} from "@/lib/site-content";
import { procedureDetails } from "@/lib/procedure-content";

const sectionText = (sections: readonly { title: string; body: string }[]) =>
  sections.map(({ title, body }) => `### ${title}\n${body}`).join("\n\n");

export function machineContent(full = false): string {
  const baseUrl = siteConfig.siteUrl.replace(/\/+$/, "");
  const policy = Object.values(referralPolicy).slice(1).join("\n\n");
  const links = [
    ...navigation,
    ...Object.entries(procedureDetails).map(([slug, procedure]) => ({
      href: `/procedures/${slug}`, label: procedure.name
    }))
  ].map(({ href, label }) => `- [${label}](${baseUrl}${href})`).join("\n");

  const overview = `# ${siteConfig.name}

> ${siteConfig.role} in East Melbourne, Victoria, Australia. ${siteConfig.qualifications}.

${homeContent.hero.summary}

## Professional recognition
${professionalRecognition.map(({ title, detail }) => `- ${title}: ${detail}`).join("\n")}

## National and academic contributions
${homeContent.leadership.body}

## Clinical practice
${homeContent.procedures.body}

${conditionsContent.hero.intro}

${conditionsContent.subspecialties.map((item) => `- ${item.title}: ${item.description}`).join("\n")}

## Referral availability
${policy}

${patientsContent.faqs.find((faq) => faq.question === "Can I contact the rooms myself?")?.answer ?? ""}

## Practice contact
${siteConfig.contact.practice}
${siteConfig.contact.addressLine1}, ${siteConfig.contact.addressLine2}, Victoria, Australia
Phone: ${siteConfig.contact.phone}
Fax: ${siteConfig.contact.fax}
Email: ${siteConfig.contact.email}

${contactContent.hero.intro}

Procedure hospitals: ${siteConfig.contact.procedures.join("; ")}.

${proceduresContent.publicPhysiologyNotice}

## Pages
${links}
- [University of Melbourne profile](${siteConfig.findAnExpert})
- [Google Scholar publications](${siteConfig.googleScholar})
- [Full reference text](${baseUrl}/llms-full.txt)
`;

  if (!full) return overview;

  return `${overview}
## Biography
${aboutContent.biography.join("\n\n")}

${sectionText(aboutContent.sections)}

## Awards and affiliations
${aboutContent.credibility.map((item) => `- ${item}`).join("\n")}

## Endoscopy
${proceduresContent.hero.intro}

${Object.values(procedureDetails).map((procedure) => `### ${procedure.title}\n${procedure.intro}\n\n${sectionText(procedure.sections)}\n\nFurther information: ${procedure.resource.href}`).join("\n\n")}

## Patient information
${patientsContent.hero.intro}

${sectionText(patientsContent.sections)}

${patientsContent.faqs.map((faq) => `### ${faq.question}\n${faq.answer}`).join("\n\n")}

## Referring doctors
${referrersContent.hero.intro}

${referrersContent.referralChecklist.map((item) => `- ${item}`).join("\n")}

${sectionText(referrersContent.sections)}

## Research and leadership
${sectionText(researchContent.sections)}
`;
}
