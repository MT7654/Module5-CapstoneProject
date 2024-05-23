import React, { useState } from "react";
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
import axios from "axios";

export default function Info() {
  const [result, setResult] = useState(null);
  const [url, setUrl] = useState("");

  const handleSubmit = async () => {
    if (url.trim()) {
      try {
        const response = await axios.get(
          "http://10.0.2.2:3000/url?ogUrl=" + url
        );
        setResult(response.data.result);
        // console.log(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    } else {
      Alert.alert("Error", "Please enter a valid URL.");
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
      }}
    >
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
          {result && result.ogSiteName && "Website Name: " + result.ogSiteName}
        </Text>
        <Text
          style={{
            color: "#000000",
            fontSize: 14,
            marginBottom: 15,
          }}
        >
          {result && result.ogTitle && "Website Title: " + result.ogTitle}
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
          <TouchableOpacity onPress={handleSubmit}>
            <Image
              source={searchIcon}
              style={{
                width: 20,
                height: 20,
              }}
            />
          </TouchableOpacity>
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
              marginBottom: 16,
            }}
          >
            {result &&
              result.ogDescription &&
              "Website Description: " + result.ogDescription}
          </Text>
          {result && result.ogImage && (
            <Image
              source={{ uri: result.ogImage[0].url }}
              style={{
                width: "100%",
                height: 80,
                resizeMode: "contain",
                marginVertical: 10,
              }}
            />
          )}
          <Text
            style={{
              color: "#000000",
              fontSize: 14,
              marginBottom: 16,
            }}
          >
            {"Status: 'Safe', 'Warning', or 'Danger'"}
          </Text>
          <Text
            style={{
              color: "#000000",
              fontSize: 14,
            }}
          >
            {result && result.ogUrl && "URL: " + result.ogUrl}
          </Text>
        </View>
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
            {"Detailed Information"}
          </Text>
          <Text
            style={{
              color: "#000000",
              fontSize: 14,
              marginBottom: 15,
            }}
          >
            {"Website Trust Score: trust rating (35% safe)"}
          </Text>
          <Text
            style={{
              color: "#000000",
              fontSize: 14,
              marginBottom: 17,
            }}
          >
            {"Risk Factors: No SSL Certificate"}
          </Text>
          <Text
            style={{
              color: "#000000",
              fontSize: 14,
              marginBottom: 15,
            }}
          >
            {"SSL Certificate: SSL certificate status"}
          </Text>
          <Text
            style={{
              color: "#000000",
              fontSize: 14,
              width: 285,
            }}
          >
            {
              "Domain Registration: domain registration date, registrar, and expiration date"
            }
          </Text>
        </View>
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
            {"Keep yourself safe"}
          </Text>
          <Text
            style={{
              color: "#000000",
              fontSize: 14,
              width: 287,
            }}
          >
            {"Avoid entering personal information\nReport the website"}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
