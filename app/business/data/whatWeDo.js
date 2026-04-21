import { localizeContent } from "@/lib/i18n/content";

const onDemandLearningContent = {
  metadata: {
    title: "On-Demand Learning — MedTech Business",
    description: "Give your team anytime, anywhere access to 40+ certified healthcare courses.",
  },
  hero: {
    badge: "On-Demand Learning",
    titleLeading: "Upskill Your Team",
    titleHighlight: "On Their Schedule",
    description:
      "Give every member of your healthcare team flexible, 24/7 access to expert-led courses covering medical coding, billing, compliance, and revenue cycle management.",
    primaryCtaLabel: "Request a Demo",
    secondaryCtaLabel: "Compare Plans",
  },
  stats: [
    { id: "courses", value: "40+", label: "Certified Courses" },
    { id: "clients", value: "500+", label: "Healthcare Clients" },
    { id: "specialisations", value: "16", label: "Specialisations" },
    { id: "access", value: "24/7", label: "Learner Access" },
  ],
  benefitsSection: {
    label: "Why On-Demand?",
    title: "Here's what on-demand learning does for your organisation",
    items: [
      "Close skills gaps and improve coding accuracy across departments",
      "Develop talent from within and improve staff retention",
      "Support business continuity through regulatory and payer changes",
      "Reduce training overhead with a single, centralised platform",
      "Increase revenue by reducing claim denials and improving RCM efficiency",
    ],
    featureCards: [
      {
        id: "learn-anytime",
        icon: "clock",
        title: "Learn Anytime",
        description: "Self-paced modules that fit any shift pattern or work schedule.",
      },
      {
        id: "pan-india-access",
        icon: "globe",
        title: "Pan-India Access",
        description: "All branches on one platform — no per-branch licences needed.",
      },
      {
        id: "team-dashboards",
        icon: "users",
        title: "Team Dashboards",
        description: "Track every learner's progress across your organisation.",
      },
      {
        id: "roi-reporting",
        icon: "bar-chart-3",
        title: "ROI Reporting",
        description: "Measure productivity uplift and certification pass rates.",
      },
    ],
  },
  skillAreasSection: {
    label: "In-Demand Skills, On Demand",
    title: "What your team will learn",
    items: [
      {
        id: "medical-coding",
        title: "Medical Coding",
        description: "ICD-10-CM/PCS, CPT, HCPCS — inpatient and outpatient scenarios.",
      },
      {
        id: "medical-billing",
        title: "Medical Billing",
        description: "End-to-end claim submission, payer rules and ERA reconciliation.",
      },
      {
        id: "compliance",
        title: "Compliance",
        description: "HIPAA, CMS, and audit-readiness programmes.",
      },
      {
        id: "revenue-cycle",
        title: "Revenue Cycle",
        description: "Eligibility, denials, AR management and cash flow optimisation.",
      },
    ],
  },
  ctaSection: {
    title: "Ready to get started?",
    description: "Book a free 30-minute demo and see the platform in action.",
    primaryCtaLabel: "Book a Demo",
  },
};

const certificationPrepContent = {
  metadata: {
    title: "Certification Prep — MedTech Business",
    description: "Structured CPC, CRC, CCS & AHIMA exam bootcamps with live mentoring for your team.",
  },
  hero: {
    badge: "Certification Prep",
    titleLeading: "Develop and",
    titleHighlight: "Validate Skills",
    description:
      "Grow your employees' skills with AAPC- and AHIMA-aligned certification bootcamps. Badges and credentials they can share — respect they can earn.",
    primaryCtaLabel: "Enrol Your Team",
    secondaryCtaLabel: "View Plans",
  },
  stats: [
    { id: "pass-rate", value: "95%", label: "First-attempt pass rate" },
    { id: "duration", value: "12 wk", label: "Average prep duration" },
    { id: "credentials", value: "6", label: "Credentials covered" },
    { id: "passers", value: "200+", label: "Exam passers in 2024" },
  ],
  credentialsSection: {
    label: "Credentials We Prepare For",
    title: "Six industry-recognised certifications",
    items: [
      {
        id: "cpc",
        code: "CPC",
        body: "AAPC",
        full: "Certified Professional Coder",
        color: "bg-purple-50 text-purple-800 border-purple-200",
      },
      {
        id: "crc",
        code: "CRC",
        body: "AAPC",
        full: "Certified Risk Adjustment Coder",
        color: "bg-purple-50 text-purple-700 border-purple-200",
      },
      {
        id: "coc",
        code: "COC",
        body: "AAPC",
        full: "Certified Outpatient Coder",
        color: "bg-emerald-50 text-emerald-700 border-emerald-200",
      },
      {
        id: "ccs",
        code: "CCS",
        body: "AHIMA",
        full: "Certified Coding Specialist",
        color: "bg-purple-50 text-purple-800 border-purple-200",
      },
      {
        id: "rhit",
        code: "RHIT",
        body: "AHIMA",
        full: "Registered Health Information Tech",
        color: "bg-purple-50 text-purple-700 border-purple-200",
      },
      {
        id: "cpma",
        code: "CPMA",
        body: "AAPC",
        full: "Certified Professional Medical Auditor",
        color: "bg-emerald-50 text-emerald-700 border-emerald-200",
      },
    ],
  },
  programmeFeaturesSection: {
    label: "What's Included",
    title: "Everything your team needs to pass",
    items: [
      "12-week structured bootcamp aligned to the latest exam blueprint",
      "Live doubt-clearing sessions twice a week with certified instructors",
      "Full-length mock exams with detailed answer explanations",
      "Dedicated Slack/Teams channel for peer support",
      "Study materials, quick-reference guides, and code books included",
      "Post-exam re-attempt coaching at no extra cost",
    ],
  },
  processSection: {
    title: "How the Bootcamp Works",
    items: [
      {
        id: "enrol-assess",
        step: "01",
        icon: "book-open",
        title: "Enrol & Assess",
        description:
          "Your team takes a baseline diagnostic to identify knowledge gaps before training begins.",
      },
      {
        id: "learn-cohort",
        step: "02",
        icon: "users",
        title: "Learn in Cohort",
        description:
          "12 weeks of live + self-paced study, mock exams, and weekly Q&A with certified trainers.",
      },
      {
        id: "certify-share",
        step: "03",
        icon: "award",
        title: "Certify & Share",
        description:
          "Pass the exam, receive your AAPC/AHIMA credential, and share your digital badge.",
      },
    ],
  },
  ctaSection: {
    title: "Ready to certify your team?",
    description:
      "Talk to us and we'll design a certification pathway that fits your schedule and headcount.",
    primaryCtaLabel: "Get a Free Consultation",
  },
};

const cohortLearningContent = {
  metadata: {
    title: "Cohort Learning — MedTech Business",
    description: "Team-based, trainer-led learning programmes that drive completion rates to 94%+.",
  },
  hero: {
    badge: "Cohort Learning",
    titleLeading: "Grow Your Leaders with",
    titleHighlight: "Guided, Team-Based Learning",
    description:
      "Cohort programmes keep teams accountable, build peer support networks, and deliver 30% higher completion rates than solo self-paced courses.",
    primaryCtaLabel: "Build My Cohort",
    secondaryCtaLabel: "View Plans",
  },
  stats: [
    { id: "completion-rate", value: "94%", label: "Average completion rate" },
    { id: "cohort-size", value: "10–100", label: "Cohort size range" },
    { id: "duration", value: "8 wk", label: "Typical cohort duration" },
    { id: "retention", value: "30%", label: "Higher retention vs self-paced" },
  ],
  cohortTypesSection: {
    label: "Programme Types",
    title: "A cohort for every stage of your team's growth",
    items: [
      {
        id: "new-hire-onboarding",
        title: "New Hire Onboarding",
        description:
          "Get new coders and billers productive faster with a structured 4-week onboarding cohort customised to your workflows and EHR system.",
        duration: "4 weeks",
        size: "10–30 seats",
      },
      {
        id: "department-upskilling",
        title: "Department Upskilling",
        description:
          "Upskill an existing team in a new specialty, payer, or regulatory area. Cohorts run alongside day jobs with minimal schedule disruption.",
        duration: "6–8 weeks",
        size: "20–60 seats",
      },
      {
        id: "certification-bootcamp",
        title: "Certification Bootcamp",
        description:
          "An intensive cohort-based CPC/CRC/CCS prep programme with mock exams and live doubt sessions for teams targeting AAPC/AHIMA credentials.",
        duration: "12 weeks",
        size: "15–50 seats",
      },
      {
        id: "leadership-academy",
        title: "Leadership Academy",
        description:
          "Grow your HIM directors, compliance leads, and coding supervisors with a guided self-paced management programme.",
        duration: "10 weeks",
        size: "Groups of 25+",
      },
    ],
  },
  benefitsSection: {
    label: "Why Cohort Learning?",
    title: "Learning is better together",
    description:
      "When your team learns together, they stay accountable, share domain knowledge, and build relationships that improve collaboration long after the course ends.",
    items: [
      "Shared schedule keeps teams accountable and on track",
      "Cohort sizes of 10–100 with one dedicated trainer",
      "Live group sessions, peer discussions, and team assignments",
      "Completion rates 30% higher than self-paced learning",
      "Ideal for onboarding batches, department upskilling, and new hire programmes",
      "Progress visible to L&D managers in real time",
    ],
    featureCards: [
      {
        id: "structured-schedule",
        icon: "calendar",
        title: "Structured Schedule",
        description: "Fixed weekly sessions and milestones keep the entire cohort in sync.",
      },
      {
        id: "peer-interaction",
        icon: "message-square",
        title: "Peer Interaction",
        description: "Discussion boards and group assignments build deep domain understanding.",
      },
      {
        id: "group-analytics",
        icon: "bar-chart-3",
        title: "Group Analytics",
        description: "See how every individual and the cohort as a whole is progressing.",
      },
    ],
  },
  testimonialSection: {
    quote:
      '"The cohort model meant our team learned together and supported each other. Completion rates went from 60% to 94%."',
    name: "Sneha Menon",
    role: "L&D Manager, Manipal Health",
  },
  ctaSection: {
    title: "Build your team's cohort today",
    description: "Tell us your goals, team size, and timeline — we'll design the perfect cohort.",
    primaryCtaLabel: "Contact Our Team",
  },
};

const professionalServicesContent = {
  metadata: {
    title: "Professional Services — MedTech Business",
    description: "Custom curriculum design, consulting, and implementation support for healthcare organisations.",
  },
  hero: {
    badge: "Professional Services",
    titleLeading: "Get the Expertise You Need to",
    titleHighlight: "Achieve Goals Faster",
    description:
      "Our professional services team provides strategic consulting, custom curriculum design, and implementation support so your learning programme delivers measurable results.",
    primaryCtaLabel: "Talk to Our Consultants",
  },
  stats: [
    { id: "organisations", value: "500+", label: "Organisations Served" },
    { id: "satisfaction", value: "96%", label: "Client Satisfaction Score" },
    { id: "onboarding-time", value: "6 wk", label: "Average Onboarding Time" },
    { id: "setup-fees", value: "₹0", label: "Hidden Setup Fees" },
  ],
  servicesSection: {
    label: "What We Offer",
    title: "End-to-end support for your learning programme",
    items: [
      {
        id: "custom-curriculum-design",
        icon: "clipboard-list",
        title: "Custom Curriculum Design",
        description:
          "Our instructional designers work with your HIM and L&D teams to map course content to your specific speciality, payer mix, and workflow — not a generic template.",
      },
      {
        id: "learning-strategy-consulting",
        icon: "lightbulb",
        title: "Learning Strategy Consulting",
        description:
          "A dedicated learning consultant reviews your current training programmes, identifies gaps, and builds a multi-quarter roadmap aligned to your business goals.",
      },
      {
        id: "implementation-support",
        icon: "headphones",
        title: "Implementation Support",
        description:
          "Hands-on onboarding, LMS configuration, SCORM/xAPI integration, and SSO setup — all managed by our technical services team so your HR team doesn't have to.",
      },
      {
        id: "programme-management",
        icon: "refresh-cw",
        title: "Ongoing Programme Management",
        description:
          "Quarterly business reviews, content refresh cycles, and proactive learner engagement campaigns to keep completion rates high year-round.",
      },
    ],
  },
  deliverablesSection: {
    label: "What You'll Receive",
    title: "Concrete, tangible deliverables",
    items: [
      "Needs analysis and skills-gap assessment report",
      "Custom course curriculum and lesson outlines",
      "Branded learner portal with your organisation's logo and colours",
      "SCORM/xAPI content packages for your LMS",
      "Trainer guides, facilitator notes, and assessment banks",
      "Quarterly ROI and performance reports",
    ],
  },
  processSection: {
    title: "Our Process",
    description: "From first call to fully deployed learning programme in 6 weeks.",
    items: [
      {
        id: "discovery-call",
        step: "01",
        title: "Discovery Call",
        description:
          "We understand your organisation, team, goals, and current training gaps.",
      },
      {
        id: "needs-assessment",
        step: "02",
        title: "Needs Assessment",
        description:
          "Formal gap analysis and a learning strategy document delivered within 1 week.",
      },
      {
        id: "curriculum-build",
        step: "03",
        title: "Curriculum Build",
        description:
          "Custom content, assessments, and supporting materials developed by our team.",
      },
      {
        id: "launch-support",
        step: "04",
        title: "Launch & Support",
        description:
          "Platform setup, trainer briefing, and quarterly check-ins to track ROI.",
      },
    ],
  },
  ctaSection: {
    title: "Let's design your learning programme",
    description:
      "Book a free discovery call and our consultants will map out a custom plan for your organisation.",
    primaryCtaLabel: "Book a Discovery Call",
  },
};

export function getOnDemandLearningContent(locale) {
  return localizeContent(onDemandLearningContent, locale);
}

export function getCertificationPrepContent(locale) {
  return localizeContent(certificationPrepContent, locale);
}

export function getCohortLearningContent(locale) {
  return localizeContent(cohortLearningContent, locale);
}

export function getProfessionalServicesContent(locale) {
  return localizeContent(professionalServicesContent, locale);
}