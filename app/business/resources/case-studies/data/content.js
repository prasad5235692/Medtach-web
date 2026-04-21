import { DEFAULT_LOCALE, resolveLocale } from "@/lib/i18n/config";
import { localizeContent, mergeLocalizedContent } from "@/lib/i18n/content";

const caseStudiesPageContent = {
  metadata: {
    title: "Case Studies — MedTech Business",
    description: "See how healthcare organisations achieved measurable results with MedTech Business.",
  },
  hero: {
    badge: "Case Studies",
    titleSegments: [
      { id: "lead", text: "Real Outcomes from", highlight: false },
      { id: "accent", text: "Real Healthcare Teams", highlight: true },
    ],
    description:
      "See how India's leading hospitals and healthcare organisations used MedTech Business to improve coding accuracy, reduce denials, and certify their teams.",
  },
  sectionTitle: "Case Studies",
  items: [
    {
      id: "apollo-hospitals",
      org: "Apollo Hospitals",
      type: "Multi-city Hospital Group",
      headline: "Coding accuracy improved by 28% in 3 months",
      challenge:
        "Apollo's HIM team struggled with ICD-10-PCS accuracy for complex inpatient procedures, leading to a 15% claim rejection rate from major payers.",
      solution:
        "We deployed a 12-week peer cohort programme for 80 coders across 6 branches, with weekly live sessions and branch-level progress dashboards.",
      results: [
        "28% improvement in coding accuracy",
        "Claim rejection rate dropped from 15% to 6%",
        "94% cohort completion rate",
        "22 coders went on to earn CPC credential",
      ],
      quote: "The structured curriculum is exactly what hospital teams need. Highly recommended.",
      quotee: "Dr. Kavitha R., HIM Director",
      icon: "building-2",
      color: "border-purple-200 bg-purple-50",
    },
    {
      id: "fortis-healthcare",
      org: "Fortis Healthcare",
      type: "Hospital Chain — 12 Units",
      headline: "Billing team confidence transformed in 8 weeks",
      challenge:
        "Fortis's revenue cycle team was losing over ₹40 lakhs per quarter to avoidable denials due to inconsistent billing practices across units.",
      solution:
        "MedTech Business delivered a custom RCM upskilling programme with unit-specific payer rules, denial analytics training, and supervisor coaching.",
      results: [
        "40% reduction in denial write-offs in Q1",
        "RCM team NPS score rose from 52 to 87",
        "Denial management turnaround cut from 18 to 7 days",
        "100% of supervisors completed compliance certification",
      ],
      quote: "Medtech Business gave our billing staff the confidence to handle complex payer requirements.",
      quotee: "Rajan Pillai, Revenue Cycle Head",
      icon: "trending-up",
      color: "border-purple-200 bg-purple-50",
    },
    {
      id: "manipal-health",
      org: "Manipal Health",
      type: "Healthcare Network",
      headline: "Completion rates rose from 60% to 94% with cohort model",
      challenge:
        "Previous self-paced training programmes had chronically low completion rates, with learners abandoning courses within the first two weeks.",
      solution:
        "We redesigned the learning programme as structured 8-week cohorts with peer accountability, bi-weekly live Q&As, and manager progress notifications.",
      results: [
        "Completion rate: 60% → 94%",
        "Time-to-competence cut by 35%",
        "Net certification headcount increased by 3×",
        "L&D cost-per-completion reduced by 22%",
      ],
      quote: "The cohort model meant our team learned together and supported each other.",
      quotee: "Sneha Menon, L&D Manager",
      icon: "award",
      color: "border-emerald-200 bg-emerald-50",
    },
  ],
  labels: {
    challenge: "The Challenge",
    results: "Results",
    solution: "The Solution",
  },
  ctaSection: {
    title: "Your success story starts here",
    description: "Book a call and let us design a programme for your organisation.",
    primaryCtaLabel: "Contact Us",
  },
};

const caseStudiesTranslations = {
  hi: {
    metadata: {
      title: "केस स्टडीज — MedTech Business",
      description: "देखें कि MedTech Business के साथ हेल्थकेयर संगठनों ने मापने योग्य परिणाम कैसे हासिल किए।",
    },
    hero: {
      titleSegments: [
        { id: "lead", text: "वास्तविक हेल्थकेयर टीमों से", highlight: false },
        { id: "accent", text: "वास्तविक परिणाम", highlight: true },
      ],
    },
  },
  ml: {
    metadata: {
      title: "കേസ് സ്റ്റഡികൾ — MedTech Business",
      description: "MedTech Business ഉപയോഗിച്ച് ഹെൽത്കെയർ സ്ഥാപനങ്ങൾ എങ്ങനെ അളക്കാവുന്ന ഫലങ്ങൾ നേടിയെന്നു കാണൂ.",
    },
    hero: {
      titleSegments: [
        { id: "lead", text: "യഥാർത്ഥ ഹെൽത്കെയർ ടീമുകളിൽ നിന്ന്", highlight: false },
        { id: "accent", text: "യഥാർത്ഥ ഫലങ്ങൾ", highlight: true },
      ],
    },
  },
};

export function getCaseStudiesContent(locale = DEFAULT_LOCALE) {
  const resolvedLocale = resolveLocale(locale);

  if (resolvedLocale === DEFAULT_LOCALE) {
    return caseStudiesPageContent;
  }

  const localizedBase = localizeContent(caseStudiesPageContent, resolvedLocale);
  return mergeLocalizedContent(localizedBase, caseStudiesTranslations[resolvedLocale]);
}