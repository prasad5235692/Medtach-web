import { DEFAULT_LOCALE, resolveLocale } from "@/lib/i18n/config";
import { localizeContent, mergeLocalizedContent } from "@/lib/i18n/content";

const analyticsPageContent = {
  metadata: {
    title: "Analytics & Reporting — MedTech Business",
    description:
      "Real-time dashboards, ROI metrics, and HR-ready reports for healthcare L&D teams.",
  },
  hero: {
    badge: "Analytics & Reporting",
    titleSegments: [
      { id: "lead", text: "Insights That Drive", highlight: false },
      { id: "accent", text: "Real Business Outcomes", highlight: true },
    ],
    description:
      "Move beyond completion percentages. MedTech Business analytics connect learning activity to coding accuracy, denial rates, and revenue cycle performance.",
    primaryCtaLabel: "See a Demo",
  },
  metrics: [
    { id: "real-time", value: "Real-time", label: "Dashboard updates" },
    { id: "exports", value: "CSV / PDF", label: "Export formats" },
    { id: "templates", value: "10+", label: "Report templates" },
    { id: "api", value: "API", label: "Data access option" },
  ],
  reportsSection: {
    label: "What You Can Measure",
    title: "Reporting for every stakeholder",
    items: [
      {
        id: "adoption",
        icon: "users",
        title: "User Adoption Report",
        description:
          "Track active learners, total hours spent, and login frequency across your entire organisation or filtered by branch and department.",
      },
      {
        id: "skills",
        icon: "trending-up",
        title: "Skills Proficiency Dashboard",
        description:
          "See which skills your teams have mastered and where gaps remain — mapped to real coding, billing, and compliance competencies.",
      },
      {
        id: "completion",
        icon: "pie-chart",
        title: "Course Completion & Scores",
        description:
          "Per-course completion rates, average assessment scores, and time-to-complete metrics to identify at-risk learners early.",
      },
      {
        id: "custom-builder",
        icon: "download",
        title: "Custom Report Builder",
        description:
          "Pull any combination of metrics into a branded report and schedule automated monthly or quarterly exports to your HR inbox.",
      },
    ],
  },
  roiSection: {
    label: "Prove the ROI of Learning",
    title: "Connect training to business metrics",
    description:
      "Our clients measure learning ROI in the metrics that matter most to healthcare executives: coding accuracy, first-pass claim rates, denial write-offs, and certification headcount.",
    stats: [
      {
        id: "accuracy",
        metric: "28%",
        label: "Average improvement in coding accuracy after 3 months",
      },
      {
        id: "denials",
        metric: "40%",
        label: "Reduction in denial write-offs reported by clients",
      },
      {
        id: "certifications",
        metric: "3×",
        label: "Faster certification timelines vs. self-study",
      },
    ],
  },
  ctaSection: {
    title: "Make your L&D budget accountable",
    description:
      "Talk to us about setting up a custom dashboard that speaks the language of your leadership team.",
    primaryCtaLabel: "Request Analytics Demo",
  },
};

const analyticsTranslations = {
  hi: {
    metadata: {
      title: "एनालिटिक्स और रिपोर्टिंग — MedTech Business",
      description: "हेल्थकेयर L&D टीमों के लिए रियल-टाइम डैशबोर्ड, ROI मेट्रिक्स और HR-रेडी रिपोर्ट्स।",
    },
    hero: {
      titleSegments: [
        { id: "lead", text: "ऐसी इनसाइट्स जो आगे बढ़ाएं", highlight: false },
        { id: "accent", text: "वास्तविक व्यावसायिक परिणाम", highlight: true },
      ],
    },
  },
  ml: {
    metadata: {
      title: "അനലിറ്റിക്സ് & റിപ്പോർട്ടിംഗ് — MedTech Business",
      description: "ഹെൽത്കെയർ L&D ടീമുകൾക്കായി റിയൽ-ടൈം ഡാഷ്ബോർഡുകൾ, ROI മെട്രിക്സുകൾ, HR-റെഡി റിപ്പോർട്ടുകൾ.",
    },
    hero: {
      titleSegments: [
        { id: "lead", text: "യഥാർത്ഥ ബിസിനസ് ഫലങ്ങൾ സൃഷ്ടിക്കുന്ന", highlight: false },
        { id: "accent", text: "ഇൻസൈറ്റുകൾ", highlight: true },
      ],
    },
  },
};

export function getAnalyticsContent(locale = DEFAULT_LOCALE) {
  const resolvedLocale = resolveLocale(locale);

  if (resolvedLocale === DEFAULT_LOCALE) {
    return analyticsPageContent;
  }

  const localizedBase = localizeContent(analyticsPageContent, resolvedLocale);
  return mergeLocalizedContent(localizedBase, analyticsTranslations[resolvedLocale]);
}