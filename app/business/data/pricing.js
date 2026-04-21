import { localizeContent } from "@/lib/i18n/content";

const pricingContent = {
  metadata: {
    title: "Compare Plans — MedTech Business",
    description: "Scalable healthcare training plans for teams and enterprises.",
  },
  hero: {
    backLabel: "Back to MedTech Career",
    eyebrow: "Plans & Pricing",
    titleLine1: "Scalable learning plans for",
    titleHighlight: "healthcare organisations",
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
    titleLeading: "Train your teams in their",
    titleHighlight: "native language",
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

export function getPricingContent(locale) {
  return localizeContent(pricingContent, locale);
}