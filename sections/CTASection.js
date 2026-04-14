import AnimateOnScroll from "@/components/AnimateOnScroll";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gray-900 py-24 text-white mb-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-purple-700/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-orange-500/15 blur-3xl"
      />
         <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0 L40 20 L20 40 L0 20Z' fill='none' stroke='white' stroke-width='0.8'/%3E%3C/svg%3E\")",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <AnimateOnScroll animation="fade-down">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-orange-400">
            Get Started Today
          </p>
          <h2 className="text-3xl font-bold sm:text-5xl">
            Your Career Breakthrough{" "}
            <span className="text-orange-400">Starts Here</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-gray-300">
            Join over 4,000 graduates who are now working in leading healthcare BPOs and MNCs across India.
            Enrol in a course, attend a free demo class, or just talk to a counsellor — we're here to help.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/courses"
              className="rounded-lg bg-orange-500 px-8 py-3.5 text-sm font-semibold transition hover:bg-orange-600"
            >
              Browse Courses
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-white/30 px-8 py-3.5 text-sm font-semibold transition hover:border-white/50 hover:bg-white/10"
            >
              Talk to a Counsellor
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

      