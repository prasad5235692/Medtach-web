"use client";
import { useState } from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { getCounselingPageContent } from "@/counseling/data/content";
import { CheckCircle, Clock, Video, Shield } from "lucide-react";
const whyCardIcons = {
  video: Video,
  shield: Shield,
  clock: Clock,
};

function getLocaleTag(language) {
  if (language === "hi") {
    return "hi-IN";
  }

  if (language === "ml") {
    return "ml-IN";
  }

  return "en-IN";
}

function getDates(localeTag) {
  const dates = [];
  const today = new Date();
  const formatter = new Intl.DateTimeFormat(localeTag, { weekday: "short", day: "numeric", month: "short" });

  for (let i = 1; i <= 7; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    dates.push({
      iso: d.toISOString().slice(0, 10),
      label: formatter.format(d),
    });
  }
  return dates;
}

function formatTimeSlot(localeTag, timeSlot) {
  const [hours, minutes] = timeSlot.split(":").map(Number);
  const date = new Date();
  date.setHours(hours, minutes, 0, 0);

  return new Intl.DateTimeFormat(localeTag, { hour: "numeric", minute: "2-digit" }).format(date);
}

export default function CounselingPage() {
  const { language } = useLanguage();
  const content = getCounselingPageContent(language);
  const localeTag = getLocaleTag(language);
  const dates = getDates(localeTag);
  const [selectedMentorId, setSelectedMentorId] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [booked, setBooked] = useState(false);
  const selectedMentor = content.mentors.find((mentor) => mentor.id === selectedMentorId) ?? null;
  const selectedDateLabel = dates.find((date) => date.iso === selectedDate)?.label ?? selectedDate;
  const selectedTimeLabel = selectedTime ? formatTimeSlot(localeTag, selectedTime) : null;

  function handleBook(e) {
    e.preventDefault();
    if (selectedMentorId && selectedDate && selectedTime) setBooked(true);
  }

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
        <div aria-hidden="true" className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-orange-200/20 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -left-20 bottom-10 h-56 w-56 rounded-full bg-purple-200/20 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <AnimateOnScroll animation="fade-down">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-purple-700">{content.hero.label}</p>
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
              {content.hero.titleLeading}{" "}
              <span className="text-purple-700">{content.hero.titleHighlight}</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base text-gray-500">{content.hero.description}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="#booking"
                className="rounded-lg bg-purple-700 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-200 transition hover:bg-purple-800 hover:-translate-y-0.5"
              >
                {content.hero.primaryLabel}
              </a>
              <a
                href="#pricing"
                className="rounded-lg border border-purple-200 bg-white px-8 py-3.5 text-sm font-semibold text-purple-700 transition hover:bg-purple-50"
              >
                {content.hero.secondaryLabel}
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Why Counseling */}
      <section className="bg-white py-14">
        <div className="page-container">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {content.whyCards.map((item, i) => {
              const Icon = whyCardIcons[item.icon] ?? Video;

              return (
                <AnimateOnScroll key={item.title} animation="fade-up" delay={i * 100}>
                  <div className="group flex gap-5 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-700 transition-colors group-hover:bg-purple-700 group-hover:text-white">
                      <Icon size={22} strokeWidth={1.8} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-gray-900">{item.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-gray-500">{item.description}</p>
                    </div>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mentor Cards */}
      <section className="bg-[#f8fafc] py-16">
        <div className="page-container">
          <AnimateOnScroll animation="fade-up">
            <SectionHeading
              center
              label={content.mentorsSection.label}
              title={content.mentorsSection.title}
              subtitle={content.mentorsSection.subtitle}
            />
          </AnimateOnScroll>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {content.mentors.map((mentor, i) => (
              <AnimateOnScroll key={mentor.id} animation="fade-up" delay={i * 100}>
                <div
                  onClick={() => setSelectedMentorId(mentor.id)}
                  className={`group flex cursor-pointer flex-col items-center gap-4 rounded-2xl border-2 bg-white p-7 text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                    selectedMentorId === mentor.id ? "border-purple-700 shadow-lg shadow-purple-100" : "border-gray-100"
                  }`}
                >
                  <div className={`flex h-16 w-16 items-center justify-center rounded-full ${mentor.bg} text-xl font-black text-white shadow-md`}>
                    {mentor.initials}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">{mentor.name}</p>
                    <p className="mt-0.5 text-xs text-gray-500">{mentor.title}</p>
                  </div>
                  <div className="flex flex-wrap justify-center gap-1.5">
                    {mentor.expertise.map((tag) => (
                      <span key={tag} className="rounded-full bg-purple-50 px-2.5 py-0.5 text-[11px] font-semibold text-purple-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex w-full justify-around border-t border-gray-100 pt-4 text-xs text-gray-500">
                    <span><span className="font-bold text-gray-900">{mentor.exp}</span><br />{content.mentorsSection.experienceLabel}</span>
                    <span><span className="font-bold text-yellow-500">★ {mentor.rating}</span><br />{content.mentorsSection.ratingLabel}</span>
                    <span><span className="font-bold text-gray-900">{mentor.sessions}</span><br />{content.mentorsSection.sessionsLabel}</span>
                  </div>
                  {selectedMentorId === mentor.id && (
                    <span className="rounded-full bg-purple-700 px-3 py-1 text-xs font-semibold text-white">
                      ✓ {content.mentorsSection.selectedLabel}
                    </span>
                  )}
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="bg-white py-16">
        <div className="page-container">
          <AnimateOnScroll animation="fade-up">
            <SectionHeading
              center
              label={content.bookingSection.label}
              title={content.bookingSection.title}
              subtitle={content.bookingSection.subtitle}
            />
          </AnimateOnScroll>

          {booked ? (
            <AnimateOnScroll animation="fade-up">
              <div className="mx-auto mt-10 max-w-md rounded-2xl border border-green-200 bg-green-50 p-10 text-center shadow-sm">
                <CheckCircle size={52} className="mx-auto text-green-500" strokeWidth={1.5} />
                <h3 className="mt-4 text-xl font-bold text-gray-900">{content.bookingSection.successTitle}</h3>
                <p className="mt-2 text-sm text-gray-500">
                  {content.bookingSection.successPrefix} <strong>{selectedMentor?.name}</strong> {content.bookingSection.successOnLabel} <strong>{selectedDateLabel}</strong> {content.bookingSection.successAtLabel} <strong>{selectedTimeLabel}</strong> {content.bookingSection.successSuffix}
                </p>
                <button
                  onClick={() => { setBooked(false); setSelectedDate(null); setSelectedTime(null); }}
                  className="mt-6 rounded-lg border border-purple-200 px-6 py-2.5 text-sm font-semibold text-purple-700 transition hover:bg-purple-50"
                >
                  {content.bookingSection.resetLabel}
                </button>
              </div>
            </AnimateOnScroll>
          ) : (
            <form onSubmit={handleBook} className="mx-auto mt-10 max-w-3xl rounded-2xl border border-gray-100 bg-[#faf5ff] p-8 shadow-sm">
              {/* Mentor reminder */}
              <div className="mb-6 rounded-xl border border-purple-200 bg-white p-4 text-sm text-gray-600">
                {selectedMentor
                  ? <span>{content.bookingSection.mentorSelectedLabel} <strong className="text-purple-700">{selectedMentor.name}</strong> - {content.bookingSection.mentorSelectedSuffix}</span>
                  : <span className="text-gray-400">{content.bookingSection.mentorPrompt}</span>}
              </div>

              {/* Date picker */}
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-400">{content.bookingSection.selectDateLabel}</p>
              <div className="flex flex-wrap gap-2">
                {dates.map((d) => (
                  <button
                    key={d.iso}
                    type="button"
                    onClick={() => setSelectedDate(d.iso)}
                    className={`rounded-xl border px-4 py-2.5 text-xs font-semibold transition ${
                      selectedDate === d.iso
                        ? "border-purple-700 bg-purple-700 text-white"
                        : "border-gray-200 bg-white text-gray-700 hover:border-purple-300"
                    }`}
                  >
                    {d.label}
                  </button>
                ))}
              </div>

              {/* Time picker */}
              <p className="mb-3 mt-6 text-xs font-semibold uppercase tracking-widest text-gray-400">{content.bookingSection.selectTimeLabel}</p>
              <div className="flex flex-wrap gap-2">
                {content.bookingSection.timeSlots.map((timeSlot) => (
                  <button
                    key={timeSlot}
                    type="button"
                    onClick={() => setSelectedTime(timeSlot)}
                    className={`rounded-xl border px-4 py-2.5 text-xs font-semibold transition ${
                      selectedTime === timeSlot
                        ? "border-orange-500 bg-orange-500 text-white"
                        : "border-gray-200 bg-white text-gray-700 hover:border-orange-300"
                    }`}
                  >
                    {formatTimeSlot(localeTag, timeSlot)}
                  </button>
                ))}
              </div>

              <button
                type="submit"
                disabled={!selectedMentorId || !selectedDate || !selectedTime}
                className="mt-8 w-full rounded-lg bg-purple-700 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-purple-800 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {content.bookingSection.submitLabel}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Pricing */}
      {/* <section id="pricing" className="relative overflow-hidden bg-[#f8fafc] py-16">
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
              label={content.pricingSection.label}
              title={content.pricingSection.title}
              subtitle={content.pricingSection.subtitle}
            />
          </AnimateOnScroll>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {content.plans.map((plan, i) => (
              <AnimateOnScroll key={plan.name} animation="fade-up" delay={i * 100}>
                <div className={`relative flex flex-col gap-6 rounded-2xl border-2 bg-white p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${plan.color}`}>
                  {plan.highlight && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="rounded-full bg-purple-700 px-4 py-1 text-xs font-bold text-white shadow">{content.pricingSection.popularLabel}</span>
                    </div>
                  )}
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-widest text-gray-400">{plan.name}</p>
                    <p className="mt-1 text-4xl font-black text-gray-900">{plan.price}</p>
                    <p className="text-xs text-gray-400">{plan.per} · {plan.duration}</p>
                  </div>
                  <ul className="flex flex-col gap-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle size={14} className="mt-0.5 shrink-0 text-purple-700" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#booking"
                    className={`mt-auto block w-full rounded-lg px-6 py-3 text-center text-sm font-semibold transition ${plan.ctaColor}`}
                  >
                    {plan.cta}
                  </a>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="bg-gray-900 py-20 text-center text-white">
        <AnimateOnScroll animation="fade-up">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-orange-400">{content.cta.label}</p>
          <h2 className="text-3xl font-bold sm:text-4xl">{content.cta.title}</h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-gray-300">{content.cta.description}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#booking"
              className="rounded-lg bg-orange-500 px-8 py-3.5 text-sm font-semibold transition hover:bg-orange-600"
            >
              {content.cta.primaryLabel}
            </a>
            <Link
              href="/contact"
              className="rounded-lg border border-white/30 px-8 py-3.5 text-sm font-semibold transition hover:bg-white/10"
            >
              {content.cta.secondaryLabel}
            </Link>
          </div>
        </AnimateOnScroll>
      </section>
    </>
  );
}
