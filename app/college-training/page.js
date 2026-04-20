import AnimateOnScroll from "@/components/AnimateOnScroll";
import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";
import {
  GraduationCap, Users, Building2, Award, CheckCircle,
  MapPin, Phone, Mail, BookOpen, BarChart3, PlayCircle,
} from "lucide-react";

export const metadata = {
  title: "In-Campus College Training — Medtech Career",
};

const stats = [
  { number: "12,000+", label: "Students Trained", icon: Users },
  { number: "80+",     label: "Colleges Reached",  icon: Building2 },
  { number: "40+",     label: "Training Programs",  icon: BookOpen },
  { number: "98%",     label: "Satisfaction Rate",  icon: Award },
];

const colleges = [
  { name: "Sri Ramachandra Institute of Higher Education", location: "Chennai, TN" },
  { name: "Manipal College of Health Professions",         location: "Manipal, KA" },
  { name: "KMCH College of Pharmacy",                      location: "Coimbatore, TN" },
  { name: "PSG College of Arts & Science",                 location: "Coimbatore, TN" },
  { name: "Sri Venkateswara College of Pharmacy",          location: "Tirupati, AP" },
  { name: "SRM Institute of Science & Technology",         location: "Chennai, TN" },
  { name: "KLE University",                                location: "Belagavi, KA" },
  { name: "Saveetha Institute of Medical & Technical Sciences", location: "Chennai, TN" },
];

const programs = [
  {
    title: "Medical Coding Awareness Workshop",
    duration: "1 Day",
    audience: "Final-year Life Science / Paramedical students",
    outcomes: ["Career overview of medical coding", "US healthcare system introduction", "Live coding demo session"],
    color: "border-purple-200 bg-purple-50",
    badgeColor: "bg-purple-700 text-white",
  },
  {
    title: "Basic Medical Coding Training (BMCT)",
    duration: "1 Month",
    audience: "BSc Nursing, BMLT, Pharmacy, BDS graduates",
    outcomes: ["ICD-10-CM & CPT-4 foundations", "Medical terminology & anatomy", "Healthcare claim basics"],
    color: "border-orange-200 bg-orange-50",
    badgeColor: "bg-orange-500 text-white",
  },
  {
    title: "Advanced Medical Coding Training (AMCT)",
    duration: "2 Months",
    audience: "Post BMCT or experienced coders",
    outcomes: ["Specialty coding: Surgery, Radiology, E/M", "50+ advanced case studies", "Industry-ready assessment"],
    color: "border-teal-200 bg-teal-50",
    badgeColor: "bg-teal-700 text-white",
  },
  {
    title: "CPC Certification Preparation",
    duration: "3 Months",
    audience: "Students targeting AAPC CPC credential",
    outcomes: ["8 solved CPC practice papers", "Timed mock exams", "Exam strategy & speed workshops"],
    color: "border-indigo-200 bg-indigo-50",
    badgeColor: "bg-indigo-700 text-white",
  },
  {
    title: "Medical Billing & RCM",
    duration: "1 Month",
    audience: "Commerce & Life Science graduates",
    outcomes: ["Claim submission & denial management", "AR follow-up workflows", "Insurance portal navigation"],
    color: "border-pink-200 bg-pink-50",
    badgeColor: "bg-pink-700 text-white",
  },
  {
    title: "Clinical Documentation Improvement",
    duration: "6 Weeks",
    audience: "MBBS, Nursing & allied health professionals",
    outcomes: ["CDI query writing", "DRG review & audit", "EHR navigation skills"],
    color: "border-cyan-200 bg-cyan-50",
    badgeColor: "bg-cyan-700 text-white",
  },
];

const galleryItems = [
  { label: "Batch Orientation — Coimbatore", type: "image", placeholder: "bg-purple-100" },
  { label: "Live Coding Session — Chennai",   type: "image", placeholder: "bg-orange-100" },
  { label: "Certificate Distribution",        type: "image", placeholder: "bg-teal-100" },
  { label: "Student Testimonial Video",       type: "video", placeholder: "bg-indigo-100" },
  { label: "Campus Workshop Highlights",      type: "video", placeholder: "bg-pink-100" },
  { label: "Annual College Partners Meet",    type: "image", placeholder: "bg-cyan-100" },
];

export default function CollegeTrainingPage() {
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
        <div aria-hidden="true" className="pointer-events-none absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-purple-200/20 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <AnimateOnScroll animation="fade-down">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-purple-700">Institutional Training</p>
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
              In-Campus{" "}
              <span className="text-purple-700">College Training</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base text-gray-500">
              Medtech Career partners with colleges across India to deliver industry-aligned medical coding &amp; billing training directly on campus — preparing students before graduation.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-lg bg-purple-700 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-200 transition hover:bg-purple-800 hover:-translate-y-0.5"
              >
                Partner With Us →
              </Link>
              <a
                href="#programs"
                className="rounded-lg border border-purple-200 bg-white px-8 py-3.5 text-sm font-semibold text-purple-700 transition hover:bg-purple-50"
              >
                View Programs
              </a>
            </div>
          </AnimateOnScroll>
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

      {/* Partner Colleges */}
      <section className="bg-white py-16">
        <div className="page-container">
          <AnimateOnScroll animation="fade-up">
            <SectionHeading
              center
              label="Our Partners"
              title="Colleges We've Trained At"
              subtitle="Trusted by leading medical and paramedical colleges across South India and beyond."
            />
          </AnimateOnScroll>
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {colleges.map((c, i) => (
              <AnimateOnScroll key={c.name} animation="fade-up" delay={Math.floor(i / 4) * 80}>
                <div className="group flex flex-col gap-2 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-700 transition-colors group-hover:bg-purple-700 group-hover:text-white">
                    <GraduationCap size={18} strokeWidth={1.8} />
                  </div>
                  <p className="text-sm font-semibold text-gray-900 leading-tight">{c.name}</p>
                  <p className="flex items-center gap-1 text-xs text-gray-400">
                    <MapPin size={11} className="shrink-0" /> {c.location}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section id="programs" className="relative overflow-hidden bg-[#f8fafc] py-16">
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
              label="What We Offer"
              title="Training Programs"
              subtitle="Structured programmes from awareness workshops to certification-level training, all delivered on your campus."
            />
          </AnimateOnScroll>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((p, i) => (
              <AnimateOnScroll key={p.title} animation="fade-up" delay={i * 80}>
                <div className={`flex flex-col gap-5 rounded-2xl border-2 ${p.color} p-7 transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}>
                  <div>
                    <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${p.badgeColor}`}>
                      {p.duration}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900">{p.title}</h3>
                  <p className="text-xs text-gray-500 font-medium">{p.audience}</p>
                  <ul className="flex flex-col gap-2">
                    {p.outcomes.map((o) => (
                      <li key={o} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle size={14} className="mt-0.5 shrink-0 text-purple-700" />
                        {o}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <Link
                      href="/contact"
                      className="block w-full rounded-lg border border-purple-700 px-4 py-2.5 text-center text-sm font-semibold text-purple-700 transition hover:bg-purple-700 hover:text-white"
                    >
                      Enquire About This Program
                    </Link>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-white py-16">
        <div className="page-container">
          <AnimateOnScroll animation="fade-up">
            <SectionHeading
              center
              label="Gallery"
              title="Training in Action"
              subtitle="Moments from our college training sessions across India."
            />
          </AnimateOnScroll>
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item, i) => (
              <AnimateOnScroll key={item.label} animation="fade-up" delay={i * 80}>
                <div className={`group relative flex h-52 items-center justify-center overflow-hidden rounded-2xl ${item.placeholder} border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}>
                  {item.type === "video" && (
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-purple-700 shadow-md transition group-hover:scale-110">
                      <PlayCircle size={28} />
                    </div>
                  )}
                  {item.type === "image" && (
                    <BarChart3 size={36} className="text-gray-300 group-hover:text-purple-300 transition" />
                  )}
                  <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/40 to-transparent p-4">
                    <p className="text-xs font-semibold text-white">{item.label}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 py-20 text-center text-white">
        <AnimateOnScroll animation="fade-up">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-orange-400">Partner With Us</p>
          <h2 className="text-3xl font-bold sm:text-4xl">Bring Medtech Training to Your Campus</h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-gray-300">
            We offer flexible scheduling, dedicated trainers, and end-to-end programme management — completely tailored to your institution's needs.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-lg bg-orange-500 px-8 py-3.5 text-sm font-semibold transition hover:bg-orange-600"
            >
              Request a Campus Session
            </Link>
            <Link
              href="/training"
              className="rounded-lg border border-white/30 px-8 py-3.5 text-sm font-semibold transition hover:bg-white/10"
            >
              View All Training Programs
            </Link>
          </div>
        </AnimateOnScroll>
      </section>
    </>
  );
}
