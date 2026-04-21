import { localizeContent } from "@/lib/i18n/content";

const ourTeamPageContent = {
  metadata: {
    title: "Our Team — Medtech Career",
  },
  hero: {
    label: "People",
    titleLeading: "Our",
    titleHighlight: "Team",
    description:
      "Meet the dedicated trainers, managers, and counsellors who power Medtech Career's mission to place thousands of students into rewarding healthcare careers.",
  },
  managementSection: {
    label: "Leadership",
    title: "Our Management Team",
    subtitle:
      "The experienced professionals who guide Medtech Career's vision and quality standards.",
    members: [
      {
        id: "kavitha-rajan",
        name: "Dr. Kavitha Rajan",
        role: "Founder & Director",
        avatar: "KR",
        bg: "from-purple-700 to-purple-900",
        bio:
          "20+ years in healthcare education. AAPC CPC-certified with deep experience in US healthcare BPO management and curriculum design.",
      },
      {
        id: "senthil-kumar",
        name: "Mr. Senthil Kumar",
        role: "Head of Training & Operations",
        avatar: "SK",
        bg: "from-orange-500 to-orange-700",
        bio:
          "Former Senior Medical Coder at a leading MNC. Oversees all training programmes and quality assurance across branches.",
      },
      {
        id: "meena-iyer",
        name: "Dr. Meena Iyer",
        role: "Lead Faculty — Medical Coding",
        avatar: "MI",
        bg: "from-purple-600 to-purple-800",
        bio:
          "CPC-certified trainer with 12 years of experience. Specialises in ICD-10-CM, CPT-4, and specialty coding for surgery and radiology.",
      },
      {
        id: "rekha-venkatesh",
        name: "Ms. Rekha Venkatesh",
        role: "Lead Faculty — Medical Billing",
        avatar: "RV",
        bg: "from-teal-600 to-teal-800",
        bio:
          "RCM consultant and certified billing specialist with expertise in AR management, denial resolution, and revenue cycle optimisation.",
      },
    ],
  },
  branchSections: [
    {
      id: "thanjavur-branch-1",
      label: "Branch Team",
      title: "Thanjavur Branch 1",
      bg: "bg-[#faf5ff]",
      members: [
        { id: "arun-prasad", name: "Mr. Arun Prasad", role: "Branch Manager & Trainer", avatar: "AP", bg: "bg-purple-700" },
        { id: "nithya-devi", name: "Ms. Nithya Devi", role: "Medical Coding Trainer", avatar: "ND", bg: "bg-purple-600" },
        { id: "rajesh-kumar", name: "Mr. Rajesh Kumar", role: "CPC Certification Trainer", avatar: "RK", bg: "bg-orange-500" },
        { id: "geetha-rani", name: "Ms. Geetha Rani", role: "Student Counsellor", avatar: "GR", bg: "bg-purple-800" },
      ],
    },
    {
      id: "thanjavur-branch-2",
      label: "Branch Team",
      title: "Thanjavur Branch 2",
      bg: "bg-white",
      members: [
        { id: "lakshmi-priya", name: "Ms. Lakshmi Priya", role: "Branch Manager & Trainer", avatar: "LP", bg: "bg-orange-600" },
        { id: "murugan-s", name: "Mr. Murugan S.", role: "Medical Coding Trainer", avatar: "MS", bg: "bg-orange-500" },
        { id: "sudha-rani", name: "Ms. Sudha Rani", role: "Billing & RCM Trainer", avatar: "SR", bg: "bg-purple-700" },
        { id: "dinesh-raj", name: "Mr. Dinesh Raj", role: "Placement Coordinator", avatar: "DR", bg: "bg-teal-700" },
      ],
    },
    {
      id: "trichy-branch",
      label: "Branch Team",
      title: "Trichy Branch",
      bg: "bg-[#faf5ff]",
      members: [
        { id: "karthikeyan-p", name: "Mr. Karthikeyan P.", role: "Branch Manager & Trainer", avatar: "KP", bg: "bg-teal-700" },
        { id: "vanitha-devi", name: "Ms. Vanitha Devi", role: "Medical Coding Trainer", avatar: "VD", bg: "bg-teal-600" },
        { id: "prabhakaran-m", name: "Mr. Prabhakaran M.", role: "CPC Exam Faculty", avatar: "PM", bg: "bg-purple-700" },
        { id: "deepa-raj", name: "Ms. Deepa Raj", role: "Student Counsellor", avatar: "DP", bg: "bg-orange-500" },
      ],
    },
  ],
  cta: {
    label: "Careers",
    title: "Want to Join Our Team?",
    description:
      "We are always looking for passionate healthcare educators who want to make a difference. Apply to join Medtech Career as a trainer or counsellor.",
    primaryLabel: "Apply as a Teacher",
    secondaryLabel: "Get in Touch",
  },
};

export function getOurTeamPageContent(locale) {
  return localizeContent(ourTeamPageContent, locale);
}