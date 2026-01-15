import { StatusBar } from "expo-status-bar";
import Home from "./src/screens/home";
import MyDeliveries from "./src/screens/delivery";
import DeliveryTrackingScreen from "./src/screens/help";
import { View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" />
      <Home />
    </View>
  );
}
