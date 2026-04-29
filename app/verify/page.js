import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import SectionHeading from "@/components/SectionHeading";
import { getLocale } from "@/lib/i18n/server";

const PAGE_CONTENT = {
  en: {
    label: "Support",
    title: "Verify Certificates",
    subtitle:
      "Start certificate verification with the MedTechCareer support team using the details printed on the certificate.",
    stepsTitle: "What to Keep Ready",
    steps: [
      {
        title: "Certificate ID",
        description: "Use the certificate number or learner ID exactly as printed on the document.",
      },
      {
        title: "Candidate Details",
        description: "Keep the student name, course name, and completion date ready for quick validation.",
      },
      {
        title: "Support Request",
        description: "Send the verification request through the contact team so they can confirm the certificate status.",
      },
    ],
    noteTitle: "Need manual confirmation?",
    noteBody:
      "Use the contact page to share the certificate details with the team. They can validate completion details and respond with the current status.",
    primaryCta: "Go to Contact",
    secondaryCta: "Talk to a Counsellor",
  },
  hi: {
    label: "सपोर्ट",
    title: "सर्टिफिकेट वेरिफ़ाई करें",
    subtitle:
      "सर्टिफिकेट पर छपी जानकारी का उपयोग करके MedTechCareer सपोर्ट टीम के साथ प्रमाणपत्र सत्यापन शुरू करें।",
    stepsTitle: "क्या तैयार रखें",
    steps: [
      {
        title: "सर्टिफिकेट आईडी",
        description: "दस्तावेज़ पर छपे सर्टिफिकेट नंबर या लर्नर आईडी को ठीक उसी तरह उपयोग करें।",
      },
      {
        title: "उम्मीदवार विवरण",
        description: "तेज़ सत्यापन के लिए छात्र का नाम, कोर्स का नाम और पूर्णता तिथि तैयार रखें।",
      },
      {
        title: "सपोर्ट रिक्वेस्ट",
        description: "वेरिफ़िकेशन अनुरोध कॉन्टैक्ट टीम के माध्यम से भेजें ताकि वे सर्टिफिकेट की स्थिति की पुष्टि कर सकें।",
      },
    ],
    noteTitle: "मैनुअल पुष्टि चाहिए?",
    noteBody:
      "सर्टिफिकेट विवरण टीम के साथ साझा करने के लिए कॉन्टैक्ट पेज का उपयोग करें। वे पूर्णता विवरण सत्यापित करके वर्तमान स्थिति बता सकते हैं।",
    primaryCta: "कॉन्टैक्ट पेज खोलें",
    secondaryCta: "काउंसलर से बात करें",
  },
  ml: {
    label: "സപ്പോർട്ട്",
    title: "സർട്ടിഫിക്കറ്റ് വെരിഫൈ ചെയ്യുക",
    subtitle:
      "സർട്ടിഫിക്കറ്റിൽ അച്ചടിച്ചിരിക്കുന്ന വിവരങ്ങൾ ഉപയോഗിച്ച് MedTechCareer സപ്പോർട്ട് ടീമിനൊപ്പം സർട്ടിഫിക്കറ്റ് സ്ഥിരീകരണം ആരംഭിക്കുക.",
    stepsTitle: "തയ്യാറാക്കി വെക്കേണ്ടത്",
    steps: [
      {
        title: "സർട്ടിഫിക്കറ്റ് ഐഡി",
        description: "ഡോക്യുമെന്റിൽ അച്ചടിച്ചിരിക്കുന്ന സർട്ടിഫിക്കറ്റ് നമ്പർ അല്ലെങ്കിൽ ലേർണർ ഐഡി അതേപടി ഉപയോഗിക്കുക.",
      },
      {
        title: "കാൻഡിഡേറ്റ് വിവരങ്ങൾ",
        description: "വേഗത്തിൽ സ്ഥിരീകരിക്കാനായി വിദ്യാർത്ഥിയുടെ പേര്, കോഴ്‌സ് പേര്, പൂർത്തിയാക്കിയ തീയതി എന്നിവ തയ്യാറാക്കി വെക്കുക.",
      },
      {
        title: "സപ്പോർട്ട് അഭ്യർത്ഥന",
        description: "ടീം നിലവിലെ നില സ്ഥിരീകരിക്കാൻ കോൺടാക്റ്റ് ടീമിലൂടെ വെരിഫിക്കേഷൻ അഭ്യർത്ഥന അയയ്ക്കുക.",
      },
    ],
    noteTitle: "മാനുവൽ സ്ഥിരീകരണം വേണമോ?",
    noteBody:
      "സർട്ടിഫിക്കറ്റ് വിശദാംശങ്ങൾ ടീമുമായി പങ്കിടാൻ കോൺടാക്റ്റ് പേജ് ഉപയോഗിക്കുക. അവർ പൂർത്തീകരണ വിവരങ്ങൾ സ്ഥിരീകരിച്ച് നിലവിലെ നില അറിയിക്കും.",
    primaryCta: "കോൺടാക്റ്റിലേക്ക് പോകൂ",
    secondaryCta: "കൗൺസിലറുമായി സംസാരിക്കുക",
  },
};

export const metadata = {
  title: "Verify Certificates — Medtech Career",
};

export default async function VerifyPage() {
  const locale = await getLocale();
  const content = PAGE_CONTENT[locale] ?? PAGE_CONTENT.en;

  return (
    <>
      <section className="relative overflow-hidden bg-[#f8fafc] pb-20 pt-36">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(126,34,206,0.1),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.1),transparent_28%)]" />
        <div className="page-container relative">
          <AnimateOnScroll animation="fade-down">
            <SectionHeading label={content.label} title={content.title} subtitle={content.subtitle} />
          </AnimateOnScroll>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="page-container">
          <AnimateOnScroll animation="fade-up">
            <SectionHeading center label={content.label} title={content.stepsTitle} />
          </AnimateOnScroll>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {content.steps.map((step, index) => (
              <AnimateOnScroll key={step.title} animation="fade-up" delay={index * 100}>
                <div className="rounded-2xl border border-gray-100 bg-[#f8fafc] p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">{step.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111827] py-20 text-white">
        <div className="page-container flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold">{content.noteTitle}</h2>
            <p className="mt-4 text-base text-gray-300">{content.noteBody}</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600">
              {content.primaryCta}
            </Link>
            <Link href="/counseling" className="rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
              {content.secondaryCta}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}