"use client";
import { useState, useRef } from "react";
import { X, Eye, EyeOff, Upload, User, Mail, Phone, Lock } from "lucide-react";

export default function LoginModal({ onClose }) {
  const [tab, setTab] = useState("login"); // "login" | "signup"
  const [screen, setScreen] = useState("auth"); // "auth" | "details"
  const [showPassword, setShowPassword] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);

  const [form, setForm] = useState({
    phone: "",
    password: "",
    name: "",
    email: "",
    image: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateAuth = () => {
    const errs = {};
    if (!form.phone.trim()) {
      errs.phone = "Phone number is required";
    } else if (!/^\+?[\d\s\-()/]{7,15}$/.test(form.phone.replace(/\s/g, ""))) {
      errs.phone = "Enter a valid phone number";
    }
    if (!form.password) {
      errs.password = "Password is required";
    } else if (form.password.length < 8) {
      errs.password = "Password must be at least 8 characters";
    }
    return errs;
  };

  const validateDetails = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Full name is required";
    if (!form.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = "Enter a valid email address";
    }
    return errs;
  };

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    const errs = validateAuth();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setScreen("details");
  };

  const handleDetailsSubmit = (e) => {
    e.preventDefault();
    const errs = validateDetails();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    onClose();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      setErrors((prev) => ({ ...prev, image: "Image must be less than 5 MB" }));
      return;
    }
    setForm((prev) => ({ ...prev, image: file }));
    const reader = new FileReader();
    reader.onload = (ev) => setImagePreview(ev.target.result);
    reader.readAsDataURL(file);
    setErrors((prev) => ({ ...prev, image: "" }));
  };

  const switchTab = (t) => { setTab(t); setErrors({}); };

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="relative w-full max-w-md rounded-2xl bg-white shadow-2xl">

        {/* ── Header ── */}
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
          <div>
            <h2 className="text-lg font-bold text-gray-800">
              {screen === "auth" ? (tab === "login" ? "Welcome back" : "Create an account") : "Complete your profile"}
            </h2>
            {screen === "details" && (
              <p className="text-xs text-gray-400 mt-0.5">Step 2 of 2 — Just a few more details</p>
            )}
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-1.5 text-gray-400 transition hover:bg-gray-100 hover:text-gray-600"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        {/* ── Step indicator ── */}
        <div className="flex items-center gap-0 px-6 pt-4">
          <div className={`h-1.5 flex-1 rounded-l-full transition-colors ${screen === "auth" || screen === "details" ? "bg-purple-600" : "bg-gray-200"}`} />
          <div className={`h-1.5 flex-1 rounded-r-full transition-colors ${screen === "details" ? "bg-purple-600" : "bg-gray-200"}`} />
        </div>

        {/* ═══════════════ AUTH SCREEN ═══════════════ */}
        {screen === "auth" && (
          <div className="px-6 py-5">
            {/* Tabs */}
            <div className="mb-5 flex rounded-xl bg-gray-100 p-1">
              {["login", "signup"].map((t) => (
                <button
                  key={t}
                  type="button"
                  className={`flex-1 rounded-lg py-2 text-sm font-semibold capitalize transition ${
                    tab === t ? "bg-white text-purple-700 shadow-sm" : "text-gray-500 hover:text-gray-700"
                  }`}
                  onClick={() => switchTab(t)}
                >
                  {t === "login" ? "Login" : "Sign Up"}
                </button>
              ))}
            </div>

            <form onSubmit={handleAuthSubmit} className="flex flex-col gap-4" noValidate>
              {/* Phone */}
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Phone Number</label>
                <div className="relative">
                  <Phone size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className={`w-full rounded-lg border py-2.5 pl-9 pr-4 text-sm outline-none transition focus:ring-2 focus:ring-purple-200 ${
                      errors.phone ? "border-red-400 bg-red-50 focus:border-red-400" : "border-gray-200 focus:border-purple-400"
                    }`}
                  />
                </div>
                {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
              </div>

              {/* Password */}
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Password</label>
                <div className="relative">
                  <Lock size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Min. 8 characters"
                    className={`w-full rounded-lg border py-2.5 pl-9 pr-10 text-sm outline-none transition focus:ring-2 focus:ring-purple-200 ${
                      errors.password ? "border-red-400 bg-red-50 focus:border-red-400" : "border-gray-200 focus:border-purple-400"
                    }`}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    onClick={() => setShowPassword((v) => !v)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
                {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password}</p>}
              </div>

              {tab === "login" && (
                <div className="text-right -mt-2">
                  <button type="button" className="text-xs text-purple-600 hover:underline">
                    Forgot password?
                  </button>
                </div>
              )}

              <button
                type="submit"
                className="mt-1 w-full rounded-lg bg-purple-700 py-2.5 text-sm font-semibold text-white transition hover:bg-purple-800 active:scale-[0.98]"
              >
                {tab === "login" ? "Login & Continue" : "Sign Up & Continue"}
              </button>

              <p className="text-center text-xs text-gray-500">
                {tab === "login" ? (
                  <>Don&apos;t have an account?{" "}
                    <button type="button" className="font-semibold text-purple-600 hover:underline" onClick={() => switchTab("signup")}>
                      Sign Up
                    </button>
                  </>
                ) : (
                  <>Already have an account?{" "}
                    <button type="button" className="font-semibold text-purple-600 hover:underline" onClick={() => switchTab("login")}>
                      Login
                    </button>
                  </>
                )}
              </p>
            </form>
          </div>
        )}

        {/* ═══════════════ DETAILS SCREEN ═══════════════ */}
        {screen === "details" && (
          <div className="px-6 py-5">
            <form onSubmit={handleDetailsSubmit} className="flex flex-col gap-4" noValidate>
              {/* Image Upload */}
              <div className="flex flex-col items-center gap-2">
                <button
                  type="button"
                  className="relative flex h-24 w-24 cursor-pointer items-center justify-center overflow-hidden rounded-full border-2 border-dashed border-purple-300 bg-purple-50 transition hover:border-purple-500 hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-300"
                  onClick={() => fileInputRef.current?.click()}
                  aria-label="Upload profile photo"
                >
                  {imagePreview ? (
                    <img src={imagePreview} alt="Profile preview" className="h-full w-full object-cover" />
                  ) : (
                    <div className="flex flex-col items-center gap-1 text-purple-400">
                      <Upload size={22} />
                      <span className="text-xs font-medium">Photo</span>
                    </div>
                  )}
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/png, image/jpeg, image/webp"
                  className="hidden"
                  onChange={handleImageChange}
                />
                <p className="text-xs text-gray-400">
                  {imagePreview ? "Click to change photo" : "Upload a profile photo (optional)"}
                </p>
                {errors.image && <p className="text-xs text-red-500">{errors.image}</p>}
              </div>

              {/* Name */}
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Full Name <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <User size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`w-full rounded-lg border py-2.5 pl-9 pr-4 text-sm outline-none transition focus:ring-2 focus:ring-purple-200 ${
                      errors.name ? "border-red-400 bg-red-50 focus:border-red-400" : "border-gray-200 focus:border-purple-400"
                    }`}
                  />
                </div>
                {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Email Address <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <Mail size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={`w-full rounded-lg border py-2.5 pl-9 pr-4 text-sm outline-none transition focus:ring-2 focus:ring-purple-200 ${
                      errors.email ? "border-red-400 bg-red-50 focus:border-red-400" : "border-gray-200 focus:border-purple-400"
                    }`}
                  />
                </div>
                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
              </div>

              <div className="flex gap-3 pt-1">
                <button
                  type="button"
                  className="flex-1 rounded-lg border border-gray-200 py-2.5 text-sm font-semibold text-gray-600 transition hover:bg-gray-50"
                  onClick={() => { setScreen("auth"); setErrors({}); }}
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 rounded-lg bg-purple-700 py-2.5 text-sm font-semibold text-white transition hover:bg-purple-800 active:scale-[0.98]"
                >
                  Complete Setup
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
