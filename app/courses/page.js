import AnimateOnScroll from "@/components/AnimateOnScroll";
import CourseCard from "@/components/CourseCard";
import SectionHeading from "@/components/SectionHeading";
import { courses } from "@/data/courses";
import Link from "next/link";

export const metadata = {
  title: "All Courses — Medtech Career",
};

export default function CoursesPage() {
  const healthcare = courses.filter((c) => c.category === "Healthcare");

  return (
    <>
      <section className="relative overflow-hidden bg-[#faf5ff] pb-16 pt-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle, #7E22CE 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <AnimateOnScroll animation="fade-down">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-purple-700">Explore</p>
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">All Courses</h1>
            <p className="mx-auto mt-4 max-w-xl text-base text-gray-500">
              Comprehensive, job-oriented Medical Coding and Billing training — from beginner fundamentals to advanced CPC certification preparation.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Quick path guide */}
      <section className="bg-purple-700 py-10 text-white">
        <div className="page-container">
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-purple-200 uppercase tracking-widest">Recommended Learning Path</p>
              <p className="mt-1 text-base font-bold">BMCT → AMCT → CPC Certification → Specialisation (CRC or CDM)</p>
            </div>
            <Link
              href="/training"
              className="shrink-0 rounded-lg border border-white/30 px-6 py-2.5 text-sm font-semibold transition hover:bg-white/10"
            >
              View Training Details →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="page-container">
          <AnimateOnScroll animation="fade-up">
            <SectionHeading label="Healthcare Programmes" title="Medical Coding & Billing Courses" />
          </AnimateOnScroll>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {healthcare.map((c, i) => (
              <AnimateOnScroll key={c.slug} animation="fade-up" delay={i * 80}>
                <CourseCard course={c} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Placement CTA strip */}
      <section className="bg-[#f8fafc] py-14">
        <div className="page-container">
          <div className="grid grid-cols-1 gap-6 rounded-2xl border border-purple-100 bg-white p-8 shadow-sm sm:grid-cols-3 sm:items-center">
            <div className="sm:col-span-2">
              <p className="text-sm font-semibold uppercase tracking-widest text-purple-700">Placement Assurance</p>
              <h3 className="mt-1 text-xl font-bold text-gray-900">4,000+ Graduates Placed in 50+ Top MNCs</h3>
              <p className="mt-2 text-sm text-gray-500">
                All Medtech Career certificates are recognised and accepted by healthcare BPOs across India. Our placement support continues until you land your job.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link
                href="/placements"
                className="block rounded-lg bg-purple-700 px-5 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-purple-800"
              >
                View Placements →
              </Link>
              <Link
                href="/contact"
                className="block rounded-lg border border-purple-200 px-5 py-2.5 text-center text-sm font-semibold text-purple-700 transition hover:bg-purple-50"
              >
                Talk to a Counsellor
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

