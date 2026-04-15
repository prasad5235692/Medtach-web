import Link from "next/link";
import { CalendarDays, ArrowRight, MapPin, Clock, Users, Video } from "lucide-react";

export const metadata = {
  title: "Events — MedTech Business",
  description: "Upcoming workshops, live masterclasses, and webinars for healthcare training teams.",
};

const upcomingEvents = [
  {
    type: "Webinar",
    typeColor: "bg-purple-100 text-purple-700",
    icon: Video,
    date: "May 8, 2026",
    time: "3:00 PM – 4:30 PM IST",
    title: "AI-Assisted Coding: Preparing Your Team for 2026 and Beyond",
    desc: "Join our Chief Learning Officer and a guest panel of senior coders to explore how AI coding tools are reshaping the profession — and the skills your team needs to stay ahead.",
    seats: "Open — 200 seats remaining",
    location: "Online (Zoom)",
    href: "/business/contact",
  },
  {
    type: "Workshop",
    typeColor: "bg-purple-100 text-purple-800",
    icon: Users,
    date: "May 22, 2026",
    time: "10:00 AM – 1:00 PM IST",
    title: "Denial Management Masterclass for Billing Supervisors",
    desc: "A hands-on 3-hour workshop covering the top 10 denial categories, root-cause analysis workflows, and AR escalation strategies. Participants receive a certificate of completion.",
    seats: "30 seats — 12 remaining",
    location: "Online (Google Meet)",
    href: "/business/contact",
  },
  {
    type: "Masterclass",
    typeColor: "bg-emerald-100 text-emerald-700",
    icon: CalendarDays,
    date: "June 5, 2026",
    time: "2:00 PM – 3:30 PM IST",
    title: "Building a Learning Culture in Your Healthcare Organisation",
    desc: "A strategic session for L&D managers and HIM directors. Learn how leading hospital groups moved from ad-hoc training to a systematic upskilling engine — and the measurable outcomes that followed.",
    seats: "Open — 150 seats remaining",
    location: "Online (Teams)",
    href: "/business/contact",
  },
  {
    type: "In-Person",
    typeColor: "bg-purple-100 text-purple-700",
    icon: MapPin,
    date: "June 18, 2026",
    time: "9:00 AM – 5:00 PM IST",
    title: "MedTech Business Summit — Bengaluru",
    desc: "India's first dedicated healthcare workforce learning summit. Keynotes, roundtables, and networking sessions for HIM professionals, L&D managers, and C-suite healthcare leaders.",
    seats: "200 seats — 48 remaining",
    location: "The Leela Palace, Bengaluru",
    href: "/business/contact",
  },
  {
    type: "Webinar",
    typeColor: "bg-purple-100 text-purple-700",
    icon: Video,
    date: "July 3, 2026",
    time: "11:00 AM – 12:00 PM IST",
    title: "CPC Exam Strategy: What AAPC Doesn't Tell You",
    desc: "Our top-performing instructor and three recent CPC passers share exam-day tactics, time management strategies, and the coding guidelines most candidates overlook.",
    seats: "Open — No limit",
    location: "Online (Zoom)",
    href: "/business/contact",
  },
];

const pastEvents = [
  { title: "From Skills Gaps to Strategic Wins — March 2026", type: "Webinar" },
  { title: "ICD-10 Updates for 2026: What Every Coder Must Know", type: "Masterclass" },
  { title: "Revenue Cycle Deep Dive — Q4 Denial Trends", type: "Workshop" },
];

export default function EventsPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-linear-to-br from-[#0d0422] via-[#1a0535] to-[#0f172a] py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-600/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-purple-300">
            <CalendarDays size={13} /> Events
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-5xl">
            Upcoming Workshops &{" "}
            <span className="text-orange-400">
              Live Masterclasses
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-purple-100/80">
            Free and paid events for healthcare coding, billing, and L&D professionals.
            Learn from industry experts, network with peers, and leave with actionable insights.
          </p>
        </div>
      </section>

      {/* Events List */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-extrabold text-gray-900">Upcoming Events</h2>
          <div className="mt-8 flex flex-col gap-6">
            {upcomingEvents.map(({ type, typeColor, icon: Icon, date, time, title, desc, seats, location, href }) => (
              <article key={title} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:border-purple-200 hover:shadow-md">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${typeColor}`}>{type}</span>
                  <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                    <span className="flex items-center gap-1"><CalendarDays size={12} /> {date}</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {time}</span>
                    <span className="flex items-center gap-1"><MapPin size={12} /> {location}</span>
                  </div>
                </div>
                <h3 className="mt-3 text-base font-bold text-gray-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-xs text-purple-800">
                    <Users size={13} /> {seats}
                  </span>
                  <Link
                    href={href}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-purple-700 px-4 py-2 text-xs font-semibold text-white transition hover:bg-purple-800"
                  >
                    Register <ArrowRight size={12} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="bg-linear-to-br from-purple-50 to-purple-50 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-extrabold text-gray-900">Past Events — Recordings Available</h2>
          <p className="mt-2 text-sm text-gray-500">Contact us to request access to recorded sessions.</p>
          <ul className="mt-6 flex flex-col gap-3">
            {pastEvents.map(({ title, type }) => (
              <li key={title} className="flex items-center justify-between rounded-xl bg-white p-4 shadow-sm">
                <span className="text-sm font-medium text-gray-700">{title}</span>
                <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-500">{type}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/business/contact"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-purple-800 transition hover:text-purple-700"
          >
            Request Recordings <ArrowRight size={13} />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-linear-to-r from-purple-800 to-purple-700 py-16">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white">Want us to run a private event for your team?</h2>
          <p className="mt-4 text-base text-purple-100">
            We run bespoke workshops and masterclasses for organisations with 20+ participants.
          </p>
          <Link
            href="/business/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-purple-800 shadow transition hover:bg-purple-50"
          >
            Enquire About Private Events <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}
