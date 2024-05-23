import { Button, View, Text, StyleSheet } from "react-native";
import { CameraView, Camera } from "expo-camera";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function Scan() {
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

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    // checkUrlSafety(data, navigation);
    navigation.navigate("Info", { data });
    console.log("in scan" + data);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <CameraView
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
        barcodeScannerSettings={{
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
