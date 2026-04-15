"use client";
import { useState } from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import SectionHeading from "@/components/SectionHeading";
import { DollarSign, Globe, TrendingUp, Users2, CheckCircle2 } from "lucide-react";

const subjects = [
  "Medical Coding",
  "Medical Billing",
  "CBSE / ICSE / IB",
  "JEE / KCET Maths",
  "NEET Biology",
  "NEET Chemistry",
  "NEET Physics",
  "Other",
];

const perks = [
  { Icon: DollarSign,  title: "Competitive Pay",       desc: "Monthly stipends and per-session rates that match industry standards." },
  { Icon: Globe,       title: "Teach from Anywhere",   desc: "Fully remote. All you need is a stable connection and the will to teach." },
  { Icon: TrendingUp,  title: "Grow with Us",          desc: "Access to pedagogy workshops, curriculum design, and leadership tracks." },
  { Icon: Users2,      title: "Supportive Community",  desc: "Join a network of 80+ educators who collaborate and share resources." },
];

export default function JoinAsTeacherPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", experience: "", about: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#faf5ff] pb-16 pt-36">
        {/* Geometric dot pattern */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 h-64 w-64 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle, #7E22CE 1.5px, transparent 1.5px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-purple-700">Careers</p>
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Join as a <span className="text-purple-700">Teacher</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-gray-500">
            Share your expertise, change lives, and build a rewarding teaching career
            with Medtech Career&apos;s fast-growing online platform.
          </p>
        </div>
      </section>

      {/* Perks */}
      <section className="relative overflow-hidden bg-white py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#7E22CE 1px, transparent 1px), linear-gradient(to right, #7E22CE 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="page-container relative">
          <AnimateOnScroll animation="fade-up">
            <SectionHeading center label="Benefits" title="Why Teach with Us?" />
          </AnimateOnScroll>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {perks.map((p, i) => (
              <AnimateOnScroll key={p.title} animation="fade-up" delay={i * 100}>
                <div className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1.5">
                  <div aria-hidden="true" className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-purple-50/60 transition-transform duration-500 group-hover:scale-150" />
                  <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50 text-purple-700 transition-colors group-hover:bg-purple-700 group-hover:text-white">
                    <p.Icon size={20} strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-4 font-bold text-gray-900">{p.title}</h3>
                  <p className="mt-2 text-sm text-gray-500">{p.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Application form */}
      <section className="bg-[#f8fafc] py-16">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeading label="Apply" title="Tell Us About Yourself" />

          {sent ? (
            <div className="mt-10 flex flex-col items-center rounded-2xl border border-green-200 bg-green-50 p-10 text-center shadow-sm">
              <CheckCircle2 size={52} className="text-green-500" strokeWidth={1.5} />
              <h3 className="mt-4 text-xl font-bold text-gray-900">Application Received!</h3>
              <p className="mt-2 text-sm text-gray-500">
                We&apos;ll review your application and reach out within 3–5 business days.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-5 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {[
                  { id: "name",       label: "Full Name",           type: "text",   placeholder: "Your name" },
                  { id: "email",      label: "Email",               type: "email",  placeholder: "you@example.com" },
                  { id: "phone",      label: "Phone",               type: "tel",    placeholder: "+91 00000 00000" },
                  { id: "experience", label: "Years of Experience",  type: "number", placeholder: "e.g. 5" },
                ].map((f) => (
                  <div key={f.id} className="flex flex-col gap-1.5">
                    <label htmlFor={f.id} className="text-xs font-medium text-gray-500">{f.label}</label>
                    <input
                      id={f.id}
                      type={f.type}
                      required
                      min={f.type === "number" ? 0 : undefined}
                      placeholder={f.placeholder}
                      value={form[f.id]}
                      onChange={(e) => setForm({ ...form, [f.id]: e.target.value })}
                      className="rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-300 focus:border-purple-500 focus:outline-none"
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="subject" className="text-xs font-medium text-gray-500">Subject / Domain</label>
                <select
                  id="subject"
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-800 focus:border-purple-500 focus:outline-none"
                >
                  <option value="" disabled>Select a subject</option>
                  {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="about" className="text-xs font-medium text-gray-500">
                  Tell us about your teaching experience
                </label>
                <textarea
                  id="about"
                  rows={5}
                  required
                  placeholder="Qualifications, teaching style, notable achievements..."
                  value={form.about}
                  onChange={(e) => setForm({ ...form, about: e.target.value })}
                  className="rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-300 focus:border-purple-500 focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="self-start rounded-lg bg-purple-700 px-8 py-3 text-sm font-semibold text-white transition hover:bg-purple-800"
              >
                Submit Application →
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
