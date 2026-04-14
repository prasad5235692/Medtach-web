import AnimateOnScroll from "@/components/AnimateOnScroll";
import { courses, getCourseBySlug } from "@/data/courses";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Clock, Users, BarChart2, Stethoscope, BookOpen, Trophy, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";

const categoryIcon = {
  Healthcare:  Stethoscope,
  School:      BookOpen,
  Competitive: Trophy,
};

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return {};
  return { title: `${course.title} — Medtech Career` };
}

export default async function CourseDetailPage({ params }) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();
  const CourseIcon = categoryIcon[course.category] ?? BookOpen;

  const faqs = [
    {
      q: "Who can take these courses?",
      a: "Anyone with a Medical, Paramedical, or Life Science background can enrol. These courses are suitable for fresh graduates, working professionals, and anyone looking to start a career in healthcare coding.",
    },
    {
      q: "What jobs can I get after completing this course?",
      a: "Graduates are placed in leading healthcare BPOs and MNCs as Medical Coders, Medical Billers, Risk Adjustment Coders, CDI Specialists, and Healthcare IT professionals.",
    },
    {
      q: "Are these courses recognised internationally?",
      a: "Yes. Medtech Career certificates are accepted by healthcare BPOs across India. Our CPC and CRC programmes prepare you for globally recognised AAPC certifications.",
    },
    {
      q: "How long does it take to complete the course?",
      a: `The ${course.title} course duration is ${course.duration}. Both weekday and weekend batches are available to suit your schedule.`,
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#faf5ff] pb-16 pt-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#7E22CE 1px, transparent 1px), linear-gradient(to right, #7E22CE 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Main */}
            <div className="lg:col-span-2">
              <AnimateOnScroll animation="fade-up">
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-purple-700">
                  {course.category}
                </p>
                <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">{course.title}</h1>
                <p className="mt-5 text-base leading-relaxed text-gray-500">
                  {course.description}
                </p>
                <div className="mt-7 flex flex-wrap gap-6 text-sm text-gray-400">
                  <span className="flex items-center gap-1.5"><Clock size={14} /> Duration: <strong className="text-gray-700 ml-0.5">{course.duration}</strong></span>
                  <span className="flex items-center gap-1.5"><Users size={14} /> Students: <strong className="text-gray-700 ml-0.5">{course.students}</strong></span>
                  <span className="flex items-center gap-1.5"><BarChart2 size={14} /> Level: <strong className="text-gray-700 ml-0.5">{course.level}</strong></span>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay={200}>
                <div className="mt-12">
                  <h2 className="text-xl font-bold text-gray-900">Curriculum Overview</h2>
                  <ol className="mt-5 flex flex-col gap-3">
                    {course.modules.map((m, i) => (
                      <li key={m} className="flex items-start gap-4 rounded-xl border border-gray-100 bg-white px-5 py-4 shadow-sm">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-purple-700 text-xs font-bold text-white">
                          {i + 1}
                        </span>
                        <span className="text-sm text-gray-600">{m}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </AnimateOnScroll>
            </div>

            {/* Sidebar */}
            <AnimateOnScroll animation="fade-left" delay={300}>
              <div className="sticky top-24 overflow-hidden rounded-2xl border border-gray-100 bg-white p-7 shadow-md">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-50 text-purple-700">
                  <CourseIcon size={26} strokeWidth={1.6} />
                </div>
                <h3 className="mt-4 text-lg font-bold text-gray-900">Course Highlights</h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {course.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-purple-700" />
                      <span className="text-sm text-gray-600">{h}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="mt-7 block rounded-lg bg-purple-700 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-purple-800"
                >
                  Enroll Now
                </Link>
                <Link
                  href="/contact"
                  className="mt-3 block rounded-lg border border-gray-200 px-6 py-3 text-center text-sm font-semibold text-gray-600 transition hover:border-purple-300 hover:text-purple-700"
                >
                  Talk to a Counsellor
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Topics Covered */}
      {course.topics && (
        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-6">
            <AnimateOnScroll animation="fade-up">
              <h2 className="text-2xl font-bold text-gray-900">Topics Covered</h2>
              <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {course.topics.map((t) => (
                  <li key={t} className="flex items-start gap-3 rounded-xl border border-purple-100 bg-purple-50/50 px-4 py-3">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-purple-700" />
                    <span className="text-sm text-gray-700">{t}</span>
                  </li>
                ))}
              </ul>
            </AnimateOnScroll>
          </div>
        </section>
      )}

      {/* Training Details */}
      {course.trainingDetails && (
        <section className="bg-[#f8fafc] py-16">
          <div className="mx-auto max-w-7xl px-6">
            <AnimateOnScroll animation="fade-up">
              <h2 className="text-2xl font-bold text-gray-900">Training Programme Details</h2>
              <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                <table className="w-full text-sm">
                  <tbody>
                    {Object.entries(course.trainingDetails).map(([key, value], i) => (
                      <tr key={key} className={i % 2 === 0 ? "bg-white" : "bg-purple-50/40"}>
                        <td className="border-b border-gray-100 px-6 py-4 font-semibold capitalize text-gray-700 w-48">
                          {key.replace(/([A-Z])/g, " $1").trim()}
                        </td>
                        <td className="border-b border-gray-100 px-6 py-4 text-gray-500">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      )}

      {/* Salient Features */}
      {course.features && (
        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-6">
            <AnimateOnScroll animation="fade-up">
              <h2 className="text-2xl font-bold text-gray-900">Salient Features</h2>
              <ul className="mt-6 flex flex-col gap-3">
                {course.features.map((f, i) => (
                  <AnimateOnScroll key={f} animation="fade-up" delay={i * 60}>
                    <li className="flex items-start gap-4 rounded-xl border border-gray-100 bg-white px-5 py-4 shadow-sm">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-700 text-xs font-bold text-white">
                        {i + 1}
                      </span>
                      <span className="text-sm text-gray-600">{f}</span>
                    </li>
                  </AnimateOnScroll>
                ))}
              </ul>
            </AnimateOnScroll>
          </div>
        </section>
      )}

      {/* Study Materials */}
      {course.studyMaterials && (
        <section className="bg-[#f8fafc] py-16">
          <div className="mx-auto max-w-7xl px-6">
            <AnimateOnScroll animation="fade-up">
              <h2 className="text-2xl font-bold text-gray-900">Study Materials Included</h2>
              <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {course.studyMaterials.map((m) => (
                  <li key={m} className="flex items-center gap-3 rounded-xl border border-green-100 bg-green-50/50 px-4 py-3">
                    <CheckCircle2 size={16} className="shrink-0 text-green-600" />
                    <span className="text-sm font-medium text-gray-700">{m}</span>
                  </li>
                ))}
              </ul>
            </AnimateOnScroll>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-6">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <div className="mt-6 flex flex-col gap-4">
              {faqs.map((faq) => (
                <details key={faq.q} className="group rounded-xl border border-gray-100 bg-[#f8fafc] px-5 py-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-2 font-semibold text-gray-800">
                    {faq.q}
                    <ChevronDown size={16} className="shrink-0 text-purple-700 transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-gray-500">{faq.a}</p>
                </details>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Enroll CTA */}
      <section className="relative overflow-hidden bg-purple-700 py-14 text-white text-center">
        <AnimateOnScroll animation="fade-up">
          <h2 className="text-2xl font-bold sm:text-3xl">Ready to Start — {course.title}?</h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-purple-200">
            2,500+ students trained and placed. Join Medtech Career and launch your healthcare coding career today.
          </p>
          <div className="mt-6 flex justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="rounded-lg bg-white px-7 py-3 text-sm font-semibold text-purple-700 transition hover:bg-purple-50"
            >
              Enroll Now
            </Link>
            <Link
              href="/courses"
              className="rounded-lg border border-white/30 px-7 py-3 text-sm font-semibold transition hover:bg-white/10"
            >
              All Courses
            </Link>
          </div>
        </AnimateOnScroll>
      </section>

      {/* Other courses */}
      <section className="bg-[#f8fafc] py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-xl font-bold text-gray-900">Explore Other Courses</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {courses
              .filter((c) => c.slug !== course.slug)
              .map((c) => (
                <Link
                  key={c.slug}
                  href={`/course/${c.slug}`}
                  className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm text-gray-600 shadow-sm transition hover:border-purple-300 hover:text-purple-700"
                >
                  {c.icon} {c.title}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
