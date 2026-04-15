import Link from "next/link";
import { Monitor, CheckCircle2, ArrowRight, Play, Shield, Zap, Globe } from "lucide-react";

export const metadata = {
  title: "Our Platform — MedTech Business",
  description: "Take a feature tour of the MedTech Business LMS built for healthcare organisations.",
};

const features = [
  {
    icon: Play,
    title: "On-Demand Video Library",
    desc: "40+ expert-led courses accessible 24/7. HD video, downloadable transcripts, chapter bookmarks, and in-video quizzes to boost retention.",
  },
  {
    icon: Zap,
    title: "AI-Powered Recommendations",
    desc: "Our platform analyses each learner's role, progress, and skill gaps — then surfaces the most relevant next courses automatically.",
  },
  {
    icon: Globe,
    title: "Multi-Branch Support",
    desc: "Manage learners across all your clinics and hospitals from a single admin console. Assign content by department, location, or role.",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    desc: "SOC 2-aligned infrastructure, SSO support, role-based access controls, and full audit logs for compliance-sensitive organisations.",
  },
];

const platformHighlights = [
  "Intuitive learner dashboard with progress tracking",
  "Admin console for user management, content assignment, and reporting",
  "Mobile-responsive for on-the-go access from any device",
  "Offline mode for learners with intermittent connectivity",
  "Custom learning paths tailored to each role or department",
  "In-platform assessments with instant grading and explanations",
  "Certifications and digital badges on course completion",
  "SCORM/xAPI import for your existing content",
];

export default function PlatformPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-linear-to-br from-[#0d0422] via-[#1a0535] to-[#0f172a] py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-600/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-purple-300">
            <Monitor size={13} /> Our Platform
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-5xl">
            A Learning Platform Built{" "}
            <span className="text-orange-400">
              for Healthcare
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-purple-100/80">
            Purpose-built for medical coding, billing, and compliance training — not a generic
            LMS retrofitted for healthcare. Every feature is designed around how your teams learn.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/business/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-purple-700 px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-purple-600"
            >
              Request a Live Demo <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Feature cards */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-purple-700">Platform Features</p>
            <h2 className="mt-3 text-3xl font-extrabold text-gray-900">Everything your team needs to learn</h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-start gap-5 rounded-2xl border border-gray-100 p-6 shadow-sm transition hover:border-purple-200 hover:shadow-md">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-700">
                  <Icon size={24} />
                </span>
                <div>
                  <h3 className="text-base font-bold text-gray-900">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Highlights */}
      <section className="bg-linear-to-br from-purple-50 to-purple-50 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Built to scale with your organisation</h2>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {platformHighlights.map((h) => (
              <li key={h} className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-purple-700" />
                <span className="text-sm text-gray-700">{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Admin vs Learner view */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-purple-100 bg-purple-50 p-8">
              <h3 className="text-xl font-bold text-purple-950">For Learners</h3>
              <p className="mt-3 text-sm text-purple-900">
                A clean, distraction-free interface that puts courses, progress, and deadlines front and centre.
                Learners stay motivated with streaks, badges, and peer leaderboards.
              </p>
              <ul className="mt-5 flex flex-col gap-2">
                {["Personalised course feed", "Progress tracker & streaks", "Digital certificates", "Mobile-friendly design"].map((i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-purple-900">
                    <CheckCircle2 size={15} className="text-purple-700" /> {i}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900">For Admins & L&D Managers</h3>
              <p className="mt-3 text-sm text-gray-600">
                A powerful admin console that gives complete visibility over every learner, team, and branch —
                with actionable insights to drive adoption.
              </p>
              <ul className="mt-5 flex flex-col gap-2">
                {["Bulk user import & role assignment", "Content assignment by department", "Real-time completion dashboards", "Custom report exports (CSV, PDF)"].map((i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 size={15} className="text-purple-700" /> {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-linear-to-r from-purple-800 to-purple-700 py-16">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white">See the platform in action</h2>
          <p className="mt-4 text-base text-purple-100">
            Book a 30-minute live demo and we'll walk you through every feature relevant to your team.
          </p>
          <Link
            href="/business/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-purple-800 shadow transition hover:bg-purple-50"
          >
            Book Platform Demo <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}
