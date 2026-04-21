import { DEFAULT_LOCALE, resolveLocale } from "@/lib/i18n/config";
import { localizeContent, mergeLocalizedContent } from "@/lib/i18n/content";

const businessAboutContent = {
  metadata: {
    title: "About — MedTech Business",
    description:
      "Learn how MedTech Business helps healthcare organisations build high-performing coding, billing, and compliance teams.",
  },
  hero: {
    label: "About Us",
    title: "The Trusted Partner for Healthcare Learning",
    description:
      "MedTech Business is the enterprise arm of Medtech Career — India's leading healthcare education platform.",
  },
  storySection: {
    title: "Our Story",
    highlightText: "MedTech Business",
    paragraphs: [
      "Medtech Career was founded in 2015 by a group of healthcare professionals who saw a critical gap: skilled medical coders and billers were in short supply while hospitals struggled with revenue leakage and compliance penalties. We set out to close that gap with industry-grade education.",
      "As our individual-learner platform grew, enterprise clients began asking for something more structured — dedicated cohorts, custom curricula, and team-level reporting. That demand gave birth to MedTech Business, the organisation-facing arm of our platform.",
      "Today we partner with 500+ healthcare organisations, from independent clinics to multi-city hospital groups, delivering programmes that measurably improve coding accuracy, reduce claim denials, and accelerate certification timelines.",
    ],
  },
  highlights: [
    {
      id: "founded",
      icon: "building-2",
      title: "Founded 2015",
      description: "A decade of delivering certified healthcare education across India.",
    },
    {
      id: "partners",
      icon: "users",
      title: "500+ Partners",
      description: "Hospitals, clinics, and healthcare BPOs trust us for team training.",
    },
    {
      id: "pass-rate",
      icon: "trending-up",
      title: "95% Pass Rate",
      description: "Our certification prep programmes consistently outperform national averages.",
    },
    {
      id: "aligned",
      icon: "award",
      title: "AAPC & AHIMA Aligned",
      description: "Curriculum developed in partnership with credentialling bodies.",
    },
  ],
  ctaSection: {
    title: "Ready to partner with us?",
    description: "Let's build a customised learning programme for your organisation.",
    primaryCtaLabel: "Contact Our Team",
  },
};

const businessAboutTranslations = {
  hi: {
    metadata: {
      title: "हमारे बारे में — MedTech Business",
      description: "जानिए MedTech Business कैसे हेल्थकेयर संगठनों को उच्च-प्रदर्शन वाली कोडिंग, बिलिंग और कंप्लायंस टीमें बनाने में मदद करता है।",
    },
    hero: {
      title: "हेल्थकेयर लर्निंग के लिए भरोसेमंद पार्टनर",
    },
  },
  ml: {
    metadata: {
      title: "ഞങ്ങളേക്കുറിച്ച് — MedTech Business",
      description: "ഉയർന്ന പ്രകടനമുള്ള കോഡിംഗ്, ബില്ലിംഗ്, കോംപ്ലയൻസ് ടീമുകൾ നിർമ്മിക്കാൻ MedTech Business ഹെൽത്കെയർ സ്ഥാപനങ്ങളെ എങ്ങനെ സഹായിക്കുന്നുവെന്ന് അറിയൂ.",
    },
    hero: {
      title: "ഹെൽത്കെയർ ലേണിംഗിനായുള്ള വിശ്വസനീയ പങ്കാളി",
    },
  },
};

export function getBusinessAboutContent(locale = DEFAULT_LOCALE) {
  const resolvedLocale = resolveLocale(locale);

  if (resolvedLocale === DEFAULT_LOCALE) {
    return businessAboutContent;
  }

  const localizedBase = localizeContent(businessAboutContent, resolvedLocale);
  return mergeLocalizedContent(localizedBase, businessAboutTranslations[resolvedLocale]);
}