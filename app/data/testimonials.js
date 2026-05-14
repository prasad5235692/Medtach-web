import { DEFAULT_LOCALE, resolveLocale } from "@/lib/i18n/config";
import { mergeLocalizedContent } from "@/lib/i18n/content";

const baseTestimonials = [
  {
    name: "Reeshman Banu",
    courseLabel: "Course: AMCT & CPC Training",
    avatar: "RB",
    stars: 5,
    text: "I recently completed my AMCT & CPC training at MedTech Career. The trainers were extremely supportive, friendly, and knowledgeable. Thanks to their guidance, I secured my placement at S2M, Chennai. I'm truly grateful for the training and support!",
  },
  {
    name: "K. Varsha",
    courseLabel: "Course: CPC",
    avatar: "KV",
    stars: 5,
    text: "I had a great learning experience at MedTech Career Academy. My trainer, Asmi mam, explained every topic very clearly and politely. She always cleared my doubts with a lot of patience, even if I asked multiple times. The daily assessments were very helpful and boosted my confidence for the CPC exam. Overall, I am fully satisfied with the training and support provided by the academy. Highly recommended!",
  },
  {
    name: "Mariyaan",
    courseLabel: "Course: AMCT",
    avatar: "MA",
    stars: 5,
    text: "MedTech Career is one of the best places to learn medical coding. The trainers explain every concept very clearly, even for beginners with no medical background. Classes are well-structured, practical-oriented, and easy to understand. They are always ready to clarify doubts. They focus not only on theory but also on real-time examples, assessments, and exam preparation, which really builds confidence. The learning environment is positive and motivating. If you are serious about starting a career in medical coding, I strongly recommend MedTech Career Academy. It is truly worth joining!!",
  },
  {
    name: "S. Rawla Afrin",
    courseLabel: "Course: CPC",
    avatar: "SA",
    stars: 5,
    text: "I am Afrin. I have completed B.E (CSE) and joined MedTech Career for CPC training and cleared the CPC exam. Trainers explain concepts in a simple way, and their step-by-step teaching helps in understanding coding guidelines. Thanks to MedTech Career.",
  },
];

const testimonialTranslations = {
  hi: {
    "Reeshman Banu": {
      courseLabel: "कोर्स: AMCT और CPC प्रशिक्षण",
      text: "मैंने हाल ही में MedTech Career में अपना AMCT और CPC प्रशिक्षण पूरा किया। प्रशिक्षक बहुत सहयोगी, मित्रवत और ज्ञानवान थे। उनके मार्गदर्शन की बदौलत मुझे चेन्नई के S2M में प्लेसमेंट मिला। मैं इस प्रशिक्षण और सहयोग के लिए सचमुच आभारी हूं!",
    },
    "K. Varsha": {
      courseLabel: "कोर्स: CPC",
      text: "MedTech Career Academy में मेरा सीखने का अनुभव बहुत अच्छा रहा। मेरी ट्रेनर Asmi मैम ने हर विषय को बहुत स्पष्टता और विनम्रता से समझाया। मैंने कई बार पूछा तब भी उन्होंने बहुत धैर्य के साथ मेरे सभी संदेह दूर किए। दैनिक आकलन बहुत उपयोगी थे और उन्होंने CPC परीक्षा के लिए मेरा आत्मविश्वास बढ़ाया। कुल मिलाकर, मैं अकादमी द्वारा दिए गए प्रशिक्षण और सहयोग से पूरी तरह संतुष्ट हूं। अत्यधिक अनुशंसित!",
    },
    Mariyaan: {
      courseLabel: "कोर्स: AMCT",
      text: "MedTech Career मेडिकल कोडिंग सीखने के लिए सबसे अच्छी जगहों में से एक है। प्रशिक्षक हर अवधारणा को बहुत स्पष्ट रूप से समझाते हैं, यहां तक कि उन शुरुआती विद्यार्थियों के लिए भी जिनकी मेडिकल पृष्ठभूमि नहीं है। कक्षाएं सुव्यवस्थित, व्यावहारिक और आसानी से समझ में आने वाली हैं। वे हमेशा संदेह दूर करने के लिए तैयार रहते हैं। वे केवल सिद्धांत पर ही नहीं बल्कि वास्तविक उदाहरणों, आकलन और परीक्षा की तैयारी पर भी ध्यान देते हैं, जिससे सच में आत्मविश्वास बनता है। सीखने का वातावरण सकारात्मक और प्रेरणादायक है। यदि आप मेडिकल कोडिंग में करियर शुरू करने को लेकर गंभीर हैं, तो मैं MedTech Career Academy की जोरदार सिफारिश करता हूं। यह वास्तव में जॉइन करने लायक है!!",
    },
    "S. Rawla Afrin": {
      courseLabel: "कोर्स: CPC",
      text: "मैं अफरीन हूं। मैंने B.E (CSE) पूरा किया है और CPC प्रशिक्षण के लिए MedTech Career में शामिल हुई तथा CPC परीक्षा पास की। प्रशिक्षक अवधारणाओं को सरल तरीके से समझाते हैं, और उनकी चरण-दर-चरण शिक्षण पद्धति कोडिंग दिशानिर्देशों को समझने में मदद करती है। MedTech Career का धन्यवाद।",
    },
  },
  ml: {
    "Reeshman Banu": {
      courseLabel: "കോഴ്സ്: AMCT & CPC പരിശീലനം",
      text: "ഞാൻ അടുത്തിടെയാണ് MedTech Career ൽ എന്റെ AMCT & CPC പരിശീലനം പൂർത്തിയാക്കിയത്. പരിശീലകർ വളരെ സഹായകരും സൗഹൃദപരവും അറിവുള്ളവരുമായിരുന്നു. അവരുടെ മാർഗനിർദേശത്തിന്റെ സഹായത്തോടെ എനിക്ക് ചെന്നൈയിലെ S2M ൽ പ്ലേസ്‌മെന്റ് ലഭിച്ചു. ഈ പരിശീലനത്തിനും പിന്തുണയ്ക്കും ഞാൻ ഹൃദയം നിറഞ്ഞ നന്ദിയുണ്ട്!",
    },
    "K. Varsha": {
      courseLabel: "കോഴ്സ്: CPC",
      text: "MedTech Career Academy യിലെ എന്റെ പഠനാനുഭവം വളരെ നല്ലതായിരുന്നു. എന്റെ ട്രെയിനറായ Asmi മാം ഓരോ വിഷയവും വളരെ വ്യക്തമായും വിനയത്തോടെയും വിശദീകരിച്ചു. ഞാൻ പല തവണ ചോദിച്ചാലും അവർ എന്റെ സംശയങ്ങൾ വളരെ ക്ഷമയോടെ തീർത്ത് തന്നു. ദൈനംദിന അസസ്മെന്റുകൾ വളരെ സഹായകരമായിരുന്നു, അത് CPC പരീക്ഷയ്ക്കുള്ള എന്റെ ആത്മവിശ്വാസം വർധിപ്പിച്ചു. മൊത്തത്തിൽ അക്കാദമി നൽകിയ പരിശീലനത്തിലും പിന്തുണയിലും ഞാൻ പൂർണ്ണമായി സംതൃപ്തയാണ്. ശക്തമായി ശുപാർശ ചെയ്യുന്നു!",
    },
    Mariyaan: {
      courseLabel: "കോഴ്സ്: AMCT",
      text: "മെഡിക്കൽ കോഡിംഗ് പഠിക്കാൻ ഏറ്റവും നല്ല ഇടങ്ങളിൽ ഒന്നാണ് MedTech Career. മെഡിക്കൽ പശ്ചാത്തലം ഇല്ലാത്ത തുടക്കക്കാരൻമാർക്കുപോലും പരിശീലകർ ഓരോ ആശയവും വളരെ വ്യക്തമായി വിശദീകരിക്കുന്നു. ക്ലാസുകൾ ക്രമബദ്ധവും പ്രായോഗികമേധാവിത്വമുള്ളതും എളുപ്പത്തിൽ മനസ്സിലാക്കാവുന്നതുമാണ്. അവർ എപ്പോഴും സംശയങ്ങൾ തീർക്കാൻ തയ്യാറാണ്. അവർ തിയറിയിൽ മാത്രം ശ്രദ്ധ കേന്ദ്രീകരിക്കുന്നില്ല; റിയൽ-ടൈം ഉദാഹരണങ്ങൾ, അസസ്മെന്റുകൾ, പരീക്ഷാ തയ്യാറെടുപ്പ് എന്നിവയ്ക്കും സമാനമായി പ്രാധാന്യം നൽകുന്നു, അത് ആത്മവിശ്വാസം വളർത്തുന്നു. പഠനാന്തരീക്ഷം പോസിറ്റീവും പ്രചോദനാത്മകവുമാണ്. മെഡിക്കൽ കോഡിംഗിൽ കരിയർ ആരംഭിക്കാൻ നിങ്ങൾ ഗൗരവമായി ആലോചിക്കുന്നുവെങ്കിൽ, MedTech Career Academyയെ ഞാൻ ശക്തമായി ശുപാർശ ചെയ്യുന്നു. ചേർക്കാൻ തീർച്ചയായും മൂല്യമുള്ള സ്ഥാപനമാണ് ഇത്!!",
    },
    "S. Rawla Afrin": {
      courseLabel: "കോഴ്സ്: CPC",
      text: "ഞാൻ അഫ്രീൻ ആണ്. ഞാൻ B.E (CSE) പൂർത്തിയാക്കി CPC പരിശീലനത്തിനായി MedTech Career ൽ ചേർന്നു, CPC പരീക്ഷയും വിജയിച്ചു. പരിശീലകർ ആശയങ്ങൾ ലളിതമായി വിശദീകരിക്കുന്നു, അവരുടെ ഘട്ടംഘട്ടമായ പഠനരീതി കോഡിംഗ് മാർഗനിർദേശങ്ങൾ മനസ്സിലാക്കാൻ സഹായിക്കുന്നു. MedTech Career ന് നന്ദി.",
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
