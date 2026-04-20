"use client";
import { useState } from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import SectionHeading from "@/components/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";
import { getClientPageContent } from "@/data/clientPageContent";
import { DollarSign, Globe, TrendingUp, Users2, CheckCircle2 } from "lucide-react";

const perkIcons = {
  "dollar-sign": DollarSign,
  globe: Globe,
  "trending-up": TrendingUp,
  "users-2": Users2,
};

export default function JoinAsTeacherPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", experience: "", about: "" });
  const [sent, setSent] = useState(false);
  const { language } = useLanguage();
  const content = getClientPageContent("joinAsMentor", language);

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
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-purple-700">{content.hero.label}</p>
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            {content.hero.titleLeading} <span className="text-purple-700">{content.hero.titleHighlight}</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-gray-500">{content.hero.description}</p>
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
            <SectionHeading center label={content.benefitsSection.label} title={content.benefitsSection.title} />
          </AnimateOnScroll>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {content.perks.map((perk, i) => {
              const Icon = perkIcons[perk.icon] ?? DollarSign;

              return (
              <AnimateOnScroll key={perk.id} animation="fade-up" delay={i * 100}>
                <div className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1.5">
                  <div aria-hidden="true" className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-purple-50/60 transition-transform duration-500 group-hover:scale-150" />
                  <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50 text-purple-700 transition-colors group-hover:bg-purple-700 group-hover:text-white">
                    <Icon size={20} strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-4 font-bold text-gray-900">{perk.title}</h3>
                  <p className="mt-2 text-sm text-gray-500">{perk.description}</p>
                </div>
              </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application form */}
      <section className="bg-[#f8fafc] py-16">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeading label={content.applySection.label} title={content.applySection.title} />

          {sent ? (
            <div className="mt-10 flex flex-col items-center rounded-2xl border border-green-200 bg-green-50 p-10 text-center shadow-sm">
              <CheckCircle2 size={52} className="text-green-500" strokeWidth={1.5} />
              <h3 className="mt-4 text-xl font-bold text-gray-900">{content.form.successTitle}</h3>
              <p className="mt-2 text-sm text-gray-500">{content.form.successDescription}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-5 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {content.form.fields.map((field) => (
                  <div key={f.id} className="flex flex-col gap-1.5">
                    <label htmlFor={field.id} className="text-xs font-medium text-gray-500">{field.label}</label>
                    <input
                      id={field.id}
                      type={field.type}
                      required
                      min={field.type === "number" ? 0 : undefined}
                      placeholder={field.placeholder}
                      value={form[field.id]}
                      onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                      className="rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-300 focus:border-purple-500 focus:outline-none"
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="subject" className="text-xs font-medium text-gray-500">{content.form.subjectLabel}</label>
                <select
                  id="subject"
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-800 focus:border-purple-500 focus:outline-none"
                >
                  <option value="" disabled>{content.form.subjectPlaceholder}</option>
                  {content.form.subjects.map((subject) => <option key={subject.id} value={subject.id}>{subject.label}</option>)}
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="about" className="text-xs font-medium text-gray-500">
                  {content.form.aboutLabel}
                </label>
                <textarea
                  id="about"
                  rows={5}
                  required
                  placeholder={content.form.aboutPlaceholder}
                  value={form.about}
                  onChange={(e) => setForm({ ...form, about: e.target.value })}
                  className="rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-300 focus:border-purple-500 focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="self-start rounded-lg bg-purple-700 px-8 py-3 text-sm font-semibold text-white transition hover:bg-purple-800"
              >
                {content.form.submitLabel}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
