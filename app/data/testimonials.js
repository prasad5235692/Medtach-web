import { DEFAULT_LOCALE, resolveLocale } from "@/lib/i18n/config";
import { mergeLocalizedContent } from "@/lib/i18n/content";

const baseTestimonials = [
  {
    name: "Ananya Sharma",
    role: "Medical Coder at Apollo Hospitals",
    avatar: "AS",
    stars: 5,
    text: "Medtech Career completely transformed my career. Within 3 months of completing the Medical Coding course I landed a job at Apollo. The faculty are incredibly knowledgeable and the placement support was genuine.",
  },
  {
    name: "Karthik Subramanian",
    role: "CPC-certified Coder, Chennai BPO",
    avatar: "KS",
    stars: 5,
    text: "I cleared the CPC exam on my very first attempt thanks to the structured training and the 8 solved CPC papers. The trainers are CPC-certified themselves and explain complex concepts in simple terms.",
  },
  {
    name: "Priya Nair",
    role: "Revenue Cycle Analyst, Bengaluru",
    avatar: "PN",
    stars: 5,
    text: "Medical Billing course gave me practical skills that I use every single day at work. The real-world case studies and live billing software practice made all the difference.",
  },
  {
    name: "Saraswathi Devi",
    role: "Medical Billing Executive, Hyderabad",
    avatar: "SD",
    stars: 5,
    text: "As a BSc Nursing graduate, I wasn't sure if I could transition into medical coding. Medtech Career guided every step — from the BMCT basics to AMCT advanced coding. Got placed within 45 days!",
  },
  {
    name: "Deepika Rao",
    role: "HCC Coder, Leading US Healthcare BPO",
    avatar: "DR",
    stars: 5,
    text: "The CRC programme opened a completely new career path for me. HCC risk adjustment coding is a premium niche and Medtech Career's training is thorough, practical, and exam-focused.",
  },
  {
    name: "Suresh Kumar",
    role: "Medical Billing Lead, Chennai",
    avatar: "SK",
    stars: 4,
    text: "Excellent course content and very supportive mentors. The placement support was genuine and helped me get my first healthcare job quickly. Highly recommend for life science graduates.",
  },
];

const testimonialTranslations = {
  hi: {
    "Ananya Sharma": {
      role: "अपोलो हॉस्पिटल्स में मेडिकल कोडर",
      text: "मेडटेक करियर ने मेरा करियर पूरी तरह बदल दिया। मेडिकल कोडिंग कोर्स पूरा करने के 3 महीनों के भीतर मुझे अपोलो में नौकरी मिली। फैकल्टी बेहद जानकार है और प्लेसमेंट सहायता वास्तविक थी।",
    },
    "Karthik Subramanian": {
      role: "CPC-प्रमाणित कोडर, चेन्नई BPO",
      text: "संरचित प्रशिक्षण और 8 हल किए गए CPC पेपर की बदौलत मैंने पहली ही कोशिश में CPC परीक्षा पास कर ली। प्रशिक्षक स्वयं CPC-प्रमाणित हैं और कठिन विषयों को आसान भाषा में समझाते हैं।",
    },
    "Priya Nair": {
      role: "रेवेन्यू साइकल विश्लेषक, बेंगलुरु",
      text: "मेडिकल बिलिंग कोर्स ने मुझे वे व्यावहारिक कौशल दिए जिनका उपयोग मैं हर दिन काम में करती हूँ। वास्तविक केस स्टडी और लाइव बिलिंग सॉफ़्टवेयर अभ्यास ने बहुत अंतर पैदा किया।",
    },
    "Saraswathi Devi": {
      role: "मेडिकल बिलिंग एग्जीक्यूटिव, हैदराबाद",
      text: "BSc Nursing स्नातक होने के नाते मुझे यकीन नहीं था कि मैं मेडिकल कोडिंग में जा पाऊँगी या नहीं। मेडटेक करियर ने BMCT की बुनियाद से लेकर AMCT एडवांस कोडिंग तक हर कदम पर मार्गदर्शन किया। 45 दिनों के भीतर प्लेसमेंट मिल गया!",
    },
    "Deepika Rao": {
      role: "HCC कोडर, प्रमुख अमेरिकी हेल्थकेयर BPO",
      text: "CRC प्रोग्राम ने मेरे लिए बिल्कुल नया करियर मार्ग खोला। HCC रिस्क एडजस्टमेंट कोडिंग प्रीमियम विशेषज्ञता है और मेडटेक करियर का प्रशिक्षण गहन, व्यावहारिक और परीक्षा-केंद्रित है।",
    },
    "Suresh Kumar": {
      role: "मेडिकल बिलिंग लीड, चेन्नई",
      text: "उत्कृष्ट कोर्स सामग्री और बहुत सहयोगी मेंटर्स। प्लेसमेंट सहायता वास्तविक थी और उसने मुझे मेरा पहला हेल्थकेयर जॉब जल्दी दिलाने में मदद की। लाइफ साइंस स्नातकों के लिए अत्यधिक अनुशंसित।",
    },
  },
  ml: {
    "Ananya Sharma": {
      role: "അപ്പോളോ ഹോസ്പിറ്റലിലെ മെഡിക്കൽ കോഡർ",
      text: "മെഡ്ടെക് കരിയർ എന്റെ കരിയർ പൂർണ്ണമായി മാറ്റിമറിച്ചു. മെഡിക്കൽ കോഡിംഗ് കോഴ്സ് പൂർത്തിയാക്കി 3 മാസത്തിനുള്ളിൽ എനിക്ക് അപ്പോളോയിൽ ജോലി ലഭിച്ചു. അധ്യാപകർ വളരെ പരിചയസമ്പന്നരും പ്ലേസ്‌മെന്റ് പിന്തുണ യഥാർത്ഥവുമായിരുന്നു.",
    },
    "Karthik Subramanian": {
      role: "CPC സർട്ടിഫൈഡ് കോഡർ, ചെന്നൈ BPO",
      text: "ഘടനാപരമായ പരിശീലനവും 8 പരിഹരിച്ച CPC പേപ്പറുകളും കാരണം ഞാൻ ആദ്യ ശ്രമത്തിൽ തന്നെ CPC പരീക്ഷ വിജയിച്ചു. പരിശീലകർ സ്വയം CPC സർട്ടിഫൈഡ് ആയതിനാൽ സങ്കീർണ്ണമായ ആശയങ്ങൾ പോലും ലളിതമായി വിശദീകരിച്ചു.",
    },
    "Priya Nair": {
      role: "റവന്യൂ സൈക്കിൾ അനലിസ്റ്റ്, ബെംഗളൂരു",
      text: "മെഡിക്കൽ ബില്ലിംഗ് കോഴ്സ് ഞാൻ ജോലി സ്ഥലത്ത് ദിവസേന ഉപയോഗിക്കുന്ന പ്രായോഗിക കഴിവുകൾ തന്നു. യഥാർത്ഥ കേസ് സ്റ്റഡികളും ലൈവ് ബില്ലിംഗ് സോഫ്റ്റ്‌വെയർ പരിശീലനവും വലിയ മാറ്റം സൃഷ്ടിച്ചു.",
    },
    "Saraswathi Devi": {
      role: "മെഡിക്കൽ ബില്ലിംഗ് എക്സിക്യൂട്ടീവ്, ഹൈദരാബാദ്",
      text: "BSc Nursing ബിരുദധാരിയായ എന്നെ മെഡിക്കൽ കോഡിംഗിലേക്കു മാറാനാകുമോ എന്ന് സംശയം ഉണ്ടായിരുന്നു. BMCT അടിസ്ഥാനങ്ങളിൽ നിന്ന് AMCT അഡ്വാൻസ്ഡ് കോഡിംഗുവരെ മെഡ്ടെക് കരിയർ ഓരോ ഘട്ടത്തിലും വഴികാട്ടി. 45 ദിവസത്തിനുള്ളിൽ പ്ലേസ്‌മെന്റ് ലഭിച്ചു!",
    },
    "Deepika Rao": {
      role: "HCC കോഡർ, പ്രമുഖ യു.എസ്. ഹെൽത്ത്‌കെയർ BPO",
      text: "CRC പ്രോഗ്രാം എനിക്ക് പൂർണ്ണമായും പുതിയ കരിയർ പാത തുറന്നു തന്നു. HCC റിസ്‌ക് അഡ്ജസ്റ്റ്മെന്റ് കോഡിംഗ് ഒരു പ്രീമിയം നിഷ് മേഖല ആണ്, മെഡ്ടെക് കരിയറിന്റെ പരിശീലനം സമഗ്രവും പ്രായോഗികവും പരീക്ഷാമുഖവുമാണ്.",
    },
    "Suresh Kumar": {
      role: "മെഡിക്കൽ ബില്ലിംഗ് ലീഡ്, ചെന്നൈ",
      text: "അഭിനന്ദനാർഹമായ കോഴ്സ് ഉള്ളടക്കവും വളരെ സഹായകരമായ മെന്റർമാരും. പ്ലേസ്‌മെന്റ് പിന്തുണ യാഥാർത്ഥ്യമായിരുന്നു, അത് എന്റെ ആദ്യ ഹെൽത്ത്‌കെയർ ജോലി വേഗത്തിൽ നേടാൻ സഹായിച്ചു. ലൈഫ് സയൻസ് ബിരുദധാരികൾക്ക് ശക്തമായി ശുപാർശ ചെയ്യുന്നു.",
    },
  },
};

export const testimonials = baseTestimonials;

export function getTestimonials(locale = DEFAULT_LOCALE) {
  const resolvedLocale = resolveLocale(locale);

  if (resolvedLocale === DEFAULT_LOCALE) {
    return baseTestimonials;
  }

  return baseTestimonials.map((testimonial) => mergeLocalizedContent(testimonial, testimonialTranslations[resolvedLocale]?.[testimonial.name]));
}
