import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import axios from "axios";

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Page</Text>
    </View>
  );
}

function InfoScreen() {
  const [result, setResult] = useState(null);

  // set url as https://github.com/ for test for now
  const callApi = async () => {
    try {
      const response = await axios.get(
        "http://10.0.2.2:3000/url?ogUrl=https://github.com/"
      );
      setResult(response.data.result);
      // console.log(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Open Graph Data</Text>
      {result && result.ogTitle && (
        <Text style={styles.text}>{result.ogTitle}</Text>
      )}
      {result && result.ogImage && (
        <Image source={{ uri: result.ogImage[0].url }} style={styles.image} />
      )}
      {result && result.ogSiteName && (
        <Text style={styles.text}>{result.ogSiteName}</Text>
      )}
      {result && result.ogDescription && (
        <Text style={styles.text}>{result.ogDescription}</Text>
      )}
    </ScrollView>
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
            if (route.name === "Home") {
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
        <Tab.Screen name="Home" component={HomeScreen} />
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
    padding: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginVertical: 10,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    marginVertical: 10,
  },
});
