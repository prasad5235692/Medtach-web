import AnimateOnScroll from "@/components/AnimateOnScroll";
import TestimonialCard from "@/components/TestimonialCard";
import SectionHeading from "@/components/SectionHeading";
import { getTestimonials } from "@/data/testimonials";
import { getLocale } from "@/lib/i18n/server";
import { localizeContent } from "@/lib/i18n/content";

export default async function TestimonialsSection() {
  const locale = await getLocale();
  const testimonials = getTestimonials(locale);
  const heading = localizeContent(
    {
      label: "Student Stories",
      title: "Real Results from Real Students",
      subtitle: "Thousands of students have transformed their careers and cracked their exams with Medtech Career.",
    },
    locale,
  );

  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-24">
      {/* Soft glowing blurred circles */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-1/3 h-72 w-72 rounded-full bg-purple-200/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-0 h-56 w-56 rounded-full bg-orange-200/20 blur-3xl"
      />
      <div className="page-container relative">
        <AnimateOnScroll animation="fade-up">
          <SectionHeading
            center
            label={heading.label}
            title={heading.title}
            subtitle={heading.subtitle}
          />
        </AnimateOnScroll>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <AnimateOnScroll key={t.name} animation="fade-up" delay={i * 100}>
              <TestimonialCard testimonial={t} />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
