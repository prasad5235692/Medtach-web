"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Check, ChevronDown, Search, X } from "lucide-react";
import { Country, State } from "country-state-city";
import { useLanguage } from "@/context/LanguageContext";
import { getClientPageContent } from "@/data/clientPageContent";
import { getMissingStudentProfileFields } from "@/lib/studentProfileRequirements";
import { updateStudentProfile } from "@/lib/websiteStudentClient";

const COUNTRY_OPTIONS = Country.getAllCountries().map((country) => ({
  key: country.isoCode,
  value: country.name,
  label: country.name,
  isoCode: country.isoCode,
}));

const COUNTRY_NAME_BY_CODE = Object.fromEntries(
  COUNTRY_OPTIONS.map((country) => [country.isoCode, country.name]),
);

const ALL_STATE_OPTIONS = State.getAllStates().map((state) => ({
  key: `${state.countryCode}-${state.isoCode}`,
  value: state.name,
  label: `${state.name}, ${COUNTRY_NAME_BY_CODE[state.countryCode] || state.countryCode}`,
  countryCode: state.countryCode,
}));

function buildInitialForm(session) {
  const wp = session?.websiteProfile || {};
  return {
    name: session?.name || "",
    email: session?.email || "",
    phone: session?.phone || session?.mobile || "",
    gender: session?.gender || "",
    bio: wp.bio || "",
    qualification: wp.qualification || "",
    dateOfBirth: wp.dateOfBirth || "",
    address: wp.address || "",
    city: wp.city || "",
    state: wp.state || "",
    country: wp.country || "",
    pincode: wp.pincode || "",
  };
}

function normalizeMissingFieldList(rawMissingFields) {
  if (!Array.isArray(rawMissingFields)) {
    return [];
  }

  return rawMissingFields
    .map((field) => (typeof field === "string" ? field : field?.field))
    .filter(Boolean);
}

function formatMissingFieldsError(missingFields, content) {
  const labels = missingFields
    .map((field) => content.fields[field]?.label || field)
    .filter(Boolean);

  if (!labels.length) {
    return content.messages.errorFallback;
  }

  return content.messages.incompleteTemplate.replace("{fields}", labels.join(", "));
}

function getStateOptions(countryName) {
  const selectedCountry = COUNTRY_OPTIONS.find((country) => country.value === countryName);

  if (!selectedCountry) {
    return ALL_STATE_OPTIONS;
  }

  const statesOfCountry = State.getStatesOfCountry(selectedCountry.isoCode).map((state) => ({
    key: `${selectedCountry.isoCode}-${state.isoCode}`,
    value: state.name,
    label: state.name,
    countryCode: selectedCountry.isoCode,
  }));

  return statesOfCountry.length > 0 ? statesOfCountry : ALL_STATE_OPTIONS;
}

export default function ProfilePanel({ session, onClose, onSaved }) {
  const { language } = useLanguage();
  const content = getClientPageContent("profilePanel", language);
  const [form, setForm] = useState(() => buildInitialForm(session));
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const stateOptions = getStateOptions(form.country);

  const initials = session?.name
    ? session.name.split(" ").map((w) => w[0]).join("").toUpperCase().slice(0, 2)
    : "U";

  const handleChange = (field) => (eventOrValue) => {
    const nextValue = typeof eventOrValue === "string" ? eventOrValue : eventOrValue.target.value;

    setForm((prev) => ({ ...prev, [field]: nextValue }));
    setError("");
    setSuccess(false);
  };

  const handleCountryChange = (nextCountry) => {
    const nextStateOptions = getStateOptions(nextCountry);

    setForm((prev) => ({
      ...prev,
      country: nextCountry,
      state: nextStateOptions.some((option) => option.value === prev.state) ? prev.state : "",
    }));
    setError("");
    setSuccess(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    const missingFields = getMissingStudentProfileFields(form);

    if (missingFields.length > 0) {
      setError(formatMissingFieldsError(missingFields, content));
      return;
    }

    setSaving(true);

    const result = await updateStudentProfile({
      name: form.name,
      email: form.email,
      phone: form.phone,
      gender: form.gender,
      websiteProfile: {
        bio: form.bio,
        qualification: form.qualification,
        dateOfBirth: form.dateOfBirth,
        address: form.address,
        city: form.city,
        state: form.state,
        country: form.country,
        pincode: form.pincode,
      },
    });

    setSaving(false);

    if (!result?.success) {
      const missingServerFields = normalizeMissingFieldList(result?.data?.missingFields);

      if (/update your profile details/i.test(result?.message || "") || missingServerFields.length > 0) {
        setError(formatMissingFieldsError(missingServerFields.length > 0 ? missingServerFields : getMissingStudentProfileFields(form), content));
        return;
      }

      setError(result?.message || content.messages.errorFallback);
      return;
    }

    if (onSaved) {
      onSaved(result.data);
    }

    if (onClose) {
      onClose();
      return;
    }

    setSuccess(true);
  };

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
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {/* Avatar row */}
          <div className="mb-6 flex items-center gap-4">
            <div className="relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-full bg-purple-100">
              {session?.photo ? (
                <Image
                  src={session.photo}
                  alt={session.name || content.avatarAlt}
                  fill
                  sizes="64px"
                  unoptimized
                  className="object-cover"
                />
              ) : (
                <span className="text-xl font-bold text-purple-700">{initials}</span>
              )}
            </div>
            <div className="min-w-0">
              <p className="truncate font-semibold text-gray-900">{session?.name || content.fallbackName}</p>
              <p className="truncate text-xs text-gray-400">{session?.email}</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Basic info */}
            <section>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-gray-400">
                {content.sections.basic}
              </p>
              <div className="space-y-3">
                <FormField label={content.fields.name.label} placeholder={content.fields.name.placeholder} value={form.name} onChange={handleChange("name")} required />
                <FormField label={content.fields.email.label} placeholder={content.fields.email.placeholder} type="email" value={form.email} onChange={handleChange("email")} required />
                <FormField label={content.fields.phone.label} placeholder={content.fields.phone.placeholder} type="tel" value={form.phone} onChange={handleChange("phone")} required />
                <div>
                  <label className="mb-1 block text-xs font-medium text-gray-600">
                    {content.fields.gender.label}
                    <span className="ml-0.5 text-red-400">*</span>
                  </label>
                  <select
                    value={form.gender}
                    onChange={handleChange("gender")}
                    required
                    className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 outline-none transition focus:border-purple-400 focus:ring-2 focus:ring-purple-100"
                  >
                    {content.genderOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </section>

            {/* Additional details */}
            <section>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-gray-400">
                {content.sections.additional}
              </p>
              <div className="space-y-3">
                <FormField label={content.fields.qualification.label} placeholder={content.fields.qualification.placeholder} value={form.qualification} onChange={handleChange("qualification")} required />
                <FormField label={content.fields.dateOfBirth.label} type="date" value={form.dateOfBirth} onChange={handleChange("dateOfBirth")} required />
                <div>
                  <label className="mb-1 block text-xs font-medium text-gray-600">
                    {content.fields.bio.label}
                    <span className="ml-0.5 text-red-400">*</span>
                  </label>
                  <textarea
                    value={form.bio}
                    onChange={handleChange("bio")}
                    rows={3}
                    placeholder={content.fields.bio.placeholder}
                    required
                    className="w-full resize-none rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 outline-none transition focus:border-purple-400 focus:ring-2 focus:ring-purple-100"
                  />
                </div>
                <FormField label={content.fields.address.label} placeholder={content.fields.address.placeholder} value={form.address} onChange={handleChange("address")} required />
                <div className="grid grid-cols-2 gap-3">
                  <FormField label={content.fields.city.label} placeholder={content.fields.city.placeholder} value={form.city} onChange={handleChange("city")} required />
                  <FormField label={content.fields.pincode.label} placeholder={content.fields.pincode.placeholder} value={form.pincode} onChange={handleChange("pincode")} required />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <SearchableSelect
                    label={content.fields.state.label}
                    value={form.state}
                    options={stateOptions}
                    onChange={handleChange("state")}
                    placeholder={content.fields.state.placeholder}
                    searchPlaceholder={content.selects.searchPlaceholder}
                    noResultsLabel={content.selects.noResultsLabel}
                    required
                  />
                  <SearchableSelect
                    label={content.fields.country.label}
                    value={form.country}
                    options={COUNTRY_OPTIONS}
                    onChange={handleCountryChange}
                    placeholder={content.fields.country.placeholder}
                    searchPlaceholder={content.selects.searchPlaceholder}
                    noResultsLabel={content.selects.noResultsLabel}
                    required
                  />
                </div>
              </div>
            </section>

            {error && (
              <p className="rounded-lg bg-red-50 px-4 py-2.5 text-sm text-red-600">{error}</p>
            )}

            {success && (
              <p className="rounded-lg bg-emerald-50 px-4 py-2.5 text-sm text-emerald-700">
                {content.messages.success}
              </p>
            )}

            <button
              type="submit"
              disabled={saving}
              className="flex w-full items-center justify-center rounded-xl bg-purple-600 py-2.5 text-sm font-semibold text-white transition hover:bg-purple-700 disabled:opacity-60"
            >
              {saving ? content.actions.saving : content.actions.save}
            </button>
          </form>
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

function FormField({ label, type = "text", value, onChange, required, placeholder }) {
  return (
    <div>
      <label className="mb-1 block text-xs font-medium text-gray-600">
        {label}
        {required && <span className="ml-0.5 text-red-400">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 outline-none transition focus:border-purple-400 focus:ring-2 focus:ring-purple-100"
      />
    </div>
  );
}

function SearchableSelect({
  label,
  value,
  options,
  onChange,
  placeholder,
  searchPlaceholder,
  noResultsLabel,
  required,
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const rootRef = useRef(null);

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (rootRef.current && !rootRef.current.contains(event.target)) {
        setQuery("");
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
    };
  }, []);

  const selectedOption = options.find((option) => option.value === value);
  const normalizedQuery = query.trim().toLowerCase();
  const filteredOptions = normalizedQuery ?
    options.filter((option) => option.label.toLowerCase().includes(normalizedQuery)) :
    options;

  return (
    <div ref={rootRef} className="relative">
      <label className="mb-1 block text-xs font-medium text-gray-600">
        {label}
        {required && <span className="ml-0.5 text-red-400">*</span>}
      </label>

      <button
        type="button"
        onClick={() => {
          setOpen((current) => {
            if (current) {
              setQuery("");
            }

            return !current;
          });
        }}
        className="flex w-full items-center justify-between rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none transition focus:border-purple-400 focus:ring-2 focus:ring-purple-100"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className={selectedOption ? "text-gray-700" : "text-gray-400"}>
          {selectedOption?.label || placeholder}
        </span>
        <ChevronDown size={16} className={`text-gray-400 transition ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute z-20 mt-2 w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg">
          <div className="border-b border-gray-100 px-3 py-2">
            <div className="relative">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={searchPlaceholder}
                autoFocus
                className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2 pl-9 pr-3 text-sm text-gray-700 outline-none transition focus:border-purple-400 focus:bg-white focus:ring-2 focus:ring-purple-100"
              />
            </div>
          </div>

          <div className="max-h-60 overflow-y-auto py-1">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => {
                const isSelected = option.value === value;

                return (
                  <button
                    key={option.key || option.value}
                    type="button"
                    onClick={() => {
                      onChange(option.value);
                      setOpen(false);
                      setQuery("");
                    }}
                    className={`flex w-full items-center justify-between gap-3 px-3 py-2 text-left text-sm transition ${
                      isSelected ? "bg-purple-50 text-purple-700" : "text-gray-600 hover:bg-purple-50 hover:text-purple-700"
                    }`}
                  >
                    <span className="min-w-0 truncate">{option.label}</span>
                    {isSelected && <Check size={14} className="shrink-0" />}
                  </button>
                );
              })
            ) : (
              <p className="px-3 py-3 text-sm text-gray-400">{noResultsLabel}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
