export const blogPosts = [
  {
    slug: "what-is-medical-coding",
    title: "What Is Medical Coding? A Complete Beginner's Guide",
    excerpt:
      "Medical coding converts healthcare diagnoses, procedures, and services into universal alphanumeric codes. Learn how it powers the entire healthcare revenue cycle.",
    category: "Medical Coding",
    readTime: "6 min read",
    date: "February 18, 2026",
    author: "Dr. Meena Iyer",
    authorRole: "Senior Medical Coder",
    coverColor: "from-blue-900 to-blue-700",
    content: [
      "Medical coding is the process of translating healthcare diagnoses, procedures, medical services, and equipment into universal medical alphanumeric codes.",
      "The diagnoses and procedure codes are taken from medical record documentation, such as transcription of physician's notes, laboratory and radiologic results, etc.",
      "Medical coding professionals help ensure the codes are applied correctly during the medical billing process, which includes abstracting the information from documentation, assigning the appropriate codes, and creating a claim to be paid by insurance carriers.",
    ],
  },
  {
    slug: "medical-billing-career-guide",
    title: "Medical Billing Career Guide: Salaries, Roles & Growth",
    excerpt:
      "Thinking about a career in medical billing? Here's everything you need to know about roles, salaries, certifications, and career growth in 2026.",
    category: "Medical Billing",
    readTime: "5 min read",
    date: "January 15, 2026",
    author: "Rekha Venkatesh",
    authorRole: "RCM Consultant",
    coverColor: "from-purple-900 to-purple-700",
    content: [
      "Medical billing is one of the fastest-growing healthcare support careers globally. With the shift to digital health records, trained billing professionals are in high demand.",
      "Entry-level billing executives in India earn ₹3–5 LPA, while experienced AR specialists and team leads can command ₹8–15 LPA.",
      "Certifications like CMBS (Certified Medical Billing Specialist) significantly boost career prospects and salary potential.",
    ],
  },
  {
    slug: "cpc-exam-preparation-tips",
    title: "Top 10 CPC Exam Preparation Tips from Certified Coders",
    excerpt:
      "Preparing for the AAPC CPC exam? Our certified trainers share the top strategies, time management tricks, and study resources that lead to first-attempt success.",
    category: "CPC Certification",
    readTime: "7 min read",
    date: "March 5, 2026",
    author: "Prof. Ajay Khanna",
    authorRole: "CPC-certified Trainer",
    coverColor: "from-orange-800 to-orange-600",
    content: [
      "The Certified Professional Coder (CPC) exam is the gold standard for medical coders in the US healthcare industry. Passing it on your first attempt requires a smart preparation strategy.",
      "Start by mastering the ICD-10-CM Official Guidelines — at least 40% of exam questions test guideline knowledge rather than just code look-up.",
      "Practice with timed mock exams. The real CPC gives you 5 hours 40 minutes for 100 questions, so speed and accuracy drills are essential.",
    ],
  },
  {
    slug: "icd-10-vs-icd-11",
    title: "ICD-10 vs ICD-11: What Every Medical Coder Should Know",
    excerpt:
      "ICD-11 is here. Understand the key differences, transition timeline, and how to future-proof your coding skills for the next generation of clinical classification.",
    category: "Medical Coding",
    readTime: "5 min read",
    date: "February 28, 2026",
    author: "Dr. Sunitha Rao",
    authorRole: "Clinical Documentation Specialist",
    coverColor: "from-teal-900 to-teal-700",
    content: [
      "The World Health Organization released ICD-11 in 2019, and countries are progressively adopting it. Understanding the transition is crucial for practicing coders.",
      "ICD-11 offers a more granular, digital-first structure with over 55,000 unique codes compared to ICD-10's ~14,400 — enabling better specificity and global interoperability.",
      "For Indian healthcare BPOs serving US clients, ICD-10-CM remains the operative standard in the near term, but proactive learning of ICD-11 principles gives coders a long-term competitive advantage.",
    ],
  },
  {
    slug: "healthcare-bpo-career-path",
    title: "Starting a Career in Healthcare BPO: Your Roadmap",
    excerpt:
      "Healthcare BPO is a booming industry in India. From entry-level coding to AR management, here's how to plan a rewarding, high-growth career path.",
    category: "Career Guidance",
    readTime: "6 min read",
    date: "January 30, 2026",
    author: "Rekha Venkatesh",
    authorRole: "RCM Consultant",
    coverColor: "from-green-900 to-green-700",
    content: [
      "India is a global hub for healthcare BPO services, with thousands of positions in medical coding, billing, AR follow-up, prior authorisation, and clinical documentation.",
      "Life science and paramedical graduates — including those with BSc Nursing, BMLT, Pharmacy, and Microbiology backgrounds — are particularly well-suited for this industry.",
      "Career progression typically follows: Junior Coder → Senior Coder → Team Lead → Quality Analyst → Manager. With certifications and experience, 5-year earnings can reach ₹10–18 LPA.",
    ],
  },
  {
    slug: "hcc-risk-adjustment-coding",
    title: "HCC Risk Adjustment Coding: A High-Value Niche Skill",
    excerpt:
      "HCC coding for Medicare Advantage is one of the highest-paid niches in medical coding. Learn what it is, why it matters, and how to get certified.",
    category: "CRC / HCC Coding",
    readTime: "4 min read",
    date: "March 10, 2026",
    author: "Dr. Meena Iyer",
    authorRole: "Senior Medical Coder",
    coverColor: "from-indigo-900 to-indigo-700",
    content: [
      "Hierarchical Condition Category (HCC) coding is used in Medicare Advantage and ACO programmes to predict future healthcare costs and adjust provider payments accordingly.",
      "Certified Risk Coders (CRC) who master HCC mapping can earn significantly more than general coders — often ₹6–12 LPA at the entry-to-mid level in leading BPOs.",
      "Medtech Career's CRC programme covers the full AAPC CRC exam syllabus including ICD-10 HCC mappings, chart reviews, and Medicare documentation requirements.",
    ],
  },
];
export const getBlogBySlug = (slug) =>
  blogPosts.find((b) => b.slug === slug) ?? null;
