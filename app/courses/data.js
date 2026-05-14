import { DEFAULT_LOCALE, resolveLocale } from "@/lib/i18n/config";
import { localizeContent, mergeLocalizedContent } from "@/lib/i18n/content";

const coursesPageContent = {
  metadata: {
    title: "All Courses — Medtech Career",
    description:
      "Comprehensive, job-oriented Medical Coding and Billing training — from beginner fundamentals to advanced CPC certification preparation.",
  },
  hero: {
    label: "Explore",
    title: "All Courses",
    description:
      "Comprehensive, job-oriented Medical Coding and Billing training — from beginner fundamentals to advanced CPC certification preparation.",
  },
  learningPath: {
    label: "Recommended Learning Path",
    value: "Healthcare → Basic Medical Coding Training → Advanced Medical Coding Training → Certified Professional Coder Training",
    ctaLabel: "View Training Details →",
  },
  sectionHeading: {
    label: "Healthcare Programmes",
    title: "Medical Coding & Billing Courses",
  },
  placement: {
    label: "Placement Assurance",
    title: "4,000+ Graduates Placed in 50+ Top MNCs",
    description:
      "All Medtech Career certificates are recognised and accepted by healthcare BPOs across India. Our placement support continues until you land your job.",
    primaryLabel: "View Placements →",
    secondaryLabel: "Talk to a Counsellor",
  },
};

const courseDetailPageContent = {
  metadataTitleTemplate: "{title} — Medtech Career",
  stats: {
    durationLabel: "Duration",
    studentsLabel: "Students",
    levelLabel: "Level",
  },
  sections: {
    curriculumTitle: "Curriculum Overview",
    highlightsTitle: "Course Highlights",
    topicsTitle: "Topics Covered",
    trainingDetailsTitle: "Training Programme Details",
    featuresTitle: "Salient Features",
    studyMaterialsTitle: "Study Materials Included",
    faqTitle: "Frequently Asked Questions",
    relatedCoursesTitle: "Explore Other Courses",
  },
  trainingDetailLabels: {
    duration: "Duration",
    batches: "Batches",
    weekdays: "Weekdays",
    weekend: "Weekend",
    language: "Language",
    softSkills: "Soft Skills",
    eligibility: "Eligibility",
  },
  sidebar: {
    primaryCtaLabel: "Enroll Now",
    secondaryCtaLabel: "Talk to a Counsellor",
  },
  faqs: [
    {
      question: "Who can take these courses?",
      answer:
        "Anyone with a Medical, Paramedical, or Life Science background can enrol. These courses are suitable for fresh graduates, working professionals, and anyone looking to start a career in healthcare coding.",
    },
    {
      question: "What jobs can I get after completing this course?",
      answer:
        "Graduates are placed in leading healthcare BPOs and MNCs as Medical Coders, Medical Billers, Risk Adjustment Coders, CDI Specialists, and Healthcare IT professionals.",
    },
    {
      question: "Are these courses recognised internationally?",
      answer:
        "Yes. Medtech Career certificates are accepted by healthcare BPOs across India. Our CPC and CRC programmes prepare you for globally recognised AAPC certifications.",
    },
    {
      question: "How long does it take to complete the course?",
      answerTemplate:
        "The {title} course duration is {duration}. Both weekday and weekend batches are available to suit your schedule.",
    },
  ],
  cta: {
    titleTemplate: "Ready to Start — {title}?",
    description:
      "2,500+ students trained and placed. Join Medtech Career and launch your healthcare coding career today.",
    primaryLabel: "Enroll Now",
    secondaryLabel: "All Courses",
  },
};

const coursesPageTranslations = {
  hi: {
    metadata: {
      title: "सभी कोर्स — मेडटेक करियर",
      description:
        "शुरुआती मूलभूत बातों से लेकर उन्नत CPC प्रमाणन तैयारी तक व्यापक, जॉब-ओरिएंटेड मेडिकल कोडिंग और बिलिंग प्रशिक्षण।",
    },
    hero: {
      label: "एक्सप्लोर करें",
      title: "सभी कोर्स",
      description:
        "शुरुआती मूलभूत बातों से लेकर उन्नत CPC प्रमाणन तैयारी तक व्यापक, जॉब-ओरिएंटेड मेडिकल कोडिंग और बिलिंग प्रशिक्षण।",
    },
    learningPath: {
      label: "अनुशंसित लर्निंग पाथ",
      value: "हेल्थकेयर → बेसिक मेडिकल कोडिंग प्रशिक्षण → उन्नत मेडिकल कोडिंग प्रशिक्षण → प्रमाणित प्रोफेशनल कोडर प्रशिक्षण",
      ctaLabel: "प्रशिक्षण विवरण देखें →",
    },
    sectionHeading: {
      label: "हेल्थकेयर प्रोग्राम्स",
      title: "मेडिकल कोडिंग और बिलिंग कोर्स",
    },
    placement: {
      label: "प्लेसमेंट सहायता",
      title: "4,000+ छात्र 50+ शीर्ष MNCs में प्लेस हुए",
      description:
        "मेडटेक करियर के सभी प्रमाणपत्र भारत भर के हेल्थकेयर BPOs द्वारा मान्यता प्राप्त और स्वीकृत हैं। हमारी प्लेसमेंट सहायता तब तक जारी रहती है जब तक आपको नौकरी नहीं मिल जाती।",
      primaryLabel: "प्लेसमेंट देखें →",
      secondaryLabel: "काउंसलर से बात करें",
    },
  },
  ml: {
    metadata: {
      title: "എല്ലാ കോഴ്സുകളും — മെഡ്ടെക് കരിയർ",
      description:
        "ആരംഭക അടിസ്ഥാനങ്ങളിൽ നിന്ന് അഡ്വാൻസ്ഡ് CPC സർട്ടിഫിക്കേഷൻ തയ്യാറെടുപ്പുവരെ സമഗ്രവും ജോലി കേന്ദ്രീകൃതവുമായ മെഡിക്കൽ കോഡിംഗ്, ബില്ലിംഗ് പരിശീലനം.",
    },
    hero: {
      label: "പരിശോധിക്കുക",
      title: "എല്ലാ കോഴ്സുകളും",
      description:
        "ആരംഭക അടിസ്ഥാനങ്ങളിൽ നിന്ന് അഡ്വാൻസ്ഡ് CPC സർട്ടിഫിക്കേഷൻ തയ്യാറെടുപ്പുവരെ സമഗ്രവും ജോലി കേന്ദ്രീകൃതവുമായ മെഡിക്കൽ കോഡിംഗ്, ബില്ലിംഗ് പരിശീലനം.",
    },
    learningPath: {
      label: "ശുപാർശ ചെയ്യുന്ന ലേണിംഗ് പാത",
      value: "ഹെൽത്ത്‌കെയർ → അടിസ്ഥാന മെഡിക്കൽ കോഡിംഗ് ട്രെയിനിംഗ് → അഡ്വാൻസ്ഡ് മെഡിക്കൽ കോഡിംഗ് ട്രെയിനിംഗ് → സർട്ടിഫൈഡ് പ്രൊഫഷണൽ കോഡർ ട്രെയിനിംഗ്",
      ctaLabel: "ട്രെയിനിംഗ് വിശദാംശങ്ങൾ കാണുക →",
    },
    sectionHeading: {
      label: "ഹെൽത്ത്‌കെയർ പ്രോഗ്രാമുകൾ",
      title: "മെഡിക്കൽ കോഡിംഗ് & ബില്ലിംഗ് കോഴ്സുകൾ",
    },
    placement: {
      label: "പ്ലേസ്മെന്റ് പിന്തുണ",
      title: "4,000+ വിദ്യാർത്ഥികൾ 50+ മുൻനിര MNCകളിൽ നിയമിതരായി",
      description:
        "മെഡ്ടെക് കരിയറിലെ എല്ലാ സർട്ടിഫിക്കറ്റുകളും ഇന്ത്യയിലുടനീളം ഹെൽത്ത്‌കെയർ BPOകൾ അംഗീകരിച്ചവയാണ്. നിങ്ങൾക്ക് ജോലി ലഭിക്കുന്നതുവരെ ഞങ്ങളുടെ പ്ലേസ്മെന്റ് പിന്തുണ തുടരും.",
      primaryLabel: "പ്ലേസ്മെന്റുകൾ കാണുക →",
      secondaryLabel: "ഒരു കൗൺസിലറുമായി സംസാരിക്കുക",
    },
  },
};

const courseDetailPageTranslations = {
  hi: {
    stats: {
      durationLabel: "अवधि",
      studentsLabel: "छात्र",
      levelLabel: "स्तर",
    },
    sections: {
      curriculumTitle: "पाठ्यक्रम अवलोकन",
      highlightsTitle: "कोर्स हाइलाइट्स",
      topicsTitle: "कवर किए गए विषय",
      trainingDetailsTitle: "प्रशिक्षण कार्यक्रम विवरण",
      featuresTitle: "मुख्य विशेषताएँ",
      studyMaterialsTitle: "शामिल अध्ययन सामग्री",
      faqTitle: "अक्सर पूछे जाने वाले प्रश्न",
      relatedCoursesTitle: "अन्य कोर्स देखें",
    },
    trainingDetailLabels: {
      duration: "अवधि",
      batches: "बैच",
      weekdays: "कार्यदिवस",
      weekend: "वीकेंड",
      language: "भाषा",
      softSkills: "सॉफ्ट स्किल्स",
      eligibility: "पात्रता",
    },
    sidebar: {
      primaryCtaLabel: "अभी नामांकन करें",
      secondaryCtaLabel: "काउंसलर से बात करें",
    },
    faqs: [
      {
        question: "ये कोर्स कौन कर सकता है?",
        answer:
          "मेडिकल, पैरामेडिकल या लाइफ साइंस पृष्ठभूमि वाला कोई भी व्यक्ति इन कोर्सों में नामांकन कर सकता है। ये कोर्स फ्रेश ग्रेजुएट्स, कार्यरत पेशेवरों और हेल्थकेयर कोडिंग में करियर शुरू करने वालों के लिए उपयुक्त हैं।",
      },
      {
        question: "इस कोर्स को पूरा करने के बाद मुझे कौन-सी नौकरियां मिल सकती हैं?",
        answer:
          "ग्रेजुएट्स को अग्रणी हेल्थकेयर BPOs और MNCs में मेडिकल कोडर, मेडिकल बिलर, रिस्क एडजस्टमेंट कोडर, CDI स्पेशलिस्ट और हेल्थकेयर IT प्रोफेशनल्स के रूप में प्लेस किया जाता है।",
      },
      {
        question: "क्या ये कोर्स अंतरराष्ट्रीय स्तर पर मान्यता प्राप्त हैं?",
        answer:
          "हाँ। मेडटेक करियर के प्रमाणपत्र भारत भर के हेल्थकेयर BPOs द्वारा स्वीकार किए जाते हैं। हमारे CPC और CRC प्रोग्राम आपको वैश्विक स्तर पर मान्यता प्राप्त AAPC प्रमाणपत्रों के लिए तैयार करते हैं।",
      },
      {
        question: "कोर्स पूरा करने में कितना समय लगता है?",
        answerTemplate:
          "{title} कोर्स की अवधि {duration} है। आपकी सुविधा के अनुसार वीकडे और वीकेंड दोनों बैच उपलब्ध हैं।",
      },
    ],
    cta: {
      titleTemplate: "शुरू करने के लिए तैयार हैं — {title}?",
      description:
        "2,500+ छात्र प्रशिक्षित और प्लेस किए जा चुके हैं। मेडटेक करियर से जुड़ें और आज ही अपना हेल्थकेयर कोडिंग करियर शुरू करें।",
      primaryLabel: "अभी नामांकन करें",
      secondaryLabel: "सभी कोर्स",
    },
  },
  ml: {
    stats: {
      durationLabel: "ദൈർഘ്യം",
      studentsLabel: "വിദ്യാർത്ഥികൾ",
      levelLabel: "ലെവൽ",
    },
    sections: {
      curriculumTitle: "പാഠ്യക്രമ അവലോകനം",
      highlightsTitle: "കോഴ്സ് ഹൈലൈറ്റുകൾ",
      topicsTitle: "ഉൾപ്പെടുത്തിയ വിഷയങ്ങൾ",
      trainingDetailsTitle: "ട്രെയിനിംഗ് പ്രോഗ്രാം വിശദാംശങ്ങൾ",
      featuresTitle: "പ്രധാന സവിശേഷതകൾ",
      studyMaterialsTitle: "ഉൾപ്പെടുത്തിയ പഠന സാമഗ്രികൾ",
      faqTitle: "പതിവ് ചോദ്യങ്ങൾ",
      relatedCoursesTitle: "മറ്റ് കോഴ്സുകൾ പരിശോധിക്കുക",
    },
    trainingDetailLabels: {
      duration: "ദൈർഘ്യം",
      batches: "ബാച്ചുകൾ",
      weekdays: "പ്രവൃത്തി ദിവസങ്ങൾ",
      weekend: "വാരാന്ത്യം",
      language: "ഭാഷ",
      softSkills: "സോഫ്റ്റ് സ്കിൽസ്",
      eligibility: "അർഹത",
    },
    sidebar: {
      primaryCtaLabel: "ഇപ്പോൾ എൻറോൾ ചെയ്യുക",
      secondaryCtaLabel: "ഒരു കൗൺസിലറുമായി സംസാരിക്കുക",
    },
    faqs: [
      {
        question: "ഈ കോഴ്സുകൾ ആർക്ക് ചെയ്യാം?",
        answer:
          "മെഡിക്കൽ, പാരാമെഡിക്കൽ, അല്ലെങ്കിൽ ലൈഫ് സയൻസ് പശ്ചാത്തലമുള്ള ഏവർക്കും ഈ കോഴ്സുകളിൽ ചേർക്കാം. പുതിയ ബിരുദധാരികൾക്കും, ജോലി ചെയ്യുന്ന പ്രൊഫഷണലുകൾക്കും, ഹെൽത്ത്‌കെയർ കോഡിംഗിൽ കരിയർ ആരംഭിക്കാൻ ആഗ്രഹിക്കുന്നവർക്കും ഈ കോഴ്സുകൾ അനുയോജ്യമാണ്.",
      },
      {
        question: "ഈ കോഴ്സ് പൂർത്തിയാക്കിയ ശേഷം എനിക്ക് ലഭിക്കാവുന്ന ജോലികൾ എന്തൊക്കെയാണ്?",
        answer:
          "ബിരുദധാരികൾ പ്രമുഖ ഹെൽത്ത്‌കെയർ BPOകളിലും MNCകളിലും മെഡിക്കൽ കോഡർ, മെഡിക്കൽ ബില്ലർ, റിസ്‌ക് അഡ്ജസ്റ്റ്മെന്റ് കോഡർ, CDI സ്പെഷ്യലിസ്റ്റ്, ഹെൽത്ത്‌കെയർ IT പ്രൊഫഷണൽ എന്നീ നിലകളിൽ നിയമിതരാകുന്നു.",
      },
      {
        question: "ഈ കോഴ്സുകൾ അന്താരാഷ്ട്രമായി അംഗീകരിക്കപ്പെടുന്നവയാണോ?",
        answer:
          "അതെ. മെഡ്ടെക് കരിയറിന്റെ സർട്ടിഫിക്കറ്റുകൾ ഇന്ത്യയിലുടനീളമുള്ള ഹെൽത്ത്‌കെയർ BPOകൾ അംഗീകരിക്കുന്നു. ഞങ്ങളുടെ CPC, CRC പ്രോഗ്രാമുകൾ ആഗോളമായി അംഗീകരിക്കപ്പെടുന്ന AAPC സർട്ടിഫിക്കേഷനുകൾക്കായി നിങ്ങളെ തയ്യാറാക്കുന്നു.",
      },
      {
        question: "കോഴ്സ് പൂർത്തിയാക്കാൻ എത്ര സമയം লাগে?",
        answerTemplate:
          "{title} കോഴ്സിന്റെ ദൈർഘ്യം {duration} ആണ്. നിങ്ങളുടെ സമയക്രമത്തിന് അനുസരിച്ച് വാരദിന, വാരാന്ത്യ ബാച്ചുകൾ ലഭ്യമാണ്.",
      },
    ],
    cta: {
      titleTemplate: "തുടങ്ങാൻ തയ്യാറാണോ — {title}?",
      description:
        "2,500+ വിദ്യാർത്ഥികൾ പരിശീലനം നേടി ജോലി നേടി. മെഡ്ടെക് കരിയറിനൊപ്പം ചേർന്ന് ഇന്ന് തന്നെ നിങ്ങളുടെ ഹെൽത്ത്‌കെയർ കോഡിംഗ് കരിയർ ആരംഭിക്കുക.",
      primaryLabel: "ഇപ്പോൾ എൻറോൾ ചെയ്യുക",
      secondaryLabel: "എല്ലാ കോഴ്സുകളും",
    },
  },
};

function formatTemplate(template, replacements) {
  return Object.entries(replacements).reduce(
    (result, [key, value]) => result.replaceAll(`{${key}}`, value ?? ""),
    template,
  );
}

export function getCoursesPageContent(locale) {
  const resolvedLocale = resolveLocale(locale);
  const localizedBase = localizeContent(coursesPageContent, resolvedLocale);

  if (resolvedLocale === DEFAULT_LOCALE) {
    return localizedBase;
  }

  return mergeLocalizedContent(localizedBase, coursesPageTranslations[resolvedLocale]);
}

export function getCourseDetailPageContent(locale, course) {
  const resolvedLocale = resolveLocale(locale);
  const localizedBase = localizeContent(courseDetailPageContent, resolvedLocale);
  const localizedContent = resolvedLocale === DEFAULT_LOCALE
    ? localizedBase
    : mergeLocalizedContent(localizedBase, courseDetailPageTranslations[resolvedLocale]);

  return {
    ...localizedContent,
    metadataTitle: formatTemplate(localizedContent.metadataTitleTemplate, {
      title: course.title,
    }),
    faqs: localizedContent.faqs.map((faq) => ({
      question: faq.question,
      answer: faq.answerTemplate
        ? formatTemplate(faq.answerTemplate, {
            title: course.title,
            duration: course.duration,
          })
        : faq.answer,
    })),
    cta: {
      ...localizedContent.cta,
      title: formatTemplate(localizedContent.cta.titleTemplate, {
        title: course.title,
      }),
    },
  };
}

export function getCourseTrainingDetailRows(course, content) {
  if (!course.trainingDetails) {
    return [];
  }

  return Object.entries(course.trainingDetails).map(([key, value]) => ({
    key,
    label: content.trainingDetailLabels[key] ?? key,
    value,
  }));
}