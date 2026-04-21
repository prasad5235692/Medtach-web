import { DEFAULT_LOCALE, resolveLocale } from "@/lib/i18n/config";
import { localizeContent, mergeLocalizedContent } from "@/lib/i18n/content";

const guidesPageContent = {
  metadata: {
    title: "Guides & Webinars — MedTech Business",
    description: "Free guides, playbooks, and recorded webinars to help your healthcare L&D teams succeed.",
  },
  hero: {
    badge: "Guides & Webinars",
    titleSegments: [
      { id: "lead", text: "Free Resources for", highlight: false },
      { id: "accent", text: "Healthcare L&D Leaders", highlight: true },
    ],
    description:
      "Practical guides, recorded webinars, and industry reports to help you build a world-class training programme for your healthcare team.",
  },
  items: [
    {
      id: "ld-playbook",
      type: "Guide",
      icon: "download",
      badge: "Free PDF",
      badgeColor: "bg-purple-100 text-purple-800",
      title: "The L&D Leader's Playbook for Healthcare Team Training",
      description:
        "A step-by-step guide to designing, deploying, and measuring a training programme for medical coding and billing teams. Includes budget templates and KPI frameworks.",
      cta: "Download Guide",
      href: "/business/contact",
    },
    {
      id: "cpc-cheat-sheet",
      type: "Guide",
      icon: "download",
      badge: "Free PDF",
      badgeColor: "bg-purple-100 text-purple-800",
      title: "CPC Exam Prep Cheat Sheet for Supervisors",
      description:
        "A condensed reference covering the top 20 exam topics, scoring strategies, and a 12-week study plan template your managers can share with their teams.",
      cta: "Download Cheat Sheet",
      href: "/business/contact",
    },
    {
      id: "results-driven-webinar",
      type: "Webinar",
      icon: "play",
      badge: "Recorded",
      badgeColor: "bg-purple-100 text-purple-700",
      title: "From Skills Gaps to Certification: Building a Results-Driven L&D Programme",
      description:
        "Our Head of Curriculum and a guest HIM Director from a 500-bed hospital share the exact framework they used to take coding accuracy from 72% to 97%.",
      cta: "Watch Now",
      href: "/business/contact",
    },
    {
      id: "ai-coding-webinar",
      type: "Webinar",
      icon: "play",
      badge: "Recorded",
      badgeColor: "bg-purple-100 text-purple-700",
      title: "AI in Healthcare Coding: What Every Coder Needs to Know in 2026",
      description:
        "A 45-minute session exploring how AI-assisted coding tools are changing the job — and what skills coders need to stay relevant and valuable.",
      cta: "Watch Webinar",
      href: "/business/contact",
    },
    {
      id: "workforce-learning-report",
      type: "Report",
      icon: "file-text",
      badge: "Industry Report",
      badgeColor: "bg-emerald-100 text-emerald-700",
      title: "State of Healthcare Workforce Learning in India — 2026",
      description:
        "Survey data from 300+ L&D managers across hospitals and healthcare BPOs. Covers budget trends, top skills priorities, and the impact of regulatory changes on training needs.",
      cta: "Get the Report",
      href: "/business/contact",
    },
    {
      id: "denial-management-workbook",
      type: "Guide",
      icon: "download",
      badge: "Free PDF",
      badgeColor: "bg-purple-100 text-purple-800",
      title: "Denial Management Masterclass — Workbook & Templates",
      description:
        "Practical AR and denial management workbook covering the top 10 denial codes, root-cause workflows, and template letters your billing team can use immediately.",
      cta: "Download Workbook",
      href: "/business/contact",
    },
  ],
  newsletterSection: {
    title: "Get new resources in your inbox",
    description: "Join 2,000+ healthcare L&D professionals who receive our monthly resource roundup.",
    primaryCtaLabel: "Subscribe to Updates",
  },
  ctaSection: {
    title: "Want personalised advice for your team?",
    description: "Book a free 30-minute strategy call with one of our learning consultants.",
    primaryCtaLabel: "Book a Strategy Call",
  },
};

const guidesTranslations = {
  hi: {
    metadata: {
      title: "गाइड्स और वेबिनार — MedTech Business",
      description: "आपकी हेल्थकेयर L&D टीमों की सफलता के लिए मुफ्त गाइड्स, प्लेबुक्स और रिकॉर्डेड वेबिनार।",
    },
    hero: {
      titleSegments: [
        { id: "lead", text: "हेल्थकेयर L&D लीडर्स के लिए", highlight: false },
        { id: "accent", text: "मुफ़्त संसाधन", highlight: true },
      ],
    },
  },
  ml: {
    metadata: {
      title: "ഗൈഡുകളും വെബിനാറുകളും — MedTech Business",
      description: "നിങ്ങളുടെ ഹെൽത്കെയർ L&D ടീമുകളുടെ വിജയത്തിന് സൗജന്യ ഗൈഡുകൾ, പ്ലേബുക്കുകൾ, റെക്കോർഡുചെയ്ത വെബിനാറുകൾ.",
    },
    hero: {
      titleSegments: [
        { id: "lead", text: "ഹെൽത്കെയർ L&D നേതാക്കൾക്കായി", highlight: false },
        { id: "accent", text: "സൗജന്യ വിഭവങ്ങൾ", highlight: true },
      ],
    },
  },
};

export function getGuidesContent(locale = DEFAULT_LOCALE) {
  const resolvedLocale = resolveLocale(locale);

  if (resolvedLocale === DEFAULT_LOCALE) {
    return guidesPageContent;
  }

  const localizedBase = localizeContent(guidesPageContent, resolvedLocale);
  return mergeLocalizedContent(localizedBase, guidesTranslations[resolvedLocale]);
}