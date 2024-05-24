import { createContext, useState } from "react";
import axios from "axios";
import { checkSafeBrowsing } from "../safeBrowsing";
import { Alert } from "react-native";
const UrlContext = createContext();

export function UrlProvider({ children }) {
  const [result, setResult] = useState(null);
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState("");
  const [resultAvail, setresultAvail] = useState(false);

  const handleSubmit = async (inputUrl) => {
    const urlToSubmit = (inputUrl || "").trim();
    if (urlToSubmit) {
      try {
        // Fetch URL details from your backend
        const response = await axios.get(
          `http://192.168.1.7:3000/url?ogUrl=${urlToSubmit}`
        );
        const urlDetails = response.data.result;
        setResult(urlDetails);
        setresultAvail(true);

        // Check the URL against Google's Safe Browsing API
        const safeBrowsingResult = await checkSafeBrowsing(urlToSubmit);
        if (safeBrowsingResult && safeBrowsingResult.matches) {
          setStatus("Danger");
          // Alert.alert(
          //   "Warning",
          //   "The URL is considered unsafe by Google Safe Browsing."
          // );
        } else {
          setStatus("Safe");
          // Alert.alert(
          //   "Safe",
          //   "The URL is safe according to Google Safe Browsing."
          // );
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    } else {
      Alert.alert("Error", "Please enter a valid URL.");
      setresultAvail(false);
    }
  };

  const context = {
    // ES6 enhanced obj literal
    result,
    setResult,
    url,
    setUrl,
    status,
    setStatus,
    resultAvail,
    setresultAvail,
    handleSubmit,
  };

  return <UrlContext.Provider value={context}>{children}</UrlContext.Provider>;
}

export default UrlContext;
