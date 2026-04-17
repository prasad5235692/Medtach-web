import { DEFAULT_LOCALE, resolveLocale } from "@/lib/i18n/config";

const dictionaries = {
  en: {
    metadata: {
      title: "Medtech Career — Healthcare & Academic Coaching",
      description:
        "Expert online courses in Medical Coding, Medical Billing, JEE, NEET, KCET, and School Board coaching.",
    },
    common: {
      languageLabel: "Language",
      languages: {
        en: "English",
        hi: "Hindi",
        ml: "Malayalam",
      },
    },
    nav: {
      home: "Home",
      about: "About",
      branches: "Branches",
      training: "Training",
      ourTeam: "Our Team",
      placements: "Placements",
      internship: "Internship",
      blog: "Blog",
      courses: "Courses",
      viewAllCourses: "View All Courses",
      more: "More",
      business: "MedTech Businesses",
      comparePlans: "Compare Plans",
      tryBusiness: "Try MedTech Businesses",
      joinAsMentor: "Join as Mentor",
      account: "Account",
      logout: "Logout",
      loginSignup: "Login / Signup",
      contactUs: "Contact Us",
      toggleMenu: "Toggle menu",
    },
  },
  hi: {
    metadata: {
      title: "मेडटेक करियर — हेल्थकेयर और अकादमिक कोचिंग",
      description:
        "मेडिकल कोडिंग, मेडिकल बिलिंग, JEE, NEET, KCET और स्कूल बोर्ड कोचिंग के लिए विशेषज्ञ ऑनलाइन पाठ्यक्रम।",
    },
    common: {
      languageLabel: "भाषा",
      languages: {
        en: "अंग्रेज़ी",
        hi: "हिंदी",
        ml: "मलयालम",
      },
    },
    nav: {
      home: "होम",
      about: "परिचय",
      branches: "शाखाएँ",
      training: "प्रशिक्षण",
      ourTeam: "हमारी टीम",
      placements: "प्लेसमेंट",
      internship: "इंटर्नशिप",
      blog: "ब्लॉग",
      courses: "कोर्सेस",
      viewAllCourses: "सभी कोर्स देखें",
      more: "और",
      business: "मेडटेक बिज़नेस",
      comparePlans: "प्लान तुलना करें",
      tryBusiness: "मेडटेक बिज़नेस आज़माएँ",
      joinAsMentor: "मेंटोर बनें",
      account: "अकाउंट",
      logout: "लॉगआउट",
      loginSignup: "लॉगिन / साइनअप",
      contactUs: "संपर्क करें",
      toggleMenu: "मेन्यू टॉगल करें",
    },
  },
  ml: {
    metadata: {
      title: "മെഡ്ടെക് കരിയർ — ഹെൽത്ത്‌കെയർ, അക്കാദമിക് കോച്ചിംഗ്",
      description:
        "മെഡിക്കൽ കോഡിംഗ്, മെഡിക്കൽ ബില്ലിംഗ്, JEE, NEET, KCET, സ്കൂൾ ബോർഡ് പരിശീലനം എന്നിവയ്ക്കുള്ള വിദഗ്ധ ഓൺലൈൻ കോഴ്സുകൾ.",
    },
    common: {
      languageLabel: "ഭാഷ",
      languages: {
        en: "ഇംഗ്ലീഷ്",
        hi: "ഹിന്ദി",
        ml: "മലയാളം",
      },
    },
    nav: {
      home: "ഹോം",
      about: "ഞങ്ങളേക്കുറിച്ച്",
      branches: "ശാഖകൾ",
      training: "പരിശീലനം",
      ourTeam: "ഞങ്ങളുടെ ടീം",
      placements: "പ്ലേസ്‌മെന്റുകൾ",
      internship: "ഇന്റേൺഷിപ്പ്",
      blog: "ബ്ലോഗ്",
      courses: "കോഴ്സുകൾ",
      viewAllCourses: "എല്ലാ കോഴ്സുകളും കാണുക",
      more: "കൂടുതൽ",
      business: "മെഡ്ടെക് ബിസിനസ്സുകൾ",
      comparePlans: "പ്ലാനുകൾ താരതമ്യം ചെയ്യുക",
      tryBusiness: "മെഡ്ടെക് ബിസിനസ് പരീക്ഷിക്കുക",
      joinAsMentor: "മെന്ററാകുക",
      account: "അക്കൗണ്ട്",
      logout: "ലോഗ്‌ഔട്ട്",
      loginSignup: "ലോഗിൻ / സൈൻഅപ്പ്",
      contactUs: "ബന്ധപ്പെടുക",
      toggleMenu: "മെനു തുറക്കുക",
    },
  },
};

export function getDictionary(locale = DEFAULT_LOCALE) {
  return dictionaries[resolveLocale(locale)] ?? dictionaries[DEFAULT_LOCALE];
}

export function translate(dictionary, key, fallback = key) {
  return key
    .split(".")
    .reduce((value, part) => (value && typeof value === "object" ? value[part] : undefined), dictionary) ?? fallback;
}