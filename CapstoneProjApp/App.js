import Home from "./Home";
import Info from "./Info";
import Scan from "./Scan";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

function InfoScreen() {
  return <Info />;

}
function ScanScreen({ navigation }) {
  return <Scan />;
}

function HomeScreen() {
  return (
    <Home />
    // <View style={styles.container}>
    //   <TextInput
    //     style={styles.input}
    //     placeholder="Input link"
    //     onChangeText={setUrl}
    //     value={url}
    //   />
    //   <Button title="Submit" onPress={handleSubmit} />
    //   <Button
    //     title="Start Scanning"
    //     onPress={() => navigation.navigate("Scan")}
    //   />
    // </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Scan") {
              iconName = focused ? "scan" : "scan-outline";
            } else if (route.name === "Info") {
              iconName = focused
                ? "information-circle"
                : "information-circle-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#2D81FF",
          tabBarInactiveTintColor: "black",
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Scan" component={ScanScreen} />
        <Tab.Screen name="Info" component={InfoScreen} />
        {/* {url && <Tab.Screen name="Info" component={InfoScreen} />} */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
