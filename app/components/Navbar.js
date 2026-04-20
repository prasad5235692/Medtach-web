"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, LogOut, User } from "lucide-react";
import { getCourses } from "@/data/courses";
import { getClientPageContent } from "@/data/clientPageContent";
import { useAuth } from "@/context/AuthContext";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const { session, logout } = useAuth();
  const { language } = useLanguage();
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [businessOpen, setBusinessOpen] = useState(false);
  const [mobileBusinessOpen, setMobileBusinessOpen] = useState(false);
  const content = getClientPageContent("siteNavbar", language);

  const primaryLinks = content.primaryLinks;
  const moreLinks = content.moreLinks;
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
          <Image src="/logo.png" alt={content.logoAlt} width={180} height={62} className="h-16 w-auto object-contain" priority />
        </Link>

        <nav className="hidden items-center gap-5 md:flex">
          {primaryLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-gray-600 transition hover:text-purple-700">
              {link.label}
            </Link>
          ))}

          <div className="relative" onMouseLeave={() => setCoursesOpen(false)}>
            <button className="flex items-center gap-1 text-sm font-medium text-gray-600 transition hover:text-purple-700" onMouseEnter={() => setCoursesOpen(true)} onClick={() => setCoursesOpen(!coursesOpen)}>
              {content.coursesLabel} <ChevronDown size={14} className={`transition-transform ${coursesOpen ? "rotate-180" : ""}`} />
            </button>
            {coursesOpen && (
              <div className="absolute left-0 top-full w-72 overflow-hidden rounded-xl border border-gray-100 bg-white shadow-xl">
                <Link href="/courses" className="block border-b border-purple-50 bg-purple-50 px-4 py-3 text-sm font-semibold text-purple-700 transition hover:bg-purple-100" onClick={() => setCoursesOpen(false)}>
                  {content.viewAllCoursesLabel} →
                </Link>
                <div className="max-h-80 overflow-y-auto py-1">
                  {courses.map((course) => (
                    <Link key={course.slug} href={`/courses/${course.slug}`} className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 transition hover:bg-purple-50 hover:text-purple-700" onClick={() => setCoursesOpen(false)}>
                      <span className="leading-tight">{course.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="relative" onMouseLeave={() => setMoreOpen(false)}>
            <button className="flex items-center gap-1 text-sm font-medium text-gray-600 transition hover:text-purple-700" onMouseEnter={() => setMoreOpen(true)} onClick={() => setMoreOpen(!moreOpen)}>
              {content.moreLabel} <ChevronDown size={14} className={`transition-transform ${moreOpen ? "rotate-180" : ""}`} />
            </button>
            {moreOpen && (
              <div className="absolute left-0 top-full w-48 overflow-hidden rounded-xl border border-gray-100 bg-white shadow-lg">
                {moreLinks.map((link) =>
                  link.href === "/join-as-teacher" ? (
                    <Link key={link.href} href={link.href} className="flex items-center gap-2 border-t border-purple-50 bg-purple-50 px-4 py-2.5 text-sm font-semibold text-purple-700 transition hover:bg-purple-100" onClick={() => setMoreOpen(false)}>
                      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-purple-700 text-[9px] text-white">✦</span>
                      {link.label}
                    </Link>
                  ) : (
                    <Link key={link.href} href={link.href} className="block px-4 py-2.5 text-sm text-gray-600 transition hover:bg-purple-50 hover:text-purple-700" onClick={() => setMoreOpen(false)}>
                      {link.label}
                    </Link>
                  ),
                )}
              </div>
            )}
          </div>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <div className="relative" onMouseEnter={() => setBusinessOpen(true)} onMouseLeave={() => setBusinessOpen(false)}>
            <Link href="/business" className="flex items-center gap-1.5 text-sm font-medium text-gray-600 transition hover:text-purple-700">
              {content.business.label}
              <ChevronDown
                size={12}
                className={`transition-transform duration-200 ${businessOpen ? "rotate-180" : ""}`}
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  setBusinessOpen((value) => !value);
                }}
              />
            </Link>

            {businessOpen && (
              <div className="absolute right-0 top-full mt-0 w-52 overflow-hidden rounded-xl border border-gray-100 bg-white shadow-xl">
                <Link href="/business/pricing" className="flex items-center gap-2 px-4 py-3 text-sm text-gray-700 transition hover:bg-purple-50 hover:text-purple-700" onClick={() => setBusinessOpen(false)}>
                  {content.business.comparePlansLabel}
                </Link>

                <Link href="/business/request-demo" className="flex items-center gap-2 border-t border-gray-50 bg-purple-50 px-4 py-3 text-sm font-semibold text-purple-700 transition hover:bg-purple-100" onClick={() => setBusinessOpen(false)}>
                  {content.business.tryLabel}
                </Link>
              </div>
            )}
          </div>
          {session ? (
            <div className="relative" onMouseLeave={() => setUserMenuOpen(false)}>
              <button className="flex items-center gap-2 rounded-full border border-purple-200 py-1 pl-1 pr-3 text-sm font-medium text-purple-700 transition hover:bg-purple-50" onMouseEnter={() => setUserMenuOpen(true)} onClick={() => setUserMenuOpen((value) => !value)}>
                {session.photo ? (
                  <span className="relative block h-7 w-7 overflow-hidden rounded-full">
                    <Image src={session.photo} alt={session.name} fill sizes="28px" unoptimized className="object-cover" />
                  </span>
                ) : (
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                    <User size={14} />
                  </span>
                )}
                <span className="max-w-25 truncate">{session.name || content.accountFallback}</span>
              </button>
              {userMenuOpen && (
                <div className="absolute right-0 top-full mt-1 w-44 overflow-hidden rounded-xl border border-gray-100 bg-white shadow-lg">
                  <div className="border-b border-gray-100 px-4 py-3">
                    <p className="truncate text-xs font-semibold text-gray-800">{session.name}</p>
                    <p className="truncate text-xs text-gray-400">{session.phone}</p>
                  </div>
                  <button className="flex w-full items-center gap-2 px-4 py-2.5 text-sm text-red-500 transition hover:bg-red-50" onClick={handleLogout}>
                    <LogOut size={14} /> {content.logoutLabel}
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link href="/login" className="rounded-lg border border-purple-200 px-5 py-2 text-sm font-semibold text-purple-700 transition hover:bg-purple-50">
              {content.loginSignupLabel}
            </Link>
          )}
          <Link href="/contact" className="rounded-lg bg-orange-500 px-5 py-2 text-sm font-semibold text-white shadow-sm shadow-orange-200 transition hover:bg-orange-600">
            {content.contactUsLabel}
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
          aria-label={content.toggleMenuLabel}
        >
          <span className={`h-0.5 w-6 bg-gray-700 transition-all ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-gray-700 transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-gray-700 transition-all ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="max-h-[calc(100vh-92px)] overflow-y-auto border-t border-purple-100/60 bg-white px-6 py-4 shadow-lg md:hidden">
          <nav className="flex flex-col gap-4">
            {primaryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 transition hover:text-purple-700"
                onClick={() => {
                  setOpen(false);
                  setMobileCoursesOpen(false);
                  setMobileMoreOpen(false);
                }}
              >
                {link.label}
              </Link>
            ))}
            <div>
              <button type="button" className="flex w-full items-center justify-between text-left text-sm font-medium text-gray-700" onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}>
                <span>{content.coursesLabel}</span>
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
                    {content.viewAllCoursesLabel}
                  </Link>
                  {courses.map((course) => (
                    <Link
                      key={course.slug}
                      href={`/courses/${course.slug}`}
                      className="block px-3 py-2 text-sm text-gray-600 transition hover:text-purple-700"
                      onClick={() => {
                        setOpen(false);
                        setMobileCoursesOpen(false);
                        setMobileMoreOpen(false);
                      }}
                    >
                      {course.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <div>
              <button type="button" className="flex w-full items-center justify-between text-left text-sm font-medium text-gray-700" onClick={() => setMobileMoreOpen(!mobileMoreOpen)}>
                <span>{content.moreLabel}</span>
                <ChevronDown size={16} className={`transition-transform ${mobileMoreOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileMoreOpen && (
                <div className="border-purple-100 bg-purple-50/30 py-2">
                  {moreLinks.map((link) =>
                    link.href === "/join-as-Mentor" ? (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="mx-2 mt-1 flex items-center gap-2 rounded-lg bg-purple-700 px-3 py-2 text-sm font-semibold text-white transition hover:bg-purple-800"
                        onClick={() => {
                          setOpen(false);
                          setMobileCoursesOpen(false);
                          setMobileMoreOpen(false);
                        }}
                      >
                        <span className="text-[10px]">✦</span>
                        {link.label}
                      </Link>
                    ) : (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-3 py-2 text-sm text-gray-600 transition hover:text-purple-700"
                        onClick={() => {
                          setOpen(false);
                          setMobileCoursesOpen(false);
                          setMobileMoreOpen(false);
                        }}
                      >
                        {link.label}
                      </Link>
                    ),
                  )}
                </div>
              )}
            </div>
            <div>
              <div className="flex items-center justify-between">
                <Link
                  href="/business"
                  className="text-sm font-medium text-gray-600"
                  onClick={() => {
                    setOpen(false);
                    setMobileBusinessOpen(false);
                  }}
                >
                  {content.business.label}
                </Link>

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
                    {content.business.comparePlansLabel}
                  </Link>

                  <Link
                    href="/business/request-demo"
                    className="block border-t border-gray-50 bg-purple-50 px-4 py-3 text-sm font-semibold text-purple-700 transition hover:bg-purple-100"
                    onClick={() => {
                      setOpen(false);
                      setMobileBusinessOpen(false);
                    }}
                  >
                    {content.business.tryLabel}
                  </Link>
                </div>
              )}
            </div>
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
                    <p className="truncate text-sm font-semibold text-gray-800">{session.name}</p>
                    <p className="truncate text-xs text-gray-400">{session.phone}</p>
                  </div>
                </div>
                <button type="button" className="flex w-full items-center justify-center gap-2 rounded-lg border border-red-200 py-2.5 text-sm font-semibold text-red-500 transition hover:bg-red-50" onClick={handleLogout}>
                  <LogOut size={14} /> {content.logoutLabel}
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
                {content.loginSignupLabel}
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
              {content.contactUsLabel}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}