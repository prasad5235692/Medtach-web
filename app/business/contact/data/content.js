import { DEFAULT_LOCALE, resolveLocale } from "@/lib/i18n/config";
import { localizeContent, mergeLocalizedContent } from "@/lib/i18n/content";

const businessContactContent = {
  hero: {
    label: "Get in Touch",
    title: "Let's Build Your Training Plan",
    description:
      "Tell us about your team and we'll get back within one business day with a tailored proposal.",
  },
  detailsSection: {
    title: "Contact Details",
    description:
      "Prefer to speak directly? Reach us through any of these channels.",
    items: [
      {
        id: "call",
        icon: "phone",
        label: "Call Us",
        value: "+91 98765 43210",
        href: "tel:+919876543210",
      },
      {
        id: "email",
        icon: "mail",
        label: "Email Us",
        value: "business@medtechcareer.com",
        href: "mailto:business@medtechcareer.com",
      },
      {
        id: "office",
        icon: "map-pin",
        label: "Office",
        value: "12 Innovation Park, Bengaluru, KA 560001",
        href: null,
      },
    ],
  },
  form: {
    title: "Request a Demo",
    fields: [
      {
        id: "name",
        label: "Full Name *",
        type: "text",
        placeholder: "Dr. Kavitha R.",
      },
      {
        id: "email",
        label: "Work Email *",
        type: "email",
        placeholder: "you@hospital.com",
      },
      {
        id: "phone",
        label: "Phone *",
        type: "tel",
        placeholder: "+91 9876543210",
      },
      {
        id: "organisation",
        label: "Organisation *",
        type: "text",
        placeholder: "Apollo Hospitals",
      },
    ],
    teamSizeLabel: "Team Size",
    teamSizePlaceholder: "Select team size",
    teamSizes: [
      { id: "1-10", label: "1 - 10 employees" },
      { id: "11-50", label: "11 - 50 employees" },
      { id: "51-200", label: "51 - 200 employees" },
      { id: "200+", label: "200+ employees" },
    ],
    messageLabel: "How can we help?",
    messagePlaceholder: "Tell us about your training goals...",
    submitLabel: "Send Request",
    successTitle: "Message Sent!",
    successDescription:
      "Thank you. Our enterprise team will reach out within one business day.",
  },
};

const businessContactTranslations = {
  hi: {
    hero: {
      label: "संपर्क करें",
      title: "आइए आपकी ट्रेनिंग योजना बनाते हैं",
      description:
        "अपनी टीम के बारे में बताइए और हम एक कार्यदिवस के भीतर आपके लिए अनुकूलित प्रस्ताव के साथ वापस आएँगे।",
    },
    detailsSection: {
      title: "संपर्क विवरण",
      description: "सीधे बात करना चाहते हैं? इन माध्यमों से हमसे जुड़ें।",
      items: [
        {
          id: "call",
          icon: "phone",
          label: "हमें कॉल करें",
          value: "+91 98765 43210",
          href: "tel:+919876543210",
        },
        {
          id: "email",
          icon: "mail",
          label: "हमें ईमेल करें",
          value: "business@medtechcareer.com",
          href: "mailto:business@medtechcareer.com",
        },
        {
          id: "office",
          icon: "map-pin",
          label: "कार्यालय",
          value: "12 इनोवेशन पार्क, बेंगलुरु, KA 560001",
          href: null,
        },
      ],
    },
    form: {
      title: "डेमो का अनुरोध करें",
      fields: [
        {
          id: "name",
          label: "पूरा नाम *",
          type: "text",
          placeholder: "डॉ. कविता आर.",
        },
        {
          id: "email",
          label: "कार्य ईमेल *",
          type: "email",
          placeholder: "you@hospital.com",
        },
        {
          id: "phone",
          label: "फोन *",
          type: "tel",
          placeholder: "+91 9876543210",
        },
        {
          id: "organisation",
          label: "संस्था *",
          type: "text",
          placeholder: "Apollo Hospitals",
        },
      ],
      teamSizeLabel: "टीम का आकार",
      teamSizePlaceholder: "टीम का आकार चुनें",
      teamSizes: [
        { id: "1-10", label: "1 - 10 कर्मचारी" },
        { id: "11-50", label: "11 - 50 कर्मचारी" },
        { id: "51-200", label: "51 - 200 कर्मचारी" },
        { id: "200+", label: "200+ कर्मचारी" },
      ],
      messageLabel: "हम आपकी कैसे मदद कर सकते हैं?",
      messagePlaceholder: "अपने प्रशिक्षण लक्ष्यों के बारे में बताइए...",
      submitLabel: "अनुरोध भेजें",
      successTitle: "संदेश भेज दिया गया!",
      successDescription:
        "धन्यवाद। हमारी एंटरप्राइज़ टीम एक कार्यदिवस के भीतर आपसे संपर्क करेगी।",
    },
  },
  ml: {
    hero: {
      label: "ബന്ധപ്പെടൂ",
      title: "നിങ്ങളുടെ പരിശീലന പദ്ധതി നമുക്ക് രൂപപ്പെടുത്താം",
      description:
        "നിങ്ങളുടെ ടീമിനെ കുറിച്ച് പറയൂ; ഒരു പ്രവൃത്തിദിവസത്തിനകം അനുയോജ്യമായ നിർദ്ദേശവുമായി ഞങ്ങൾ തിരിച്ചെത്തും.",
    },
    detailsSection: {
      title: "ബന്ധപ്പെടാനുള്ള വിവരങ്ങൾ",
      description: "നേരിട്ട് സംസാരിക്കണോ? ഈ മാർഗങ്ങളിൽ ഏതെങ്കിലും വഴി ഞങ്ങളെ സമീപിക്കാം.",
      items: [
        {
          id: "call",
          icon: "phone",
          label: "ഞങ്ങളെ വിളിക്കൂ",
          value: "+91 98765 43210",
          href: "tel:+919876543210",
        },
        {
          id: "email",
          icon: "mail",
          label: "ഇമെയിൽ അയക്കൂ",
          value: "business@medtechcareer.com",
          href: "mailto:business@medtechcareer.com",
        },
        {
          id: "office",
          icon: "map-pin",
          label: "ഓഫീസ്",
          value: "12 ഇന്നൊവേഷൻ പാർക്ക്, ബെംഗളൂരു, KA 560001",
          href: null,
        },
      ],
    },
    form: {
      title: "ഡെമോ അഭ്യർത്ഥിക്കുക",
      fields: [
        {
          id: "name",
          label: "പൂർണ്ണനാമം *",
          type: "text",
          placeholder: "ഡോ. കവിത ആർ.",
        },
        {
          id: "email",
          label: "ജോലി ഇമെയിൽ *",
          type: "email",
          placeholder: "you@hospital.com",
        },
        {
          id: "phone",
          label: "ഫോൺ *",
          type: "tel",
          placeholder: "+91 9876543210",
        },
        {
          id: "organisation",
          label: "സ്ഥാപനം *",
          type: "text",
          placeholder: "Apollo Hospitals",
        },
      ],
      teamSizeLabel: "ടീമിന്റെ വലുപ്പം",
      teamSizePlaceholder: "ടീം വലുപ്പം തിരഞ്ഞെടുക്കൂ",
      teamSizes: [
        { id: "1-10", label: "1 - 10 ജീവനക്കാർ" },
        { id: "11-50", label: "11 - 50 ജീവനക്കാർ" },
        { id: "51-200", label: "51 - 200 ജീവനക്കാർ" },
        { id: "200+", label: "200+ ജീവനക്കാർ" },
      ],
      messageLabel: "എങ്ങനെ ഞങ്ങൾ സഹായിക്കാം?",
      messagePlaceholder: "നിങ്ങളുടെ പരിശീലന ലക്ഷ്യങ്ങളെ കുറിച്ച് പറഞ്ഞുതരൂ...",
      submitLabel: "അഭ്യർത്ഥന അയയ്ക്കുക",
      successTitle: "സന്ദേശം അയച്ചു!",
      successDescription:
        "നന്ദി. ഞങ്ങളുടെ എന്റർപ്രൈസ് ടീം ഒരു പ്രവൃത്തിദിവസത്തിനകം നിങ്ങളെ സമീപിക്കും.",
    },
  },
};

export function getBusinessContactContent(locale = DEFAULT_LOCALE) {
  const resolvedLocale = resolveLocale(locale);

  if (resolvedLocale === DEFAULT_LOCALE) {
    return businessContactContent;
  }

  const localizedBase = localizeContent(businessContactContent, resolvedLocale);
  return mergeLocalizedContent(localizedBase, businessContactTranslations[resolvedLocale]);
}