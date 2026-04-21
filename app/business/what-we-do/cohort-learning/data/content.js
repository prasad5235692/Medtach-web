import { DEFAULT_LOCALE, resolveLocale } from "@/lib/i18n/config";

const cohortLearningPageContent = {
  en: {
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
  },
  hi: {
    metadata: {
      title: "कोहोर्ट लर्निंग — MedTech Business",
      description: "टीम-आधारित, प्रशिक्षक-नेतृत्व वाले लर्निंग प्रोग्राम जो पूर्णता दर को 94%+ तक पहुंचाते हैं।",
    },
    hero: {
      badge: "कोहोर्ट लर्निंग",
      titleSegments: [
        { id: "lead", text: "अपने नेताओं को विकसित करें", highlight: false },
        { id: "accent", text: "निर्देशित, टीम-आधारित लर्निंग के साथ", highlight: true },
      ],
      description:
        "कोहोर्ट प्रोग्राम टीमों को जवाबदेह बनाए रखते हैं, सहकर्मी समर्थन नेटवर्क बनाते हैं, और अकेले सेल्फ-पेस्ड कोर्स की तुलना में 30% अधिक पूर्णता दर देते हैं।",
      primaryCtaLabel: "अपना कोहोर्ट बनाएं",
      secondaryCtaLabel: "प्लान देखें",
    },
    stats: [
      { id: "completion-rate", value: "94%", label: "औसत पूर्णता दर" },
      { id: "cohort-size", value: "10–100", label: "कोहोर्ट आकार सीमा" },
      { id: "duration", value: "8 wk", label: "सामान्य कोहोर्ट अवधि" },
      { id: "retention", value: "30%", label: "सेल्फ-पेस्ड की तुलना में अधिक रिटेंशन" },
    ],
    cohortTypesSection: {
      label: "प्रोग्राम प्रकार",
      title: "आपकी टीम की वृद्धि के हर चरण के लिए एक कोहोर्ट",
      items: [
        {
          id: "new-hire-onboarding",
          title: "नए कर्मचारियों का ऑनबोर्डिंग",
          description:
            "अपने वर्कफ़्लो और EHR सिस्टम के अनुसार अनुकूलित संरचित 4-सप्ताह के ऑनबोर्डिंग कोहोर्ट के साथ नए कोडर और बिलर को तेजी से उत्पादक बनाएं।",
          duration: "4 सप्ताह",
          size: "10–30 सीटें",
        },
        {
          id: "department-upskilling",
          title: "विभागीय अपस्किलिंग",
          description:
            "किसी मौजूदा टीम को नई स्पेशलिटी, पेयर, या रेगुलेटरी क्षेत्र में अपस्किल करें। कोहोर्ट न्यूनतम शेड्यूल बाधा के साथ रोज़मर्रा के काम के साथ चलते हैं।",
          duration: "6–8 सप्ताह",
          size: "20–60 सीटें",
        },
        {
          id: "certification-bootcamp",
          title: "सर्टिफिकेशन बूटकैंप",
          description:
            "AAPC/AHIMA क्रेडेंशियल्स को लक्षित करने वाली टीमों के लिए मॉक परीक्षाओं और लाइव डाउट सेशंस के साथ एक गहन कोहोर्ट-आधारित CPC/CRC/CCS प्रेप प्रोग्राम।",
          duration: "12 सप्ताह",
          size: "15–50 सीटें",
        },
        {
          id: "leadership-academy",
          title: "लीडरशिप अकादमी",
          description:
            "निर्देशित सेल्फ-पेस्ड मैनेजमेंट प्रोग्राम के साथ अपने HIM डायरेक्टर्स, कंप्लायंस लीड्स और कोडिंग सुपरवाइजर्स को विकसित करें।",
          duration: "10 सप्ताह",
          size: "25+ के समूह",
        },
      ],
    },
    benefitsSection: {
      label: "कोहोर्ट लर्निंग क्यों?",
      title: "साथ मिलकर सीखना बेहतर है",
      description:
        "जब आपकी टीम साथ में सीखती है, तो वे जवाबदेह रहती है, डोमेन ज्ञान साझा करती है, और ऐसे संबंध बनाती है जो कोर्स खत्म होने के बाद भी सहयोग को बेहतर बनाते हैं।",
      items: [
        "साझा शेड्यूल टीमों को जवाबदेह और ट्रैक पर रखता है",
        "एक समर्पित प्रशिक्षक के साथ 10–100 के कोहोर्ट आकार",
        "लाइव ग्रुप सेशंस, सहकर्मी चर्चाएं और टीम असाइनमेंट",
        "सेल्फ-पेस्ड लर्निंग की तुलना में 30% अधिक पूर्णता दर",
        "ऑनबोर्डिंग बैच, विभागीय अपस्किलिंग और नए कर्मचारियों के प्रोग्राम के लिए आदर्श",
        "L&D मैनेजर्स को वास्तविक समय में प्रगति दिखाई देती है",
      ],
      featureCards: [
        {
          id: "structured-schedule",
          icon: "calendar",
          title: "संरचित शेड्यूल",
          description: "निश्चित साप्ताहिक सेशंस और माइलस्टोन पूरे कोहोर्ट को एक ताल में रखते हैं।",
        },
        {
          id: "peer-interaction",
          icon: "message-square",
          title: "सहकर्मी सहभागिता",
          description: "डिस्कशन बोर्ड और ग्रुप असाइनमेंट गहरी डोमेन समझ विकसित करते हैं।",
        },
        {
          id: "group-analytics",
          icon: "bar-chart-3",
          title: "समूह विश्लेषण",
          description: "देखें कि हर व्यक्ति और पूरा कोहोर्ट किस तरह प्रगति कर रहा है।",
        },
      ],
    },
    testimonialSection: {
      quote:
        '"कोहोर्ट मॉडल की वजह से हमारी टीम ने साथ में सीखा और एक-दूसरे का समर्थन किया। पूर्णता दर 60% से बढ़कर 94% हो गई।"',
      name: "Sneha Menon",
      role: "L&D मैनेजर, Manipal Health",
    },
    ctaSection: {
      title: "आज ही अपनी टीम का कोहोर्ट बनाएं",
      description: "हमें अपने लक्ष्य, टीम का आकार और समय-सीमा बताएं — हम आपके लिए सही कोहोर्ट डिज़ाइन करेंगे।",
      primaryCtaLabel: "हमारी टीम से संपर्क करें",
    },
  },
  ml: {
    metadata: {
      title: "കോഹോർട്ട് ലേണിംഗ് — MedTech Business",
      description: "94%+ വരെ പൂർത്തീകരണ നിരക്ക് ഉയർത്തുന്ന ടീം-അധിഷ്ഠിത, പരിശീലകൻ നയിക്കുന്ന പഠന പരിപാടികൾ.",
    },
    hero: {
      badge: "കോഹോർട്ട് ലേണിംഗ്",
      titleSegments: [
        { id: "lead", text: "നിങ്ങളുടെ നേതാക്കളെ വളർത്തൂ", highlight: false },
        { id: "accent", text: "ഗൈഡഡ്, ടീം-ബേസ്ഡ് ലേണിംഗിലൂടെ", highlight: true },
      ],
      description:
        "കോഹോർട്ട് പ്രോഗ്രാമുകൾ ടീമുകളെ ഉത്തരവാദിത്തത്തോടെ മുന്നോട്ട് നയിക്കുകയും, സഹപ്രവർത്തക പിന്തുണാ ശൃംഖലകൾ സൃഷ്ടിക്കുകയും, ഒറ്റയ്ക്ക് സ്വയം പഠിക്കുന്ന കോഴ്‌സുകളേക്കാൾ 30% കൂടുതൽ പൂർത്തീകരണ നിരക്ക് നൽകുകയും ചെയ്യുന്നു.",
      primaryCtaLabel: "എന്റെ കോഹോർട്ട് നിർമ്മിക്കൂ",
      secondaryCtaLabel: "പ്ലാനുകൾ കാണുക",
    },
    stats: [
      { id: "completion-rate", value: "94%", label: "ശരാശരി പൂർത്തീകരണ നിരക്ക്" },
      { id: "cohort-size", value: "10–100", label: "കോഹോർട്ട് വലുപ്പ പരിധി" },
      { id: "duration", value: "8 wk", label: "സാധാരണ കോഹോർട്ട് ദൈർഘ്യം" },
      { id: "retention", value: "30%", label: "സ്വയം പഠനത്തേക്കാൾ കൂടുതലുള്ള നിലനിൽപ്പ്" },
    ],
    cohortTypesSection: {
      label: "പ്രോഗ്രാം തരം",
      title: "നിങ്ങളുടെ ടീമിന്റെ വളർച്ചയുടെ ഓരോ ഘട്ടത്തിനും ഒരു കോഹോർട്ട്",
      items: [
        {
          id: "new-hire-onboarding",
          title: "പുതിയ നിയമനങ്ങളുടെ ഓൺബോർഡിംഗ്",
          description:
            "നിങ്ങളുടെ വർക്ക്‌ഫ്ലോകൾക്കും EHR സിസ്റ്റത്തിനും അനുയോജ്യമായി രൂപകൽപ്പന ചെയ്ത 4 ആഴ്ചകളുള്ള ഘടിത ഓൺബോർഡിംഗ് കോഹോർട്ടിലൂടെ പുതിയ കോഡർമാരെയും ബില്ലർമാരെയും വേഗത്തിൽ ഉൽപ്പാദനക്ഷമരാക്കൂ.",
          duration: "4 ആഴ്ച",
          size: "10–30 സീറ്റുകൾ",
        },
        {
          id: "department-upskilling",
          title: "വിഭാഗ അപ്‌സ്‌കില്ലിംഗ്",
          description:
            "നിലവിലുള്ള ഒരു ടീമിനെ പുതിയ സ്പെഷ്യാലിറ്റി, പേയർ, അല്ലെങ്കിൽ റെഗുലേറ്ററി മേഖലയിലേക്കു അപ്‌സ്‌കിൽ ചെയ്യൂ. ദിനചര്യാ ജോലിക്ക് കുറഞ്ഞ തടസ്സത്തോടെ കോഹോർട്ടുകൾ ഒരുമിച്ച് മുന്നേറും.",
          duration: "6–8 ആഴ്ച",
          size: "20–60 സീറ്റുകൾ",
        },
        {
          id: "certification-bootcamp",
          title: "സർട്ടിഫിക്കേഷൻ ബൂട്ട്ക്യാമ്പ്",
          description:
            "AAPC/AHIMA ക്രെഡൻഷ്യലുകൾ ലക്ഷ്യമിടുന്ന ടീമുകൾക്കായി മോക് പരീക്ഷകളും ലൈവ് ഡൗട്ട് സെഷനുകളും ഉൾക്കൊള്ളുന്ന ഗഹനമായ CPC/CRC/CCS കോഹോർട്ട് പ്രെപ് പ്രോഗ്രാം.",
          duration: "12 ആഴ്ച",
          size: "15–50 സീറ്റുകൾ",
        },
        {
          id: "leadership-academy",
          title: "ലീഡർഷിപ്പ് അക്കാദമി",
          description:
            "ഗൈഡഡ് സ്വയംപഠന മാനേജ്മെന്റ് പ്രോഗ്രാമിലൂടെ നിങ്ങളുടെ HIM ഡയറക്ടർമാരെയും, കംപ്ലയൻസ് ലീഡുകളെയും, കോഡിംഗ് സൂപ്പർവൈസർമാരെയും വളർത്തൂ.",
          duration: "10 ആഴ്ച",
          size: "25+ അംഗങ്ങളുടെ ഗ്രൂപ്പുകൾ",
        },
      ],
    },
    benefitsSection: {
      label: "കോഹോർട്ട് ലേണിംഗ് എന്തുകൊണ്ട്?",
      title: "ഒരുമിച്ച് പഠിക്കുമ്പോൾ ഫലം കൂടുതൽ",
      description:
        "നിങ്ങളുടെ ടീം ഒരുമിച്ച് പഠിക്കുമ്പോൾ അവർ ഉത്തരവാദിത്തത്തോടെ തുടരുകയും, മേഖലാസംബന്ധിയായ അറിവ് പങ്കിടുകയും, കോഴ്സ് അവസാനിച്ച ശേഷവും സഹകരണത്തെ മെച്ചപ്പെടുത്തുന്ന ബന്ധങ്ങൾ പടുത്തുയർക്കുകയും ചെയ്യുന്നു.",
      items: [
        "പങ്കിട്ട ഷെഡ്യൂൾ ടീമുകളെ ഉത്തരവാദിത്തത്തോടെയും ട്രാക്കിലുമായി നിലനിർത്തുന്നു",
        "ഒരു സമർപ്പിത പരിശീലകനൊപ്പം 10–100 അംഗങ്ങളുള്ള കോഹോർട്ട് വലുപ്പങ്ങൾ",
        "ലൈവ് ഗ്രൂപ്പ് സെഷനുകൾ, സഹപാഠി ചർച്ചകൾ, ടീം അസൈൻമെന്റുകൾ",
        "സ്വയം പഠനത്തേക്കാൾ 30% കൂടുതലുള്ള പൂർത്തീകരണ നിരക്ക്",
        "ഓൺബോർഡിംഗ് ബാച്ചുകൾക്കും, വിഭാഗ അപ്‌സ്‌കില്ലിംഗിനും, പുതിയ നിയമന പ്രോഗ്രാമുകൾക്കും ഏറ്റവും അനുയോജ്യം",
        "L&D മാനേജർമാർക്ക് തത്സമയം പുരോഗതി കാണാം",
      ],
      featureCards: [
        {
          id: "structured-schedule",
          icon: "calendar",
          title: "ഘടിത ഷെഡ്യൂൾ",
          description: "സ്ഥിരമായ ആഴ്ച്ചചടങ്ങുകളും മൈൽസ്റ്റോണുകളും മുഴുവൻ കോഹോർട്ടിനെയും ഒരേ താളത്തിൽ നിർത്തുന്നു.",
        },
        {
          id: "peer-interaction",
          icon: "message-square",
          title: "സഹപാഠി ഇടപെടൽ",
          description: "ഡിസ്കഷൻ ബോർഡുകളും ഗ്രൂപ്പ് അസൈൻമെന്റുകളും ആഴത്തിലുള്ള മേഖലാ ബോധം വളർത്തുന്നു.",
        },
        {
          id: "group-analytics",
          icon: "bar-chart-3",
          title: "ഗ്രൂപ്പ് അനലിറ്റിക്സ്",
          description: "ഓരോ വ്യക്തിയും മുഴുവൻ കോഹോർട്ടും എങ്ങനെ മുന്നേറുന്നു എന്ന് വ്യക്തമായി കാണുക.",
        },
      ],
    },
    testimonialSection: {
      quote:
        '"കോഹോർട്ട് മോഡൽ കാരണം ഞങ്ങളുടെ ടീം ഒരുമിച്ച് പഠിക്കുകയും പരസ്പരം പിന്തുണയ്ക്കുകയും ചെയ്തു. പൂർത്തീകരണ നിരക്ക് 60%ൽ നിന്ന് 94% ആയി ഉയർന്നു."',
      name: "Sneha Menon",
      role: "L&D മാനേജർ, Manipal Health",
    },
    ctaSection: {
      title: "ഇന്ന് തന്നെ നിങ്ങളുടെ ടീമിന്റെ കോഹോർട്ട് നിർമ്മിക്കൂ",
      description: "നിങ്ങളുടെ ലക്ഷ്യങ്ങൾ, ടീം വലുപ്പം, സമയരേഖ എന്നിവ ഞങ്ങളോട് പറയൂ — നിങ്ങള്‍ക്കായി ഏറ്റവും അനുയോജ്യമായ കോഹോർട്ട് ഞങ്ങൾ രൂപകൽപ്പന ചെയ്യും.",
      primaryCtaLabel: "ഞങ്ങളുടെ ടീമിനെ ബന്ധപ്പെടൂ",
    },
  },
};

export function getCohortLearningContent(locale = DEFAULT_LOCALE) {
  const resolvedLocale = resolveLocale(locale);

  return cohortLearningPageContent[resolvedLocale] ?? cohortLearningPageContent[DEFAULT_LOCALE];
}