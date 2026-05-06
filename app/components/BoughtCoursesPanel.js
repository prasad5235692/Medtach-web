"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, BookOpen, Clock } from "lucide-react";
import { getClientPageContent } from "@/data/clientPageContent";
import { useLanguage } from "@/context/LanguageContext";
import { fetchStudentPurchases } from "@/lib/websiteStudentClient";

const STATUS_COLORS = {
  inactive: "bg-amber-100 text-amber-700",
  active: "bg-emerald-100 text-emerald-700",
  canceled: "bg-rose-100 text-rose-700",
};

function getLocaleTag(language) {
  if (language === "hi") {
    return "hi-IN";
  }

  if (language === "ml") {
    return "ml-IN";
  }

  return "en-IN";
}

function formatDate(dateStr, localeTag) {
  if (!dateStr) return "";

  try {
    return new Date(dateStr).toLocaleDateString(localeTag, {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  } catch {
    return "";
  }
}

export default function BoughtCoursesPanel({ onClose }) {
  const { language } = useLanguage();
  const content = getClientPageContent("boughtCoursesPanel", language);
  const localeTag = getLocaleTag(language);
  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    fetchStudentPurchases().then((payload) => {
      if (cancelled) return;
      setPurchases(Array.isArray(payload?.data) ? payload.data : []);
      setLoading(false);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <>
      <div
        className="fixed inset-0 z-50 bg-black/30 backdrop-blur-[2px]"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        className="fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col bg-white shadow-2xl"
        style={{ animation: "panel-slide-in 260ms cubic-bezier(0.4,0,0.2,1) both" }}
        role="dialog"
        aria-modal="true"
        aria-label={content.dialogLabel}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
          <h2 className="text-base font-semibold text-gray-900">{content.title}</h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
            aria-label={content.closeLabel}
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-4 py-4">
          {loading ? (
            <div className="flex flex-col items-center justify-center gap-3 py-20 text-gray-400">
              <BookOpen size={32} className="animate-pulse text-purple-300" />
              <p className="text-sm">{content.loading}</p>
            </div>
          ) : purchases.length === 0 ? (
            <div className="flex flex-col items-center justify-center gap-3 py-20 text-gray-400">
              <BookOpen size={32} />
              <p className="text-sm">{content.empty}</p>
            </div>
          ) : (
            <ul className="space-y-3">
              {purchases.map((purchase) => {
                const title = purchase.title || purchase.course?.title || content.untitledCourse;
                const thumbnail = purchase.thumbnail || purchase.course?.thumbnail || "";
                const normalizedStatus = String(purchase.courseStatus || "").toLowerCase();
                const statusLabel = content.statusLabels[normalizedStatus] ?? String(purchase.courseStatus || "").toUpperCase();
                const statusColor = STATUS_COLORS[normalizedStatus] || "bg-gray-100 text-gray-600";
                const purchaseId = String(
                  purchase.id ||
                  purchase.purchasedId ||
                  purchase.courseId ||
                  `${title}-${purchase.purchasedAt || ""}`,
                );

                return (
                  <li
                    key={purchaseId}
                    className="flex items-start gap-3 rounded-xl border border-gray-100 bg-white p-3 shadow-sm"
                  >
                    {/* Thumbnail */}
                    <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-purple-50">
                      {thumbnail ? (
                        <Image
                          src={thumbnail}
                          alt={title}
                          fill
                          sizes="48px"
                          unoptimized
                          className="object-cover"
                        />
                      ) : (
                        <BookOpen size={20} className="text-purple-300" />
                      )}
                    </div>

                    {/* Details */}
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-gray-900">{title}</p>
                      {purchase.purchasedAt && (
                        <p className="mt-0.5 flex items-center gap-1 text-xs text-gray-400">
                          <Clock size={11} />
                          {formatDate(purchase.purchasedAt, localeTag)}
                        </p>
                      )}
                    </div>

                    {/* Status pill */}
                    <span
                      className={`shrink-0 self-center rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${statusColor}`}
                    >
                      {statusLabel}
                    </span>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>

      <style jsx global>{`
        @keyframes panel-slide-in {
          from { transform: translateX(100%); opacity: 0.85; }
          to   { transform: translateX(0);    opacity: 1;    }
        }
      `}</style>
    </>
  );
}
