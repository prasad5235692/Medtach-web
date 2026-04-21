import { DEFAULT_LOCALE, resolveLocale } from "@/lib/i18n/config";
import { localizeContent, mergeLocalizedContent } from "@/lib/i18n/content";

const integrationsPageContent = {
  metadata: {
    title: "Integrations — MedTech Business",
    description:
      "SCORM, xAPI, LMS, and HR system integrations to fit into your existing tech stack.",
  },
  hero: {
    badge: "Integrations",
    titleSegments: [
      { id: "lead", text: "Fits Seamlessly Into", highlight: false },
      { id: "accent", text: "Your Existing Stack", highlight: true },
    ],
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

const integrationsTranslations = {
  hi: {
    metadata: {
      title: "इंटीग्रेशन्स — MedTech Business",
      description: "आपके मौजूदा टेक स्टैक में फिट होने के लिए SCORM, xAPI, LMS और HR सिस्टम इंटीग्रेशन्स।",
    },
    hero: {
      titleSegments: [
        { id: "lead", text: "आपके मौजूदा स्टैक में", highlight: false },
        { id: "accent", text: "सहजता से फिट होता है", highlight: true },
      ],
    },
  },
  ml: {
    metadata: {
      title: "ഇന്റഗ്രേഷനുകൾ — MedTech Business",
      description: "നിങ്ങളുടെ നിലവിലെ ടെക് സ്റ്റാക്കിലേക്ക് ചേർന്നു പ്രവർത്തിക്കാൻ SCORM, xAPI, LMS, HR സിസ്റ്റം ഇന്റഗ്രേഷനുകൾ.",
    },
    hero: {
      titleSegments: [
        { id: "lead", text: "നിങ്ങളുടെ നിലവിലെ സ്റ്റാക്കിൽ", highlight: false },
        { id: "accent", text: "സമർത്ഥമായി ചേർന്നു പ്രവർത്തിക്കുന്നു", highlight: true },
      ],
    },
  },
};

export function getIntegrationsContent(locale = DEFAULT_LOCALE) {
  const resolvedLocale = resolveLocale(locale);

  if (resolvedLocale === DEFAULT_LOCALE) {
    return integrationsPageContent;
  }

  const localizedBase = localizeContent(integrationsPageContent, resolvedLocale);
  return mergeLocalizedContent(localizedBase, integrationsTranslations[resolvedLocale]);
}