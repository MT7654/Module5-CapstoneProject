import axios from "axios";

const API_KEY = "AIzaSyB7yOQ7LzxYMtFFhNJyCI1d9Tomox0AUNk"; // Replace with the key that I gave in discord
const GOOGLE_SAFE_BROWSING_URL = `https://safebrowsing.googleapis.com/v4/threatMatches:find?key=${API_KEY}`;

export const checkSafeBrowsing = async (url) => {
  const requestBody = {
    client: {
      clientId: "yourcompanyname",
      clientVersion: "1.5.2",
    },
    threatInfo: {
      threatTypes: ["MALWARE", "SOCIAL_ENGINEERING", "UNWANTED_SOFTWARE"],
      platformTypes: ["ANY_PLATFORM"],
      threatEntryTypes: ["URL"],
      threatEntries: [{ url: url }],
    },
  };

  try {
    const response = await axios.post(GOOGLE_SAFE_BROWSING_URL, requestBody);
    return response.data;
  } catch (error) {
    console.error("Error checking Safe Browsing API:", error);
    return null;
  }
};
