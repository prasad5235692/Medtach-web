import AnimateOnScroll from "@/components/AnimateOnScroll";
import CourseCard from "@/components/CourseCard";
import SectionHeading from "@/components/SectionHeading";
import { getCourses } from "@/data/courses";
import Link from "next/link";
import { getLocale } from "@/lib/i18n/server";
import { localizeContent } from "@/lib/i18n/content";

const featuredSlugs = ["medical-coding", "medical-billing", "cpc-certification"];

export default async function CoursesSection() {
  const locale = await getLocale();
  const courses = getCourses(locale);
  const featured = courses.filter((c) => featuredSlugs.includes(c.slug));
  const content = localizeContent(
    {
      label: "Popular Courses",
      title: "Our Most Sought-After Programmes",
      subtitle:
        "Industry-aligned Medical Coding & Billing courses taught by certified professionals with 10+ years of experience.",
      cta: "View All Courses →",
      alsoOffering: "Also offering:",
      more: "and more.",
      browseAll: "Browse all 7 courses →",
    },
    locale,
  );

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
      <div className="page-container relative">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <AnimateOnScroll animation="fade-up">
            <SectionHeading
              label={content.label}
              title={content.title}
              subtitle={content.subtitle}
            />
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up" delay={200}>
            <Link
              href="/courses"
              className="shrink-0 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-gray-600 shadow-sm transition hover:border-purple-300 hover:text-purple-700"
            >
              {content.cta}
            </Link>
          </AnimateOnScroll>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((course, i) => (
            <AnimateOnScroll key={course.slug} animation="fade-up" delay={i * 100}>
              <CourseCard course={course} locale={locale} />
            </AnimateOnScroll>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            {content.alsoOffering}&nbsp;
            <Link href="/course/amct" className="font-semibold text-purple-700 hover:underline">AMCT</Link>,&nbsp;
            <Link href="/course/crc" className="font-semibold text-purple-700 hover:underline">CRC</Link>,&nbsp;
            <Link href="/course/cdm" className="font-semibold text-purple-700 hover:underline">CDM</Link>&nbsp;{content.more}&nbsp;
            <Link href="/courses" className="font-semibold text-orange-600 hover:underline">{content.browseAll}</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
