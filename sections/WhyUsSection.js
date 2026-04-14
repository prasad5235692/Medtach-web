import AnimateOnScroll from "@/components/AnimateOnScroll";
import FeatureCard from "@/components/FeatureCard";
import SectionHeading from "@/components/SectionHeading";
import { Target, Award, Video, BadgeCheck, Briefcase, Smartphone } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Job-Oriented Curriculum",
    desc: "Every module is designed around real US healthcare BPO requirements — covering ICD-10-CM, CPT-4, HCPCS, and specialty coding used on the job.",
  },
  {
    icon: Award,
    title: "CPC-Certified Faculty",
    desc: "Learn from CPC-certified trainers with 10+ years of hands-on experience in Medical Coding, Billing, and Clinical Documentation.",
  },
  {
    icon: Video,
    title: "Projector-Based Classroom Training",
    desc: "Interactive sessions using projectors, real medical records, and live coding — combined with live online classes for flexibility.",
  },
  {
    icon: BadgeCheck,
    title: "CPC & AAPC Exam Preparation",
    desc: "We prepare you for the AAPC CPC exam with 8 solved practice papers, timed mocks, and proven easy-learning methodology.",
  },
  {
    icon: Briefcase,
    title: "Assured Placement Support",
    desc: "4,000+ graduates placed in 50+ top MNCs and healthcare BPOs. Our certificates are recognised pan-India by all major employers.",
  },
  {
    icon: Smartphone,
    title: "Flexible Online & Offline Modes",
    desc: "Choose classroom training at any of our 3 branches or attend live online sessions from anywhere — your schedule, your choice.",
  },
];

export default function WhyUsSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Radial dot grid — top-right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-64 w-64 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #7E22CE 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
      {/* Radial dot grid — bottom-left */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #7E22CE 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <AnimateOnScroll animation="fade-up">
          <SectionHeading
            center
            label="Why Medtech Career"
            title="Why Choose Medtech Career?"
            subtitle="20 years of excellence — combining classroom discipline with flexible online learning for guaranteed career outcomes."
          />
        </AnimateOnScroll>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <AnimateOnScroll key={f.title} animation="fade-up" delay={i * 100}>
              <FeatureCard icon={f.icon} title={f.title} description={f.desc} />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
  