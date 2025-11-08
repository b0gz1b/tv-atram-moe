export const JELLYFIN_CONFIG = {
  BASE_URL: "http://jellyfin.home",
  API_KEY: "24901072ca914d8694371cb2db6d0d0e",
  DEVICE_ID: `tv-atram-moe-${Math.random().toString(36).slice(2, 10)}-${Date.now()}`,
};

export const JELLYFIN_HEADERS = {
  "X-Emby-Authorization": `MediaBrowser Client="tv-atram-moe" Device="WebApp" DeviceId="${JELLYFIN_CONFIG.DEVICE_ID} Version="1.0.0" Token="${JELLYFIN_CONFIG.API_KEY}"`,
  "Content-Type": "application/json",
};

export const API_LIMITS = {
  CAROUSEL_ITEMS: 10,
  REFRESH_INTERVAL: 5 * 60 * 1000,
};

export const STAT_COLORS = {
  blue: "bg-blue-500",
  green: "bg-green-500",
  purple: "bg-purple-500",
  orange: "bg-orange-500",
  red: "bg-red-500",
};

export const CHART_COLORS = [
  "#3b82f6", // Bleu
  "#10b981", // Vert
  "#f59e0b", // Orange
  "#ef4444", // Rouge
  "#8b5cf6", // Violet
];
