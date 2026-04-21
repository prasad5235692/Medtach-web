import { DEFAULT_LOCALE, resolveLocale } from "@/lib/i18n/config";
import { mergeLocalizedContent } from "@/lib/i18n/content";

const businessNavbarContent = {
  brandAlt: "Medtech Career",
  navItems: [
    {
      id: "what-we-do",
      label: "What We Do",
      type: "dropdown",
      width: "w-80",
      items: [
        {
          label: "On-Demand Learning",
          href: "/business/what-we-do/on-demand-learning",
          desc: "Self-paced learning for distributed healthcare teams",
        },
      ],
    },
    {
      id: "how-we-do-it",
      label: "How We Do It",
      type: "mega-sections",
      width: "w-[680px]",
      defaultSubMenu: "platform",
      groups: [
        {
          id: "delivery",
          heading: "Delivery",
          subMenus: [
            {
              id: "platform",
              label: "Platform",
              icon: "monitor",
              items: [
                { label: "Platform Overview", href: "/business/how-we-do-it/platform" },
                { label: "Analytics", href: "/business/how-we-do-it/analytics" },
                { label: "Integrations", href: "/business/how-we-do-it/integrations" },
                { label: "Customer Success", href: "/business/how-we-do-it/customer-success" },
              ],
            },
            {
              id: "programs",
              label: "Learning Formats",
              icon: "users",
              items: [
                { label: "On-Demand Learning", href: "/business/what-we-do/on-demand-learning" },
                { label: "Cohort Learning", href: "/business/what-we-do/cohort-learning" },
                { label: "Certification Prep", href: "/business/what-we-do/certification-prep" },
                { label: "Professional Services", href: "/business/what-we-do/professional-services", highlight: true },
              ],
            },
          ],
        },
        {
          id: "direct",
          heading: null,
          directLinks: [
            { label: "Solutions", href: "/business/solutions" },
            { label: "Case Studies", href: "/business/resources/case-studies" },
            { label: "About", href: "/business/about" },
          ],
        },
      ],
    },
    {
      id: "plans",
      label: "Plans",
      type: "dropdown",
      width: "w-72",
      align: "right",
      items: [
        { label: "Compare Plans", href: "/business/pricing", desc: "Side-by-side plan comparison" },
        { label: "Team (2–50 learners)", href: "/business/pricing#team", desc: "Perfect for growing teams" },
        { label: "Enterprise (21+)", href: "/business/pricing#enterprise", desc: "Full-scale deployment & support" },
      ],
    },
  ],
  emptyStateLabel: "Hover an item to explore",
  accessibility: {
    mainNavigationLabel: "Main navigation",
    mobileNavigationLabel: "Mobile navigation",
    openMenuLabel: "Open menu",
    closeMenuLabel: "Close menu",
  },
  ctas: {
    phoneLabel: "+91 98765 43210",
    demoLabel: "Get a Demo",
  },
};

const businessNavbarTranslations = {
  hi: {
    navItems: [
      {
        id: "what-we-do",
        label: "हम क्या करते हैं",
        type: "dropdown",
        width: "w-80",
        items: [
          {
            label: "ऑन-डिमांड लर्निंग",
            href: "/business/what-we-do/on-demand-learning",
            desc: "विभिन्न स्थानों पर फैली हेल्थकेयर टीमों के लिए स्व-गति सीखना",
          },
        ],
      },
      {
        id: "how-we-do-it",
        label: "हम इसे कैसे करते हैं",
        type: "mega-sections",
        width: "w-[680px]",
        defaultSubMenu: "platform",
        groups: [
          {
            id: "delivery",
            heading: "डिलीवरी",
            subMenus: [
              {
                id: "platform",
                label: "प्लेटफ़ॉर्म",
                icon: "monitor",
                items: [
                  { label: "प्लेटफ़ॉर्म ओवरव्यू", href: "/business/how-we-do-it/platform" },
                  { label: "एनालिटिक्स", href: "/business/how-we-do-it/analytics" },
                  { label: "इंटीग्रेशन्स", href: "/business/how-we-do-it/integrations" },
                  { label: "कस्टमर सक्सेस", href: "/business/how-we-do-it/customer-success" },
                ],
              },
              {
                id: "programs",
                label: "लर्निंग फॉर्मैट्स",
                icon: "users",
                items: [
                  { label: "ऑन-डिमांड लर्निंग", href: "/business/what-we-do/on-demand-learning" },
                  { label: "कोहोर्ट लर्निंग", href: "/business/what-we-do/cohort-learning" },
                  { label: "सर्टिफिकेशन प्रेप", href: "/business/what-we-do/certification-prep" },
                  { label: "प्रोफेशनल सर्विसेज", href: "/business/what-we-do/professional-services", highlight: true },
                ],
              },
            ],
          },
          {
            id: "direct",
            heading: null,
            directLinks: [
              { label: "समाधान", href: "/business/solutions" },
              { label: "केस स्टडीज", href: "/business/resources/case-studies" },
              { label: "परिचय", href: "/business/about" },
            ],
          },
        ],
      },
      {
        id: "plans",
        label: "योजनाएं",
        type: "dropdown",
        width: "w-72",
        align: "right",
        items: [
          { label: "योजनाओं की तुलना करें", href: "/business/pricing", desc: "साइड-बाय-साइड प्लान तुलना" },
          { label: "टीम (2–50 शिक्षार्थी)", href: "/business/pricing#team", desc: "बढ़ती टीमों के लिए परफेक्ट" },
          { label: "एंटरप्राइज़ (21+)", href: "/business/pricing#enterprise", desc: "पूर्ण-पैमाने पर डिप्लॉयमेंट और सपोर्ट" },
        ],
      },
    ],
    emptyStateLabel: "जानने के लिए किसी आइटम पर होवर करें",
    accessibility: {
      mainNavigationLabel: "मुख्य नेविगेशन",
      mobileNavigationLabel: "मोबाइल नेविगेशन",
      openMenuLabel: "मेन्यू खोलें",
      closeMenuLabel: "मेन्यू बंद करें",
    },
    ctas: {
      phoneLabel: "+91 98765 43210",
      demoLabel: "डेमो प्राप्त करें",
    },
  },
  ml: {
    navItems: [
      {
        id: "what-we-do",
        label: "ഞങ്ങൾ എന്ത് ചെയ്യുന്നു",
        type: "dropdown",
        width: "w-80",
        items: [
          {
            label: "ഓൺ-ഡിമാൻഡ് ലേണിംഗ്",
            href: "/business/what-we-do/on-demand-learning",
            desc: "വിതരണമായ ഹെൽത്കെയർ ടീമുകൾക്കായുള്ള സ്വയം-ഗതിയിലുള്ള പഠനം",
          },
        ],
      },
      {
        id: "how-we-do-it",
        label: "ഞങ്ങൾ ഇത് എങ്ങനെ ചെയ്യുന്നു",
        type: "mega-sections",
        width: "w-[680px]",
        defaultSubMenu: "platform",
        groups: [
          {
            id: "delivery",
            heading: "ഡെലിവറി",
            subMenus: [
              {
                id: "platform",
                label: "പ്ലാറ്റ്ഫോം",
                icon: "monitor",
                items: [
                  { label: "പ്ലാറ്റ്ഫോം അവലോകനം", href: "/business/how-we-do-it/platform" },
                  { label: "അനലിറ്റിക്സ്", href: "/business/how-we-do-it/analytics" },
                  { label: "ഇന്റഗ്രേഷനുകൾ", href: "/business/how-we-do-it/integrations" },
                  { label: "കസ്റ്റമർ സക്സസ്", href: "/business/how-we-do-it/customer-success" },
                ],
              },
              {
                id: "programs",
                label: "ലേണിംഗ് ഫോർമാറ്റുകൾ",
                icon: "users",
                items: [
                  { label: "ഓൺ-ഡിമാൻഡ് ലേണിംഗ്", href: "/business/what-we-do/on-demand-learning" },
                  { label: "കോഹോർട്ട് ലേണിംഗ്", href: "/business/what-we-do/cohort-learning" },
                  { label: "സർട്ടിഫിക്കേഷൻ പ്രെപ്", href: "/business/what-we-do/certification-prep" },
                  { label: "പ്രൊഫഷണൽ സർവീസുകൾ", href: "/business/what-we-do/professional-services", highlight: true },
                ],
              },
            ],
          },
          {
            id: "direct",
            heading: null,
            directLinks: [
              { label: "പരിഹാരങ്ങൾ", href: "/business/solutions" },
              { label: "കേസ് സ്റ്റഡികൾ", href: "/business/resources/case-studies" },
              { label: "ഞങ്ങളേക്കുറിച്ച്", href: "/business/about" },
            ],
          },
        ],
      },
      {
        id: "plans",
        label: "പ്ലാനുകൾ",
        type: "dropdown",
        width: "w-72",
        align: "right",
        items: [
          { label: "പ്ലാനുകൾ താരതമ്യം ചെയ്യുക", href: "/business/pricing", desc: "ഒപ്പത്തിനൊപ്പം പ്ലാൻ താരതമ്യം" },
          { label: "ടീം (2–50 പഠിതാക്കൾ)", href: "/business/pricing#team", desc: "വളരുന്ന ടീമുകൾക്ക് അനുയോജ്യം" },
          { label: "എന്റർപ്രൈസ് (21+)", href: "/business/pricing#enterprise", desc: "പൂർണ്ണ-സ്കെയിൽ വിന്യാസവും പിന്തുണയും" },
        ],
      },
    ],
    emptyStateLabel: "പരിശോധിക്കാൻ ഒരു ഇനത്തിന് മുകളിലൂടെ ഹോവർ ചെയ്യുക",
    accessibility: {
      mainNavigationLabel: "പ്രധാന നാവിഗേഷൻ",
      mobileNavigationLabel: "മൊബൈൽ നാവിഗേഷൻ",
      openMenuLabel: "മെനു തുറക്കുക",
      closeMenuLabel: "മെനു അടയ്ക്കുക",
    },
    ctas: {
      phoneLabel: "+91 98765 43210",
      demoLabel: "ഡെമോ നേടുക",
    },
  },
};

export function getBusinessNavbarContent(locale = DEFAULT_LOCALE) {
  const resolvedLocale = resolveLocale(locale);

  if (resolvedLocale === DEFAULT_LOCALE) {
    return businessNavbarContent;
  }

  return mergeLocalizedContent(businessNavbarContent, businessNavbarTranslations[resolvedLocale]);
}