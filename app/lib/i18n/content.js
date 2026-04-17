import { Children, cloneElement, isValidElement } from "react";
import { DEFAULT_LOCALE, resolveLocale } from "@/lib/i18n/config";
import { generatedPageTranslationsOne } from "@/lib/i18n/generated-page-translations-1";
import { generatedPageTranslationsTwo } from "@/lib/i18n/generated-page-translations-2";
import { generatedPageTranslationsThree } from "@/lib/i18n/generated-page-translations-3";
import { generatedPageTranslationsFour } from "@/lib/i18n/generated-page-translations-4";
import { generatedPageTranslationsFive } from "@/lib/i18n/generated-page-translations-5";
import { generatedPageTranslationsSix } from "@/lib/i18n/generated-page-translations-6";

const baseTranslations = {
  hi: {
    "Popular Courses": "लोकप्रिय कोर्स",
    "Our Most Sought-After Programmes": "हमारे सबसे अधिक पसंद किए जाने वाले प्रोग्राम",
    "Industry-aligned Medical Coding & Billing courses taught by certified professionals with 10+ years of experience.": "उद्योग की जरूरतों के अनुरूप मेडिकल कोडिंग और बिलिंग कोर्स, जिन्हें 10+ वर्षों के अनुभव वाले प्रमाणित विशेषज्ञ पढ़ाते हैं।",
    "View All Courses →": "सभी कोर्स देखें →",
    "Also offering:": "साथ ही उपलब्ध:",
    "and more.": "और भी बहुत कुछ।",
    "Browse all 7 courses →": "सभी 7 कोर्स देखें →",
    "Why Medtech Career": "मेडटेक करियर क्यों",
    "Why Choose Medtech Career?": "मेडटेक करियर क्यों चुनें?",
    "20 years of excellence — combining classroom discipline with flexible online learning for guaranteed career outcomes.": "20 वर्षों की उत्कृष्टता, जिसमें अनुशासित कक्षा प्रशिक्षण और लचीली ऑनलाइन शिक्षा को जोड़ा गया है ताकि करियर परिणाम सुनिश्चित हों।",
    "Job-Oriented Curriculum": "नौकरी-केंद्रित पाठ्यक्रम",
    "Every module is designed around real US healthcare BPO requirements — covering ICD-10-CM, CPT-4, HCPCS, and specialty coding used on the job.": "हर मॉड्यूल वास्तविक अमेरिकी हेल्थकेयर BPO आवश्यकताओं के अनुसार बनाया गया है, जिसमें ICD-10-CM, CPT-4, HCPCS और कार्यस्थल पर उपयोग होने वाली विशेष कोडिंग शामिल है।",
    "CPC-Certified Faculty": "CPC-प्रमाणित फैकल्टी",
    "Learn from CPC-certified trainers with 10+ years of hands-on experience in Medical Coding, Billing, and Clinical Documentation.": "मेडिकल कोडिंग, बिलिंग और क्लिनिकल डॉक्यूमेंटेशन में 10+ वर्षों के व्यावहारिक अनुभव वाले CPC-प्रमाणित प्रशिक्षकों से सीखें।",
    "Projector-Based Classroom Training": "प्रोजेक्टर-आधारित कक्षा प्रशिक्षण",
    "Interactive sessions using projectors, real medical records, and live coding — combined with live online classes for flexibility.": "प्रोजेक्टर, वास्तविक मेडिकल रिकॉर्ड और लाइव कोडिंग के साथ इंटरैक्टिव सत्र, जिन्हें लचीलेपन के लिए लाइव ऑनलाइन कक्षाओं से जोड़ा गया है।",
    "CPC & AAPC Exam Preparation": "CPC और AAPC परीक्षा तैयारी",
    "We prepare you for the AAPC CPC exam with 8 solved practice papers, timed mocks, and proven easy-learning methodology.": "हम आपको 8 हल किए गए प्रैक्टिस पेपर, समयबद्ध मॉक और प्रभावी आसान-सीखने की पद्धति के साथ AAPC CPC परीक्षा के लिए तैयार करते हैं।",
    "Assured Placement Support": "सुनिश्चित प्लेसमेंट सहायता",
    "4,000+ graduates placed in 50+ top MNCs and healthcare BPOs. Our certificates are recognised pan-India by all major employers.": "4,000+ स्नातकों को 50+ शीर्ष MNCs और हेल्थकेयर BPOs में नियुक्त किया गया है। हमारे प्रमाणपत्र पूरे भारत में प्रमुख नियोक्ताओं द्वारा मान्य हैं।",
    "Flexible Online & Offline Modes": "लचीले ऑनलाइन और ऑफलाइन मोड",
    "Choose classroom training at any of our 3 branches or attend live online sessions from anywhere — your schedule, your choice.": "हमारी 3 शाखाओं में से किसी भी शाखा में कक्षा प्रशिक्षण चुनें या कहीं से भी लाइव ऑनलाइन सत्र में भाग लें। आपका समय, आपकी पसंद।",
    "Numbers That Speak for Themselves": "वे आंकड़े जो खुद अपनी कहानी कहते हैं",
    "Candidates Placed": "नियुक्त उम्मीदवार",
    "Placement Rate": "प्लेसमेंट दर",
    "MNC Hiring Partners": "MNC भर्ती साझेदार",
    "Years of Excellence": "उत्कृष्टता के वर्ष",
    "Student Stories": "छात्रों की कहानियाँ",
    "Real Results from Real Students": "वास्तविक छात्रों के वास्तविक परिणाम",
    "Thousands of students have transformed their careers and cracked their exams with Medtech Career.": "हजारों छात्रों ने मेडटेक करियर के साथ अपना करियर बदला है और अपनी परीक्षाएँ सफलतापूर्वक पास की हैं।",
    "From the Blog": "ब्लॉग से",
    "Insights, Guides & Career Tips": "जानकारियाँ, गाइड और करियर टिप्स",
    "All Articles →": "सभी लेख →",
    "Get Started Today": "आज ही शुरुआत करें",
    "Your Career Breakthrough Starts Here": "आपकी करियर सफलता यहीं से शुरू होती है",
    "Starts Here": "यहीं से",
    "Join over 4,000 graduates who are now working in leading healthcare BPOs and MNCs across India.\n            Enrol in a course, attend a free demo class, or just talk to a counsellor — we're here to help.": "4,000 से अधिक स्नातकों में शामिल हों जो अब भारत भर के प्रमुख हेल्थकेयर BPOs और MNCs में काम कर रहे हैं। किसी कोर्स में नाम लिखें, मुफ्त डेमो क्लास लें, या काउंसलर से बात करें — हम मदद के लिए मौजूद हैं।",
    "Browse Courses": "कोर्स देखें",
    "Talk to a Counsellor": "काउंसलर से बात करें",
    "Launch Your Career": "अपना करियर शुरू करें",
    "in Healthcare Coding": "हेल्थकेयर कोडिंग में",
    "Medtech Career provides job-oriented Medical Coding, Medical Billing, and CPC Certification training — placing graduates in leading healthcare BPOs and MNCs across India.": "मेडटेक करियर नौकरी-केंद्रित मेडिकल कोडिंग, मेडिकल बिलिंग और CPC प्रमाणन प्रशिक्षण प्रदान करता है, जिससे स्नातक भारत भर के प्रमुख हेल्थकेयर BPOs और MNCs में नियुक्त होते हैं।",
    "Explore Courses": "कोर्स देखें",
    "Join 1-1 career Counseling": "1-1 करियर काउंसलिंग लें",
    "Courses": "कोर्स",
    "Graduates": "स्नातक",
    "Placement": "प्लेसमेंट",
    "Certification": "प्रमाणन",
    "CPC / CCS Ready": "CPC / CCS तैयार",
    "Live Classes": "लाइव क्लासेस",
    "Daily Sessions": "दैनिक सत्र",
    "Courses Offered": "प्रस्तावित कोर्स",
    "Years of Experience": "अनुभव के वर्ष",
    "Qualified Faculties": "योग्य फैकल्टी",
    "View Course →": "कोर्स देखें →",
    "Empowering students and professionals with world-class online education in healthcare coding, billing, and competitive exam coaching.": "हेल्थकेयर कोडिंग, बिलिंग और प्रतियोगी परीक्षा प्रशिक्षण में विश्वस्तरीय ऑनलाइन शिक्षा के माध्यम से छात्रों और पेशेवरों को सशक्त बनाना।",
    "Company": "कंपनी",
    "About Us": "हमारे बारे में",
    "Contact": "संपर्क",
    "Join as Teacher": "शिक्षक बनें",
    "Find Courses": "कोर्स खोजें",
    "Browse All Courses →": "सभी कोर्स ब्राउज़ करें →",
    "Search courses, topics…": "कोर्स, विषय खोजें…",
    "Search": "खोजें",
    "My Learning": "मेरी लर्निंग",
    "Wishlist": "विशलिस्ट",
    "Cart": "कार्ट",
    "Notifications": "सूचनाएँ",
    "Account menu": "अकाउंट मेन्यू",
    "Profile": "प्रोफ़ाइल",
    "User": "यूज़र",
    "View Profile": "प्रोफ़ाइल देखें",
    "Logout": "लॉगआउट",
    "Get a Demo": "डेमो प्राप्त करें",
    "Open menu": "मेन्यू खोलें",
    "Close menu": "मेन्यू बंद करें",
    "Main navigation": "मुख्य नेविगेशन",
    "Mobile navigation": "मोबाइल नेविगेशन",
    "Hover an item to explore": "जानने के लिए किसी आइटम पर होवर करें",
    "© {year} Medtech Career. All rights reserved.": "© {year} मेडटेक करियर। सर्वाधिकार सुरक्षित।",
    "Privacy Policy": "गोपनीयता नीति",
    "Terms of Use": "उपयोग की शर्तें",
    "Refund Policy": "रिफंड नीति",
    "Our": "हमारी",
    "20 Years of Excellence in": "20 वर्षों की उत्कृष्टता",
    "Medical Career Training": "मेडिकल करियर प्रशिक्षण",
    "Branch Locations": "शाखा स्थान",
    "Training Programs": "प्रशिक्षण कार्यक्रम",
    "Team": "टीम",
    "Placements": "प्लेसमेंट्स",
    "Join as a": "एक",
    "Teacher": "शिक्षक",
    "Gain Real-World": "वास्तविक दुनिया का",
    "Industry Experience": "उद्योग अनुभव"
  },
  ml: {
    "Popular Courses": "ജനപ്രിയ കോഴ്സുകൾ",
    "Our Most Sought-After Programmes": "ഏറ്റവും കൂടുതൽ തിരഞ്ഞെടുക്കപ്പെടുന്ന പ്രോഗ്രാമുകൾ",
    "Industry-aligned Medical Coding & Billing courses taught by certified professionals with 10+ years of experience.": "10+ വർഷത്തെ പരിചയമുള്ള സർട്ടിഫൈഡ് വിദഗ്ധർ കൈകാര്യം ചെയ്യുന്ന, വ്യവസായ ആവശ്യങ്ങൾക്കനുസരിച്ച മെഡിക്കൽ കോഡിംഗ്, ബില്ലിംഗ് കോഴ്സുകൾ.",
    "View All Courses →": "എല്ലാ കോഴ്സുകളും കാണുക →",
    "Also offering:": "ഇതും ലഭ്യമാണ്:",
    "and more.": "മറ്റും കൂടുതൽ.",
    "Browse all 7 courses →": "എല്ലാ 7 കോഴ്സുകളും കാണുക →",
    "Why Medtech Career": "എന്തുകൊണ്ട് മെഡ്ടെക് കരിയർ",
    "Why Choose Medtech Career?": "മെഡ്ടെക് കരിയർ തിരഞ്ഞെടുക്കേണ്ടത് എന്തുകൊണ്ട്?",
    "20 years of excellence — combining classroom discipline with flexible online learning for guaranteed career outcomes.": "20 വർഷത്തെ മികവ്, ക്ലാസ് റൂം പരിശീലനവും ഇളവുള്ള ഓൺലൈൻ പഠനവും ഒന്നിച്ച് ചേർത്ത് ഉറപ്പായ കരിയർ ഫലങ്ങൾ നൽകുന്നു.",
    "Job-Oriented Curriculum": "ജോലി ലക്ഷ്യമിട്ട പാഠ്യപദ്ധതി",
    "Every module is designed around real US healthcare BPO requirements — covering ICD-10-CM, CPT-4, HCPCS, and specialty coding used on the job.": "യഥാർത്ഥ യു.എസ്. ഹെൽത്ത്‌കെയർ BPO ആവശ്യങ്ങൾ മുൻനിർത്തിയാണ് ഓരോ മോഡ്യൂളും രൂപകൽപ്പന ചെയ്തിരിക്കുന്നത്. ICD-10-CM, CPT-4, HCPCS, സ്പെഷ്യാലിറ്റി കോഡിംഗ് എന്നിവ ഇതിൽ ഉൾപ്പെടുന്നു.",
    "CPC-Certified Faculty": "CPC സർട്ടിഫൈഡ് പരിശീലകർ",
    "Learn from CPC-certified trainers with 10+ years of hands-on experience in Medical Coding, Billing, and Clinical Documentation.": "മെഡിക്കൽ കോഡിംഗ്, ബില്ലിംഗ്, ക്ലിനിക്കൽ ഡോക്യുമെന്റേഷൻ മേഖലകളിൽ 10+ വർഷത്തെ പ്രവൃത്തി പരിചയമുള്ള CPC സർട്ടിഫൈഡ് പരിശീലകരിൽ നിന്ന് പഠിക്കുക.",
    "Projector-Based Classroom Training": "പ്രൊജക്റ്റർ അടിസ്ഥാനമാക്കിയ ക്ലാസ് റൂം പരിശീലനം",
    "Interactive sessions using projectors, real medical records, and live coding — combined with live online classes for flexibility.": "പ്രൊജക്റ്ററുകൾ, യഥാർത്ഥ മെഡിക്കൽ രേഖകൾ, ലൈവ് കോഡിംഗ് എന്നിവ ഉപയോഗിച്ചുള്ള ഇൻററാക്ടീവ് സെഷനുകൾ, കൂടെ ലൈവ് ഓൺലൈൻ ക്ലാസുകളും.",
    "CPC & AAPC Exam Preparation": "CPC, AAPC പരീക്ഷ തയ്യാറെടുപ്പ്",
    "We prepare you for the AAPC CPC exam with 8 solved practice papers, timed mocks, and proven easy-learning methodology.": "8 പരിഹരിച്ച പരിശീലന പേപ്പറുകൾ, സമയം നിശ്ചയിച്ച മോക്ക് പരീക്ഷകൾ, ഫലപ്രദമായ പഠനരീതികൾ എന്നിവ ഉപയോഗിച്ച് AAPC CPC പരീക്ഷയ്ക്ക് തയ്യാറാക്കുന്നു.",
    "Assured Placement Support": "ഉറപ്പായ പ്ലേസ്‌മെന്റ് പിന്തുണ",
    "4,000+ graduates placed in 50+ top MNCs and healthcare BPOs. Our certificates are recognised pan-India by all major employers.": "4,000+ ബിരുദധാരികൾ 50+ മുൻനിര MNCകളിലും ഹെൽത്ത്‌കെയർ BPOകളിലും നിയമിതരായി. നമ്മുടെ സർട്ടിഫിക്കറ്റുകൾ ഇന്ത്യയിലുടനീളമുള്ള പ്രധാന തൊഴിലുടമകൾ അംഗീകരിക്കുന്നു.",
    "Flexible Online & Offline Modes": "ഓൺലൈൻ, ഓഫ്‌ലൈൻ ഇളവുള്ള മോഡുകൾ",
    "Choose classroom training at any of our 3 branches or attend live online sessions from anywhere — your schedule, your choice.": "ഞങ്ങളുടെ 3 ശാഖകളിൽ ഏതിനെയെങ്കിലും തെരഞ്ഞെടുത്ത് ക്ലാസ് റൂം പരിശീലനം എടുക്കുകയോ, എവിടെ നിന്നുമുള്ള ലൈവ് ഓൺലൈൻ സെഷനുകളിൽ പങ്കെടുക്കുകയോ ചെയ്യാം.",
    "Numbers That Speak for Themselves": "സ്വയം തെളിയിക്കുന്ന അക്കങ്ങൾ",
    "Candidates Placed": "ജോലി നേടിയ വിദ്യാർത്ഥികൾ",
    "Placement Rate": "പ്ലേസ്‌മെന്റ് നിരക്ക്",
    "MNC Hiring Partners": "MNC നിയമന പങ്കാളികൾ",
    "Years of Excellence": "മികവിന്റെ വർഷങ്ങൾ",
    "Student Stories": "വിദ്യാർത്ഥികളുടെ അനുഭവങ്ങൾ",
    "Real Results from Real Students": "യഥാർത്ഥ വിദ്യാർത്ഥികളിൽ നിന്നുള്ള യഥാർത്ഥ ഫലങ്ങൾ",
    "Thousands of students have transformed their careers and cracked their exams with Medtech Career.": "ആയിരക്കണക്കിന് വിദ്യാർത്ഥികൾ മെഡ്ടെക് കരിയറിനൊപ്പം അവരുടെ കരിയർ മാറ്റുകയും പരീക്ഷകൾ വിജയകരമായി പൂർത്തിയാക്കുകയും ചെയ്തു.",
    "From the Blog": "ബ്ലോഗിൽ നിന്ന്",
    "Insights, Guides & Career Tips": "അവബോധങ്ങൾ, ഗൈഡുകൾ, കരിയർ നിർദേശങ്ങൾ",
    "All Articles →": "എല്ലാ ലേഖനങ്ങളും →",
    "Get Started Today": "ഇന്ന് തന്നെ തുടങ്ങാം",
    "Your Career Breakthrough Starts Here": "നിങ്ങളുടെ കരിയർ മുന്നേറ്റം ഇവിടെ തുടങ്ങുന്നു",
    "Starts Here": "ഇവിടെ തുടങ്ങുന്നു",
    "Join over 4,000 graduates who are now working in leading healthcare BPOs and MNCs across India.\n            Enrol in a course, attend a free demo class, or just talk to a counsellor — we're here to help.": "ഇപ്പോൾ ഇന്ത്യയിലുടനീളമുള്ള പ്രമുഖ ഹെൽത്ത്‌കെയർ BPOകളിലും MNCകളിലും ജോലി ചെയ്യുന്ന 4,000-ത്തിലധികം ബിരുദധാരികളോടൊപ്പം ചേരൂ. ഒരു കോഴ്സിൽ ചേർക്കൂ, സൗജന്യ ഡെമോ ക്ലാസിൽ പങ്കെടുക്കൂ, അല്ലെങ്കിൽ കൗൺസിലറുമായി സംസാരിക്കൂ — സഹായിക്കാൻ ഞങ്ങൾ ഇവിടെ ഉണ്ട്.",
    "Browse Courses": "കോഴ്സുകൾ കാണുക",
    "Talk to a Counsellor": "കൗൺസിലറുമായി സംസാരിക്കുക",
    "Launch Your Career": "നിങ്ങളുടെ കരിയർ ആരംഭിക്കൂ",
    "in Healthcare Coding": "ഹെൽത്ത്‌കെയർ കോഡിംഗിൽ",
    "Medtech Career provides job-oriented Medical Coding, Medical Billing, and CPC Certification training — placing graduates in leading healthcare BPOs and MNCs across India.": "മെഡ്ടെക് കരിയർ തൊഴിൽകേന്ദ്രിത മെഡിക്കൽ കോഡിംഗ്, മെഡിക്കൽ ബില്ലിംഗ്, CPC സർട്ടിഫിക്കേഷൻ പരിശീലനം നൽകുന്നു. ഇത് ഇന്ത്യയിലുടനീളമുള്ള മുൻനിര ഹെൽത്ത്‌കെയർ BPOകളും MNCകളും ഉൾപ്പെടെ നിയമന അവസരങ്ങളിലേക്ക് നയിക്കുന്നു.",
    "Explore Courses": "കോഴ്സുകൾ പരിശോധിക്കുക",
    "Join 1-1 career Counseling": "1-1 കരിയർ കൗൺസിലിംഗിൽ ചേരുക",
    "Courses": "കോഴ്സുകൾ",
    "Graduates": "ബിരുദധാരികൾ",
    "Placement": "പ്ലേസ്‌മെന്റ്",
    "Certification": "സർട്ടിഫിക്കേഷൻ",
    "CPC / CCS Ready": "CPC / CCS തയ്യാറായി",
    "Live Classes": "ലൈവ് ക്ലാസുകൾ",
    "Daily Sessions": "ദൈനംദിന സെഷനുകൾ",
    "Courses Offered": "ലഭ്യമായ കോഴ്സുകൾ",
    "Years of Experience": "പരിചയ വർഷങ്ങൾ",
    "Qualified Faculties": "യോഗ്യരായ ഫാക്കൽറ്റി",
    "View Course →": "കോഴ്സ് കാണുക →",
    "Empowering students and professionals with world-class online education in healthcare coding, billing, and competitive exam coaching.": "ഹെൽത്ത്‌കെയർ കോഡിംഗ്, ബില്ലിംഗ്, മത്സര പരീക്ഷ പരിശീലനം എന്നിവയിൽ ലോകോത്തര ഓൺലൈൻ വിദ്യാഭ്യാസം നൽകി വിദ്യാർത്ഥികളെയും പ്രൊഫഷണലുകളെയും ശക്തിപ്പെടുത്തുന്നു.",
    "Company": "കമ്പനി",
    "About Us": "ഞങ്ങളേക്കുറിച്ച്",
    "Contact": "ബന്ധപ്പെടുക",
    "Join as Teacher": "അധ്യാപകനാകുക",
    "Find Courses": "കോഴ്സുകൾ കണ്ടെത്തുക",
    "Browse All Courses →": "എല്ലാ കോഴ്സുകളും ബ്രൗസ് ചെയ്യുക →",
    "Search courses, topics…": "കോഴ്സുകളും വിഷയങ്ങളും തിരയുക…",
    "Search": "തിരയുക",
    "My Learning": "എന്റെ പഠനം",
    "Wishlist": "വിഷ്‌ലിസ്റ്റ്",
    "Cart": "കാർട്ട്",
    "Notifications": "അറിയിപ്പുകൾ",
    "Account menu": "അക്കൗണ്ട് മെനു",
    "Profile": "പ്രൊഫൈൽ",
    "User": "ഉപയോക്താവ്",
    "View Profile": "പ്രൊഫൈൽ കാണുക",
    "Logout": "ലോഗ്ഔട്ട്",
    "Get a Demo": "ഡെമോ നേടുക",
    "Open menu": "മെനു തുറക്കുക",
    "Close menu": "മെനു അടയ്ക്കുക",
    "Main navigation": "പ്രധാന നാവിഗേഷൻ",
    "Mobile navigation": "മൊബൈൽ നാവിഗേഷൻ",
    "Hover an item to explore": "പരിശോധിക്കാൻ ഒരു ഇനത്തിന് മുകളിലൂടെ ഹോവർ ചെയ്യുക",
    "© {year} Medtech Career. All rights reserved.": "© {year} മെഡ്ടെക് കരിയർ. എല്ലാ അവകാശങ്ങളും സംരക്ഷിതമാണ്.",
    "Privacy Policy": "സ്വകാര്യതാ നയം",
    "Terms of Use": "ഉപയോഗ നിബന്ധനകൾ",
    "Refund Policy": "റീഫണ്ട് നയം",
    "Our": "നമ്മുടെ",
    "20 Years of Excellence in": "20 വർഷത്തെ മികവ്",
    "Medical Career Training": "മെഡിക്കൽ കരിയർ പരിശീലനം",
    "Branch Locations": "ശാഖാ കേന്ദ്രങ്ങൾ",
    "Training Programs": "പരിശീലന പരിപാടികൾ",
    "Team": "ടീം",
    "Placements": "പ്ലേസ്‌മെന്റുകൾ",
    "Join as a": "ഒരു",
    "Teacher": "അധ്യാപകൻ",
    "Gain Real-World": "യഥാർത്ഥ ലോക",
    "Industry Experience": "ഇൻഡസ്ട്രി അനുഭവം"
  },
};

const translations = {
  hi: {
    ...baseTranslations.hi,
    ...generatedPageTranslationsOne.hi,
    ...generatedPageTranslationsTwo.hi,
    ...generatedPageTranslationsThree.hi,
    ...generatedPageTranslationsFour.hi,
    ...generatedPageTranslationsFive.hi,
    ...generatedPageTranslationsSix.hi,
  },
  ml: {
    ...baseTranslations.ml,
    ...generatedPageTranslationsOne.ml,
    ...generatedPageTranslationsTwo.ml,
    ...generatedPageTranslationsThree.ml,
    ...generatedPageTranslationsFour.ml,
    ...generatedPageTranslationsFive.ml,
    ...generatedPageTranslationsSix.ml,
  },
};

function normalizeText(text) {
  return String(text || "").replace(/\s+/g, " ").trim();
}

const normalizedTranslations = Object.fromEntries(
  Object.entries(translations).map(([locale, entries]) => [
    locale,
    Object.fromEntries(
      Object.entries(entries).map(([source, target]) => [normalizeText(source), target]),
    ),
  ]),
);

const reverseTranslations = Object.fromEntries(
  Object.entries(normalizedTranslations).map(([locale, entries]) => [
    locale,
    Object.fromEntries(
      Object.entries(entries).map(([source, target]) => [normalizeText(target), source]),
    ),
  ]),
);

export function localizeText(locale, text) {
  if (typeof text !== "string") {
    return text;
  }

  const resolvedLocale = resolveLocale(locale);

  if (resolvedLocale === DEFAULT_LOCALE) {
    return text;
  }

  const translated = normalizedTranslations[resolvedLocale]?.[normalizeText(text)];

  if (!translated) {
    return text;
  }

  const leadingWhitespace = text.match(/^\s*/)?.[0] ?? "";
  const trailingWhitespace = text.match(/\s*$/)?.[0] ?? "";
  return `${leadingWhitespace}${translated}${trailingWhitespace}`;
}

export function getSourceText(locale, text) {
  if (typeof text !== "string") {
    return text;
  }

  const resolvedLocale = resolveLocale(locale);

  if (resolvedLocale === DEFAULT_LOCALE) {
    return normalizeText(text);
  }

  return reverseTranslations[resolvedLocale]?.[normalizeText(text)] ?? normalizeText(text);
}

export function localizeContent(value, locale) {
  if (typeof value === "string") {
    return localizeText(locale, value);
  }

  if (Array.isArray(value)) {
    return value.map((entry) => localizeContent(entry, locale));
  }

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, entry]) => [key, localizeContent(entry, locale)]),
    );
  }

  return value;
}

export function mergeLocalizedContent(baseValue, localizedValue) {
  if (localizedValue === undefined) {
    return baseValue;
  }

  if (Array.isArray(baseValue) || Array.isArray(localizedValue)) {
    return localizedValue;
  }

  if (
    baseValue &&
    localizedValue &&
    typeof baseValue === "object" &&
    typeof localizedValue === "object"
  ) {
    const merged = { ...baseValue };

    for (const [key, value] of Object.entries(localizedValue)) {
      merged[key] = mergeLocalizedContent(baseValue[key], value);
    }

    return merged;
  }

  return localizedValue;
}

const LOCALIZABLE_PROP_NAMES = new Set([
  "alt",
  "aria-label",
  "description",
  "label",
  "placeholder",
  "subtitle",
  "text",
  "title",
  "value",
]);

export function localizeNodeTree(locale, node) {
  if (typeof node === "string") {
    return localizeText(locale, node);
  }

  if (Array.isArray(node)) {
    return node.map((child) => localizeNodeTree(locale, child));
  }

  if (!isValidElement(node)) {
    return node;
  }

  const nextProps = {};
  let shouldClone = false;

  if (node.props.children !== undefined) {
    nextProps.children = Children.map(node.props.children, (child) => localizeNodeTree(locale, child));
    shouldClone = true;
  }

  for (const propName of LOCALIZABLE_PROP_NAMES) {
    if (typeof node.props[propName] !== "string") {
      continue;
    }

    nextProps[propName] = localizeText(locale, node.props[propName]);
    shouldClone = true;
  }

  return shouldClone ? cloneElement(node, nextProps) : node;
}