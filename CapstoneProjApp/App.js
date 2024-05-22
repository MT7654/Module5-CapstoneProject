import React from "react";
import { Button, View, Text, StyleSheet, TextInput, Alert } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Camera } from "expo-camera";
import { useState, useEffect } from "react";

const API_KEY = "API KEY";

const checkUrlSafety = async (url, navigation) => {
  console.log(`Checking safety for URL: ${url}`);
  try {
    const response = await fetch(
      `https://safebrowsing.googleapis.com/v4/threatMatches:find?key=${API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          client: {
            clientId: "yourcompanyname",
            clientVersion: "1.5.2",
          },
          threatInfo: {
            threatTypes: ["MALWARE", "SOCIAL_ENGINEERING"],
            platformTypes: ["ANY_PLATFORM"],
            threatEntryTypes: ["URL"],
            threatEntries: [{ url }],
          },
        }),
      }
    );

    const result = await response.json();
    console.log("Google Safe Browsing API result:", result);

    if (result.matches && result.matches.length > 0) {
      Alert.alert("Warning", "The URL is unsafe!");
      navigation.navigate("Info", { url, safe: false });
    } else {
      Alert.alert("Safe", "The URL is safe to visit.");
      navigation.navigate("Info", { url, safe: true });
    }
  } catch (error) {
    console.error("Error checking URL safety:", error);
    Alert.alert("Error", "There was an error checking the URL.");
  }
};

function ScanScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    };
    getCameraPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    checkUrlSafety(data, navigation);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <Camera
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )}
    </View>
  );
}

function HomeScreen({ navigation }) {
  const [url, setUrl] = useState("");

  const handleSubmit = () => {
    if (url.trim()) {
      checkUrlSafety(url, navigation);
    } else {
      Alert.alert("Error", "Please enter a valid URL.");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Input link"
        onChangeText={setUrl}
        value={url}
      />
      <Button title="Submit" onPress={handleSubmit} />
      <Button
        title="Start Scanning"
        onPress={() => navigation.navigate("Scan")}
      />
    </View>
  );
}

function InfoScreen({ route }) {
  const { url, safe } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Info Page</Text>
      {url && <Text style={styles.url}>{url}</Text>}
      {safe !== undefined && (
        <Text style={[styles.status, { color: safe ? "green" : "red" }]}>
          {safe ? "The URL is safe." : "The URL is unsafe."}
        </Text>
      )}
    </View>
  );
}

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Scan" component={ScanScreen} />
      <HomeStack.Screen name="Info" component={InfoScreen} />
    </HomeStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "HomeStack") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Info") {
              iconName = focused
                ? "information-circle"
                : "information-circle-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="HomeStack" component={HomeStackScreen} />
        <Tab.Screen name="Info" component={InfoScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
  },
  input: {
    height: 40,
    margin: 12,
    width: 200,
    borderWidth: 1,
    padding: 10,
  },
  url: {
    marginTop: 20,
    fontSize: 16,
    color: "blue",
  },
  status: {
    marginTop: 20,
    fontSize: 16,
  },
});
