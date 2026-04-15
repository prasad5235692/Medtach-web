import AnimateOnScroll from "@/components/AnimateOnScroll";
import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";

const team = [
  { name: "Dr. Kavitha Rajan",   role: "Founder & Director",            avatar: "KR", bg: "bg-purple-700" },
  { name: "Mr. Senthil Kumar",   role: "Head of Training & Operations",  avatar: "SK", bg: "bg-orange-500" },
  { name: "Dr. Meena Iyer",      role: "Lead Faculty — Medical Coding",  avatar: "MI", bg: "bg-purple-600" },
  { name: "Ms. Rekha Venkatesh", role: "Lead Faculty — Medical Billing", avatar: "RV", bg: "bg-teal-600" },
];

const milestones = [
  { year: "2003", text: "Medtech Career founded in Thanjavur as a classroom Medical Coding training centre." },
  { year: "2008", text: "Opened second branch in Thanjavur and expanded into Medical Billing programmes." },
  { year: "2015", text: "Crossed 1,000 placements and established our Trichy branch for broader reach." },
  { year: "2019", text: "Launched fully live online training platform alongside classroom sessions." },
  { year: "2022", text: "Surpassed 3,000 successful placements across 50+ MNCs and healthcare BPOs." },
  { year: "2026", text: "4,000+ placements, 95% placement rate, and a strong presence across Tamil Nadu." },
];

export const metadata = {
  title: "About Us — Medtech Career",
};

export default function AboutUsPage() {
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
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-purple-700">Our Story</p>
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              20 Years of Excellence in{" "}
              <span className="text-purple-700">Medical Career Training</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base text-gray-500">
              Medtech Career is a leader in providing Medical Coding training and placement services
              across Tamil Nadu. We are building a platform where life science graduates can explore
              exciting and lucrative careers in the US healthcare industry.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Who We Are + Mission */}
      <section className="relative overflow-hidden bg-white py-20">
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-purple-100/30 blur-3xl" />
        <div className="page-container relative grid grid-cols-1 gap-12 sm:grid-cols-2">
          <AnimateOnScroll animation="fade-right">
            <div>
              <SectionHeading label="Who We Are" title="An Established Training & Placement Centre" />
              <p className="mt-5 text-sm leading-relaxed text-gray-500">
                Medtech Career is a certified, well-established Training, Placement, and Certification centre
                providing projector-based intensive classroom training — combined with live online sessions —
                for all Medical, Paramedical, and Life Science graduates and post-graduates.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-gray-500">
                Our programmes cover Medical Terminology, ICD-10-CM, CPT-4, and key specialties including
                Radiology, Surgery, E/M, Anesthesia, and Pathology — preparing students for successful
                US healthcare BPO careers. All Medtech Career certificates are valid and accepted by
                healthcare BPOs pan-India.
              </p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-left">
            <div>
              <SectionHeading label="Our Mission & Vision" title="What We Stand For" />
              <p className="mt-4 text-sm leading-relaxed text-gray-500">
                Our mission is to empower every life science graduate with industry-relevant skills,
                internationally recognised certifications, and guaranteed placement support — making
                healthcare coding careers accessible to all.
              </p>
              <ul className="mt-5 flex flex-col gap-4">
                {[
                  "Integrity in everything we teach",
                  "Results-first, certification-focused curriculum",
                  "Assured placement support for every graduate",
                  "Continuous curriculum improvement with industry feedback",
                  "Accessible education for life science graduates across Tamil Nadu",
                ].map((v) => (
                  <li key={v} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple-700 text-xs text-white">
                      ✓
                    </span>
                    <span className="text-sm text-gray-600">{v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-purple-700 py-14 text-white">
        <div className="page-container">
          <div className="grid grid-cols-2 gap-6 text-center sm:grid-cols-4">
            {[
              { label: "Courses Offered",     value: "14+" },
              { label: "Years of Experience", value: "20+" },
              { label: "Qualified Faculties", value: "25+" },
              { label: "Candidates Placed",   value: "4,000+" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-4xl font-black">{s.value}</p>
                <p className="mt-1 text-sm text-purple-200">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Experience */}
      <section className="relative overflow-hidden bg-[#f8fafc] py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#7E22CE 1px, transparent 1px), linear-gradient(to right, #7E22CE 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="page-container relative">
          <AnimateOnScroll animation="fade-up">
            <SectionHeading
              center
              label="Training Experience"
              title="How We Train"
              subtitle="Our training methodology is designed to simulate real healthcare BPO work environments — ensuring students are job-ready from day one."
            />
          </AnimateOnScroll>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: "🖥️", title: "Projector-Based Classroom", desc: "Intensive classroom sessions with live demonstrations using actual coding books and software." },
              { icon: "📡", title: "Live Online Sessions",       desc: "Real-time online training with direct interaction — for students who cannot attend in person." },
              { icon: "📋", title: "Certification Focus",        desc: "Every programme is oriented towards AAPC and AHIMA certifications with solved exam papers." },
              { icon: "🏆", title: "Placement Assurance",        desc: "100% placement support until you land your first job. Our network covers 50+ MNCs and healthcare BPOs." },
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

      {/* Timeline */}
      <section className="relative overflow-hidden bg-white py-20">
        <div className="page-container relative">
          <AnimateOnScroll animation="fade-up">
            <SectionHeading center label="Journey" title="Our Milestones" />
          </AnimateOnScroll>

          <div className="relative mx-auto mt-14 max-w-4xl">
            {/* Spine — left edge on mobile, center on desktop */}
            <span
              aria-hidden="true"
              className="absolute left-4 top-3 h-[calc(100%-1.5rem)] w-px bg-gradient-to-b from-purple-400 via-purple-200 to-transparent lg:left-1/2 lg:-translate-x-px"
            />

            <ol className="space-y-8 lg:space-y-0">
              {milestones.map((m, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <AnimateOnScroll
                    key={m.year}
                    animation={isLeft ? "fade-right" : "fade-left"}
                    delay={i * 80}
                  >
                    <li className={`relative lg:flex ${i < milestones.length - 1 ? "lg:pb-12" : ""}`}>
                      <div
                        className={`relative ${
                          isLeft
                            ? "pl-12 lg:w-1/2 lg:pl-0 lg:pr-12"
                            : "pl-12 lg:ml-auto lg:w-1/2 lg:pl-12 lg:pr-0"
                        }`}
                      >
                        {/* Dot — mobile (left spine) */}
                        <span className="absolute left-0 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-purple-700 text-[10px] font-bold text-white shadow-md shadow-purple-200/60 ring-4 ring-white lg:hidden">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {/* Dot — desktop (center spine) */}
                        <span
                          className={`absolute top-4 z-10 hidden h-10 w-10 items-center justify-center rounded-full bg-purple-700 text-xs font-bold text-white shadow-lg shadow-purple-300/50 ring-4 ring-white lg:flex ${
                            isLeft ? "-right-5" : "-left-5"
                          }`}
                        >
                          {m.year.slice(2)}
                        </span>
                        {/* Card */}
                        <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-100 hover:shadow-lg">
                          <div className="h-1 bg-gradient-to-r from-purple-600 to-purple-300" />
                          <div className="p-6">
                            <span className="text-xs font-bold uppercase tracking-widest text-purple-700">
                              {m.year}
                            </span>
                            <div className="mb-3 mt-2 h-px w-8 rounded-full bg-purple-100" />
                            <p className="text-sm leading-relaxed text-gray-500">{m.text}</p>
                          </div>
                        </div>
                      </div>
                    </li>
                  </AnimateOnScroll>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-[#f8fafc] py-20">
        <div className="page-container">
          <AnimateOnScroll animation="fade-up">
            <SectionHeading center label="Leadership" title="Meet Our Management Team" />
          </AnimateOnScroll>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((t, i) => (
              <AnimateOnScroll key={t.name} animation="fade-up" delay={i * 100}>
                <div className="group flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-7 text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className={`flex h-16 w-16 items-center justify-center rounded-full ${t.bg} text-lg font-bold text-white shadow-md`}>
                    {t.avatar}
                  </div>
                  <h3 className="mt-4 font-bold text-gray-900">{t.name}</h3>
                  <p className="mt-1 text-xs text-gray-400">{t.role}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/our-team"
              className="inline-flex items-center gap-2 rounded-lg border border-purple-200 bg-purple-50 px-6 py-2.5 text-sm font-semibold text-purple-700 transition hover:bg-purple-100"
            >
              Meet the Full Team →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gray-900 py-20 text-center text-white">
        <div aria-hidden="true" className="pointer-events-none absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-purple-700/25 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-orange-500/15 blur-3xl" />
        <AnimateOnScroll animation="fade-up">
          <div className="relative">
            <h2 className="text-2xl font-bold sm:text-3xl">Ready to Start Your Healthcare Career?</h2>
            <p className="mx-auto mt-3 max-w-lg text-sm text-gray-300">
              Explore our courses, visit a branch, or speak to a counsellor. We are here to guide your
              journey into the healthcare BPO industry.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/courses"
                className="rounded-lg bg-orange-500 px-8 py-3.5 text-sm font-semibold transition hover:bg-orange-600"
              >
                Explore Courses
              </Link>
              <Link
                href="/branches"
                className="rounded-lg border border-white/30 px-8 py-3.5 text-sm font-semibold transition hover:border-white/50 hover:bg-white/10"
              >
                Find a Branch
              </Link>
            </div>
          </div>
        </AnimateOnScroll>
      </section>
    </>
  );
}
