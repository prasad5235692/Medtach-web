"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChevronDown, LogOut, User, Building2 } from "lucide-react";
import { getCourses } from "@/data/courses";
import { useAuth } from "@/context/AuthContext";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Navbar() {
  const router = useRouter();
  const { session, logout } = useAuth();
  const { language, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [businessOpen, setBusinessOpen] = useState(false);
  const [mobileBusinessOpen, setMobileBusinessOpen] = useState(false);

  const primaryLinks = [
    { label: t("nav.home", "Home"), href: "/" },
    { label: t("nav.about", "About"), href: "/about-us" },
    { label: t("nav.branches", "Branches"), href: "/branches" },
    { label: t("nav.training", "Training"), href: "/training" },
  ];

  const moreLinks = [
    { label: t("nav.ourTeam", "Our Team"), href: "/our-team" },
    { label: t("nav.placements", "Placements"), href: "/placements" },
    { label: t("nav.internship", "Internship"), href: "/internship" },
    { label: t("nav.blog", "Blog"), href: "/blog" },
  ];
  const courses = getCourses(language);

  const handleLogout = async () => {
    await logout();
    setUserMenuOpen(false);
    setOpen(false);
    window.location.replace("/");
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-purple-100/60 bg-white/95 shadow-sm backdrop-blur-sm">
      <div className="page-container flex items-center justify-between py-3">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Medtech Career" width={180} height={62} className="h-16 w-auto object-contain" priority />
        </Link>

        <nav className="hidden items-center gap-5 md:flex">
          {primaryLinks.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm font-medium text-gray-600 transition hover:text-purple-700">
              {l.label}
            </Link>
          ))}

          <div className="relative" onMouseLeave={() => setCoursesOpen(false)}>
            <button className="flex items-center gap-1 text-sm font-medium text-gray-600 transition hover:text-purple-700" onMouseEnter={() => setCoursesOpen(true)} onClick={() => setCoursesOpen(!coursesOpen)}>
              {t("nav.courses", "Courses")} <ChevronDown size={14} className={`transition-transform ${coursesOpen ? "rotate-180" : ""}`} />
            </button>
            {coursesOpen && (
              <div className="absolute left-0 top-full w-72 overflow-hidden rounded-xl border border-gray-100 bg-white shadow-xl">
                <Link href="/courses" className="block border-b border-purple-50 bg-purple-50 px-4 py-3 text-sm font-semibold text-purple-700 transition hover:bg-purple-100" onClick={() => setCoursesOpen(false)}>
                  {t("nav.viewAllCourses", "View All Courses")} →
                </Link>
                <div className="max-h-80 overflow-y-auto py-1">
                  {courses.map((c) => (
                    <Link key={c.slug} href={`/courses/${c.slug}`} className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 transition hover:bg-purple-50 hover:text-purple-700" onClick={() => setCoursesOpen(false)}>
                      <span className="leading-tight">{c.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="relative" onMouseLeave={() => setMoreOpen(false)}>
            <button className="flex items-center gap-1 text-sm font-medium text-gray-600 transition hover:text-purple-700" onMouseEnter={() => setMoreOpen(true)} onClick={() => setMoreOpen(!moreOpen)}>
              {t("nav.more", "More")} <ChevronDown size={14} className={`transition-transform ${moreOpen ? "rotate-180" : ""}`} />
            </button>
            {moreOpen && (
              <div className="absolute left-0 top-full  w-48 overflow-hidden rounded-xl border border-gray-100 bg-white shadow-lg">
                {moreLinks.map((l) =>
                  l.href === "/join-as-teacher" ? (
                    <Link key={l.href} href={l.href} className="flex items-center gap-2 border-t border-purple-50 bg-purple-50 px-4 py-2.5 text-sm font-semibold text-purple-700 transition hover:bg-purple-100" onClick={() => setMoreOpen(false)}>
                      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-purple-700 text-[9px] text-white">✦</span>
                      {l.label}
                    </Link>
                  ) : (
                    <Link key={l.href} href={l.href} className="block px-4 py-2.5 text-sm text-gray-600 transition hover:bg-purple-50 hover:text-purple-700" onClick={() => setMoreOpen(false)}>
                      {l.label}
                    </Link>
                  ),
                )}
              </div>
            )}
          </div>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <div className="relative" onMouseEnter={() => setBusinessOpen(true)} onMouseLeave={() => setBusinessOpen(false)}>
            {/* Main clickable link */}
            <Link href="/business" className="flex items-center gap-1.5 text-sm font-medium text-gray-600 transition hover:text-purple-700">
              {t("nav.business", "MedTech Businesses")}
              <ChevronDown
                size={12}
                className={`transition-transform duration-200 ${businessOpen ? "rotate-180" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setBusinessOpen((v) => !v);
                }}
              />
            </Link>

            {businessOpen && (
              <div className="absolute right-0 top-full mt-0 w-52 overflow-hidden rounded-xl border border-gray-100 bg-white shadow-xl">
                <Link href="/business/pricing" className="flex items-center gap-2 px-4 py-3 text-sm text-gray-700 transition hover:bg-purple-50 hover:text-purple-700" onClick={() => setBusinessOpen(false)}>
                  {t("nav.comparePlans", "Compare Plans")}
                </Link>

                <Link href="/business/request-demo" className="flex items-center gap-2 border-t border-gray-50 bg-purple-50 px-4 py-3 text-sm font-semibold text-purple-700 transition hover:bg-purple-100" onClick={() => setBusinessOpen(false)}>
                  {t("nav.tryBusiness", "Try MedTech Businesses")}
                </Link>
              </div>
            )}
          </div>{" "}
          {/* <Link href="/join-as-mentor" className="text-sm font-medium text-gray-600 transition hover:text-purple-700">
            {t("nav.joinAsMentor", "Join as Mentor")}
          </Link> */}
          {session ? (
            <div className="relative" onMouseLeave={() => setUserMenuOpen(false)}>
              <button className="flex items-center gap-2 rounded-full border border-purple-200 py-1 pl-1 pr-3 text-sm font-medium text-purple-700 transition hover:bg-purple-50" onMouseEnter={() => setUserMenuOpen(true)} onClick={() => setUserMenuOpen((v) => !v)}>
                {session.photo ? (
                  <span className="relative block h-7 w-7 overflow-hidden rounded-full">
                    <Image src={session.photo} alt={session.name} fill sizes="28px" unoptimized className="object-cover" />
                  </span>
                ) : (
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                    <User size={14} />
                  </span>
                )}
                <span className="max-w-25 truncate">{session.name || t("nav.account", "Account")}</span>
              </button>
              {userMenuOpen && (
                <div className="absolute right-0 top-full mt-1 w-44 overflow-hidden rounded-xl border border-gray-100 bg-white shadow-lg">
                  <div className="border-b border-gray-100 px-4 py-3">
                    <p className="text-xs font-semibold text-gray-800 truncate">{session.name}</p>
                    <p className="text-xs text-gray-400 truncate">{session.phone}</p>
                  </div>
                  <button className="flex w-full items-center gap-2 px-4 py-2.5 text-sm text-red-500 transition hover:bg-red-50" onClick={handleLogout}>
                    <LogOut size={14} /> {t("nav.logout", "Logout")}
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link href="/login" className="rounded-lg border border-purple-200 px-5 py-2 text-sm font-semibold text-purple-700 transition hover:bg-purple-50">
              {t("nav.loginSignup", "Login / Signup")}
            </Link>
          )}
          <Link href="/contact" className="rounded-lg bg-orange-500 px-5 py-2 text-sm font-semibold text-white shadow-sm shadow-orange-200 transition hover:bg-orange-600">
            {t("nav.contactUs", "Contact Us")}
          </Link>
        </div>

        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => {
            const nextOpen = !open;
            setOpen(nextOpen);
            if (!nextOpen) {
              setMobileCoursesOpen(false);
              setMobileMoreOpen(false);
            }
          }}
          aria-label={t("nav.toggleMenu", "Toggle menu")}
        >
          <span className={`h-0.5 w-6 bg-gray-700 transition-all ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-gray-700 transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-gray-700 transition-all ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="max-h-[calc(100vh-92px)] overflow-y-auto border-t border-purple-100/60 bg-white px-6 py-4 shadow-lg md:hidden">
          <nav className="flex flex-col gap-4">
            {primaryLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-gray-600 transition hover:text-purple-700"
                onClick={() => {
                  setOpen(false);
                  setMobileCoursesOpen(false);
                  setMobileMoreOpen(false);
                }}
              >
                {l.label}
              </Link>
            ))}
            <div>
              <button type="button" className="flex w-full items-center justify-between text-left text-sm font-medium text-gray-700" onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}>
                <span>{t("nav.courses", "Courses")}</span>
                <ChevronDown size={16} className={`transition-transform ${mobileCoursesOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileCoursesOpen && (
                <div className="border-purple-100 bg-purple-50/30 py-2">
                  <Link
                    href="/courses"
                    className="block px-3 py-2 text-sm font-semibold text-purple-700"
                    onClick={() => {
                      setOpen(false);
                      setMobileCoursesOpen(false);
                      setMobileMoreOpen(false);
                    }}
                  >
                    {t("nav.viewAllCourses", "View All Courses")}
                  </Link>
                  {courses.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/courses/${c.slug}`}
                      className="block px-3 py-2 text-sm text-gray-600 transition hover:text-purple-700"
                      onClick={() => {
                        setOpen(false);
                        setMobileCoursesOpen(false);
                        setMobileMoreOpen(false);
                      }}
                    >
                      {c.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <div>
              <button type="button" className="flex w-full items-center justify-between text-left text-sm font-medium text-gray-700" onClick={() => setMobileMoreOpen(!mobileMoreOpen)}>
                <span>{t("nav.more", "More")}</span>
                <ChevronDown size={16} className={`transition-transform ${mobileMoreOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileMoreOpen && (
                <div className="border-purple-100 bg-purple-50/30 py-2">
                  {moreLinks.map((l) =>
                    l.href === "/join-as-Mentor" ? (
                      <Link
                        key={l.href}
                        href={l.href}
                        className="flex items-center gap-2 mx-2 mt-1 rounded-lg bg-purple-700 px-3 py-2 text-sm font-semibold text-white transition hover:bg-purple-800"
                        onClick={() => {
                          setOpen(false);
                          setMobileCoursesOpen(false);
                          setMobileMoreOpen(false);
                        }}
                      >
                        <span className="text-[10px]">✦</span>
                        {l.label}
                      </Link>
                    ) : (
                      <Link
                        key={l.href}
                        href={l.href}
                        className="block px-3 py-2 text-sm text-gray-600 transition hover:text-purple-700"
                        onClick={() => {
                          setOpen(false);
                          setMobileCoursesOpen(false);
                          setMobileMoreOpen(false);
                        }}
                      >
                        {l.label}
                      </Link>
                    ),
                  )}
                </div>
              )}
            </div>
            <div>
              <div className="flex items-center justify-between">
                {/* Main clickable page link */}
                <Link
                  href="/business"
                  className="text-gray-600 text-sm font-medium"
                  onClick={() => {
                    setOpen(false);
                    setMobileBusinessOpen(false);
                  }}
                >
                  {t("nav.business", "MedTech Businesses")}
                </Link>

                {/* Dropdown toggle only */}
                <button type="button" className="p-1" onClick={() => setMobileBusinessOpen(!mobileBusinessOpen)} aria-expanded={mobileBusinessOpen}>
                  <ChevronDown size={14} className={`transition-transform duration-200 ${mobileBusinessOpen ? "rotate-180" : ""}`} />
                </button>
              </div>

              {mobileBusinessOpen && (
                <div className="mt-1 overflow-hidden">
                  <Link
                    href="/business/pricing"
                    className="block px-4 py-3 text-sm text-gray-700 transition hover:bg-purple-50 hover:text-purple-700"
                    onClick={() => {
                      setOpen(false);
                      setMobileBusinessOpen(false);
                    }}
                  >
                    {t("nav.comparePlans", "Compare Plans")}
                  </Link>

                  <Link
                    href="/business/request-demo"
                    className="block border-t border-gray-50 bg-purple-50 px-4 py-3 text-sm font-semibold text-purple-700 transition hover:bg-purple-100"
                    onClick={() => {
                      setOpen(false);
                      setMobileBusinessOpen(false);
                    }}
                  >
                    {t("nav.tryBusiness", "Try MedTech Businesses")}
                  </Link>
                </div>
              )}
            </div>{" "}
            {/* <Link
              href="/join-as-mentor"
              className="text-sm font-medium text-gray-600 transition hover:text-purple-700"
              onClick={() => {
                setOpen(false);
                setMobileCoursesOpen(false);
                setMobileMoreOpen(false);
              }}
            >
              Join as Mentor
            </Link> */}
            {session ? (
              <>
                <div className="flex items-center gap-3 rounded-xl border border-purple-100 bg-purple-50 px-3 py-2">
                  {session.photo ? (
                    <span className="relative block h-8 w-8 overflow-hidden rounded-full">
                      <Image src={session.photo} alt={session.name} fill sizes="32px" unoptimized className="object-cover" />
                    </span>
                  ) : (
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-200 text-purple-600">
                      <User size={16} />
                    </span>
                  )}
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-gray-800 truncate">{session.name}</p>
                    <p className="text-xs text-gray-400 truncate">{session.phone}</p>
                  </div>
                </div>
                <button type="button" className="flex w-full items-center justify-center gap-2 rounded-lg border border-red-200 py-2.5 text-sm font-semibold text-red-500 transition hover:bg-red-50" onClick={handleLogout}>
                  <LogOut size={14} /> Logout
                </button>
              </>
            ) : (
              <Link
                href="/login"
                className="mt-2 block w-full rounded-lg border border-purple-200 px-5 py-2.5 text-center text-sm font-semibold text-purple-700 transition hover:bg-purple-50"
                onClick={() => {
                  setOpen(false);
                  setMobileCoursesOpen(false);
                  setMobileMoreOpen(false);
                }}
              >
                Login / Signup
              </Link>
            )}
            <Link
              href="/contact"
              className="rounded-lg bg-orange-500 px-5 py-2.5 text-center text-sm font-semibold text-white"
              onClick={() => {
                setOpen(false);
                setMobileCoursesOpen(false);
                setMobileMoreOpen(false);
              }}
            >
              Contact Us
            </Link>

          </nav>
        </div>
      )}
    </header>
  );
}
