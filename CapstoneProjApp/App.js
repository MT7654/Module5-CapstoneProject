import React from "react";
import { Button, View, Text, StyleSheet, TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import { CameraView, Camera } from "expo-camera";
import { useState, useEffect } from "react";

function ScanScreen() {
  // Set component states here
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  // Request for permission to access the user's camera when component loads
  useEffect(() => {
    const getCameraPermissions = async () => {
      //Update the name of the function
      const { status } = await Camera.requestCameraPermissionsAsync(); //Use the Camera instead of the BarCodeScanner
      setHasPermission(status === "granted");
    };

    getCameraPermissions(); //Update the name of the function
  }, []);

  // Bar code scanner handler - displays the data type and its content
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  // Checks component state for camera access permission
  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <CameraView //Change it to CameraView to access your camera
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned} //make sure the event is onBarcodeScanned, not onBarCodeScanned
        style={StyleSheet.absoluteFillObject}
        barcodeScannerSettings={{
          //This property allows you to provide what kinds of barcodes/qr codes it will scan.
          barcodeTypes: ["qr", "pdf417", "code128"],
        }}
      />
      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )}
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Input link" />
      <Button title="Submit" />
      <Button
        title="Start Scanning"
        onPress={() => navigation.navigate("Scan")}
      />
    </View>
  );
}

function InfoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Info Page</Text>
    </View>
  );
}

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Scan" component={ScanScreen} />
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
});
