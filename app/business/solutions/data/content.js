import { DEFAULT_LOCALE, resolveLocale } from "@/lib/i18n/config";
import { localizeContent, mergeLocalizedContent } from "@/lib/i18n/content";

const businessSolutionsContent = {
  metadata: {
    title: "Solutions — MedTech Business",
    description:
      "Explore training solutions for coders, billers, compliance teams, and healthcare revenue cycle leaders.",
  },
  hero: {
    label: "Our Programmes",
    title: "Training Solutions for Every Healthcare Role",
    description:
      "Purpose-built programmes for coders, billers, compliance teams, and revenue cycle professionals.",
  },
  solutions: [
    {
      id: "medical-coding-billing",
      icon: "book-open",
      title: "Medical Coding & Billing",
      description:
        "Comprehensive ICD-10-CM/PCS, CPT, and HCPCS training for hospital, clinic, and physician practice teams. Covers both inpatient and outpatient scenarios with real-world case studies.",
      tags: ["ICD-10", "CPT", "HCPCS", "Outpatient", "Inpatient"],
    },
    {
      id: "compliance-regulatory",
      icon: "shield-check",
      title: "Compliance & Regulatory",
      description:
        "HIPAA Privacy & Security, Medicare/Medicaid compliance, and payer-specific guidelines. Built for HIM directors, compliance officers, and billing supervisors.",
      tags: ["HIPAA", "CMS", "Payer Compliance", "Audit Readiness"],
    },
    {
      id: "certification-prep",
      icon: "award",
      title: "CPC / CRC Certification Prep",
      description:
        "Structured 12-week bootcamp aligned with AAPC and AHIMA exam blueprints. Live mock exams, doubt sessions, and post-exam support included.",
      tags: ["AAPC", "AHIMA", "CPC", "CRC", "CCS"],
    },
    {
      id: "revenue-cycle-management",
      icon: "trending-up",
      title: "Revenue Cycle Management",
      description:
        "End-to-end RCM training from patient registration and eligibility verification to denial management and AR follow-up, with payer-specific workflows.",
      tags: ["Eligibility", "Claims", "Denials", "AR Management"],
    },
    {
      id: "cohort-team-programmes",
      icon: "users",
      title: "Cohort & Team Programmes",
      description:
        "Dedicated cohorts of 10–100 learners with a single trainer, shared schedule, and group assessments. Ideal for onboarding batches and department upskilling.",
      tags: ["Team Learning", "Onboarding", "Cohort"],
    },
    {
      id: "analytics-reporting-suite",
      icon: "bar-chart-3",
      title: "Analytics & Reporting Suite",
      description:
        "Real-time dashboards showing learner progress, course completion rates, assessment scores, and ROI benchmarks — delivered directly to your HR portal.",
      tags: ["Dashboards", "ROI", "Learning Analytics"],
    },
  ],
  ctaSection: {
    title: "Can't find exactly what you need?",
    description:
      "We build customised programmes for any speciality or team size. Let's talk.",
    primaryCtaLabel: "Request a Custom Programme",
  },
};

const businessSolutionsTranslations = {
  hi: {
    metadata: {
      title: "सॉल्यूशन्स — MedTech Business",
      description: "कोडर्स, बिलर्स, कंप्लायंस टीमों और हेल्थकेयर रेवेन्यू साइकिल लीडर्स के लिए प्रशिक्षण समाधान देखें।",
    },
    hero: {
      title: "हर हेल्थकेयर भूमिका के लिए प्रशिक्षण समाधान",
    },
  },
  ml: {
    metadata: {
      title: "സൊല്യൂഷനുകൾ — MedTech Business",
      description: "കോഡർമാർ, ബില്ലർമാർ, കോംപ്ലയൻസ് ടീമുകൾ, ഹെൽത്കെയർ റവന്യൂ സൈക്കിൾ നേതാക്കൾ എന്നിവർക്കായുള്ള പരിശീലന പരിഹാരങ്ങൾ പരിശോധിക്കൂ.",
    },
    hero: {
      title: "ഓരോ ഹെൽത്കെയർ റോളിനും പരിശീലന പരിഹാരങ്ങൾ",
    },
  },
};

export function getBusinessSolutionsContent(locale = DEFAULT_LOCALE) {
  const resolvedLocale = resolveLocale(locale);

  if (resolvedLocale === DEFAULT_LOCALE) {
    return businessSolutionsContent;
  }

  const localizedBase = localizeContent(businessSolutionsContent, resolvedLocale);
  return mergeLocalizedContent(localizedBase, businessSolutionsTranslations[resolvedLocale]);
}