"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  Heart, ShoppingCart, BookOpen, Clock, Building2,
  Layers3, Check, CheckCircle, X, Search, ArrowRight,
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";
import { fetchStudentCourses } from "@/lib/websiteStudentClient";

const STATUS_COLORS = {
  active: "bg-green-100 text-green-700",
  Active: "bg-green-100 text-green-700",
  published: "bg-blue-100 text-blue-700",
  Published: "bg-blue-100 text-blue-700",
  draft: "bg-amber-100 text-amber-700",
  Draft: "bg-amber-100 text-amber-700",
  default: "bg-gray-100 text-gray-600",
};

function normalizeCategoryList(category) {
  if (Array.isArray(category)) {
    return category.map((value) => String(value || "").trim()).filter(Boolean);
  }

  return String(category || "")
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);
}

function normalizeCourse(course) {
  const title = course?.title || course?.name || "Untitled Course";
  const categoryList = normalizeCategoryList(course?.category);
  const branches = Array.isArray(course?.branches)
    ? course.branches.filter(Boolean)
    : course?.branch
      ? [course.branch]
      : [];
  const hospitals = Array.isArray(course?.hospitals)
    ? course.hospitals.filter(Boolean)
    : course?.hospital
      ? [course.hospital]
      : [];
  const scopeType = course?.scopeType || (hospitals.length ? "hospital" : "branch");
  const courseSlug = course?.courseSlug || course?.courseId || String(course?.id || course?._id || "").slice(-8).toUpperCase();
  const durationType = course?.type || course?.durationType || "Online";

  return {
    ...course,
    id: String(course?.id || course?._id || ""),
    name: title,
    title,
    category: categoryList.join(", "),
    categoryList,
    courseSlug,
    courseId: courseSlug,
    branches,
    hospitals,
    branch: course?.branch || branches[0] || null,
    hospital: course?.hospital || hospitals[0] || null,
    scopeType,
    type: durationType,
    durationType,
    description: course?.description || "",
    price: typeof course?.price === "number" ? course.price : Number(course?.price || 0) || 0,
    currency: course?.currency || "INR",
    status: course?.status || "Published",
    color: course?.color || "#7c3aed",
    thumbnail: course?.thumbnail || "",
  };
}

function getCourseIdentifier(course) {
  return course?.id || course?._id || course?.courseSlug || "";
}

function normalizeCourseError(message) {
  if (!message) {
    return "Unable to load the course catalog.";
  }

  if (/branch/i.test(message)) {
    return "No courses are available right now.";
  }

  return message;
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

function getCoursePlacementLabel(course) {
  const hospitalNames = Array.isArray(course?.hospitals)
    ? course.hospitals.map((hospital) => hospital?.name).filter(Boolean)
    : [];

  if (hospitalNames.length > 0) {
    return hospitalNames.length > 2
      ? `${hospitalNames.slice(0, 2).join(", ")} +${hospitalNames.length - 2}`
      : hospitalNames.join(", ");
  }

  const branchNames = Array.isArray(course?.branches)
    ? course.branches.map((branch) => branch?.name).filter(Boolean)
    : [];

  if (branchNames.length > 0) {
    return branchNames.length > 2
      ? `${branchNames.slice(0, 2).join(", ")} +${branchNames.length - 2}`
      : branchNames.join(", ");
  }

  return course?.scopeType === "hospital" ? "Hospital catalog" : "General catalog";
}

export default function MyCoursesPage() {
  const router = useRouter();
  const params = useSearchParams();
  const { session, loading } = useAuth();
  const { addToCart, removeFromCart, isInCart, toggleWishlist, isInWishlist, cartCount, wishlistCount, ready } = useCart();

  const [courses, setCourses] = useState([]);
  const [coursesLoading, setCoursesLoading] = useState(true);
  const [coursesError, setCoursesError] = useState("");

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [toast, setToast] = useState(null); // { message, type }
  const urlTab = params.get("tab");
  const activeTab = urlTab === "wishlist" || urlTab === "cart" ? urlTab : "all";

  useEffect(() => {
    if (!loading && !session) router.replace("/login");
  }, [loading, session, router]);

  useEffect(() => {
    let cancelled = false;

    const loadCourses = async () => {
      if (loading) {
        return;
      }

      if (!session) {
        setCourses([]);
        setCoursesError("");
        setCoursesLoading(false);
        return;
      }

      setCoursesLoading(true);

      const payload = await fetchStudentCourses();

      if (cancelled) {
        return;
      }

      if (payload?.success) {
        setCourses(Array.isArray(payload.data) ? payload.data.map(normalizeCourse) : []);
        setCoursesError("");
      } else {
        setCourses([]);
        setCoursesError(normalizeCourseError(payload?.message));

        if (/authentication/i.test(payload?.message || "")) {
          router.replace("/login");
        }
      }

      setCoursesLoading(false);
    };

    loadCourses();

    return () => {
      cancelled = true;
    };
  }, [loading, session, router]);

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 2500);
  };

  const handleAddToCart = async (course) => {
    const identifier = course.courseSlug || getCourseIdentifier(course);

    if (isInCart(identifier)) {
      const payload = await removeFromCart(identifier);

      if (!payload?.success) {
        showToast(payload?.message || "Unable to update your cart", "remove");
        return;
      }

      showToast(`Removed "${course.title}" from cart`, "remove");
      return;
    }

    const payload = await addToCart(identifier);

    if (!payload?.success) {
      showToast(payload?.message || "Unable to update your cart", "remove");
      return;
    }

    showToast(`"${course.title}" added to cart!`);
  };

  const handleToggleWishlist = async (course) => {
    const identifier = course.courseSlug || getCourseIdentifier(course);
    const wasInWishlist = isInWishlist(identifier);
    const payload = await toggleWishlist(identifier);

    if (!payload?.success) {
      showToast(payload?.message || "Unable to update your wishlist", "remove");
      return;
    }

    showToast(
      wasInWishlist
        ? `Removed "${course.title}" from wishlist`
        : `"${course.title}" added to wishlist!`,
      wasInWishlist ? "remove" : "success"
    );
  };

  const handleBuyNow = async (course) => {
    const identifier = course.courseSlug || getCourseIdentifier(course);

    if (isInCart(identifier)) {
      router.push("/my-courses?tab=cart");
      return;
    }

    const payload = await addToCart(identifier);

    if (!payload?.success) {
      showToast(payload?.message || "Unable to update your cart", "remove");
      return;
    }

    showToast(`"${course.title}" added to cart!`);
    router.push("/my-courses?tab=cart");
  };

  if (loading || !ready || (session && coursesLoading)) return null;
  if (!session) return null;

  const categories = ["All", ...Array.from(new Set(courses.map((course) => course.category).filter(Boolean)))];

  const filtered = courses.filter((c) => {
    const searchTarget = [c.title, c.description, c.courseSlug, c.category, c.type]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
    const matchesQuery = searchTarget.includes(query.toLowerCase());
    const matchesCategory = category === "All" || c.category === category;
    const identifier = c.courseSlug || getCourseIdentifier(c);
    const matchesTab =
      activeTab === "all"      ? true :
      activeTab === "wishlist" ? isInWishlist(identifier) :
      activeTab === "cart"     ? isInCart(identifier) : true;
    return matchesQuery && matchesCategory && matchesTab;
  });

  const emptyMessage = coursesError || (activeTab === "wishlist"
    ? "No courses in your wishlist yet."
    : activeTab === "cart"
      ? "No courses in your cart yet."
      : "No courses found");

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* ── Page Header ── */}
      <div className="border-b border-purple-100 bg-white px-4 py-8">
        <div className="page-container">
          <h1 className="text-2xl font-bold text-gray-900">
            Welcome back{session.name ? `, ${session.name.split(" ")[0]}` : ""}! 👋
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Browse the full course catalog created by admin, save favorites, and buy when you&apos;re ready.
          </p>

          {/* Stats row */}
          <div className="mt-4 flex flex-wrap gap-4">
            <Stat icon={<BookOpen size={16} />} label="Courses" value={courses.length} />
            <Stat icon={<Heart size={16} className="text-red-500" />} label="Wishlist" value={wishlistCount} />
            <Stat icon={<ShoppingCart size={16} className="text-purple-600" />} label="In Cart" value={cartCount} />
          </div>
        </div>
      </div>

      <div className="page-container py-8">
        {/* ── Filters ── */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Search */}
          <div className="relative w-full sm:max-w-xs">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search courses…"
              className="w-full rounded-lg border border-gray-200 bg-white py-2 pl-9 pr-4 text-sm outline-none transition focus:border-purple-400 focus:ring-2 focus:ring-purple-100"
            />
          </div>

          {/* Category pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                  category === cat
                    ? "bg-purple-600 text-white"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-purple-400 hover:text-purple-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ── Tabs: All / Wishlist / Cart ── */}
        <div className="mb-6 flex gap-1 rounded-xl bg-gray-100 p-1 w-fit">
          {[
            { key: "all",      label: "All Courses",           href: "/my-courses" },
            { key: "wishlist", label: `Wishlist (${wishlistCount})`, href: "/my-courses?tab=wishlist" },
            { key: "cart",     label: `Cart (${cartCount})`,        href: "/my-courses?tab=cart" },
          ].map((tab) => (
            <Link
              key={tab.key}
              href={tab.href}
              className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
                activeTab === tab.key
                  ? "bg-white text-purple-700 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab.label}
            </Link>
          ))}
        </div>

        {/* ── Course grid ── */}
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-3 py-20 text-center">
            <BookOpen size={40} className="text-gray-300" />
            <p className="font-medium text-gray-500">{emptyMessage}</p>
            <button
              className="text-sm text-purple-600 hover:underline"
              onClick={() => {
                setQuery("");
                setCategory("All");

                if (activeTab !== "all") {
                  router.replace("/my-courses");
                }
              }}
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((course) => (
              <CourseCard
                key={getCourseIdentifier(course)}
                course={course}
                inCart={isInCart(course.courseSlug || getCourseIdentifier(course))}
                inWishlist={isInWishlist(course.courseSlug || getCourseIdentifier(course))}
                onAddToCart={() => handleAddToCart(course)}
                onToggleWishlist={() => handleToggleWishlist(course)}
                onBuyNow={() => handleBuyNow(course)}
              />
            ))}
          </div>
        )}
      </div>

      {/* ── Toast ── */}
      {toast && (
        <div
          className={`fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold shadow-lg transition-all ${
            toast.type === "remove"
              ? "bg-gray-800 text-white"
              : toast.type === "info"
              ? "bg-blue-600 text-white"
              : "bg-purple-700 text-white"
          }`}
        >
          {toast.type === "remove" ? <X size={16} /> : <CheckCircle size={16} />}
          {toast.message}
        </div>
      )}
    </div>
  );
}

/* ── Sub-components ── */

function Stat({ icon, label, value }) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm">
      <span className="text-gray-400">{icon}</span>
      <span className="font-bold text-gray-800">{value}</span>
      <span className="text-gray-500">{label}</span>
    </div>
  );
}

function CourseCard({ course, inCart, inWishlist, onAddToCart, onToggleWishlist, onBuyNow }) {
  const statusColor = STATUS_COLORS[course.status] || STATUS_COLORS.default;
  const durationLabel = getCourseDurationLabel(course);
  const priceLabel = getCoursePriceLabel(course);
  const placementLabel = getCoursePlacementLabel(course);
  const typeLabel = course?.type || course?.scopeType || "Course";

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:shadow-md hover:-translate-y-0.5">
      <div className="h-1.5 w-full" style={{ backgroundColor: course.color || "#7c3aed" }} />
      <div className="relative flex h-36 items-center justify-center bg-linear-to-br from-purple-100 to-purple-50">
        {course.thumbnail ? (
          <Image src={course.thumbnail} alt={course.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw" className="object-cover" />
        ) : (
          <BookOpen size={40} className="text-purple-300" />
        )}
        <span className={`absolute left-3 top-3 rounded-full px-2 py-0.5 text-[10px] font-bold ${statusColor}`}>
          {(course.status || "active").toUpperCase()}
        </span>
        <button
          onClick={onToggleWishlist}
          className={`absolute right-3 bottom-3 flex h-8 w-8 items-center justify-center rounded-full border shadow-sm transition ${
            inWishlist
              ? "border-red-300 bg-red-50 text-red-500 hover:bg-red-100"
              : "border-gray-200 bg-white text-gray-400 hover:border-red-300 hover:text-red-500"
          }`}
          aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart size={14} className={inWishlist ? "fill-current" : ""} />
        </button>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-purple-500">{course.category}</p>

        <h3 className="line-clamp-2 text-sm font-bold leading-snug text-gray-800">{course.title}</h3>

        <p className="line-clamp-2 text-xs text-gray-500">
          {course.description || "Course details will be available after the admin assigns and publishes the course."}
        </p>

        <div className="mt-auto flex flex-wrap gap-2 pt-2 text-[11px] text-gray-400">
          <MetaPill icon={<Clock size={10} />} label={durationLabel} />
          <MetaPill icon={<Building2 size={10} />} label={placementLabel} />
          <MetaPill icon={<Layers3 size={10} />} label={typeLabel} />
        </div>

        <div className="rounded-xl bg-violet-50/60 px-3 py-2 text-[11px] text-violet-700">
          <span className="font-semibold uppercase tracking-wide text-violet-500">Course ID</span>
          <p className="mt-1 break-all font-bold text-violet-900">{course.courseId || getCourseIdentifier(course)}</p>
        </div>

        <div className="flex items-baseline gap-2">
          <span className="text-base font-bold text-gray-900">{priceLabel}</span>
          {course.currency && typeof course.price === "number" && course.price > 0 && (
            <span className="text-xs uppercase text-gray-400">{course.currency}</span>
          )}
        </div>

        <div className="mt-1 grid grid-cols-1 gap-2 sm:grid-cols-2">
          <button
            onClick={onAddToCart}
            className={`flex w-full items-center justify-center gap-2 rounded-lg py-2 text-sm font-semibold transition ${
              inCart
                ? "border border-red-200 bg-red-50 text-red-600 hover:bg-red-100"
                : "bg-purple-700 text-white hover:bg-purple-800 active:scale-[0.98]"
            }`}
          >
            {inCart ? (
              <><X size={14} /> Remove from Cart</>
            ) : (
              <><ShoppingCart size={14} /> Add to Cart</>
            )}
          </button>

          <button
            onClick={onBuyNow}
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-purple-200 bg-purple-50 py-2 text-sm font-semibold text-purple-700 transition hover:border-purple-300 hover:bg-purple-100"
          >
            Buy <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}

function MetaPill({ icon, label }) {
  return (
    <span className="flex items-center gap-1 rounded-full bg-gray-100 px-2 py-0.5">
      {icon}{label}
    </span>
  );
}
