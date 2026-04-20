"use client";
import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { getClientPageContent } from "@/data/clientPageContent";
import {
  Check, Building2, Users, Globe, BarChart3,
  Puzzle, ArrowRight, Phone, Mail, ChevronLeft,
} from "lucide-react";

const benefitIcons = {
  "building-2": Building2,
  check: Check,
  users: Users,
  "bar-chart-3": BarChart3,
  puzzle: Puzzle,
  globe: Globe,
};

const contactIcons = {
  phone: Phone,
  mail: Mail,
};

export default function RequestDemoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    location: "", company: "", companySize: "",
    learners: "", jobTitle: "", jobLevel: "", needs: "",
  });
  const { language } = useLanguage();
  const content = getClientPageContent("businessRequestDemo", language);

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
            {content.hero.backLabel}
          </Link>
          <div className="flex flex-col items-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-orange-400">
            {content.hero.badge}
          </p>
          <h1 className="text-4xl font-extrabold leading-tight sm:text-4xl">
            {content.hero.titleLeading} <span className="text-orange-400">{content.hero.titleHighlight}</span>
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-purple-100/80">
            {content.hero.description}
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
              {content.benefitsTitle}
            </h2>

            <ul className="mt-8 flex flex-col gap-5">
              {content.benefits.map(({ id, icon, text }) => {
                const Icon = benefitIcons[icon] ?? Building2;

                return (
                <li key={text} className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-700">
                    <Icon size={17} />
                  </span>
                  <p className="text-sm leading-relaxed text-gray-600">{text}</p>
                </li>
                );
              })}
            </ul>

            {/* Trusted by */}
            <div className="mt-12">
              <p className="mb-5 text-xs font-bold uppercase tracking-widest text-gray-400">{content.trustedByTitle}</p>
              <div className="grid grid-cols-3 gap-3">
                {content.trustedBy.map((name) => (
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
              {content.stats.map(({ value, label }) => (
                <div key={label} className="text-center">
                  <p className="text-2xl font-extrabold text-purple-700">{value}</p>
                  <p className="text-xs text-gray-500">{label}</p>
                </div>
              ))}
            </div>

            {/* Contact details */}
            <div className="mt-8 flex flex-col gap-3 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-purple-600">{content.contactTitle}</p>
              {content.contactMethods.map((method) => {
                const Icon = contactIcons[method.icon] ?? Phone;

                return (
                  <a key={method.id} href={method.href} className="flex items-center gap-3 text-sm text-gray-600 transition hover:text-purple-700">
                    <Icon size={15} className="text-purple-500" /> {method.value}
                  </a>
                );
              })}
            </div>
          </div>

          {/* ── Right: form ── */}
          <div>
            {submitted ? (
              <div className="flex h-full min-h-80 flex-col items-center justify-center rounded-2xl border border-purple-200 bg-purple-50 p-10 text-center shadow-sm">
                <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-purple-700 text-white">
                  <Check size={26} />
                </span>
                <h2 className="text-xl font-extrabold text-gray-900">{content.form.successTitle}</h2>
                <p className="mt-3 text-sm text-gray-500">{content.form.successDescription}</p>
                <Link
                  href="/business"
                  className="mt-7 inline-flex items-center gap-2 rounded-xl bg-purple-700 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-purple-800"
                >
                  {content.form.successLinkLabel} <ArrowRight size={14} />
                </Link>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-gray-100 bg-white p-8 shadow-md"
              >
                <h3 className="mb-6 text-lg font-bold text-gray-900">{content.form.title}</h3>

                {/* Name row */}
                <div className="mb-4 grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>{content.form.fields.firstName.label}</label>
                    <input required className={inputCls} placeholder={content.form.fields.firstName.placeholder} value={form.firstName} onChange={set("firstName")} />
                  </div>
                  <div>
                    <label className={labelCls}>{content.form.fields.lastName.label}</label>
                    <input required className={inputCls} placeholder={content.form.fields.lastName.placeholder} value={form.lastName} onChange={set("lastName")} />
                  </div>
                </div>

                {/* Email + Phone */}
                <div className="mb-4 grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>{content.form.fields.email.label}</label>
                    <input required type="email" className={inputCls} placeholder={content.form.fields.email.placeholder} value={form.email} onChange={set("email")} />
                  </div>
                  <div>
                    <label className={labelCls}>{content.form.fields.phone.label}</label>
                    <input required type="tel" className={inputCls} placeholder={content.form.fields.phone.placeholder} value={form.phone} onChange={set("phone")} />
                  </div>
                </div>

                {/* Location */}
                <div className="mb-4">
                  <label className={labelCls}>{content.form.fields.location.label}</label>
                  <input required className={inputCls} placeholder={content.form.fields.location.placeholder} value={form.location} onChange={set("location")} />
                </div>

                {/* Company */}
                <div className="mb-4">
                  <label className={labelCls}>{content.form.fields.company.label}</label>
                  <input required className={inputCls} placeholder={content.form.fields.company.placeholder} value={form.company} onChange={set("company")} />
                </div>

                {/* Company size + Learners */}
                <div className="mb-4 grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>{content.form.fields.companySize.label}</label>
                    <select required className={inputCls} value={form.companySize} onChange={set("companySize")}>
                      <option value="">{content.form.fields.companySize.placeholder}</option>
                      {content.form.fields.companySize.options.map((option) => <option key={option.id} value={option.id}>{option.label}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className={labelCls}>{content.form.fields.learners.label}</label>
                    <select required className={inputCls} value={form.learners} onChange={set("learners")}>
                      <option value="">{content.form.fields.learners.placeholder}</option>
                      {content.form.fields.learners.options.map((option) => <option key={option.id} value={option.id}>{option.label}</option>)}
                    </select>
                  </div>
                </div>

                {/* Job title + level */}
                <div className="mb-4 grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>{content.form.fields.jobTitle.label}</label>
                    <input required className={inputCls} placeholder={content.form.fields.jobTitle.placeholder} value={form.jobTitle} onChange={set("jobTitle")} />
                  </div>
                  <div>
                    <label className={labelCls}>{content.form.fields.jobLevel.label}</label>
                    <select required className={inputCls} value={form.jobLevel} onChange={set("jobLevel")}>
                      <option value="">{content.form.fields.jobLevel.placeholder}</option>
                      {content.form.fields.jobLevel.options.map((option) => <option key={option.id} value={option.id}>{option.label}</option>)}
                    </select>
                  </div>
                </div>

                {/* Training needs */}
                <div className="mb-6">
                  <label className={labelCls}>{content.form.fields.needs.label}</label>
                  <textarea
                    rows={3}
                    className={`${inputCls} resize-none`}
                    placeholder={content.form.fields.needs.placeholder}
                    value={form.needs}
                    onChange={set("needs")}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-purple-700 py-3 text-sm font-semibold text-white shadow-sm shadow-purple-200 transition hover:bg-purple-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2"
                >
                  {content.form.submitLabel}
                </button>

                <p className="mt-4 text-center text-xs leading-relaxed text-gray-400">
                  {content.form.termsPrefix}{" "}
                  <Link href="/business/contact" className="text-purple-600 hover:underline">{content.form.termsLabel}</Link>{" "}
                  {content.form.conjunctionLabel}{" "}
                  <Link href="/business/contact" className="text-purple-600 hover:underline">{content.form.privacyLabel}</Link>.
                  {" "}{content.form.termsSuffix}
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
