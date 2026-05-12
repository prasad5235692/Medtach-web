"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {
  ChevronDown,
  Search,
  BookOpen,
  Heart,
  ShoppingCart,
  Bell,
  LogOut,
  X,
  User,
  Package,
} from "lucide-react";
import { getVisibleCourses } from "@/data/courses";
import { getClientPageContent } from "@/data/clientPageContent";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";
import CourseCollectionModal from "@/components/CourseCollectionModal";
import ProfilePanel from "@/components/ProfilePanel";
import BoughtCoursesPanel from "@/components/BoughtCoursesPanel";
import { useLanguage } from "@/context/LanguageContext";
import { OPEN_PROFILE_PANEL_EVENT } from "@/lib/profilePanelEvents";
import { isRouteActive } from "@/lib/navActive";

function isDirectImageSource(value) {
  return /^(blob:|data:)/i.test(String(value || ""));
}

export default function AuthNavbar() {
  const router = useRouter();
  const pathname = usePathname();
  const { session, logout, saveSession } = useAuth();
  const { language } = useLanguage();
  const {
    cart,
    wishlist,
    ready,
    removeFromCart,
    removeFromWishlist,
  } = useCart();

  const [coursesOpen, setCoursesOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [collectionModal, setCollectionModal] = useState(null);
  const [activePanel, setActivePanel] = useState(null); // "profile" | "boughtCourses"
  const searchRef = useRef(null);
  const content = getClientPageContent("authNavbar", language);
  const courses = getVisibleCourses(language);
  const coursesIsCurrent = isRouteActive(pathname, "/courses");
  const myLearningIsCurrent = isRouteActive(pathname, "/my-courses");
  const profilePhoto = session?.photo || "";
  const shouldBypassImageOptimization = isDirectImageSource(profilePhoto);

  useEffect(() => {
    const handler = (event) => {
      if (!event.target.closest("[data-dropdown]")) {
        setCoursesOpen(false);
        setProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    const handleOpenProfilePanel = () => {
      setProfileOpen(false);
      setActivePanel("profile");
    };

    window.addEventListener(OPEN_PROFILE_PANEL_EVENT, handleOpenProfilePanel);

    return () => {
      window.removeEventListener(OPEN_PROFILE_PANEL_EVENT, handleOpenProfilePanel);
    };
  }, []);

  const handleLogout = async () => {
    await logout();
    window.location.replace("/");
  };

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchVal.trim()) {
      router.push(`/courses?q=${encodeURIComponent(searchVal.trim())}`);
      setSearchVal("");
    }
  };

  const handleRemoveFromCollection = async (variant, course) => {
    const identifier = course?.courseSlug || course?.id || course?._id || "";

    if (!identifier) {
      return;
    }

    if (variant === "cart") {
      await removeFromCart(identifier);
      return;
    }

    await removeFromWishlist(identifier);
  };

  const openPanel = (panel) => {
    setProfileOpen(false);
    setActivePanel(panel);
  };

  const handleProfileSaved = (updatedUser) => {
    if (updatedUser) {
      saveSession(updatedUser);
    }
  };

  const initials = session?.name
    ? session.name.split(" ").map((word) => word[0]).join("").toUpperCase().slice(0, 2)
    : "U";

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-purple-100 bg-white shadow-sm">
      <div className="page-container flex items-center gap-4 py-3">
        <div className="flex shrink-0 items-center gap-6">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt={content.logoAlt} width={150} height={52} className="h-12 w-auto object-contain" priority />
          </Link>

          <div className="relative hidden md:block" data-dropdown onMouseLeave={() => setCoursesOpen(false)}>
            <button
              className={`flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold transition ${
                coursesOpen
                  ? "bg-purple-50 text-purple-700"
                  : coursesIsCurrent
                    ? "bg-purple-50/80 text-purple-700"
                    : "text-gray-700 hover:bg-purple-50 hover:text-purple-700"
              }`}
              onMouseEnter={() => setCoursesOpen(true)}
              onClick={() => setCoursesOpen((value) => !value)}
            >
              {content.findCoursesLabel}
              <ChevronDown size={14} className={`transition-transform ${coursesOpen ? "rotate-180 text-purple-600" : coursesIsCurrent ? "text-purple-600" : ""}`} />
            </button>

            {coursesOpen && (
              <div className="absolute left-0 top-full z-50 mt-1 w-72 overflow-hidden rounded-xl border border-gray-100 bg-white shadow-xl">
                <Link
                  href="/courses"
                  aria-current={coursesIsCurrent ? "page" : undefined}
                  className={`block border-b border-purple-50 px-4 py-3 text-sm font-semibold transition ${
                    coursesIsCurrent
                      ? "bg-purple-100 text-purple-800"
                      : "bg-purple-50 text-purple-700 hover:bg-purple-100"
                  }`}
                  onClick={() => setCoursesOpen(false)}
                >
                  {content.browseAllCoursesLabel} →
                </Link>
                <div className="max-h-72 overflow-y-auto py-1">
                  {courses.map((course) => {
                    const courseHref = `/courses/${course.slug}`;
                    const isCurrent = isRouteActive(pathname, courseHref);

                    return (
                      <Link
                        key={course.slug}
                        href={courseHref}
                        aria-current={isCurrent ? "page" : undefined}
                        className={`flex items-center gap-3 px-4 py-2.5 text-sm transition ${
                          isCurrent
                            ? "bg-purple-50 font-semibold text-purple-800"
                            : "text-gray-600 hover:bg-purple-50 hover:text-purple-700"
                        }`}
                        onClick={() => setCoursesOpen(false)}
                      >
                        <BookOpen size={13} className={`shrink-0 ${isCurrent ? "text-purple-600" : "text-purple-400"}`} />
                        {course.title}
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        <form onSubmit={handleSearch} className="hidden flex-1 md:flex">
          <div className="relative mx-auto w-full max-w-lg">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="search"
              value={searchVal}
              onChange={(event) => setSearchVal(event.target.value)}
              placeholder={content.searchPlaceholder}
              className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2 pl-9 pr-4 text-sm outline-none transition focus:border-purple-400 focus:bg-white focus:ring-2 focus:ring-purple-100"
            />
          </div>
        </form>

        <div className="ml-auto flex shrink-0 items-center gap-1 md:gap-2">
          <button
            className={`rounded-lg p-2 transition md:hidden ${searchOpen ? "bg-purple-50 text-purple-700" : "text-gray-500 hover:bg-purple-50 hover:text-purple-700"}`}
            onClick={() => setSearchOpen((value) => !value)}
            aria-label={content.searchLabel}
          >
            {searchOpen ? <X size={20} /> : <Search size={20} />}
          </button>

          <IconBtn href="/my-courses" label={content.myLearningLabel} icon={<BookOpen size={20} />} active={myLearningIsCurrent} />
          {/* <IconBtn
            label={content.wishlistLabel}
            icon={<Heart size={20} />}
            badge={wishlistCount || null}
            onClick={() => setCollectionModal("wishlist")}
          />
          <IconBtn
            label={content.cartLabel}
            icon={<ShoppingCart size={20} />}
            badge={cartCount || null}
            onClick={() => setCollectionModal("cart")}
          /> */}
          <IconBtn label={content.notificationsLabel} icon={<Bell size={20} />} onClick={() => {}} />

          <div className="relative ml-1" data-dropdown>
            <button
              className={`flex items-center justify-center overflow-hidden rounded-full ring-2 transition hover:ring-purple-500 focus:outline-none focus:ring-purple-500 ${profileOpen || activePanel ? "ring-purple-500" : "ring-purple-200"}`}
              onClick={() => setProfileOpen((value) => !value)}
              aria-label={content.accountMenuLabel}
            >
              {session?.photo ? (
                <span className="relative block h-8 w-8 overflow-hidden rounded-full">
                  <Image src={profilePhoto} alt={session.name || content.profileAlt} fill sizes="32px" unoptimized={shouldBypassImageOptimization} className="object-cover" />
                </span>
              ) : (
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-xs font-bold text-white">
                  {initials}
                </span>
              )}
            </button>

            {profileOpen && (
              <div className="absolute right-0 top-full z-50 mt-2 w-52 overflow-hidden rounded-xl border border-gray-100 bg-white shadow-xl">
                <div className="flex items-center gap-3 border-b border-gray-100 px-4 py-3">
                  {session?.photo ? (
                    <span className="relative block h-9 w-9 overflow-hidden rounded-full">
                      <Image src={profilePhoto} alt="" fill sizes="36px" unoptimized={shouldBypassImageOptimization} className="object-cover" />
                    </span>
                  ) : (
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-purple-100 text-sm font-bold text-purple-700">
                      {initials}
                    </span>
                  )}
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-gray-800">{session?.name || content.profileFallback}</p>
                    <p className="truncate text-xs text-gray-400">{session?.email || session?.phone}</p>
                  </div>
                </div>

                <button
                  type="button"
                  className="flex w-full items-center gap-2 px-4 py-2.5 text-sm text-gray-600 transition hover:bg-purple-50 hover:text-purple-700"
                  onClick={() => openPanel("profile")}
                >
                  <User size={15} /> {content.viewProfileLabel}
                </button>

                <button
                  type="button"
                  className="flex w-full items-center gap-2 px-4 py-2.5 text-sm text-gray-600 transition hover:bg-purple-50 hover:text-purple-700"
                  onClick={() => openPanel("boughtCourses")}
                >
                  <Package size={15} /> {content.purchasedCoursesLabel}
                </button>

                <div className="mx-4 my-1 border-t border-gray-100" />

                <button
                  type="button"
                  className="flex w-full items-center gap-2 px-4 py-2.5 text-sm text-gray-600 transition hover:bg-purple-50 hover:text-purple-700"
                  onClick={() => { setProfileOpen(false); setCollectionModal("wishlist"); }}
                >
                  <Heart size={15} /> {content.wishlistLabel}
                </button>

                <button
                  type="button"
                  className="flex w-full items-center gap-2 px-4 py-2.5 text-sm text-gray-600 transition hover:bg-purple-50 hover:text-purple-700"
                  onClick={() => { setProfileOpen(false); setCollectionModal("cart"); }}
                >
                  <ShoppingCart size={15} /> {content.cartLabel}
                </button>

                <div className="mx-4 my-1 border-t border-gray-100" />

                <button
                  className="flex w-full items-center gap-2 px-4 py-2.5 text-sm text-red-500 transition hover:bg-red-50"
                  onClick={handleLogout}
                >
                  <LogOut size={15} /> {content.logoutLabel}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {searchOpen && (
        <div className="border-t border-gray-100 px-4 py-3 md:hidden">
          <form onSubmit={handleSearch}>
            <div className="relative">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                ref={searchRef}
                type="search"
                value={searchVal}
                onChange={(event) => setSearchVal(event.target.value)}
                placeholder={content.searchPlaceholder}
                className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2.5 pl-9 pr-4 text-sm outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100"
                autoFocus
              />
            </div>
          </form>
        </div>
      )}

      <CourseCollectionModal
        open={collectionModal === "cart" || collectionModal === "wishlist"}
        variant={collectionModal || "cart"}
        items={collectionModal === "wishlist" ? wishlist : cart}
        ready={ready}
        onClose={() => setCollectionModal(null)}
        onRemove={(course) => handleRemoveFromCollection(collectionModal, course)}
      />

      {activePanel === "profile" && (
        <ProfilePanel
          session={session}
          onClose={() => setActivePanel(null)}
          onSaved={handleProfileSaved}
        />
      )}

      {activePanel === "boughtCourses" && (
        <BoughtCoursesPanel onClose={() => setActivePanel(null)} />
      )}
    </header>
  );
}

function IconBtn({ href, label, icon, badge, onClick, active = false }) {
  const className = `relative rounded-lg p-2 transition ${active ? "bg-purple-50 text-purple-700" : "text-gray-500 hover:bg-purple-50 hover:text-purple-700"}`;

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={className} title={label}>
        {icon}
        {badge && (
          <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-orange-500 px-1 text-[10px] font-bold leading-none text-white">
            {badge}
          </span>
        )}
        <span className="sr-only">{label}</span>
      </button>
    );
  }

  return (
    <Link href={href} className={className} title={label} aria-current={active ? "page" : undefined}>
      {icon}
      {badge && (
        <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-orange-500 px-1 text-[10px] font-bold leading-none text-white">
          {badge}
        </span>
      )}
      <span className="sr-only">{label}</span>
    </Link>
  );
}