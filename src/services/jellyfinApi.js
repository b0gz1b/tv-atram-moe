import {
  JELLYFIN_CONFIG,
  JELLYFIN_HEADERS,
  API_LIMITS,
} from "@src/utils/constants.js";

export const getItemCounts = async () => {
  try {
    const response = await fetch(`${JELLYFIN_CONFIG.BASE_URL}/Items/Counts`, {
      headers: JELLYFIN_HEADERS,
    });
    if (!response.ok) {
      throw new Error(`❌ Erreur API ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    /* handle error */
    console.error("getItemCounts failed");
    throw error;
  }
};
