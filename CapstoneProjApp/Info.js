import React from "react";
import { SafeAreaView, View, ScrollView, Text, Image } from "react-native";
import searchIcon from "./assets/majesticons--search-line.png";

export default function Info() {
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
          <Text
            style={{
              color: "#828282",
              fontSize: 14,
              marginRight: 4,
              flex: 1,
            }}
          >
            {"Input URL link"}
          </Text>
          <Image
            source={searchIcon}
            style={{
              width: 20,
              height: 20,
            }}
          />
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
            {"Result Summary"}
          </Text>
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
            {"URL: https://www.facebook.com"}
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
