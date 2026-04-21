import { DEFAULT_LOCALE, resolveLocale } from "@/lib/i18n/config";
import { localizeContent, mergeLocalizedContent } from "@/lib/i18n/content";

const customerSuccessPageContent = {
  metadata: {
    title: "Customer Success — MedTech Business",
    description:
      "Dedicated partner support and 24/7 learner assistance for every MedTech Business client.",
  },
  hero: {
    badge: "Customer Success",
    titleSegments: [
      { id: "lead", text: "A Partner, Not Just", highlight: false },
      { id: "accent", text: "a Platform", highlight: true },
    ],
    description:
      "Our customer success team is invested in your outcomes. From onboarding to QBRs, we're with you at every stage of your learning programme.",
    primaryCtaLabel: "Meet Your Success Team",
  },
  featuresSection: {
    label: "How We Support You",
    title: "Success is built into every plan",
    items: [
      {
        id: "account-manager",
        icon: "user-check",
        title: "Dedicated Account Manager",
        description:
          "Every Enterprise client gets a named account manager who owns your success, conducts quarterly business reviews, and proactively flagging risks.",
        planLabel: "Enterprise Plan",
      },
      {
        id: "learner-support",
        icon: "clock",
        title: "24/7 Learner Support",
        description:
          "Round-the-clock help desk for learners with live chat and email support. Average first response time under 2 hours.",
        planLabel: "All Plans",
      },
      {
        id: "onboarding",
        icon: "message-square",
        title: "Onboarding & Adoption Coaching",
        description:
          "Structured onboarding sessions for your L&D and HR teams. We run adoption campaigns, send nudge emails, and help you build a learning culture from day one.",
        planLabel: "Professional & Enterprise",
      },
      {
        id: "quarterly-reviews",
        icon: "trending-up",
        title: "Quarterly Business Reviews",
        description:
          "Comprehensive QBRs covering usage data, ROI metrics, upcoming content releases, and a forward-looking roadmap aligned to your business goals.",
        planLabel: "Enterprise Plan",
      },
    ],
  },
  tiersSection: {
    label: "Support Tiers",
    title: "Support that grows with you",
    responseLabel: "First response in",
    items: [
      {
        id: "starter",
        name: "Starter",
        response: "48 hours",
        channels: ["Email"],
        features: ["Help centre access", "Email support"],
        highlight: false,
      },
      {
        id: "professional",
        name: "Professional",
        response: "12 hours",
        channels: ["Email", "Live Chat"],
        features: [
          "Help centre access",
          "Email + live chat",
          "Monthly check-in call",
          "Onboarding session",
        ],
        highlight: false,
      },
      {
        id: "enterprise",
        name: "Enterprise",
        response: "2 hours",
        channels: ["Email", "Live Chat", "Phone", "Slack"],
        features: [
          "All Professional features",
          "Dedicated account manager",
          "Quarterly business reviews",
          "Priority escalation path",
          "Proactive adoption campaigns",
        ],
        highlight: true,
      },
    ],
  },
  ctaSection: {
    title: "Talk to our team today",
    description:
      "Find out which support tier is right for your organisation — no commitment required.",
    primaryCtaLabel: "Contact Customer Success",
  },
};

const customerSuccessTranslations = {
  hi: {
    metadata: {
      title: "कस्टमर सक्सेस — MedTech Business",
      description: "हर MedTech Business क्लाइंट के लिए समर्पित पार्टनर सपोर्ट और 24/7 शिक्षार्थी सहायता।",
    },
    hero: {
      titleSegments: [
        { id: "lead", text: "सिर्फ एक प्लेटफ़ॉर्म नहीं,", highlight: false },
        { id: "accent", text: "एक सच्चा पार्टनर", highlight: true },
      ],
    },
  },
  ml: {
    metadata: {
      title: "കസ്റ്റമർ സക്സസ് — MedTech Business",
      description: "ഓരോ MedTech Business ക്ലയന്റിനും സമർപ്പിത പങ്കാളി പിന്തുണയും 24/7 പഠിതൃ സഹായവും.",
    },
    hero: {
      titleSegments: [
        { id: "lead", text: "ഒരു പ്ലാറ്റ്ഫോം മാത്രമല്ല,", highlight: false },
        { id: "accent", text: "ഒരു യഥാർത്ഥ പങ്കാളി", highlight: true },
      ],
    },
  },
};

export function getCustomerSuccessContent(locale = DEFAULT_LOCALE) {
  const resolvedLocale = resolveLocale(locale);

  if (resolvedLocale === DEFAULT_LOCALE) {
    return customerSuccessPageContent;
  }

  const localizedBase = localizeContent(customerSuccessPageContent, resolvedLocale);
  return mergeLocalizedContent(localizedBase, customerSuccessTranslations[resolvedLocale]);
}