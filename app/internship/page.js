"use client";
import { useState } from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";
import { Laptop, Users, Award, TrendingUp, CheckCircle2, CheckCircle } from "lucide-react";

const benefits = [
  {
    Icon: Laptop,
    title: "Hands-on Coding Practice",
    desc: "Work on real patient records and coding scenarios sourced from actual healthcare facilities — not just textbook exercises.",
  },
  {
    Icon: Users,
    title: "Mentorship from Industry Experts",
    desc: "Assigned to a certified senior coder who reviews your work, gives feedback, and guides your professional development.",
  },
  {
    Icon: Award,
    title: "Industry-Recognised Certificate",
    desc: "Receive an Internship Completion Certificate from Medtech Career, recognised by our 50+ placement partners.",
  },
  {
    Icon: TrendingUp,
    title: "Pathway to Full-Time Placement",
    desc: "Top-performing interns are directly referred to our hiring partners for full-time positions upon programme completion.",
  },
];

const eligibility = [
  "Currently enrolled in or completed any Medtech Career training programme (BMCT, AMCT, CPC, CRC, CDM)",
  "Life Science graduates (BSc Nursing, BMLT, Pharmacy, Microbiology, BDS) or paramedical professionals",
  "Any graduate with a keen interest in medical coding, billing, or clinical documentation",
  "Freshers or working professionals seeking practical industry experience",
];

const tracks = [
  {
    name: "Medical Coding Internship",
    duration: "4–8 Weeks",
    mode: "Online / Hybrid",
    skills: ["ICD-10-CM abstraction", "CPT-4 coding", "Specialty coding (Surgery, Radiology)", "Quality check processes"],
    color: "border-purple-200 bg-purple-50",
    badgeColor: "bg-purple-700 text-white",
  },
  {
    name: "Medical Billing Internship",
    duration: "4–6 Weeks",
    mode: "Online / Hybrid",
    skills: ["Claim submission workflows", "Denial management", "AR follow-up", "Insurance portal navigation"],
    color: "border-orange-200 bg-orange-50",
    badgeColor: "bg-orange-500 text-white",
  },
  {
    name: "Clinical Documentation Internship",
    duration: "6 Weeks",
    mode: "Online",
    skills: ["CDI query writing", "DRG review", "Documentation audit", "EHR navigation"],
    color: "border-teal-200 bg-teal-50",
    badgeColor: "bg-teal-700 text-white",
  },
];

export default function InternshipPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", qualification: "", course: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

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
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-purple-700">Internship</p>
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Gain Real-World <span className="text-purple-700">Industry Experience</span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base text-gray-500">
              Medtech Career's internship programme bridges the gap between classroom training and your first job. Get practical coding experience, mentorship, and a direct pathway to placement.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-16">
        <div className="page-container">
          <AnimateOnScroll animation="fade-up">
            <SectionHeading
              center
              label="What You Gain"
              title="Internship Benefits"
              subtitle="Our internship is designed to make you industry-ready from day one of employment."
            />
          </AnimateOnScroll>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, i) => (
              <AnimateOnScroll key={b.title} animation="fade-up" delay={i * 100}>
                <div className="group flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1.5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-purple-700 transition-colors group-hover:bg-purple-700 group-hover:text-white">
                    <b.Icon size={22} strokeWidth={1.8} />
                  </div>
                  <h3 className="text-sm font-bold text-gray-900">{b.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-500">{b.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Tracks */}
      <section className="bg-[#f8fafc] py-16">
        <div className="page-container">
          <AnimateOnScroll animation="fade-up">
            <SectionHeading
              center
              label="Internship Tracks"
              title="Choose Your Specialisation"
              subtitle="Apply for the internship track that aligns with your training and career goals."
            />
          </AnimateOnScroll>
          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {tracks.map((track, i) => (
              <AnimateOnScroll key={track.name} animation="fade-up" delay={i * 120}>
                <div className={`flex flex-col gap-5 rounded-2xl border-2 ${track.color} p-7 transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}>
                  <span className={`inline-block self-start rounded-full px-3 py-1 text-xs font-semibold ${track.badgeColor}`}>
                    {track.duration} · {track.mode}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900">{track.name}</h3>
                  <ul className="flex flex-col gap-2">
                    {track.skills.map((skill) => (
                      <li key={skill} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle size={14} className="shrink-0 text-purple-700" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility + Form */}
      <section className="bg-white py-16">
        <div className="page-container grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Eligibility */}
          <AnimateOnScroll animation="fade-right">
            <SectionHeading label="Who Can Apply" title="Eligibility Criteria" />
            <ul className="mt-6 flex flex-col gap-4">
              {eligibility.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-gray-600">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple-700 text-[10px] text-white">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-2xl border border-purple-200 bg-purple-50 p-6">
              <p className="text-sm font-semibold text-purple-700">Programme Duration</p>
              <p className="mt-1 text-sm text-gray-600">4 to 8 weeks depending on selected track. Available in online and hybrid (classroom + online) modes.</p>
              <p className="mt-4 text-sm font-semibold text-purple-700">Stipend</p>
              <p className="mt-1 text-sm text-gray-600">Performance-based stipend available for top-ranking interns who complete assessments with distinction.</p>
            </div>
          </AnimateOnScroll>

          {/* Application Form */}
          <AnimateOnScroll animation="fade-left">
            <SectionHeading label="Apply Now" title="Internship Application" />
            {sent ? (
              <div className="mt-6 flex flex-col items-center rounded-2xl border border-green-200 bg-green-50 p-10 text-center shadow-sm">
                <CheckCircle2 size={52} className="text-green-500" strokeWidth={1.5} />
                <h3 className="mt-4 text-xl font-bold text-gray-900">Application Submitted!</h3>
                <p className="mt-2 text-sm text-gray-500">
                  Thank you for applying. Our team will contact you within 2 business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-gray-400">Full Name *</label>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full rounded-lg border border-gray-200 bg-[#f8fafc] px-4 py-2.5 text-sm text-gray-900 outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-gray-400">Email *</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full rounded-lg border border-gray-200 bg-[#f8fafc] px-4 py-2.5 text-sm text-gray-900 outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100"
                      placeholder="you@email.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-gray-400">Phone *</label>
                    <input
                      required
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full rounded-lg border border-gray-200 bg-[#f8fafc] px-4 py-2.5 text-sm text-gray-900 outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-gray-400">Qualification *</label>
                    <input
                      required
                      type="text"
                      value={form.qualification}
                      onChange={(e) => setForm({ ...form, qualification: e.target.value })}
                      className="w-full rounded-lg border border-gray-200 bg-[#f8fafc] px-4 py-2.5 text-sm text-gray-900 outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100"
                      placeholder="BSc Nursing, Pharmacy, etc."
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-gray-400">Internship Track *</label>
                  <select
                    required
                    value={form.course}
                    onChange={(e) => setForm({ ...form, course: e.target.value })}
                    className="w-full rounded-lg border border-gray-200 bg-[#f8fafc] px-4 py-2.5 text-sm text-gray-900 outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100"
                  >
                    <option value="">Select a track</option>
                    <option>Medical Coding Internship</option>
                    <option>Medical Billing Internship</option>
                    <option>Clinical Documentation Internship</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-gray-400">Why do you want this internship?</label>
                  <textarea
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full rounded-lg border border-gray-200 bg-[#f8fafc] px-4 py-2.5 text-sm text-gray-900 outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100"
                    placeholder="Brief introduction and your motivation..."
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-lg bg-purple-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-purple-800"
                >
                  Submit Application →
                </button>
              </form>
            )}
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 py-20 text-center text-white">
        <AnimateOnScroll animation="fade-up">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-orange-400">Take the First Step</p>
          <h2 className="text-3xl font-bold sm:text-4xl">Learn. Intern. Get Placed.</h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-gray-300">
            Complete a Medtech Career course, intern with real coding cases, and join the ranks of 4,000+ successfully placed professionals.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/courses" className="rounded-lg bg-orange-500 px-8 py-3.5 text-sm font-semibold transition hover:bg-orange-600">
              Explore Courses First
            </Link>
            <Link href="/contact" className="rounded-lg border border-white/30 px-8 py-3.5 text-sm font-semibold transition hover:bg-white/10">
              Ask a Question
            </Link>
          </div>
        </AnimateOnScroll>
      </section>
    </>
  );
}
