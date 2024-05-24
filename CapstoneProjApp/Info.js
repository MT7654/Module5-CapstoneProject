import React, { useContext, useState, useEffect } from "react";
import UrlContext from "./context/UrlContext";
import {
  SafeAreaView,
  View,
  ScrollView,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import searchIcon from "./assets/majesticons--search-line.png";



export default function Info() {
  const urlCtx = useContext(UrlContext);
  const {
    result,
    setResult,
    url,
    setUrl,
    status,
    setStatus,
    resultAvail,
    setresultAvail,
    handleSubmit,
  } = urlCtx;


  const [sslCertificationStatus, setSslCertificationStatus] = useState(null);

   // Function to check SSL certification
   const checkSSL = async (url) => {
    try {
      // Here you can implement your logic to check SSL certification for the provided URL
      // For example, you can use a library like axios to make a request to the URL and check for the presence of SSL certification
      // For the sake of demonstration, let's assume the SSL certification status is determined based on the presence of 'https' in the URL
      const hasSSL = url.startsWith('https');
      // Set the SSL certification status into the state variable
      setSslCertificationStatus(hasSSL ? 'Yes' : 'No');
    } catch (error) {
      // Handle any errors that occur during the SSL check
      console.error("Error checking SSL certificate:", error);
      throw error;
    }
  };

  useEffect(() => {
    if (resultAvail) {
      checkSSL(result.ogUrl);
    }
  }, [resultAvail, result.ogUrl]);

  const handleInputSubmit = () => {
    if (url.trim()) {
      handleSubmit(url);
    } else {
      Alert.alert("Error", "Please enter a valid URL.");
    }
  };



  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: "#E9F2FF",
          paddingTop: 69,
          paddingBottom: 103,
          paddingHorizontal: 39,
        }}
      >
        <Text
          style={{
            color: "#000000",
            fontSize: 30,
            fontWeight: 600,
            marginBottom: 3,
          }}
        >
          {"Website Information"}
        </Text>
        <Text
          style={{
            color: "#000000",
            fontSize: 14,
            marginBottom: 15,
          }}
        >
          {"Insights on the website"}
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#F4F4F4",
            borderColor: "#E0E0E0",
            borderRadius: 10,
            borderWidth: 1,
            paddingVertical: 12,
            paddingHorizontal: 17,
            marginBottom: 16,
          }}
        >
          <TextInput
            style={{
              color: "#828282",
              fontSize: 14,
              marginRight: 4,
              flex: 1,
            }}
            placeholder="Enter URL"
            onChangeText={(text) => setUrl(text)}
            value={url}
          />
          <TouchableOpacity onPress={handleInputSubmit}>
            <Image
              source={searchIcon}
              style={{
                width: 20,
                height: 20,
              }}
            />
          </TouchableOpacity>
        </View>
        
        {resultAvail && (
          <>
            <View
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: 10,
                paddingVertical: 25,
                paddingHorizontal: 16,
                marginBottom: 33,
                shadowColor: "#00000040",
                shadowOpacity: 0.3,
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowRadius: 4,
                elevation: 4,
              }}
            >
              <Text
                style={{
                  color: "#000000",
                  fontSize: 16,
                  fontWeight: 600,
                  marginBottom: 16,
                }}
              >
                {"Result Summary"}
              </Text>
              <Text
                style={{
                  color: "#000000",
                  fontSize: 14,
                  marginBottom: 16,
                }}
              >
                <>
                  <Text style={{ fontWeight: "bold" }}>Status: </Text>
                  <Text>{status}</Text>
                </>
              </Text>
              <Text
                style={{
                  color: "#000000",
                  fontSize: 14,
                }}
              >
                {result && result.ogUrl && (
                  <>
                    <Text style={{ fontWeight: "bold" }}>URL: </Text>
                    <Text>{result.ogUrl}</Text>
                  </>
                )}
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: 10,
                paddingVertical: 25,
                paddingHorizontal: 16,
                marginBottom: 33,
                shadowColor: "#00000040",
                shadowOpacity: 0.3,
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowRadius: 4,
                elevation: 4,
              }}
            >
              <Text
                style={{
                  color: "#000000",
                  fontSize: 16,
                  fontWeight: 600,
                  marginBottom: 18,
                }}
              >
                {"Detailed Information"}
              </Text>
              <Text
                style={{
                  color: "#000000",
                  fontSize: 16,
                  marginBottom: 16,
                  lineHeight: 20,
                }}
              >
                {result && result.ogSiteName && (
                  <>
                    <Text style={{ fontWeight: "bold" }}>Website: </Text>
                    <Text>{result.ogSiteName}</Text>
                    {"\n"}
                  </>
                )}
                {result && result.ogTitle && (
                  <>
                    <Text style={{ fontWeight: "bold" }}>Title: </Text>
                    <Text>{result.ogTitle}</Text>
                    {"\n\n"}
                  </>
                )}
                {result && result.ogDescription && (
                  <>
                    <Text style={{ fontWeight: "bold" }}>Description: </Text>
                    <Text>{result.ogDescription}</Text>
                  </>
                )}
              </Text>

              {result && result.ogImage && (
                <>
                  <Text
                    style={{
                      color: "#000000",
                      fontSize: 16,
                      fontWeight: 600,
                      marginBottom: 16,
                      lineHeight: 20,
                    }}
                  >
                    Image:
                  </Text>
                  <Image
                    source={{ uri: result.ogImage[0].url }}
                    style={{
                      width: "100%",
                      height: 80,
                      resizeMode: "contain",
                      marginVertical: 10,
                    }}
                  />
                </>
              )}
            </View>
            
            
            {/* SSL starts here  */}
   
            <View
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: 10,
                paddingVertical: 23,
                paddingHorizontal: 15,
                marginBottom: 27,
                shadowColor: "#00000040",
                shadowOpacity: 0.3,
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowRadius: 4,
                elevation: 4,
              }}
            >
              <Text
                style={{
                  color: "#000000",
                  fontSize: 16,
                  fontWeight: 600,
                  marginBottom: 18,
                }}
              >
                {"SSL Information"}
              </Text>
              <Text
                style={{
                  color: "#000000",
                  fontSize: 14,
                  marginBottom: 15,
                }}
              >
                {"Website Trust Score: trust rating (85% safe)"}
              </Text>
              
              
              <Text
                style={{
                  color: "#000000",
                  fontSize: 14,
                  marginBottom: 17,
                }}
              >
                {result && result.ogUrl && (
                  <>
                    <Text style={{ fontWeight: "bold" }}>Risk Factors: </Text>
                    <Text>{sslCertificationStatus === null
                    ? 'Awaiting SSL Certification check'
                    : sslCertificationStatus === 'Yes'
                    ? 'Low Risk'
                    : 'High Risk'}</Text>
                  </>
                )}
              </Text>
              
              
              <Text
                style={{
                  color: "#000000",
                  fontSize: 14,
                  marginBottom: 15,
                }}
              >
                {result && result.ogUrl && (
                  <>
                    <Text style={{ fontWeight: "bold" }}>SSL Certificate: </Text>
                    <Text>{sslCertificationStatus === null ? 'Awaiting' : sslCertificationStatus}</Text>
                  </>
                )}
              </Text>
              


              <Text
                style={{
                  color: "#000000",
                  fontSize: 14,
                  width: 285,
                }}
              >
                {"Domain Registration: domain registration date, registrar, and expiration date"}
              </Text>
            
            </View>
          </>
        )}

        {/* Another box */}
        <Text
          style={{
            color: "#000000",
            fontSize: 20,
            fontWeight: 600,
            marginBottom: 17,
          }}
        >
          {"Safety tips"}
        </Text>
        <View
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: 10,
            paddingTop: 24,
            paddingBottom: 35,
            marginBottom: 130,
            paddingHorizontal: 14,
            shadowColor: "#00000040",
            shadowOpacity: 0.3,
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowRadius: 4,
            elevation: 4,
          }}
        >
          <Text
            style={{
              color: "#000000",
              fontSize: 16,
              fontWeight: 600,
              marginBottom: 21,
            }}
          >
            {"Keep yourself safe by:"}
          </Text>
          <Text
            style={{
              color: "#000000",
              fontSize: 14,
              width: 287,
            }}
          >
            {"Avoid entering personal information\n\nReport the website"}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}