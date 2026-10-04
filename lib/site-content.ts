export type NavItem = {
  href: string;
  label: string;
};

export const siteConfig = {
  name: "Associate Professor Chamara Basnayake",
  role: "Gastroenterologist and Endoscopist",
  qualifications: "MBBS (Hons), FRACP, PhD",
  shortName: "Assoc Prof Chamara Basnayake",
  location: "Melbourne, Victoria",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "https://www.drchamarabasnayake.com"),
  description:
    "Specialist gastroenterology care in Melbourne spanning digestive symptoms, bowel cancer screening, iron deficiency, reflux, inflammatory bowel disease, coeliac disease, eosinophilic oesophagitis, and oesophageal disorders.",
  googleScholar:
    "https://scholar.google.com/citations?user=0sERojoAAAAJ&hl=en&oi=ao",
  contact: {
    practice: "Focus Gastroenterology",
    addressLine1: "Suite 201, Level 2, 100 Victoria Parade",
    addressLine2: "East Melbourne 3002",
    phone: "(03) 9650 7917",
    fax: "(03) 9650 7910",
    email: "office@focusgastro.com.au",
    consultingStart: "13th of April 2026",
    mapsLink: "https://maps.app.goo.gl/BpizrFdGJtrZEmKF9",
    procedures: [
      "St Vincent's Private Hospital",
      "Epworth Freemasons",
      "Hobsons Bay Day Procedure Centre"
    ]
  }
};

export const navigation: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/conditions", label: "Conditions" },
  { href: "/procedures", label: "Procedures" },
  { href: "/for-patients", label: "For Patients" },
  { href: "/for-referrers", label: "For Referrers" },
  { href: "/research", label: "Research, Leadership & Media" },
  { href: "/contact", label: "Contact" }
];

export const homeContent = {
  hero: {
    eyebrow: "Academic gastroenterology with thoughtful personalised care",
    title: "Specialist Gastroenterology Care in Melbourne",
    summary:
      "An internationally recognised expert in gastroenterology, Associate Professor Chamara Basnayake provides high-quality care across both the public and private health sectors. He translates his active clinical research program into highly focused and thorough assessment for his patients.",
    primaryAction: { href: "/about", label: "About Dr Basnayake" },
    secondaryAction: { href: "/contact", label: "Contact" },
    highlights: [
      "General gastroenterology and endoscopy",
      "Bowel cancer screening, iron deficiency, reflux, and dysphagia",
      "Coeliac disease, inflammatory bowel disease, eosinophilic oesophagitis, and oesophageal motility disorders"
    ],
    credentials: [
      "MBBS (Hons), FRACP, PhD",
      "Associate Professor, University of Melbourne",
      "Clinical lead for the Oesophageal Physiology Laboratory and Multidisciplinary Functional Gut Clinic, St Vincent's Hospital",
      "Principal Investigator for clinical trials in Eosinophilic Oesophagitis and Coeliac Disease",
      "Fellowship in oesophageal motility disorders, KU Leuven, Belgium"
    ]
  },
  areasOfCare: [
    {
      title: "Digestive symptoms",
      description:
        "Assessment of abdominal pain, altered bowel habit, bloating, rectal bleeding, reflux, swallowing symptoms, and other persistent gastrointestinal concerns."
    },
    {
      title: "Bowel cancer screening",
      description:
        "Colonoscopy and surveillance planning for screening, family history, positive faecal occult blood testing, and follow-up after previous polyps."
    },
    {
      title: "Iron deficiency and anaemia",
      description:
        "Investigation of iron deficiency and occult gastrointestinal blood loss with a structured approach to endoscopic and broader diagnostic evaluation."
    },
    {
      title: "Inflammatory bowel disease",
      description:
        "Longitudinal care for ulcerative colitis and Crohn's disease, including multidisciplinary decision-making and evidence-based treatment planning."
    },
    {
      title: "Coeliac disease and eosinophilic oesophagitis",
      description:
        "Diagnosis, confirmation, and longer-term management with attention to symptom burden, nutritional issues, and appropriate follow-up."
    },
    {
      title: "Oesophageal disorders and reflux",
      description:
        "Specialist assessment of reflux, dysphagia, motility symptoms, and other oesophageal disorders."
    }
  ],
  procedures: {
    title: "Endoscopy and procedures",
    body:
      "Gastroscopy and colonoscopy procedures are performed as part of a specialist assessment. Open-access endoscopy is available where appropriate, while more complex indications are assessed via consultation.",
    items: [
      "Gastroscopy",
      "Colonoscopy",
      "Specialist assessment"
    ]
  },
  leadership: {
    title: "Academic and clinical leadership",
    body:
      "Alongside private consulting, Associate Professor Basnayake is an Associate Professor at the University of Melbourne and consultant gastroenterologist at St Vincent's Hospital Melbourne. He leads oesophageal physiology and multidisciplinary gastrointestinal service development while maintaining an active research and teaching program.",
    points: [
      "Clinical lead, oesophageal physiology laboratory at St Vincent's Hospital",
      "Co-founder, multidisciplinary functional gut disorders clinic",
      "Principal investigator for coeliac disease, eosinophilic oesophagitis, and motility trials",
      "GESA committee, editorial, and invited speaking roles"
    ]
  },
  location: {
    title: "Consulting location",
    body: `Consulting at Focus Gastroenterology from ${siteConfig.contact.consultingStart}.`
  }
};

export const aboutContent = {
  hero: {
    eyebrow: "Profile",
    title: "About Associate Professor Chamara Basnayake",
    intro:
      "Translating cutting-edge research directly into clinical practice, Associate Professor Chamara Basnayake maintains an active commitment to both the public and private health sectors."
  },
  biography: [
    "An internationally recognised expert in gastroenterology, Associate Professor Chamara Basnayake is committed to providing high-quality care across both the public and private health sectors, alongside an active clinical research program.",
    "He completed his medical and physician training at Monash University and Monash Health, followed by a PhD at the University of Melbourne and an advanced fellowship in oesophageal motility disorders at KU Leuven in Belgium. His PhD was awarded the TJ Martin Award for the best research project at St Vincent's Hospital Melbourne in 2022.",
    "His contributions to clinical research have been honoured globally, notably receiving the 2021 Ray Clouse Award from The Rome Foundation, the premier international society for functional gut disorders.",
    "As Clinical Lead for the Oesophageal Physiology Laboratory and Co-founder of the Multidisciplinary Functional Gut Clinic at St Vincent's Hospital Melbourne, he brings extensive tertiary experience to his consulting practice. By maintaining a selective private practice and limiting referral volume, he ensures every patient receives a comprehensive and unhurried assessment."
  ],
  sections: [
    {
      title: "Training and qualifications",
      body:
        "He completed his MBBS (Hons), FRACP, a University of Melbourne PhD, and advanced fellowship exposure in oesophageal motility disorders in Belgium."
    },
    {
      title: "Clinical expertise",
      body:
        "He accepts referrals including digestive symptoms, bowel cancer screening, iron deficiency and anaemia, coeliac disease, inflammatory bowel disease, reflux, dysphagia, eosinophilic oesophagitis, and specialist assessment of oesophageal disorders."
    },
    {
      title: "Academic roles",
      body:
        "Associate Professor Basnayake holds an academic appointment with the University of Melbourne, works as a consultant gastroenterologist at St Vincent's Hospital Melbourne, and serves as PhD Committee Chair in the Department of Surgery at the University of Melbourne. His academic activity is tightly linked to clinical practice, teaching, and supervision of higher-degree researchers."
    },
    {
      title: "Research interests",
      body:
        "His research interests include disorders of gut-brain interaction, oesophageal physiology, eosinophilic oesophagitis, inflammatory bowel disease, microbiota-based therapies including faecal microbiota transplantation in Crohn's disease, dietary interventions, and digital-health tools including AI applications in IBD. He has contributed to national and international publications and remains active in collaborative clinical research."
    },
    {
      title: "Leadership and service development",
      body:
        "He co-founded the multidisciplinary functional gut disorders clinic at St Vincent's Hospital in 2019 and is the clinical lead for the oesophageal physiology laboratory. His service-development work has included building referral pathways, expanding access to high-resolution manometry, introducing prospective outcomes collection, and convening regular multidisciplinary case forums across institutions."
    },
    {
      title: "Clinical trials and publications",
      body:
        "Selected work includes the MANTRA randomised controlled trial in Lancet Gastroenterology & Hepatology, long-term outcomes work in Clinical Gastroenterology & Hepatology, and systematic reviews in oesophageal disease, inflammatory bowel disease, and multidisciplinary gastrointestinal care. He also serves as principal investigator on pharmaceutical trials in coeliac disease, eosinophilic oesophagitis, and oesophageal motility disorders."
    }
  ],
  credibility: [
    "MBBS (Hons), FRACP, PhD",
    "John Burgess Prize for Best Medical Registrar, Monash Health",
    "TJ Martin Award for Best PhD Project, St Vincent's Hospital Melbourne (2022)",
    "Ray Clouse Award, Rome Foundation (2021)",
    "GESA Luminal Committee and former Young GESA steering committee",
    "BMC Gastroenterology editorial board member and regular peer reviewer"
  ]
};

export const conditionsContent = {
  hero: {
    eyebrow: "Conditions & Areas of Assessment",
    title: "Gastrointestinal Conditions & Symptoms",
    intro:
      "Associate Professor Chamara Basnayake provides specialist assessment for patients with general gastroenterological symptoms as well as focused subspecialty conditions. Consultations focus on careful clinical evaluation, targeted investigation, and collaborative care with general practice."
  },
  subspecialties: [
    {
      title: "Disorders of Gut-Brain Interaction & Irritable Bowel Syndrome (IBS)",
      description:
        "Assessment of persistent abdominal pain, altered bowel habits (diarrhoea or constipation), and chronic bloating. Assessment focuses on clarifying symptom patterns, identifying contributing factors, and developing structured, evidence-based management plans."
    },
    {
      title: "Oesophageal Disorders, Reflux & Dysphagia",
      description:
        "Evaluation of persistent heartburn, acid regurgitation, non-cardiac chest discomfort, and difficulty swallowing (dysphagia). Clinical assessment helps distinguish between reflux disease, structural problems, and oesophageal motility disorders."
    },
    {
      title: "Eosinophilic Oesophagitis (EoE)",
      description:
        "Specialist assessment and ongoing follow-up for adolescents and adults presenting with swallowing difficulties, food bolus obstruction, or confirmed eosinophilic oesophagitis, including endoscopic assessment with mucosal biopsies."
    },
    {
      title: "Coeliac Disease",
      description:
        "Diagnostic clarification, endoscopic biopsy confirmation, and clinical review for patients with suspected coeliac disease or ongoing digestive symptoms following diagnosis."
    },
    {
      title: "Inflammatory Bowel Disease (IBD)",
      description:
        "Diagnostic evaluation, endoscopic surveillance, and medical management for Crohn's disease and ulcerative colitis, coordinated in partnership with general practitioners."
    },
    {
      title: "Bowel Cancer Screening & Colorectal Polyp Surveillance",
      description:
        "Specialist consultation and colonoscopy following a positive National Bowel Cancer Screening Program (FOBT) result, a personal or family history of colorectal cancer, or for scheduled surveillance after previous polyps."
    }
  ],
  symptomGroups: [
    {
      title: "Common Digestive Symptoms Assessed",
      body:
        "A structured consultation can help clarify symptoms that are persistent, unexplained, or causing concern:",
      items: [
        "Abdominal pain or discomfort",
        "Change in bowel habit (diarrhoea, constipation, or alternating)",
        "Persistent reflux, heartburn, or regurgitation",
        "Difficulty swallowing (dysphagia) or food sticking",
        "Rectal bleeding or positive bowel cancer screening test (FOBT)",
        "Persistent bloating or abdominal distension",
        "Unexplained iron deficiency or weight loss"
      ]
    }
  ],
  note:
    "Where indicated, assessment may include diagnostic gastroscopy, colonoscopy, or specialized investigations arranged in communication with your referring doctor."
};

export const proceduresContent = {
  hero: {
    eyebrow: "Procedures",
    title: "Endoscopy and Procedures",
    intro:
      "Associate Professor Basnayake performs diagnostic and therapeutic endoscopy at accredited private hospital facilities in Melbourne, with an emphasis on appropriate indication, patient safety, and clear communication."
  },
  procedures: [
    {
      title: "Gastroscopy (Upper GI Endoscopy)",
      body:
        "Gastroscopy allows visual examination and mucosal biopsy of the oesophagus, stomach, and duodenum. It is commonly arranged to investigate persistent reflux, swallowing difficulties, suspected coeliac disease, upper abdominal pain, nausea, and iron deficiency. Procedures are performed under gentle sedation."
    },
    {
      title: "Colonoscopy & Polypectomy",
      body:
        "Colonoscopy is the primary procedure for evaluating the large bowel. Common indications include positive bowel cancer screening tests (FOBT), investigation of rectal bleeding or altered bowel habit, iron deficiency, surveillance following previous polyps, and assessment of inflammatory bowel disease. Polypectomy is performed when polyps are identified."
    }
  ],
  pathway:
    `Direct open-access gastroscopy and colonoscopy can be arranged for straightforward indications when clinically appropriate. Procedures are performed through ${siteConfig.contact.procedures.join(", ")}, with comprehensive reports provided promptly to referring doctors.`,
  publicPhysiologyNotice:
    "High-resolution oesophageal manometry and specialized oesophageal physiological testing are conducted through the public hospital system at the St Vincent's Hospital Melbourne Oesophageal Physiology Laboratory, where Associate Professor Basnayake serves as Clinical Lead."
};

export const patientsContent = {
  hero: {
    eyebrow: "For patients",
    title: "Appointment Information",
    intro:
      "Patients are encouraged to bring relevant information, including referrals and previous investigation results, so the consultation can focus on clinical assessment."
  },
  sections: [
    {
      title: "Referral requirements",
      body:
        "A current GP or specialist referral is generally required for private consultation. Referrals are most helpful when they clearly state the clinical question and include relevant medical history, current medications, previous endoscopy, imaging, and pathology where available."
    },
    {
      title: "What to bring",
      body:
        "Patients should bring the referral, a medication list, any recent blood tests or imaging reports, previous endoscopy reports, hospital discharge summaries if relevant, and details of allergies or significant past medical history."
    },
    {
      title: "Appointment preparation",
      body:
        "Preparation depends on the reason for review. Most initial consultations do not require fasting unless this has been specifically advised. If the appointment is primarily to discuss a procedure, existing investigation results are particularly helpful."
    },
    {
      title: "What to expect",
      body:
        "The consultation involves a review of symptoms, previous testing, medications, and medical history. This is followed by a discussion of further investigation, treatment, monitoring, or procedural assessment."
    }
  ],
  faqs: [
    {
      question: "Do I need a referral?",
      answer:
        "Yes. A valid GP or specialist referral is generally required for consultation and for Medicare rebate eligibility."
    },
    {
      question: "How do I prepare?",
      answer:
        "For standard consultation, no special preparation is usually needed unless the practice advises otherwise. If a procedure is being arranged, specific preparation instructions will be provided separately."
    },
    {
      question: "What happens at my appointment?",
      answer:
        "The appointment focuses on understanding the reason for referral, reviewing prior investigations, and deciding whether treatment, monitoring, or further testing is appropriate."
    },
    {
      question: "Where are procedures performed?",
      answer:
        `Procedures may be arranged through the most appropriate private or hospital-based pathway. Current private procedure locations include ${siteConfig.contact.procedures.join(", ")}.`
    },
    {
      question: "Are second opinions accepted?",
      answer:
        "Second-opinion referrals are considered selectively where there is a clearly defined clinical question and relevant prior results are available."
    }
  ]
};

export const referrersContent = {
  hero: {
    eyebrow: "For referrers",
    title: "Referral Information",
    intro:
      "The practice accepts referrals for general gastroenterology, bowel cancer screening, iron deficiency, reflux, dysphagia, inflammatory bowel disease, coeliac disease, eosinophilic oesophagitis, and oesophageal disorders."
  },
  sections: [
    {
      title: "Referral information",
      body:
        "Referrals are most useful when they outline the presenting issue, relevant duration, comorbidities, current medications, and any key pathology, imaging, or endoscopy findings already available. A concise referral question helps determine whether consultation, direct procedure access, or a more focused second-opinion review is the best pathway."
    },
    {
      title: "Procedure request pathways",
      body:
        `Direct referrals for gastroscopy, colonoscopy, or combined consultation and procedure assessment are welcomed where clinically appropriate. Prompt access to open-access endoscopy is available at ${siteConfig.contact.procedures.join(", ")}, with requests reviewed for indication, urgency, and whether prior consultation is advisable before endoscopy.`
    },
    {
      title: "Communication",
      body:
        "Consultation letters and procedure reports identify the working diagnosis, the purpose of investigation, and the planned follow-up."
    },
    {
      title: "Reporting and follow-up",
      body:
        "Second-opinion referrals are accepted for specific clinical questions. Where longer-term management is required, communication is structured to support continuity with general practice."
    }
  ],
  referralChecklist: [
    "Reason for referral and principal question",
    "Relevant blood tests, imaging, or endoscopy reports",
    "Medication list and anticoagulation details where relevant",
    "Family history of bowel cancer or gastrointestinal disease",
    "Preferred urgency or timing considerations"
  ]
};

export const researchContent = {
  hero: {
    eyebrow: "Research, leadership and media",
    title: "Academic Research and Clinical Trials",
    intro:
      "Associate Professor Basnayake maintains an active clinical research program exploring how gastroenterology care is delivered and evaluated."
  },
  sections: [
    {
      title: "Research",
      body:
        "His academic work includes the MANTRA randomised controlled trial and related outcomes research in multidisciplinary care for disorders of gut-brain interaction, together with studies in oesophageal physiology, inflammatory bowel disease, faecal microbiota transplantation in Crohn's disease, and service redesign. The through-line is practical clinical relevance and translation of evidence into clinical practice."
    },
    {
      title: "Clinical trials",
      body:
        "He serves as principal investigator on pharmaceutical trials in coeliac disease, eosinophilic oesophagitis, and oesophageal motility disorders, and contributes to collaborative translational work in inflammatory bowel disease and microbiota-based therapies. Trial participation may be considered for appropriate patients where a relevant study is available and clinically suitable."
    },
    {
      title: "Academic roles",
      body:
        "As an Associate Professor at the University of Melbourne, consultant gastroenterologist at St Vincent's Hospital Melbourne, and PhD Committee Chair in the Department of Surgery, he works across teaching, supervision, invited presentations, and clinically informed academic leadership."
    },
    {
      title: "Invited talks",
      body:
        "He has presented nationally and internationally on multidisciplinary gastrointestinal care, oesophageal and motility disorders, eosinophilic oesophagitis, and clinically relevant service innovation."
    },
    {
      title: "Publications",
      body:
        "Selected work includes publications in Lancet Gastroenterology & Hepatology, Clinical Gastroenterology & Hepatology, Neurogastroenterology & Motility, Inflammatory Bowel Diseases, and Journal of Gastroenterology and Hepatology. A live publication record is available via Google Scholar."
    },
    {
      title: "Leadership and media",
      body:
        "Leadership roles include GESA's Luminal Committee, previous Young GESA steering committee service, editorial board work with BMC Gastroenterology, and peer review for major gastroenterology journals. Public communication has also included Better Health Channel consumer content and media commentary on gut-brain disorders. Media and collaborator enquiries are best directed through the consulting office in the first instance."
    }
  ]
};

export const contactContent = {
  hero: {
    eyebrow: "Contact",
    title: "Consulting location and referral details",
    intro:
      "Appointments and referral enquiries are handled through Focus Gastroenterology. The practice does not use website contact forms or online booking; direct phone, fax, and email contact is preferred."
  },
  transport:
    "The East Melbourne consulting rooms are accessed easily via Victoria Parade tram routes, nearby paid parking, and major arterial roads from the eastern and northern suburbs. Patients are encouraged to allow extra time if travelling during peak periods.",
  referralNote:
    "Referrals may be sent by fax or email to the practice. Please include relevant investigation results and any urgency considerations."
};
