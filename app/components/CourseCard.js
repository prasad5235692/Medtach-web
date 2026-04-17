import Link from "next/link";
import { Stethoscope, BookOpen, Trophy, Clock, Users, BarChart2 } from "lucide-react";
import { localizeText } from "@/lib/i18n/content";

const badgeClasses = {
  blue:   "bg-purple-50  text-purple-700  border-purple-200",
  green:  "bg-green-50   text-green-600   border-green-200",
  purple: "bg-purple-50  text-purple-700  border-purple-200",
  orange: "bg-orange-50  text-orange-600  border-orange-200",
};

const categoryIcon = {
  Healthcare:  Stethoscope,
  School:      BookOpen,
  Competitive: Trophy,
};

export default function CourseCard({ course, locale = "en" }) {
  const badge = badgeClasses[course.badgeColor] ?? badgeClasses.blue;
  const Icon = categoryIcon[course.category] ?? BookOpen;

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1.5">
      <div className="relative flex items-start justify-between bg-linear-to-br from-purple-50 to-purple-100/60 px-6 pt-6 pb-5">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm text-purple-700">
          <Icon size={22} strokeWidth={1.8} />
        </div>
        {course.badge && (
          <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${badge}`}>
            {course.badge}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <p className="text-xs font-medium uppercase tracking-widest text-gray-400">
          {course.category}
        </p>
        <h3 className="text-lg font-bold text-gray-900 leading-snug group-hover:text-purple-700 transition-colors">
          {course.title}
        </h3>
        <p className="text-sm leading-relaxed text-gray-500">{course.description}</p>

        <div className="mt-3 flex flex-wrap gap-3 border-t border-gray-100 pt-4 text-xs text-gray-400">
          <span className="flex items-center gap-1.5"><Clock size={12} /> {course.duration}</span>
          <span className="flex items-center gap-1.5"><Users size={12} /> {course.students}</span>
          <span className="flex items-center gap-1.5"><BarChart2 size={12} /> {course.level}</span>
        </div>

        <Link
          href={`/course/${course.slug}`}
          className="mt-4 block rounded-lg bg-purple-700 px-5 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-purple-800"
        >
          {localizeText(locale, "View Course →")}
        </Link>
      </div>
    </div>
  );
}
