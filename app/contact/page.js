"use client";
import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";
import { getClientPageContent } from "@/data/clientPageContent";
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from "lucide-react";

const contactIcons = {
  "map-pin": MapPin,
  phone: Phone,
  mail: Mail,
  clock: Clock,
};

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const { language } = useLanguage();
  const content = getClientPageContent("contact", language);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#faf5ff] pb-16 pt-36">
        {/* Gradient blobs */}
        <div aria-hidden="true" className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-purple-200/20 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute right-0 bottom-0 h-56 w-56 rounded-full bg-orange-200/15 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-purple-700">{content.hero.label}</p>
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">{content.hero.title}</h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-gray-500">{content.hero.description}</p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="relative overflow-hidden bg-[#f8fafc] py-16">
        {/* Fine dot grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "radial-gradient(circle, #7E22CE 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="page-container relative grid grid-cols-1 gap-12 lg:grid-cols-3">

          {/* Contact info */}
          <div className="flex flex-col gap-6">
            <SectionHeading label={content.infoSection.label} title={content.infoSection.title} />
            {content.contactInfo.map(({ id, icon, label, value }) => {
              const Icon = contactIcons[icon] ?? MapPin;

              return (
              <div key={id} className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-700">
                  <Icon size={18} strokeWidth={1.8} />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">{label}</p>
                  <p className="mt-0.5 text-sm text-gray-600">{value}</p>
                </div>
              </div>
              );
            })}
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            {sent ? (
              <div className="flex flex-col items-center rounded-2xl border border-green-200 bg-green-50 p-10 text-center shadow-sm">
                <CheckCircle2 size={52} className="text-green-500" strokeWidth={1.5} />
                <h3 className="mt-4 text-xl font-bold text-gray-900">{content.form.successTitle}</h3>
                <p className="mt-2 text-sm text-gray-500">{content.form.successDescription}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {content.form.fields.map((field) => (
                    <div key={field.id} className="flex flex-col gap-1.5">
                      <label htmlFor={field.id} className="text-xs font-medium text-gray-500">
                        {field.label}
                      </label>
                      <input
                        id={field.id}
                        type={field.type}
                        required
                        placeholder={field.placeholder}
                        value={form[field.id]}
                        onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                        className="rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-300 focus:border-purple-500 focus:outline-none"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-medium text-gray-500">{content.form.messageLabel}</label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    placeholder={content.form.messagePlaceholder}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-300 focus:border-purple-500 focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="self-start rounded-lg bg-purple-700 px-8 py-3 text-sm font-semibold text-white transition hover:bg-purple-800"
                >
                  {content.form.submitLabel}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
