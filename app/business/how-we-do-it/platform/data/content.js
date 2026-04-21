import { DEFAULT_LOCALE, resolveLocale } from "@/lib/i18n/config";
import { localizeContent, mergeLocalizedContent } from "@/lib/i18n/content";

const platformPageContent = {
  metadata: {
    title: "Our Platform — MedTech Business",
    description:
      "Take a feature tour of the MedTech Business LMS built for healthcare organisations.",
  },
  hero: {
    badge: "Our Platform",
    titleSegments: [
      { id: "lead", text: "A Learning Platform Built", highlight: false },
      { id: "accent", text: "for Healthcare", highlight: true },
    ],
    description:
      "Purpose-built for medical coding, billing, and compliance training — not a generic LMS retrofitted for healthcare. Every feature is designed around how your teams learn.",
    primaryCtaLabel: "Request a Live Demo",
  },
  featuresSection: {
    label: "Platform Features",
    title: "Everything your team needs to learn",
    items: [
      {
        id: "video-library",
        icon: "play",
        title: "On-Demand Video Library",
        description:
          "40+ expert-led courses accessible 24/7. HD video, downloadable transcripts, chapter bookmarks, and in-video quizzes to boost retention.",
      },
      {
        id: "recommendations",
        icon: "zap",
        title: "AI-Powered Recommendations",
        description:
          "Our platform analyses each learner's role, progress, and skill gaps — then surfaces the most relevant next courses automatically.",
      },
      {
        id: "multi-branch",
        icon: "globe",
        title: "Multi-Branch Support",
        description:
          "Manage learners across all your clinics and hospitals from a single admin console. Assign content by department, location, or role.",
      },
      {
        id: "security",
        icon: "shield",
        title: "Enterprise-Grade Security",
        description:
          "SOC 2-aligned infrastructure, SSO support, role-based access controls, and full audit logs for compliance-sensitive organisations.",
      },
    ],
  },
  highlightsSection: {
    title: "Built to scale with your organisation",
    items: [
      "Intuitive learner dashboard with progress tracking",
      "Admin console for user management, content assignment, and reporting",
      "Mobile-responsive for on-the-go access from any device",
      "Offline mode for learners with intermittent connectivity",
      "Custom learning paths tailored to each role or department",
      "In-platform assessments with instant grading and explanations",
      "Certifications and digital badges on course completion",
      "SCORM/xAPI import for your existing content",
    ],
  },
  audienceSection: {
    learnerCard: {
      title: "For Learners",
      description:
        "A clean, distraction-free interface that puts courses, progress, and deadlines front and centre. Learners stay motivated with streaks, badges, and peer leaderboards.",
      items: [
        "Personalised course feed",
        "Progress tracker & streaks",
        "Digital certificates",
        "Mobile-friendly design",
      ],
    },
    adminCard: {
      title: "For Admins & L&D Managers",
      description:
        "A powerful admin console that gives complete visibility over every learner, team, and branch — with actionable insights to drive adoption.",
      items: [
        "Bulk user import & role assignment",
        "Content assignment by department",
        "Real-time completion dashboards",
        "Custom report exports (CSV, PDF)",
      ],
    },
  },
  ctaSection: {
    title: "See the platform in action",
    description:
      "Book a 30-minute live demo and we'll walk you through every feature relevant to your team.",
    primaryCtaLabel: "Book Platform Demo",
  },
};

const platformTranslations = {
  hi: {
    metadata: {
      title: "हमारा प्लेटफ़ॉर्म — MedTech Business",
      description: "हेल्थकेयर संगठनों के लिए बनाए गए MedTech Business LMS का फीचर टूर देखें।",
    },
    hero: {
      titleSegments: [
        { id: "lead", text: "हेल्थकेयर के लिए बना", highlight: false },
        { id: "accent", text: "एक लर्निंग प्लेटफ़ॉर्म", highlight: true },
      ],
    },
  },
  ml: {
    metadata: {
      title: "ഞങ്ങളുടെ പ്ലാറ്റ്ഫോം — MedTech Business",
      description: "ഹെൽത്കെയർ സ്ഥാപനങ്ങൾക്കായി നിർമ്മിച്ച MedTech Business LMS ന്റെ ഫീച്ചർ ടൂർ കാണൂ.",
    },
    hero: {
      titleSegments: [
        { id: "lead", text: "ഹെൽത്കെയറിനായി നിർമ്മിച്ച", highlight: false },
        { id: "accent", text: "ഒരു ലേണിംഗ് പ്ലാറ്റ്ഫോം", highlight: true },
      ],
    },
  },
};

export function getPlatformContent(locale = DEFAULT_LOCALE) {
  const resolvedLocale = resolveLocale(locale);

  if (resolvedLocale === DEFAULT_LOCALE) {
    return platformPageContent;
  }

  const localizedBase = localizeContent(platformPageContent, resolvedLocale);
  return mergeLocalizedContent(localizedBase, platformTranslations[resolvedLocale]);
}