"use client";
import { useState } from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { getClientPageContent } from "@/data/clientPageContent";
import { Laptop, Users, Award, TrendingUp, CheckCircle2, CheckCircle, Filter, Clock, MonitorSmartphone, MapPin } from "lucide-react";

const benefitIcons = {
  laptop: Laptop,
  users: Users,
  award: Award,
  "trending-up": TrendingUp,
};

export default function InternshipPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", qualification: "", course: "", message: "" });
  const [sent, setSent] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeDuration, setActiveDuration] = useState("all");
  const { language } = useLanguage();
  const content = getClientPageContent("internship", language);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  const filtered = content.tracks.filter((track) => {
    const catOk = activeCategory === "all" || track.categoryId === activeCategory;
    const durOk = activeDuration === "all" || track.durationGroupId === activeDuration;
    return catOk && durOk;
  });

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
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-purple-700">{content.hero.label}</p>
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              {content.hero.titleLeading} <span className="text-purple-700">{content.hero.titleHighlight}</span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base text-gray-500">{content.hero.description}</p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-16">
        <div className="page-container">
          <AnimateOnScroll animation="fade-up">
            <SectionHeading
              center
              label={content.benefitsSection.label}
              title={content.benefitsSection.title}
              subtitle={content.benefitsSection.subtitle}
            />
          </AnimateOnScroll>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {content.benefits.map((benefit, i) => {
              const Icon = benefitIcons[benefit.icon] ?? Laptop;

              return (
              <AnimateOnScroll key={benefit.id} animation="fade-up" delay={i * 100}>
                <div className="group flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1.5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-purple-700 transition-colors group-hover:bg-purple-700 group-hover:text-white">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>
                  <h3 className="text-sm font-bold text-gray-900">{benefit.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-500">{benefit.description}</p>
                </div>
              </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tracks with Filters */}
      <section className="bg-[#f8fafc] py-16">
        <div className="page-container">
          <AnimateOnScroll animation="fade-up">
            <SectionHeading
              center
              label={content.tracksSection.label}
              title={content.tracksSection.title}
              subtitle={content.tracksSection.subtitle}
            />
          </AnimateOnScroll>

          {/* Filters */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
            <div className="flex items-center gap-2">
              <Filter size={14} className="shrink-0 text-purple-700" />
              <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">{content.tracksSection.categoryLabel}</span>
              <div className="flex flex-wrap gap-2">
                {content.filters.categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                      activeCategory === category.id
                        ? "bg-purple-700 text-white"
                        : "border border-purple-200 bg-white text-purple-700 hover:bg-purple-50"
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={14} className="shrink-0 text-orange-500" />
              <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">{content.tracksSection.durationLabel}</span>
              <div className="flex flex-wrap gap-2">
                {content.filters.durations.map((duration) => (
                  <button
                    key={duration.id}
                    onClick={() => setActiveDuration(duration.id)}
                    className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                      activeDuration === duration.id
                        ? "bg-orange-500 text-white"
                        : "border border-orange-200 bg-white text-orange-600 hover:bg-orange-50"
                    }`}
                  >
                    {duration.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Cards */}
          {filtered.length === 0 ? (
            <div className="mt-12 text-center text-sm text-gray-400">{content.tracksSection.emptyMessage}</div>
          ) : (
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((track, i) => (
                <AnimateOnScroll key={track.name} animation="fade-up" delay={i * 80}>
                  <div className={`flex flex-col gap-5 rounded-2xl border-2 ${track.color} p-7 transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${track.badgeColor}`}>
                        {track.categoryLabel}
                      </span>
                      <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${track.typeColor}`}>
                        {track.typeLabel}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{track.name}</h3>
                    <div className="flex flex-wrap gap-4 text-xs text-gray-500">
                      <span className="flex items-center gap-1"><Clock size={12} className="text-purple-700" />{track.durationLabel}</span>
                      <span className="flex items-center gap-1">
                        {track.modeId === "online" ? <MonitorSmartphone size={12} className="text-purple-700" /> : <MapPin size={12} className="text-purple-700" />}
                        {track.modeLabel}
                      </span>
                    </div>
                    <ul className="flex flex-col gap-2">
                      {track.skills.map((skill) => (
                        <li key={skill} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle size={14} className="shrink-0 text-purple-700" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto">
                      <Link
                        href="/contact"
                        className="block w-full rounded-lg bg-purple-700 px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-purple-800"
                      >
                        {content.form.label} {"->"}
                      </Link>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Eligibility + Form */}
      <section className="bg-white py-16">
        <div className="page-container grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Eligibility */}
          <AnimateOnScroll animation="fade-right">
            <SectionHeading label={content.eligibilitySection.label} title={content.eligibilitySection.title} />
            <ul className="mt-6 flex flex-col gap-4">
              {content.eligibilitySection.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-gray-600">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple-700 text-[10px] text-white">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-2xl border border-purple-200 bg-purple-50 p-6">
              <p className="text-sm font-semibold text-purple-700">{content.eligibilitySection.programmeDurationLabel}</p>
              <p className="mt-1 text-sm text-gray-600">{content.eligibilitySection.programmeDurationText}</p>
              <p className="mt-4 text-sm font-semibold text-purple-700">{content.eligibilitySection.stipendLabel}</p>
              <p className="mt-1 text-sm text-gray-600">{content.eligibilitySection.stipendText}</p>
            </div>
          </AnimateOnScroll>

          {/* Application Form */}
          <AnimateOnScroll animation="fade-left">
            <SectionHeading label={content.form.label} title={content.form.title} />
            {sent ? (
              <div className="mt-6 flex flex-col items-center rounded-2xl border border-green-200 bg-green-50 p-10 text-center shadow-sm">
                <CheckCircle2 size={52} className="text-green-500" strokeWidth={1.5} />
                <h3 className="mt-4 text-xl font-bold text-gray-900">{content.form.successTitle}</h3>
                <p className="mt-2 text-sm text-gray-500">{content.form.successDescription}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-gray-400">{content.form.fields.name.label}</label>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full rounded-lg border border-gray-200 bg-[#f8fafc] px-4 py-2.5 text-sm text-gray-900 outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100"
                      placeholder={content.form.fields.name.placeholder}
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-gray-400">{content.form.fields.email.label}</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full rounded-lg border border-gray-200 bg-[#f8fafc] px-4 py-2.5 text-sm text-gray-900 outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100"
                      placeholder={content.form.fields.email.placeholder}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-gray-400">{content.form.fields.phone.label}</label>
                    <input
                      required
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full rounded-lg border border-gray-200 bg-[#f8fafc] px-4 py-2.5 text-sm text-gray-900 outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100"
                      placeholder={content.form.fields.phone.placeholder}
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-gray-400">{content.form.fields.qualification.label}</label>
                    <input
                      required
                      type="text"
                      value={form.qualification}
                      onChange={(e) => setForm({ ...form, qualification: e.target.value })}
                      className="w-full rounded-lg border border-gray-200 bg-[#f8fafc] px-4 py-2.5 text-sm text-gray-900 outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100"
                      placeholder={content.form.fields.qualification.placeholder}
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-gray-400">{content.form.trackLabel}</label>
                  <select
                    required
                    value={form.course}
                    onChange={(e) => setForm({ ...form, course: e.target.value })}
                    className="w-full rounded-lg border border-gray-200 bg-[#f8fafc] px-4 py-2.5 text-sm text-gray-900 outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100"
                  >
                    <option value="">{content.form.trackPlaceholder}</option>
                    {content.form.trackOptions.map((option) => <option key={option.id} value={option.id}>{option.label}</option>)}
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-gray-400">{content.form.motivationLabel}</label>
                  <textarea
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full rounded-lg border border-gray-200 bg-[#f8fafc] px-4 py-2.5 text-sm text-gray-900 outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100"
                    placeholder={content.form.motivationPlaceholder}
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-lg bg-purple-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-purple-800"
                >
                  {content.form.submitLabel}
                </button>
              </form>
            )}
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 py-20 text-center text-white">
        <AnimateOnScroll animation="fade-up">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-orange-400">{content.cta.label}</p>
          <h2 className="text-3xl font-bold sm:text-4xl">{content.cta.title}</h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-gray-300">{content.cta.description}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/courses" className="rounded-lg bg-orange-500 px-8 py-3.5 text-sm font-semibold transition hover:bg-orange-600">
              {content.cta.primaryLabel}
            </Link>
            <Link href="/contact" className="rounded-lg border border-white/30 px-8 py-3.5 text-sm font-semibold transition hover:bg-white/10">
              {content.cta.secondaryLabel}
            </Link>
          </div>
        </AnimateOnScroll>
      </section>
    </>
  );
}
