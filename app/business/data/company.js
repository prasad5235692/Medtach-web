import { localizeContent } from "@/lib/i18n/content";

const businessAboutContent = {
  metadata: {
    title: "About — MedTech Business",
    description:
      "Learn how MedTech Business helps healthcare organisations build high-performing coding, billing, and compliance teams.",
  },
  hero: {
    label: "About Us",
    title: "The Trusted Partner for Healthcare Learning",
    description:
      "MedTech Business is the enterprise arm of Medtech Career — India's leading healthcare education platform.",
  },
  storySection: {
    title: "Our Story",
    paragraphs: [
      "Medtech Career was founded in 2015 by a group of healthcare professionals who saw a critical gap: skilled medical coders and billers were in short supply while hospitals struggled with revenue leakage and compliance penalties. We set out to close that gap with industry-grade education.",
      "As our individual-learner platform grew, enterprise clients began asking for something more structured — dedicated cohorts, custom curricula, and team-level reporting. That demand gave birth to MedTech Business, the organisation-facing arm of our platform.",
      "Today we partner with 500+ healthcare organisations, from independent clinics to multi-city hospital groups, delivering programmes that measurably improve coding accuracy, reduce claim denials, and accelerate certification timelines.",
    ],
  },
  highlights: [
    {
      id: "founded",
      icon: "building-2",
      title: "Founded 2015",
      description: "A decade of delivering certified healthcare education across India.",
    },
    {
      id: "partners",
      icon: "users",
      title: "500+ Partners",
      description: "Hospitals, clinics, and healthcare BPOs trust us for team training.",
    },
    {
      id: "pass-rate",
      icon: "trending-up",
      title: "95% Pass Rate",
      description: "Our certification prep programmes consistently outperform national averages.",
    },
    {
      id: "aligned",
      icon: "award",
      title: "AAPC & AHIMA Aligned",
      description: "Curriculum developed in partnership with credentialling bodies.",
    },
  ],
  ctaSection: {
    title: "Ready to partner with us?",
    description: "Let's build a customised learning programme for your organisation.",
    primaryCtaLabel: "Contact Our Team",
  },
};

const businessSolutionsContent = {
  metadata: {
    title: "Solutions — MedTech Business",
    description:
      "Explore training solutions for coders, billers, compliance teams, and healthcare revenue cycle leaders.",
  },
  hero: {
    label: "Our Programmes",
    title: "Training Solutions for Every Healthcare Role",
    description:
      "Purpose-built programmes for coders, billers, compliance teams, and revenue cycle professionals.",
  },
  solutions: [
    {
      id: "medical-coding-billing",
      icon: "book-open",
      title: "Medical Coding & Billing",
      description:
        "Comprehensive ICD-10-CM/PCS, CPT, and HCPCS training for hospital, clinic, and physician practice teams. Covers both inpatient and outpatient scenarios with real-world case studies.",
      tags: ["ICD-10", "CPT", "HCPCS", "Outpatient", "Inpatient"],
    },
    {
      id: "compliance-regulatory",
      icon: "shield-check",
      title: "Compliance & Regulatory",
      description:
        "HIPAA Privacy & Security, Medicare/Medicaid compliance, and payer-specific guidelines. Built for HIM directors, compliance officers, and billing supervisors.",
      tags: ["HIPAA", "CMS", "Payer Compliance", "Audit Readiness"],
    },
    {
      id: "certification-prep",
      icon: "award",
      title: "CPC / CRC Certification Prep",
      description:
        "Structured 12-week bootcamp aligned with AAPC and AHIMA exam blueprints. Live mock exams, doubt sessions, and post-exam support included.",
      tags: ["AAPC", "AHIMA", "CPC", "CRC", "CCS"],
    },
    {
      id: "revenue-cycle-management",
      icon: "trending-up",
      title: "Revenue Cycle Management",
      description:
        "End-to-end RCM training from patient registration and eligibility verification to denial management and AR follow-up, with payer-specific workflows.",
      tags: ["Eligibility", "Claims", "Denials", "AR Management"],
    },
    {
      id: "cohort-team-programmes",
      icon: "users",
      title: "Cohort & Team Programmes",
      description:
        "Dedicated cohorts of 10–100 learners with a single trainer, shared schedule, and group assessments. Ideal for onboarding batches and department upskilling.",
      tags: ["Team Learning", "Onboarding", "Cohort"],
    },
    {
      id: "analytics-reporting-suite",
      icon: "bar-chart-3",
      title: "Analytics & Reporting Suite",
      description:
        "Real-time dashboards showing learner progress, course completion rates, assessment scores, and ROI benchmarks — delivered directly to your HR portal.",
      tags: ["Dashboards", "ROI", "Learning Analytics"],
    },
  ],
  ctaSection: {
    title: "Can't find exactly what you need?",
    description:
      "We build customised programmes for any speciality or team size. Let's talk.",
    primaryCtaLabel: "Request a Custom Programme",
  },
};

export function getBusinessAboutContent(locale) {
  return localizeContent(businessAboutContent, locale);
}

export function getBusinessSolutionsContent(locale) {
  return localizeContent(businessSolutionsContent, locale);
}