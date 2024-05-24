import React from "react";
import {
  SafeAreaView,
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import scanImage from "./assets/scan-asset.jpg";
import infoIcon from "./assets/fluent--info-16-filled.png";
import cameraIcon from "./assets/tabler--camera-filled.png";
import shieldIcon from "./assets/mingcute--shield-fill.png";
export default function Home() {
  const navigation = useNavigation();
  const handleSearch = () => {
    navigation.navigate("Scan");
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
          paddingBottom: 69,
        }}
      >
        <Text
          style={{
            color: "#000000",
            fontSize: 30,
            fontWeight: 600,
            marginBottom: 3,
            marginLeft: 43,
          }}
        >
          {"ScamDetect"}
        </Text>
        <Text
          style={{
            color: "#000000",
            fontSize: 14,
            marginBottom: 21,
            marginLeft: 42,
          }}
        >
          {"Your trusted app for scam detection"}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "#FFFFFF",
            borderRadius: 10,
            paddingLeft: 18,
            marginBottom: 39,
            marginHorizontal: 39,
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
          <View
            style={{
              width: 143,
              alignSelf: "flex-start",
              marginTop: 26,
            }}
          >
            <Text
              style={{
                color: "#000000",
                fontSize: 16,
                fontWeight: 600,
                marginBottom: 15,
                marginLeft: 1,
              }}
            >
              {"Check for scam"}
            </Text>
            <Text
              style={{
                color: "#000000",
                fontSize: 14,
                marginBottom: 22,
                width: 143,
              }}
            >
              {
                "Use our scanner or \nURL checker functions \nto detect for scams "
              }
            </Text>
            <View style={styles.container}>
              <TouchableOpacity style={styles.button} onPress={handleSearch}>
                <Text style={styles.buttonText}>Get started</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Image
            source={scanImage}
            style={{
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
              width: 133,
              height: 195,
            }}
          />
        </View>
        <Text
          style={{
            color: "#000000",
            fontSize: 20,
            fontWeight: 600,
            marginBottom: 15,
            marginLeft: 42,
          }}
        >
          {"How to use"}
        </Text>
        <View
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: 10,
            paddingVertical: 27,
            paddingHorizontal: 16,
            marginBottom: 37,
            marginHorizontal: 40,
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
              marginBottom: 15,
            }}
          >
            {"Follow the steps below"}
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 16,
            }}
          >
            <Image
              source={cameraIcon}
              // resizeMode={"stretch"}
              style={{
                width: 24,
                height: 24,
                marginRight: 16,
              }}
            />
            <Text
              style={{
                color: "#000000",
                fontSize: 12,
                flex: 1,
              }}
            >
              {"Navigate to the “Scan” tab"}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 17,
            }}
          >
            <Image
              source={shieldIcon}
              // resizeMode={"stretch"}
              style={{
                width: 24,
                height: 24,
                marginRight: 16,
              }}
            />
            <Text
              style={{
                color: "#000000",
                fontSize: 12,
                flex: 1,
              }}
            >
              {
                "Use the camera to scan a QR code or insert URL directly in the “Info” tab"
              }
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={infoIcon}
              resizeMode={"stretch"}
              style={{
                width: 24,
                height: 24,
                marginRight: 16,
              }}
            />
            <Text
              style={{
                color: "#000000",
                fontSize: 12,
                flex: 1,
              }}
            >
              {"View the safety information for the scanned URL"}
            </Text>
          </View>
        </View>
        <Text
          style={{
            color: "#000000",
            fontSize: 20,
            fontWeight: 600,
            marginBottom: 16,
            marginLeft: 41,
          }}
        >
          {"Safety tips"}
        </Text>
        <View
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: 10,
            paddingVertical: 24,
            paddingHorizontal: 15,
            marginBottom: 130,
            marginHorizontal: 40,
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
            {"Keep yourself safe"}
          </Text>
          <Text
            style={{
              color: "#000000",
              fontSize: 12,
              width: 283,
              lineHeight: 16,
            }}
          >
            {
              "Always check the URL before entering personal information\n\nLook for HTTPS in the web address"
            }
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 40,
    alignItems: "center",
  },
  button: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2D81FF",
    borderRadius: 8,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
});
