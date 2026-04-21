import { DEFAULT_LOCALE, resolveLocale } from "@/lib/i18n/config";
import { localizeContent, mergeLocalizedContent } from "@/lib/i18n/content";

const certificationPrepPageContent = {
  metadata: {
    title: "Certification Prep — MedTech Business",
    description: "Structured CPC, CRC, CCS & AHIMA exam bootcamps with live mentoring for your team.",
  },
  hero: {
    badge: "Certification Prep",
    titleSegments: [
      { id: "lead", text: "Develop and", highlight: false },
      { id: "accent", text: "Validate Skills", highlight: true },
    ],
    description:
      "Grow your employees' skills with AAPC- and AHIMA-aligned certification bootcamps. Badges and credentials they can share — respect they can earn.",
    primaryCtaLabel: "Enrol Your Team",
    secondaryCtaLabel: "View Plans",
  },
  stats: [
    { id: "pass-rate", value: "95%", label: "First-attempt pass rate" },
    { id: "duration", value: "12 wk", label: "Average prep duration" },
    { id: "credentials", value: "6", label: "Credentials covered" },
    { id: "passers", value: "200+", label: "Exam passers in 2024" },
  ],
  credentialsSection: {
    label: "Credentials We Prepare For",
    title: "Six industry-recognised certifications",
    items: [
      {
        id: "cpc",
        code: "CPC",
        body: "AAPC",
        full: "Certified Professional Coder",
        color: "bg-purple-50 text-purple-800 border-purple-200",
      },
      {
        id: "crc",
        code: "CRC",
        body: "AAPC",
        full: "Certified Risk Adjustment Coder",
        color: "bg-purple-50 text-purple-700 border-purple-200",
      },
      {
        id: "coc",
        code: "COC",
        body: "AAPC",
        full: "Certified Outpatient Coder",
        color: "bg-emerald-50 text-emerald-700 border-emerald-200",
      },
      {
        id: "ccs",
        code: "CCS",
        body: "AHIMA",
        full: "Certified Coding Specialist",
        color: "bg-purple-50 text-purple-800 border-purple-200",
      },
      {
        id: "rhit",
        code: "RHIT",
        body: "AHIMA",
        full: "Registered Health Information Tech",
        color: "bg-purple-50 text-purple-700 border-purple-200",
      },
      {
        id: "cpma",
        code: "CPMA",
        body: "AAPC",
        full: "Certified Professional Medical Auditor",
        color: "bg-emerald-50 text-emerald-700 border-emerald-200",
      },
    ],
  },
  programmeFeaturesSection: {
    label: "What's Included",
    title: "Everything your team needs to pass",
    items: [
      "12-week structured bootcamp aligned to the latest exam blueprint",
      "Live doubt-clearing sessions twice a week with certified instructors",
      "Full-length mock exams with detailed answer explanations",
      "Dedicated Slack/Teams channel for peer support",
      "Study materials, quick-reference guides, and code books included",
      "Post-exam re-attempt coaching at no extra cost",
    ],
  },
  processSection: {
    title: "How the Bootcamp Works",
    items: [
      {
        id: "enrol-assess",
        step: "01",
        icon: "book-open",
        title: "Enrol & Assess",
        description:
          "Your team takes a baseline diagnostic to identify knowledge gaps before training begins.",
      },
      {
        id: "learn-cohort",
        step: "02",
        icon: "users",
        title: "Learn in Cohort",
        description:
          "12 weeks of live + self-paced study, mock exams, and weekly Q&A with certified trainers.",
      },
      {
        id: "certify-share",
        step: "03",
        icon: "award",
        title: "Certify & Share",
        description:
          "Pass the exam, receive your AAPC/AHIMA credential, and share your digital badge.",
      },
    ],
  },
  ctaSection: {
    title: "Ready to certify your team?",
    description:
      "Talk to us and we'll design a certification pathway that fits your schedule and headcount.",
    primaryCtaLabel: "Get a Free Consultation",
  },
};

const certificationPrepPageTranslations = {
  hi: {
    metadata: {
      title: "सर्टिफिकेशन प्रेप — MedTech Business",
      description: "आपकी टीम के लिए लाइव मेंटरिंग के साथ संरचित CPC, CRC, CCS और AHIMA परीक्षा बूटकैंप।",
    },
    hero: {
      titleSegments: [
        { id: "lead", text: "कौशल विकसित करें", highlight: false },
        { id: "accent", text: "और सत्यापित करें", highlight: true },
      ],
    },
  },
  ml: {
    metadata: {
      title: "സർട്ടിഫിക്കേഷൻ പ്രെപ് — MedTech Business",
      description: "നിങ്ങളുടെ ടീമിനായി ലൈവ് മെന്ററിംഗോടെ ഘടനാപരമായ CPC, CRC, CCS & AHIMA പരീക്ഷ ബൂട്ട്ക്യാമ്പുകൾ.",
    },
    hero: {
      titleSegments: [
        { id: "lead", text: "കഴിവുകൾ വികസിപ്പിക്കുക", highlight: false },
        { id: "accent", text: "കൂടാതെ ശരിവെക്കുക", highlight: true },
      ],
    },
  },
};

const certificationPrepLocalizedContent = {
  [DEFAULT_LOCALE]: certificationPrepPageContent,
  hi: mergeLocalizedContent(localizeContent(certificationPrepPageContent, "hi"), certificationPrepPageTranslations.hi),
  ml: mergeLocalizedContent(localizeContent(certificationPrepPageContent, "ml"), certificationPrepPageTranslations.ml),
};

export function getCertificationPrepContent(locale = DEFAULT_LOCALE) {
  const resolvedLocale = resolveLocale(locale);

  return certificationPrepLocalizedContent[resolvedLocale] ?? certificationPrepLocalizedContent[DEFAULT_LOCALE];
}