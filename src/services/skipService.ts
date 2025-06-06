import axios from "axios";
import { SkipResponse } from "../types/skip";

const API_BASE_URL = "https://app.wewantwaste.co.uk/api";

export const fetchSkipsByLocation = async (
  postcode: string = "NR32",
  area: string = "Lowestoft"
): Promise<SkipResponse> => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/skips/by-location?postcode=${postcode}&area=${area}`
    );

    if (!Array.isArray(response.data)) {
      throw new Error("Invalid API response: expected an array");
    }

    // console.log("Fetched skips:", response.data);
    return {
      skips: response.data,
      location: { postcode, area },
    };
  } catch (error) {
    console.error("Error fetching skips:", error);
    throw new Error(
      `Failed to fetch skips: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
};
