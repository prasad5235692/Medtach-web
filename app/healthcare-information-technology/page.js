import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import CourseCard from "@/components/CourseCard";
import SectionHeading from "@/components/SectionHeading";
import { getCourses } from "@/data/courses";
import { getLocale } from "@/lib/i18n/server";

const FEATURED_SLUGS = ["emr", "ehr", "tm", "medical-billing", "cdm"];

const PAGE_CONTENT = {
  en: {
    label: "Explore",
    title: "Healthcare Information Technology",
    subtitle:
      "Programmes built for healthcare professionals and graduates who want to move into digital workflows, records systems, documentation, and healthcare operations.",
    sectionLabel: "Featured Tracks",
    sectionTitle: "Career-Focused Programmes in Healthcare IT",
    sectionSubtitle:
      "These courses combine healthcare domain knowledge with systems, compliance, and workflow readiness for modern care delivery teams.",
    highlights: [
      {
        title: "Records & Interoperability",
        description:
          "Build practical skills in EMR, EHR, data governance, HL7, and FHIR concepts used across hospitals and clinics.",
      },
      {
        title: "Documentation & Revenue Workflows",
        description:
          "Learn how documentation quality, billing operations, and healthcare systems connect in real-world healthcare organizations.",
      },
      {
        title: "Placement-Oriented Training",
        description:
          "Train with job-focused modules, live guidance, and placement support designed for fast-moving healthcare technology roles.",
      },
    ],
    ctaTitle: "Need help choosing the right healthcare IT track?",
    ctaBody:
      "Speak with the team for guidance on records systems, documentation, billing, and healthcare operations pathways.",
    primaryCta: "Talk to a Counsellor",
    secondaryCta: "Browse All Courses",
  },
  hi: {
    label: "एक्सप्लोर",
    title: "हेल्थकेयर इन्फॉर्मेशन टेक्नोलॉजी",
    subtitle:
      "हेल्थकेयर पेशेवरों और स्नातकों के लिए तैयार प्रोग्राम, जो डिजिटल वर्कफ़्लो, रिकॉर्ड सिस्टम, डॉक्यूमेंटेशन और हेल्थकेयर ऑपरेशन्स में आगे बढ़ना चाहते हैं।",
    sectionLabel: "फीचर्ड ट्रैक्स",
    sectionTitle: "हेल्थकेयर आईटी में करियर-केंद्रित प्रोग्राम",
    sectionSubtitle:
      "ये कोर्स हेल्थकेयर डोमेन नॉलेज को सिस्टम्स, कंप्लायंस और आधुनिक केयर डिलीवरी टीमों के लिए वर्कफ़्लो रेडीनेस के साथ जोड़ते हैं।",
    highlights: [
      {
        title: "रिकॉर्ड्स और इंटरऑपरेबिलिटी",
        description:
          "अस्पतालों और क्लीनिकों में उपयोग होने वाले EMR, EHR, डेटा गवर्नेंस, HL7 और FHIR कॉन्सेप्ट्स में व्यावहारिक कौशल विकसित करें।",
      },
      {
        title: "डॉक्यूमेंटेशन और रेवेन्यू वर्कफ़्लो",
        description:
          "सीखें कि हेल्थकेयर संगठनों में डॉक्यूमेंटेशन क्वालिटी, बिलिंग ऑपरेशन्स और सिस्टम्स एक-दूसरे से कैसे जुड़े होते हैं।",
      },
      {
        title: "प्लेसमेंट-केंद्रित प्रशिक्षण",
        description:
          "तेज़ी से बढ़ती हेल्थकेयर टेक्नोलॉजी भूमिकाओं के लिए जॉब-ओरिएंटेड मॉड्यूल, लाइव गाइडेंस और प्लेसमेंट सपोर्ट के साथ प्रशिक्षण लें।",
      },
    ],
    ctaTitle: "सही हेल्थकेयर आईटी ट्रैक चुनने में मदद चाहिए?",
    ctaBody:
      "रिकॉर्ड सिस्टम, डॉक्यूमेंटेशन, बिलिंग और हेल्थकेयर ऑपरेशन्स के रास्तों पर मार्गदर्शन के लिए टीम से बात करें।",
    primaryCta: "काउंसलर से बात करें",
    secondaryCta: "सभी कोर्स देखें",
  },
  ml: {
    label: "എക്സ്പ്ലോർ",
    title: "ഹെൽത്ത്‌കെയർ ഇൻഫർമേഷൻ ടെക്നോളജി",
    subtitle:
      "ഡിജിറ്റൽ വർക്ക്‌ഫ്ലോകൾ, റെക്കോർഡ് സിസ്റ്റങ്ങൾ, ഡോക്യുമെന്റേഷൻ, ഹെൽത്ത്‌കെയർ ഓപ്പറേഷൻസ് മേഖലകളിലേക്ക് കടക്കാൻ ആഗ്രഹിക്കുന്ന ആരോഗ്യവിദഗ്ധർക്കും ബിരുദധാരികൾക്കും വേണ്ടി രൂപകൽപ്പന ചെയ്ത പ്രോഗ്രാമുകൾ.",
    sectionLabel: "ഫീച്ചേഡ് ട്രാക്കുകൾ",
    sectionTitle: "ഹെൽത്ത്‌കെയർ ഐടിയിലേക്കുള്ള കരിയർ കേന്ദ്രീകൃത പ്രോഗ്രാമുകൾ",
    sectionSubtitle:
      "ഈ കോഴ്സുകൾ ഹെൽത്ത്‌കെയർ ഡൊമൈൻ അറിവിനെ സിസ്റ്റങ്ങൾ, കമ്പ്ലയൻസ്, ആധുനിക കെയർ ഡെലിവറി ടീമുകൾക്കാവശ്യമായ വർക്ക്‌ഫ്ലോ റെഡിനസ് എന്നിവയുമായി ബന്ധിപ്പിക്കുന്നു.",
    highlights: [
      {
        title: "റെക്കോർഡുകളും ഇന്ററോപ്പറബിലിറ്റിയും",
        description:
          "ആശുപത്രികളിലും ക്ലിനിക്കുകളിലും ഉപയോഗിക്കുന്ന EMR, EHR, ഡാറ്റ ഗവണൻസ്, HL7, FHIR ആശയങ്ങളിൽ പ്രായോഗിക നൈപുണ്യം വികസിപ്പിക്കുക.",
      },
      {
        title: "ഡോക്യുമെന്റേഷനും റവന്യൂ വർക്ക്‌ഫ്ലോകളും",
        description:
          "ഡോക്യുമെന്റേഷൻ ഗുണമേന്മ, ബില്ലിംഗ് ഓപ്പറേഷൻസ്, ഹെൽത്ത്‌കെയർ സിസ്റ്റങ്ങൾ എന്നിവ യഥാർത്ഥ ലോകത്തിൽ എങ്ങനെ ബന്ധപ്പെടുന്നുവെന്ന് മനസ്സിലാക്കുക.",
      },
      {
        title: "പ്ലേസ്‌മെന്റ് കേന്ദ്രീകൃത പരിശീലനം",
        description:
          "വേഗത്തിൽ വളരുന്ന ഹെൽത്ത്‌കെയർ ടെക്നോളജി റോളുകൾക്കായി ജോബ്-ഓറിയന്റഡ് മോഡ്യൂളുകൾ, ലൈവ് ഗൈഡൻസ്, പ്ലേസ്‌മെന്റ് പിന്തുണ എന്നിവയോടെ പരിശീലനം നേടുക.",
      },
    ],
    ctaTitle: "ശരിയായ ഹെൽത്ത്‌കെയർ ഐടി ട്രാക്ക് തിരഞ്ഞെടുക്കാൻ സഹായം വേണമോ?",
    ctaBody:
      "റെക്കോർഡ് സിസ്റ്റങ്ങൾ, ഡോക്യുമെന്റേഷൻ, ബില്ലിംഗ്, ഹെൽത്ത്‌കെയർ ഓപ്പറേഷൻസ് പാതകൾ എന്നിവയിൽ മാർഗനിർദേശം നേടാൻ ടീമുമായി സംസാരിക്കുക.",
    primaryCta: "കൗൺസിലറുമായി സംസാരിക്കുക",
    secondaryCta: "എല്ലാ കോഴ്സുകളും കാണൂ",
  },
};

export const metadata = {
  title: "Healthcare Information Technology — Medtech Career",
};

export default async function HealthcareInformationTechnologyPage() {
  const locale = await getLocale();
  const content = PAGE_CONTENT[locale] ?? PAGE_CONTENT.en;
  const courses = getCourses(locale).filter((course) => FEATURED_SLUGS.includes(course.slug));

  return (
    <>
      <section className="relative overflow-hidden bg-[#eff6ff] pb-20 pt-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at top left, rgba(126, 34, 206, 0.12), transparent 38%), radial-gradient(circle at bottom right, rgba(249, 115, 22, 0.12), transparent 30%)",
          }}
        />
        <div className="page-container relative">
          <AnimateOnScroll animation="fade-down">
            <SectionHeading label={content.label} title={content.title} subtitle={content.subtitle} />
          </AnimateOnScroll>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="page-container">
          <AnimateOnScroll animation="fade-up">
            <SectionHeading center label={content.sectionLabel} title={content.sectionTitle} subtitle={content.sectionSubtitle} />
          </AnimateOnScroll>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {content.highlights.map((item, index) => (
              <AnimateOnScroll key={item.title} animation="fade-up" delay={index * 100}>
                <div className="rounded-2xl border border-gray-100 bg-[#f8fafc] p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.description}</p>
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
            <Link href="/courses" className="rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
              {content.secondaryCta}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}