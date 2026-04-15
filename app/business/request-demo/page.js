"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Check, Building2, Users, Globe, BarChart3,
  Puzzle, ArrowRight, Phone, Mail, ChevronLeft,
} from "lucide-react";

const benefits = [
  { icon: Building2, text: "Train your entire workforce with 14,000+ certified healthcare courses" },
  { icon: Check,     text: "Prep employees for 200+ industry-recognised certification exams (CPC, CRC, CCS, RHIT & more)" },
  { icon: Users,     text: "Develop skilled coding & billing teams with hands-on practice environments" },
  { icon: BarChart3, text: "Identify skills gaps, learning trends, and team performance benchmarks" },
  { icon: Puzzle,    text: "Integrate seamlessly with your existing LMS, HRIS, and HR systems" },
  { icon: Globe,     text: "Deliver training in 16 languages across multi-branch or remote teams" },
];

const companySizes = [
  "1–10 employees",
  "11–50 employees",
  "51–200 employees",
  "201–500 employees",
  "501–1,000 employees",
  "1,001–5,000 employees",
  "5,001+ employees",
];

const learnersOptions = [
  "2–10",
  "11–25",
  "26–50",
  "51–100",
  "101–500",
  "500+",
];

const jobLevels = [
  "Individual Contributor",
  "Manager",
  "Director",
  "VP / Head of Department",
  "C-Suite / Executive",
  "Owner / Founder",
];

const trustedBy = [
  "Apollo Hospitals",
  "Fortis Healthcare",
  "Manipal Health",
  "Max Healthcare",
  "Narayana Health",
  "Aster DM Healthcare",
];

export default function RequestDemoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    location: "", company: "", companySize: "",
    learners: "", jobTitle: "", jobLevel: "", needs: "",
  });

  const set = (field) => (e) => setForm((p) => ({ ...p, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputCls = "w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-800 outline-none transition focus:border-purple-400 focus:ring-2 focus:ring-purple-100 placeholder:text-gray-400";
  const labelCls = "mb-1 block text-xs font-semibold text-gray-700";

  return (
    <div className="min-h-screen bg-gray-50">

      {/* ── Hero band ── */}
      <section className="relative overflow-hidden bg-linear-to-br from-[#0d0422] via-[#1a0535] to-[#0f172a] py-14 text-white">
        <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-purple-700/20 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="page-container relative">
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-1.5 rounded-lg border border-purple-400/30 bg-white/5 px-3 py-1.5 text-xs font-semibold text-purple-200 transition hover:bg-white/10 hover:text-white"
          >
            <ChevronLeft size={14} />
            Back to MedTech Career
          </Link>
          <div className="flex flex-col items-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-orange-400">
            Free Demo
          </p>
          <h1 className="text-4xl font-extrabold leading-tight sm:text-4xl">
            Get your <span className="text-orange-400">personalised demo</span>
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-purple-100/80">
            Tell us your needs and we'll build a custom plan to drive results for your healthcare team.
          </p>
          </div>
        </div>
      </section>

      {/* ── Main content ── */}
      <section className="page-container py-16">
        <div className="grid gap-12 lg:grid-cols-2">

          {/* ── Left: benefits + trusted ── */}
          <div>
            <h2 className="text-xl font-extrabold text-gray-900">
              With MedTech Business as your learning partner, you can:
            </h2>

            <ul className="mt-8 flex flex-col gap-5">
              {benefits.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-700">
                    <Icon size={17} />
                  </span>
                  <p className="text-sm leading-relaxed text-gray-600">{text}</p>
                </li>
              ))}
            </ul>

            {/* Trusted by */}
            <div className="mt-12">
              <p className="mb-5 text-xs font-bold uppercase tracking-widest text-gray-400">Trusted by India&apos;s leading healthcare organisations</p>
              <div className="grid grid-cols-3 gap-3">
                {trustedBy.map((name) => (
                  <div
                    key={name}
                    className="flex items-center justify-center rounded-xl border border-gray-100 bg-white px-3 py-3 text-center text-xs font-semibold text-gray-500 shadow-sm"
                  >
                    {name}
                  </div>
                ))}
              </div>
            </div>

            {/* Social proof */}
            <div className="mt-8 flex flex-wrap gap-6">
              {[
                { stat: "500+",   label: "Healthcare clients" },
                { stat: "12,000+",label: "Staff upskilled" },
                { stat: "95%",    label: "Certification pass rate" },
              ].map(({ stat, label }) => (
                <div key={label} className="text-center">
                  <p className="text-2xl font-extrabold text-purple-700">{stat}</p>
                  <p className="text-xs text-gray-500">{label}</p>
                </div>
              ))}
            </div>

            {/* Contact details */}
            <div className="mt-8 flex flex-col gap-3 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-purple-600">Prefer to talk?</p>
              <a href="tel:+919876543210" className="flex items-center gap-3 text-sm text-gray-600 transition hover:text-purple-700">
                <Phone size={15} className="text-purple-500" /> +91 98765 43210
              </a>
              <a href="mailto:business@medtechcareer.com" className="flex items-center gap-3 text-sm text-gray-600 transition hover:text-purple-700">
                <Mail size={15} className="text-purple-500" /> business@medtechcareer.com
              </a>
            </div>
          </div>

          {/* ── Right: form ── */}
          <div>
            {submitted ? (
              <div className="flex h-full min-h-80 flex-col items-center justify-center rounded-2xl border border-purple-200 bg-purple-50 p-10 text-center shadow-sm">
                <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-purple-700 text-white">
                  <Check size={26} />
                </span>
                <h2 className="text-xl font-extrabold text-gray-900">Thank you!</h2>
                <p className="mt-3 text-sm text-gray-500">
                  We've received your request. A MedTech Business specialist will contact you within 1 business day.
                </p>
                <Link
                  href="/business"
                  className="mt-7 inline-flex items-center gap-2 rounded-xl bg-purple-700 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-purple-800"
                >
                  Explore Platform <ArrowRight size={14} />
                </Link>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-gray-100 bg-white p-8 shadow-md"
              >
                <h3 className="mb-6 text-lg font-bold text-gray-900">Tell us about your organisation</h3>

                {/* Name row */}
                <div className="mb-4 grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>First Name *</label>
                    <input required className={inputCls} placeholder="Arjun" value={form.firstName} onChange={set("firstName")} />
                  </div>
                  <div>
                    <label className={labelCls}>Last Name *</label>
                    <input required className={inputCls} placeholder="Sharma" value={form.lastName} onChange={set("lastName")} />
                  </div>
                </div>

                {/* Email + Phone */}
                <div className="mb-4 grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>Work Email *</label>
                    <input required type="email" className={inputCls} placeholder="arjun@hospital.com" value={form.email} onChange={set("email")} />
                  </div>
                  <div>
                    <label className={labelCls}>Phone Number *</label>
                    <input required type="tel" className={inputCls} placeholder="+91 98765 43210" value={form.phone} onChange={set("phone")} />
                  </div>
                </div>

                {/* Location */}
                <div className="mb-4">
                  <label className={labelCls}>Where are you located? *</label>
                  <input required className={inputCls} placeholder="e.g. Bengaluru, Karnataka" value={form.location} onChange={set("location")} />
                </div>

                {/* Company */}
                <div className="mb-4">
                  <label className={labelCls}>Company / Organisation Name *</label>
                  <input required className={inputCls} placeholder="Apollo Hospitals" value={form.company} onChange={set("company")} />
                </div>

                {/* Company size + Learners */}
                <div className="mb-4 grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>Company Size *</label>
                    <select required className={inputCls} value={form.companySize} onChange={set("companySize")}>
                      <option value="">Select…</option>
                      {companySizes.map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className={labelCls}>Number of people to train *</label>
                    <select required className={inputCls} value={form.learners} onChange={set("learners")}>
                      <option value="">Select…</option>
                      {learnersOptions.map((o) => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                </div>

                {/* Job title + level */}
                <div className="mb-4 grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>Job Title *</label>
                    <input required className={inputCls} placeholder="HIM Director" value={form.jobTitle} onChange={set("jobTitle")} />
                  </div>
                  <div>
                    <label className={labelCls}>Job Level *</label>
                    <select required className={inputCls} value={form.jobLevel} onChange={set("jobLevel")}>
                      <option value="">Select…</option>
                      {jobLevels.map((l) => <option key={l}>{l}</option>)}
                    </select>
                  </div>
                </div>

                {/* Training needs */}
                <div className="mb-6">
                  <label className={labelCls}>What are your organisation's training needs?</label>
                  <textarea
                    rows={3}
                    className={`${inputCls} resize-none`}
                    placeholder="e.g. CPC certification for 20 coders, ICD-10 refresher, HIPAA compliance..."
                    value={form.needs}
                    onChange={set("needs")}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-purple-700 py-3 text-sm font-semibold text-white shadow-sm shadow-purple-200 transition hover:bg-purple-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2"
                >
                  Submit Request
                </button>

                <p className="mt-4 text-center text-xs leading-relaxed text-gray-400">
                  By submitting, you agree to our{" "}
                  <Link href="/business/contact" className="text-purple-600 hover:underline">Terms of Use</Link>{" "}
                  and{" "}
                  <Link href="/business/contact" className="text-purple-600 hover:underline">Privacy Policy</Link>.
                  We may contact you about MedTech Business services.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
