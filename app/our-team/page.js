import AnimateOnScroll from "@/components/AnimateOnScroll";
import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";
import { Linkedin, Mail } from "lucide-react";

export const metadata = {
  title: "Our Team — Medtech Career",
};

const management = [
  {
    name: "Dr. Kavitha Rajan",
    role: "Founder & Director",
    avatar: "KR",
    bg: "from-purple-700 to-purple-900",
    bio: "20+ years in healthcare education. AAPC CPC-certified with deep experience in US healthcare BPO management and curriculum design.",
  },
  {
    name: "Mr. Senthil Kumar",
    role: "Head of Training & Operations",
    avatar: "SK",
    bg: "from-orange-500 to-orange-700",
    bio: "Former Senior Medical Coder at a leading MNC. Oversees all training programmes and quality assurance across branches.",
  },
  {
    name: "Dr. Meena Iyer",
    role: "Lead Faculty — Medical Coding",
    avatar: "MI",
    bg: "from-purple-600 to-purple-800",
    bio: "CPC-certified trainer with 12 years of experience. Specialises in ICD-10-CM, CPT-4, and specialty coding for surgery and radiology.",
  },
  {
    name: "Ms. Rekha Venkatesh",
    role: "Lead Faculty — Medical Billing",
    avatar: "RV",
    bg: "from-teal-600 to-teal-800",
    bio: "RCM consultant and certified billing specialist with expertise in AR management, denial resolution, and revenue cycle optimisation.",
  },
];

const branch1Team = [
  { name: "Mr. Arun Prasad",   role: "Branch Manager & Trainer",   avatar: "AP", bg: "bg-purple-700" },
  { name: "Ms. Nithya Devi",   role: "Medical Coding Trainer",      avatar: "ND", bg: "bg-purple-600" },
  { name: "Mr. Rajesh Kumar",  role: "CPC Certification Trainer",   avatar: "RK", bg: "bg-orange-500" },
  { name: "Ms. Geetha Rani",   role: "Student Counsellor",          avatar: "GR", bg: "bg-purple-800" },
];

const branch2Team = [
  { name: "Ms. Lakshmi Priya", role: "Branch Manager & Trainer",   avatar: "LP", bg: "bg-orange-600" },
  { name: "Mr. Murugan S.",    role: "Medical Coding Trainer",      avatar: "MS", bg: "bg-orange-500" },
  { name: "Ms. Sudha Rani",    role: "Billing & RCM Trainer",       avatar: "SR", bg: "bg-purple-700" },
  { name: "Mr. Dinesh Raj",    role: "Placement Coordinator",       avatar: "DR", bg: "bg-teal-700" },
];

const trichyTeam = [
  { name: "Mr. Karthikeyan P.", role: "Branch Manager & Trainer",   avatar: "KP", bg: "bg-teal-700" },
  { name: "Ms. Vanitha Devi",  role: "Medical Coding Trainer",      avatar: "VD", bg: "bg-teal-600" },
  { name: "Mr. Prabhakaran M.", role: "CPC Exam Faculty",           avatar: "PM", bg: "bg-purple-700" },
  { name: "Ms. Deepa Raj",     role: "Student Counsellor",          avatar: "DP", bg: "bg-orange-500" },
];

function TeamCard({ member, showBio = false }) {
  return (
    <div className="group flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-7 text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1.5">
      <div className={`flex h-16 w-16 items-center justify-center rounded-full ${showBio ? `bg-linear-to-br ${member.bg}` : member.bg} text-lg font-bold text-white shadow-md transition-transform group-hover:scale-110`}>
        {member.avatar}
      </div>
      <h3 className="mt-4 text-base font-bold text-gray-900">{member.name}</h3>
      <p className="mt-1 text-xs font-medium text-purple-700">{member.role}</p>
      {showBio && member.bio && (
        <p className="mt-3 text-xs leading-relaxed text-gray-500">{member.bio}</p>
      )}
    </div>
  );
}

export default function OurTeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#faf5ff] pb-16 pt-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle, #7E22CE 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <AnimateOnScroll animation="fade-down">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-purple-700">People</p>
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Our <span className="text-purple-700">Team</span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base text-gray-500">
              Meet the dedicated trainers, managers, and counsellors who power Medtech Career's mission to place thousands of students into rewarding healthcare careers.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Management */}
      <section className="bg-white py-16">
        <div className="page-container">
          <AnimateOnScroll animation="fade-up">
            <SectionHeading
              center
              label="Leadership"
              title="Our Management Team"
              subtitle="The experienced professionals who guide Medtech Career's vision and quality standards."
            />
          </AnimateOnScroll>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {management.map((m, i) => (
              <AnimateOnScroll key={m.name} animation="fade-up" delay={i * 100}>
                <TeamCard member={m} showBio />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Branch Teams */}
      {[
        { label: "Thanjavur Branch 1", team: branch1Team, bg: "bg-[#faf5ff]" },
        { label: "Thanjavur Branch 2", team: branch2Team, bg: "bg-white" },
        { label: "Trichy Branch", team: trichyTeam, bg: "bg-[#faf5ff]" },
      ].map(({ label, team, bg }) => (
        <section key={label} className={`${bg} py-16`}>
          <div className="page-container">
            <AnimateOnScroll animation="fade-up">
              <SectionHeading
                label="Branch Team"
                title={label}
              />
            </AnimateOnScroll>
            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {team.map((m, i) => (
                <AnimateOnScroll key={m.name} animation="fade-up" delay={i * 80}>
                  <TeamCard member={m} />
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Join the team CTA */}
      <section className="bg-gray-900 py-20 text-center text-white">
        <AnimateOnScroll animation="fade-up">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-orange-400">Careers</p>
          <h2 className="text-3xl font-bold sm:text-4xl">Want to Join Our Team?</h2>
          <p className="mx-auto mt-4 max-w-lg text-gray-300 text-sm">
            We are always looking for passionate healthcare educators who want to make a difference. Apply to join Medtech Career as a trainer or counsellor.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/join-as-teacher"
              className="rounded-lg bg-orange-500 px-8 py-3.5 text-sm font-semibold transition hover:bg-orange-600"
            >
              Apply as a Teacher
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-white/30 px-8 py-3.5 text-sm font-semibold transition hover:bg-white/10"
            >
              Get in Touch
            </Link>
          </div>
        </AnimateOnScroll>
      </section>
    </>
  );
}
