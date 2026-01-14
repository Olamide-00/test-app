import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Btn from "./src/components/common/customBtn";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Btn label="Sign In" loading disabled />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
