"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Eye, EyeOff, Upload, User, Mail, Phone, Lock, CheckCircle } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { loginStudent, signupStudent } from "@/lib/websiteStudentClient";

export default function LoginPage() {
  const router = useRouter();
  const { session, loading, saveSession } = useAuth();

  const [tab, setTab] = useState("login"); // "login" | "signup"
  // For signup only: "creds" → "profile"
  const [signupStep, setSignupStep] = useState("creds");
  const [showPassword, setShowPassword] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);

  const [form, setForm] = useState({ phone: "", password: "", name: "", email: "" });
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!loading && session) router.replace("/my-courses");
  }, [loading, session, router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
    if (submitError) setSubmitError("");
  };

  const validateCreds = () => {
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

  const validateProfile = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Full name is required";
    if (!form.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = "Enter a valid email address";
    }
    return errs;
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const errs = validateCreds();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setSubmitting(true);
    setSubmitError("");

    const payload = await loginStudent({
      phone: form.phone,
      password: form.password,
    });

    if (!payload?.success) {
      setSubmitError(payload?.message || "Only registered students can log in.");
      setSubmitting(false);
      return;
    }

    saveSession(payload?.data?.userData || null);
    router.replace("/my-courses");
    router.refresh();
  };

  // SIGNUP step 1: validate creds, move to profile step
  const handleSignupCredsSubmit = (e) => {
    e.preventDefault();
    const errs = validateCreds();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setSignupStep("profile");
  };

  // SIGNUP step 2: validate profile, save session
  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    const errs = validateProfile();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setSubmitting(true);
    setSubmitError("");

    const payload = await signupStudent({
      phone: form.phone,
      password: form.password,
      name: form.name,
      email: form.email,
      photo: imagePreview ?? "",
    });

    if (!payload?.success) {
      setSubmitError(payload?.message || "Unable to create the student account.");
      setSubmitting(false);
      return;
    }

    saveSession(payload?.data?.userData || null);
    router.replace("/my-courses");
    router.refresh();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      setErrors((prev) => ({ ...prev, image: "Image must be less than 5 MB" }));
      return;
    }
    const reader = new FileReader();
    reader.onload = (ev) => setImagePreview(ev.target.result);
    reader.readAsDataURL(file);
    setErrors((prev) => ({ ...prev, image: "" }));
  };

  const switchTab = (t) => {
    setTab(t);
    setErrors({});
    setSubmitError("");
    setSignupStep("creds");
    setShowPassword(false);
  };

  const isSignupProfile = tab === "signup" && signupStep === "profile";

  if (loading) return null;

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f3f0ff] px-4 py-24">
      <div className="w-full max-w-md">

        {/* Brand */}
        <div className="mb-8 text-center">
          <Link href="/">
            <Image src="/logo.png" alt="Medtech Career" width={160} height={55} className="mx-auto h-14 w-auto object-contain" />
          </Link>
          <p className="mt-2 text-sm text-gray-500">
            {isSignupProfile ? "Complete your profile" : tab === "login" ? "Sign in to your account" : "Create a new account"}
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-gray-100">

          {/* Signup step progress bar — only for signup */}
          {tab === "signup" && (
            <>
              <div className="flex">
                <div className="h-1 flex-1 bg-purple-600" />
                <div className={`h-1 flex-1 transition-colors ${signupStep === "profile" ? "bg-purple-600" : "bg-gray-200"}`} />
              </div>
              <div className="flex items-center justify-between px-6 pt-3 pb-0">
                <StepDot num={1} active label="Account" done={signupStep === "profile"} />
                <div className={`h-px flex-1 mx-3 transition-colors ${signupStep === "profile" ? "bg-purple-300" : "bg-gray-200"}`} />
                <StepDot num={2} active={signupStep === "profile"} label="Profile" done={false} />
              </div>
            </>
          )}

          <div className="px-6 py-6">
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

            {/* ── LOGIN ── */}
            {tab === "login" && (
              <form onSubmit={handleLoginSubmit} className="flex flex-col gap-4" noValidate>
                <Field label="Phone Number" Icon={Phone} type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" error={errors.phone} />
                <PasswordField value={form.password} onChange={handleChange} show={showPassword} toggle={() => setShowPassword((v) => !v)} error={errors.password} />
                {submitError && <p className="rounded-lg bg-red-50 px-3 py-2 text-xs font-medium text-red-600">{submitError}</p>}
                <div className="-mt-2 text-right">
                  <button type="button" className="text-xs text-purple-600 hover:underline">Forgot password?</button>
                </div>
                <button type="submit" disabled={submitting} className="mt-1 w-full rounded-lg bg-purple-700 py-2.5 text-sm font-semibold text-white transition hover:bg-purple-800 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70">
                  {submitting ? "Signing in..." : "Login"}
                </button>
                <p className="text-center text-xs text-gray-500">
                  Don&apos;t have an account?{" "}
                  <button type="button" className="font-semibold text-purple-600 hover:underline" onClick={() => switchTab("signup")}>Sign Up</button>
                </p>
              </form>
            )}

            {/* ── SIGNUP: STEP 1 — CREDENTIALS ── */}
            {tab === "signup" && signupStep === "creds" && (
              <form onSubmit={handleSignupCredsSubmit} className="flex flex-col gap-4" noValidate>
                <Field label="Phone Number" Icon={Phone} type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" error={errors.phone} />
                <PasswordField value={form.password} onChange={handleChange} show={showPassword} toggle={() => setShowPassword((v) => !v)} error={errors.password} />
                <button type="submit" className="mt-1 w-full rounded-lg bg-purple-700 py-2.5 text-sm font-semibold text-white transition hover:bg-purple-800 active:scale-[0.98]">
                  Continue
                </button>
                <p className="text-center text-xs text-gray-500">
                  Already have an account?{" "}
                  <button type="button" className="font-semibold text-purple-600 hover:underline" onClick={() => switchTab("login")}>Login</button>
                </p>
              </form>
            )}

            {/* ── SIGNUP: STEP 2 — PROFILE ── */}
            {tab === "signup" && signupStep === "profile" && (
              <form onSubmit={handleProfileSubmit} className="flex flex-col gap-4" noValidate>
                {/* Photo upload */}
                <div className="flex flex-col items-center gap-2">
                  <button
                    type="button"
                    className="relative flex h-24 w-24 cursor-pointer items-center justify-center overflow-hidden rounded-full border-2 border-dashed border-purple-300 bg-purple-50 transition hover:border-purple-500 hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-300"
                    onClick={() => fileInputRef.current?.click()}
                    aria-label="Upload profile photo"
                  >
                    {imagePreview ? (
                      <img src={imagePreview} alt="Preview" className="h-full w-full object-cover" />
                    ) : (
                      <div className="flex flex-col items-center gap-1 text-purple-400">
                        <Upload size={22} />
                        <span className="text-xs font-medium">Photo</span>
                      </div>
                    )}
                  </button>
                  <input ref={fileInputRef} type="file" accept="image/png,image/jpeg,image/webp" className="hidden" onChange={handleImageChange} />
                  <p className="text-xs text-gray-400">{imagePreview ? "Click to change" : "Upload a profile photo (optional)"}</p>
                  {errors.image && <p className="text-xs text-red-500">{errors.image}</p>}
                </div>

                <Field label={<>Full Name <span className="text-red-400">*</span></>} Icon={User} type="text" name="name" value={form.name} onChange={handleChange} placeholder="John Doe" error={errors.name} />
                <Field label={<>Email Address <span className="text-red-400">*</span></>} Icon={Mail} type="email" name="email" value={form.email} onChange={handleChange} placeholder="john@example.com" error={errors.email} />
                {submitError && <p className="rounded-lg bg-red-50 px-3 py-2 text-xs font-medium text-red-600">{submitError}</p>}

                <div className="flex gap-3 pt-1">
                  <button type="button" className="flex-1 rounded-lg border border-gray-200 py-2.5 text-sm font-semibold text-gray-600 transition hover:bg-gray-50" onClick={() => { setSignupStep("creds"); setErrors({}); }}>
                    Back
                  </button>
                  <button type="submit" disabled={submitting} className="flex-1 rounded-lg bg-purple-700 py-2.5 text-sm font-semibold text-white transition hover:bg-purple-800 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70">
                    {submitting ? "Creating account..." : "Complete Sign Up"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-gray-400">
          By continuing you agree to our{" "}
          <Link href="/" className="text-purple-600 hover:underline">Terms of Service</Link>{" "}
          and{" "}
          <Link href="/" className="text-purple-600 hover:underline">Privacy Policy</Link>.
        </p>
      </div>
    </div>
  );
}

/* ── Sub-components ── */

function StepDot({ num, active, label, done }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold transition ${done ? "bg-purple-600 text-white" : active ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-500"}`}>
        {done ? <CheckCircle size={14} /> : num}
      </div>
      <span className={`text-[10px] font-medium ${active || done ? "text-purple-700" : "text-gray-400"}`}>{label}</span>
    </div>
  );
}

function Field({ label, Icon, type, name, value, onChange, placeholder, error }) {
  return (
    <div>
      <label className="mb-1 block text-sm font-medium text-gray-700">{label}</label>
      <div className="relative">
        <Icon size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input type={type} name={name} value={value} onChange={onChange} placeholder={placeholder}
          className={`w-full rounded-lg border py-2.5 pl-9 pr-4 text-sm outline-none transition focus:ring-2 focus:ring-purple-200 ${error ? "border-red-400 bg-red-50 focus:border-red-400" : "border-gray-200 focus:border-purple-400"}`}
        />
      </div>
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}

function PasswordField({ value, onChange, show, toggle, error }) {
  return (
    <div>
      <label className="mb-1 block text-sm font-medium text-gray-700">Password</label>
      <div className="relative">
        <Lock size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input type={show ? "text" : "password"} name="password" value={value} onChange={onChange} placeholder="Min. 8 characters"
          className={`w-full rounded-lg border py-2.5 pl-9 pr-10 text-sm outline-none transition focus:ring-2 focus:ring-purple-200 ${error ? "border-red-400 bg-red-50 focus:border-red-400" : "border-gray-200 focus:border-purple-400"}`}
        />
        <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600" onClick={toggle} aria-label={show ? "Hide password" : "Show password"}>
          {show ? <EyeOff size={16} /> : <Eye size={16} />}
        </button>
      </div>
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}
