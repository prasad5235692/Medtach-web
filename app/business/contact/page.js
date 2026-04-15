"use client";
import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

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
      <section className="bg-linear-to-br from-[#042a2b] to-[#0a4d4f] py-20 text-white">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-400">Get in Touch</p>
          <h1 className="mt-3 text-4xl font-extrabold md:text-5xl">
            Let&#39;s Build Your Training Plan
          </h1>
          <p className="mt-5 text-base text-teal-100/80">
            Tell us about your team and we&#39;ll get back within one business day
            with a tailored proposal.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Contact details */}
            <div>
              <h2 className="text-xl font-bold text-gray-900">Contact Details</h2>
              <p className="mt-2 text-sm text-gray-500">
                Prefer to speak directly? Reach us through any of these channels.
              </p>
              <div className="mt-8 flex flex-col gap-5">
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-4 rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition hover:border-teal-200"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-600">
                    <Phone size={18} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Call Us</p>
                    <p className="text-sm font-medium text-gray-800">+91 98765 43210</p>
                  </div>
                </a>
                <a
                  href="mailto:business@medtechcareer.com"
                  className="flex items-center gap-4 rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition hover:border-teal-200"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-600">
                    <Mail size={18} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Email Us</p>
                    <p className="text-sm font-medium text-gray-800">business@medtechcareer.com</p>
                  </div>
                </a>
                <div className="flex items-center gap-4 rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-600">
                    <MapPin size={18} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Office</p>
                    <p className="text-sm font-medium text-gray-800">
                      12 Innovation Park, Bengaluru, KA 560001
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              {submitted ? (
                <div className="flex flex-col items-center justify-center rounded-2xl border border-teal-200 bg-teal-50 p-10 text-center">
                  <Send size={36} className="text-teal-600" />
                  <h3 className="mt-4 text-lg font-bold text-gray-900">Message Sent!</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Thank you. Our enterprise team will reach out within one business day.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm"
                >
                  <h2 className="text-lg font-bold text-gray-900">Request a Demo</h2>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-gray-600" htmlFor="name">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Dr. Kavitha R."
                        className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-gray-800 outline-none transition focus:border-teal-400 focus:ring-2 focus:ring-teal-100"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-gray-600" htmlFor="email">
                        Work Email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@hospital.com"
                        className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-gray-800 outline-none transition focus:border-teal-400 focus:ring-2 focus:ring-teal-100"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-gray-600" htmlFor="phone">
                        Phone *
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 9876543210"
                        className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-gray-800 outline-none transition focus:border-teal-400 focus:ring-2 focus:ring-teal-100"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-gray-600" htmlFor="organisation">
                        Organisation *
                      </label>
                      <input
                        id="organisation"
                        name="organisation"
                        required
                        value={form.organisation}
                        onChange={handleChange}
                        placeholder="Apollo Hospitals"
                        className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-gray-800 outline-none transition focus:border-teal-400 focus:ring-2 focus:ring-teal-100"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5 sm:col-span-2">
                      <label className="text-xs font-semibold text-gray-600" htmlFor="teamSize">
                        Team Size
                      </label>
                      <select
                        id="teamSize"
                        name="teamSize"
                        value={form.teamSize}
                        onChange={handleChange}
                        className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-gray-800 outline-none transition focus:border-teal-400 focus:ring-2 focus:ring-teal-100"
                      >
                        <option value="">Select team size</option>
                        <option value="1-10">1 – 10 employees</option>
                        <option value="11-50">11 – 50 employees</option>
                        <option value="51-200">51 – 200 employees</option>
                        <option value="200+">200+ employees</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-1.5 sm:col-span-2">
                      <label className="text-xs font-semibold text-gray-600" htmlFor="message">
                        How can we help?
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us about your training goals..."
                        className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-gray-800 outline-none transition focus:border-teal-400 focus:ring-2 focus:ring-teal-100"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="mt-6 w-full rounded-xl bg-teal-600 py-3 text-sm font-semibold text-white transition hover:bg-teal-700"
                  >
                    Send Request
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
