import Link from "next/link";
import { Puzzle, CheckCircle2, ArrowRight, Link2, Database, ShieldCheck, RefreshCw } from "lucide-react";

export const metadata = {
  title: "Integrations — MedTech Business",
  description: "SCORM, xAPI, LMS, and HR system integrations to fit into your existing tech stack.",
};

const integrations = [
  {
    icon: Link2,
    title: "Single Sign-On (SSO)",
    desc: "Connect to your existing identity provider (Azure AD, Okta, Google Workspace) so learners use the same credentials they already know.",
  },
  {
    icon: Database,
    title: "HRIS / HR System Sync",
    desc: "Automatically provision and deprovision users from SAP SuccessFactors, Workday, or your custom HR database via our REST API.",
  },
  {
    icon: RefreshCw,
    title: "LMS Integration (SCORM / xAPI)",
    desc: "Import our SCORM 1.2 / SCORM 2004 / xAPI content packages into your existing LMS or export learner data back to TalentLMS, Moodle, or Cornerstone.",
  },
  {
    icon: ShieldCheck,
    title: "Reporting API",
    desc: "Pull completion data, assessment scores, and learner activity programmatically into your BI tools (Power BI, Tableau, Looker) via our secure REST API.",
  },
];

const supportedSystems = [
  "SAP SuccessFactors", "Workday", "Oracle HCM", "Cornerstone OnDemand",
  "TalentLMS", "Moodle", "Azure AD", "Okta",
  "Google Workspace", "Microsoft Teams", "Slack", "Power BI",
];

export default function IntegrationsPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-linear-to-br from-[#0d0422] via-[#1a0535] to-[#0f172a] py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-600/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-purple-300">
            <Puzzle size={13} /> Integrations
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-5xl">
            Fits Seamlessly Into{" "}
            <span className="text-orange-400">
              Your Existing Stack
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-purple-100/80">
            MedTech Business connects to the HR, LMS, and identity systems you already use —
            so your team learns where they already work.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/business/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-purple-700 px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-purple-600"
            >
              Discuss My Setup <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Integration Types */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-purple-700">Integration Options</p>
            <h2 className="mt-3 text-3xl font-extrabold text-gray-900">Connect your learning ecosystem</h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {integrations.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-start gap-5 rounded-2xl border border-gray-100 p-6 shadow-sm transition hover:border-purple-200 hover:shadow-md">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-700">
                  <Icon size={24} />
                </span>
                <div>
                  <h3 className="text-base font-bold text-gray-900">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Systems */}
      <section className="bg-linear-to-br from-purple-50 to-purple-50 py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-purple-700">Compatible With</p>
          <h2 className="mt-3 text-3xl font-extrabold text-gray-900">Works with the tools you rely on</h2>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {supportedSystems.map((s) => (
              <span key={s} className="rounded-full border border-purple-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm">
                {s}
              </span>
            ))}
          </div>
          <p className="mt-6 text-sm text-gray-500">Don't see your system? We likely support it — contact us to confirm.</p>
        </div>
      </section>

      {/* Security Note */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6">
          <div className="rounded-2xl border border-purple-200 bg-purple-50 p-8 text-center">
            <ShieldCheck size={32} className="mx-auto text-purple-700" />
            <h3 className="mt-4 text-xl font-bold text-gray-900">Enterprise-Grade Security</h3>
            <p className="mt-3 text-sm text-gray-600">
              All integrations use encrypted connections (TLS 1.3), OAuth 2.0 / SAML 2.0 authentication,
              and are covered by our SOC 2-aligned data processing agreements.
              Your learner data never leaves India's cloud infrastructure.
            </p>
            <ul className="mt-5 flex flex-wrap justify-center gap-3 text-xs font-semibold">
              {["SOC 2 Aligned", "GDPR-Ready", "ISO 27001 Practices", "Data Residency in India"].map((b) => (
                <span key={b} className="rounded-full bg-purple-700 px-3 py-1 text-white">{b}</span>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-linear-to-r from-purple-800 to-purple-700 py-16">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white">Ready to connect your stack?</h2>
          <p className="mt-4 text-base text-purple-100">
            Our technical team will scope your integration requirements and deliver a working connection within days.
          </p>
          <Link
            href="/business/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-purple-800 shadow transition hover:bg-purple-50"
          >
            Talk to an Integration Specialist <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}
