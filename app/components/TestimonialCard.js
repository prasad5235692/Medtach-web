import { Star, Quote } from "lucide-react";

export default function TestimonialCard({ testimonial }) {
  const subtitle = testimonial.courseLabel || testimonial.role;

  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Background accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-4 -top-4 h-20 w-20 rounded-full bg-purple-50/60"
      />
      {/* Decorative quote icon */}
      <Quote
        aria-hidden="true"
        size={32}
        className="absolute right-6 top-5 text-purple-100 group-hover:text-purple-200 transition-colors"
      />

      <div className="relative flex flex-1 flex-col">
        {/* Stars */}
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={14}
              className={
                i < testimonial.stars
                  ? "fill-yellow-400 text-yellow-400"
                  : "fill-gray-100 text-gray-200"
              }
            />
          ))}
        </div>

        {/* Quote */}
        <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-600 italic">
          &ldquo;{testimonial.text}&rdquo;
        </p>
      </div>

      {/* Author */}
      <div className="mt-5 flex items-center gap-3 border-t border-gray-50 pt-5">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-purple-600 to-purple-800 text-xs font-bold text-white shadow-sm">
          {testimonial.avatar}
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900">{testimonial.name}</p>
          <p className="text-xs text-gray-400">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
