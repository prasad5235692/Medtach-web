import { DEFAULT_LOCALE, resolveLocale } from "@/lib/i18n/config";
import { localizeContent, mergeLocalizedContent } from "@/lib/i18n/content";

const staticPageContent = {
  placements: {
    metadata: {
      title: "Placements - Medtech Career",
    },
    hero: {
      label: "Career Success",
      titleLeading: "Get Placed in",
      titleHighlight: "Top Companies",
      description:
        "Medtech Career has placed 4,000+ graduates in top healthcare MNCs & BPOs across India - with a 95% placement rate and packages up to ₹12 LPA.",
      primaryCtaLabel: "Apply for Placement ->",
      secondaryCtaLabel: "Explore Courses",
    },
    journeySection: {
      label: "Our Process",
      title: "Your Placement Journey",
      subtitle: "A clear three-step path from training to your first pay cheque.",
      stepPrefix: "Step",
      steps: [
        {
          id: "training",
          icon: "book-open",
          step: "01",
          title: "Training",
          description:
            "Complete industry-focused medical coding and billing courses - BMCT, AMCT, CPC, CRC, or CDM.",
          color: "bg-purple-700",
          textColor: "text-purple-700",
        },
        {
          id: "mock-interviews",
          icon: "message-square",
          step: "02",
          title: "Mock Interviews",
          description:
            "Face realistic interview simulations with certified faculty. Get detailed feedback on technical and HR rounds.",
          color: "bg-orange-500",
          textColor: "text-orange-600",
        },
        {
          id: "placement",
          icon: "handshake",
          step: "03",
          title: "Placement",
          description:
            "Our placement cell directly connects you to 50+ hiring partners. We support you until you receive your offer letter.",
          color: "bg-teal-600",
          textColor: "text-teal-700",
        },
      ],
    },
    stats: [
      { id: "candidates", number: "4,000+", label: "Candidates Placed", icon: "users" },
      { id: "partners", number: "50+", label: "Top MNC Partners", icon: "building-2" },
      { id: "rate", number: "95%", label: "Placement Rate", icon: "trending-up" },
      { id: "salary", number: "₹3-12L", label: "Avg. Annual Package", icon: "briefcase" },
    ],
    partnersSection: {
      label: "Hiring Partners",
      title: "Companies That Hire Our Graduates",
      subtitle:
        "Our placement network spans the top healthcare BPOs, hospitals, and MNCs in India.",
      companies: [
        { id: "apollo", name: "Apollo Hospitals" },
        { id: "hcl", name: "HCL Healthcare" },
        { id: "cognizant", name: "Cognizant Health" },
        { id: "accenture", name: "Accenture" },
        { id: "omega", name: "Omega Healthcare" },
        { id: "medrecords", name: "MedRecords India" },
        { id: "allscripts", name: "Allscripts" },
        { id: "change", name: "Change Healthcare" },
        { id: "conifer", name: "Conifer Health" },
        { id: "nthrive", name: "nThrive" },
        { id: "r1", name: "R1 RCM" },
        { id: "sutherland", name: "Sutherland Healthcare" },
        { id: "wns", name: "WNS Healthcare" },
        { id: "startek", name: "Startek Health" },
        { id: "firstsource", name: "Firstsource" },
        { id: "mphasis", name: "Mphasis" },
        { id: "wipro", name: "Wipro BPS Health" },
        { id: "gebbs", name: "Gebbs Healthcare" },
        { id: "infosonics", name: "Infosonics" },
        { id: "maximus", name: "Maximus India" },
      ],
    },
    supportSection: {
      label: "Support System",
      title: "How Placement Support Works",
      subtitle:
        "We do not just teach - we prepare you entirely for employment, from CV to offer letter.",
      items: [
        {
          id: "resume",
          step: "01",
          title: "Resume Building Workshop",
          description:
            "Dedicated sessions on healthcare-specific CV writing, LinkedIn profile optimisation, and professional branding.",
        },
        {
          id: "mock-rounds",
          step: "02",
          title: "Mock Interview Rounds",
          description:
            "Realistic interview simulations with faculty and industry professionals. Detailed feedback on technical and HR rounds.",
        },
        {
          id: "referrals",
          step: "03",
          title: "Direct Company Referrals",
          description:
            "Placement cell connects qualified students directly to our network of 50+ hiring partners across India.",
        },
        {
          id: "prep",
          step: "04",
          title: "Interview Preparation Support",
          description:
            "Company-specific briefing notes, coding test prep, and last-mile support until offer letter is received.",
        },
      ],
    },
    storiesSection: {
      label: "Alumni Stories",
      title: "Success Stories from Our Graduates",
      subtitle: "Real students, real careers - hear from those who have already taken the leap.",
      stories: [
        {
          id: "ananya-sharma",
          name: "Ananya Sharma",
          avatar: "AS",
          bg: "bg-purple-700",
          role: "Medical Coder at Apollo Hospitals",
          course: "AMCT + CPC",
          salary: "₹5.2 LPA",
          story:
            "After completing the AMCT and CPC programmes at Medtech Career, I cleared the CPC exam on my first attempt and joined Apollo within 45 days of course completion. The faculty prepared me beyond textbook knowledge.",
        },
        {
          id: "karthik-subramanian",
          name: "Karthik Subramanian",
          avatar: "KS",
          bg: "bg-orange-500",
          role: "Senior Coder, Omega Healthcare",
          course: "CPC Certification Training",
          salary: "₹7.4 LPA",
          story:
            "I had 2 years of coding experience but no certification. The CPC programme's 8 solved papers and timed practice sessions helped me score well and negotiate a senior position.",
        },
        {
          id: "priya-nair",
          name: "Priya Nair",
          avatar: "PN",
          bg: "bg-teal-700",
          role: "RCM Analyst, Cognizant Health",
          course: "Medical Billing",
          salary: "₹4.8 LPA",
          story:
            "As a BSc Nursing graduate, I was not sure about a coding career. Medtech Career's billing programme not only gave me the skills but also introduced me to my current employer through a placement drive.",
        },
        {
          id: "deepika-rao",
          name: "Deepika Rao",
          avatar: "DR",
          bg: "bg-indigo-700",
          role: "HCC Risk Coder, R1 RCM",
          course: "CRC Programme",
          salary: "₹9.0 LPA",
          story:
            "Choosing the CRC niche at Medtech Career was the best career decision I made. HCC risk adjustment roles are scarce and well-paid - I was placed at R1 RCM at a package I did not expect as a fresher.",
        },
      ],
    },
    eligibilitySection: {
      label: "Eligibility",
      title: "Who Can Get Placed?",
      items: [
        "Life Science Graduates (BSc/MSc Nursing, Pharmacy, BMLT, Microbiology, BDS)",
        "Paramedical and allied health graduates",
        "Any graduate with BMCT / AMCT / CPC certification",
        "Working professionals seeking career transition",
        "Freshers willing to complete our training programme",
      ],
    },
    guaranteeSection: {
      label: "Commitment",
      title: "Our Placement Guarantee",
      paragraphs: [
        "Medtech Career offers assured placement support for all students who successfully complete their training programme. Our placement cell actively works with 50+ partner companies with ongoing recruitment needs.",
        "All candidates who complete training are placed in leading MNCs and healthcare BPOs across India. Our certificates are recognised and accepted by all healthcare BPOs pan-India.",
      ],
      ctaLabel: "Start Your Course ->",
    },
    ctaSection: {
      label: "Your Career Awaits",
      title: "Start Training. Get Placed.",
      description:
        "Join thousands of Medtech Career graduates now working at top healthcare companies. Your placement journey begins with enrolling.",
      primaryCtaLabel: "Apply for Placement",
      secondaryCtaLabel: "Enrol in a Course",
    },
  },
  collegeTraining: {
    metadata: {
      title: "In-Campus College Training - Medtech Career",
    },
    hero: {
      label: "Institutional Training",
      titleLeading: "In-Campus",
      titleHighlight: "College Training",
      description:
        "Medtech Career partners with colleges across India to deliver industry-aligned medical coding and billing training directly on campus - preparing students before graduation.",
      primaryCtaLabel: "Partner With Us ->",
      secondaryCtaLabel: "View Programs",
    },
    stats: [
      { id: "students", number: "12,000+", label: "Students Trained", icon: "users" },
      { id: "colleges", number: "80+", label: "Colleges Reached", icon: "building-2" },
      { id: "programs", number: "40+", label: "Training Programs", icon: "book-open" },
      { id: "satisfaction", number: "98%", label: "Satisfaction Rate", icon: "award" },
    ],
    partnersSection: {
      label: "Our Partners",
      title: "Colleges We Have Trained At",
      subtitle:
        "Trusted by leading medical and paramedical colleges across South India and beyond.",
      colleges: [
        { id: "sri-ramachandra", name: "Sri Ramachandra Institute of Higher Education", location: "Chennai, TN" },
        { id: "manipal", name: "Manipal College of Health Professions", location: "Manipal, KA" },
        { id: "kmch", name: "KMCH College of Pharmacy", location: "Coimbatore, TN" },
        { id: "psg", name: "PSG College of Arts & Science", location: "Coimbatore, TN" },
        { id: "sri-venkateswara", name: "Sri Venkateswara College of Pharmacy", location: "Tirupati, AP" },
        { id: "srm", name: "SRM Institute of Science & Technology", location: "Chennai, TN" },
        { id: "kle", name: "KLE University", location: "Belagavi, KA" },
        { id: "saveetha", name: "Saveetha Institute of Medical & Technical Sciences", location: "Chennai, TN" },
      ],
    },
    programsSection: {
      label: "What We Offer",
      title: "Training Programs",
      subtitle:
        "Structured programmes from awareness workshops to certification-level training, all delivered on your campus.",
      cardCtaLabel: "Enquire About This Program",
      programs: [
        {
          id: "awareness-workshop",
          title: "Medical Coding Awareness Workshop",
          duration: "1 Day",
          audience: "Final-year Life Science / Paramedical students",
          outcomes: [
            "Career overview of medical coding",
            "US healthcare system introduction",
            "Live coding demo session",
          ],
          color: "border-purple-200 bg-purple-50",
          badgeColor: "bg-purple-700 text-white",
        },
        {
          id: "bmct",
          title: "Basic Medical Coding Training (BMCT)",
          duration: "1 Month",
          audience: "BSc Nursing, BMLT, Pharmacy, BDS graduates",
          outcomes: [
            "ICD-10-CM and CPT-4 foundations",
            "Medical terminology and anatomy",
            "Healthcare claim basics",
          ],
          color: "border-orange-200 bg-orange-50",
          badgeColor: "bg-orange-500 text-white",
        },
        {
          id: "amct",
          title: "Advanced Medical Coding Training (AMCT)",
          duration: "2 Months",
          audience: "Post BMCT or experienced coders",
          outcomes: [
            "Specialty coding: Surgery, Radiology, E/M",
            "50+ advanced case studies",
            "Industry-ready assessment",
          ],
          color: "border-teal-200 bg-teal-50",
          badgeColor: "bg-teal-700 text-white",
        },
        {
          id: "cpc-prep",
          title: "CPC Certification Preparation",
          duration: "3 Months",
          audience: "Students targeting AAPC CPC credential",
          outcomes: [
            "8 solved CPC practice papers",
            "Timed mock exams",
            "Exam strategy and speed workshops",
          ],
          color: "border-indigo-200 bg-indigo-50",
          badgeColor: "bg-indigo-700 text-white",
        },
        {
          id: "billing-rcm",
          title: "Medical Billing and RCM",
          duration: "1 Month",
          audience: "Commerce and Life Science graduates",
          outcomes: [
            "Claim submission and denial management",
            "AR follow-up workflows",
            "Insurance portal navigation",
          ],
          color: "border-pink-200 bg-pink-50",
          badgeColor: "bg-pink-700 text-white",
        },
        {
          id: "cdi",
          title: "Clinical Documentation Improvement",
          duration: "6 Weeks",
          audience: "MBBS, Nursing and allied health professionals",
          outcomes: [
            "CDI query writing",
            "DRG review and audit",
            "EHR navigation skills",
          ],
          color: "border-cyan-200 bg-cyan-50",
          badgeColor: "bg-cyan-700 text-white",
        },
      ],
    },
    gallerySection: {
      label: "Gallery",
      title: "Training in Action",
      subtitle: "Moments from our college training sessions across India.",
      items: [
        { id: "coimbatore-orientation", label: "Batch Orientation - Coimbatore", type: "image", placeholder: "bg-purple-100" },
        { id: "chennai-coding", label: "Live Coding Session - Chennai", type: "image", placeholder: "bg-orange-100" },
        { id: "certificates", label: "Certificate Distribution", type: "image", placeholder: "bg-teal-100" },
        { id: "testimonial-video", label: "Student Testimonial Video", type: "video", placeholder: "bg-indigo-100" },
        { id: "workshop-highlights", label: "Campus Workshop Highlights", type: "video", placeholder: "bg-pink-100" },
        { id: "partners-meet", label: "Annual College Partners Meet", type: "image", placeholder: "bg-cyan-100" },
      ],
    },
    ctaSection: {
      label: "Partner With Us",
      title: "Bring Medtech Training to Your Campus",
      description:
        "We offer flexible scheduling, dedicated trainers, and end-to-end programme management - completely tailored to your institution's needs.",
      primaryCtaLabel: "Request a Campus Session",
      secondaryCtaLabel: "View All Training Programs",
    },
  },
};

const staticPageTranslations = {
  hi: {
    placements: {
      metadata: {
        title: "प्लेसमेंट्स - Medtech Career",
      },
      hero: {
        label: "करियर सफलता",
        titleLeading: "शीर्ष कंपनियों में नौकरी",
        titleHighlight: "पाएं",
        description:
          "Medtech Career ने भारत भर की शीर्ष हेल्थकेयर MNCs और BPOs में 4,000+ ग्रेजुएट्स को प्लेस किया है - 95% प्लेसमेंट रेट और ₹12 LPA तक के पैकेज के साथ।",
        primaryCtaLabel: "प्लेसमेंट के लिए आवेदन करें ->",
        secondaryCtaLabel: "कोर्स देखें",
      },
      journeySection: {
        label: "हमारी प्रक्रिया",
        title: "आपकी प्लेसमेंट यात्रा",
        subtitle: "ट्रेनिंग से लेकर पहली सैलरी तक का स्पष्ट तीन-चरणीय मार्ग।",
        stepPrefix: "चरण",
        steps: [
          {
            id: "training",
            icon: "book-open",
            step: "01",
            title: "ट्रेनिंग",
            description:
              "उद्योग-केंद्रित मेडिकल कोडिंग और बिलिंग कोर्स पूरे करें - BMCT, AMCT, CPC, CRC या CDM।",
            color: "bg-purple-700",
            textColor: "text-purple-700",
          },
          {
            id: "mock-interviews",
            icon: "message-square",
            step: "02",
            title: "मॉक इंटरव्यू",
            description:
              "प्रमाणित फैकल्टी के साथ वास्तविक इंटरव्यू सिमुलेशन का सामना करें। तकनीकी और HR राउंड्स पर विस्तृत फीडबैक पाएं।",
            color: "bg-orange-500",
            textColor: "text-orange-600",
          },
          {
            id: "placement",
            icon: "handshake",
            step: "03",
            title: "प्लेसमेंट",
            description:
              "हमारी प्लेसमेंट सेल आपको 50+ हायरिंग पार्टनर्स से सीधे जोड़ती है। ऑफर लेटर मिलने तक हम आपका साथ देते हैं।",
            color: "bg-teal-600",
            textColor: "text-teal-700",
          },
        ],
      },
      stats: [
        { id: "candidates", number: "4,000+", label: "नियुक्त उम्मीदवार", icon: "users" },
        { id: "partners", number: "50+", label: "शीर्ष MNC पार्टनर्स", icon: "building-2" },
        { id: "rate", number: "95%", label: "प्लेसमेंट रेट", icon: "trending-up" },
        { id: "salary", number: "₹3-12L", label: "औसत वार्षिक पैकेज", icon: "briefcase" },
      ],
      partnersSection: {
        label: "हायरिंग पार्टनर्स",
        title: "वे कंपनियां जो हमारे ग्रेजुएट्स को नियुक्त करती हैं",
        subtitle:
          "हमारा प्लेसमेंट नेटवर्क भारत की शीर्ष हेल्थकेयर BPOs, हॉस्पिटल्स और MNCs तक फैला है।",
      },
      supportSection: {
        label: "सहायता प्रणाली",
        title: "प्लेसमेंट सपोर्ट कैसे काम करता है",
        subtitle:
          "हम सिर्फ पढ़ाते नहीं हैं - हम CV से लेकर ऑफर लेटर तक आपको पूरी तरह नौकरी के लिए तैयार करते हैं।",
        items: [
          {
            id: "resume",
            step: "01",
            title: "रिज्यूमे बिल्डिंग वर्कशॉप",
            description:
              "हेल्थकेयर-विशिष्ट CV लेखन, LinkedIn प्रोफाइल ऑप्टिमाइजेशन और प्रोफेशनल ब्रांडिंग पर समर्पित सत्र।",
          },
          {
            id: "mock-rounds",
            step: "02",
            title: "मॉक इंटरव्यू राउंड्स",
            description:
              "फैकल्टी और इंडस्ट्री प्रोफेशनल्स के साथ वास्तविक इंटरव्यू सिमुलेशन। तकनीकी और HR राउंड्स पर विस्तृत फीडबैक।",
          },
          {
            id: "referrals",
            step: "03",
            title: "सीधे कंपनी रेफरल्स",
            description:
              "प्लेसमेंट सेल योग्य छात्रों को भारत भर के 50+ हायरिंग पार्टनर्स के नेटवर्क से सीधे जोड़ती है।",
          },
          {
            id: "prep",
            step: "04",
            title: "इंटरव्यू तैयारी सहायता",
            description:
              "कंपनी-विशिष्ट ब्रीफिंग नोट्स, कोडिंग टेस्ट तैयारी और ऑफर लेटर मिलने तक अंतिम चरण का समर्थन।",
          },
        ],
      },
      storiesSection: {
        label: "पूर्व छात्र कहानियां",
        title: "हमारे ग्रेजुएट्स की सफलता की कहानियां",
        subtitle: "वास्तविक छात्र, वास्तविक करियर - उन लोगों से सुनें जिन्होंने पहले ही यह कदम उठा लिया है।",
        stories: [
          {
            id: "ananya-sharma",
            name: "Ananya Sharma",
            avatar: "AS",
            bg: "bg-purple-700",
            role: "Apollo Hospitals में मेडिकल कोडर",
            course: "AMCT + CPC",
            salary: "₹5.2 LPA",
            story:
              "Medtech Career में AMCT और CPC कार्यक्रम पूरे करने के बाद मैंने पहली ही कोशिश में CPC परीक्षा पास की और कोर्स पूरा होने के 45 दिनों के भीतर Apollo में शामिल हो गई। फैकल्टी ने मुझे केवल पाठ्यपुस्तक ज्ञान से कहीं अधिक तैयार किया।",
          },
          {
            id: "karthik-subramanian",
            name: "Karthik Subramanian",
            avatar: "KS",
            bg: "bg-orange-500",
            role: "Senior Coder, Omega Healthcare",
            course: "CPC सर्टिफिकेशन ट्रेनिंग",
            salary: "₹7.4 LPA",
            story:
              "मेरे पास 2 साल का कोडिंग अनुभव था लेकिन कोई सर्टिफिकेशन नहीं था। CPC कार्यक्रम के 8 सॉल्व्ड पेपर्स और टाइम्ड प्रैक्टिस सेशन्स ने मुझे अच्छा स्कोर करने और सीनियर पद पर बातचीत करने में मदद की।",
          },
          {
            id: "priya-nair",
            name: "Priya Nair",
            avatar: "PN",
            bg: "bg-teal-700",
            role: "RCM Analyst, Cognizant Health",
            course: "मेडिकल बिलिंग",
            salary: "₹4.8 LPA",
            story:
              "BSc Nursing ग्रेजुएट के रूप में मुझे कोडिंग करियर को लेकर पूरी तरह भरोसा नहीं था। Medtech Career के बिलिंग कार्यक्रम ने मुझे कौशल देने के साथ-साथ प्लेसमेंट ड्राइव के जरिए मेरे वर्तमान नियोक्ता से भी मिलवाया।",
          },
          {
            id: "deepika-rao",
            name: "Deepika Rao",
            avatar: "DR",
            bg: "bg-indigo-700",
            role: "HCC Risk Coder, R1 RCM",
            course: "CRC प्रोग्राम",
            salary: "₹9.0 LPA",
            story:
              "Medtech Career में CRC niche चुनना मेरे करियर का सबसे अच्छा फैसला था। HCC risk adjustment भूमिकाएं कम मिलती हैं और अच्छी तनख्वाह देती हैं - एक फ्रेशर के रूप में मैंने जितनी उम्मीद नहीं की थी, उससे बेहतर पैकेज पर मेरी R1 RCM में प्लेसमेंट हुई।",
          },
        ],
      },
      eligibilitySection: {
        label: "पात्रता",
        title: "कौन प्लेसमेंट पा सकता है?",
        items: [
          "लाइफ साइंस ग्रेजुएट्स (BSc/MSc Nursing, Pharmacy, BMLT, Microbiology, BDS)",
          "पैरामेडिकल और allied health ग्रेजुएट्स",
          "BMCT / AMCT / CPC सर्टिफिकेशन वाला कोई भी ग्रेजुएट",
          "करियर परिवर्तन चाहने वाले वर्किंग प्रोफेशनल्स",
          "हमारा ट्रेनिंग प्रोग्राम पूरा करने के लिए तैयार फ्रेशर्स",
        ],
      },
      guaranteeSection: {
        label: "प्रतिबद्धता",
        title: "हमारी प्लेसमेंट गारंटी",
        paragraphs: [
          "Medtech Career उन सभी छात्रों को सुनिश्चित प्लेसमेंट सहायता देता है जो अपना ट्रेनिंग प्रोग्राम सफलतापूर्वक पूरा करते हैं। हमारी प्लेसमेंट सेल 50+ पार्टनर कंपनियों के साथ सक्रिय रूप से काम करती है जिनकी लगातार भर्ती जरूरतें रहती हैं।",
          "ट्रेनिंग पूरी करने वाले सभी उम्मीदवार भारत भर की अग्रणी MNCs और हेल्थकेयर BPOs में प्लेस होते हैं। हमारे सर्टिफिकेट पूरे भारत के हेल्थकेयर BPOs द्वारा मान्य और स्वीकार किए जाते हैं।",
        ],
        ctaLabel: "अपना कोर्स शुरू करें ->",
      },
      ctaSection: {
        label: "आपका करियर इंतजार कर रहा है",
        title: "ट्रेनिंग शुरू करें। प्लेसमेंट पाएं।",
        description:
          "Medtech Career के उन हजारों ग्रेजुएट्स में शामिल हों जो अब शीर्ष हेल्थकेयर कंपनियों में काम कर रहे हैं। आपकी प्लेसमेंट यात्रा नामांकन से शुरू होती है।",
        primaryCtaLabel: "प्लेसमेंट के लिए आवेदन करें",
        secondaryCtaLabel: "किसी कोर्स में दाखिला लें",
      },
    },
    collegeTraining: {
      metadata: {
        title: "ऑन-कैंपस कॉलेज ट्रेनिंग - Medtech Career",
      },
      hero: {
        label: "संस्थागत प्रशिक्षण",
        titleLeading: "ऑन-कैंपस",
        titleHighlight: "कॉलेज ट्रेनिंग",
        description:
          "Medtech Career भारत भर के कॉलेजों के साथ मिलकर कैंपस पर ही उद्योग-अनुरूप मेडिकल कोडिंग और बिलिंग प्रशिक्षण देता है - ताकि छात्र ग्रेजुएशन से पहले तैयार हो जाएं।",
        primaryCtaLabel: "हमारे साथ साझेदारी करें ->",
        secondaryCtaLabel: "प्रोग्राम देखें",
      },
      stats: [
        { id: "students", number: "12,000+", label: "प्रशिक्षित विद्यार्थी", icon: "users" },
        { id: "colleges", number: "80+", label: "जुड़े हुए कॉलेज", icon: "building-2" },
        { id: "programs", number: "40+", label: "ट्रेनिंग प्रोग्राम", icon: "book-open" },
        { id: "satisfaction", number: "98%", label: "संतुष्टि दर", icon: "award" },
      ],
      partnersSection: {
        label: "हमारे पार्टनर्स",
        title: "वे कॉलेज जहां हमने प्रशिक्षण दिया है",
        subtitle:
          "दक्षिण भारत और उससे आगे के अग्रणी मेडिकल और पैरामेडिकल कॉलेजों द्वारा विश्वसनीय।",
        colleges: [
          { id: "sri-ramachandra", name: "श्री रामचंद्रा इंस्टीट्यूट ऑफ हायर एजुकेशन", location: "चेन्नई, तमिलनाडु" },
          { id: "manipal", name: "मणिपाल कॉलेज ऑफ हेल्थ प्रोफेशन्स", location: "मणिपाल, कर्नाटक" },
          { id: "kmch", name: "केएमसीएच कॉलेज ऑफ फार्मेसी", location: "कोयंबटूर, तमिलनाडु" },
          { id: "psg", name: "पीएसजी कॉलेज ऑफ आर्ट्स एंड साइंस", location: "कोयंबटूर, तमिलनाडु" },
          { id: "sri-venkateswara", name: "श्री वेंकटेश्वर कॉलेज ऑफ फार्मेसी", location: "तिरुपति, आंध्र प्रदेश" },
          { id: "srm", name: "एसआरएम इंस्टीट्यूट ऑफ साइंस एंड टेक्नोलॉजी", location: "चेन्नई, तमिलनाडु" },
          { id: "kle", name: "केएलई यूनिवर्सिटी", location: "बेलगावी, कर्नाटक" },
          { id: "saveetha", name: "सविता इंस्टीट्यूट ऑफ मेडिकल एंड टेक्निकल साइंसेज", location: "चेन्नई, तमिलनाडु" },
        ],
      },
      programsSection: {
        label: "हम क्या ऑफर करते हैं",
        title: "ट्रेनिंग प्रोग्राम",
        subtitle:
          "अवेयरनेस वर्कशॉप से लेकर सर्टिफिकेशन-स्तरीय ट्रेनिंग तक, सभी संरचित कार्यक्रम आपके कैंपस पर आयोजित किए जाते हैं।",
        cardCtaLabel: "इस प्रोग्राम के बारे में पूछें",
        programs: [
          {
            id: "awareness-workshop",
            title: "मेडिकल कोडिंग अवेयरनेस वर्कशॉप",
            duration: "1 दिन",
            audience: "अंतिम वर्ष के लाइफ साइंस / पैरामेडिकल छात्र",
            outcomes: [
              "मेडिकल कोडिंग करियर का परिचय",
              "अमेरिकी हेल्थकेयर सिस्टम का परिचय",
              "लाइव कोडिंग डेमो सत्र",
            ],
            color: "border-purple-200 bg-purple-50",
            badgeColor: "bg-purple-700 text-white",
          },
          {
            id: "bmct",
            title: "बेसिक मेडिकल कोडिंग ट्रेनिंग (BMCT)",
            duration: "1 महीना",
            audience: "BSc Nursing, BMLT, Pharmacy, BDS ग्रेजुएट्स",
            outcomes: [
              "ICD-10-CM और CPT-4 की बुनियाद",
              "मेडिकल टर्मिनोलॉजी और एनाटॉमी",
              "हेल्थकेयर क्लेम की मूल बातें",
            ],
            color: "border-orange-200 bg-orange-50",
            badgeColor: "bg-orange-500 text-white",
          },
          {
            id: "amct",
            title: "एडवांस्ड मेडिकल कोडिंग ट्रेनिंग (AMCT)",
            duration: "2 महीने",
            audience: "BMCT के बाद या अनुभवी कोडर्स के लिए",
            outcomes: [
              "स्पेशलिटी कोडिंग: Surgery, Radiology, E/M",
              "50+ एडवांस्ड केस स्टडीज़",
              "इंडस्ट्री-रेडी असेसमेंट",
            ],
            color: "border-teal-200 bg-teal-50",
            badgeColor: "bg-teal-700 text-white",
          },
          {
            id: "cpc-prep",
            title: "CPC सर्टिफिकेशन तैयारी",
            duration: "3 महीने",
            audience: "AAPC CPC क्रेडेंशियल चाहने वाले छात्र",
            outcomes: [
              "8 सॉल्व्ड CPC प्रैक्टिस पेपर्स",
              "टाइम्ड मॉक एग्जाम्स",
              "एग्जाम स्ट्रेटेजी और स्पीड वर्कशॉप्स",
            ],
            color: "border-indigo-200 bg-indigo-50",
            badgeColor: "bg-indigo-700 text-white",
          },
          {
            id: "billing-rcm",
            title: "मेडिकल बिलिंग और RCM",
            duration: "1 महीना",
            audience: "कॉमर्स और लाइफ साइंस ग्रेजुएट्स",
            outcomes: [
              "क्लेम सबमिशन और डिनायल मैनेजमेंट",
              "AR फॉलो-अप वर्कफ्लोज़",
              "इंश्योरेंस पोर्टल नेविगेशन",
            ],
            color: "border-pink-200 bg-pink-50",
            badgeColor: "bg-pink-700 text-white",
          },
          {
            id: "cdi",
            title: "क्लिनिकल डॉक्युमेंटेशन इम्प्रूवमेंट",
            duration: "6 सप्ताह",
            audience: "MBBS, Nursing और allied health प्रोफेशनल्स",
            outcomes: [
              "CDI query writing",
              "DRG review और audit",
              "EHR navigation skills",
            ],
            color: "border-cyan-200 bg-cyan-50",
            badgeColor: "bg-cyan-700 text-white",
          },
        ],
      },
      gallerySection: {
        label: "गैलरी",
        title: "प्रशिक्षण की झलकियां",
        subtitle: "भारत भर में आयोजित हमारे कॉलेज ट्रेनिंग सत्रों के कुछ पल।",
        items: [
          { id: "coimbatore-orientation", label: "बैच ओरिएंटेशन - कोयंबटूर", type: "image", placeholder: "bg-purple-100" },
          { id: "chennai-coding", label: "लाइव कोडिंग सत्र - चेन्नई", type: "image", placeholder: "bg-orange-100" },
          { id: "certificates", label: "प्रमाणपत्र वितरण", type: "image", placeholder: "bg-teal-100" },
          { id: "testimonial-video", label: "स्टूडेंट टेस्टिमोनियल वीडियो", type: "video", placeholder: "bg-indigo-100" },
          { id: "workshop-highlights", label: "कैंपस वर्कशॉप हाइलाइट्स", type: "video", placeholder: "bg-pink-100" },
          { id: "partners-meet", label: "वार्षिक कॉलेज पार्टनर्स मीट", type: "image", placeholder: "bg-cyan-100" },
        ],
      },
      ctaSection: {
        label: "हमारे साथ साझेदारी करें",
        title: "अपने कैंपस में Medtech ट्रेनिंग लाएं",
        description:
          "हम लचीला शेड्यूल, समर्पित ट्रेनर्स और end-to-end प्रोग्राम मैनेजमेंट प्रदान करते हैं - पूरी तरह आपकी संस्था की जरूरतों के अनुसार।",
        primaryCtaLabel: "कैंपस सत्र का अनुरोध करें",
        secondaryCtaLabel: "सभी ट्रेनिंग प्रोग्राम देखें",
      },
    },
  },
  ml: {
    placements: {
      metadata: {
        title: "പ്ലേസ്മെന്റുകൾ - Medtech Career",
      },
      hero: {
        label: "കരിയർ വിജയം",
        titleLeading: "മുന്നണി കമ്പനികളിൽ ജോലി",
        titleHighlight: "നേടൂ",
        description:
          "Medtech Career ഇന്ത്യയിലെ മുൻനിര ഹെൽത്കെയർ MNCകളിലും BPOകളിലും 4,000+ ബിരുദധാരികളെ നിയമിക്കാൻ സഹായിച്ചിട്ടുണ്ട് - 95% പ്ലേസ്മെന്റ് നിരക്കും ₹12 LPA വരെ പാക്കേജുകളും സഹിതം.",
        primaryCtaLabel: "പ്ലേസ്മെന്റിന് അപേക്ഷിക്കുക ->",
        secondaryCtaLabel: "കോഴ്സുകൾ കാണുക",
      },
      journeySection: {
        label: "ഞങ്ങളുടെ പ്രക്രിയ",
        title: "നിങ്ങളുടെ പ്ലേസ്മെന്റ് യാത്ര",
        subtitle: "പരിശീലനത്തിൽ നിന്ന് നിങ്ങളുടെ ആദ്യ ശമ്പളചെക്കിലേക്ക് എത്തുന്ന വ്യക്തമായ മൂന്ന് ഘട്ട പാത.",
        stepPrefix: "ഘട്ടം",
        steps: [
          {
            id: "training",
            icon: "book-open",
            step: "01",
            title: "പരിശീലനം",
            description:
              "ഇന്ത്യുസ്ട്രി കേന്ദ്രീകൃത മെഡിക്കൽ കോഡിംഗും ബില്ലിംഗും അടങ്ങിയ BMCT, AMCT, CPC, CRC അല്ലെങ്കിൽ CDM കോഴ്സുകൾ പൂർത്തിയാക്കുക.",
            color: "bg-purple-700",
            textColor: "text-purple-700",
          },
          {
            id: "mock-interviews",
            icon: "message-square",
            step: "02",
            title: "മോക്ക് അഭിമുഖങ്ങൾ",
            description:
              "സർട്ടിഫൈഡ് ഫാക്കൽറ്റിയോടൊപ്പം യാഥാർത്ഥ്യസന്നിഹിതമായ അഭിമുഖ സിമുലേഷനുകൾ നേരിടുക. സാങ്കേതികവും HR റൗണ്ടുകളിലും വിശദമായ അഭിപ്രായങ്ങൾ ലഭിക്കുക.",
            color: "bg-orange-500",
            textColor: "text-orange-600",
          },
          {
            id: "placement",
            icon: "handshake",
            step: "03",
            title: "പ്ലേസ്മെന്റ്",
            description:
              "ഞങ്ങളുടെ പ്ലേസ്മെന്റ് സെൽ നിങ്ങളെ 50+ നിയമന പങ്കാളികളുമായി നേരിട്ട് ബന്ധിപ്പിക്കുന്നു. ഓഫർ ലെറ്റർ ലഭിക്കുന്നതുവരെ ഞങ്ങൾ പിന്തുണ നൽകും.",
            color: "bg-teal-600",
            textColor: "text-teal-700",
          },
        ],
      },
      stats: [
        { id: "candidates", number: "4,000+", label: "ജോലി നേടിയ വിദ്യാർത്ഥികൾ", icon: "users" },
        { id: "partners", number: "50+", label: "മുന്നണി MNC പങ്കാളികൾ", icon: "building-2" },
        { id: "rate", number: "95%", label: "പ്ലേസ്മെന്റ് നിരക്ക്", icon: "trending-up" },
        { id: "salary", number: "₹3-12L", label: "ശരാശരി വാർഷിക പാക്കേജ്", icon: "briefcase" },
      ],
      partnersSection: {
        label: "നിയമന പങ്കാളികൾ",
        title: "ഞങ്ങളുടെ ബിരുദധാരികളെ നിയമിക്കുന്ന കമ്പനികൾ",
        subtitle:
          "ഞങ്ങളുടെ പ്ലേസ്മെന്റ് നെറ്റ്‌വർക്ക് ഇന്ത്യയിലെ മുൻനിര ഹെൽത്കെയർ BPOകൾ, ആശുപത്രികൾ, MNCകൾ എന്നിവയെ ഉൾക്കൊള്ളുന്നു.",
      },
      supportSection: {
        label: "പിന്തുണാ സംവിധാനം",
        title: "പ്ലേസ്മെന്റ് പിന്തുണ എങ്ങനെ പ്രവർത്തിക്കുന്നു",
        subtitle:
          "ഞങ്ങൾ പഠിപ്പിക്കുന്നതിൽ നിൽക്കില്ല - CV മുതൽ ഓഫർ ലെറ്റർ വരെ തൊഴിൽക്കായി നിങ്ങളെ പൂർണ്ണമായി തയ്യാറാക്കുന്നു.",
        items: [
          {
            id: "resume",
            step: "01",
            title: "റസ്യൂമെ നിർമ്മാണ വർക്ക്‌ഷോപ്പ്",
            description:
              "ഹെൽത്കെയർ-സ്പെസിഫിക് CV എഴുത്ത്, LinkedIn പ്രൊഫൈൽ മെച്ചപ്പെടുത്തൽ, പ്രൊഫഷണൽ ബ്രാൻഡിംഗ് എന്നിവയ്ക്കായുള്ള പ്രത്യേക സെഷനുകൾ.",
          },
          {
            id: "mock-rounds",
            step: "02",
            title: "മോക്ക് അഭിമുഖ റൗണ്ടുകൾ",
            description:
              "ഫാക്കൽറ്റിയുടെയും ഇൻഡസ്ട്രി പ്രൊഫഷണലുകളുടെയും കൂടെ യാഥാർത്ഥ്യസന്നിഹിതമായ അഭിമുഖ പരിശീലനം. സാങ്കേതികവും HR റൗണ്ടുകളിലും വിശദമായ ഫീഡ്ബാക്ക്.",
          },
          {
            id: "referrals",
            step: "03",
            title: "നേരിട്ടുള്ള കമ്പനി റഫറലുകൾ",
            description:
              "ഞങ്ങളുടെ പ്ലേസ്മെന്റ് സെൽ യോഗ്യരായ വിദ്യാർത്ഥികളെ ഇന്ത്യയിലെ 50+ നിയമന പങ്കാളികളുമായി നേരിട്ട് ബന്ധിപ്പിക്കുന്നു.",
          },
          {
            id: "prep",
            step: "04",
            title: "അഭിമുഖ തയ്യാറെടുപ്പ് പിന്തുണ",
            description:
              "കമ്പനി-സ്പെസിഫിക് ബ്രിഫിംഗ് കുറിപ്പുകൾ, കോഡിംഗ് ടെസ്റ്റ് തയ്യാറെടുപ്പ്, ഓഫർ ലെറ്റർ ലഭിക്കും വരെ അവസാനഘട്ട പിന്തുണ.",
          },
        ],
      },
      storiesSection: {
        label: "പൂർവ്വവിദ്യാർത്ഥി കഥകൾ",
        title: "ഞങ്ങളുടെ ബിരുദധാരികളുടെ വിജയകഥകൾ",
        subtitle: "യഥാർത്ഥ വിദ്യാർത്ഥികൾ, യഥാർത്ഥ കരിയറുകൾ - ഇതിനകം മുന്നോട്ട് ചുവടുവച്ചവരുടെ അനുഭവങ്ങൾ കേൾക്കൂ.",
        stories: [
          {
            id: "ananya-sharma",
            name: "Ananya Sharma",
            avatar: "AS",
            bg: "bg-purple-700",
            role: "Apollo Hospitals ലെ മെഡിക്കൽ കോഡർ",
            course: "AMCT + CPC",
            salary: "₹5.2 LPA",
            story:
              "Medtech Career ൽ AMCT, CPC പ്രോഗ്രാമുകൾ പൂർത്തിയാക്കിയ ശേഷം ഞാൻ ആദ്യ ശ്രമത്തിൽ തന്നെ CPC പരീക്ഷ പാസായി, കോഴ്സ് പൂർത്തിയായ 45 ദിവസത്തിനകം Apollo ൽ ചേർന്നു. പാഠപുസ്തകജ്ഞാനത്തിനപ്പുറം പോകുന്ന തയ്യാറെടുപ്പാണ് ഫാക്കൽറ്റി നൽകിയതു.",
          },
          {
            id: "karthik-subramanian",
            name: "Karthik Subramanian",
            avatar: "KS",
            bg: "bg-orange-500",
            role: "Senior Coder, Omega Healthcare",
            course: "CPC സർട്ടിഫിക്കേഷൻ പരിശീലനം",
            salary: "₹7.4 LPA",
            story:
              "എനിക്ക് 2 വർഷത്തെ കോഡിംഗ് പരിചയം ഉണ്ടായിരുന്നു, പക്ഷേ സർട്ടിഫിക്കേഷൻ ഉണ്ടായിരുന്നില്ല. CPC പ്രോഗ്രാമിലെ 8 solved papers ഉം timed practice sessions ഉം എന്നെ മികച്ച സ്കോർ നേടാനും senior role ഉറപ്പാക്കാനും സഹായിച്ചു.",
          },
          {
            id: "priya-nair",
            name: "Priya Nair",
            avatar: "PN",
            bg: "bg-teal-700",
            role: "RCM Analyst, Cognizant Health",
            course: "മെഡിക്കൽ ബില്ലിംഗ്",
            salary: "₹4.8 LPA",
            story:
              "BSc Nursing ബിരുദധാരിയായ എന്നെ കോഡിംഗ് കരിയറിനെക്കുറിച്ച് ആദ്യം ഉറപ്പില്ലായിരുന്നു. Medtech Career ന്റെ ബില്ലിംഗ് പ്രോഗ്രാം എനിക്ക് കഴിവുകൾ നൽകിയതോടൊപ്പം പ്ലേസ്മെന്റ് ഡ്രൈവിലൂടെ ഇപ്പോഴത്തെ തൊഴിലുടമയെ പരിചയപ്പെടുത്തി.",
          },
          {
            id: "deepika-rao",
            name: "Deepika Rao",
            avatar: "DR",
            bg: "bg-indigo-700",
            role: "HCC Risk Coder, R1 RCM",
            course: "CRC പ്രോഗ്രാം",
            salary: "₹9.0 LPA",
            story:
              "Medtech Career ൽ CRC niche തിരഞ്ഞെടുത്തത് എന്റെ കരിയറിലെ മികച്ച തീരുമാനമായിരുന്നു. HCC risk adjustment റോളുകൾ അപൂർവ്വവും ഉയർന്ന ശമ്പളമുള്ളതുമാണ് - ഒരു fresher ആയി കരുതിയതിലും മികച്ച പാക്കേജിൽ R1 RCM ൽ ജോലി ലഭിച്ചു.",
          },
        ],
      },
      eligibilitySection: {
        label: "യോഗ്യത",
        title: "ആർക്കെല്ലാം പ്ലേസ്മെന്റ് ലഭിക്കും?",
        items: [
          "ലൈഫ് സയൻസ് ബിരുദധാരികൾ (BSc/MSc Nursing, Pharmacy, BMLT, Microbiology, BDS)",
          "പാരാമെഡിക്കൽ, allied health ബിരുദധാരികൾ",
          "BMCT / AMCT / CPC സർട്ടിഫിക്കേഷൻ ഉള്ള ഏത് ബിരുദധാരിയും",
          "കരിയർ മാറ്റം തേടുന്ന ജോലി ചെയ്യുന്ന പ്രൊഫഷണലുകൾ",
          "ഞങ്ങളുടെ പരിശീലന പരിപാടി പൂർത്തിയാക്കാൻ തയ്യാറുള്ള freshers",
        ],
      },
      guaranteeSection: {
        label: "പ്രതിബദ്ധത",
        title: "ഞങ്ങളുടെ പ്ലേസ്മെന്റ് ഗ്യാരണ്ടി",
        paragraphs: [
          "Medtech Career വിജയകരമായി പരിശീലന പരിപാടി പൂർത്തിയാക്കുന്ന എല്ലാ വിദ്യാർത്ഥികൾക്കും ഉറപ്പുള്ള പ്ലേസ്മെന്റ് പിന്തുണ നൽകുന്നു. സ്ഥിരമായ നിയമനാവശ്യങ്ങളുള്ള 50+ പങ്കാളി കമ്പനികളുമായി ഞങ്ങളുടെ പ്ലേസ്മെന്റ് സെൽ സജീവമായി പ്രവർത്തിക്കുന്നു.",
          "പരിശീലനം പൂർത്തിയാക്കുന്ന എല്ലാ സ്ഥാനാർഥികളും ഇന്ത്യയിലെ പ്രമുഖ MNCകളിലും ഹെൽത്കെയർ BPOകളിലും നിയമിതരാകുന്നു. ഞങ്ങളുടെ സർട്ടിഫിക്കറ്റുകൾ ഇന്ത്യയിലുടനീളമുള്ള ഹെൽത്കെയർ BPOകൾ അംഗീകരിക്കുകയും സ്വീകരിക്കുകയും ചെയ്യുന്നു.",
        ],
        ctaLabel: "നിങ്ങളുടെ കോഴ്സ് ആരംഭിക്കൂ ->",
      },
      ctaSection: {
        label: "നിങ്ങളുടെ കരിയർ നിങ്ങളെ കാത്തിരിക്കുന്നു",
        title: "പരിശീലനം ആരംഭിക്കൂ. ജോലി നേടൂ.",
        description:
          "മുന്നണി ഹെൽത്കെയർ കമ്പനികളിൽ ഇപ്പോൾ ജോലി ചെയ്യുന്ന ആയിരക്കണക്കിന് Medtech Career ബിരുദധാരികളോടൊപ്പം ചേരൂ. നിങ്ങളുടെ പ്ലേസ്മെന്റ് യാത്ര enrollment നോടെയാണ് തുടങ്ങുന്നത്.",
        primaryCtaLabel: "പ്ലേസ്മെന്റിന് അപേക്ഷിക്കുക",
        secondaryCtaLabel: "ഒരു കോഴ്സിൽ ചേരുക",
      },
    },
    collegeTraining: {
      metadata: {
        title: "ക്യാമ്പസ് കോളജ് പരിശീലനം - Medtech Career",
      },
      hero: {
        label: "സ്ഥാപന പരിശീലനം",
        titleLeading: "ക്യാമ്പസിലെ",
        titleHighlight: "കോളജ് പരിശീലനം",
        description:
          "Medtech Career ഇന്ത്യയിലെ കോളജുകളുമായി ചേർന്ന് ക്യാമ്പസിൽ തന്നെ ഇൻഡസ്ട്രി-അലൈൻഡ് മെഡിക്കൽ കോഡിംഗ്, ബില്ലിംഗ് പരിശീലനം നൽകുന്നു - വിദ്യാർത്ഥികളെ ബിരുദദാനത്തിന് മുൻപേ തയ്യാറാക്കാൻ.",
        primaryCtaLabel: "ഞങ്ങളോടൊപ്പം പങ്കാളിയാകൂ ->",
        secondaryCtaLabel: "പ്രോഗ്രാമുകൾ കാണുക",
      },
      stats: [
        { id: "students", number: "12,000+", label: "പരിശീലനം നേടിയ വിദ്യാർത്ഥികൾ", icon: "users" },
        { id: "colleges", number: "80+", label: "എത്തിച്ചേർന്ന കോളജുകൾ", icon: "building-2" },
        { id: "programs", number: "40+", label: "പരിശീലന പ്രോഗ്രാമുകൾ", icon: "book-open" },
        { id: "satisfaction", number: "98%", label: "സന്തോഷനിരക്ക്", icon: "award" },
      ],
      partnersSection: {
        label: "ഞങ്ങളുടെ പങ്കാളികൾ",
        title: "ഞങ്ങൾ പരിശീലനം നൽകിയ കോളജുകൾ",
        subtitle:
          "ദക്ഷിണേന്ത്യയിലും അതിനപ്പുറവും ഉള്ള മുൻനിര മെഡിക്കൽ, പാരാമെഡിക്കൽ കോളജുകൾ വിശ്വസിക്കുന്ന പരിശീലന പങ്കാളി.",
        colleges: [
          { id: "sri-ramachandra", name: "ശ്രീ രാമചന്ദ്ര ഇൻസ്റ്റിറ്റ്യൂട്ട് ഓഫ് ഹൈയർ എജ്യുക്കേഷൻ", location: "ചെന്നൈ, തമിഴ്നാട്" },
          { id: "manipal", name: "മണിപ്പാൽ കോളജ് ഓഫ് ഹെൽത്ത് പ്രൊഫഷൻസ്", location: "മണിപ്പാൽ, കര്‍ണാടക" },
          { id: "kmch", name: "കെഎംസിഎച്ച് കോളജ് ഓഫ് ഫാർമസി", location: "കോയമ്പത്തൂർ, തമിഴ്നാട്" },
          { id: "psg", name: "പിഎസ്ജി കോളജ് ഓഫ് ആർട്സ് ആൻഡ് സയൻസ്", location: "കോയമ്പത്തൂർ, തമിഴ്നാട്" },
          { id: "sri-venkateswara", name: "ശ്രീ വെങ്കടേശ്വര കോളജ് ഓഫ് ഫാർമസി", location: "തിരുപ്പതി, ആന്ധ്രാപ്രദേശ്" },
          { id: "srm", name: "എസ്ആർഎം ഇൻസ്റ്റിറ്റ്യൂട്ട് ഓഫ് സയൻസ് ആൻഡ് ടെക്നോളജി", location: "ചെന്നൈ, തമിഴ്നാട്" },
          { id: "kle", name: "കെഎൽഇ യൂണിവേഴ്സിറ്റി", location: "ബെളഗാവി, കര്‍ണാടക" },
          { id: "saveetha", name: "സവീത ഇൻസ്റ്റിറ്റ്യൂട്ട് ഓഫ് മെഡിക്കൽ ആൻഡ് ടെക്നിക്കൽ സയൻസസ്", location: "ചെന്നൈ, തമിഴ്നാട്" },
        ],
      },
      programsSection: {
        label: "ഞങ്ങൾ നൽകുന്നത്",
        title: "പരിശീലന പ്രോഗ്രാമുകൾ",
        subtitle:
          "അവബോധ വർക്ക്‌ഷോപ്പുകളിൽ നിന്ന് സർട്ടിഫിക്കേഷൻ തല പരിശീലനം വരെ ഉള്ള ഘടനാപരമായ എല്ലാ പ്രോഗ്രാമുകളും നിങ്ങളുടെ ക്യാമ്പസിൽ തന്നെ നടത്തുന്നു.",
        cardCtaLabel: "ഈ പ്രോഗ്രാമിനെക്കുറിച്ച് അന്വേഷിക്കുക",
        programs: [
          {
            id: "awareness-workshop",
            title: "മെഡിക്കൽ കോഡിംഗ് അവബോധ വർക്ക്‌ഷോപ്പ്",
            duration: "1 ദിവസം",
            audience: "അവസാനവർഷ ലൈഫ് സയൻസ് / പാരാമെഡിക്കൽ വിദ്യാർത്ഥികൾ",
            outcomes: [
              "മെഡിക്കൽ കോഡിംഗ് കരിയറിന്റെ അവലോകനം",
              "അമേരിക്കൻ ഹെൽത്കെയർ സംവിധാനത്തിന്റെ പരിചയം",
              "ലൈവ് കോഡിംഗ് ഡെമോ സെഷൻ",
            ],
            color: "border-purple-200 bg-purple-50",
            badgeColor: "bg-purple-700 text-white",
          },
          {
            id: "bmct",
            title: "ബേസിക് മെഡിക്കൽ കോഡിംഗ് പരിശീലനം (BMCT)",
            duration: "1 മാസം",
            audience: "BSc Nursing, BMLT, Pharmacy, BDS ബിരുദധാരികൾ",
            outcomes: [
              "ICD-10-CM, CPT-4 അടിസ്ഥാനങ്ങൾ",
              "മെഡിക്കൽ ടെർമിനോളജിയും അനാടമിയും",
              "ഹെൽത്കെയർ ക്ലെയിം അടിസ്ഥാനങ്ങൾ",
            ],
            color: "border-orange-200 bg-orange-50",
            badgeColor: "bg-orange-500 text-white",
          },
          {
            id: "amct",
            title: "അഡ്വാൻസ്ഡ് മെഡിക്കൽ കോഡിംഗ് പരിശീലനം (AMCT)",
            duration: "2 മാസം",
            audience: "BMCT കഴിഞ്ഞവർക്കോ പരിചയസമ്പന്നരായ കോഡർമാർക്കോ",
            outcomes: [
              "സ്പെഷ്യാലിറ്റി കോഡിംഗ്: Surgery, Radiology, E/M",
              "50+ അഡ്വാൻസ്ഡ് കേസ് സ്റ്റഡികൾ",
              "ഇൻഡസ്ട്രി-റെഡി അസസ്മെന്റ്",
            ],
            color: "border-teal-200 bg-teal-50",
            badgeColor: "bg-teal-700 text-white",
          },
          {
            id: "cpc-prep",
            title: "CPC സർട്ടിഫിക്കേഷൻ തയ്യാറെടുപ്പ്",
            duration: "3 മാസം",
            audience: "AAPC CPC ക്രെഡൻഷ്യൽ ലക്ഷ്യമിടുന്ന വിദ്യാർത്ഥികൾ",
            outcomes: [
              "8 solved CPC practice papers",
              "Timed mock exams",
              "Exam strategy, speed workshops",
            ],
            color: "border-indigo-200 bg-indigo-50",
            badgeColor: "bg-indigo-700 text-white",
          },
          {
            id: "billing-rcm",
            title: "മെഡിക്കൽ ബില്ലിംഗ്, RCM",
            duration: "1 മാസം",
            audience: "കോമേഴ്‌സ്, ലൈഫ് സയൻസ് ബിരുദധാരികൾ",
            outcomes: [
              "Claim submission, denial management",
              "AR follow-up workflows",
              "Insurance portal navigation",
            ],
            color: "border-pink-200 bg-pink-50",
            badgeColor: "bg-pink-700 text-white",
          },
          {
            id: "cdi",
            title: "ക്ലിനിക്കൽ ഡോക്യുമെന്റേഷൻ ഇംപ്രൂവ്‌മെന്റ്",
            duration: "6 ആഴ്ച",
            audience: "MBBS, Nursing, allied health പ്രൊഫഷണലുകൾ",
            outcomes: [
              "CDI query writing",
              "DRG review and audit",
              "EHR navigation skills",
            ],
            color: "border-cyan-200 bg-cyan-50",
            badgeColor: "bg-cyan-700 text-white",
          },
        ],
      },
      gallerySection: {
        label: "ഗാലറി",
        title: "പ്രവർത്തനത്തിലുള്ള പരിശീലനം",
        subtitle: "ഇന്ത്യയിലുടനീളം നടന്ന ഞങ്ങളുടെ കോളജ് പരിശീലന സെഷനുകളിൽ നിന്നുള്ള ചില നിമിഷങ്ങൾ.",
        items: [
          { id: "coimbatore-orientation", label: "ബാച്ച് ഓറിയന്റേഷൻ - കോയമ്പത്തൂർ", type: "image", placeholder: "bg-purple-100" },
          { id: "chennai-coding", label: "ലൈവ് കോഡിംഗ് സെഷൻ - ചെന്നൈ", type: "image", placeholder: "bg-orange-100" },
          { id: "certificates", label: "സർട്ടിഫിക്കറ്റ് വിതരണം", type: "image", placeholder: "bg-teal-100" },
          { id: "testimonial-video", label: "സ്റ്റുഡന്റ് ടെസ്റ്റിമോണിയൽ വീഡിയോ", type: "video", placeholder: "bg-indigo-100" },
          { id: "workshop-highlights", label: "ക്യാമ്പസ് വർക്ക്‌ഷോപ്പ് ഹൈലൈറ്റുകൾ", type: "video", placeholder: "bg-pink-100" },
          { id: "partners-meet", label: "വാർഷിക കോളജ് പങ്കാളി മീറ്റ്", type: "image", placeholder: "bg-cyan-100" },
        ],
      },
      ctaSection: {
        label: "ഞങ്ങളോടൊപ്പം പങ്കാളിയാകൂ",
        title: "നിങ്ങളുടെ ക്യാമ്പസിലേക്ക് Medtech പരിശീലനം കൊണ്ടുവരൂ",
        description:
          "ലച്ച്യമായ ഷെഡ്യൂളിംഗ്, സമർപ്പിത പരിശീലകർ, നിങ്ങളുടെ സ്ഥാപനത്തിന് അനുയോജ്യമായ end-to-end പ്രോഗ്രാം മാനേജ്മെന്റ് എന്നിവ ഞങ്ങൾ നൽകുന്നു.",
        primaryCtaLabel: "ക്യാമ്പസ് സെഷൻ അഭ്യർത്ഥിക്കുക",
        secondaryCtaLabel: "എല്ലാ പരിശീലന പ്രോഗ്രാമുകളും കാണുക",
      },
    },
  },
};

export function getStaticPageContent(pageKey, locale = DEFAULT_LOCALE) {
  const resolvedLocale = resolveLocale(locale);
  const pageContent = staticPageContent[pageKey];

  if (!pageContent || resolvedLocale === DEFAULT_LOCALE) {
    return pageContent ?? null;
  }

  const localizedBase = localizeContent(pageContent, resolvedLocale);
  return mergeLocalizedContent(localizedBase, staticPageTranslations[resolvedLocale]?.[pageKey]);
}