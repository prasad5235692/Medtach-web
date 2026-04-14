import AnimateOnScroll from "@/components/AnimateOnScroll";
import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

const branches = [
  {
    id: 1,
    name: "Thanjavur — Branch 1",
    address: "No.7, 2nd Floor, Selvam Towers, New Housing Unit,\nOpp to Alamaram Bus Stand, Thanjavur — 613005",
    phone: "+91-81227-52103",
    email: "hello@medtechcareer.com",
    mapQuery: "MedTech+Career+Medical+Coding+Academy+Thanjavur+HO",
    badge: "Main Branch",
    badgeColor: "bg-purple-700",
  },
  {
    id: 2,
    name: "Thanjavur — Branch 2",
    address: "Raja Serafoji Govt College,\nOpp to New Housing Unit, Thanjavur — 613005",
    phone: "+91-93422-32855",
    email: "thanjavur2@medtechcareer.com",
    mapQuery: "MedTech+Career+Medical+Coding+Academy+Thanjavur",
    badge: "Thanjavur",
    badgeColor: "bg-orange-500",
  },
  {
    id: 3,
    name: "Trichy — Branch 3",
    address: "3rd Floor, Rockfort Towers, 52, Salai Rd,\nAnnamalai Nagar, Woraiyur, Trichy — 620001",
    phone: "+91-73058-28229",
    email: "trichy@medtechcareer.com",
    mapQuery: "MedTech+Career+Medical+Coding+Academy+Trichy",
    badge: "Trichy",
    badgeColor: "bg-teal-600",
  },
];

export const metadata = {
  title: "Our Branches — Medtech Career",
};

export default function BranchesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#faf5ff] pb-20 pt-36">
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
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-purple-700">Find Us Near You</p>
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Our <span className="text-purple-700">Branch Locations</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base text-gray-500">Medtech Career operates across Tamil Nadu with branches in Thanjavur and Trichy. Visit any branch for a free counselling session, course demo, or to enrol directly.</p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Branch Cards */}
      <section className="relative bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {branches.map((branch, i) => (
              <AnimateOnScroll key={branch.id} animation="fade-up" delay={i * 100}>
                <div className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  {/* card header */}
                  <div className="relative overflow-hidden rounded-t-2xl bg-[#f8fafc] px-6 py-8">
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 opacity-[0.04]"
                      style={{
                        backgroundImage: "linear-gradient(#7E22CE 1px, transparent 1px), linear-gradient(to right, #7E22CE 1px, transparent 1px)",
                        backgroundSize: "32px 32px",
                      }}
                    />
                    <span className={`relative mb-3 inline-block rounded-full px-3 py-1 text-xs font-semibold text-white ${branch.badgeColor}`}>{branch.badge}</span>
                    <h2 className="relative text-lg font-bold text-gray-900">{branch.name}</h2>
                  </div>

                  {/* card body */}
                  <div className="flex flex-1 flex-col gap-4 p-6">
                    {/* Address */}
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-purple-700" />
                      <p className="text-sm text-gray-600 whitespace-pre-line">{branch.address}</p>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 shrink-0 text-purple-700" />
                      <a href={`tel:${branch.phone.replace(/[\s-]/g, "")}`} className="text-sm font-medium text-gray-700 hover:text-purple-700 transition">
                        {branch.phone}
                      </a>
                    </div>

                    {/* Email */}
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 shrink-0 text-purple-700" />
                      <a href={`mailto:${branch.email}`} className="text-sm font-medium text-gray-700 hover:text-purple-700 transition break-all">
                        {branch.email}
                      </a>
                    </div>

                    {/* Map link */}
                    <div className="mt-auto pt-4">
                      <a href={`https://www.google.com/maps/search/?api=1&query=${branch.mapQuery}`} target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-purple-200 bg-purple-50 px-4 py-2.5 text-sm font-semibold text-purple-700 transition hover:bg-purple-100">
                        <MapPin className="h-4 w-4" />
                        View on Google Maps
                      </a>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Classroom Advantage */}
      <section className="relative overflow-hidden bg-[#f8fafc] py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(#7E22CE 1px, transparent 1px), linear-gradient(to right, #7E22CE 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <AnimateOnScroll animation="fade-up">
            <SectionHeading center label="Why Visit in Person" title="The Classroom Advantage" subtitle="Our classroom sessions are designed to deliver hands-on, projector-based training that replicates actual US healthcare BPO workflows." />
          </AnimateOnScroll>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: "🖥️", title: "Projector-Based Training", desc: "Live demonstrations using actual coding books, software tools, and case studies." },
              { icon: "🤝", title: "Direct Faculty Interaction", desc: "Ask questions, get real-time answers, and build relationships with expert trainers." },
              { icon: "📋", title: "Mock Test & Practice Lab", desc: "Regular mock tests and practice sessions to prepare for AAPC/AHIMA certification exams." },
              { icon: "📣", title: "Free Counselling Session", desc: "Walk in for a free, no-obligation career counselling session to find the right course." },
            ].map((item, i) => (
              <AnimateOnScroll key={item.title} animation="fade-up" delay={i * 100}>
                <div className="flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                  <span className="text-3xl">{item.icon}</span>
                  <h3 className="mt-4 font-bold text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">{item.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-6">
          <AnimateOnScroll animation="fade-up">
            <div className="overflow-hidden rounded-2xl border border-gray-100 bg-[#faf5ff] p-8 text-center shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-widest text-purple-700">Office Hours</p>
              <h2 className="mt-2 text-2xl font-bold text-gray-900">When Can You Visit Us?</h2>
              <div className="mt-8 overflow-hidden rounded-xl border border-gray-200 bg-white">
                <table className="w-full text-sm">
                  <tbody>
                    {[
                      { day: "Monday — Friday", hours: "9:00 AM – 6:00 PM" },
                      { day: "Saturday", hours: "9:00 AM – 2:00 PM" },
                      { day: "Sunday", hours: "Closed" },
                    ].map((row, i) => (
                      <tr key={row.day} className={i % 2 === 0 ? "bg-white" : "bg-purple-50"}>
                        <td className="px-5 py-3 font-medium text-gray-700 text-left">{row.day}</td>
                        <td className="px-5 py-3 text-gray-500 text-right">{row.hours}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gray-900 py-20 text-center text-white">
        <div aria-hidden="true" className="pointer-events-none absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-purple-700/25 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-orange-500/15 blur-3xl" />
        <AnimateOnScroll animation="fade-up">
          <div className="relative">
            <h2 className="text-2xl font-bold sm:text-3xl">Ready to Enrol? Visit Your Nearest Branch</h2>
            <p className="mx-auto mt-3 max-w-lg text-sm text-gray-300">Walk in anytime during office hours for a free demo class, course counselling, and to meet our faculty team.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link href="/courses" className="rounded-lg bg-orange-500 px-8 py-3.5 text-sm font-semibold transition hover:bg-orange-600">
                Explore Courses
              </Link>
              <Link href="/contact" className="rounded-lg border border-white/30 px-8 py-3.5 text-sm font-semibold transition hover:border-white/50 hover:bg-white/10">
                Contact Us
              </Link>
            </div>
          </div>
        </AnimateOnScroll>
      </section>
    </>
  );
}
