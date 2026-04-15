import Link from "next/link";
import { Building2, Users, TrendingUp, Award } from "lucide-react";

const highlights = [
  {
    icon: Building2,
    title: "Founded 2015",
    desc: "A decade of delivering certified healthcare education across India.",
  },
  {
    icon: Users,
    title: "500+ Partners",
    desc: "Hospitals, clinics, and healthcare BPOs trust us for team training.",
  },
  {
    icon: TrendingUp,
    title: "95% Pass Rate",
    desc: "Our certification prep programmes consistently outperform national averages.",
  },
  {
    icon: Award,
    title: "AAPC & AHIMA Aligned",
    desc: "Curriculum developed in partnership with credentialling bodies.",
  },
];

export const metadata = {
  title: "About — MedTech Business",
};

export default function BusinessAboutPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-linear-to-br from-[#042a2b] to-[#0a4d4f] py-20 text-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-400">About Us</p>
          <h1 className="mt-3 text-4xl font-extrabold md:text-5xl">
            The Trusted Partner for Healthcare Learning
          </h1>
          <p className="mt-5 text-base text-teal-100/80">
            MedTech Business is the enterprise arm of Medtech Career — India's
            leading healthcare education platform.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="prose prose-gray max-w-none text-base leading-relaxed text-gray-600">
            <h2 className="text-2xl font-bold text-gray-900">Our Story</h2>
            <p>
              Medtech Career was founded in 2015 by a group of healthcare
              professionals who saw a critical gap: skilled medical coders and
              billers were in short supply while hospitals struggled with
              revenue leakage and compliance penalties. We set out to close
              that gap with industry-grade education.
            </p>
            <p className="mt-4">
              As our individual-learner platform grew, enterprise clients began
              asking for something more structured — dedicated cohorts, custom
              curricula, and team-level reporting. That demand gave birth to
              <strong className="text-teal-700"> MedTech Business</strong>, the
              organisation-facing arm of our platform.
            </p>
            <p className="mt-4">
              Today we partner with 500+ healthcare organisations, from
              independent clinics to multi-city hospital groups, delivering
              programmes that measurably improve coding accuracy, reduce claim
              denials, and accelerate certification timelines.
            </p>
          </div>

          {/* Highlights */}
          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {highlights.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                  <Icon size={22} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{title}</p>
                  <p className="mt-1 text-sm text-gray-500">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal-50 py-16">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-2xl font-extrabold text-gray-900">
            Ready to partner with us?
          </h2>
          <p className="mt-3 text-sm text-gray-500">
            Let's build a customised learning programme for your organisation.
          </p>
          <Link
            href="/business/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-teal-600 px-7 py-3 text-sm font-semibold text-white transition hover:bg-teal-700"
          >
            Contact Our Team
          </Link>
        </div>
      </section>
    </div>
  );
}
