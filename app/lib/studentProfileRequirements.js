const REQUIRED_STUDENT_PROFILE_FIELDS = [
  "name",
  "phone",
  "email",
  "qualification",
  "gender",
  "dateOfBirth",
  "bio",
  "address",
  "city",
  "pincode",
  "state",
  "country",
];

const normalizeText = (value) => String(value || "").trim();
const normalizePhone = (value) => normalizeText(value).replace(/\s+/g, "");
const normalizeEmail = (value) => normalizeText(value).toLowerCase();

const normalizeGender = (value) => {
  const normalizedValue = normalizeText(value).toLowerCase();

  return ["male", "female", "other"].includes(normalizedValue) ? normalizedValue : "";
};

export { REQUIRED_STUDENT_PROFILE_FIELDS };

export function getStudentProfileDraft(data = {}) {
  const websiteProfile = data?.websiteProfile && typeof data.websiteProfile === "object" && !Array.isArray(data.websiteProfile) ?
    data.websiteProfile :
    data?.profile && typeof data.profile === "object" && !Array.isArray(data.profile) ?
      data.profile :
      {};

  return {
    name: normalizeText(data?.name),
    phone: normalizePhone(data?.phone || data?.mobile),
    email: normalizeEmail(data?.email),
    qualification: normalizeText(data?.qualification || websiteProfile?.qualification),
    gender: normalizeGender(data?.gender),
    dateOfBirth: normalizeText(data?.dateOfBirth || websiteProfile?.dateOfBirth),
    bio: normalizeText(data?.bio || websiteProfile?.bio),
    address: normalizeText(data?.address || websiteProfile?.address),
    city: normalizeText(data?.city || websiteProfile?.city),
    pincode: normalizeText(data?.pincode || websiteProfile?.pincode),
    state: normalizeText(data?.state || websiteProfile?.state),
    country: normalizeText(data?.country || websiteProfile?.country),
  };
}

export function getMissingStudentProfileFields(data = {}) {
  const profile = getStudentProfileDraft(data);

  return REQUIRED_STUDENT_PROFILE_FIELDS.filter((field) => !profile[field]);
}

export function isStudentProfileComplete(data = {}) {
  return getMissingStudentProfileFields(data).length === 0;
}