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
        id: "nithyanantham",
        name: "Nithyanantham",
        role: "Managing Director",
        avatar: "N",
        bg: "from-purple-700 to-purple-900",
        bio:
          "20+ years in healthcare education. AAPC CPC-certified with deep experience in US healthcare BPO management and curriculum design.",
      },
      {
        id: "jenni-bowlin-a",
        name: "Jenni Bowlin A",
        role: "Branch Head",
        avatar: "JB",
        bg: "from-orange-500 to-orange-700",
        bio:
          "Former Senior Medical Coder at a leading MNC. Oversees all training programmes and quality assurance across branches.",
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
        { id: "b-swathini", name: "B. Swathini", role: "Meta Ads Specialist", avatar: "BS", bg: "bg-purple-700" },
        { id: "k-geshitha", name: "K. Geshitha", role: "Admin cum Telecaller", avatar: "KG", bg: "bg-purple-600" },
        { id: "r-nivedha", name: "R. Nivedha", role: "Graphic designer & video editor", avatar: "RN", bg: "bg-orange-500" },
      ],
    },
    {
      id: "thanjavur-branch-2",
      label: "Branch Team",
      title: "Thanjavur Branch 2",
      bg: "bg-white",
      members: [
        { id: "c-s-harini", name: "C.S. Harini", role: "Medical Coding Trainer", avatar: "CH", bg: "bg-orange-600" },
        { id: "m-asmi", name: "M. Asmi", role: "Medical Coding Trainer", avatar: "MA", bg: "bg-orange-500" },
        { id: "r-kiruba", name: "R. Kiruba", role: "Medical Coding Trainer", avatar: "RK", bg: "bg-purple-700" },
        { id: "k-varsha", name: "K. Varsha", role: "Medical Coding Trainer", avatar: "KV", bg: "bg-teal-700" },
        { id: "aarthi", name: "Aarthi", role: "Medical Coding Trainer", avatar: "AA", bg: "bg-purple-600" },
      ],
    },
    {
      id: "trichy-branch",
      label: "Branch Team",
      title: "Trichy Branch",
      bg: "bg-[#faf5ff]",
      members: [
        { id: "dheena", name: "Dheena", role: "Branch Coordinator and Admin", avatar: "DH", bg: "bg-teal-700" },
        { id: "kowshika", name: "Kowshika", role: "Medical Coding Trainer", avatar: "KO", bg: "bg-teal-600" },
        { id: "anitha", name: "Anitha", role: "Medical Coding Trainer", avatar: "AN", bg: "bg-purple-700" },
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