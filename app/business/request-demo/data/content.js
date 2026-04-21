import { DEFAULT_LOCALE, resolveLocale } from "@/lib/i18n/config";
import { localizeContent, mergeLocalizedContent } from "@/lib/i18n/content";

const businessRequestDemoContent = {
  hero: {
    backLabel: "Back to MedTech Career",
    badge: "Free Demo",
    titleSegments: [
      { id: "lead", text: "Get your", highlight: false },
      { id: "accent", text: "personalised demo", highlight: true },
    ],
    description:
      "Tell us your needs and we'll build a custom plan to drive results for your healthcare team.",
  },
  benefitsTitle: "With MedTech Business as your learning partner, you can:",
  benefits: [
    {
      id: "workforce-training",
      icon: "building-2",
      text: "Train your entire workforce with 14,000+ certified healthcare courses",
    },
    {
      id: "certification-prep",
      icon: "check",
      text: "Prep employees for 200+ industry-recognised certification exams (CPC, CRC, CCS, RHIT & more)",
    },
    {
      id: "team-readiness",
      icon: "users",
      text: "Develop skilled coding & billing teams with hands-on practice environments",
    },
    {
      id: "analytics",
      icon: "bar-chart-3",
      text: "Identify skills gaps, learning trends, and team performance benchmarks",
    },
    {
      id: "integrations",
      icon: "puzzle",
      text: "Integrate seamlessly with your existing LMS, HRIS, and HR systems",
    },
    {
      id: "multi-language",
      icon: "globe",
      text: "Deliver training in 16 languages across multi-branch or remote teams",
    },
  ],
  trustedByTitle: "Trusted by India's leading healthcare organisations",
  trustedBy: [
    "Apollo Hospitals",
    "Fortis Healthcare",
    "Manipal Health",
    "Max Healthcare",
    "Narayana Health",
    "Aster DM Healthcare",
  ],
  stats: [
    { value: "500+", label: "Healthcare clients" },
    { value: "12,000+", label: "Staff upskilled" },
    { value: "95%", label: "Certification pass rate" },
  ],
  contactTitle: "Prefer to talk?",
  contactMethods: [
    {
      id: "phone",
      icon: "phone",
      value: "+91 98765 43210",
      href: "tel:+919876543210",
    },
    {
      id: "email",
      icon: "mail",
      value: "business@medtechcareer.com",
      href: "mailto:business@medtechcareer.com",
    },
  ],
  form: {
    title: "Tell us about your organisation",
    successTitle: "Thank you!",
    successDescription:
      "We've received your request. A MedTech Business specialist will contact you within 1 business day.",
    successLinkLabel: "Explore Platform",
    fields: {
      firstName: {
        label: "First Name *",
        placeholder: "Arjun",
      },
      lastName: {
        label: "Last Name *",
        placeholder: "Sharma",
      },
      email: {
        label: "Work Email *",
        placeholder: "arjun@hospital.com",
      },
      phone: {
        label: "Phone Number *",
        placeholder: "+91 98765 43210",
      },
      location: {
        label: "Where are you located? *",
        placeholder: "e.g. Bengaluru, Karnataka",
      },
      company: {
        label: "Company / Organisation Name *",
        placeholder: "Apollo Hospitals",
      },
      companySize: {
        label: "Company Size *",
        placeholder: "Select...",
        options: [
          { id: "1-10", label: "1-10 employees" },
          { id: "11-50", label: "11-50 employees" },
          { id: "51-200", label: "51-200 employees" },
          { id: "201-500", label: "201-500 employees" },
          { id: "501-1000", label: "501-1,000 employees" },
          { id: "1001-5000", label: "1,001-5,000 employees" },
          { id: "5001+", label: "5,001+ employees" },
        ],
      },
      learners: {
        label: "Number of people to train *",
        placeholder: "Select...",
        options: [
          { id: "2-10", label: "2-10" },
          { id: "11-25", label: "11-25" },
          { id: "26-50", label: "26-50" },
          { id: "51-100", label: "51-100" },
          { id: "101-500", label: "101-500" },
          { id: "500+", label: "500+" },
        ],
      },
      jobTitle: {
        label: "Job Title *",
        placeholder: "HIM Director",
      },
      jobLevel: {
        label: "Job Level *",
        placeholder: "Select...",
        options: [
          { id: "individual-contributor", label: "Individual Contributor" },
          { id: "manager", label: "Manager" },
          { id: "director", label: "Director" },
          { id: "vp-head", label: "VP / Head of Department" },
          { id: "c-suite", label: "C-Suite / Executive" },
          { id: "owner-founder", label: "Owner / Founder" },
        ],
      },
      needs: {
        label: "What are your organisation's training needs?",
        placeholder:
          "e.g. CPC certification for 20 coders, ICD-10 refresher, HIPAA compliance...",
      },
    },
    submitLabel: "Submit Request",
    termsPrefix: "By submitting, you agree to our",
    termsLabel: "Terms of Use",
    conjunctionLabel: "and",
    privacyLabel: "Privacy Policy",
    termsSuffix: "We may contact you about MedTech Business services.",
  },
};

const businessRequestDemoTranslations = {
  hi: {
    hero: {
      backLabel: "MedTech Career पर वापस जाएँ",
      badge: "मुफ़्त डेमो",
      titleSegments: [
        { id: "lead", text: "अपना", highlight: false },
        { id: "accent", text: "व्यक्तिगत डेमो प्राप्त करें", highlight: true },
      ],
      description:
        "अपनी ज़रूरतें बताइए और हम आपकी हेल्थकेयर टीम के लिए परिणाम देने वाली एक अनुकूलित योजना तैयार करेंगे।",
    },
    benefitsTitle: "MedTech Business को अपना लर्निंग पार्टनर बनाकर आप यह कर सकते हैं:",
    benefits: [
      {
        id: "workforce-training",
        icon: "building-2",
        text: "14,000+ प्रमाणित हेल्थकेयर कोर्स के साथ अपनी पूरी कार्यशक्ति को प्रशिक्षित करें",
      },
      {
        id: "certification-prep",
        icon: "check",
        text: "कर्मचारियों को 200+ उद्योग-मान्य प्रमाणन परीक्षाओं (CPC, CRC, CCS, RHIT आदि) के लिए तैयार करें",
      },
      {
        id: "team-readiness",
        icon: "users",
        text: "व्यावहारिक अभ्यास वातावरण के साथ कुशल कोडिंग और बिलिंग टीम विकसित करें",
      },
      {
        id: "analytics",
        icon: "bar-chart-3",
        text: "कौशल अंतर, सीखने के रुझान और टीम प्रदर्शन मानक पहचानें",
      },
      {
        id: "integrations",
        icon: "puzzle",
        text: "अपने मौजूदा LMS, HRIS और HR सिस्टम के साथ आसानी से एकीकृत करें",
      },
      {
        id: "multi-language",
        icon: "globe",
        text: "मल्टी-ब्रांच या रिमोट टीमों के लिए 16 भाषाओं में प्रशिक्षण दें",
      },
    ],
    trustedByTitle: "भारत की अग्रणी हेल्थकेयर संस्थाएँ हम पर भरोसा करती हैं",
    stats: [
      { value: "500+", label: "हेल्थकेयर क्लाइंट" },
      { value: "12,000+", label: "कर्मचारी अपस्किल्ड" },
      { value: "95%", label: "प्रमाणन पास दर" },
    ],
    contactTitle: "सीधे बात करना चाहते हैं?",
    form: {
      title: "अपनी संस्था के बारे में बताइए",
      successTitle: "धन्यवाद!",
      successDescription:
        "हमें आपका अनुरोध मिल गया है। MedTech Business विशेषज्ञ 1 कार्यदिवस के भीतर आपसे संपर्क करेंगे।",
      successLinkLabel: "प्लेटफ़ॉर्म देखें",
      fields: {
        firstName: {
          label: "पहला नाम *",
          placeholder: "अर्जुन",
        },
        lastName: {
          label: "अंतिम नाम *",
          placeholder: "शर्मा",
        },
        email: {
          label: "कार्य ईमेल *",
          placeholder: "arjun@hospital.com",
        },
        phone: {
          label: "फोन नंबर *",
          placeholder: "+91 98765 43210",
        },
        location: {
          label: "आप कहाँ स्थित हैं? *",
          placeholder: "उदा. बेंगलुरु, कर्नाटक",
        },
        company: {
          label: "कंपनी / संस्था का नाम *",
          placeholder: "Apollo Hospitals",
        },
        companySize: {
          label: "कंपनी का आकार *",
          placeholder: "चुनें...",
          options: [
            { id: "1-10", label: "1-10 कर्मचारी" },
            { id: "11-50", label: "11-50 कर्मचारी" },
            { id: "51-200", label: "51-200 कर्मचारी" },
            { id: "201-500", label: "201-500 कर्मचारी" },
            { id: "501-1000", label: "501-1,000 कर्मचारी" },
            { id: "1001-5000", label: "1,001-5,000 कर्मचारी" },
            { id: "5001+", label: "5,001+ कर्मचारी" },
          ],
        },
        learners: {
          label: "प्रशिक्षित किए जाने वाले लोगों की संख्या *",
          placeholder: "चुनें...",
          options: [
            { id: "2-10", label: "2-10" },
            { id: "11-25", label: "11-25" },
            { id: "26-50", label: "26-50" },
            { id: "51-100", label: "51-100" },
            { id: "101-500", label: "101-500" },
            { id: "500+", label: "500+" },
          ],
        },
        jobTitle: {
          label: "पदनाम *",
          placeholder: "HIM Director",
        },
        jobLevel: {
          label: "जॉब लेवल *",
          placeholder: "चुनें...",
          options: [
            { id: "individual-contributor", label: "व्यक्तिगत योगदानकर्ता" },
            { id: "manager", label: "मैनेजर" },
            { id: "director", label: "डायरेक्टर" },
            { id: "vp-head", label: "VP / विभाग प्रमुख" },
            { id: "c-suite", label: "C-Suite / Executive" },
            { id: "owner-founder", label: "Owner / Founder" },
          ],
        },
        needs: {
          label: "आपकी संस्था की प्रशिक्षण ज़रूरतें क्या हैं?",
          placeholder:
            "उदा. 20 कोडर्स के लिए CPC सर्टिफिकेशन, ICD-10 रिफ्रेशर, HIPAA अनुपालन...",
        },
      },
      submitLabel: "अनुरोध भेजें",
      termsPrefix: "सबमिट करके आप हमारी",
      termsLabel: "उपयोग की शर्तों",
      conjunctionLabel: "और",
      privacyLabel: "गोपनीयता नीति",
      termsSuffix: "से सहमत होते हैं। हम आपसे MedTech Business सेवाओं के बारे में संपर्क कर सकते हैं।",
    },
  },
  ml: {
    hero: {
      backLabel: "MedTech Career ലേക്ക് മടങ്ങുക",
      badge: "സൗജന്യ ഡെമോ",
      titleSegments: [
        { id: "lead", text: "നിങ്ങളുടെ", highlight: false },
        { id: "accent", text: "വ്യക്തിഗത ഡെമോ നേടൂ", highlight: true },
      ],
      description:
        "നിങ്ങളുടെ ആവശ്യങ്ങൾ പങ്കിടൂ; നിങ്ങളുടെ ഹെൽത്ത്‌കെയർ ടീമിന് ഫലം നൽകുന്ന ഒരു ഇഷ്ടാനുസൃത പദ്ധതി ഞങ്ങൾ തയ്യാറാക്കും।",
    },
    benefitsTitle: "MedTech Business നിങ്ങളുടെ പഠന പങ്കാളിയായാൽ നിങ്ങൾക്ക് ചെയ്യാൻ കഴിയുന്നത്:",
    benefits: [
      {
        id: "workforce-training",
        icon: "building-2",
        text: "14,000+ സർട്ടിഫൈഡ് ഹെൽത്ത്‌കെയർ കോഴ്സുകൾ ഉപയോഗിച്ച് നിങ്ങളുടെ മുഴുവൻ തൊഴിലാളി സംഘത്തെയും പരിശീലിപ്പിക്കുക",
      },
      {
        id: "certification-prep",
        icon: "check",
        text: "200+ വ്യവസായ അംഗീകൃത സർട്ടിഫിക്കേഷൻ പരീക്ഷകൾക്ക് (CPC, CRC, CCS, RHIT മുതലായവ) ജീവനക്കാരെ തയ്യാറാക്കുക",
      },
      {
        id: "team-readiness",
        icon: "users",
        text: "പ്രായോഗിക പരിശീലന പരിസരങ്ങളിലൂടെ കഴിവുള്ള കോഡിംഗ്, ബില്ലിംഗ് ടീമുകൾ വളർത്തുക",
      },
      {
        id: "analytics",
        icon: "bar-chart-3",
        text: "കഴിവ് വിടവ്, പഠന പ്രവണതകൾ, ടീം പ്രകടന മാനദണ്ഡങ്ങൾ എന്നിവ തിരിച്ചറിയുക",
      },
      {
        id: "integrations",
        icon: "puzzle",
        text: "നിങ്ങളുടെ നിലവിലുള്ള LMS, HRIS, HR സിസ്റ്റങ്ങളുമായി എളുപ്പത്തിൽ ഏകീകരിക്കുക",
      },
      {
        id: "multi-language",
        icon: "globe",
        text: "മൾട്ടി-ബ്രാഞ്ച് അല്ലെങ്കിൽ റിമോട്ട് ടീമുകൾക്കായി 16 ഭാഷകളിൽ പരിശീലനം നൽകുക",
      },
    ],
    trustedByTitle: "ഇന്ത്യയിലെ പ്രമുഖ ഹെൽത്ത്‌കെയർ സ്ഥാപനങ്ങൾ ഞങ്ങളെ വിശ്വസിക്കുന്നു",
    stats: [
      { value: "500+", label: "ഹെൽത്ത്‌കെയർ ക്ലയന്റുകൾ" },
      { value: "12,000+", label: "അപ്‌സ്കിൽ ചെയ്ത സ്റ്റാഫ്" },
      { value: "95%", label: "സർട്ടിഫിക്കേഷൻ വിജയനിരക്ക്" },
    ],
    contactTitle: "നേരിട്ട് സംസാരിക്കണോ?",
    form: {
      title: "നിങ്ങളുടെ സ്ഥാപനത്തെക്കുറിച്ച് പറയൂ",
      successTitle: "നന്ദി!",
      successDescription:
        "നിങ്ങളുടെ അഭ്യർത്ഥന ലഭിച്ചു. MedTech Business വിദഗ്ധൻ 1 പ്രവൃത്തിദിവസത്തിനകം നിങ്ങളെ സമീപിക്കും।",
      successLinkLabel: "പ്ലാറ്റ്ഫോം പരിശോധിക്കുക",
      fields: {
        firstName: {
          label: "ആദ്യ പേര് *",
          placeholder: "അർജുൻ",
        },
        lastName: {
          label: "അവസാന പേര് *",
          placeholder: "ശർമ്മ",
        },
        email: {
          label: "ജോലി ഇമെയിൽ *",
          placeholder: "arjun@hospital.com",
        },
        phone: {
          label: "ഫോൺ നമ്പർ *",
          placeholder: "+91 98765 43210",
        },
        location: {
          label: "നിങ്ങൾ എവിടെയാണ് സ്ഥിതിചെയ്യുന്നത്? *",
          placeholder: "ഉദാ. ബെംഗളൂരു, കര്‍ണാടക",
        },
        company: {
          label: "കമ്പനി / സ്ഥാപനത്തിന്റെ പേര് *",
          placeholder: "Apollo Hospitals",
        },
        companySize: {
          label: "കമ്പനിയുടെ വലുപ്പം *",
          placeholder: "തിരഞ്ഞെടുക്കൂ...",
          options: [
            { id: "1-10", label: "1-10 ജീവനക്കാർ" },
            { id: "11-50", label: "11-50 ജീവനക്കാർ" },
            { id: "51-200", label: "51-200 ജീവനക്കാർ" },
            { id: "201-500", label: "201-500 ജീവനക്കാർ" },
            { id: "501-1000", label: "501-1,000 ജീവനക്കാർ" },
            { id: "1001-5000", label: "1,001-5,000 ജീവനക്കാർ" },
            { id: "5001+", label: "5,001+ ജീവനക്കാർ" },
          ],
        },
        learners: {
          label: "പരിശീലിപ്പിക്കേണ്ട ആളുകളുടെ എണ്ണം *",
          placeholder: "തിരഞ്ഞെടുക്കൂ...",
          options: [
            { id: "2-10", label: "2-10" },
            { id: "11-25", label: "11-25" },
            { id: "26-50", label: "26-50" },
            { id: "51-100", label: "51-100" },
            { id: "101-500", label: "101-500" },
            { id: "500+", label: "500+" },
          ],
        },
        jobTitle: {
          label: "ജോലി പദവി *",
          placeholder: "HIM Director",
        },
        jobLevel: {
          label: "ജോലി നില *",
          placeholder: "തിരഞ്ഞെടുക്കൂ...",
          options: [
            { id: "individual-contributor", label: "വ്യക്തിഗത സംഭാവനക്കാരൻ" },
            { id: "manager", label: "മാനേജർ" },
            { id: "director", label: "ഡയറക്ടർ" },
            { id: "vp-head", label: "VP / വിഭാഗം മേധാവി" },
            { id: "c-suite", label: "C-Suite / Executive" },
            { id: "owner-founder", label: "Owner / Founder" },
          ],
        },
        needs: {
          label: "നിങ്ങളുടെ സ്ഥാപനത്തിന്റെ പരിശീലന ആവശ്യങ്ങൾ എന്തെല്ലാം?",
          placeholder:
            "ഉദാ. 20 കോഡർമാർക്കായി CPC സർട്ടിഫിക്കേഷൻ, ICD-10 റിഫ്രെഷർ, HIPAA അനുസരണം...",
        },
      },
      submitLabel: "അഭ്യർത്ഥന അയയ്ക്കുക",
      termsPrefix: "സമർപ്പിക്കുന്നതിലൂടെ നിങ്ങൾ ഞങ്ങളുടെ",
      termsLabel: "ഉപയോഗ നിബന്ധനകളും",
      conjunctionLabel: "മറ്റും",
      privacyLabel: "സ്വകാര്യതാ നയവും",
      termsSuffix: "അംഗീകരിക്കുന്നു. MedTech Business സേവനങ്ങളെക്കുറിച്ച് ഞങ്ങൾ നിങ്ങളെ ബന്ധപ്പെടാം.",
    },
  },
};

export function getBusinessRequestDemoContent(locale = DEFAULT_LOCALE) {
  const resolvedLocale = resolveLocale(locale);

  if (resolvedLocale === DEFAULT_LOCALE) {
    return businessRequestDemoContent;
  }

  const localizedBase = localizeContent(businessRequestDemoContent, resolvedLocale);
  return mergeLocalizedContent(localizedBase, businessRequestDemoTranslations[resolvedLocale]);
}