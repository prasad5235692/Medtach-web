import {
  prepareStudentProfilePhotoUpload,
  replaceStudentProfilePhoto,
} from "@/lib/websiteStudentClient";

export const PROFILE_IMAGE_MIN_BYTES = 100 * 1024;
export const PROFILE_IMAGE_MAX_BYTES = 400 * 1024;

const ALLOWED_IMAGE_TYPES = new Set(["image/jpeg", "image/png", "image/webp"]);
const OUTPUT_IMAGE_TYPE = "image/jpeg";
const MAX_IMAGE_DIMENSION = 960;
const QUALITY_STEPS = [0.92, 0.86, 0.8, 0.74, 0.68, 0.62, 0.56, 0.5, 0.44];

function createImageError(code) {
  const error = new Error(code);
  error.code = code;
  return error;
}

function buildOutputName(fileName) {
  const normalizedName = String(fileName || "profile-photo").replace(/\.[^.]+$/, "");
  return `${normalizedName || "profile-photo"}.jpg`;
}

function canvasToBlob(canvas, quality) {
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (!blob) {
        reject(createImageError("imageProcessingFailed"));
        return;
      }

      resolve(blob);
    }, OUTPUT_IMAGE_TYPE, quality);
  });
}

function loadImage(file) {
  return new Promise((resolve, reject) => {
    const objectUrl = URL.createObjectURL(file);
    const image = new Image();

    image.onload = () => {
      URL.revokeObjectURL(objectUrl);
      resolve(image);
    };

    image.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      reject(createImageError("imageProcessingFailed"));
    };

    image.src = objectUrl;
  });
}

function getScaledDimensions(width, height) {
  const normalizedWidth = Math.max(1, Number(width || 0));
  const normalizedHeight = Math.max(1, Number(height || 0));

  if (normalizedWidth <= MAX_IMAGE_DIMENSION && normalizedHeight <= MAX_IMAGE_DIMENSION) {
    return {
      width: normalizedWidth,
      height: normalizedHeight,
    };
  }

  const scaleRatio = Math.min(
    MAX_IMAGE_DIMENSION / normalizedWidth,
    MAX_IMAGE_DIMENSION / normalizedHeight,
  );

  return {
    width: Math.max(1, Math.round(normalizedWidth * scaleRatio)),
    height: Math.max(1, Math.round(normalizedHeight * scaleRatio)),
  };
}

async function optimizeProfileImage(file) {
  if (!ALLOWED_IMAGE_TYPES.has(file?.type)) {
    throw createImageError("imageInvalidType");
  }

  if (file.size < PROFILE_IMAGE_MIN_BYTES) {
    throw createImageError("imageTooSmall");
  }

  if (typeof document === "undefined") {
    throw createImageError("imageProcessingFailed");
  }

  const image = await loadImage(file);
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  if (!context) {
    throw createImageError("imageProcessingFailed");
  }

  const {width, height} = getScaledDimensions(
    image.naturalWidth || image.width,
    image.naturalHeight || image.height,
  );

  canvas.width = width;
  canvas.height = height;
  context.drawImage(image, 0, 0, width, height);

  let lastBlob = null;

  for (const quality of QUALITY_STEPS) {
    const blob = await canvasToBlob(canvas, quality);
    lastBlob = blob;

    if (blob.size >= PROFILE_IMAGE_MIN_BYTES && blob.size <= PROFILE_IMAGE_MAX_BYTES) {
      return new File([blob], buildOutputName(file.name), {type: OUTPUT_IMAGE_TYPE});
    }

    if (blob.size < PROFILE_IMAGE_MIN_BYTES) {
      break;
    }
  }

  if (file.size >= PROFILE_IMAGE_MIN_BYTES && file.size <= PROFILE_IMAGE_MAX_BYTES) {
    return file;
  }

  if (lastBlob && lastBlob.size > PROFILE_IMAGE_MAX_BYTES) {
    throw createImageError("imageTooLarge");
  }

  throw createImageError("imageTooSmall");
}

function uploadOptimizedFileToCloudinary(file, signaturePayload, onProgress) {
  return new Promise((resolve) => {
    try {
      const xhr = new XMLHttpRequest();
      const formData = new FormData();

      xhr.open("POST", signaturePayload.uploadUrl, true);
      xhr.responseType = "json";

      xhr.upload.onprogress = (event) => {
        if (!event.lengthComputable || typeof onProgress !== "function") {
          return;
        }

        onProgress(Math.min(99, Math.round((event.loaded / event.total) * 100)));
      };

      xhr.onload = () => {
        if (typeof onProgress === "function") {
          onProgress(100);
        }

        let payload = xhr.response && typeof xhr.response === "object" ? xhr.response : null;

        if (!payload) {
          try {
            payload = xhr.responseText ? JSON.parse(xhr.responseText) : null;
          } catch {
            payload = null;
          }
        }

        if (xhr.status >= 200 && xhr.status < 300 && payload?.secure_url && payload?.public_id) {
          resolve({
            success: true,
            data: {
              profilePhoto: String(payload.secure_url || ""),
              profilePhotoPublicId: String(payload.public_id || ""),
            },
          });
          return;
        }

        resolve({
          success: false,
          message: payload?.error?.message || payload?.message || "Unable to upload profile image",
          data: [],
        });
      };

      xhr.onerror = () => {
        resolve({
          success: false,
          message: "Unable to upload profile image",
          data: [],
        });
      };

      formData.append("file", file);
      formData.append("api_key", String(signaturePayload.apiKey || ""));
      formData.append("folder", String(signaturePayload.folder || ""));
      formData.append("overwrite", String(signaturePayload.overwrite ?? false));
      formData.append("signature", String(signaturePayload.signature || ""));
      formData.append("timestamp", String(signaturePayload.timestamp || ""));
      formData.append("unique_filename", String(signaturePayload.uniqueFilename ?? true));
      formData.append("use_filename", String(signaturePayload.useFilename ?? false));

      xhr.send(formData);
    } catch {
      resolve({
        success: false,
        message: "Unable to upload profile image",
        data: [],
      });
    }
  });
}

export async function uploadStudentProfileImageFile(
  file,
  {replaceCurrent = false, onProgress} = {},
) {
  const optimizedFile = await optimizeProfileImage(file);
  const previewUrl = URL.createObjectURL(optimizedFile);

  try {
    const signaturePayload = await prepareStudentProfilePhotoUpload();

    if (!signaturePayload?.success) {
      URL.revokeObjectURL(previewUrl);
      return signaturePayload;
    }

    const uploadPayload = await uploadOptimizedFileToCloudinary(
      optimizedFile,
      signaturePayload.data || {},
      onProgress,
    );

    if (!uploadPayload?.success) {
      URL.revokeObjectURL(previewUrl);
      return uploadPayload;
    }

    const payload = replaceCurrent ?
      await replaceStudentProfilePhoto({
        profilePhoto: uploadPayload.data.profilePhoto,
        profilePhotoPublicId: uploadPayload.data.profilePhotoPublicId,
      }) :
      uploadPayload;

    if (!payload?.success) {
      URL.revokeObjectURL(previewUrl);
      return payload;
    }

    return {
      ...payload,
      data: {
        ...(payload.data || {}),
        previewUrl,
        optimizedSize: optimizedFile.size,
      },
    };
  } catch (error) {
    URL.revokeObjectURL(previewUrl);
    throw error;
  }
}