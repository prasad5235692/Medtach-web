export const OPEN_PROFILE_PANEL_EVENT = "medtech:open-profile-panel";

export function openProfilePanel() {
  if (typeof window === "undefined") {
    return;
  }

  window.dispatchEvent(new CustomEvent(OPEN_PROFILE_PANEL_EVENT));
}