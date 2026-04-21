import { localizeContent } from "@/lib/i18n/content";

const aiTransformationContent = {
  metadata: {
    title: "AI Transformation — MedTech Business",
    description: "Scale AI fluency across your healthcare organisation with MedTech Business AI programmes.",
  },
  hero: {
    badge: "AI Transformation",
    newLabel: "New",
    titleLeading: "Scale AI Fluency Across",
    titleHighlight: "Your Healthcare Organisation",
    description:
      "Our AI Packages help employees at all levels — from front-line coders to C-suite leaders — understand, communicate about, and implement AI solutions with confidence and ethical awareness.",
    primaryCtaLabel: "Contact Us for AI Upskilling",
    secondaryCtaLabel: "Compare Plans",
  },
  packagesSection: {
    label: "AI Packages",
    title: "From AI foundations to enterprise transformation",
    items: [
      {
        id: "ai-foundations",
        name: "AI Foundations Collection",
        subtitle: "For every employee",
        description:
          "Build org-wide AI literacy fast. 20+ curated courses covering AI basics, generative AI, prompt engineering, and ethical AI use — designed for non-technical healthcare professionals.",
        features: [
          "AI & Machine Learning fundamentals",
          "Generative AI for healthcare workflows",
          "Prompt engineering for medical documentation",
          "Ethical and responsible AI use",
          "AI tools for coders, billers, and compliance teams",
        ],
        color: "border-purple-200 bg-purple-50",
        ctaLabel: "Get Started",
        highlight: false,
      },
      {
        id: "ai-growth",
        name: "AI Growth Collection",
        subtitle: "For technical & specialist teams",
        description:
          "Scale AI and data science expertise across your HIT, analytics, and digital health teams with 200+ specialised courses and role-specific learning paths.",
        features: [
          "Clinical NLP and medical text processing",
          "AI in revenue cycle and coding automation",
          "Predictive analytics for patient outcomes",
          "Healthcare data governance and AI risk",
          "Role-specific learning paths for 10+ healthcare roles",
        ],
        color: "border-white bg-purple-700 text-white",
        ctaLabel: "Talk to Us",
        highlight: true,
      },
    ],
  },
  useCasesSection: {
    label: "Use Cases",
    title: "Where AI transforms healthcare operations",
    items: [
      {
        id: "ai-assisted-coding",
        icon: "book-open",
        title: "AI-Assisted Coding",
        description:
          "Understand how AI coding tools (CAC, NLP engines) work, how to validate their outputs, and how to catch errors that automated systems miss.",
      },
      {
        id: "predictive-denial-management",
        icon: "trending-up",
        title: "Predictive Denial Management",
        description:
          "Use AI insights to identify high-risk claims before submission and reduce denial rates by up to 40%.",
      },
      {
        id: "clinical-documentation-improvement",
        icon: "brain",
        title: "Clinical Documentation Improvement",
        description:
          "Leverage NLP tools to close documentation gaps that drive DRG creep and coding inaccuracies in inpatient settings.",
      },
      {
        id: "workflow-automation",
        icon: "zap",
        title: "Workflow Automation",
        description:
          "Automate eligibility checks, prior auth follow-ups, and remittance posting with AI-powered RPA — and train your team to manage it.",
      },
      {
        id: "ai-compliance-governance",
        icon: "shield",
        title: "AI Compliance & Governance",
        description:
          "Understand the regulatory implications of deploying AI in a HIPAA-regulated environment, including audit trails and bias mitigation.",
      },
      {
        id: "change-management-for-ai",
        icon: "users",
        title: "Change Management for AI",
        description:
          "Equip managers and leadership to lead AI adoption — addressing resistance, redefining roles, and building a culture of innovation.",
      },
    ],
  },
  roadmapSection: {
    label: "The Roadmap",
    title: "Your AI transformation journey",
    items: [
      {
        id: "assess-ai-readiness",
        step: "01",
        title: "Assess AI Readiness",
        description:
          "Baseline diagnostic for your teams to understand current AI literacy levels and identify the highest-impact upskilling areas.",
      },
      {
        id: "select-ai-package",
        step: "02",
        title: "Select Your AI Package",
        description:
          "Choose AI Foundations for broad literacy or AI Growth for deep technical skilling — or combine both for a full transformation programme.",
      },
      {
        id: "deploy-in-cohorts",
        step: "03",
        title: "Deploy in Cohorts",
        description:
          "Launch structured learning cohorts across departments, with live sessions on healthcare-specific AI applications.",
      },
      {
        id: "measure-and-scale",
        step: "04",
        title: "Measure & Scale",
        description:
          "Track AI adoption metrics, measure business impact, and expand the programme org-wide with our analytics platform.",
      },
    ],
  },
  stats: [
    { id: "foundations-courses", value: "50+", label: "AI courses in the Foundations collection" },
    { id: "growth-courses", value: "200+", label: "AI-specialised courses in Growth collection" },
    { id: "learning-paths", value: "10+", label: "Healthcare AI learning paths" },
    { id: "adoption-speed", value: "3×", label: "Faster AI adoption with structured cohorts" },
  ],
  ctaSection: {
    title: "Ready to lead the AI era in healthcare?",
    description: "Let's design an AI upskilling programme that prepares every layer of your organisation.",
    primaryCtaLabel: "Contact Us",
    secondaryCtaLabel: "Explore All Solutions",
  },
};

export function getAiTransformationContent(locale) {
  return localizeContent(aiTransformationContent, locale);
}