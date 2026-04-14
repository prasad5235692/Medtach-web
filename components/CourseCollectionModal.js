"use client";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, Clock, Heart, ShoppingCart, Trash2, X } from "lucide-react";

function getCourseIdentifier(course) {
  return course?.courseSlug || course?.id || course?._id || "";
}

function getCourseDurationLabel(course) {
  if (typeof course?.durationWeeks === "number" && course.durationWeeks > 0) {
    return `${course.durationWeeks} week${course.durationWeeks === 1 ? "" : "s"}`;
  }

  if (typeof course?.totalHours === "number" && course.totalHours > 0) {
    return `${course.totalHours} hour${course.totalHours === 1 ? "" : "s"}`;
  }

  return "Self paced";
}

function getCoursePriceLabel(course) {
  if (typeof course?.price === "number" && course.price > 0) {
    return `₹${course.price.toLocaleString("en-IN")}`;
  }

  return "Free";
}

export default function CourseCollectionModal({
  open,
  variant,
  items,
  ready,
  onClose,
  onRemove,
}) {
  if (!open) {
    return null;
  }

  const isCart = variant === "cart";
  const title = isCart ? "Your Cart" : "Your Favorites";
  const description = isCart
    ? "Review the courses you plan to buy."
    : "Your saved courses are listed here.";
  const emptyMessage = isCart
    ? "No courses in your cart yet."
    : "No favorite courses yet.";
  const icon = isCart ? <ShoppingCart size={18} /> : <Heart size={18} />;

  return (
    <div
      className="fixed inset-0 z-220 flex items-center justify-center bg-slate-950/45 p-4 backdrop-blur-sm"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-black/5">
        <div className="flex items-start justify-between border-b border-gray-100 px-6 py-5">
          <div>
            <div className="flex items-center gap-2 text-sm font-semibold text-purple-700">
              {icon}
              <span>{title}</span>
              <span className="rounded-full bg-purple-100 px-2 py-0.5 text-xs text-purple-700">{items.length}</span>
            </div>
            <p className="mt-1 text-sm text-gray-500">{description}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        <div className="max-h-[70vh] overflow-y-auto px-6 py-5">
          {!ready ? (
            <div className="space-y-3">
              {[0, 1, 2].map((index) => (
                <div key={index} className="flex animate-pulse gap-4 rounded-2xl border border-gray-100 p-4">
                  <div className="h-20 w-24 rounded-2xl bg-gray-100" />
                  <div className="flex-1 space-y-2">
                    <div className="h-4 w-2/3 rounded bg-gray-100" />
                    <div className="h-3 w-1/3 rounded bg-gray-100" />
                    <div className="h-3 w-1/2 rounded bg-gray-100" />
                  </div>
                </div>
              ))}
            </div>
          ) : items.length === 0 ? (
            <div className="flex flex-col items-center justify-center gap-3 rounded-3xl border border-dashed border-gray-200 bg-gray-50 px-6 py-16 text-center">
              {isCart ? <ShoppingCart size={30} className="text-gray-300" /> : <Heart size={30} className="text-gray-300" />}
              <p className="text-sm font-medium text-gray-500">{emptyMessage}</p>
              <Link
                href="/my-courses"
                onClick={onClose}
                className="rounded-full bg-purple-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-purple-800"
              >
                Browse Courses
              </Link>
            </div>
          ) : (
            <div className="space-y-3">
              {items.map((course) => (
                <div key={getCourseIdentifier(course)} className="flex flex-col gap-4 rounded-2xl border border-gray-100 p-4 shadow-sm sm:flex-row sm:items-center">
                  <div className="relative h-24 w-full overflow-hidden rounded-2xl bg-purple-50 sm:w-28 sm:min-w-28">
                    {course?.thumbnail ? (
                      <Image
                        src={course.thumbnail}
                        alt={course.title || course.name || "Course"}
                        fill
                        sizes="112px"
                        unoptimized
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center">
                        <BookOpen size={28} className="text-purple-300" />
                      </div>
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-purple-500">
                      {course?.category || (isCart ? "Cart" : "Favorites")}
                    </p>
                    <h3 className="mt-1 line-clamp-2 text-sm font-bold text-gray-900">
                      {course?.title || course?.name || "Untitled Course"}
                    </h3>
                    <div className="mt-2 flex flex-wrap gap-2 text-xs text-gray-500">
                      <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-2.5 py-1">
                        <Clock size={12} />
                        {getCourseDurationLabel(course)}
                      </span>
                      <span className="inline-flex items-center rounded-full bg-purple-50 px-2.5 py-1 font-semibold text-purple-700">
                        {getCoursePriceLabel(course)}
                      </span>
                    </div>
                  </div>

                  <div className="flex shrink-0 items-center gap-2 sm:flex-col sm:items-end">
                    <button
                      type="button"
                      onClick={() => onRemove(course)}
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-red-200 bg-red-50 px-3 py-2 text-xs font-semibold text-red-600 transition hover:bg-red-100"
                    >
                      <Trash2 size={13} />
                      {isCart ? "Remove" : "Unsave"}
                    </button>
                    <Link
                      href={`/my-courses?tab=${variant}`}
                      onClick={onClose}
                      className="text-xs font-medium text-purple-600 transition hover:text-purple-700 hover:underline"
                    >
                      Open full list
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}