"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  ChevronDown, Search, BookOpen, Heart, ShoppingCart,
  Bell, User, LogOut, Eye, X,
} from "lucide-react";
import { courses } from "@/data/courses";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";
import CourseCollectionModal from "@/components/CourseCollectionModal";

export default function AuthNavbar() {
  const router = useRouter();
  const { session, logout } = useAuth();
  const {
    cart,
    wishlist,
    ready,
    cartCount,
    wishlistCount,
    removeFromCart,
    removeFromWishlist,
  } = useCart();

  const [coursesOpen, setCoursesOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const [searchOpen, setSearchOpen] = useState(false); // mobile search toggle
  const [collectionModal, setCollectionModal] = useState(null);

  const searchRef = useRef(null);

  // Close dropdowns on outside click
  useEffect(() => {
    const handler = (e) => {
      if (!e.target.closest("[data-dropdown]")) {
        setCoursesOpen(false);
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleLogout = async () => {
    await logout();
    window.location.replace("/");
  };

  const handleSearch = (e) => {
    e.preventDefault();
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

  const initials = session?.name
    ? session.name.split(" ").map((w) => w[0]).join("").toUpperCase().slice(0, 2)
    : "U";

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-purple-100 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3">

        {/* ── LEFT: Logo + Find Courses ── */}
        <div className="flex shrink-0 items-center gap-6">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Medtech Career" width={150} height={52} className="h-12 w-auto object-contain" priority />
          </Link>

          <div className="relative hidden md:block" data-dropdown onMouseLeave={() => setCoursesOpen(false)}>
            <button
              className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold text-gray-700 transition hover:bg-purple-50 hover:text-purple-700"
              onMouseEnter={() => setCoursesOpen(true)}
              onClick={() => setCoursesOpen((v) => !v)}
            >
              Find Courses
              <ChevronDown size={14} className={`transition-transform ${coursesOpen ? "rotate-180" : ""}`} />
            </button>

            {coursesOpen && (
              <div className="absolute left-0 top-full z-50 mt-1 w-72 overflow-hidden rounded-xl border border-gray-100 bg-white shadow-xl">
                <Link
                  href="/courses"
                  className="block border-b border-purple-50 bg-purple-50 px-4 py-3 text-sm font-semibold text-purple-700 transition hover:bg-purple-100"
                  onClick={() => setCoursesOpen(false)}
                >
                  Browse All Courses →
                </Link>
                <div className="max-h-72 overflow-y-auto py-1">
                  {courses.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/courses/${c.slug}`}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 transition hover:bg-purple-50 hover:text-purple-700"
                      onClick={() => setCoursesOpen(false)}
                    >
                      <BookOpen size={13} className="shrink-0 text-purple-400" />
                      {c.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ── CENTER: Search bar ── */}
        <form onSubmit={handleSearch} className="hidden flex-1 md:flex">
          <div className="relative w-full max-w-lg mx-auto">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="search"
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
              placeholder="Search courses, topics…"
              className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2 pl-9 pr-4 text-sm outline-none transition focus:border-purple-400 focus:bg-white focus:ring-2 focus:ring-purple-100"
            />
          </div>
        </form>

        {/* ── RIGHT: Actions + Profile ── */}
        <div className="ml-auto flex shrink-0 items-center gap-1 md:gap-2">
          {/* Mobile search toggle */}
          <button
            className="rounded-lg p-2 text-gray-500 transition hover:bg-purple-50 hover:text-purple-700 md:hidden"
            onClick={() => setSearchOpen((v) => !v)}
            aria-label="Search"
          >
            {searchOpen ? <X size={20} /> : <Search size={20} />}
          </button>

          <IconBtn href="/my-courses" label="My Learning" icon={<BookOpen size={20} />} />
          <IconBtn
            label="Wishlist"
            icon={<Heart size={20} />}
            badge={wishlistCount || null}
            onClick={() => setCollectionModal("wishlist")}
          />
          <IconBtn
            label="Cart"
            icon={<ShoppingCart size={20} />}
            badge={cartCount || null}
            onClick={() => setCollectionModal("cart")}
          />
          <IconBtn label="Notifications" icon={<Bell size={20} />} onClick={() => {}} />

          {/* Profile */}
          <div className="relative ml-1" data-dropdown>
            <button
              className="flex items-center justify-center overflow-hidden rounded-full ring-2 ring-purple-200 transition hover:ring-purple-500 focus:outline-none focus:ring-purple-500"
              onClick={() => setProfileOpen((v) => !v)}
              aria-label="Account menu"
            >
              {session?.photo ? (
                <span className="relative block h-8 w-8 overflow-hidden rounded-full">
                  <Image src={session.photo} alt={session.name || "Profile"} fill sizes="32px" unoptimized className="object-cover" />
                </span>
              ) : (
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-xs font-bold text-white">
                  {initials}
                </span>
              )}
            </button>

            {profileOpen && (
              <div className="absolute right-0 top-full z-50 mt-2 w-52 overflow-hidden rounded-xl border border-gray-100 bg-white shadow-xl">
                {/* User info header */}
                <div className="flex items-center gap-3 border-b border-gray-100 px-4 py-3">
                  {session?.photo ? (
                    <span className="relative block h-9 w-9 overflow-hidden rounded-full">
                      <Image src={session.photo} alt="" fill sizes="36px" unoptimized className="object-cover" />
                    </span>
                  ) : (
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-purple-100 text-sm font-bold text-purple-700">
                      {initials}
                    </span>
                  )}
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-gray-800">{session?.name || "User"}</p>
                    <p className="truncate text-xs text-gray-400">{session?.email || session?.phone}</p>
                  </div>
                </div>

                <Link
                  href="#"
                  className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-600 transition hover:bg-purple-50 hover:text-purple-700"
                  onClick={() => setProfileOpen(false)}
                >
                  <Eye size={15} /> View Profile
                </Link>

                <button
                  className="flex w-full items-center gap-2 px-4 py-2.5 text-sm text-red-500 transition hover:bg-red-50"
                  onClick={handleLogout}
                >
                  <LogOut size={15} /> Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile search bar */}
      {searchOpen && (
        <div className="border-t border-gray-100 px-4 py-3 md:hidden">
          <form onSubmit={handleSearch}>
            <div className="relative">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                ref={searchRef}
                type="search"
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
                placeholder="Search courses, topics…"
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
    </header>
  );
}

function IconBtn({ href, label, icon, badge, onClick }) {
  const className = "relative rounded-lg p-2 text-gray-500 transition hover:bg-purple-50 hover:text-purple-700";

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={className} title={label}>
        {icon}
        {badge && (
          <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-orange-500 px-1 text-[10px] font-bold text-white leading-none">
            {badge}
          </span>
        )}
        <span className="sr-only">{label}</span>
      </button>
    );
  }

  return (
    <Link href={href} className={className} title={label}>
      {icon}
      {badge && (
        <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-orange-500 px-1 text-[10px] font-bold text-white leading-none">
          {badge}
        </span>
      )}
      <span className="sr-only">{label}</span>
    </Link>
  );
}
