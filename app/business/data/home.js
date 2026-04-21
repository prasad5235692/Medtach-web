import { localizeContent } from "@/lib/i18n/content";

const businessHomeContent = {
  metadata: {
    title: "MedTech Business — Upskill Your Healthcare Team",
    description:
      "Enterprise training solutions for healthcare organizations. Medical coding, billing, and compliance courses at scale.",
  },
  hero: {
    backLabel: "Back to MedTech Career",
    badge: "Enterprise Healthcare Training",
    titleLeading: "Upskill Your",
    titleHighlight: "Healthcare Team",
    titleTrailing: "at Scale",
    description:
      "Medtech Business provides hospitals, clinics, and healthcare organisations with certified, flexible, and results-driven training in medical coding, billing, and compliance.",
    primaryCtaLabel: "Get a Free Demo",
    secondaryCtaLabel: "Explore Solutions",
    trustLabel: "Trusted by 500+ healthcare organisations across India",
  },
  stats: [
    { id: "organizations", value: "500+", label: "Organizations Trained" },
    { id: "employees", value: "12,000+", label: "Employees Upskilled" },
    { id: "pass-rate", value: "95%", label: "Certification Pass Rate" },
    { id: "courses", value: "40+", label: "Specialised Courses" },
  ],
  solutionsSection: {
    label: "What We Offer",
    title: "Training Solutions Built for Healthcare",
    description:
      "From individual certification prep to enterprise-wide cohort programmes, we have a solution for every stage of your team's growth.",
    viewAllLabel: "View all solutions",
    items: [
      {
        id: "coding-billing",
        icon: "book-open",
        title: "Medical Coding & Billing",
        description:
          "ICD-10, CPT, HCPCS — end-to-end coding and billing training tailored for hospital and clinic teams.",
      },
      {
        id: "compliance",
        icon: "shield-check",
        title: "Compliance & Regulatory",
        description:
          "HIPAA, CMS, and payer-specific compliance programs designed for healthcare administrators.",
      },
      {
        id: "certification-prep",
        icon: "award",
        title: "CPC / CRC Certification Prep",
        description:
          "Structured certification bootcamps for AAPC and AHIMA credentials with live mentoring.",
      },
      {
        id: "revenue-cycle",
        icon: "trending-up",
        title: "Revenue Cycle Management",
        description:
          "Holistic RCM training covering eligibility, claims, denials, and AR follow-up workflows.",
      },
      {
        id: "team-programs",
        icon: "users",
        title: "Team & Cohort Programs",
        description:
          "Dedicated learning cohorts with a dedicated trainer, progress dashboards, and group assessments.",
      },
      {
        id: "analytics-reporting",
        icon: "bar-chart-3",
        title: "Analytics & Reporting",
        description:
          "Real-time learner analytics, completion reports, and ROI metrics delivered to your HR portal.",
      },
    ],
  },
  whyUsSection: {
    label: "Why Choose Us",
    title: "Everything your team needs to succeed",
    description:
      "We don't just deliver courses — we partner with your organisation to design learning journeys that drive measurable business outcomes.",
    points: [
      "Industry-certified trainers with 10+ years clinical experience",
      "Live sessions + recorded library access for your entire team",
      "Customised curriculum aligned to your speciality or payer mix",
      "Dedicated account manager & 24/7 learner support",
      "Bulk seat pricing with flexible billing cycles",
      "ISO-quality learning materials updated quarterly",
    ],
    primaryCtaLabel: "Talk to Our Team",
    features: [
      {
        id: "flexible-learning",
        icon: "clock",
        title: "Flexible Learning",
        description: "Self-paced + live sessions that fit any shift pattern.",
      },
      {
        id: "pan-india-access",
        icon: "globe",
        title: "Pan-India Access",
        description: "Learners across all your branches on a single platform.",
      },
      {
        id: "progress-dashboards",
        icon: "bar-chart-3",
        title: "Progress Dashboards",
        description: "HR-ready reports for every department and team.",
      },
      {
        id: "recognized-certifications",
        icon: "award",
        title: "Recognised Certifications",
        description: "AAPC & AHIMA-aligned credentials respected by employers.",
      },
    ],
  },
  testimonialsSection: {
    label: "What Clients Say",
    title: "Trusted by Healthcare Leaders",
    items: [
      {
        id: "apollo",
        quote:
          "Our coding accuracy improved by 28% within three months of enrolling. The structured curriculum is exactly what hospital teams need.",
        name: "Dr. Kavitha R.",
        role: "HIM Director, Apollo Hospitals",
      },
      {
        id: "fortis",
        quote:
          "Medtech Business gave our billing staff the confidence and credentials to handle complex payer requirements. Highly recommend.",
        name: "Rajan Pillai",
        role: "Revenue Cycle Head, Fortis Healthcare",
      },
      {
        id: "manipal",
        quote:
          "The cohort model meant our team learned together and supported each other. Completion rates went from 60% to 94%.",
        name: "Sneha Menon",
        role: "L&D Manager, Manipal Health",
      },
    ],
  },
  ctaSection: {
    title: "Ready to transform your team?",
    description:
      "Book a free 30-minute discovery call and we'll design a custom learning plan for your organisation.",
    primaryCtaLabel: "Book a Demo Call",
    secondaryCtaLabel: "View Pricing",
  },
};

export function getBusinessHomeContent(locale) {
  return localizeContent(businessHomeContent, locale);
}