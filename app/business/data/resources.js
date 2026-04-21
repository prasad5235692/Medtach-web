import { localizeContent } from "@/lib/i18n/content";

const caseStudiesContent = {
  metadata: {
    title: "Case Studies — MedTech Business",
    description: "See how healthcare organisations achieved measurable results with MedTech Business.",
  },
  hero: {
    badge: "Case Studies",
    titleLeading: "Real Outcomes from",
    titleHighlight: "Real Healthcare Teams",
    description:
      "See how India's leading hospitals and healthcare organisations used MedTech Business to improve coding accuracy, reduce denials, and certify their teams.",
  },
  sectionTitle: "Case Studies",
  items: [
    {
      id: "apollo-hospitals",
      org: "Apollo Hospitals",
      type: "Multi-city Hospital Group",
      headline: "Coding accuracy improved by 28% in 3 months",
      challenge:
        "Apollo's HIM team struggled with ICD-10-PCS accuracy for complex inpatient procedures, leading to a 15% claim rejection rate from major payers.",
      solution:
        "We deployed a 12-week peer cohort programme for 80 coders across 6 branches, with weekly live sessions and branch-level progress dashboards.",
      results: [
        "28% improvement in coding accuracy",
        "Claim rejection rate dropped from 15% to 6%",
        "94% cohort completion rate",
        "22 coders went on to earn CPC credential",
      ],
      quote: "The structured curriculum is exactly what hospital teams need. Highly recommended.",
      quotee: "Dr. Kavitha R., HIM Director",
      icon: "building-2",
      color: "border-purple-200 bg-purple-50",
    },
    {
      id: "fortis-healthcare",
      org: "Fortis Healthcare",
      type: "Hospital Chain — 12 Units",
      headline: "Billing team confidence transformed in 8 weeks",
      challenge:
        "Fortis's revenue cycle team was losing over ₹40 lakhs per quarter to avoidable denials due to inconsistent billing practices across units.",
      solution:
        "MedTech Business delivered a custom RCM upskilling programme with unit-specific payer rules, denial analytics training, and supervisor coaching.",
      results: [
        "40% reduction in denial write-offs in Q1",
        "RCM team NPS score rose from 52 to 87",
        "Denial management turnaround cut from 18 to 7 days",
        "100% of supervisors completed compliance certification",
      ],
      quote: "Medtech Business gave our billing staff the confidence to handle complex payer requirements.",
      quotee: "Rajan Pillai, Revenue Cycle Head",
      icon: "trending-up",
      color: "border-purple-200 bg-purple-50",
    },
    {
      id: "manipal-health",
      org: "Manipal Health",
      type: "Healthcare Network",
      headline: "Completion rates rose from 60% to 94% with cohort model",
      challenge:
        "Previous self-paced training programmes had chronically low completion rates, with learners abandoning courses within the first two weeks.",
      solution:
        "We redesigned the learning programme as structured 8-week cohorts with peer accountability, bi-weekly live Q&As, and manager progress notifications.",
      results: [
        "Completion rate: 60% → 94%",
        "Time-to-competence cut by 35%",
        "Net certification headcount increased by 3×",
        "L&D cost-per-completion reduced by 22%",
      ],
      quote: "The cohort model meant our team learned together and supported each other.",
      quotee: "Sneha Menon, L&D Manager",
      icon: "award",
      color: "border-emerald-200 bg-emerald-50",
    },
  ],
  labels: {
    challenge: "The Challenge",
    results: "Results",
    solution: "The Solution",
  },
  ctaSection: {
    title: "Your success story starts here",
    description: "Book a call and let us design a programme for your organisation.",
    primaryCtaLabel: "Contact Us",
  },
};

const eventsContent = {
  metadata: {
    title: "Events — MedTech Business",
    description: "Upcoming workshops, live masterclasses, and webinars for healthcare training teams.",
  },
  hero: {
    badge: "Events",
    titleLeading: "Upcoming Workshops &",
    titleHighlight: "Live Masterclasses",
    description:
      "Free and paid events for healthcare coding, billing, and L&D professionals. Learn from industry experts, network with peers, and leave with actionable insights.",
  },
  upcomingSection: {
    title: "Upcoming Events",
    registerLabel: "Register",
    items: [
      {
        id: "ai-assisted-coding-webinar",
        type: "Webinar",
        typeColor: "bg-purple-100 text-purple-700",
        icon: "video",
        date: "May 8, 2026",
        time: "3:00 PM – 4:30 PM IST",
        title: "AI-Assisted Coding: Preparing Your Team for 2026 and Beyond",
        description:
          "Join our Chief Learning Officer and a guest panel of senior coders to explore how AI coding tools are reshaping the profession — and the skills your team needs to stay ahead.",
        seats: "Open — 200 seats remaining",
        location: "Online (Zoom)",
        href: "/business/contact",
      },
      {
        id: "denial-management-workshop",
        type: "Workshop",
        typeColor: "bg-purple-100 text-purple-800",
        icon: "users",
        date: "May 22, 2026",
        time: "10:00 AM – 1:00 PM IST",
        title: "Denial Management Masterclass for Billing Supervisors",
        description:
          "A hands-on 3-hour workshop covering the top 10 denial categories, root-cause analysis workflows, and AR escalation strategies. Participants receive a certificate of completion.",
        seats: "30 seats — 12 remaining",
        location: "Online (Google Meet)",
        href: "/business/contact",
      },
      {
        id: "learning-culture-masterclass",
        type: "Masterclass",
        typeColor: "bg-emerald-100 text-emerald-700",
        icon: "calendar-days",
        date: "June 5, 2026",
        time: "2:00 PM – 3:30 PM IST",
        title: "Building a Learning Culture in Your Healthcare Organisation",
        description:
          "A strategic session for L&D managers and HIM directors. Learn how leading hospital groups moved from ad-hoc training to a systematic upskilling engine — and the measurable outcomes that followed.",
        seats: "Open — 150 seats remaining",
        location: "Online (Teams)",
        href: "/business/contact",
      },
      {
        id: "medtech-business-summit",
        type: "In-Person",
        typeColor: "bg-purple-100 text-purple-700",
        icon: "map-pin",
        date: "June 18, 2026",
        time: "9:00 AM – 5:00 PM IST",
        title: "MedTech Business Summit — Bengaluru",
        description:
          "India's first dedicated healthcare workforce learning summit. Keynotes, roundtables, and networking sessions for HIM professionals, L&D managers, and C-suite healthcare leaders.",
        seats: "200 seats — 48 remaining",
        location: "The Leela Palace, Bengaluru",
        href: "/business/contact",
      },
      {
        id: "cpc-exam-strategy-webinar",
        type: "Webinar",
        typeColor: "bg-purple-100 text-purple-700",
        icon: "video",
        date: "July 3, 2026",
        time: "11:00 AM – 12:00 PM IST",
        title: "CPC Exam Strategy: What AAPC Doesn't Tell You",
        description:
          "Our top-performing instructor and three recent CPC passers share exam-day tactics, time management strategies, and the coding guidelines most candidates overlook.",
        seats: "Open — No limit",
        location: "Online (Zoom)",
        href: "/business/contact",
      },
    ],
  },
  pastSection: {
    title: "Past Events — Recordings Available",
    description: "Contact us to request access to recorded sessions.",
    linkLabel: "Request Recordings",
    items: [
      { id: "skills-gaps-webinar", title: "From Skills Gaps to Strategic Wins — March 2026", type: "Webinar" },
      { id: "icd10-updates-masterclass", title: "ICD-10 Updates for 2026: What Every Coder Must Know", type: "Masterclass" },
      { id: "denial-trends-workshop", title: "Revenue Cycle Deep Dive — Q4 Denial Trends", type: "Workshop" },
    ],
  },
  ctaSection: {
    title: "Want us to run a private event for your team?",
    description: "We run bespoke workshops and masterclasses for organisations with 20+ participants.",
    primaryCtaLabel: "Enquire About Private Events",
  },
};

const guidesContent = {
  metadata: {
    title: "Guides & Webinars — MedTech Business",
    description: "Free guides, playbooks, and recorded webinars to help your healthcare L&D teams succeed.",
  },
  hero: {
    badge: "Guides & Webinars",
    titleLeading: "Free Resources for",
    titleHighlight: "Healthcare L&D Leaders",
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

export function getCaseStudiesContent(locale) {
  return localizeContent(caseStudiesContent, locale);
}

export function getEventsContent(locale) {
  return localizeContent(eventsContent, locale);
}

export function getGuidesContent(locale) {
  return localizeContent(guidesContent, locale);
}