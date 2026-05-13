import { DEFAULT_LOCALE, resolveLocale } from "@/lib/i18n/config";
import { localizeContent, mergeLocalizedContent } from "@/lib/i18n/content";

const ourTeamPageContent = {
  metadata: {
    title: "Our Team — Medtech Career",
  },
  hero: {
    label: "People",
    titleLeading: "Our",
    titleHighlight: "Team",
    description:
      "Meet the dedicated trainers, managers, and counsellors who power Medtech Career's mission to place thousands of students into rewarding healthcare careers.",
  },
  managementSection: {
    label: "Leadership",
    title: "Our Management Team",
    subtitle:
      "The experienced professionals who guide Medtech Career's vision and quality standards.",
    members: [
      {
        id: "nithyanantham",
        name: "Nithyanantham",
        role: "Managing Director",
        avatar: "N",
        bg: "from-purple-700 to-purple-900",
        bio:
          "20+ years in healthcare education. AAPC CPC-certified with deep experience in US healthcare BPO management and curriculum design.",
      },
      {
        id: "jenni-bowlin-a",
        name: "Jenni Bowlin A",
        role: "Branch Head",
        avatar: "JB",
        bg: "from-orange-500 to-orange-700",
        bio:
          "Former Senior Medical Coder at a leading MNC. Oversees all training programmes and quality assurance across branches.",
      },
    ],
  },
  branchSections: [
    {
      id: "thanjavur-branch-1",
      label: "Branch Team",
      title: "Thanjavur Branch 1",
      bg: "bg-[#faf5ff]",
      members: [
        { id: "b-swathini", name: "B. Swathini", role: "Meta Ads Specialist", avatar: "BS", bg: "bg-purple-700" },
        { id: "k-geshitha", name: "K. Geshitha", role: "Admin cum Telecaller", avatar: "KG", bg: "bg-purple-600" },
        { id: "r-nivedha", name: "R. Nivedha", role: "Graphic designer & video editor", avatar: "RN", bg: "bg-orange-500" },
      ],
    },
    {
      id: "thanjavur-branch-2",
      label: "Branch Team",
      title: "Thanjavur Branch 2",
      bg: "bg-white",
      members: [
        { id: "c-s-harini", name: "C.S. Harini", role: "Medical Coding Trainer", avatar: "CH", bg: "bg-orange-600" },
        { id: "m-asmi", name: "M. Asmi", role: "Medical Coding Trainer", avatar: "MA", bg: "bg-orange-500" },
        { id: "r-kiruba", name: "R. Kiruba", role: "Medical Coding Trainer", avatar: "RK", bg: "bg-purple-700" },
        { id: "k-varsha", name: "K. Varsha", role: "Medical Coding Trainer", avatar: "KV", bg: "bg-teal-700" },
        { id: "aarthi", name: "Aarthi", role: "Medical Coding Trainer", avatar: "AA", bg: "bg-purple-600" },
      ],
    },
    {
      id: "trichy-branch",
      label: "Branch Team",
      title: "Trichy Branch",
      bg: "bg-[#faf5ff]",
      members: [
        { id: "dheena", name: "Dheena", role: "Branch Coordinator and Admin", avatar: "DH", bg: "bg-teal-700" },
        { id: "kowshika", name: "Kowshika", role: "Medical Coding Trainer", avatar: "KO", bg: "bg-teal-600" },
        { id: "anitha", name: "Anitha", role: "Medical Coding Trainer", avatar: "AN", bg: "bg-purple-700" },
      ],
    },
  ],
  cta: {
    label: "Careers",
    title: "Want to Join Our Team?",
    description:
      "We are always looking for passionate healthcare educators who want to make a difference. Apply to join Medtech Career as a trainer or counsellor.",
    primaryLabel: "Apply as a Teacher",
    secondaryLabel: "Get in Touch",
  },
};

const ourTeamPageTranslations = {
  hi: {
    metadata: {
      title: "हमारी टीम — मेडटेक करियर",
    },
    hero: {
      label: "लोग",
      titleLeading: "हमारी",
      titleHighlight: "टीम",
      description:
        "समर्पित प्रशिक्षकों, प्रबंधकों और काउंसलरों से मिलें जो मेडटेक करियर के मिशन को आगे बढ़ाते हैं और हजारों छात्रों को सफल स्वास्थ्यसेवा करियर तक पहुंचाते हैं।",
    },
    managementSection: {
      label: "नेतृत्व",
      title: "हमारी प्रबंधन टीम",
      subtitle:
        "अनुभवी प्रोफेशनल जो मेडटेक करियर की दृष्टि और गुणवत्ता मानकों का मार्गदर्शन करते हैं।",
      members: [
        {
          id: "nithyanantham",
          name: "Nithyanantham",
          role: "प्रबंध निदेशक",
          avatar: "N",
          bg: "from-purple-700 to-purple-900",
          bio:
            "हेल्थकेयर एजुकेशन में 20+ वर्षों का अनुभव। AAPC CPC-प्रमाणित, यूएस हेल्थकेयर BPO प्रबंधन और करिकुलम डिजाइन में गहरी विशेषज्ञता के साथ।",
        },
        {
          id: "jenni-bowlin-a",
          name: "Jenni Bowlin A",
          role: "शाखा प्रमुख",
          avatar: "JB",
          bg: "from-orange-500 to-orange-700",
          bio:
            "एक अग्रणी MNC में पूर्व सीनियर मेडिकल कोडर। सभी प्रशिक्षण कार्यक्रमों और शाखाओं में गुणवत्ता आश्वासन की देखरेख करती हैं।",
        },
      ],
    },
    branchSections: [
      {
        id: "thanjavur-branch-1",
        label: "शाखा टीम",
        title: "तंजावूर शाखा 1",
        bg: "bg-[#faf5ff]",
        members: [
          { id: "b-swathini", name: "B. Swathini", role: "मेटा ऐड्स विशेषज्ञ", avatar: "BS", bg: "bg-purple-700" },
          { id: "k-geshitha", name: "K. Geshitha", role: "एडमिन एवं टेलीकॉलर", avatar: "KG", bg: "bg-purple-600" },
          { id: "r-nivedha", name: "R. Nivedha", role: "ग्राफिक डिजाइनर एवं वीडियो एडिटर", avatar: "RN", bg: "bg-orange-500" },
        ],
      },
      {
        id: "thanjavur-branch-2",
        label: "शाखा टीम",
        title: "तंजावूर शाखा 2",
        bg: "bg-white",
        members: [
          { id: "c-s-harini", name: "C.S. Harini", role: "मेडिकल कोडिंग प्रशिक्षक", avatar: "CH", bg: "bg-orange-600" },
          { id: "m-asmi", name: "M. Asmi", role: "मेडिकल कोडिंग प्रशिक्षक", avatar: "MA", bg: "bg-orange-500" },
          { id: "r-kiruba", name: "R. Kiruba", role: "मेडिकल कोडिंग प्रशिक्षक", avatar: "RK", bg: "bg-purple-700" },
          { id: "k-varsha", name: "K. Varsha", role: "मेडिकल कोडिंग प्रशिक्षक", avatar: "KV", bg: "bg-teal-700" },
          { id: "aarthi", name: "Aarthi", role: "मेडिकल कोडिंग प्रशिक्षक", avatar: "AA", bg: "bg-purple-600" },
        ],
      },
      {
        id: "trichy-branch",
        label: "शाखा टीम",
        title: "त्रिची शाखा",
        bg: "bg-[#faf5ff]",
        members: [
          { id: "dheena", name: "Dheena", role: "शाखा समन्वयक एवं एडमिन", avatar: "DH", bg: "bg-teal-700" },
          { id: "kowshika", name: "Kowshika", role: "मेडिकल कोडिंग प्रशिक्षक", avatar: "KO", bg: "bg-teal-600" },
          { id: "anitha", name: "Anitha", role: "मेडिकल कोडिंग प्रशिक्षक", avatar: "AN", bg: "bg-purple-700" },
        ],
      },
    ],
    cta: {
      label: "करियर",
      title: "क्या आप हमारी टीम से जुड़ना चाहते हैं?",
      description:
        "हम हमेशा ऐसे उत्साही हेल्थकेयर एजुकेटर्स की तलाश में रहते हैं जो बदलाव लाना चाहते हैं। मेडटेक करियर से ट्रेनर या काउंसलर के रूप में जुड़ने के लिए आवेदन करें।",
      primaryLabel: "शिक्षक के रूप में आवेदन करें",
      secondaryLabel: "संपर्क करें",
    },
  },
  ml: {
    metadata: {
      title: "ഞങ്ങളുടെ ടീം — മെഡ്ടെക് കരിയർ",
    },
    hero: {
      label: "ആൾകൾ",
      titleLeading: "ഞങ്ങളുടെ",
      titleHighlight: "ടീം",
      description:
        "മെഡ്ടെക് കരിയറിന്റെ ദൗത്യത്തെ മുന്നോട്ട് നയിച്ച് ആയിരക്കണക്കിന് വിദ്യാർത്ഥികളെ മികച്ച ആരോഗ്യപരിചരണ കരിയറുകളിലേക്ക് എത്തിക്കുന്ന സമർപ്പിത പരിശീലകരെയും മാനേജർമാരെയും കൗൺസിലർമാരെയും പരിചയപ്പെടുക।",
    },
    managementSection: {
      label: "നേതൃത്വം",
      title: "ഞങ്ങളുടെ മാനേജ്മെന്റ് ടീം",
      subtitle:
        "മെഡ്ടെക് കരിയറിന്റെ ദർശനത്തിനും ഗുണനിലവാര മാനദണ്ഡങ്ങൾക്കും നേതൃത്വം നൽകുന്ന പരിചയസമ്പന്നരായ പ്രൊഫഷണലുകൾ।",
      members: [
        {
          id: "nithyanantham",
          name: "Nithyanantham",
          role: "മാനേജിംഗ് ഡയറക്ടർ",
          avatar: "N",
          bg: "from-purple-700 to-purple-900",
          bio:
            "ഹെൽത്ത്‌കെയർ വിദ്യാഭ്യാസ രംഗത്ത് 20+ വർഷത്തെ പരിചയം. യു.എസ്. ഹെൽത്ത്‌കെയർ BPO മാനേജ്മെന്റിലും പാഠ്യപദ്ധതി രൂപകൽപ്പനയിലും ആഴത്തിലുള്ള പരിചയമുള്ള AAPC CPC സർട്ടിഫൈഡ് പ്രൊഫഷണൽ.",
        },
        {
          id: "jenni-bowlin-a",
          name: "Jenni Bowlin A",
          role: "ബ്രാഞ്ച് ഹെഡ്",
          avatar: "JB",
          bg: "from-orange-500 to-orange-700",
          bio:
            "ഒരു പ്രമുഖ MNCയിലെ മുൻ സീനിയർ മെഡിക്കൽ കോഡർ. എല്ലാ പരിശീലന പരിപാടികളുടെയും ശാഖകളിലുടനീളമുള്ള ഗുണനിലവാര ഉറപ്പിന്റെയും മേൽനോട്ടം വഹിക്കുന്നു.",
        },
      ],
    },
    branchSections: [
      {
        id: "thanjavur-branch-1",
        label: "ശാഖാ ടീം",
        title: "തഞ്ചാവൂർ ശാഖ 1",
        bg: "bg-[#faf5ff]",
        members: [
          { id: "b-swathini", name: "B. Swathini", role: "മെറ്റാ ആഡ്സ് സ്പെഷലിസ്റ്റ്", avatar: "BS", bg: "bg-purple-700" },
          { id: "k-geshitha", name: "K. Geshitha", role: "അഡ്മിൻ കം ടെലികോളർ", avatar: "KG", bg: "bg-purple-600" },
          { id: "r-nivedha", name: "R. Nivedha", role: "ഗ്രാഫിക് ഡിസൈനർ & വീഡിയോ എഡിറ്റർ", avatar: "RN", bg: "bg-orange-500" },
        ],
      },
      {
        id: "thanjavur-branch-2",
        label: "ശാഖാ ടീം",
        title: "തഞ്ചാവൂർ ശാഖ 2",
        bg: "bg-white",
        members: [
          { id: "c-s-harini", name: "C.S. Harini", role: "മെഡിക്കൽ കോഡിംഗ് ട്രെയിനർ", avatar: "CH", bg: "bg-orange-600" },
          { id: "m-asmi", name: "M. Asmi", role: "മെഡിക്കൽ കോഡിംഗ് ട്രെയിനർ", avatar: "MA", bg: "bg-orange-500" },
          { id: "r-kiruba", name: "R. Kiruba", role: "മെഡിക്കൽ കോഡിംഗ് ട്രെയിനർ", avatar: "RK", bg: "bg-purple-700" },
          { id: "k-varsha", name: "K. Varsha", role: "മെഡിക്കൽ കോഡിംഗ് ട്രെയിനർ", avatar: "KV", bg: "bg-teal-700" },
          { id: "aarthi", name: "Aarthi", role: "മെഡിക്കൽ കോഡിംഗ് ട്രെയിനർ", avatar: "AA", bg: "bg-purple-600" },
        ],
      },
      {
        id: "trichy-branch",
        label: "ശാഖാ ടീം",
        title: "ത്രിച്ചി ശാഖ",
        bg: "bg-[#faf5ff]",
        members: [
          { id: "dheena", name: "Dheena", role: "ബ്രാഞ്ച് കോർഡിനേറ്റർ & അഡ്മിൻ", avatar: "DH", bg: "bg-teal-700" },
          { id: "kowshika", name: "Kowshika", role: "മെഡിക്കൽ കോഡിംഗ് ട്രെയിനർ", avatar: "KO", bg: "bg-teal-600" },
          { id: "anitha", name: "Anitha", role: "മെഡിക്കൽ കോഡിംഗ് ട്രെയിനർ", avatar: "AN", bg: "bg-purple-700" },
        ],
      },
    ],
    cta: {
      label: "കരിയർ",
      title: "ഞങ്ങളുടെ ടീമിൽ ചേരാൻ ആഗ്രഹിക്കുന്നുണ്ടോ?",
      description:
        "മാറ്റം സൃഷ്ടിക്കാൻ ആഗ്രഹിക്കുന്ന ഉത്സാഹഭരിതരായ ഹെൽത്ത്‌കെയർ അധ്യാപകരെ ഞങ്ങൾ എപ്പോഴും അന്വേഷിക്കുന്നു. ട്രെയിനറായോ കൗൺസിലറായോ മെഡ്ടെക് കരിയറിനൊപ്പം ചേരാൻ അപേക്ഷിക്കുക.",
      primaryLabel: "അധ്യാപകനായി അപേക്ഷിക്കുക",
      secondaryLabel: "ബന്ധപ്പെടുക",
    },
  },
};

export function getOurTeamPageContent(locale) {
  const resolvedLocale = resolveLocale(locale);
  const localizedBase = localizeContent(ourTeamPageContent, resolvedLocale);

  if (resolvedLocale === DEFAULT_LOCALE) {
    return localizedBase;
  }

  return mergeLocalizedContent(localizedBase, ourTeamPageTranslations[resolvedLocale]);
}