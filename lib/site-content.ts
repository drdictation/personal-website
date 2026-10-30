export type NavItem = {
  href: string;
  label: string;
};

export const siteConfig = {
  name: "Associate Professor Chamara Basnayake",
  role: "Gastroenterologist and Endoscopist",
  qualifications: "MBBS (Hons), FRACP, PhD, FGESA",
  shortName: "Assoc Prof Chamara Basnayake",
  location: "Melbourne, Victoria",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.drchamarabasnayake.com",
  description:
    "Specialist gastroenterology care in Melbourne spanning digestive symptoms, bowel cancer screening, iron deficiency, reflux, inflammatory bowel disease, coeliac disease, eosinophilic oesophagitis, and oesophageal disorders.",
  googleScholar:
    "https://scholar.google.com/citations?user=0sERojoAAAAJ&hl=en&oi=ao",
  findAnExpert:
    "https://findanexpert.unimelb.edu.au/profile/775850-chamara-basnayake",
  contact: {
    practice: "Focus Gastroenterology",
    addressLine1: "Suite 201, Level 2, 100 Victoria Parade",
    addressLine2: "East Melbourne 3002",
    phone: "(03) 9650 7917",
    fax: "(03) 9650 7910",
    email: "office@focusgastro.com.au",
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
  { href: "/research", label: "Research" },
  { href: "/contact", label: "Contact" }
];

export const referralPolicy = {
  title: "Private practice and referral enquiries",
  practice:
    "Associate Professor Basnayake maintains a focused private practice alongside his clinical leadership, research and teaching commitments at St Vincent’s Hospital Melbourne and the University of Melbourne.",
  capacity:
    "Although he receives second-opinion enquiries from within Victoria, interstate and overseas, capacity for these consultations is limited.",
  secondOpinions:
    "Second-opinion appointments require prior discussion and agreement with the referring doctor.",
  interstate:
    "New referrals for patients living interstate or overseas require prior discussion."
};

export const professionalRecognition = [
  {
    title: "Fellow of GESA",
    detail: "FGESA · 2026. Awarded in recognition of contributions to the Gastroenterological Society of Australia."
  },
  {
    title: "Ray Clouse Award",
    detail: "The Rome Foundation · 2021"
  },
  {
    title: "TJ Martin Award",
    detail: "Best PhD Project, St Vincent’s Hospital Melbourne · 2022"
  },
  {
    title: "John Burgess Prize",
    detail: "Best Medical Registrar, Monash Health"
  }
];

export const homeContent = {
  hero: {
    eyebrow: "Academic medicine. Considered clinical care.",
    title: "Gastroenterologist & Endoscopist in Melbourne",
    summary:
      "Associate Professor Chamara Basnayake combines specialist gastroenterology and endoscopy with clinical leadership at St Vincent’s Hospital Melbourne and an academic appointment at the University of Melbourne. He contributes to national guideline development and is an invited speaker in Australia and internationally.",
    primaryAction: { href: "/about", label: "About Dr Basnayake" },
    secondaryAction: { href: "/procedures", label: "Gastroscopy & colonoscopy" },
    highlights: [
      "Open-access gastroscopy, colonoscopy and bowel cancer screening",
      "General gastroenterology, inflammatory bowel disease and eosinophilic oesophagitis",
      "Subspecialty expertise in disorders of gut–brain interaction and oesophageal physiology"
    ],
    credentials: [
      siteConfig.qualifications,
      "Associate Professor, University of Melbourne",
      "Member, GESA Luminal Faculty; Fellow of GESA (2026)",
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
    title: "Open-access gastroscopy and colonoscopy",
    body:
      "GPs and specialists can refer directly for gastroscopy or colonoscopy. Each request is reviewed for clinical suitability, urgency and whether a consultation is needed first. Procedures are performed at private hospitals across Melbourne.",
    items: [
      "Gastroscopy",
      "Colonoscopy",
      "Specialist assessment"
    ]
  },
  leadership: {
    title: "Contributing to gastroenterology practice and research",
    body:
      "Alongside his clinical and university appointments, Associate Professor Basnayake contributes to national committees and guideline development in eosinophilic oesophagitis, coeliac disease and gastroparesis. His work includes GESA Luminal Faculty service, invited speaking in Australia and internationally, and supervision of PhD candidates.",
    points: [
      "Clinical lead, oesophageal physiology laboratory at St Vincent's Hospital",
      "Co-founder, multidisciplinary functional gut disorders clinic",
      "National guideline contributions: eosinophilic oesophagitis, coeliac disease and gastroparesis",
      "Member, GESA Luminal Faculty",
      "Invited speaker at Australian and international meetings",
      "PhD supervision and clinical trial leadership"
    ]
  },
  location: {
    title: "Consulting location",
    body: "Private consultations at Focus Gastroenterology, East Melbourne."
  }
};

export const aboutContent = {
  hero: {
    eyebrow: "Profile",
    title: "About Associate Professor Chamara Basnayake",
    intro:
      "An academic gastroenterologist and endoscopist contributing to clinical care, national guidelines, research and the training of future researchers."
  },
  biography: [
    "Associate Professor Chamara Basnayake is a consultant gastroenterologist at St Vincent’s Hospital Melbourne and an Associate Professor at the University of Melbourne. His work combines specialist clinical care, research, teaching and service development.",
    "He completed his medical and physician training at Monash University and Monash Health, followed by a PhD at the University of Melbourne and an advanced fellowship in oesophageal motility disorders at KU Leuven in Belgium. His PhD was awarded the TJ Martin Award for the best research project at St Vincent's Hospital Melbourne in 2022.",
    "His contributions to clinical research have been honoured globally, notably receiving the 2021 Ray Clouse Award from The Rome Foundation, the premier international society for functional gut disorders.",
    "He contributes to national committees and guideline development for eosinophilic oesophagitis, coeliac disease and gastroparesis, and serves on the GESA Luminal Faculty. In 2026, he was awarded Fellow of GESA (FGESA) in recognition of his contributions to the Society. He is invited to speak at local, national and international meetings and supervises PhD candidates.",
    "As Clinical Lead for the Oesophageal Physiology Laboratory and Co-founder of the Multidisciplinary Functional Gut Clinic at St Vincent’s Hospital Melbourne, he brings tertiary experience to a focused private practice in general gastroenterology and endoscopy."
  ],
  sections: [
    {
      title: "Training and qualifications",
      body:
        "His qualifications include MBBS (Hons), FRACP and a University of Melbourne PhD, with advanced fellowship training in oesophageal motility disorders in Belgium. He was awarded Fellow of GESA (FGESA) in 2026."
    },
    {
      title: "Clinical expertise",
      body:
        "He accepts referrals including digestive symptoms, bowel cancer screening, iron deficiency and anaemia, coeliac disease, inflammatory bowel disease, reflux, dysphagia, eosinophilic oesophagitis, and specialist assessment of oesophageal disorders."
    },
    {
      title: "Academic roles",
      body:
        "Associate Professor Basnayake holds an academic appointment with the University of Melbourne, works as a consultant gastroenterologist at St Vincent’s Hospital Melbourne, and serves as PhD Committee Chair in the Department of Surgery at the University of Melbourne. He supervises PhD candidates and contributes to research training and mentorship alongside his clinical and research work."
    },
    {
      title: "National committees and clinical guidelines",
      body:
        "He serves on the GESA Luminal Faculty and contributes to national committees and guideline development for eosinophilic oesophagitis, coeliac disease and gastroparesis. This professional service sits alongside his clinical leadership and research commitments."
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
    siteConfig.qualifications,
    "Member, GESA Luminal Faculty; former Young GESA steering committee",
    "National committee and guideline contributions in EoE, coeliac disease and gastroparesis",
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
    title: "Gastroscopy & Colonoscopy in Melbourne",
    intro:
      "Associate Professor Basnayake performs diagnostic and therapeutic endoscopy at accredited private hospital facilities in Melbourne, with an emphasis on appropriate indication, patient safety, and clear communication."
  },
  procedures: [
    {
      title: "Gastroscopy (Upper GI Endoscopy)",
      href: "/procedures/gastroscopy",
      body:
        "Gastroscopy examines the oesophagus, stomach and duodenum, with biopsies where needed. It may help investigate swallowing difficulties, persistent reflux, suspected coeliac disease, upper abdominal symptoms or iron deficiency. Sedation and preparation are discussed with the treating team."
    },
    {
      title: "Colonoscopy & Polypectomy",
      href: "/procedures/colonoscopy",
      body:
        "Colonoscopy is the primary procedure for evaluating the large bowel. Common indications include positive bowel cancer screening tests (FOBT), investigation of rectal bleeding or altered bowel habit, iron deficiency, surveillance following previous polyps, and assessment of inflammatory bowel disease. Polypectomy is performed when polyps are identified."
    }
  ],
  pathway:
    `Open-access gastroscopy and colonoscopy referrals are reviewed for clinical suitability before a procedure is arranged. A consultation may be recommended first. Procedures are performed through ${siteConfig.contact.procedures.join(", ")}, with reports provided to referring doctors.`,
  publicPhysiologyNotice:
    "High-resolution oesophageal manometry and specialized oesophageal physiological testing are conducted through the public hospital system at the St Vincent's Hospital Melbourne Oesophageal Physiology Laboratory, where Associate Professor Basnayake serves as Clinical Lead."
};

export const patientsContent = {
  hero: {
    eyebrow: "For patients",
    title: "Appointment Information",
    intro:
      "Patients are welcome to contact Focus Gastroenterology directly with enquiries. The rooms can explain the referral process and how a consultation or procedure is arranged. All requests are reviewed for clinical suitability."
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
      question: "Can I contact the rooms myself?",
      answer:
        "Yes. Patients can contact Focus Gastroenterology directly to ask about assessment or a procedure. The rooms will explain referral requirements and the next steps. Contacting the rooms does not confirm a procedure booking."
    }
  ]
};

export const referrersContent = {
  hero: {
    eyebrow: "For referrers",
    title: "Referral Information",
    intro:
      "Direct referrals are welcomed for clinically appropriate gastroscopy and colonoscopy, including bowel cancer screening and polyp surveillance. Consultation referrals include general gastroenterology, inflammatory bowel disease, eosinophilic oesophagitis and initial assessment of disorders of gut–brain interaction."
  },
  sections: [
    {
      title: "Referral information",
      body:
        "Please outline the clinical question, symptom duration, relevant history, current medications and any available pathology, imaging or previous endoscopy findings. Initial local referrals for disorders of gut–brain interaction are considered through clinical triage."
    },
    {
      title: "Procedure request pathways",
      body:
        `Direct referrals for gastroscopy, colonoscopy, or combined consultation and procedure assessment are welcomed where clinically appropriate. Open-access endoscopy is available at ${siteConfig.contact.procedures.join(", ")}. Requests are reviewed for indication, urgency and whether consultation is advisable before endoscopy.`
    },
    {
      title: "Communication",
      body:
        "Consultation letters and procedure reports identify the working diagnosis, the purpose of investigation, and the planned follow-up."
    },
    {
      title: "Reporting and follow-up",
      body:
        "Where longer-term management is required, consultation letters and procedure reports support continuity with general practice and identify the planned follow-up."
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
    title: "Research, Guidelines & Academic Leadership",
    intro:
      "Associate Professor Basnayake contributes to national guidelines, clinical research, PhD supervision and professional education, alongside his university and hospital leadership roles."
  },
  sections: [
    {
      title: "National committees and guidelines",
      body:
        "He contributes to national committees and guideline development for eosinophilic oesophagitis, coeliac disease and gastroparesis. He also serves on the Luminal Faculty of the Gastroenterological Society of Australia (GESA)."
    },
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
        "As an Associate Professor at the University of Melbourne and PhD Committee Chair in the Department of Surgery, he supervises PhD candidates and contributes to research training and mentorship. His academic work is closely connected to his clinical practice at St Vincent’s Hospital Melbourne."
    },
    {
      title: "Invited national and international speaking",
      body:
        "He is invited to speak at local, national and international meetings on disorders of gut–brain interaction, multidisciplinary gastrointestinal care, oesophageal physiology, eosinophilic oesophagitis and service development."
    },
    {
      title: "Publications",
      body:
        "Selected work includes publications in Lancet Gastroenterology & Hepatology, Clinical Gastroenterology & Hepatology, Neurogastroenterology & Motility, Inflammatory Bowel Diseases, and Journal of Gastroenterology and Hepatology. A live publication record is available via Google Scholar."
    },
    {
      title: "Leadership and media",
      body:
        "Professional service includes GESA Luminal Faculty membership, previous Young GESA steering committee service, editorial board work with BMC Gastroenterology, and peer review for gastroenterology journals. In 2026, he was awarded Fellow of GESA (FGESA) in recognition of contributions to the Society. Public communication includes Better Health Channel consumer content and commentary on gut–brain disorders. Media and collaborator enquiries can be directed through the consulting office."
    }
  ]
};

export const contactContent = {
  hero: {
    eyebrow: "Contact",
    title: "Consulting location and referral details",
    intro:
      "Appointments and referral enquiries are arranged directly through Focus Gastroenterology. Patients and referring doctors are welcome to contact the rooms by phone or email."
  },
  transport:
    "The East Melbourne consulting rooms are accessed easily via Victoria Parade tram routes, nearby paid parking, and major arterial roads from the eastern and northern suburbs. Patients are encouraged to allow extra time if travelling during peak periods.",
  referralNote:
    "Referrals may be sent by fax or email to the practice. Please include relevant investigation results and any urgency considerations."
};
