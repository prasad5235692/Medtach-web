import { DEFAULT_LOCALE, resolveLocale } from "@/lib/i18n/config";
import { localizeContent, mergeLocalizedContent } from "@/lib/i18n/content";

const cohortLearningPageContent = {
  metadata: {
    title: "Cohort Learning — MedTech Business",
    description: "Team-based, trainer-led learning programmes that drive completion rates to 94%+.",
  },
  hero: {
    badge: "Cohort Learning",
    titleSegments: [
      { id: "lead", text: "Grow Your Leaders with", highlight: false },
      { id: "accent", text: "Guided, Team-Based Learning", highlight: true },
    ],
    description:
      "Cohort programmes keep teams accountable, build peer support networks, and deliver 30% higher completion rates than solo self-paced courses.",
    primaryCtaLabel: "Build My Cohort",
    secondaryCtaLabel: "View Plans",
  },
  stats: [
    { id: "completion-rate", value: "94%", label: "Average completion rate" },
    { id: "cohort-size", value: "10–100", label: "Cohort size range" },
    { id: "duration", value: "8 wk", label: "Typical cohort duration" },
    { id: "retention", value: "30%", label: "Higher retention vs self-paced" },
  ],
  cohortTypesSection: {
    label: "Programme Types",
    title: "A cohort for every stage of your team's growth",
    items: [
      {
        id: "new-hire-onboarding",
        title: "New Hire Onboarding",
        description:
          "Get new coders and billers productive faster with a structured 4-week onboarding cohort customised to your workflows and EHR system.",
        duration: "4 weeks",
        size: "10–30 seats",
      },
      {
        id: "department-upskilling",
        title: "Department Upskilling",
        description:
          "Upskill an existing team in a new specialty, payer, or regulatory area. Cohorts run alongside day jobs with minimal schedule disruption.",
        duration: "6–8 weeks",
        size: "20–60 seats",
      },
      {
        id: "certification-bootcamp",
        title: "Certification Bootcamp",
        description:
          "An intensive cohort-based CPC/CRC/CCS prep programme with mock exams and live doubt sessions for teams targeting AAPC/AHIMA credentials.",
        duration: "12 weeks",
        size: "15–50 seats",
      },
      {
        id: "leadership-academy",
        title: "Leadership Academy",
        description:
          "Grow your HIM directors, compliance leads, and coding supervisors with a guided self-paced management programme.",
        duration: "10 weeks",
        size: "Groups of 25+",
      },
    ],
  },
  benefitsSection: {
    label: "Why Cohort Learning?",
    title: "Learning is better together",
    description:
      "When your team learns together, they stay accountable, share domain knowledge, and build relationships that improve collaboration long after the course ends.",
    items: [
      "Shared schedule keeps teams accountable and on track",
      "Cohort sizes of 10–100 with one dedicated trainer",
      "Live group sessions, peer discussions, and team assignments",
      "Completion rates 30% higher than self-paced learning",
      "Ideal for onboarding batches, department upskilling, and new hire programmes",
      "Progress visible to L&D managers in real time",
    ],
    featureCards: [
      {
        id: "structured-schedule",
        icon: "calendar",
        title: "Structured Schedule",
        description: "Fixed weekly sessions and milestones keep the entire cohort in sync.",
      },
      {
        id: "peer-interaction",
        icon: "message-square",
        title: "Peer Interaction",
        description: "Discussion boards and group assignments build deep domain understanding.",
      },
      {
        id: "group-analytics",
        icon: "bar-chart-3",
        title: "Group Analytics",
        description: "See how every individual and the cohort as a whole is progressing.",
      },
    ],
  },
  testimonialSection: {
    quote:
      '"The cohort model meant our team learned together and supported each other. Completion rates went from 60% to 94%."',
    name: "Sneha Menon",
    role: "L&D Manager, Manipal Health",
  },
  ctaSection: {
    title: "Build your team's cohort today",
    description: "Tell us your goals, team size, and timeline — we'll design the perfect cohort.",
    primaryCtaLabel: "Contact Our Team",
  },
};

const cohortLearningPageTranslations = {
  hi: {
    metadata: {
      title: "कोहोर्ट लर्निंग — MedTech Business",
      description: "टीम-आधारित, ट्रेनर-नेतृत्व वाले लर्निंग प्रोग्राम जो पूर्णता दर को 94%+ तक ले जाते हैं।",
    },
    hero: {
      titleSegments: [
        { id: "lead", text: "अपने नेताओं को विकसित करें", highlight: false },
        { id: "accent", text: "निर्देशित, टीम-आधारित लर्निंग के साथ", highlight: true },
      ],
    },
  },
  ml: {
    metadata: {
      title: "കോഹോർട്ട് ലേണിംഗ് — MedTech Business",
      description: "94%+ വരെ പൂർത്തീകരണ നിരക്ക് ഉയർത്തുന്ന ടീം-അധിഷ്ഠിത, ട്രെയിനർ-നേതൃത്വത്തിലുള്ള പഠന പരിപാടികൾ.",
    },
    hero: {
      titleSegments: [
        { id: "lead", text: "നിങ്ങളുടെ നേതാക്കളെ വളർത്തൂ", highlight: false },
        { id: "accent", text: "നിർദ്ദേശിത, ടീം-അധിഷ്ഠിത പഠനത്തിലൂടെ", highlight: true },
      ],
    },
  },
};

export function getCohortLearningContent(locale = DEFAULT_LOCALE) {
  const resolvedLocale = resolveLocale(locale);

  if (resolvedLocale === DEFAULT_LOCALE) {
    return cohortLearningPageContent;
  }

  const localizedBase = localizeContent(cohortLearningPageContent, resolvedLocale);

  return mergeLocalizedContent(localizedBase, cohortLearningPageTranslations[resolvedLocale]);
}