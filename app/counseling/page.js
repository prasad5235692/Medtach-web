"use client";
import { useState } from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";
import { CheckCircle, Star, Clock, Video, Shield, ChevronDown } from "lucide-react";

const mentors = [
  {
    initials: "SR",
    bg: "bg-purple-700",
    name: "Dr. Sunita Rao",
    title: "Senior Medical Coding Specialist",
    expertise: ["CPC Exam Prep", "ICD-10-CM", "Specialty Coding"],
    exp: "12 Years",
    rating: "4.9",
    sessions: "320+",
  },
  {
    initials: "KM",
    bg: "bg-orange-500",
    name: "Karthik Menon",
    title: "Revenue Cycle Management Expert",
    expertise: ["Medical Billing", "AR Management", "Denial Handling"],
    exp: "9 Years",
    rating: "4.8",
    sessions: "210+",
  },
  {
    initials: "PV",
    bg: "bg-teal-700",
    name: "Preethi Varma",
    title: "Clinical Documentation Consultant",
    expertise: ["CDI Queries", "DRG Review", "EHR Systems"],
    exp: "8 Years",
    rating: "4.9",
    sessions: "180+",
  },
  {
    initials: "AK",
    bg: "bg-indigo-700",
    name: "Arjun Kumar",
    title: "HCC & Risk Coding Mentor",
    expertise: ["CRC Preparation", "HCC Mapping", "Risk Adjustment"],
    exp: "11 Years",
    rating: "5.0",
    sessions: "150+",
  },
];

const plans = [
  {
    name: "Starter",
    price: "₹499",
    per: "per session",
    duration: "30 min",
    features: [
      "1 live video session (30 min)",
      "Career guidance & Q&A",
      "Session recording shared",
      "Email follow-up notes",
    ],
    cta: "Book Starter",
    color: "border-gray-200",
    ctaColor: "border border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white",
    highlight: false,
  },
  {
    name: "Pro",
    price: "₹899",
    per: "per session",
    duration: "60 min",
    features: [
      "1 live video session (60 min)",
      "Deep-dive on specific topic",
      "Mock interview practice",
      "Session recording + notes",
      "Resume / CV review",
    ],
    cta: "Book Pro",
    color: "border-purple-700 shadow-xl shadow-purple-100",
    ctaColor: "bg-purple-700 text-white hover:bg-purple-800",
    highlight: true,
  },
  {
    name: "Bundle",
    price: "₹2,999",
    per: "4 sessions",
    duration: "60 min each",
    features: [
      "4 live video sessions (60 min)",
      "Dedicated mentor pairing",
      "Full exam / job prep track",
      "All recordings + notes",
      "Unlimited email support",
      "Certificate of mentorship",
    ],
    cta: "Book Bundle",
    color: "border-orange-300",
    ctaColor: "border border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white",
    highlight: false,
  },
];

const TIMES = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];

function getDates() {
  const dates = [];
  const today = new Date();
  for (let i = 1; i <= 7; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    dates.push({
      iso: d.toISOString().slice(0, 10),
      label: d.toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short" }),
    });
  }
  return dates;
}

export default function CounselingPage() {
  const dates = getDates();
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [booked, setBooked] = useState(false);

  function handleBook(e) {
    e.preventDefault();
    if (selectedMentor && selectedDate && selectedTime) setBooked(true);
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
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-purple-700">1:1 Mentorship</p>
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
              Personal{" "}
              <span className="text-purple-700">Counseling Sessions</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base text-gray-500">
              Get one-on-one guidance from certified industry experts. Whether it's exam prep, career switch, or job interview coaching — your mentor is focused entirely on you.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="#booking"
                className="rounded-lg bg-purple-700 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-200 transition hover:bg-purple-800 hover:-translate-y-0.5"
              >
                Book a Session →
              </a>
              <a
                href="#pricing"
                className="rounded-lg border border-purple-200 bg-white px-8 py-3.5 text-sm font-semibold text-purple-700 transition hover:bg-purple-50"
              >
                View Pricing
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Why Counseling */}
      <section className="bg-white py-14">
        <div className="page-container">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { icon: Video,  title: "Live Video Sessions",     desc: "Face-to-face interaction via Google Meet or Zoom — real-time feedback, no pre-recorded content." },
              { icon: Shield, title: "Verified Expert Mentors", desc: "All mentors are CPC/CRC-certified with 8+ years of active industry experience." },
              { icon: Clock,  title: "Flexible Scheduling",     desc: "Choose from morning, afternoon, or evening slots — 7 days a week, including weekends." },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <AnimateOnScroll key={item.title} animation="fade-up" delay={i * 100}>
                  <div className="group flex gap-5 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-700 transition-colors group-hover:bg-purple-700 group-hover:text-white">
                      <Icon size={22} strokeWidth={1.8} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-gray-900">{item.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-gray-500">{item.desc}</p>
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
              label="Our Mentors"
              title="Learn from Industry Experts"
              subtitle="Hand-picked certified professionals with real-world healthcare industry experience."
            />
          </AnimateOnScroll>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {mentors.map((m, i) => (
              <AnimateOnScroll key={m.name} animation="fade-up" delay={i * 100}>
                <div
                  onClick={() => setSelectedMentor(m.name)}
                  className={`group flex cursor-pointer flex-col items-center gap-4 rounded-2xl border-2 bg-white p-7 text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                    selectedMentor === m.name ? "border-purple-700 shadow-lg shadow-purple-100" : "border-gray-100"
                  }`}
                >
                  <div className={`flex h-16 w-16 items-center justify-center rounded-full ${m.bg} text-xl font-black text-white shadow-md`}>
                    {m.initials}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">{m.name}</p>
                    <p className="mt-0.5 text-xs text-gray-500">{m.title}</p>
                  </div>
                  <div className="flex flex-wrap justify-center gap-1.5">
                    {m.expertise.map((tag) => (
                      <span key={tag} className="rounded-full bg-purple-50 px-2.5 py-0.5 text-[11px] font-semibold text-purple-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex w-full justify-around border-t border-gray-100 pt-4 text-xs text-gray-500">
                    <span><span className="font-bold text-gray-900">{m.exp}</span><br />Experience</span>
                    <span><span className="font-bold text-yellow-500">★ {m.rating}</span><br />Rating</span>
                    <span><span className="font-bold text-gray-900">{m.sessions}</span><br />Sessions</span>
                  </div>
                  {selectedMentor === m.name && (
                    <span className="rounded-full bg-purple-700 px-3 py-1 text-xs font-semibold text-white">
                      ✓ Selected
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
              label="Book a Session"
              title="Choose Your Date & Time"
              subtitle="Pick a mentor above, then select a convenient slot below."
            />
          </AnimateOnScroll>

          {booked ? (
            <AnimateOnScroll animation="fade-up">
              <div className="mx-auto mt-10 max-w-md rounded-2xl border border-green-200 bg-green-50 p-10 text-center shadow-sm">
                <CheckCircle size={52} className="mx-auto text-green-500" strokeWidth={1.5} />
                <h3 className="mt-4 text-xl font-bold text-gray-900">Session Booked!</h3>
                <p className="mt-2 text-sm text-gray-500">
                  Your session with <strong>{selectedMentor}</strong> on <strong>{selectedDate}</strong> at <strong>{selectedTime}</strong> has been confirmed. Check your email for the meeting link.
                </p>
                <button
                  onClick={() => { setBooked(false); setSelectedDate(null); setSelectedTime(null); }}
                  className="mt-6 rounded-lg border border-purple-200 px-6 py-2.5 text-sm font-semibold text-purple-700 transition hover:bg-purple-50"
                >
                  Book Another Session
                </button>
              </div>
            </AnimateOnScroll>
          ) : (
            <form onSubmit={handleBook} className="mx-auto mt-10 max-w-3xl rounded-2xl border border-gray-100 bg-[#faf5ff] p-8 shadow-sm">
              {/* Mentor reminder */}
              <div className="mb-6 rounded-xl border border-purple-200 bg-white p-4 text-sm text-gray-600">
                {selectedMentor
                  ? <span>Mentor selected: <strong className="text-purple-700">{selectedMentor}</strong> — scroll up to change.</span>
                  : <span className="text-gray-400">← Scroll up and select a mentor first.</span>}
              </div>

              {/* Date picker */}
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-400">Select a Date</p>
              <div className="flex flex-wrap gap-2">
                {dates.map((d) => (
                  <button
                    key={d.iso}
                    type="button"
                    onClick={() => setSelectedDate(d.label)}
                    className={`rounded-xl border px-4 py-2.5 text-xs font-semibold transition ${
                      selectedDate === d.label
                        ? "border-purple-700 bg-purple-700 text-white"
                        : "border-gray-200 bg-white text-gray-700 hover:border-purple-300"
                    }`}
                  >
                    {d.label}
                  </button>
                ))}
              </div>

              {/* Time picker */}
              <p className="mb-3 mt-6 text-xs font-semibold uppercase tracking-widest text-gray-400">Select a Time</p>
              <div className="flex flex-wrap gap-2">
                {TIMES.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setSelectedTime(t)}
                    className={`rounded-xl border px-4 py-2.5 text-xs font-semibold transition ${
                      selectedTime === t
                        ? "border-orange-500 bg-orange-500 text-white"
                        : "border-gray-200 bg-white text-gray-700 hover:border-orange-300"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>

              <button
                type="submit"
                disabled={!selectedMentor || !selectedDate || !selectedTime}
                className="mt-8 w-full rounded-lg bg-purple-700 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-purple-800 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Book a Session →
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="relative overflow-hidden bg-[#f8fafc] py-16">
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
              label="Pricing"
              title="Simple, Transparent Plans"
              subtitle="No hidden fees. Pay per session or save with our bundle plan."
            />
          </AnimateOnScroll>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {plans.map((plan, i) => (
              <AnimateOnScroll key={plan.name} animation="fade-up" delay={i * 100}>
                <div className={`relative flex flex-col gap-6 rounded-2xl border-2 bg-white p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${plan.color}`}>
                  {plan.highlight && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="rounded-full bg-purple-700 px-4 py-1 text-xs font-bold text-white shadow">Most Popular</span>
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
      </section>

      {/* CTA */}
      <section className="bg-gray-900 py-20 text-center text-white">
        <AnimateOnScroll animation="fade-up">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-orange-400">Your Growth Starts Here</p>
          <h2 className="text-3xl font-bold sm:text-4xl">Talk to an Expert Today</h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-gray-300">
            Get personalised career guidance, exam strategies, and interview coaching — all in one focused session with a certified healthcare coding professional.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#booking"
              className="rounded-lg bg-orange-500 px-8 py-3.5 text-sm font-semibold transition hover:bg-orange-600"
            >
              Book a Session
            </a>
            <Link
              href="/contact"
              className="rounded-lg border border-white/30 px-8 py-3.5 text-sm font-semibold transition hover:bg-white/10"
            >
              Ask a Question
            </Link>
          </div>
        </AnimateOnScroll>
      </section>
    </>
  );
}
