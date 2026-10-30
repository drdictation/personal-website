export const procedureDetails = {
  gastroscopy: {
    name: "Gastroscopy",
    title: "Gastroscopy in Melbourne",
    description: "Gastroscopy with A/Prof Chamara Basnayake in Melbourne. Learn about open-access referrals, preparation, recovery and hospital locations.",
    intro: "Associate Professor Chamara Basnayake performs gastroscopy at Melbourne private hospitals. Open-access referrals from GPs and specialists are considered after clinical review.",
    sections: [
      { title: "What is gastroscopy?", body: "A flexible camera examines the food pipe, stomach and first part of the small bowel. Small tissue samples may be taken. Your doctor may recommend it for swallowing difficulties, persistent upper digestive symptoms or investigation of coeliac disease." },
      { title: "Preparation and recovery", body: "Follow the hospital’s individual fasting and medicine instructions. Tell the team about your health conditions and medicines. Sedation is usually used; arrange someone to take you home and follow the team’s restrictions afterwards." },
      { title: "Benefits, risks and results", body: "Gastroscopy can help clarify a diagnosis. Risks include bleeding, a tear in the digestive tract and complications from sedation. Your team will discuss individual risks and alternatives. Biopsy results may need further follow-up." }
    ],
    resource: { title: "Healthdirect: gastroscopy", href: "https://www.healthdirect.gov.au/procedures/surgery/gastroscopy" }
  },
  colonoscopy: {
    name: "Colonoscopy",
    title: "Colonoscopy in Melbourne",
    description: "Colonoscopy and bowel cancer screening with A/Prof Chamara Basnayake in Melbourne. Open-access referrals, bowel preparation, recovery and hospital locations.",
    intro: "Associate Professor Chamara Basnayake performs colonoscopy for appropriate screening, investigation and surveillance at Melbourne private hospitals. GPs and specialists can request open-access assessment.",
    sections: [
      { title: "When is colonoscopy considered?", body: "A camera examines the large bowel. Indications include a positive bowel screening test, rectal bleeding, changes in bowel habits and follow-up after polyps. Tissue samples may be taken and polyps removed when appropriate." },
      { title: "Preparation and recovery", body: "Bowel cleansing is needed. Follow your hospital’s preparation, fasting and medicine instructions. Discuss blood thinners and diabetes medicines with the team. Sedation is usually used; arrange transport home and follow discharge instructions." },
      { title: "Benefits, risks and results", body: "Colonoscopy can identify disease and allow removal of polyps. Risks include bleeding, bowel perforation, sedation complications and missed abnormalities. Your team will discuss individual risks, alternatives and follow-up, including any tissue results." }
    ],
    resource: { title: "Healthdirect: colonoscopy", href: "https://www.healthdirect.gov.au/procedures/diagnostic-tests-and-scans/colonoscopy" }
  }
} as const;

export type ProcedureSlug = keyof typeof procedureDetails;
