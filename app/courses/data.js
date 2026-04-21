import { localizeContent } from "@/lib/i18n/content";

const coursesPageContent = {
  metadata: {
    title: "All Courses — Medtech Career",
    description:
      "Comprehensive, job-oriented Medical Coding and Billing training — from beginner fundamentals to advanced CPC certification preparation.",
  },
  hero: {
    label: "Explore",
    title: "All Courses",
    description:
      "Comprehensive, job-oriented Medical Coding and Billing training — from beginner fundamentals to advanced CPC certification preparation.",
  },
  learningPath: {
    label: "Recommended Learning Path",
    value: "BMCT → AMCT → CPC Certification → Specialisation (CRC or CDM)",
    ctaLabel: "View Training Details →",
  },
  sectionHeading: {
    label: "Healthcare Programmes",
    title: "Medical Coding & Billing Courses",
  },
  placement: {
    label: "Placement Assurance",
    title: "4,000+ Graduates Placed in 50+ Top MNCs",
    description:
      "All Medtech Career certificates are recognised and accepted by healthcare BPOs across India. Our placement support continues until you land your job.",
    primaryLabel: "View Placements →",
    secondaryLabel: "Talk to a Counsellor",
  },
};

const courseDetailPageContent = {
  metadataTitleTemplate: "{title} — Medtech Career",
  stats: {
    durationLabel: "Duration",
    studentsLabel: "Students",
    levelLabel: "Level",
  },
  sections: {
    curriculumTitle: "Curriculum Overview",
    highlightsTitle: "Course Highlights",
    topicsTitle: "Topics Covered",
    trainingDetailsTitle: "Training Programme Details",
    featuresTitle: "Salient Features",
    studyMaterialsTitle: "Study Materials Included",
    faqTitle: "Frequently Asked Questions",
    relatedCoursesTitle: "Explore Other Courses",
  },
  trainingDetailLabels: {
    duration: "Duration",
    batches: "Batches",
    weekdays: "Weekdays",
    weekend: "Weekend",
    language: "Language",
    softSkills: "Soft Skills",
    eligibility: "Eligibility",
  },
  sidebar: {
    primaryCtaLabel: "Enroll Now",
    secondaryCtaLabel: "Talk to a Counsellor",
  },
  faqs: [
    {
      question: "Who can take these courses?",
      answer:
        "Anyone with a Medical, Paramedical, or Life Science background can enrol. These courses are suitable for fresh graduates, working professionals, and anyone looking to start a career in healthcare coding.",
    },
    {
      question: "What jobs can I get after completing this course?",
      answer:
        "Graduates are placed in leading healthcare BPOs and MNCs as Medical Coders, Medical Billers, Risk Adjustment Coders, CDI Specialists, and Healthcare IT professionals.",
    },
    {
      question: "Are these courses recognised internationally?",
      answer:
        "Yes. Medtech Career certificates are accepted by healthcare BPOs across India. Our CPC and CRC programmes prepare you for globally recognised AAPC certifications.",
    },
    {
      question: "How long does it take to complete the course?",
      answerTemplate:
        "The {title} course duration is {duration}. Both weekday and weekend batches are available to suit your schedule.",
    },
  ],
  cta: {
    titleTemplate: "Ready to Start — {title}?",
    description:
      "2,500+ students trained and placed. Join Medtech Career and launch your healthcare coding career today.",
    primaryLabel: "Enroll Now",
    secondaryLabel: "All Courses",
  },
};

function formatTemplate(template, replacements) {
  return Object.entries(replacements).reduce(
    (result, [key, value]) => result.replaceAll(`{${key}}`, value ?? ""),
    template,
  );
}

export function getCoursesPageContent(locale) {
  return localizeContent(coursesPageContent, locale);
}

export function getCourseDetailPageContent(locale, course) {
  const localizedContent = localizeContent(courseDetailPageContent, locale);

  return {
    ...localizedContent,
    metadataTitle: formatTemplate(localizedContent.metadataTitleTemplate, {
      title: course.title,
    }),
    faqs: localizedContent.faqs.map((faq) => ({
      question: faq.question,
      answer: faq.answerTemplate
        ? formatTemplate(faq.answerTemplate, {
            title: course.title,
            duration: course.duration,
          })
        : faq.answer,
    })),
    cta: {
      ...localizedContent.cta,
      title: formatTemplate(localizedContent.cta.titleTemplate, {
        title: course.title,
      }),
    },
  };
}

export function getCourseTrainingDetailRows(course, content) {
  if (!course.trainingDetails) {
    return [];
  }

  return Object.entries(course.trainingDetails).map(([key, value]) => ({
    key,
    label: content.trainingDetailLabels[key] ?? key,
    value,
  }));
}