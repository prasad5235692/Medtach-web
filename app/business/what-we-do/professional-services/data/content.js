import { DEFAULT_LOCALE, resolveLocale } from "@/lib/i18n/config";
import { localizeContent, mergeLocalizedContent } from "@/lib/i18n/content";

const professionalServicesPageContent = {
  metadata: {
    title: "Professional Services — MedTech Business",
    description: "Custom curriculum design, consulting, and implementation support for healthcare organisations.",
  },
  hero: {
    badge: "Professional Services",
    titleSegments: [
      { id: "lead", text: "Get the Expertise You Need to", highlight: false },
      { id: "accent", text: "Achieve Goals Faster", highlight: true },
    ],
    description:
      "Our professional services team provides strategic consulting, custom curriculum design, and implementation support so your learning programme delivers measurable results.",
    primaryCtaLabel: "Talk to Our Consultants",
  },
  stats: [
    { id: "organisations", value: "500+", label: "Organisations Served" },
    { id: "satisfaction", value: "96%", label: "Client Satisfaction Score" },
    { id: "onboarding-time", value: "6 wk", label: "Average Onboarding Time" },
    { id: "setup-fees", value: "₹0", label: "Hidden Setup Fees" },
  ],
  servicesSection: {
    label: "What We Offer",
    title: "End-to-end support for your learning programme",
    items: [
      {
        id: "custom-curriculum-design",
        icon: "clipboard-list",
        title: "Custom Curriculum Design",
        description:
          "Our instructional designers work with your HIM and L&D teams to map course content to your specific speciality, payer mix, and workflow — not a generic template.",
      },
      {
        id: "learning-strategy-consulting",
        icon: "lightbulb",
        title: "Learning Strategy Consulting",
        description:
          "A dedicated learning consultant reviews your current training programmes, identifies gaps, and builds a multi-quarter roadmap aligned to your business goals.",
      },
      {
        id: "implementation-support",
        icon: "headphones",
        title: "Implementation Support",
        description:
          "Hands-on onboarding, LMS configuration, SCORM/xAPI integration, and SSO setup — all managed by our technical services team so your HR team doesn't have to.",
      },
      {
        id: "programme-management",
        icon: "refresh-cw",
        title: "Ongoing Programme Management",
        description:
          "Quarterly business reviews, content refresh cycles, and proactive learner engagement campaigns to keep completion rates high year-round.",
      },
    ],
  },
  deliverablesSection: {
    label: "What You'll Receive",
    title: "Concrete, tangible deliverables",
    items: [
      "Needs analysis and skills-gap assessment report",
      "Custom course curriculum and lesson outlines",
      "Branded learner portal with your organisation's logo and colours",
      "SCORM/xAPI content packages for your LMS",
      "Trainer guides, facilitator notes, and assessment banks",
      "Quarterly ROI and performance reports",
    ],
  },
  processSection: {
    title: "Our Process",
    description: "From first call to fully deployed learning programme in 6 weeks.",
    items: [
      {
        id: "discovery-call",
        step: "01",
        title: "Discovery Call",
        description:
          "We understand your organisation, team, goals, and current training gaps.",
      },
      {
        id: "needs-assessment",
        step: "02",
        title: "Needs Assessment",
        description:
          "Formal gap analysis and a learning strategy document delivered within 1 week.",
      },
      {
        id: "curriculum-build",
        step: "03",
        title: "Curriculum Build",
        description:
          "Custom content, assessments, and supporting materials developed by our team.",
      },
      {
        id: "launch-support",
        step: "04",
        title: "Launch & Support",
        description:
          "Platform setup, trainer briefing, and quarterly check-ins to track ROI.",
      },
    ],
  },
  ctaSection: {
    title: "Let's design your learning programme",
    description:
      "Book a free discovery call and our consultants will map out a custom plan for your organisation.",
    primaryCtaLabel: "Book a Discovery Call",
  },
};

const professionalServicesPageTranslations = {
  hi: {
    metadata: {
      title: "प्रोफेशनल सर्विसेज — MedTech Business",
      description: "हेल्थकेयर संगठनों के लिए कस्टम पाठ्यक्रम डिज़ाइन, कंसल्टिंग और इम्प्लिमेंटेशन सपोर्ट।",
    },
    hero: {
      titleSegments: [
        { id: "lead", text: "अपनी जरूरत की विशेषज्ञता पाएं", highlight: false },
        { id: "accent", text: "लक्ष्यों को तेज़ी से हासिल करें", highlight: true },
      ],
    },
  },
  ml: {
    metadata: {
      title: "പ്രൊഫഷണൽ സർവീസുകൾ — MedTech Business",
      description: "ഹെൽത്കെയർ സ്ഥാപനങ്ങൾക്കായി കസ്റ്റം പാഠ്യപദ്ധതി രൂപകൽപ്പന, കൺസൾട്ടിംഗ്, നടപ്പാക്കൽ പിന്തുണ.",
    },
    hero: {
      titleSegments: [
        { id: "lead", text: "നിങ്ങൾക്ക് വേണ്ട വിദഗ്ധത നേടൂ", highlight: false },
        { id: "accent", text: "ലക്ഷ്യങ്ങൾ വേഗത്തിൽ കൈവരിക്കൂ", highlight: true },
      ],
    },
  },
};

export function getProfessionalServicesContent(locale = DEFAULT_LOCALE) {
  const resolvedLocale = resolveLocale(locale);

  if (resolvedLocale === DEFAULT_LOCALE) {
    return professionalServicesPageContent;
  }

  const localizedBase = localizeContent(professionalServicesPageContent, resolvedLocale);

  return mergeLocalizedContent(localizedBase, professionalServicesPageTranslations[resolvedLocale]);
}