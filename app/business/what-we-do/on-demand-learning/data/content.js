import { DEFAULT_LOCALE, resolveLocale } from "@/lib/i18n/config";
import { localizeContent, mergeLocalizedContent } from "@/lib/i18n/content";

const onDemandLearningPageContent = {
  metadata: {
    title: "On-Demand Learning — MedTech Business",
    description: "Give your team anytime, anywhere access to 40+ certified healthcare courses.",
  },
  hero: {
    badge: "On-Demand Learning",
    titleSegments: [
      { id: "lead", text: "Upskill Your Team", highlight: false },
      { id: "accent", text: "On Their Schedule", highlight: true },
    ],
    description:
      "Give every member of your healthcare team flexible, 24/7 access to expert-led courses covering medical coding, billing, compliance, and revenue cycle management.",
    primaryCtaLabel: "Request a Demo",
    secondaryCtaLabel: "Compare Plans",
  },
  stats: [
    { id: "courses", value: "40+", label: "Certified Courses" },
    { id: "clients", value: "500+", label: "Healthcare Clients" },
    { id: "specialisations", value: "16", label: "Specialisations" },
    { id: "access", value: "24/7", label: "Learner Access" },
  ],
  benefitsSection: {
    label: "Why On-Demand?",
    title: "Here's what on-demand learning does for your organisation",
    items: [
      "Close skills gaps and improve coding accuracy across departments",
      "Develop talent from within and improve staff retention",
      "Support business continuity through regulatory and payer changes",
      "Reduce training overhead with a single, centralised platform",
      "Increase revenue by reducing claim denials and improving RCM efficiency",
    ],
    featureCards: [
      {
        id: "learn-anytime",
        icon: "clock",
        title: "Learn Anytime",
        description: "Self-paced modules that fit any shift pattern or work schedule.",
      },
      {
        id: "pan-india-access",
        icon: "globe",
        title: "Pan-India Access",
        description: "All branches on one platform — no per-branch licences needed.",
      },
      {
        id: "team-dashboards",
        icon: "users",
        title: "Team Dashboards",
        description: "Track every learner's progress across your organisation.",
      },
      {
        id: "roi-reporting",
        icon: "bar-chart-3",
        title: "ROI Reporting",
        description: "Measure productivity uplift and certification pass rates.",
      },
    ],
  },
  skillAreasSection: {
    label: "In-Demand Skills, On Demand",
    title: "What your team will learn",
    items: [
      {
        id: "medical-coding",
        title: "Medical Coding",
        description: "ICD-10-CM/PCS, CPT, HCPCS — inpatient and outpatient scenarios.",
      },
      {
        id: "medical-billing",
        title: "Medical Billing",
        description: "End-to-end claim submission, payer rules and ERA reconciliation.",
      },
      {
        id: "compliance",
        title: "Compliance",
        description: "HIPAA, CMS, and audit-readiness programmes.",
      },
      {
        id: "revenue-cycle",
        title: "Revenue Cycle",
        description: "Eligibility, denials, AR management and cash flow optimisation.",
      },
    ],
  },
  ctaSection: {
    title: "Ready to get started?",
    description: "Book a free 30-minute demo and see the platform in action.",
    primaryCtaLabel: "Book a Demo",
  },
};

const onDemandLearningPageTranslations = {
  hi: {
    metadata: {
      title: "ऑन-डिमांड लर्निंग — MedTech Business",
      description: "अपनी टीम को कहीं भी, कभी भी 40+ प्रमाणित हेल्थकेयर कोर्स तक पहुंच दें।",
    },
    hero: {
      titleSegments: [
        { id: "lead", text: "अपनी टीम के कौशल बढ़ाएं", highlight: false },
        { id: "accent", text: "उनके अपने समय पर", highlight: true },
      ],
    },
  },
  ml: {
    metadata: {
      title: "ഓൺ-ഡിമാൻഡ് ലേണിംഗ് — MedTech Business",
      description: "നിങ്ങളുടെ ടീമിന് എവിടെയും എപ്പോഴും 40+ സർട്ടിഫൈഡ് ഹെൽത്കെയർ കോഴ്സുകളിലേക്ക് പ്രവേശനം നൽകുക.",
    },
    hero: {
      titleSegments: [
        { id: "lead", text: "നിങ്ങളുടെ ടീമിനെ അപ്‌സ്‌കിൽ ചെയ്യൂ", highlight: false },
        { id: "accent", text: "അവരുടെ സ്വന്തം ഷെഡ്യൂളിൽ", highlight: true },
      ],
    },
  },
};

export function getOnDemandLearningContent(locale = DEFAULT_LOCALE) {
  const resolvedLocale = resolveLocale(locale);

  if (resolvedLocale === DEFAULT_LOCALE) {
    return onDemandLearningPageContent;
  }

  const localizedBase = localizeContent(onDemandLearningPageContent, resolvedLocale);

  return mergeLocalizedContent(localizedBase, onDemandLearningPageTranslations[resolvedLocale]);
}