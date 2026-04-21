import { DEFAULT_LOCALE, resolveLocale } from "@/lib/i18n/config";
import { localizeContent, mergeLocalizedContent } from "@/lib/i18n/content";

const pricingPageContent = {
  metadata: {
    title: "Compare Plans — MedTech Business",
    description: "Scalable healthcare training plans for teams and enterprises.",
  },
  hero: {
    backLabel: "Back to MedTech Career",
    eyebrow: "Plans & Pricing",
    titleLines: [
      { id: "lead", text: "Scalable learning plans for", highlight: false },
      { id: "accent", text: "healthcare organisations", highlight: true },
    ],
    description:
      "Whether you're training a small billing team or upskilling an entire hospital network, we have a plan built around your goals.",
  },
  plans: [
    {
      id: "team",
      label: "Team Plan",
      tagline: "For your team",
      seats: "2 – 50 staff",
      price: "₹24,000",
      priceNote: "per licence · per year, billed annually",
      cta: { label: "Get Started", href: "/business/contact" },
      highlight: false,
      icon: "users",
      features: [
        "Access to 14,000+ certified healthcare courses",
        "Certification prep for CPC, CRC, CCS & more",
        "Practice tests & AI-powered coding exercises",
        "Goal-focused learning recommendations",
        "AI Role Play to build real-world skills",
        "In-course AI Assistant for personalised support",
        "Adoption analytics & completion reports",
        "Admin recommendations to guide learners",
      ],
    },
    {
      id: "enterprise",
      label: "Enterprise Plan",
      tagline: "For your whole organisation",
      seats: "21+ staff",
      price: "Contact sales",
      priceNote: "custom pricing for your organisation",
      cta: { label: "Request a Demo", href: "/business/request-demo", external: true },
      highlight: true,
      icon: "building-2",
      badge: "Most Popular",
      features: [
        "Access to 30,000+ top healthcare courses",
        "Certification prep for 200+ industry exams",
        "Practice tests, AI coding exercises & AI Role Plays",
        "Technical & clinical skills assessments",
        "Goal-focused recommendations + customisable content",
        "Advanced analytics, skill insights & benchmarks",
        "Multi-language course collection (16 languages)",
        "Dedicated customer success team",
        "SSO, Reporting API & HRIS integrations",
        "AI features for learners and L&D admins",
        "Labs, workspaces & pre-built cert paths (add-on)",
        "Enhanced Premium Support (add-on)",
      ],
    },
    {
      id: "ai",
      label: "AI Healthcare Upskilling",
      tagline: "From AI foundations to org-wide transformation",
      seats: "21+ staff",
      price: "Contact sales",
      priceNote: "modular packages, starter to growth",
      cta: { label: "Contact Us", href: "/business/request-demo", external: true },
      highlight: false,
      icon: "brain",
      badge: "NEW",
      features: [
        "AI Readiness Collection — 50 curated courses + AI Assistant",
        "AI Growth Collection — 800+ courses & 30+ role paths",
        "Clinical AI for coders, billers & HIM professionals",
        "AI-enabled learning paths by speciality",
        "AI for Business Leaders workshops",
        "Cohort + on-demand hybrid delivery",
      ],
    },
    {
      id: "leadership",
      label: "Leadership Academy",
      tagline: "Cohort learning that drives transformation",
      seats: "Groups of 25+",
      price: "Contact sales",
      priceNote: "per cohort, structured programme",
      cta: { label: "Contact Us", href: "/business/request-demo", external: true },
      highlight: false,
      icon: "graduation-cap",
      features: [
        "MedTech Leadership Academy (12-week programme)",
        "Leading GenAI in Healthcare cohort",
        "Invested Leader & Executive Development",
        "Live facilitated sessions + async coursework",
        "Peer learning cohorts with dedicated coach",
        "Programme completion certificates",
      ],
    },
  ],
  note: {
    prefix:
      "* Add-on plans available on Enterprise. Nonprofit pricing available for registered organisations.",
    linkLabel: "Contact us",
    suffix: "to learn more.",
  },
  addonsSection: {
    label: "Enterprise Add-ons",
    title: "More ways to enhance your platform",
    items: [
      {
        id: "clinical-simulation-pro",
        icon: "zap",
        title: "Clinical Simulation Pro",
        description:
          "Supercharge clinical skills with multi-modal labs and pre-built certification learning paths.",
        tags: ["Labs", "Workspaces", "Pre-built cert paths"],
        linkLabel: "Contact us →",
      },
      {
        id: "premium-support",
        icon: "shield",
        title: "Premium Support",
        description:
          "Accelerate time-to-value with faster implementation, stronger adoption, and maximised learning time.",
        tags: ["Proactive guidance", "Technical advisory", "Priority support"],
        linkLabel: "Contact us →",
      },
      {
        id: "ai-role-play-enhanced",
        icon: "brain",
        title: "AI Role Play Enhanced",
        description:
          "Scale soft-skills practice with AI-powered custom role plays and interactive video avatars.",
        tags: ["Custom Role Plays", "Interactive Video Avatars"],
        linkLabel: "Contact us →",
      },
      {
        id: "ai-connectors",
        icon: "puzzle",
        title: "AI Connectors",
        description:
          "Access relevant learning through AI assistants, integrating skill development into daily workflows.",
        tags: ["LMS connectors", "SSO", "SOC 2 & GDPR compliant"],
        linkLabel: "Contact us →",
      },
    ],
  },
  comparisonSection: {
    label: "Feature Comparison",
    title: "Compare features",
    headers: {
      teamLabel: "Team",
      teamSeats: "2–50 staff",
      enterpriseLabel: "Enterprise",
      enterpriseSeats: "21+ staff",
    },
    footer: {
      teamCtaLabel: "Get Started",
      enterpriseCtaLabel: "Request a Demo",
    },
    categories: [
      {
        id: "course-management",
        category: "Course Management",
        rows: [
          { label: "Course assignment with custom messaging", team: false, enterprise: true },
          { label: "Custom user groups", team: false, enterprise: true },
          { label: "Advanced group management", team: false, enterprise: true },
          { label: "Assign learning content to employees/teams", team: false, enterprise: true },
          { label: "Customisable learning paths", team: false, enterprise: true },
        ],
      },
      {
        id: "analytics-and-reports",
        category: "Analytics & Reports",
        rows: [
          { label: "User adoption reports", team: true, enterprise: true },
          { label: "Individual user engagement", team: true, enterprise: true },
          { label: "Skill insights", team: false, enterprise: true },
          { label: "Skills proficiency dashboard", team: false, enterprise: true },
          { label: "Course insights", team: false, enterprise: true },
          { label: "Advanced engagement dashboard", team: false, enterprise: true },
        ],
      },
      {
        id: "learner-experience",
        category: "Learner Experience",
        rows: [
          { label: "Personalised course recommendations", team: true, enterprise: true },
          { label: "Coding exercises", team: true, enterprise: true },
          { label: "Quizzes & practice tests", team: true, enterprise: true },
          { label: "Q&A and peer discussion", team: true, enterprise: true },
          { label: "Assessments", team: false, enterprise: true },
          { label: "AI Role Play", team: false, enterprise: true },
          { label: "Multi-language collections", team: false, enterprise: true },
        ],
      },
      {
        id: "integrations",
        category: "Integrations",
        rows: [
          { label: "Single sign-on (SSO)", team: false, enterprise: true },
          { label: "Reporting API", team: false, enterprise: true },
          { label: "Course API", team: false, enterprise: true },
          { label: "HRIS / LMS integrations", team: false, enterprise: true },
        ],
      },
      {
        id: "support",
        category: "Support",
        rows: [
          { label: "24/7 customer support", team: true, enterprise: true },
          { label: "Access to customer success team", team: false, enterprise: true },
          { label: "Dedicated technical account manager", team: false, enterprise: true },
        ],
      },
    ],
  },
  languageSection: {
    titleLines: [
      { id: "lead", text: "Train your teams in their", highlight: false },
      { id: "accent", text: "native language", highlight: true },
    ],
    description:
      "Enterprise subscribers get instant access to our Multi-Language collection — 19,000+ courses across 16 languages, including Hindi, Tamil, and more.",
    primaryCtaLabel: "Request a Demo",
  },
  bottomCtaSection: {
    eyebrow: "Get Started Today",
    title: "Not sure which plan is right for you?",
    description:
      "Talk to one of our healthcare training specialists. We'll build a custom plan around your team size, speciality mix, and compliance requirements.",
    primaryCtaLabel: "Talk to an Expert",
    secondaryCtaLabel: "Explore Platform",
    trustItems: [
      { id: "rating", icon: "star", text: "Rated 4.8/5 by 2,000+ healthcare admins" },
      { id: "clients", icon: "heart-handshake", text: "500+ hospital & clinic clients" },
      { id: "guarantee", icon: "check", text: "30-day satisfaction guarantee" },
    ],
  },
};

const pricingPageTranslations = {
  hi: {
    metadata: {
      title: "प्लान तुलना करें — MedTech Business",
      description: "टीमों और एंटरप्राइज़ के लिए स्केलेबल हेल्थकेयर प्रशिक्षण योजनाएं।",
    },
    hero: {
      backLabel: "MedTech Career पर वापस जाएं",
      eyebrow: "प्लान और मूल्य निर्धारण",
      titleLines: [
        { id: "lead", text: "स्केलेबल शिक्षण योजनाएं", highlight: false },
        { id: "accent", text: "हेल्थकेयर संगठनों के लिए", highlight: true },
      ],
      description:
        "चाहे आप एक छोटी बिलिंग टीम को प्रशिक्षित कर रहे हों या पूरे अस्पताल नेटवर्क को अपस्किल कर रहे हों, हमारे पास आपके लक्ष्यों के अनुरूप एक प्लान है।",
    },
    note: {
      prefix:
        "* एंटरप्राइज़ प्लान पर ऐड-ऑन उपलब्ध हैं। पंजीकृत संगठनों के लिए गैर-लाभकारी मूल्य निर्धारण भी उपलब्ध है।",
      linkLabel: "हमसे संपर्क करें",
      suffix: "अधिक जानने के लिए।",
    },
    addonsSection: {
      label: "एंटरप्राइज़ ऐड-ऑन",
      title: "अपने प्लेटफ़ॉर्म को बेहतर बनाने के और तरीके",
      items: [
        {
          id: "clinical-simulation-pro",
          icon: "zap",
          title: "क्लिनिकल सिमुलेशन प्रो",
          description:
            "मल्टी-मोडल लैब्स और पहले से बने प्रमाणन लर्निंग पाथ्स के साथ क्लिनिकल कौशल को तेज़ करें।",
          tags: ["लैब्स", "वर्कस्पेसेस", "प्री-बिल्ट सर्ट पाथ्स"],
          linkLabel: "हमसे संपर्क करें →",
        },
        {
          id: "premium-support",
          icon: "shield",
          title: "प्रीमियम सपोर्ट",
          description:
            "तेज़ इम्प्लिमेंटेशन, बेहतर अपनाने और अधिकतम सीखने के समय के साथ वैल्यू तक पहुंचने का समय घटाएं।",
          tags: ["प्रोएक्टिव गाइडेंस", "टेक्निकल एडवाइजरी", "प्रायोरिटी सपोर्ट"],
          linkLabel: "हमसे संपर्क करें →",
        },
        {
          id: "ai-role-play-enhanced",
          icon: "brain",
          title: "AI रोल प्ले एन्हांस्ड",
          description:
            "AI-समर्थित कस्टम रोल प्ले और इंटरैक्टिव वीडियो अवतार के साथ सॉफ्ट-स्किल प्रैक्टिस को स्केल करें।",
          tags: ["कस्टम रोल प्ले", "इंटरैक्टिव वीडियो अवतार"],
          linkLabel: "हमसे संपर्क करें →",
        },
        {
          id: "ai-connectors",
          icon: "puzzle",
          title: "AI कनेक्टर्स",
          description:
            "AI असिस्टेंट्स के जरिए प्रासंगिक सीखने तक पहुंचें और स्किल डेवलपमेंट को रोज़मर्रा के वर्कफ़्लो में शामिल करें।",
          tags: ["LMS कनेक्टर्स", "SSO", "SOC 2 और GDPR अनुरूप"],
          linkLabel: "हमसे संपर्क करें →",
        },
      ],
    },
    comparisonSection: {
      label: "फ़ीचर तुलना",
      title: "फ़ीचर्स की तुलना करें",
      headers: {
        teamLabel: "टीम",
        teamSeats: "2–50 कर्मचारी",
        enterpriseLabel: "एंटरप्राइज़",
        enterpriseSeats: "21+ कर्मचारी",
      },
      footer: {
        teamCtaLabel: "शुरू करें",
        enterpriseCtaLabel: "डेमो का अनुरोध करें",
      },
    },
    languageSection: {
      titleLines: [
        { id: "lead", text: "अपनी टीमों को प्रशिक्षित करें", highlight: false },
        { id: "accent", text: "उनकी मातृभाषा में", highlight: true },
      ],
      description:
        "एंटरप्राइज़ सब्सक्राइबर हमारे मल्टी-लैंग्वेज कलेक्शन तक तुरंत पहुंच पाते हैं — 16 भाषाओं में 19,000+ कोर्स, जिनमें हिंदी, तमिल और अन्य शामिल हैं।",
      primaryCtaLabel: "डेमो का अनुरोध करें",
    },
    bottomCtaSection: {
      eyebrow: "आज ही शुरुआत करें",
      title: "पक्का नहीं कि आपके लिए कौन-सा प्लान सही है?",
      description:
        "हमारे हेल्थकेयर प्रशिक्षण विशेषज्ञों में से किसी एक से बात करें। हम आपकी टीम के आकार, स्पेशलिटी मिश्रण और अनुपालन आवश्यकताओं के अनुसार कस्टम प्लान बनाएंगे।",
      primaryCtaLabel: "विशेषज्ञ से बात करें",
      secondaryCtaLabel: "प्लेटफ़ॉर्म देखें",
      trustItems: [
        { id: "rating", icon: "star", text: "2,000+ हेल्थकेयर एडमिन द्वारा 4.8/5 रेटेड" },
        { id: "clients", icon: "heart-handshake", text: "500+ अस्पताल और क्लिनिक क्लाइंट" },
        { id: "guarantee", icon: "check", text: "30-दिन की संतुष्टि गारंटी" },
      ],
    },
  },
  ml: {
    metadata: {
      title: "പ്ലാനുകൾ താരതമ്യം ചെയ്യുക — MedTech Business",
      description: "ടീമുകൾക്കും എന്റർപ്രൈസുകൾക്കും സ്കേലേബിൾ ഹെൽത്കെയർ പരിശീലന പ്ലാനുകൾ.",
    },
    hero: {
      backLabel: "MedTech Career ലേക്ക് മടങ്ങുക",
      eyebrow: "പ്ലാനുകളും വിലനിർണ്ണയവും",
      titleLines: [
        { id: "lead", text: "സ്കേലേബിൾ പഠന പ്ലാനുകൾ", highlight: false },
        { id: "accent", text: "ഹെൽത്കെയർ സംഘടനകൾക്കായി", highlight: true },
      ],
      description:
        "ചെറിയ ബില്ലിംഗ് ടീമിനെ പരിശീലിപ്പിക്കുകയോ മുഴുവൻ ആശുപത്രി ശൃംഖലയെ അപ്‌സ്‌കിൽ ചെയ്യുകയോ ആയാലും, നിങ്ങളുടെ ലക്ഷ്യങ്ങൾക്ക് അനുയോജ്യമായ ഒരു പ്ലാൻ ഞങ്ങൾക്ക് ഉണ്ട്.",
    },
    note: {
      prefix:
        "* എന്റർപ്രൈസ് പ്ലാനുകളിൽ ആഡ്-ഓണുകൾ ലഭ്യമാണ്. രജിസ്റ്റർ ചെയ്ത സംഘടനകൾക്ക് നോൺപ്രോഫിറ്റ് വിലനിർണ്ണയവും ലഭ്യമാണ്.",
      linkLabel: "ഞങ്ങളുമായി ബന്ധപ്പെടുക",
      suffix: "കൂടുതൽ അറിയാൻ.",
    },
    addonsSection: {
      label: "എന്റർപ്രൈസ് ആഡ്-ഓണുകൾ",
      title: "നിങ്ങളുടെ പ്ലാറ്റ്‌ഫോം ശക്തിപ്പെടുത്താൻ കൂടുതൽ വഴികൾ",
      items: [
        {
          id: "clinical-simulation-pro",
          icon: "zap",
          title: "ക്ലിനിക്കൽ സിമുലേഷൻ പ്രോ",
          description:
            "മൾട്ടി-മോഡൽ ലാബുകളും മുൻകൂട്ടി തയ്യാറാക്കിയ സർട്ടിഫിക്കേഷൻ ലേണിംഗ് പാത്തുകളും ഉപയോഗിച്ച് ക്ലിനിക്കൽ കഴിവുകൾ ശക്തിപ്പെടുത്തുക.",
          tags: ["ലാബുകൾ", "വർക്ക്‌സ്പേസുകൾ", "പ്രീ-ബിൽറ്റ് സർട്ട് പാത്തുകൾ"],
          linkLabel: "ഞങ്ങളുമായി ബന്ധപ്പെടുക →",
        },
        {
          id: "premium-support",
          icon: "shield",
          title: "പ്രീമിയം പിന്തുണ",
          description:
            "വേഗത്തിലുള്ള ഇംപ്ലിമെന്റേഷൻ, ശക്തമായ ഉപയോഗം, പരമാവധി പഠനസമയം എന്നിവയിലൂടെ മൂല്യത്തിലെത്താനുള്ള സമയം കുറയ്ക്കുക.",
          tags: ["പ്രോആക്റ്റീവ് മാർഗനിർദേശം", "സാങ്കേതിക ഉപദേശം", "പ്രാഥമിക പിന്തുണ"],
          linkLabel: "ഞങ്ങളുമായി ബന്ധപ്പെടുക →",
        },
        {
          id: "ai-role-play-enhanced",
          icon: "brain",
          title: "AI റോൾ പ്ലേ എന്ഹാൻസ്ഡ്",
          description:
            "AI-പിന്തുണയുള്ള കസ്റ്റം റോൾ പ്ലേകളും ഇന്ററാക്ടീവ് വീഡിയോ അവതാറുകളും ഉപയോഗിച്ച് സോഫ്റ്റ്-സ്കിൽ പരിശീലനം വ്യാപിപ്പിക്കുക.",
          tags: ["കസ്റ്റം റോൾ പ്ലേകൾ", "ഇന്ററാക്ടീവ് വീഡിയോ അവതാറുകൾ"],
          linkLabel: "ഞങ്ങളുമായി ബന്ധപ്പെടുക →",
        },
        {
          id: "ai-connectors",
          icon: "puzzle",
          title: "AI കണക്ടറുകൾ",
          description:
            "AI അസിസ്റ്റന്റുകൾ വഴി പ്രസക്തമായ പഠനസാമഗ്രികൾ കൈവരിക്കുകയും കഴിവ് വികസനത്തെ ദിനംപ്രതി പ്രവൃത്തി പ്രവാഹങ്ങളിൽ ഉൾപ്പെടുത്തുകയും ചെയ്യുക.",
          tags: ["LMS കണക്ടറുകൾ", "SSO", "SOC 2 & GDPR അനുസൃതം"],
          linkLabel: "ഞങ്ങളുമായി ബന്ധപ്പെടുക →",
        },
      ],
    },
    comparisonSection: {
      label: "ഫീച്ചർ താരതമ്യം",
      title: "ഫീച്ചറുകൾ താരതമ്യം ചെയ്യുക",
      headers: {
        teamLabel: "ടീം",
        teamSeats: "2–50 ജീവനക്കാർ",
        enterpriseLabel: "എന്റർപ്രൈസ്",
        enterpriseSeats: "21+ ജീവനക്കാർ",
      },
      footer: {
        teamCtaLabel: "തുടങ്ങുക",
        enterpriseCtaLabel: "ഡെമോ അഭ്യർത്ഥിക്കുക",
      },
    },
    languageSection: {
      titleLines: [
        { id: "lead", text: "നിങ്ങളുടെ ടീമുകളെ പരിശീലിപ്പിക്കുക", highlight: false },
        { id: "accent", text: "അവരുടെ മാതൃഭാഷയിൽ", highlight: true },
      ],
      description:
        "എന്റർപ്രൈസ് സബ്സ്ക്രൈബർമാർക്ക് ഞങ്ങളുടെ മൾട്ടി-ലാംഗ്വേജ് കളക്ഷനിലേക്ക് തത്സമയം പ്രവേശനം ലഭിക്കും — ഹിന്ദിയും തമിഴും ഉൾപ്പെടെ 16 ഭാഷകളിലായി 19,000+ കോഴ്സുകൾ.",
      primaryCtaLabel: "ഡെമോ അഭ്യർത്ഥിക്കുക",
    },
    bottomCtaSection: {
      eyebrow: "ഇന്നുതന്നെ ആരംഭിക്കുക",
      title: "ഏത് പ്ലാൻ നിങ്ങള്ക്ക് അനുയോജ്യമെന്ന് ഉറപ്പില്ലേ?",
      description:
        "ഞങ്ങളുടെ ഹെൽത്കെയർ പരിശീലന വിദഗ്ധരിൽ ഒരാളുമായി സംസാരിക്കുക. നിങ്ങളുടെ ടീം വലുപ്പം, സ്പെഷ്യാലിറ്റി മിശ്രണം, അനുസരണ ആവശ്യങ്ങൾ എന്നിവയെ അടിസ്ഥാനമാക്കി ഞങ്ങൾ ഒരു കസ്റ്റം പ്ലാൻ തയ്യാറാക്കും.",
      primaryCtaLabel: "ഒരു വിദഗ്ധനോട് സംസാരിക്കുക",
      secondaryCtaLabel: "പ്ലാറ്റ്‌ഫോം പരിശോധിക്കുക",
      trustItems: [
        { id: "rating", icon: "star", text: "2,000+ ഹെൽത്കെയർ അഡ്മിന്മാർ 4.8/5 റേറ്റിംഗ് നൽകി" },
        { id: "clients", icon: "heart-handshake", text: "500+ ആശുപത്രി, ക്ലിനിക് ക്ലയന്റുകൾ" },
        { id: "guarantee", icon: "check", text: "30-ദിന സംതൃപ്തി ഉറപ്പ്" },
      ],
    },
  },
};

export function getPricingContent(locale = DEFAULT_LOCALE) {
  const resolvedLocale = resolveLocale(locale);

  if (resolvedLocale === DEFAULT_LOCALE) {
    return pricingPageContent;
  }

  const localizedBase = localizeContent(pricingPageContent, resolvedLocale);

  return mergeLocalizedContent(localizedBase, pricingPageTranslations[resolvedLocale]);
}