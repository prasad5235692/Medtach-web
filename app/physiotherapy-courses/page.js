import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import CourseCard from "@/components/CourseCard";
import SectionHeading from "@/components/SectionHeading";
import { getCourses } from "@/data/courses";
import { getLocale } from "@/lib/i18n/server";

const FEATURED_SLUGS = ["bmct", "medical-coding", "cpc-certification", "cdm", "ehr"];

const PAGE_CONTENT = {
  en: {
    label: "Explore",
    title: "Physiotherapy Courses",
    subtitle:
      "Career pathways curated for physiotherapy graduates who want to expand into healthcare documentation, coding, healthcare IT, and allied administrative roles.",
    pathwayLabel: "Recommended Pathways",
    pathwayTitle: "Build on Your Physiotherapy Background",
    pathwaySubtitle:
      "These programmes are well-suited for physiotherapy graduates looking to move into scalable healthcare careers with strong process and technology exposure.",
    pathways: [
      {
        title: "Medical Coding Pathway",
        description:
          "Use your anatomy, physiology, and clinical understanding to move into coding, auditing, and certification-led roles.",
      },
      {
        title: "Documentation & Compliance Pathway",
        description:
          "Transition into clinical documentation, care-quality processes, and healthcare data review roles.",
      },
      {
        title: "Healthcare IT Pathway",
        description:
          "Add records systems, interoperability, and digital workflow knowledge to your healthcare foundation.",
      },
    ],
    ctaTitle: "Want a custom plan based on your physiotherapy background?",
    ctaBody:
      "The team can recommend the right starting track based on your graduation level, career goals, and preferred job role.",
    primaryCta: "Book 1:1 Counseling",
    secondaryCta: "Contact the Team",
  },
  hi: {
    label: "एक्सप्लोर",
    title: "फिजियोथेरेपी कोर्स",
    subtitle:
      "फिजियोथेरेपी स्नातकों के लिए तैयार करियर पाथवे, जो हेल्थकेयर डॉक्यूमेंटेशन, कोडिंग, हेल्थकेयर आईटी और सहयोगी प्रशासनिक भूमिकाओं में आगे बढ़ना चाहते हैं।",
    pathwayLabel: "सुझाए गए पाथवे",
    pathwayTitle: "अपनी फिजियोथेरेपी पृष्ठभूमि पर आगे बढ़ें",
    pathwaySubtitle:
      "ये प्रोग्राम उन फिजियोथेरेपी स्नातकों के लिए उपयुक्त हैं जो प्रोसेस और टेक्नोलॉजी एक्सपोज़र के साथ स्केलेबल हेल्थकेयर करियर में जाना चाहते हैं।",
    pathways: [
      {
        title: "मेडिकल कोडिंग पाथवे",
        description:
          "अपनी एनाटॉमी, फिजियोलॉजी और क्लिनिकल समझ का उपयोग करके कोडिंग, ऑडिटिंग और सर्टिफिकेशन-आधारित भूमिकाओं में आगे बढ़ें।",
      },
      {
        title: "डॉक्यूमेंटेशन और कंप्लायंस पाथवे",
        description:
          "क्लिनिकल डॉक्यूमेंटेशन, केयर-क्वालिटी प्रक्रियाओं और हेल्थकेयर डेटा रिव्यू भूमिकाओं में संक्रमण करें।",
      },
      {
        title: "हेल्थकेयर आईटी पाथवे",
        description:
          "अपने हेल्थकेयर आधार में रिकॉर्ड सिस्टम, इंटरऑपरेबिलिटी और डिजिटल वर्कफ़्लो का ज्ञान जोड़ें।",
      },
    ],
    ctaTitle: "अपनी फिजियोथेरेपी पृष्ठभूमि के आधार पर कस्टम प्लान चाहिए?",
    ctaBody:
      "टीम आपके ग्रेजुएशन स्तर, करियर लक्ष्य और पसंदीदा जॉब रोल के आधार पर सही शुरुआती ट्रैक सुझा सकती है।",
    primaryCta: "1:1 काउंसलिंग बुक करें",
    secondaryCta: "टीम से संपर्क करें",
  },
  ml: {
    label: "എക്സ്പ്ലോർ",
    title: "ഫിസിയോതെറാപ്പി കോഴ്സുകൾ",
    subtitle:
      "ഹെൽത്ത്‌കെയർ ഡോക്യുമെന്റേഷൻ, കോഡിംഗ്, ഹെൽത്ത്‌കെയർ ഐടി, ബന്ധപ്പെട്ട അഡ്മിനിസ്ട്രേറ്റീവ് റോളുകൾ എന്നിവയിലേക്ക് നീങ്ങാൻ ആഗ്രഹിക്കുന്ന ഫിസിയോതെറാപ്പി ബിരുദധാരികൾക്കായി ക്യൂറേറ്റ് ചെയ്ത കരിയർ പാതകൾ.",
    pathwayLabel: "ശുപാർശ ചെയ്യുന്ന പാതകൾ",
    pathwayTitle: "നിങ്ങളുടെ ഫിസിയോതെറാപ്പി പശ്ചാത്തലത്തെ കൂടുതൽ ശക്തമാക്കുക",
    pathwaySubtitle:
      "പ്രോസസും ടെക്നോളജി എക്സ്പോഷറും ഉള്ള സ്കെയിലബിൾ ഹെൽത്ത്‌കെയർ കരിയറുകളിലേക്ക് കടക്കാൻ ആഗ്രഹിക്കുന്ന ഫിസിയോതെറാപ്പി ബിരുദധാരികൾക്ക് ഈ പ്രോഗ്രാമുകൾ അനുയോജ്യമാണ്.",
    pathways: [
      {
        title: "മെഡിക്കൽ കോഡിംഗ് പാത",
        description:
          "അനാട്ടമി, ഫിസിയോളജി, ക്ലിനിക്കൽ അറിവ് എന്നിവ ഉപയോഗിച്ച് കോഡിംഗ്, ഓഡിറ്റിംഗ്, സർട്ടിഫിക്കേഷൻ-കേന്ദ്രിത റോളുകളിലേക്ക് നീങ്ങുക.",
      },
      {
        title: "ഡോക്യുമെന്റേഷനും കമ്പ്ലയൻസ് പാതയും",
        description:
          "ക്ലിനിക്കൽ ഡോക്യുമെന്റേഷൻ, കെയർ ക്വാളിറ്റി പ്രോസസുകൾ, ഹെൽത്ത്‌കെയർ ഡാറ്റ റിവ്യൂ റോളുകൾ എന്നിവയിലേക്ക് മാറുക.",
      },
      {
        title: "ഹെൽത്ത്‌കെയർ ഐടി പാത",
        description:
          "നിങ്ങളുടെ ഹെൽത്ത്‌കെയർ അടിസ്ഥാനത്തിലേക്ക് റെക്കോർഡ് സിസ്റ്റങ്ങൾ, ഇന്ററോപ്പറബിലിറ്റി, ഡിജിറ്റൽ വർക്ക്‌ഫ്ലോ അറിവ് എന്നിവ ചേർക്കുക.",
      },
    ],
    ctaTitle: "നിങ്ങളുടെ ഫിസിയോതെറാപ്പി പശ്ചാത്തലത്തിന് അനുയോജ്യമായ വ്യക്തിഗത പദ്ധതി വേണമോ?",
    ctaBody:
      "നിങ്ങളുടെ ബിരുദനില, കരിയർ ലക്ഷ്യങ്ങൾ, ഇഷ്ടപ്പെട്ട ജോലിയിന്റെ സ്വഭാവം എന്നിവയുടെ അടിസ്ഥാനത്തിൽ ശരിയായ ആരംഭ ട്രാക്ക് ടീം നിർദ്ദേശിക്കും.",
    primaryCta: "1:1 കൗൺസിലിംഗ് ബുക്ക് ചെയ്യൂ",
    secondaryCta: "ടീമുമായി ബന്ധപ്പെടൂ",
  },
};

export const metadata = {
  title: "Physiotherapy Courses — Medtech Career",
};

export default async function PhysiotherapyCoursesPage() {
  const locale = await getLocale();
  const content = PAGE_CONTENT[locale] ?? PAGE_CONTENT.en;
  const courses = getCourses(locale).filter((course) => FEATURED_SLUGS.includes(course.slug));

  return (
    <>
      <section className="relative overflow-hidden bg-[#fff7ed] pb-20 pt-36">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(249,115,22,0.12),_transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(126,34,206,0.1),_transparent_32%)]" />
        <div className="page-container relative">
          <AnimateOnScroll animation="fade-down">
            <SectionHeading label={content.label} title={content.title} subtitle={content.subtitle} />
          </AnimateOnScroll>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="page-container">
          <AnimateOnScroll animation="fade-up">
            <SectionHeading center label={content.pathwayLabel} title={content.pathwayTitle} subtitle={content.pathwaySubtitle} />
          </AnimateOnScroll>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {content.pathways.map((pathway, index) => (
              <AnimateOnScroll key={pathway.title} animation="fade-up" delay={index * 100}>
                <div className="rounded-2xl border border-gray-100 bg-[#f8fafc] p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900">{pathway.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">{pathway.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8fafc] py-20">
        <div className="page-container">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course, index) => (
              <AnimateOnScroll key={course.slug} animation="fade-up" delay={index * 100}>
                <CourseCard course={course} locale={locale} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111827] py-20 text-white">
        <div className="page-container flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold">{content.ctaTitle}</h2>
            <p className="mt-4 text-base text-gray-300">{content.ctaBody}</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/counseling" className="rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600">
              {content.primaryCta}
            </Link>
            <Link href="/contact" className="rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
              {content.secondaryCta}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}