import AnimateOnScroll from "@/components/AnimateOnScroll";
import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";
import { Briefcase, TrendingUp, Users, Award, Building2, CheckCircle, ArrowRight, BookOpen, MessageSquare, Handshake } from "lucide-react";

export const metadata = {
  title: "Placements — Medtech Career",
};

const stats = [
  { number: "4,000+", label: "Candidates Placed", icon: Users },
  { number: "50+",    label: "Top MNC Partners",   icon: Building2 },
  { number: "95%",    label: "Placement Rate",      icon: TrendingUp },
  { number: "₹3–12L", label: "Avg. Annual Package", icon: Briefcase },
];

const placementSteps = [
  {
    icon: BookOpen,
    step: "01",
    title: "Training",
    desc: "Complete industry-focused medical coding & billing courses — BMCT, AMCT, CPC, CRC, or CDM.",
    color: "bg-purple-700",
    lightColor: "bg-purple-50",
    textColor: "text-purple-700",
  },
  {
    icon: MessageSquare,
    step: "02",
    title: "Mock Interviews",
    desc: "Face realistic interview simulations with certified faculty. Get detailed feedback on technical & HR rounds.",
    color: "bg-orange-500",
    lightColor: "bg-orange-50",
    textColor: "text-orange-600",
  },
  {
    icon: Handshake,
    step: "03",
    title: "Placement",
    desc: "Our placement cell directly connects you to 50+ hiring partners. We support you until you receive your offer letter.",
    color: "bg-teal-600",
    lightColor: "bg-teal-50",
    textColor: "text-teal-700",
  },
];

const companies = [
  "Apollo Hospitals", "HCL Healthcare", "Cognizant Health", "Accenture",
  "Omega Healthcare", "MedRecords India", "Allscripts", "Change Healthcare",
  "Conifer Health", "nThrive", "R1 RCM", "Sutherland Healthcare",
  "WNS Healthcare", "Startek Health", "Firstsource", "Mphasis",
  "Wipro BPS Health", "Gebbs Healthcare", "Infosonics", "Maximus India",
];

const successStories = [
  {
    name: "Ananya Sharma",
    avatar: "AS",
    bg: "bg-purple-700",
    role: "Medical Coder at Apollo Hospitals",
    course: "AMCT + CPC",
    salary: "₹5.2 LPA",
    story: "After completing the AMCT and CPC programmes at Medtech Career, I cleared the CPC exam on my first attempt and joined Apollo within 45 days of course completion. The faculty prepared me beyond textbook knowledge.",
  },
  {
    name: "Karthik Subramanian",
    avatar: "KS",
    bg: "bg-orange-500",
    role: "Senior Coder, Omega Healthcare",
    course: "CPC Certification Training",
    salary: "₹7.4 LPA",
    story: "I had 2 years of coding experience but no certification. The CPC programme's 8 solved papers and timed practice sessions helped me score well and negotiate a senior position.",
  },
  {
    name: "Priya Nair",
    avatar: "PN",
    bg: "bg-teal-700",
    role: "RCM Analyst, Cognizant Health",
    course: "Medical Billing",
    salary: "₹4.8 LPA",
    story: "As a BSc Nursing graduate, I wasn't sure about a coding career. Medtech Career's billing programme not only gave me the skills but also introduced me to my current employer through a placement drive.",
  },
  {
    name: "Deepika Rao",
    avatar: "DR",
    bg: "bg-indigo-700",
    role: "HCC Risk Coder, R1 RCM",
    course: "CRC Programme",
    salary: "₹9.0 LPA",
    story: "Choosing the CRC niche at Medtech Career was the best career decision I made. HCC risk adjustment roles are scarce and well-paid — I was placed at R1 RCM at a package I didn't expect as a fresher.",
  },
];

const process = [
  { step: "01", title: "Resume Building Workshop", desc: "Dedicated sessions on healthcare-specific CV writing, LinkedIn profile optimisation, and professional branding." },
  { step: "02", title: "Mock Interview Rounds", desc: "Realistic interview simulations with faculty and industry professionals. Detailed feedback on technical and HR rounds." },
  { step: "03", title: "Direct Company Referrals", desc: "Placement cell connects qualified students directly to our network of 50+ hiring partners across India." },
  { step: "04", title: "Interview Preparation Support", desc: "Company-specific briefing notes, coding test prep, and last-mile support until offer letter is received." },
];

export default function PlacementsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#faf5ff] pb-20 pt-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle, #7E22CE 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div aria-hidden="true" className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-orange-200/20 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-purple-200/20 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <AnimateOnScroll animation="fade-down">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-purple-700">Career Success</p>
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
              Get Placed in{" "}
              <span className="text-purple-700">Top Companies</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base text-gray-500">
              Medtech Career has placed 4,000+ graduates in top healthcare MNCs &amp; BPOs across India — with a 95% placement rate and packages up to ₹12 LPA.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-lg bg-purple-700 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-200 transition hover:bg-purple-800 hover:-translate-y-0.5"
              >
                Apply for Placement →
              </Link>
              <Link
                href="/courses"
                className="rounded-lg border border-purple-200 bg-white px-8 py-3.5 text-sm font-semibold text-purple-700 transition hover:bg-purple-50"
              >
                Explore Courses
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Placement Journey Steps */}
      <section className="bg-white py-16">
        <div className="page-container">
          <AnimateOnScroll animation="fade-up">
            <SectionHeading
              center
              label="Our Process"
              title="Your Placement Journey"
              subtitle="A clear three-step path from training to your first pay cheque."
            />
          </AnimateOnScroll>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {placementSteps.map((s, i) => {
              const Icon = s.icon;
              return (
                <AnimateOnScroll key={s.step} animation="fade-up" delay={i * 120}>
                  <div className="relative flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${s.color} text-white`}>
                      <Icon size={26} strokeWidth={1.8} />
                    </div>
                    <span className={`mt-4 text-xs font-black uppercase tracking-widest ${s.textColor}`}>Step {s.step}</span>
                    <h3 className="mt-2 text-lg font-bold text-gray-900">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-500">{s.desc}</p>
                    {i < placementSteps.length - 1 && (
                      <ArrowRight size={20} className="absolute -right-3.5 top-1/2 hidden -translate-y-1/2 text-gray-300 sm:block" />
                    )}
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-purple-700 py-14">
        <div className="page-container">
          <div className="grid grid-cols-2 gap-6 text-white sm:grid-cols-4">
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <AnimateOnScroll key={s.label} animation="fade-up" delay={i * 80}>
                  <div className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-6 text-center backdrop-blur-sm">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                      <Icon size={22} />
                    </div>
                    <span className="text-3xl font-black sm:text-4xl">{s.number}</span>
                    <span className="text-sm text-purple-200">{s.label}</span>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hiring Partners */}
      <section className="bg-white py-16">
        <div className="page-container">
          <AnimateOnScroll animation="fade-up">
            <SectionHeading
              center
              label="Hiring Partners"
              title="Companies That Hire Our Graduates"
              subtitle="Our placement network spans the top healthcare BPOs, hospitals, and MNCs in India."
            />
          </AnimateOnScroll>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {companies.map((company, i) => (
              <AnimateOnScroll key={company} animation="fade-up" delay={Math.floor(i / 4) * 80}>
                <div className="rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-sm font-medium text-purple-700 transition hover:bg-purple-100">
                  {company}
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Process */}
      <section className="relative overflow-hidden bg-[#f8fafc] py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#7E22CE 1px, transparent 1px), linear-gradient(to right, #7E22CE 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="page-container relative">
          <AnimateOnScroll animation="fade-up">
            <SectionHeading
              center
              label="Support System"
              title="How Placement Support Works"
              subtitle="We don't just teach — we prepare you entirely for employment, from CV to offer letter."
            />
          </AnimateOnScroll>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {process.map((step, i) => (
              <AnimateOnScroll key={step.step} animation="fade-up" delay={i * 100}>
                <div className="group flex gap-5 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-base font-black text-purple-700 transition-colors group-hover:bg-purple-700 group-hover:text-white">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-900">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-gray-500">{step.desc}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="bg-white py-16">
        <div className="page-container">
          <AnimateOnScroll animation="fade-up">
            <SectionHeading
              center
              label="Alumni Stories"
              title="Success Stories from Our Graduates"
              subtitle="Real students, real careers — hear from those who have already taken the leap."
            />
          </AnimateOnScroll>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {successStories.map((story, i) => (
              <AnimateOnScroll key={story.name} animation="fade-up" delay={i * 100}>
                <div className="group flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <p className="text-sm italic leading-relaxed text-gray-600">
                    &ldquo;{story.story}&rdquo;
                  </p>
                  <div className="mt-auto flex items-center gap-4 border-t border-gray-100 pt-5">
                    <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${story.bg} text-sm font-bold text-white`}>
                      {story.avatar}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-gray-900">{story.name}</p>
                      <p className="text-xs text-gray-400">{story.role}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-semibold text-purple-700">{story.course}</p>
                      <p className="text-xs font-bold text-green-600">{story.salary}</p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="bg-[#faf5ff] py-16">
        <div className="page-container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <AnimateOnScroll animation="fade-right">
              <SectionHeading label="Eligibility" title="Who Can Get Placed?" />
              <ul className="mt-6 flex flex-col gap-3">
                {[
                  "Life Science Graduates (BSc/MSc Nursing, Pharmacy, BMLT, Microbiology, BDS)",
                  "Paramedical & Allied Health graduates",
                  "Any graduate with BMCT / AMCT / CPC certification",
                  "Working professionals seeking career transition",
                  "Freshers willing to complete our training programme",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                    <CheckCircle size={16} className="mt-0.5 shrink-0 text-purple-700" />
                    {item}
                  </li>
                ))}
              </ul>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-left">
              <SectionHeading label="Commitment" title="Our Placement Guarantee" />
              <p className="mt-5 text-sm leading-relaxed text-gray-500">
                Medtech Career offers assured placement support for all students who successfully complete their training programme. Our placement cell actively works with 50+ partner companies with ongoing recruitment needs.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-gray-500">
                All candidates who complete training are placed in leading MNCs and healthcare BPOs across India. Our certificates are recognised and accepted by all healthcare BPOs pan-India.
              </p>
              <Link
                href="/courses"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-purple-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-purple-800"
              >
                Start Your Course →
              </Link>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 py-20 text-center text-white">
        <AnimateOnScroll animation="fade-up">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-orange-400">Your Career Awaits</p>
          <h2 className="text-3xl font-bold sm:text-4xl">Start Training. Get Placed.</h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-gray-300">
            Join thousands of Medtech Career graduates now working at top healthcare companies. Your placement journey begins with enrolling.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="rounded-lg bg-orange-500 px-8 py-3.5 text-sm font-semibold transition hover:bg-orange-600">
              Apply for Placement
            </Link>
            <Link href="/courses" className="rounded-lg border border-white/30 px-8 py-3.5 text-sm font-semibold transition hover:bg-white/10">
              Enrol in a Course
            </Link>
          </div>
        </AnimateOnScroll>
      </section>
    </>
  );
}
