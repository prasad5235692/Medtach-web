"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  Heart, ShoppingCart, BookOpen, Clock, Building2,
  Layers3, Check, CheckCircle, X, Search, ArrowRight, LoaderCircle,
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";
import { getClientPageContent } from "@/data/clientPageContent";
import { openProfilePanel } from "@/lib/profilePanelEvents";
import { getMissingStudentProfileFields } from "@/lib/studentProfileRequirements";
import {
  cancelStudentCoursePurchase,
  fetchStudentCourses,
  purchaseStudentCourse,
} from "@/lib/websiteStudentClient";

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
  const title = course?.title || course?.name || "";
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
    isPurchased: Boolean(course?.isPurchased),
    courseStatus: String(course?.courseStatus || "").trim().toLowerCase(),
    canCancelPurchase: Boolean(course?.canCancelPurchase),
  };
}

function getCourseIdentifier(course) {
  return course?.id || course?._id || course?.courseSlug || "";
}

function courseMatchesIdentifier(course, identifier) {
  const normalizedIdentifier = String(identifier || "").trim();

  if (!normalizedIdentifier) {
    return false;
  }

  return [course?.id, course?._id, course?.courseSlug]
    .filter(Boolean)
    .some((value) => String(value) === normalizedIdentifier);
}

function delay(milliseconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}

function normalizeCourseError(message) {
  if (!message) {
    return "catalogLoad";
  }

  if (/branch/i.test(message)) {
    return "noCourses";
  }

  return message;
}

function getLocaleTag(language) {
  if (language === "hi") {
    return "hi-IN";
  }

  if (language === "ml") {
    return "ml-IN";
  }

  return "en-IN";
}

function getCourseDurationLabel(course, content) {
  if (typeof course?.durationWeeks === "number" && course.durationWeeks > 0) {
    const unit = course.durationWeeks === 1 ? content.defaults.weekSingular : content.defaults.weekPlural;
    return `${course.durationWeeks} ${unit}`;
  }

  if (typeof course?.totalHours === "number" && course.totalHours > 0) {
    const unit = course.totalHours === 1 ? content.defaults.hourSingular : content.defaults.hourPlural;
    return `${course.totalHours} ${unit}`;
  }

  return content.defaults.selfPaced;
}

function getCoursePriceLabel(course, localeTag, content) {
  if (typeof course?.price === "number" && course.price > 0) {
    return new Intl.NumberFormat(localeTag, {
      style: "currency",
      currency: course?.currency || "INR",
      maximumFractionDigits: 0,
    }).format(course.price);
  }

  return content.defaults.free;
}

function getCoursePlacementLabel(course, content) {
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

  return course?.scopeType === "hospital" ? content.defaults.hospitalCatalog : content.defaults.generalCatalog;
}

function getCourseErrorMessage(errorKey, content) {
  if (!errorKey) {
    return "";
  }

  if (errorKey === "catalogLoad") {
    return content.errors.catalogLoad;
  }

  if (errorKey === "noCourses") {
    return content.errors.noCourses;
  }

  return errorKey;
}

function translateCourseCategory(course, content) {
  if (Array.isArray(course?.categoryList) && course.categoryList.length > 0) {
    return course.categoryList.map((item) => content.categoryLabels[item] ?? item).join(", ");
  }

  return content.categoryLabels[course?.category] ?? course?.category ?? "";
}

function translateCourseType(value, content) {
  const key = String(value || content.defaults.courseType).toLowerCase();
  return content.typeLabels[key] ?? value ?? content.defaults.courseType;
}

function translateCourseStatus(value, content) {
  const key = String(value || "active").toLowerCase();
  return content.statusLabels[key] ?? String(value || "active").toUpperCase();
}

function formatToast(template, title) {
  return template.replaceAll("{title}", title);
}

export default function MyCoursesPage() {
  const router = useRouter();
  const params = useSearchParams();
  const { session, loading } = useAuth();
  const { addToCart, removeFromCart, isInCart, toggleWishlist, isInWishlist, cartCount, wishlistCount, ready } = useCart();
  const { language } = useLanguage();
  const content = getClientPageContent("myCourses", language);
  const localeTag = getLocaleTag(language);

  const [courses, setCourses] = useState([]);
  const [coursesLoading, setCoursesLoading] = useState(true);
  const [coursesError, setCoursesError] = useState("");

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(content.filters.allCategoryValue);
  const [toast, setToast] = useState(null); // { message, type }
  const [purchasePendingId, setPurchasePendingId] = useState("");
  const [purchaseModal, setPurchaseModal] = useState(null);
  const toastTimeoutRef = useRef(null);
  const modalTimeoutRef = useRef(null);
  const profilePromptTimeoutRef = useRef(null);
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
      }

      setCoursesLoading(false);
    };

    loadCourses();

    return () => {
      cancelled = true;
    };
  }, [loading, session, router]);

  useEffect(() => () => {
    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
    }

    if (modalTimeoutRef.current) {
      clearTimeout(modalTimeoutRef.current);
    }

    if (profilePromptTimeoutRef.current) {
      clearTimeout(profilePromptTimeoutRef.current);
    }
  }, []);

  const showToast = (message, type = "success") => {
    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
    }

    setToast({ message, type });

    toastTimeoutRef.current = setTimeout(() => {
      setToast(null);
    }, 2500);
  };

  const showPurchaseModal = (title) => {
    if (modalTimeoutRef.current) {
      clearTimeout(modalTimeoutRef.current);
    }

    setPurchaseModal({ title });

    modalTimeoutRef.current = setTimeout(() => {
      setPurchaseModal(null);
    }, 2200);
  };

  const promptProfileUpdate = () => {
    if (profilePromptTimeoutRef.current) {
      clearTimeout(profilePromptTimeoutRef.current);
    }

    showToast(content.errors.updateProfileDetails, "info");

    profilePromptTimeoutRef.current = setTimeout(() => {
      openProfilePanel();
    }, 2000);
  };

  const markCourseAsPurchased = (identifier, nextCourse) => {
    const normalizedNextCourse = nextCourse ? normalizeCourse(nextCourse) : null;

    setCourses((currentCourses) => currentCourses.map((entry) => {
      if (!courseMatchesIdentifier(entry, identifier)) {
        return entry;
      }

      if (!normalizedNextCourse) {
        return {
          ...entry,
          isPurchased: true,
        };
      }

      return {
        ...entry,
        ...normalizedNextCourse,
        isPurchased: true,
      };
    }));
  };

  const markCoursePurchaseState = (identifier, nextCourse, overrides = {}) => {
    const normalizedNextCourse = nextCourse ? normalizeCourse(nextCourse) : null;

    setCourses((currentCourses) => currentCourses.map((entry) => {
      if (!courseMatchesIdentifier(entry, identifier)) {
        return entry;
      }

      return {
        ...entry,
        ...(normalizedNextCourse || {}),
        ...overrides,
      };
    }));
  };

  const handleAddToCart = async (course) => {
    const identifier = course.courseSlug || getCourseIdentifier(course);
    const courseTitle = course.title || content.defaults.untitledCourse;

    if (isInCart(identifier)) {
      const payload = await removeFromCart(identifier);

      if (!payload?.success) {
        showToast(content.errors.cartUpdate, "remove");
        return;
      }

      showToast(formatToast(content.toastTemplates.removedCart, courseTitle), "remove");
      return;
    }

    const payload = await addToCart(identifier);

    if (!payload?.success) {
      showToast(content.errors.cartUpdate, "remove");
      return;
    }

    showToast(formatToast(content.toastTemplates.addedCart, courseTitle));
  };

  const handleToggleWishlist = async (course) => {
    const identifier = course.courseSlug || getCourseIdentifier(course);
    const wasInWishlist = isInWishlist(identifier);
    const courseTitle = course.title || content.defaults.untitledCourse;
    const payload = await toggleWishlist(identifier);

    if (!payload?.success) {
      showToast(content.errors.wishlistUpdate, "remove");
      return;
    }

    showToast(
      wasInWishlist
        ? formatToast(content.toastTemplates.removedWishlist, courseTitle)
        : formatToast(content.toastTemplates.addedWishlist, courseTitle),
      wasInWishlist ? "remove" : "success"
    );
  };

  const handleBuyNow = async (course) => {
    const identifier = course.courseSlug || getCourseIdentifier(course);
    const courseTitle = course.title || content.defaults.untitledCourse;

    if (course.isPurchased) {
      showToast(content.errors.alreadyPurchased, "info");
      return;
    }

    if (getMissingStudentProfileFields(session).length > 0) {
      promptProfileUpdate();
      return;
    }

    if (purchasePendingId === identifier) {
      return;
    }

    setPurchasePendingId(identifier);

    const [payload] = await Promise.all([
      purchaseStudentCourse(identifier),
      delay(2000),
    ]);

    setPurchasePendingId("");

    if (!payload?.success) {
      if (/update your profile details/i.test(payload?.message || "")) {
        promptProfileUpdate();
        return;
      }

      const alreadyPurchased = /already purchased/i.test(payload?.message || "");

      if (alreadyPurchased) {
        markCourseAsPurchased(identifier, payload?.data?.course || course);
        showToast(content.errors.alreadyPurchased, "info");
        return;
      }

      showToast(content.errors.purchaseUpdate, "remove");
      return;
    }

    markCourseAsPurchased(identifier, payload?.data?.course || course);

    if (isInCart(identifier)) {
      await removeFromCart(identifier);
    }

    showPurchaseModal(courseTitle);
  };

  const handleCancelPurchase = async (course) => {
    const identifier = course.courseSlug || getCourseIdentifier(course);

    if (!course.canCancelPurchase) {
      showToast(content.errors.cancelPurchaseUnavailable, "info");
      return;
    }

    if (purchasePendingId === identifier) {
      return;
    }

    setPurchasePendingId(identifier);

    const payload = await cancelStudentCoursePurchase(identifier);

    setPurchasePendingId("");

    if (!payload?.success) {
      const activePurchase = /active purchases cannot be canceled/i.test(payload?.message || "");

      if (activePurchase) {
        markCoursePurchaseState(identifier, payload?.data?.course || course, {
          isPurchased: true,
        });
        showToast(content.errors.cancelPurchaseUnavailable, "info");
        return;
      }

      showToast(content.errors.cancelPurchaseUpdate, "remove");
      return;
    }

    markCoursePurchaseState(identifier, payload?.data?.course || course, {
      isPurchased: false,
      courseStatus: "canceled",
      canCancelPurchase: false,
    });

    showToast(formatToast(content.toastTemplates.canceledPurchase, course.title || content.defaults.untitledCourse), "remove");
  };

  if (loading || !ready || (session && coursesLoading)) return null;
  if (!session) return null;

  const categories = [content.filters.allCategoryValue, ...Array.from(new Set(courses.map((course) => course.category).filter(Boolean)))];

  const filtered = courses.filter((c) => {
    const searchTarget = [c.title, c.description, c.courseSlug, c.category, c.type]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
    const matchesQuery = searchTarget.includes(query.toLowerCase());
    const matchesCategory = category === content.filters.allCategoryValue || c.category === category;
    const identifier = c.courseSlug || getCourseIdentifier(c);
    const matchesTab =
      activeTab === "all"      ? true :
      activeTab === "wishlist" ? isInWishlist(identifier) :
      activeTab === "cart"     ? isInCart(identifier) : true;
    return matchesQuery && matchesCategory && matchesTab;
  });

  const emptyMessage = getCourseErrorMessage(coursesError, content) || (activeTab === "wishlist"
    ? content.empty.wishlist
    : activeTab === "cart"
      ? content.empty.cart
      : content.empty.generic);

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* ── Page Header ── */}
      <div className="border-b border-purple-100 bg-white px-4 py-8">
        <div className="page-container">
          <h1 className="text-2xl font-bold text-gray-900">
            {content.header.welcome}{session.name ? `, ${session.name.split(" ")[0]}` : ""}! 👋
          </h1>
          <p className="mt-1 text-sm text-gray-500">{content.header.subtitle}</p>

          {/* Stats row */}
          <div className="mt-4 flex flex-wrap gap-4">
            <Stat icon={<BookOpen size={16} />} label={content.header.coursesLabel} value={courses.length} />
            <Stat icon={<Heart size={16} className="text-red-500" />} label={content.header.wishlistLabel} value={wishlistCount} />
            <Stat icon={<ShoppingCart size={16} className="text-purple-600" />} label={content.header.cartLabel} value={cartCount} />
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
              placeholder={content.filters.searchPlaceholder}
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
                {cat === content.filters.allCategoryValue ? content.filters.allCategoryLabel : (content.categoryLabels[cat] ?? cat)}
              </button>
            ))}
          </div>
        </div>

        {/* ── Tabs: All / Wishlist / Cart ── */}
        <div className="mb-6 flex gap-1 rounded-xl bg-gray-100 p-1 w-fit">
          {[
            { key: "all",      label: content.tabs.all, href: "/my-courses" },
            { key: "wishlist", label: `${content.tabs.wishlist} (${wishlistCount})`, href: "/my-courses?tab=wishlist" },
            { key: "cart",     label: `${content.tabs.cart} (${cartCount})`, href: "/my-courses?tab=cart" },
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
                setCategory(content.filters.allCategoryValue);

                if (activeTab !== "all") {
                  router.replace("/my-courses");
                }
              }}
            >
              {content.filters.clearLabel}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((course) => (
              <CourseCard
                key={getCourseIdentifier(course)}
                course={course}
                content={content}
                localeTag={localeTag}
                inCart={isInCart(course.courseSlug || getCourseIdentifier(course))}
                inWishlist={isInWishlist(course.courseSlug || getCourseIdentifier(course))}
                isBuying={purchasePendingId === (course.courseSlug || getCourseIdentifier(course))}
                onAddToCart={() => handleAddToCart(course)}
                onToggleWishlist={() => handleToggleWishlist(course)}
                onBuyNow={() => handleBuyNow(course)}
                onCancelPurchase={() => handleCancelPurchase(course)}
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

      {purchaseModal && (
        <div className="fixed inset-0 z-40 flex items-center justify-center px-4" style={{ animation: "overlay-in 200ms ease-out both" }}>
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" aria-hidden="true" />
          <div
            role="dialog"
            aria-modal="true"
            aria-label={content.purchaseModal.title}
            className="relative w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-xl"
            style={{ animation: "modal-in 280ms cubic-bezier(0.34,1.56,0.64,1) both" }}
          >
            {/* Top accent bar */}
            <div className="h-1 w-full bg-linear-to-r from-emerald-400 via-teal-400 to-cyan-400" />

            <div className="px-8 py-8 text-center">
              {/* Icon ring */}
              <div
                className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 ring-4 ring-emerald-100"
                style={{ animation: "icon-pop 360ms 180ms cubic-bezier(0.34,1.56,0.64,1) both" }}
              >
                <CheckCircle size={30} className="text-emerald-500" strokeWidth={2} />
              </div>

              {/* Text */}
              <p
                className="text-base font-semibold tracking-tight text-gray-900"
                style={{ animation: "fade-up 220ms 220ms ease-out both" }}
              >
                {content.purchaseModal.title}
              </p>
              <p
                className="mt-1.5 text-sm text-gray-400"
                style={{ animation: "fade-up 220ms 270ms ease-out both" }}
              >
                {formatToast(content.purchaseModal.description, purchaseModal.title)}
              </p>

              {/* Progress bar */}
              <div className="mx-auto mt-6 h-0.5 w-16 overflow-hidden rounded-full bg-gray-100">
                <div className="h-full bg-emerald-400" style={{ animation: "progress-bar 2200ms linear both" }} />
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes overlay-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes modal-in {
          from { opacity: 0; transform: translateY(20px) scale(0.94); }
          to   { opacity: 1; transform: translateY(0)    scale(1);    }
        }
        @keyframes icon-pop {
          from { opacity: 0; transform: scale(0.6); }
          to   { opacity: 1; transform: scale(1);   }
        }
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0);   }
        }
        @keyframes progress-bar {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
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

function CourseCard({ course, content, localeTag, inCart, inWishlist, isBuying, onAddToCart, onToggleWishlist, onBuyNow, onCancelPurchase }) {
  const statusColor = STATUS_COLORS[course.status] || STATUS_COLORS.default;
  const durationLabel = getCourseDurationLabel(course, content);
  const priceLabel = getCoursePriceLabel(course, localeTag, content);
  const placementLabel = getCoursePlacementLabel(course, content);
  const typeLabel = translateCourseType(course?.type || course?.scopeType || content.defaults.courseType, content);
  const courseTitle = course.title || content.defaults.untitledCourse;
  const courseDescription = course.description || content.defaults.description;
  const categoryLabel = translateCourseCategory(course, content);
  const statusLabel = translateCourseStatus(course.status, content);
  const isPurchased = Boolean(course.isPurchased);
  const purchaseStatus = String(course.courseStatus || "").toLowerCase();
  const canCancelPurchase = Boolean(isPurchased && course.canCancelPurchase && purchaseStatus === "inactive");
  const canBuyAgain = Boolean(!isPurchased && purchaseStatus === "canceled");

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:shadow-md hover:-translate-y-0.5">
      <div className="h-1.5 w-full" style={{ backgroundColor: course.color || "#7c3aed" }} />
      <div className="relative flex h-36 items-center justify-center bg-linear-to-br from-purple-100 to-purple-50">
        {course.thumbnail ? (
          <Image src={course.thumbnail} alt={courseTitle} fill sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw" className="object-cover" />
        ) : (
          <BookOpen size={40} className="text-purple-300" />
        )}
        <span className={`absolute left-3 top-3 rounded-full px-2 py-0.5 text-[10px] font-bold ${statusColor}`}>
          {statusLabel}
        </span>
        <button
          onClick={onToggleWishlist}
          className={`absolute right-3 bottom-3 flex h-8 w-8 items-center justify-center rounded-full border shadow-sm transition ${
            inWishlist
              ? "border-red-300 bg-red-50 text-red-500 hover:bg-red-100"
              : "border-gray-200 bg-white text-gray-400 hover:border-red-300 hover:text-red-500"
          }`}
          aria-label={inWishlist ? content.actions.removeFromWishlist : content.actions.addToWishlist}
        >
          <Heart size={14} className={inWishlist ? "fill-current" : ""} />
        </button>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-purple-500">{categoryLabel}</p>

        <h3 className="line-clamp-2 text-sm font-bold leading-snug text-gray-800">{courseTitle}</h3>

        <p className="line-clamp-2 text-xs text-gray-500">
          {courseDescription}
        </p>

        <div className="mt-auto flex flex-wrap gap-2 pt-2 text-[11px] text-gray-400">
          <MetaPill icon={<Clock size={10} />} label={durationLabel} />
          <MetaPill icon={<Building2 size={10} />} label={placementLabel} />
          <MetaPill icon={<Layers3 size={10} />} label={typeLabel} />
        </div>

        <div className="rounded-xl bg-violet-50/60 px-3 py-2 text-[11px] text-violet-700">
          <span className="font-semibold uppercase tracking-wide text-violet-500">{content.defaults.courseIdLabel}</span>
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
              <><X size={14} /> {content.actions.removeFromCart}</>
            ) : (
              <><ShoppingCart size={14} /> {content.actions.addToCart}</>
            )}
          </button>

          <button
            onClick={canCancelPurchase ? onCancelPurchase : onBuyNow}
            disabled={isBuying}
            aria-disabled={isBuying}
            className={`flex w-full items-center justify-center gap-2 rounded-lg py-2 text-sm font-semibold transition ${
              canCancelPurchase
                ? "border border-rose-200 bg-rose-50 text-rose-700 hover:border-rose-300 hover:bg-rose-100"
                : isPurchased
                ? "cursor-not-allowed border border-emerald-200 bg-emerald-50 text-emerald-700"
                : "border border-purple-200 bg-purple-50 text-purple-700 hover:border-purple-300 hover:bg-purple-100"
            } ${isBuying ? "cursor-wait opacity-80" : ""}`}
          >
            {isBuying ? (
              <>
                <LoaderCircle size={14} className="animate-spin" />
                {canCancelPurchase ? content.actions.canceling : content.actions.buying}
              </>
            ) : canCancelPurchase ? (
              <>
                <X size={14} />
                {content.actions.cancelPurchase}
              </>
            ) : canBuyAgain ? (
              <>
                {content.actions.buyAgain} <ArrowRight size={14} />
              </>
            ) : isPurchased ? (
              <>
                <Check size={14} />
                {content.actions.purchased}
              </>
            ) : (
              <>
                {content.actions.buy} <ArrowRight size={14} />
              </>
            )}
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
