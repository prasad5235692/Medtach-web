import AnimateOnScroll from "@/components/AnimateOnScroll";
import { GraduationCap, Briefcase, Users, Star } from "lucide-react";

const stats = [
  { number: "4,000+", label: "Candidates Placed",   icon: GraduationCap },
  { number: "95%",    label: "Placement Rate",       icon: Briefcase },
  { number: "50+",    label: "MNC Hiring Partners",  icon: Users },
  { number: "20+",    label: "Years of Excellence",  icon: Star },
];

export default function StatsSection() {
  return (
    <section
      className="relative py-20 text-white"
      style={{
        backgroundImage: "url('/background/blue-ice-cubes-with-white-background-scaled.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
<div className="absolute inset-0 bg-black/50"></div>
      <div className="relative mx-auto max-w-7xl px-6">
        <AnimateOnScroll animation="fade-down">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Numbers That Speak for Themselves
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((s, i) => {
            const Icon = s.icon;

            return (
              <AnimateOnScroll
                key={s.label}
                animation="fade-up"
                delay={i * 100}
              >
                <div className="group flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:shadow-lg">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15 backdrop-blur transition-colors group-hover:bg-white/25">
                    <Icon size={28} />
                  </div>
                  <span className="text-3xl font-black sm:text-4xl">
                    {s.number}
                  </span>
                  <span className="text-sm text-purple-200">{s.label}</span>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}