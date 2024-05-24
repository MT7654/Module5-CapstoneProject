import { Button, View, Text, StyleSheet } from "react-native";
import { CameraView, Camera } from "expo-camera";
import React, { useContext, useEffect, useState } from "react";
import UrlContext from "./context/UrlContext";
import { useNavigation } from "@react-navigation/native";

export default function Scan() {
  const urlCtx = useContext(UrlContext);
  const { setUrl, handleSubmit } = urlCtx;
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    const getCameraPermissions = async () => {
      //Update the name of the function
      const { status } = await Camera.requestCameraPermissionsAsync(); //Use the Camera instead of the BarCodeScanner
      setHasPermission(status === "granted");
    };

    getCameraPermissions(); //Update the name of the function
  }, []);

  const handleBarCodeScanned = async ({ type, data }) => {
    if (scanned) {
      return;
    }
    setScanned(true);
    const trimmedData = data.trim();
    setUrl(trimmedData); // Optionally update context state
    console.log(trimmedData);

    try {
      await handleSubmit(trimmedData); // Pass the trimmed data directly
      navigation.navigate("Info");
    } catch (error) {
      console.error("Error handling submission:", error);
      Alert.alert("Error", "Failed to submit the scanned URL.");
    } finally {
      setScanned(false); // Reset scanning state
    }
  };

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});
