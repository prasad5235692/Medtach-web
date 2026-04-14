import AnimateOnScroll from "@/components/AnimateOnScroll";
import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";
import { BookOpen, Clock, Users, Award, CheckCircle, ChevronRight } from "lucide-react";

export const metadata = {
  title: "Training Programs — Medtech Career",
};

const programs = [
  {
    code: "BMCT",
    name: "Basic Medical Coding Training",
    duration: "1 Month",
    fee: "₹8,000",
    level: "Beginner",
    color: "bg-purple-700",
    lightColor: "bg-purple-50",
    textColor: "text-purple-700",
    borderColor: "border-purple-200",
    description:
      "The ideal starting point for life science graduates and paramedical professionals. Covers Medical Terminology, anatomy basics, and ICD-10 fundamentals.",
    topics: [
      "Medical Terminology & Body Systems",
      "Introduction to ICD-10-CM Coding",
      "Basic CPT-4 Code Structure",
      "Healthcare Documentation Basics",
      "Claim Workflow Overview",
      "Assessment & Evaluation",
    ],
    for: "BSc/MSc Nursing, BMLT, Pharmacy, Microbiology, BDS graduates",
  },
  {
    code: "AMCT",
    name: "Advanced Medical Coding Training",
    duration: "2 Months",
    fee: "₹12,000",
    level: "Intermediate",
    color: "bg-orange-500",
    lightColor: "bg-orange-50",
    textColor: "text-orange-600",
    borderColor: "border-orange-200",
    description:
      "Builds on BMCT with specialty-wise deep-dives into Radiology, Surgery, E/M, Anesthesia, and Pathology coding as used in US healthcare BPOs.",
    topics: [
      "E/M and Office Visit Coding",
      "Radiology & Imaging Codes",
      "Surgical Procedure Coding",
      "Anesthesia Coding Rules",
      "Pathology & Lab Codes",
      "Advanced Case Studies (50+)",
    ],
    for: "BMCT completers, experienced coders seeking specialisation",
  },
  {
    code: "CPC",
    name: "CPC Certification Exam Training",
    duration: "3 Months",
    fee: "₹18,000 + GST",
    level: "Advanced",
    color: "bg-purple-800",
    lightColor: "bg-purple-50",
    textColor: "text-purple-700",
    borderColor: "border-purple-200",
    description:
      "Comprehensive AAPC CPC exam preparation with 8 solved practice papers, timed mock exams, and faculty who are CPC-certified with 10+ years of experience.",
    topics: [
      "AAPC CPC Exam Strategy & Structure",
      "Complete ICD-10-CM & CPT-4 Review",
      "8 Fully Solved CPC Practice Papers",
      "Specialty Module Deep-Dives",
      "Speed & Accuracy Workshops",
      "Final Mock Exam & Performance Review",
    ],
    for: "AMCT completers, working coders targeting AAPC certification",
  },
  {
    code: "CRC",
    name: "Certified Risk Coder",
    duration: "1 Month",
    fee: "₹6,000",
    level: "Specialised",
    color: "bg-teal-700",
    lightColor: "bg-teal-50",
    textColor: "text-teal-700",
    borderColor: "border-teal-200",
    description:
      "Master HCC Risk Adjustment coding for Medicare Advantage programs. One of the highest-valued niches in medical coding with premium salary prospects.",
    topics: [
      "Introduction to Risk Adjustment",
      "HCC Hierarchical Condition Categories",
      "Medicare Advantage Coding Rules",
      "ICD-10 to HCC Mapping",
      "Chart Review Techniques",
      "CRC Exam Preparation",
    ],
    for: "Experienced coders, CPC holders, RCM professionals",
  },
  {
    code: "CDM",
    name: "Clinical Documentation Management",
    duration: "6 Weeks",
    fee: "₹9,500",
    level: "Intermediate–Advanced",
    color: "bg-indigo-700",
    lightColor: "bg-indigo-50",
    textColor: "text-indigo-700",
    borderColor: "border-indigo-200",
    description:
      "Learn clinical documentation improvement (CDI) techniques, physician query writing, DRG optimisation, and compliance fundamentals for healthcare facilities.",
    topics: [
      "CDI Fundamentals & Regulatory Overview",
      "Physician Query Writing Techniques",
      "DRG & Severity of Illness Concepts",
      "EHR Navigation & Documentation Review",
      "Compliance & Audit Frameworks",
      "CDM Role in the Revenue Cycle",
    ],
    for: "Nurses, coders, and health information professionals",
  },
];

const methodology = [
  { title: "Projector-Based Classroom Sessions", desc: "Interactive learning with visual aids, real medical record samples, and live coding demonstrations in our branch centres." },
  { title: "Live Online Classes", desc: "Real-time interactive sessions with doubt clearing, quizzes, and live case discussions — not pre-recorded videos." },
  { title: "Case Study Practice", desc: "Work through hundreds of real-world coding scenarios selected from actual hospital and BPO environments." },
  { title: "Mock Tests & Performance Tracking", desc: "Regular assessments with performance analytics to identify gaps and guide revision before your certification exam." },
];

export default function TrainingPage() {
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
        <div aria-hidden="true" className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-purple-200/20 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <AnimateOnScroll animation="fade-down">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-purple-700">Programmes</p>
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Our <span className="text-purple-700">Training Programs</span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base text-gray-500">
              Medtech Career provides comprehensive, job-oriented Medical Coding and Billing training — covering everything from fundamentals to advanced certification preparation.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Program cards */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateOnScroll animation="fade-up">
            <SectionHeading
              center
              label="Course Catalogue"
              title="Choose Your Training Path"
              subtitle="All programmes are available in classroom (branch) and live online formats."
            />
          </AnimateOnScroll>

          <div className="mt-12 flex flex-col gap-8">
            {programs.map((prog, i) => (
              <AnimateOnScroll key={prog.code} animation="fade-up" delay={i * 80}>
                <div className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-lg">
                  <div className="grid grid-cols-1 lg:grid-cols-3">
                    {/* Left: header */}
                    <div className={`${prog.color} flex flex-col justify-between p-8 text-white`}>
                      <div>
                        <span className="mb-2 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold">
                          {prog.level}
                        </span>
                        <h2 className="mt-2 text-2xl font-black">{prog.code}</h2>
                        <p className="mt-1 text-sm font-medium text-white/80">{prog.name}</p>
                      </div>
                      <div className="mt-6 flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-sm text-white/80">
                          <Clock size={14} /> {prog.duration}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-white/80">
                          <Award size={14} /> {prog.fee}
                        </div>
                      </div>
                    </div>

                    {/* Middle: description + topics */}
                    <div className="flex flex-col gap-4 p-8 lg:col-span-2">
                      <p className="text-sm leading-relaxed text-gray-600">{prog.description}</p>
                      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                        {prog.topics.map((t) => (
                          <div key={t} className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircle size={14} className={`mt-0.5 shrink-0 ${prog.textColor}`} />
                            {t}
                          </div>
                        ))}
                      </div>
                      <div className={`mt-3 flex flex-wrap items-center justify-between gap-4 border-t ${prog.borderColor} pt-4`}>
                        <p className="text-xs text-gray-400">
                          <span className="font-semibold text-gray-600">Best for:</span> {prog.for}
                        </p>
                        <Link
                          href={`/course/${prog.code.toLowerCase()}`}
                          className={`inline-flex items-center gap-1.5 rounded-lg ${prog.color} px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90`}
                        >
                          Enrol Now <ChevronRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="relative overflow-hidden bg-[#f8fafc] py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 opacity-[0.06]"
          style={{ backgroundImage: "radial-gradient(circle, #7E22CE 1px, transparent 1px)", backgroundSize: "20px 20px" }}
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <AnimateOnScroll animation="fade-up">
            <SectionHeading
              center
              label="How We Train"
              title="Our Teaching Methodology"
              subtitle="We combine classroom discipline with the flexibility of live online learning."
            />
          </AnimateOnScroll>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {methodology.map((m, i) => (
              <AnimateOnScroll key={m.title} animation="fade-up" delay={i * 100}>
                <div className="group flex gap-5 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-lg font-black text-purple-700 transition-colors group-hover:bg-purple-700 group-hover:text-white">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-900">{m.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-gray-500">{m.desc}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-purple-700 py-12 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-6 text-center sm:grid-cols-4">
            {[
              { number: "20+", label: "Years of Excellence" },
              { number: "4,000+", label: "Candidates Placed" },
              { number: "50+", label: "Top MNC Partners" },
              { number: "95%", label: "Placement Rate" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-black sm:text-4xl">{s.number}</p>
                <p className="mt-1 text-sm text-purple-200">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 py-20 text-center text-white">
        <AnimateOnScroll animation="fade-up">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-orange-400">Start Learning</p>
          <h2 className="text-3xl font-bold sm:text-4xl">Ready to Begin Your Training?</h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-gray-300">
            Speak to a course counsellor, attend a free demo class, or enrol online. We're here to guide your career.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/courses" className="rounded-lg bg-orange-500 px-8 py-3.5 text-sm font-semibold transition hover:bg-orange-600">
              View All Courses
            </Link>
            <Link href="/contact" className="rounded-lg border border-white/30 px-8 py-3.5 text-sm font-semibold transition hover:bg-white/10">
              Talk to a Counsellor
            </Link>
          </div>
        </AnimateOnScroll>
      </section>
    </>
  );
}
