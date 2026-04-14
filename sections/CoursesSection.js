import AnimateOnScroll from "@/components/AnimateOnScroll";
import CourseCard from "@/components/CourseCard";
import SectionHeading from "@/components/SectionHeading";
import { courses } from "@/data/courses";
import Link from "next/link";

const featuredSlugs = ["medical-coding", "medical-billing", "cpc-certification"];

export default function CoursesSection() {
  const featured = courses.filter((c) => featuredSlugs.includes(c.slug));

  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-24">
      {/* Subtle grid line pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#7E22CE 1px, transparent 1px), linear-gradient(to right, #7E22CE 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <AnimateOnScroll animation="fade-up">
            <SectionHeading
              label="Popular Courses"
              title="Our Most Sought-After Programmes"
              subtitle="Industry-aligned Medical Coding & Billing courses taught by certified professionals with 10+ years of experience."
            />
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up" delay={200}>
            <Link
              href="/courses"
              className="shrink-0 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-gray-600 shadow-sm transition hover:border-purple-300 hover:text-purple-700"
            >
              View All Courses →
            </Link>
          </AnimateOnScroll>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((course, i) => (
            <AnimateOnScroll key={course.slug} animation="fade-up" delay={i * 100}>
              <CourseCard course={course} />
            </AnimateOnScroll>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Also offering:&nbsp;
            <Link href="/course/amct" className="font-semibold text-purple-700 hover:underline">AMCT</Link>,&nbsp;
            <Link href="/course/crc" className="font-semibold text-purple-700 hover:underline">CRC</Link>,&nbsp;
            <Link href="/course/cdm" className="font-semibold text-purple-700 hover:underline">CDM</Link>&nbsp;and more.&nbsp;
            <Link href="/courses" className="font-semibold text-orange-600 hover:underline">Browse all 7 courses →</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
