"use client";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { getBusinessContactContent } from "@/business/contact/data/content";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const detailIcons = {
  phone: Phone,
  mail: Mail,
  "map-pin": MapPin,
};

export default function BusinessContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    organisation: "",
    teamSize: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const { language } = useLanguage();
  const content = getBusinessContactContent(language);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire to backend / CRM
    setSubmitted(true);
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-linear-to-br from-[#0d0422] to-[#0f172a] py-20 text-white">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-purple-400">{content.hero.label}</p>
          <h1 className="mt-3 text-4xl font-extrabold md:text-5xl">
            {content.hero.title}
          </h1>
          <p className="mt-5 text-base text-purple-100/80">{content.hero.description}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Contact details */}
            <div>
              <h2 className="text-xl font-bold text-gray-900">{content.detailsSection.title}</h2>
              <p className="mt-2 text-sm text-gray-500">{content.detailsSection.description}</p>
              <div className="mt-8 flex flex-col gap-5">
                {content.detailsSection.items.map((item) => {
                  const Icon = detailIcons[item.icon] ?? Phone;
                  const cardContent = (
                    <>
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-50 text-purple-700">
                        <Icon size={18} />
                      </span>
                      <div>
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{item.label}</p>
                        <p className="text-sm font-medium text-gray-800">{item.value}</p>
                      </div>
                    </>
                  );

                  if (item.href) {
                    return (
                      <a
                        key={item.id}
                        href={item.href}
                        className="flex items-center gap-4 rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition hover:border-purple-200"
                      >
                        {cardContent}
                      </a>
                    );
                  }

                  return (
                    <div key={item.id} className="flex items-center gap-4 rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
                      {cardContent}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Form */}
            <div>
              {submitted ? (
                <div className="flex flex-col items-center justify-center rounded-2xl border border-purple-200 bg-purple-50 p-10 text-center">
                  <Send size={36} className="text-purple-700" />
                  <h3 className="mt-4 text-lg font-bold text-gray-900">{content.form.successTitle}</h3>
                  <p className="mt-2 text-sm text-gray-500">{content.form.successDescription}</p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm"
                >
                  <h2 className="text-lg font-bold text-gray-900">{content.form.title}</h2>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {content.form.fields.map((field) => (
                      <div key={field.id} className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold text-gray-600" htmlFor={field.id}>
                          {field.label}
                        </label>
                        <input
                          id={field.id}
                          name={field.id}
                          type={field.type}
                          required
                          value={form[field.id]}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-gray-800 outline-none transition focus:border-purple-400 focus:ring-2 focus:ring-purple-100"
                        />
                      </div>
                    ))}
                    <div className="flex flex-col gap-1.5 sm:col-span-2">
                      <label className="text-xs font-semibold text-gray-600" htmlFor="teamSize">
                        {content.form.teamSizeLabel}
                      </label>
                      <select
                        id="teamSize"
                        name="teamSize"
                        value={form.teamSize}
                        onChange={handleChange}
                        className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-gray-800 outline-none transition focus:border-purple-400 focus:ring-2 focus:ring-purple-100"
                      >
                        <option value="">{content.form.teamSizePlaceholder}</option>
                        {content.form.teamSizes.map((size) => <option key={size.id} value={size.id}>{size.label}</option>)}
                      </select>
                    </div>
                    <div className="flex flex-col gap-1.5 sm:col-span-2">
                      <label className="text-xs font-semibold text-gray-600" htmlFor="message">
                        {content.form.messageLabel}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={form.message}
                        onChange={handleChange}
                        placeholder={content.form.messagePlaceholder}
                        className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-gray-800 outline-none transition focus:border-purple-400 focus:ring-2 focus:ring-purple-100"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="mt-6 w-full rounded-xl bg-purple-700 py-3 text-sm font-semibold text-white transition hover:bg-purple-800"
                  >
                    {content.form.submitLabel}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
