import { localizeContent } from "@/lib/i18n/content";

const platformContent = {
  metadata: {
    title: "Our Platform — MedTech Business",
    description:
      "Take a feature tour of the MedTech Business LMS built for healthcare organisations.",
  },
  hero: {
    badge: "Our Platform",
    titleLeading: "A Learning Platform Built",
    titleHighlight: "for Healthcare",
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

const analyticsContent = {
  metadata: {
    title: "Analytics & Reporting — MedTech Business",
    description:
      "Real-time dashboards, ROI metrics, and HR-ready reports for healthcare L&D teams.",
  },
  hero: {
    badge: "Analytics & Reporting",
    titleLeading: "Insights That Drive",
    titleHighlight: "Real Business Outcomes",
    description:
      "Move beyond completion percentages. MedTech Business analytics connect learning activity to coding accuracy, denial rates, and revenue cycle performance.",
    primaryCtaLabel: "See a Demo",
  },
  metrics: [
    { id: "real-time", value: "Real-time", label: "Dashboard updates" },
    { id: "exports", value: "CSV / PDF", label: "Export formats" },
    { id: "templates", value: "10+", label: "Report templates" },
    { id: "api", value: "API", label: "Data access option" },
  ],
  reportsSection: {
    label: "What You Can Measure",
    title: "Reporting for every stakeholder",
    items: [
      {
        id: "adoption",
        icon: "users",
        title: "User Adoption Report",
        description:
          "Track active learners, total hours spent, and login frequency across your entire organisation or filtered by branch and department.",
      },
      {
        id: "skills",
        icon: "trending-up",
        title: "Skills Proficiency Dashboard",
        description:
          "See which skills your teams have mastered and where gaps remain — mapped to real coding, billing, and compliance competencies.",
      },
      {
        id: "completion",
        icon: "pie-chart",
        title: "Course Completion & Scores",
        description:
          "Per-course completion rates, average assessment scores, and time-to-complete metrics to identify at-risk learners early.",
      },
      {
        id: "custom-builder",
        icon: "download",
        title: "Custom Report Builder",
        description:
          "Pull any combination of metrics into a branded report and schedule automated monthly or quarterly exports to your HR inbox.",
      },
    ],
  },
  roiSection: {
    label: "Prove the ROI of Learning",
    title: "Connect training to business metrics",
    description:
      "Our clients measure learning ROI in the metrics that matter most to healthcare executives: coding accuracy, first-pass claim rates, denial write-offs, and certification headcount.",
    stats: [
      {
        id: "accuracy",
        metric: "28%",
        label: "Average improvement in coding accuracy after 3 months",
      },
      {
        id: "denials",
        metric: "40%",
        label: "Reduction in denial write-offs reported by clients",
      },
      {
        id: "certifications",
        metric: "3×",
        label: "Faster certification timelines vs. self-study",
      },
    ],
  },
  ctaSection: {
    title: "Make your L&D budget accountable",
    description:
      "Talk to us about setting up a custom dashboard that speaks the language of your leadership team.",
    primaryCtaLabel: "Request Analytics Demo",
  },
};

const integrationsContent = {
  metadata: {
    title: "Integrations — MedTech Business",
    description:
      "SCORM, xAPI, LMS, and HR system integrations to fit into your existing tech stack.",
  },
  hero: {
    badge: "Integrations",
    titleLeading: "Fits Seamlessly Into",
    titleHighlight: "Your Existing Stack",
    description:
      "MedTech Business connects to the HR, LMS, and identity systems you already use — so your team learns where they already work.",
    primaryCtaLabel: "Discuss My Setup",
  },
  integrationsSection: {
    label: "Integration Options",
    title: "Connect your learning ecosystem",
    items: [
      {
        id: "sso",
        icon: "link-2",
        title: "Single Sign-On (SSO)",
        description:
          "Connect to your existing identity provider (Azure AD, Okta, Google Workspace) so learners use the same credentials they already know.",
      },
      {
        id: "hris",
        icon: "database",
        title: "HRIS / HR System Sync",
        description:
          "Automatically provision and deprovision users from SAP SuccessFactors, Workday, or your custom HR database via our REST API.",
      },
      {
        id: "lms",
        icon: "refresh-cw",
        title: "LMS Integration (SCORM / xAPI)",
        description:
          "Import our SCORM 1.2 / SCORM 2004 / xAPI content packages into your existing LMS or export learner data back to TalentLMS, Moodle, or Cornerstone.",
      },
      {
        id: "reporting-api",
        icon: "shield-check",
        title: "Reporting API",
        description:
          "Pull completion data, assessment scores, and learner activity programmatically into your BI tools (Power BI, Tableau, Looker) via our secure REST API.",
      },
    ],
  },
  supportedSystemsSection: {
    label: "Compatible With",
    title: "Works with the tools you rely on",
    items: [
      "SAP SuccessFactors",
      "Workday",
      "Oracle HCM",
      "Cornerstone OnDemand",
      "TalentLMS",
      "Moodle",
      "Azure AD",
      "Okta",
      "Google Workspace",
      "Microsoft Teams",
      "Slack",
      "Power BI",
    ],
    footnote: "Don't see your system? We likely support it — contact us to confirm.",
  },
  securitySection: {
    title: "Enterprise-Grade Security",
    description:
      "All integrations use encrypted connections (TLS 1.3), OAuth 2.0 / SAML 2.0 authentication, and are covered by our SOC 2-aligned data processing agreements. Your learner data never leaves India's cloud infrastructure.",
    badges: ["SOC 2 Aligned", "GDPR-Ready", "ISO 27001 Practices", "Data Residency in India"],
  },
  ctaSection: {
    title: "Ready to connect your stack?",
    description:
      "Our technical team will scope your integration requirements and deliver a working connection within days.",
    primaryCtaLabel: "Talk to an Integration Specialist",
  },
};

const customerSuccessContent = {
  metadata: {
    title: "Customer Success — MedTech Business",
    description:
      "Dedicated partner support and 24/7 learner assistance for every MedTech Business client.",
  },
  hero: {
    badge: "Customer Success",
    titleLeading: "A Partner, Not Just",
    titleHighlight: "a Platform",
    description:
      "Our customer success team is invested in your outcomes. From onboarding to QBRs, we're with you at every stage of your learning programme.",
    primaryCtaLabel: "Meet Your Success Team",
  },
  featuresSection: {
    label: "How We Support You",
    title: "Success is built into every plan",
    items: [
      {
        id: "account-manager",
        icon: "user-check",
        title: "Dedicated Account Manager",
        description:
          "Every Enterprise client gets a named account manager who owns your success, conducts quarterly business reviews, and proactively flagging risks.",
        planLabel: "Enterprise Plan",
      },
      {
        id: "learner-support",
        icon: "clock",
        title: "24/7 Learner Support",
        description:
          "Round-the-clock help desk for learners with live chat and email support. Average first response time under 2 hours.",
        planLabel: "All Plans",
      },
      {
        id: "onboarding",
        icon: "message-square",
        title: "Onboarding & Adoption Coaching",
        description:
          "Structured onboarding sessions for your L&D and HR teams. We run adoption campaigns, send nudge emails, and help you build a learning culture from day one.",
        planLabel: "Professional & Enterprise",
      },
      {
        id: "quarterly-reviews",
        icon: "trending-up",
        title: "Quarterly Business Reviews",
        description:
          "Comprehensive QBRs covering usage data, ROI metrics, upcoming content releases, and a forward-looking roadmap aligned to your business goals.",
        planLabel: "Enterprise Plan",
      },
    ],
  },
  tiersSection: {
    label: "Support Tiers",
    title: "Support that grows with you",
    responseLabel: "First response in",
    items: [
      {
        id: "starter",
        name: "Starter",
        response: "48 hours",
        channels: ["Email"],
        features: ["Help centre access", "Email support"],
        highlight: false,
      },
      {
        id: "professional",
        name: "Professional",
        response: "12 hours",
        channels: ["Email", "Live Chat"],
        features: [
          "Help centre access",
          "Email + live chat",
          "Monthly check-in call",
          "Onboarding session",
        ],
        highlight: false,
      },
      {
        id: "enterprise",
        name: "Enterprise",
        response: "2 hours",
        channels: ["Email", "Live Chat", "Phone", "Slack"],
        features: [
          "All Professional features",
          "Dedicated account manager",
          "Quarterly business reviews",
          "Priority escalation path",
          "Proactive adoption campaigns",
        ],
        highlight: true,
      },
    ],
  },
  ctaSection: {
    title: "Talk to our team today",
    description:
      "Find out which support tier is right for your organisation — no commitment required.",
    primaryCtaLabel: "Contact Customer Success",
  },
};

export function getPlatformContent(locale) {
  return localizeContent(platformContent, locale);
}

export function getAnalyticsContent(locale) {
  return localizeContent(analyticsContent, locale);
}

export function getIntegrationsContent(locale) {
  return localizeContent(integrationsContent, locale);
}

export function getCustomerSuccessContent(locale) {
  return localizeContent(customerSuccessContent, locale);
}import { localizeContent } from "@/lib/i18n/content";

const platformContent = {
  metadata: {
    title: "Our Platform — MedTech Business",
    description:
      "Take a feature tour of the MedTech Business LMS built for healthcare organisations.",
  },
  hero: {
    badge: "Our Platform",
    titleLeading: "A Learning Platform Built",
    titleHighlight: "for Healthcare",
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

const analyticsContent = {
  metadata: {
    title: "Analytics & Reporting — MedTech Business",
    description:
      "Real-time dashboards, ROI metrics, and HR-ready reports for healthcare L&D teams.",
  },
  hero: {
    badge: "Analytics & Reporting",
    titleLeading: "Insights That Drive",
    titleHighlight: "Real Business Outcomes",
    description:
      "Move beyond completion percentages. MedTech Business analytics connect learning activity to coding accuracy, denial rates, and revenue cycle performance.",
    primaryCtaLabel: "See a Demo",
  },
  metrics: [
    { id: "real-time", value: "Real-time", label: "Dashboard updates" },
    { id: "exports", value: "CSV / PDF", label: "Export formats" },
    { id: "templates", value: "10+", label: "Report templates" },
    { id: "api", value: "API", label: "Data access option" },
  ],
  reportsSection: {
    label: "What You Can Measure",
    title: "Reporting for every stakeholder",
    items: [
      {
        id: "adoption",
        icon: "users",
        title: "User Adoption Report",
        description:
          "Track active learners, total hours spent, and login frequency across your entire organisation or filtered by branch and department.",
      },
      {
        id: "skills",
        icon: "trending-up",
        title: "Skills Proficiency Dashboard",
        description:
          "See which skills your teams have mastered and where gaps remain — mapped to real coding, billing, and compliance competencies.",
      },
      {
        id: "completion",
        icon: "pie-chart",
        title: "Course Completion & Scores",
        description:
          "Per-course completion rates, average assessment scores, and time-to-complete metrics to identify at-risk learners early.",
      },
      {
        id: "custom-builder",
        icon: "download",
        title: "Custom Report Builder",
        description:
          "Pull any combination of metrics into a branded report and schedule automated monthly or quarterly exports to your HR inbox.",
      },
    ],
  },
  roiSection: {
    label: "Prove the ROI of Learning",
    title: "Connect training to business metrics",
    description:
      "Our clients measure learning ROI in the metrics that matter most to healthcare executives: coding accuracy, first-pass claim rates, denial write-offs, and certification headcount.",
    stats: [
      {
        id: "accuracy",
        metric: "28%",
        label: "Average improvement in coding accuracy after 3 months",
      },
      {
        id: "denials",
        metric: "40%",
        label: "Reduction in denial write-offs reported by clients",
      },
      {
        id: "certifications",
        metric: "3×",
        label: "Faster certification timelines vs. self-study",
      },
    ],
  },
  ctaSection: {
    title: "Make your L&D budget accountable",
    description:
      "Talk to us about setting up a custom dashboard that speaks the language of your leadership team.",
    primaryCtaLabel: "Request Analytics Demo",
  },
};

const integrationsContent = {
  metadata: {
    title: "Integrations — MedTech Business",
    description:
      "SCORM, xAPI, LMS, and HR system integrations to fit into your existing tech stack.",
  },
  hero: {
    badge: "Integrations",
    titleLeading: "Fits Seamlessly Into",
    titleHighlight: "Your Existing Stack",
    description:
      "MedTech Business connects to the HR, LMS, and identity systems you already use — so your team learns where they already work.",
    primaryCtaLabel: "Discuss My Setup",
  },
  integrationsSection: {
    label: "Integration Options",
    title: "Connect your learning ecosystem",
    items: [
      {
        id: "sso",
        icon: "link-2",
        title: "Single Sign-On (SSO)",
        description:
          "Connect to your existing identity provider (Azure AD, Okta, Google Workspace) so learners use the same credentials they already know.",
      },
      {
        id: "hris",
        icon: "database",
        title: "HRIS / HR System Sync",
        description:
          "Automatically provision and deprovision users from SAP SuccessFactors, Workday, or your custom HR database via our REST API.",
      },
      {
        id: "lms",
        icon: "refresh-cw",
        title: "LMS Integration (SCORM / xAPI)",
        description:
          "Import our SCORM 1.2 / SCORM 2004 / xAPI content packages into your existing LMS or export learner data back to TalentLMS, Moodle, or Cornerstone.",
      },
      {
        id: "reporting-api",
        icon: "shield-check",
        title: "Reporting API",
        description:
          "Pull completion data, assessment scores, and learner activity programmatically into your BI tools (Power BI, Tableau, Looker) via our secure REST API.",
      },
    ],
  },
  supportedSystemsSection: {
    label: "Compatible With",
    title: "Works with the tools you rely on",
    items: [
      "SAP SuccessFactors",
      "Workday",
      "Oracle HCM",
      "Cornerstone OnDemand",
      "TalentLMS",
      "Moodle",
      "Azure AD",
      "Okta",
      "Google Workspace",
      "Microsoft Teams",
      "Slack",
      "Power BI",
    ],
    footnote: "Don't see your system? We likely support it — contact us to confirm.",
  },
  securitySection: {
    title: "Enterprise-Grade Security",
    description:
      "All integrations use encrypted connections (TLS 1.3), OAuth 2.0 / SAML 2.0 authentication, and are covered by our SOC 2-aligned data processing agreements. Your learner data never leaves India's cloud infrastructure.",
    badges: ["SOC 2 Aligned", "GDPR-Ready", "ISO 27001 Practices", "Data Residency in India"],
  },
  ctaSection: {
    title: "Ready to connect your stack?",
    description:
      "Our technical team will scope your integration requirements and deliver a working connection within days.",
    primaryCtaLabel: "Talk to an Integration Specialist",
  },
};

const customerSuccessContent = {
  metadata: {
    title: "Customer Success — MedTech Business",
    description:
      "Dedicated partner support and 24/7 learner assistance for every MedTech Business client.",
  },
  hero: {
    badge: "Customer Success",
    titleLeading: "A Partner, Not Just",
    titleHighlight: "a Platform",
    description:
      "Our customer success team is invested in your outcomes. From onboarding to QBRs, we're with you at every stage of your learning programme.",
    primaryCtaLabel: "Meet Your Success Team",
  },
  featuresSection: {
    label: "How We Support You",
    title: "Success is built into every plan",
    items: [
      {
        id: "account-manager",
        icon: "user-check",
        title: "Dedicated Account Manager",
        description:
          "Every Enterprise client gets a named account manager who owns your success, conducts quarterly business reviews, and proactively flagging risks.",
        planLabel: "Enterprise Plan",
      },
      {
        id: "learner-support",
        icon: "clock",
        title: "24/7 Learner Support",
        description:
          "Round-the-clock help desk for learners with live chat and email support. Average first response time under 2 hours.",
        planLabel: "All Plans",
      },
      {
        id: "onboarding",
        icon: "message-square",
        title: "Onboarding & Adoption Coaching",
        description:
          "Structured onboarding sessions for your L&D and HR teams. We run adoption campaigns, send nudge emails, and help you build a learning culture from day one.",
        planLabel: "Professional & Enterprise",
      },
      {
        id: "quarterly-reviews",
        icon: "trending-up",
        title: "Quarterly Business Reviews",
        description:
          "Comprehensive QBRs covering usage data, ROI metrics, upcoming content releases, and a forward-looking roadmap aligned to your business goals.",
        planLabel: "Enterprise Plan",
      },
    ],
  },
  tiersSection: {
    label: "Support Tiers",
    title: "Support that grows with you",
    responseLabel: "First response in",
    items: [
      {
        id: "starter",
        name: "Starter",
        response: "48 hours",
        channels: ["Email"],
        features: ["Help centre access", "Email support"],
        highlight: false,
      },
      {
        id: "professional",
        name: "Professional",
        response: "12 hours",
        channels: ["Email", "Live Chat"],
        features: [
          "Help centre access",
          "Email + live chat",
          "Monthly check-in call",
          "Onboarding session",
        ],
        highlight: false,
      },
      {
        id: "enterprise",
        name: "Enterprise",
        response: "2 hours",
        channels: ["Email", "Live Chat", "Phone", "Slack"],
        features: [
          "All Professional features",
          "Dedicated account manager",
          "Quarterly business reviews",
          "Priority escalation path",
          "Proactive adoption campaigns",
        ],
        highlight: true,
      },
    ],
  },
  ctaSection: {
    title: "Talk to our team today",
    description:
      "Find out which support tier is right for your organisation — no commitment required.",
    primaryCtaLabel: "Contact Customer Success",
  },
};

export function getPlatformContent(locale) {
  return localizeContent(platformContent, locale);
}

export function getAnalyticsContent(locale) {
  return localizeContent(analyticsContent, locale);
}

export function getIntegrationsContent(locale) {
  return localizeContent(integrationsContent, locale);
}

export function getCustomerSuccessContent(locale) {
  return localizeContent(customerSuccessContent, locale);
}